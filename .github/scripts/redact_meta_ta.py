import fitz
from pathlib import Path

pdf_path = Path("assets/docs/Meta_Analysis_Academy_TA_Certificate.pdf")
thumb_path = Path("assets/thumbs/Meta_Analysis_Academy_TA_Certificate.webp")

doc = fitz.open(pdf_path)
page = doc[0]

# Redact the handwritten signature while retaining the printed supervisor name/title.
name_hits = page.search_for("Rhanderson Cardoso")
if not name_hits:
    raise RuntimeError("Could not locate supervisor name for signature redaction")
name_rect = name_hits[0]
sig_rect = fitz.Rect(
    max(page.rect.x0, name_rect.x0 - 35),
    max(page.rect.y0, name_rect.y0 - 58),
    min(page.rect.x1, name_rect.x1 + 55),
    max(page.rect.y0, name_rect.y0 - 3),
)
page.add_redact_annot(sig_rect, fill=(1, 1, 1))

# Redact the organization's tax identifier line (CNPJ), leaving the organization name visible.
cnpj_hits = page.search_for("CNPJ")
for rect in cnpj_hits:
    cnpj_rect = fitz.Rect(
        max(page.rect.x0, rect.x0 - 8),
        max(page.rect.y0, rect.y0 - 3),
        min(page.rect.x1, rect.x1 + 170),
        min(page.rect.y1, rect.y1 + 5),
    )
    page.add_redact_annot(cnpj_rect, fill=(1, 1, 1))

page.apply_redactions(images=fitz.PDF_REDACT_IMAGE_PIXELS)

# Save over the public copy so existing website links stay valid.
tmp_pdf = pdf_path.with_name(pdf_path.stem + "_tmp.pdf")
doc.save(tmp_pdf, garbage=4, deflate=True, clean=True)
doc.close()
tmp_pdf.replace(pdf_path)

# Regenerate a redacted thumbnail from the redacted PDF.
redacted = fitz.open(pdf_path)
pix = redacted[0].get_pixmap(matrix=fitz.Matrix(1.6, 1.6), alpha=False)
pix.save(str(thumb_path))
redacted.close()

print("Redacted signature and CNPJ; regenerated public thumbnail.")
