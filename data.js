const SITE_DATA = {
  profile: {
    name: "Mahmoud Einieh",
    title: "Dr. Mahmoud Einieh, MD",
    tagline: "Cardiovascular Research · Advanced Imaging · Evidence Synthesis",
    summary: "Medical doctor and clinical researcher with a cardiovascular focus spanning coronary physiology, imaging and AI, cardio-nephrology, genetics, and evidence synthesis. Experienced across international clinical rotations, original patient-level research, systematic reviews, teaching, and academic leadership.",
    location: "Debrecen, Hungary",
    email: "mahwisam2003@gmail.com",
    linkedin: "https://www.linkedin.com/in/mahmoud-einieh-74691428a",
    orcid: "https://orcid.org/0009-0002-4240-9376",
    orcidId: "0009-0002-4240-9376",
    cv: "assets/docs/Mahmoud_Einieh_Public_CV.pdf"
  },

  metrics: [
    { value: 8, suffix: "", label: "Research projects" },
    { value: 3, suffix: "", label: "Peer-reviewed publications" },
    { value: 8, suffix: "", label: "International clinical placements" },
    { value: 6, suffix: "", label: "Selected awards & congress highlights" }
  ],

  research: [
    {
      id: "avf",
      featured: true,
      title: "AV fistula ligation & reverse cardiovascular remodeling",
      domain: "Cardio-nephrology",
      type: "Systematic review & meta-analysis",
      status: "Published · First author",
      venue: "The Journal of Vascular Access",
      year: "2026",
      summary: "A clinically driven meta-analysis examining haemodynamic and echocardiographic changes after arteriovenous fistula ligation in chronic kidney disease.",
      metrics: [
        { value: "12", label: "studies" },
        { value: "844", label: "patients" },
        { value: "−10.92 g/m²", label: "LV mass index" },
        { value: "−0.56 L/min/m²", label: "cardiac index" }
      ],
      role: "Study design · systematic search · data extraction · quantitative synthesis · manuscript writing · presentation",
      detail: "AVF ligation was associated with favorable cardiac remodeling, including lower left ventricular mass index and cardiac index, without apparent deterioration in renal function. The work progressed from evidence synthesis to ESC Congress 2025 presentation and peer-reviewed publication.",
      tags: ["Cardiology", "Nephrology", "Meta-analysis", "Echocardiography"],
      links: [
        { label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/42083154/" },
        { label: "DOI", url: "https://doi.org/10.1177/11297298261441029" },
        { label: "ESC 365", url: "https://esc365.escardio.org/presentation/309528?resource=abstract" }
      ]
    },
    {
      id: "circrna",
      featured: false,
      title: "Circular RNAs in diabetic cardiovascular complications",
      domain: "Molecular cardiology",
      type: "Narrative review",
      status: "Published · Co-author",
      venue: "Endocrinology, Diabetes & Metabolism",
      year: "2026",
      summary: "Review of circRNAs as biomarkers and therapeutic targets across diabetic cardiomyopathy, endothelial dysfunction, vascular inflammation, fibrosis, and oxidative stress.",
      metrics: [],
      role: "Co-author · scientific review and manuscript refinement",
      detail: "Published in Endocrinology, Diabetes & Metabolism. The review explores biomarker potential, liquid-biopsy applications, and emerging RNA-based therapeutic strategies.",
      tags: ["Cardiology", "Molecular medicine", "Biomarkers", "Diabetes"],
      links: [{ label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41405560/" }, { label: "DOI", url: "https://doi.org/10.1002/edm2.70149" }]
    },
    {
      id: "spect-ai",
      featured: true,
      title: "Whole-body bone SPECT + AI-synthetic CT",
      domain: "Nuclear medicine + AI",
      type: "Original patient-level imaging research",
      status: "Submitted · First / corresponding author",
      venue: "Original imaging manuscript · EANM 2025",
      year: "2025–2026",
      summary: "Evaluation of extra-regional skeletal uptake in non-oncologic imaging, integrating whole-body SPECT with AI-generated synthetic CT for anatomical localization.",
      metrics: [
        { value: "126", label: "complete imaging / follow-up" },
        { value: "56.6%", label: "extra-regional uptake" },
        { value: "91.9%", label: "orthopaedic sensitivity" },
        { value: "83.3%", label: "orthopaedic specificity" }
      ],
      role: "Data organization · statistics · interpretation · manuscript drafting · conference presentation",
      detail: "The work demonstrates original patient-level research alongside diagnostic-accuracy methods and AI-assisted anatomical localization. Presented at EANM Congress 2025 in Barcelona.",
      tags: ["Nuclear medicine", "SPECT/CT", "Artificial intelligence", "Diagnostic accuracy"],
      links: [
        { label: "University research portal", url: "https://tudoster.unideb.hu/en/publikacio/BIBFORM134396" },
        { label: "EANM programme", url: "https://eanm25.eanm.org/wp-content/uploads/2025/09/EANM25_Final_Programme.pdf" }
      ]
    },
    {
      id: "bone-spect",
      featured: false,
      title: "The role of bone SPECT/CT in non-oncological indications",
      domain: "Nuclear medicine",
      type: "Original diagnostic-accuracy research",
      status: "Completed · First author",
      venue: "University of Debrecen · TDK / MONT",
      year: "2025",
      summary: "Multiphase bone SPECT/CT across orthopaedic, hip, knee, neurosurgical, and rheumatologic indications.",
      metrics: [{ value: "3rd", label: "TDK 2025" }],
      role: "Imaging interpretation · reference-standard comparison · diagnostic accuracy · clinical-radiological correlation",
      detail: "Presented locally at the University of Debrecen TDK Conference and nationally at the Hevesy György / MONT scientific meeting.",
      tags: ["Nuclear medicine", "SPECT/CT", "Original research"],
      credential: "assets/docs/TDK_2025_Third_Prize_Redacted.pdf",
      links: []
    },
    {
      id: "rituximab",
      featured: false,
      title: "Rituximab in immune-mediated glomerular disease",
      domain: "Nephrology",
      type: "MD thesis · Retrospective clinical cohort",
      status: "Completed · First author",
      venue: "MD thesis · University of Debrecen",
      year: "2026",
      summary: "Seven-year real-world cohort evaluating efficacy and safety of rituximab in membranous nephropathy and podocytopathies.",
      metrics: [
        { value: "34", label: "patients" },
        { value: "27", label: "membranous nephropathy" },
        { value: "~24%", label: "complete remission · MN" },
        { value: "~57%", label: "complete remission · podocytopathies" }
      ],
      role: "Clinical chart review · outcome definitions · safety adjudication · longitudinal interpretation · thesis writing",
      detail: "The project integrated biochemical, immunological, and renal outcomes with treatment safety in a heterogeneous immune-mediated kidney disease cohort. Awarded 3rd place at TDK 2026.",
      tags: ["Nephrology", "Rituximab", "Clinical cohort", "MD thesis"],
      credential: "assets/docs/TDK_2026_Third_Prize_Redacted.pdf",
      links: [{ label: "University thesis record", url: "https://hdl.handle.net/2437/414170" }]
    },
    {
      id: "hlh",
      featured: false,
      title: "18F-FDG PET/CT in hemophagocytic lymphohistiocytosis",
      domain: "Hematology imaging",
      type: "Diagnostic-accuracy evidence synthesis",
      status: "Conference research",
      venue: "European Hematology Association 2026",
      year: "2026",
      summary: "Evidence synthesis evaluating the diagnostic role of 18F-FDG PET/CT in HLH, with conference dissemination through the European Hematology Association research programme.",
      metrics: [],
      role: "Systematic review · extraction of diagnostic performance · imaging-focused synthesis",
      detail: "Extends the portfolio into hematology-focused functional imaging while using the same diagnostic-accuracy and evidence-synthesis toolkit.",
      tags: ["Hematology", "PET/CT", "Diagnostic accuracy", "Evidence synthesis"],
      links: []
    },
    {
      id: "bmt",
      featured: false,
      title: "Clinical vs autopsy findings after allogeneic bone marrow transplantation",
      domain: "Pathology / hematology",
      type: "Clinicopathological cohort",
      status: "Ongoing",
      year: "2026",
      summary: "Clinicopathological correlation comparing premortem documentation with post-mortem autopsy findings in allogeneic bone marrow transplant recipients.",
      metrics: [],
      role: "Clinical-pathological correlation · dataset development · interpretation",
      detail: "Focuses on diagnostic discordance, missed pathology, and the continuing value of autopsy in complex hematology care.",
      tags: ["Pathology", "Hematology", "Autopsy", "Clinical cohort"],
      links: []
    },
    {
      id: "mpn",
      featured: false,
      title: "Mitochondrial dysfunction in myeloproliferative neoplasms",
      domain: "Hematology / molecular medicine",
      type: "Narrative review",
      status: "Published · Co-author",
      venue: "Annals of Medicine & Surgery",
      year: "2025",
      summary: "Review of mitochondrial dysfunction as a driver of MPN biology and a potential precision-medicine therapeutic target.",
      metrics: [],
      role: "Collaborative review and manuscript development",
      detail: "Published in Annals of Medicine & Surgery, covering altered metabolism, oxidative stress, mitophagy, precision medicine, RNA-based therapy, and AI-enabled drug discovery.",
      tags: ["Hematology", "Mitochondria", "Precision medicine", "Molecular medicine"],
      links: [{ label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/40901187/" }, { label: "DOI", url: "https://doi.org/10.1097/MS9.0000000000003365" }]
    }
  ],

  clinical: [
    {
      id: "porto-neonatology",
      specialty: "Neonatology",
      institution: "Hospital São João",
      location: "Porto, Portugal",
      date: "July 2026",
      duration: "1 month · IFMSA SCOPE",
      supervisor: "Dr. Joana Nunes",
      detail: "Clinical exposure to prematurity, neonatal sepsis, necrotizing enterocolitis, intraventricular hemorrhage, and neonatal/perinatal ward-based care.",
      credential: "assets/docs/IFMSA_Neonatology_Porto_2026_Redacted.pdf",
      credentialLabel: "View redacted credential"
    },
    {
      id: "siegen-surgery",
      specialty: "General & Visceral Surgery",
      institution: "Diakonie Klinikum Jung-Stilling",
      location: "Siegen, Germany",
      date: "November 2025",
      duration: "4 weeks",
      supervisor: "Prof. Dr. Golriz",
      detail: "Ward rounds, case discussions, perioperative management, operative observation, and broad exposure to general and visceral surgical care.",
      privateDoc: "Recommendation letter available on request"
    },
    {
      id: "swansea-gastro",
      specialty: "Gastroenterology",
      institution: "Morriston Hospital · NHS Wales",
      location: "Swansea, United Kingdom",
      date: "September 2025",
      duration: "4 weeks",
      supervisor: "Dr. Jagadish Nagaraj",
      detail: "Exposure to acute and chronic gastroenterology, inpatient care, diagnostic reasoning, and endoscopic procedures."
    },
    {
      id: "tunis-pulmonology",
      specialty: "Pulmonology",
      institution: "La Rabta Hospital",
      location: "Tunis, Tunisia",
      date: "August 2025",
      duration: "4 weeks · IFMSA SCOPE",
      supervisor: "Dr. Besma Dhahri",
      detail: "Respiratory medicine attachment with procedural exposure, report writing, oncology and tuberculosis cases, imaging discussion, and inpatient/outpatient care.",
      credential: "assets/docs/IFMSA_Pulmonology_Tunis_2025_Redacted.pdf",
      credentialLabel: "View redacted credential",
      privateDoc: "Recommendation letter available on request"
    },
    {
      id: "catania-cardio",
      specialty: "Cardiology",
      institution: "A.O.U. Policlinico G. Rodolico",
      location: "Catania, Italy",
      date: "August 2024",
      duration: "1 month · IFMSA SCOPE",
      supervisor: "Prof. Davide Capodanno",
      detail: "Electrophysiology exposure including EP studies and ablations for Wolff–Parkinson–White syndrome and AVNRT in an international clinical environment.",
      credential: "assets/docs/IFMSA_Cardiology_Catania_2024_Redacted.pdf",
      credentialLabel: "View redacted credential"
    },
    {
      id: "stgeorges-cardio",
      specialty: "Cardiology",
      institution: "St George’s University Hospital",
      location: "London, United Kingdom",
      date: "June–July 2024",
      duration: "2 weeks",
      supervisor: "Dr. Faisal Khan",
      detail: "Observed TAVI, PCI, catheter ablation, and pacing-clinic work, with emphasis on interventional and structural cardiology."
    },
    {
      id: "ahd-cardio",
      specialty: "Cardiology",
      institution: "American Hospital Dubai",
      location: "Dubai, United Arab Emirates",
      date: "January–February 2024",
      duration: "Observership",
      supervisor: "Dr. Mohammad Zaidan",
      detail: "Interventional cardiology observership with exposure to advanced cardiology workflows and catheter-lab practice.",
      credential: "assets/docs/American_Hospital_Dubai_Cardiology_2024_Redacted.pdf",
      credentialLabel: "View redacted credential"
    },
    {
      id: "debrecen-clinical",
      specialty: "Multi-specialty clinical rotations",
      institution: "University of Debrecen",
      location: "Debrecen, Hungary",
      date: "2023–2026",
      duration: "Longitudinal medical training",
      supervisor: "Faculty clinical departments",
      detail: "Clinical rotations across cardiology, nephrology, endocrinology, gastroenterology, hematology, neurology, pulmonology, pediatrics, emergency medicine, obstetrics and gynecology, and other core specialties."
    },
    {
      id: "ahd-nephrology",
      specialty: "Nephrology",
      institution: "American Hospital Dubai",
      location: "Dubai, United Arab Emirates",
      date: "February 2023",
      duration: "Observership",
      supervisor: "Dr. Viorica Khalil",
      detail: "Exposure to dialysis management, laboratory interpretation, patient evaluation, and post-TPN care."
    }
  ],

  awards: [
    {
      title: "2nd Place · MedCup 2024",
      detail: "International Medical Students’ Championship, Brussels. University of Debrecen team finished second among a field of 100 teams from 50 universities in 25 countries.",
      year: "2024",
      source: "https://hirek.unideb.hu/en/international-success-debrecen-medical-students"
    },
    {
      title: "3rd Place · TDK Conference 2025",
      detail: "First-author bone SPECT/CT research in the Traumatology, Orthopedics & Neurosurgery session.",
      year: "2025",
      credential: "assets/docs/TDK_2025_Third_Prize_Redacted.pdf"
    },
    {
      title: "ESC Congress 2025 · Presenter",
      detail: "Presented first-author AVF ligation meta-analysis in Madrid in the Chronic Heart Failure: Clinical and Comorbidities session.",
      year: "2025",
      source: "https://esc365.escardio.org/presentation/309528?resource=abstract"
    },
    {
      title: "EANM Congress 2025 · Presenter",
      detail: "Presented Whole-Body Bone SPECT and AI-Synthetic CT research at EANM 2025 in Barcelona.",
      year: "2025",
      source: "https://tudoster.unideb.hu/en/publikacio/BIBFORM134396"
    },
    {
      title: "3rd Place · TDK Conference 2026",
      detail: "First-author rituximab / nephrotic syndrome research in Endocrinology and Nephrology.",
      year: "2026",
      credential: "assets/docs/TDK_2026_Third_Prize_Redacted.pdf"
    },
    {
      title: "1st Place · Arthroscopic Simulator Station",
      detail: "University of Debrecen Surgery Club student skills competition.",
      year: "2025",
      source: "https://hirek.unideb.hu/sikeresen-zarult-hallgatoi-skill-verseny"
    }
  ],

  teaching: [
    {
      role: "Founder & President",
      organization: "The Lub Dub Club · University of Debrecen",
      date: "2024–2026",
      detail: "Founded and organized weekly cardiology workshops using the Mentice VIST simulator with faculty collaboration, linking procedural simulation with clinical cardiology teaching."
    },
    {
      role: "Teaching Assistant",
      organization: "Meta-Analysis Academy",
      date: "Feb–Jun 2025",
      detail: "Reviewed and corrected 120+ research exercises, providing methodological feedback in systematic review and meta-analysis training.",
      credential: "assets/docs/Meta_Analysis_Academy_TA_Certificate.pdf"
    },
    {
      role: "Pathology Teaching Assistant",
      organization: "University of Debrecen",
      date: "2023–2024",
      detail: "Assisted in third-year autopsy teaching over three semesters, supporting dissection technique, practical instruction, and laboratory safety."
    },
    {
      role: "Local Officer of International Students",
      organization: "Medical Students’ Association of Debrecen / IFMSA",
      date: "2025–2026",
      detail: "Led a team focused on international student opportunities, exchanges, capacity building, and expert-led educational events."
    }
  ],


  credentials: [
    {
      title: "Cardiology Observership",
      issuer: "American Hospital Dubai",
      year: "2024",
      doc: "assets/docs/American_Hospital_Dubai_Cardiology_2024_Redacted.pdf",
      thumb: "assets/thumbs/American_Hospital_Dubai_Cardiology_2024_Redacted.webp",
      note: "Public-safe copy"
    },
    {
      title: "Cardiology Professional Exchange",
      issuer: "IFMSA SCOPE · Catania",
      year: "2024",
      doc: "assets/docs/IFMSA_Cardiology_Catania_2024_Redacted.pdf",
      thumb: "assets/thumbs/IFMSA_Cardiology_Catania_2024_Redacted.webp",
      note: "Public-safe copy"
    },
    {
      title: "Pulmonology Professional Exchange",
      issuer: "IFMSA SCOPE · Tunis",
      year: "2025",
      doc: "assets/docs/IFMSA_Pulmonology_Tunis_2025_Redacted.pdf",
      thumb: "assets/thumbs/IFMSA_Pulmonology_Tunis_2025_Redacted.webp",
      note: "Public-safe copy"
    },
    {
      title: "Neonatology Professional Exchange",
      issuer: "IFMSA SCOPE · Porto",
      year: "2026",
      doc: "assets/docs/IFMSA_Neonatology_Porto_2026_Redacted.pdf",
      thumb: "assets/thumbs/IFMSA_Neonatology_Porto_2026_Redacted.webp",
      note: "Public-safe copy"
    },
    {
      title: "TDK Conference · Third Prize",
      issuer: "University of Debrecen",
      year: "2025",
      doc: "assets/docs/TDK_2025_Third_Prize_Redacted.pdf",
      thumb: "assets/thumbs/TDK_2025_Third_Prize_Redacted.webp",
      note: "Scientific presentation"
    },
    {
      title: "TDK Conference · Third Prize",
      issuer: "University of Debrecen",
      year: "2026",
      doc: "assets/docs/TDK_2026_Third_Prize_Redacted.pdf",
      thumb: "assets/thumbs/TDK_2026_Third_Prize_Redacted.webp",
      note: "Scientific presentation"
    },
    {
      title: "Meta-Analysis Academy",
      issuer: "Certificate of Completion",
      year: "2024",
      doc: "assets/docs/Meta_Analysis_Academy_Completion_Redacted.pdf",
      thumb: "assets/thumbs/Meta_Analysis_Academy_Completion_Redacted.webp",
      note: "Methods training"
    },
    {
      title: "Teaching Assistant",
      issuer: "Meta-Analysis Academy",
      year: "2025",
      doc: "assets/docs/Meta_Analysis_Academy_TA_Certificate.pdf",
      thumb: "assets/thumbs/Meta_Analysis_Academy_TA_Certificate.webp",
      note: "80-hour teaching-assistant appointment"
    }
  ],

  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "C2" },
    { language: "Hungarian", level: "B1–B2" },
    { language: "German", level: "B1" }
  ],

  sources: [
    { label: "PubMed · AVF meta-analysis", url: "https://pubmed.ncbi.nlm.nih.gov/42083154/" },
    { label: "PubMed · circRNA review", url: "https://pubmed.ncbi.nlm.nih.gov/41405560/" },
    { label: "PubMed · MPN review", url: "https://pubmed.ncbi.nlm.nih.gov/40901187/" },
    { label: "ORCID", url: "https://orcid.org/0009-0002-4240-9376" },
    { label: "University of Debrecen · MedCup", url: "https://hirek.unideb.hu/en/international-success-debrecen-medical-students" },
    { label: "ESC 365", url: "https://esc365.escardio.org/presentation/309528?resource=abstract" },
    { label: "University of Debrecen Research Portal", url: "https://tudoster.unideb.hu/en/publikacio/BIBFORM134396" }
  ]
};
