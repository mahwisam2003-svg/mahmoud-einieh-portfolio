const SITE_DATA = {
  profile: {
    name: "Mahmoud Einieh",
    title: "Dr. Mahmoud Einieh, MD",
    tagline: "Cardiovascular Research · Advanced Imaging · Evidence Synthesis",
    summary: "Medical doctor and clinical researcher focused on cardiovascular medicine, imaging, AI, and evidence synthesis.",
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
      imageKey: "escPoster",
      title: "AV fistula ligation & reverse cardiovascular remodeling",
      domain: "Cardio-nephrology",
      type: "Systematic review & meta-analysis",
      status: "Published · First author",
      venue: "The Journal of Vascular Access",
      year: "2026",
      summary: "Meta-analysis of cardiovascular changes after AV fistula ligation in chronic kidney disease.",
      metrics: [
        { value: "12", label: "studies" },
        { value: "844", label: "patients" },
        { value: "−10.92 g/m²", label: "LV mass index" },
        { value: "−0.56 L/min/m²", label: "cardiac index" }
      ],
      role: "Study design · analysis · manuscript · presentation",
      detail: "AVF ligation was associated with favorable cardiac remodeling. Presented at ESC Congress 2025 and later published.",
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
      summary: "Review of circRNAs as cardiovascular biomarkers and therapeutic targets in diabetes.",
      metrics: [],
      role: "Co-author · literature review · manuscript",
      detail: "Published review covering biomarkers, liquid biopsy, and RNA-based therapies.",
      tags: ["Cardiology", "Molecular medicine", "Biomarkers", "Diabetes"],
      links: [{ label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41405560/" }, { label: "DOI", url: "https://doi.org/10.1002/edm2.70149" }]
    },
    {
      id: "spect-ai",
      featured: true,
      imageKey: "eanmBarcelona",
      title: "Whole-body bone SPECT + AI-synthetic CT",
      domain: "Nuclear medicine + AI",
      type: "Original patient-level imaging research",
      status: "Submitted · First / corresponding author",
      venue: "Original imaging manuscript · EANM 2025",
      year: "2025–2026",
      summary: "Original imaging study combining whole-body SPECT with AI-generated synthetic CT.",
      metrics: [
        { value: "126", label: "complete imaging / follow-up" },
        { value: "56.6%", label: "extra-regional uptake" },
        { value: "91.9%", label: "orthopaedic sensitivity" },
        { value: "83.3%", label: "orthopaedic specificity" }
      ],
      role: "Data · statistics · manuscript · presentation",
      detail: "Patient-level diagnostic imaging research presented at EANM Congress 2025 in Barcelona.",
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
      summary: "Diagnostic-accuracy study of bone SPECT/CT in non-oncological indications.",
      metrics: [{ value: "3rd", label: "TDK 2025" }],
      role: "Imaging review · diagnostic accuracy · clinical correlation",
      detail: "Presented at the University of Debrecen TDK and the national MONT meeting.",
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
      summary: "Seven-year real-world cohort of rituximab in immune-mediated glomerular disease.",
      metrics: [
        { value: "34", label: "patients" },
        { value: "27", label: "membranous nephropathy" },
        { value: "~24%", label: "complete remission · MN" },
        { value: "~57%", label: "complete remission · podocytopathies" }
      ],
      role: "Chart review · outcomes · safety · thesis",
      detail: "MD thesis combining renal outcomes and treatment safety. Awarded 3rd place at TDK 2026.",
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
      summary: "Evidence synthesis on the diagnostic role of 18F-FDG PET/CT in HLH.",
      metrics: [],
      role: "Systematic review · diagnostic performance",
      detail: "Hematology-focused functional imaging and diagnostic-accuracy research.",
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
      summary: "Clinicopathological comparison of premortem and autopsy findings after allogeneic BMT.",
      metrics: [],
      role: "Dataset · clinicopathological correlation",
      detail: "Examines diagnostic discordance and findings identified only at autopsy.",
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
      summary: "Review of mitochondrial dysfunction and therapeutic targets in myeloproliferative neoplasms.",
      metrics: [],
      role: "Co-author · literature review · manuscript",
      detail: "Published review of metabolism, oxidative stress, mitophagy, and precision therapies.",
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
      detail: "Neonatal and perinatal ward experience, including prematurity and neonatal sepsis.",
      credential: "assets/docs/IFMSA_Neonatology_Porto_2026_Redacted.pdf",
      credentialLabel: "View supporting document*"
    },
    {
      id: "siegen-surgery",
      specialty: "General & Visceral Surgery",
      institution: "Diakonie Klinikum Jung-Stilling",
      location: "Siegen, Germany",
      date: "November 2025",
      duration: "4 weeks",
      supervisor: "Prof. Dr. Golriz",
      detail: "Ward rounds, perioperative care, and operative observation in general and visceral surgery.",
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
      detail: "Inpatient gastroenterology, diagnostic work-up, and endoscopic procedures."
    },
    {
      id: "tunis-pulmonology",
      specialty: "Pulmonology",
      institution: "La Rabta Hospital",
      location: "Tunis, Tunisia",
      date: "August 2025",
      duration: "4 weeks · IFMSA SCOPE",
      supervisor: "Dr. Besma Dhahri",
      detail: "Pulmonology attachment covering procedures, imaging, oncology, tuberculosis, and ward care.",
      credential: "assets/docs/IFMSA_Pulmonology_Tunis_2025_Redacted.pdf",
      credentialLabel: "View supporting document*",
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
      detail: "Electrophysiology exposure including EP studies and ablation for WPW and AVNRT.",
      credential: "assets/docs/IFMSA_Cardiology_Catania_2024_Redacted.pdf",
      credentialLabel: "View supporting document*"
    },
    {
      id: "stgeorges-cardio",
      specialty: "Cardiology",
      institution: "St George’s University Hospital",
      location: "London, United Kingdom",
      date: "June–July 2024",
      duration: "2 weeks",
      supervisor: "Dr. Faisal Khan",
      detail: "Observed TAVI, PCI, ablation, and pacing-clinic work."
    },
    {
      id: "ahd-cardio",
      specialty: "Cardiology",
      institution: "American Hospital Dubai",
      location: "Dubai, United Arab Emirates",
      date: "January–February 2024",
      duration: "Observership",
      supervisor: "Dr. Mohammad Zaidan",
      detail: "Interventional cardiology observership with catheter-lab exposure.",
      credential: "assets/docs/American_Hospital_Dubai_Cardiology_2024_Redacted.pdf",
      credentialLabel: "View supporting document*"
    },
    {
      id: "debrecen-clinical",
      specialty: "Multi-specialty clinical rotations",
      institution: "University of Debrecen",
      location: "Debrecen, Hungary",
      date: "2023–2026",
      duration: "Longitudinal medical training",
      supervisor: "Faculty clinical departments",
      detail: "Core clinical rotations across medicine, surgery, pediatrics, emergency care, and other specialties."
    },
    {
      id: "ahd-nephrology",
      specialty: "Nephrology",
      institution: "American Hospital Dubai",
      location: "Dubai, United Arab Emirates",
      date: "February 2023",
      duration: "Observership",
      supervisor: "Dr. Viorica Khalil",
      detail: "Dialysis, laboratory interpretation, and nephrology patient assessment."
    }
  ],

  awards: [
    {
      title: "2nd Place · MedCup 2024",
      detail: "University of Debrecen team placed 2nd among 100 teams in Brussels.",
      year: "2024",
      source: "https://hirek.unideb.hu/en/international-success-debrecen-medical-students"
    },
    {
      title: "3rd Place · TDK Conference 2025",
      detail: "3rd prize for first-author bone SPECT/CT research.",
      year: "2025",
      credential: "assets/docs/TDK_2025_Third_Prize_Redacted.pdf"
    },
    {
      title: "ESC Congress 2025 · Presenter",
      detail: "Presented first-author AVF ligation meta-analysis in Madrid.",
      year: "2025",
      source: "https://esc365.escardio.org/presentation/309528?resource=abstract"
    },
    {
      title: "EANM Congress 2025 · Presenter",
      detail: "Presented whole-body SPECT + AI-synthetic CT research in Barcelona.",
      year: "2025",
      source: "https://tudoster.unideb.hu/en/publikacio/BIBFORM134396"
    },
    {
      title: "3rd Place · TDK Conference 2026",
      detail: "3rd prize for first-author rituximab research.",
      year: "2026",
      credential: "assets/docs/TDK_2026_Third_Prize_Redacted.pdf"
    },
    {
      title: "1st Place · Arthroscopic Simulator Station",
      detail: "University of Debrecen Surgery Club skills competition.",
      year: "2025",
      source: "https://hirek.unideb.hu/sikeresen-zarult-hallgatoi-skill-verseny"
    }
  ],

  teaching: [
    {
      role: "Teaching Assistant",
      organization: "Meta-Analysis Academy",
      date: "Feb–Jun 2025",
      detail: "Reviewed 120+ research exercises and provided methodology feedback.",
      credential: "assets/docs/Meta_Analysis_Academy_TA_Certificate.pdf"
    },
    {
      role: "Pathology Teaching Assistant",
      organization: "University of Debrecen",
      date: "2023–2024",
      detail: "Supported third-year autopsy teaching across three semesters."
    }
  ],


  lubdub: {
    title: "The Lub Dub Club",
    role: "Founder & President · Aug 2024–Sep 2026",
    summary: "A student-led cardiology education initiative at the University of Debrecen built around practical, simulation-based learning.",
    points: [
      "Founded and organized weekly cardiology workshops with Vice Dean Prof. Norbert Németh and faculty collaborators.",
      "Led semester-long sessions using the Mentice VIST simulator to develop clinical and procedural skills through simulated cardiology cases.",
      "Worked with specialists to connect cardiovascular theory with practical, case-based learning."
    ],
    instagram: "https://www.instagram.com/lub.dubclub/",
    logoKey: "lubDubLogo",
    photoKey: "lubDubWorkshop"
  },

  doe: {
    title: "Medical Students’ Association of Debrecen",
    acronym: "DOE",
    role: "Local Officer of International Students (LOIS) · Sep 2025–Sep 2026",
    summary: "Led international-student engagement under the IFMSA framework, with a focus on exchanges, global opportunities, capacity building, and multidisciplinary educational events.",
    points: [
      "Managed a team focused on international student opportunities and exchange programmes.",
      "Promoted global engagement initiatives under the IFMSA framework.",
      "Coordinated capacity-building events and expert-led lectures across multiple medical specialties."
    ],
    website: "https://www.doedebrecen.hu/index.php"
  },

  credentials: [
    {
      title: "Cardiology Observership",
      issuer: "American Hospital Dubai",
      year: "2024",
      doc: "assets/docs/American_Hospital_Dubai_Cardiology_2024_Redacted.pdf",
      thumb: "assets/thumbs/American_Hospital_Dubai_Cardiology_2024_Redacted.webp",
      note: "Supporting document*"
    },
    {
      title: "Cardiology Professional Exchange",
      issuer: "IFMSA SCOPE · Catania",
      year: "2024",
      doc: "assets/docs/IFMSA_Cardiology_Catania_2024_Redacted.pdf",
      thumb: "assets/thumbs/IFMSA_Cardiology_Catania_2024_Redacted.webp",
      note: "Supporting document*"
    },
    {
      title: "Pulmonology Professional Exchange",
      issuer: "IFMSA SCOPE · Tunis",
      year: "2025",
      doc: "assets/docs/IFMSA_Pulmonology_Tunis_2025_Redacted.pdf",
      thumb: "assets/thumbs/IFMSA_Pulmonology_Tunis_2025_Redacted.webp",
      note: "Supporting document*"
    },
    {
      title: "Neonatology Professional Exchange",
      issuer: "IFMSA SCOPE · Porto",
      year: "2026",
      doc: "assets/docs/IFMSA_Neonatology_Porto_2026_Redacted.pdf",
      thumb: "assets/thumbs/IFMSA_Neonatology_Porto_2026_Redacted.webp",
      note: "Supporting document*"
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
