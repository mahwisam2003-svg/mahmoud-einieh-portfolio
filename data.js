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
    { value: 9, suffix: "", label: "Research projects" },
    { value: 3, suffix: "", label: "Peer-reviewed publications" },
    { value: 8, suffix: "", label: "International clinical placements" },
    { value: 7, suffix: "", label: "Selected awards & congress highlights" }
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
        { label: "PMC full text", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13547687/" },
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
      links: [{ label: "PubMed", url: "https://pubmed.ncbi.nlm.nih.gov/41405560/" }, { label: "DOI", url: "https://doi.org/10.1002/edm2.70149" }, { label: "PMC full text", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12710528/" }]
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
      links: [
        { label: "TDK programme", url: "https://www.oetdk.hu/tdk2025/docs/TDK%20kiadvany_2025_final.pdf" },
        { label: "TDK 3rd prize", url: "https://www.oetdk.hu/tdk2025/docs/Zarounnepseg20250207.pdf" }
      ]
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
      links: [{ label: "EHA abstract", url: "https://library.ehaweb.org/eha/2026/eha2026-congress/4210513/" }]
    },
    {
      id: "bmt",
      featured: false,
      title: "Clinical vs autopsy findings after allogeneic bone marrow transplantation",
      domain: "Pathology / hematology",
      type: "Clinicopathological cohort",
      status: "Presented · TDK 2025 · Ongoing",
      venue: "University of Debrecen · TDK 2025",
      year: "2025–2026",
      summary: "Clinicopathological study of clinical and autopsy findings in 41 allogeneic bone marrow transplant recipients.",
      metrics: [{ value: "41", label: "transplant recipients" }],
      role: "Dataset · clinicopathological correlation · presentation",
      detail: "Presented at TDK 2025; compares premortem and autopsy findings, including post-transplant complications and diagnostic discordance.",
      tags: ["Pathology", "Hematology", "Autopsy", "Clinical cohort"],
      links: [{ label: "Official TDK programme", url: "https://www.oetdk.hu/tdk2025/docs/TDK%20kiadvany_2025_final.pdf" }]
    },
    {
      id: "mfr-cac",
      featured: false,
      title: "Myocardial flow reserve across coronary calcium burden",
      domain: "Nuclear cardiology",
      type: "Systematic review & meta-analysis · conference abstract",
      status: "Conference abstract · Co-author",
      venue: "Journal of Nuclear Cardiology · September 2026",
      year: "2026",
      summary: "Systematic review and meta-analysis examining myocardial flow reserve phenotypes across coronary calcium burden.",
      metrics: [{ value: "102870", label: "JNC abstract" }],
      role: "Co-author · evidence synthesis",
      detail: "Published in the September 2026 Journal of Nuclear Cardiology supplement.",
      tags: ["Nuclear cardiology", "PET", "Myocardial flow reserve", "Coronary calcium", "Meta-analysis"],
      links: [{ label: "JNC supplement", url: "https://www.journalofnuclearcardiology.org/issue/S1071-3581%2826%29X2009-8" }]
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
      galleryTitle: "Neonatology in Porto",
      gallery: [
        { key:"portoHospital", caption:"Hospital São João / Faculty of Medicine, Porto", position:"50% 34%" }
      ],
      credential: "assets/docs/IFMSA_Neonatology_Porto_2026_Redacted.pdf",
      credentialLabel: "View supporting document*"
    },
    {
      id: "romania-disaster",
      specialty: "Disaster Medicine & Emergency Response",
      institution: "MERIT · ROHU00026",
      location: "Diosig, Romania",
      date: "24–26 Apr 2026",
      duration: "3-day interregional simulation",
      supervisor: "Interregional simulation faculty",
      detail: "Disaster Medicine Situation Simulation Training within the Medical Emergency Response Interregional Simulation Training Programme, with firefighting, rescue/extrication, triage and team-based emergency response at the Volunteer Firefighter Center.",
      galleryTitle: "Disaster medicine in Romania",
      gallery: [
        { key:"romaniaFirefighter", caption:"Firefighting and emergency-response simulation", position:"50% 38%" },
        { key:"romaniaRescue", caption:"Team-based rescue and casualty-management exercise", position:"50% 48%" },
        { key:"romaniaCarRescue", caption:"Vehicle-rescue and extrication training", position:"50% 42%" },
        { key:"romaniaTeam", caption:"Interregional training team and instructors", position:"50% 45%" }
      ],
      evidenceId: "merit-cert"
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
      galleryTitle: "General & visceral surgery in Siegen",
      gallery: [
        { key:"siegenHospital", caption:"Diakonie Klinikum Jung-Stilling", position:"48% 40%" },
        { key:"siegenTeam", caption:"General & visceral surgery team", position:"50% 42%" }
      ],
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
      detail: "Inpatient gastroenterology, diagnostic work-up, and endoscopic procedures.",
      galleryTitle: "Gastroenterology in Swansea",
      gallery: [
        { key:"swanseaHospital", caption:"Morriston Hospital · Swansea Bay University Health Board", position:"50% 44%" },
        { key:"swanseaConsultant", caption:"With Dr. Jagadish Nagaraj", position:"50% 42%" }
      ]
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
      galleryTitle: "Cardiology in Catania",
      gallery: [
        { key:"cataniaTeam", caption:"Clinical exchange team", position:"50% 38%" },
        { key:"cataniaSign", caption:"A.O.U. Policlinico G. Rodolico", position:"50% 42%" }
      ],
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
      detail: "Observed TAVI, PCI, ablation, and pacing-clinic work.",
      galleryTitle: "Cardiology at St George’s",
      gallery: [
        { key:"stgeorgesCathlab", caption:"Cath-lab placement at St George’s", position:"50% 35%" },
        { key:"stgeorgesHospital", caption:"St George’s University Hospital", position:"50% 42%" }
      ]
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
      id: "debrecen-surgical-skills",
      specialty: "Surgical Skills Electives (BST)",
      institution: "Department of Operative Techniques & Surgical Research · University of Debrecen",
      location: "Debrecen, Hungary",
      date: "2023–2025",
      duration: "4 practical electives · all Excellent (5)",
      supervisor: "Department faculty",
      detail: "Completed all four practical elective courses in the department’s surgical-skills sequence, progressing from operative fundamentals to microsurgery, laparoscopy and advanced operative techniques.",
      courses: [
        "Surgical Operative Techniques",
        "Basic Microsurgical Training. Introduction to Microsurgery",
        "Basic Laparoscopic Surgical Training",
        "Advanced Surgical Operative Techniques"
      ],
      galleryTitle: "Surgical skills training",
      gallery: [
        { key:"bstORPortrait", caption:"Operative training environment", position:"50% 36%" },
        { key:"bstORTeam", caption:"Operating-room team training", position:"50% 38%" },
        { key:"bstSimulator", caption:"Simulation-based surgical skills practice", position:"50% 50%" }
      ]
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
      title: "3rd Place · TDK Conference 2025",
      detail: "3rd prize for first-author bone SPECT/CT research.",
      year: "2025",
      source: "https://www.oetdk.hu/tdk2025/docs/Zarounnepseg20250207.pdf"
    },
    {
      title: "ESC Congress 2025 · Presenter",
      detail: "Presented first-author AVF ligation meta-analysis at ESC Congress 2025.",
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
      year: "2026"
    },
    {
      title: "1st Place · Arthroscopic Simulator Station",
      detail: "University of Debrecen Surgery Club skills competition.",
      year: "2025",
      source: "https://hirek.unideb.hu/sikeresen-zarult-hallgatoi-skill-verseny"
    },
    {
      title: "Dean’s Certificate of Recognition",
      detail: "Awarded at the 2026 University of Debrecen medical-doctor inauguration.",
      year: "2026",
      source: "https://hirek.unideb.hu/en/inauguration-doctors-medicine-university-debrecen"
    }
  ],

  medcup: {
    title: "MedCup 2024 · Brussels",
    result: "2nd place among 100 teams",
    summary: "Mahmoud Einieh and Ramzi Zeidan represented the University of Debrecen and finished second in the international MedCup competition in Brussels, one point behind the winning team.",
    detail: "The competition tested clinical reasoning, practical skills, imaging interpretation, emergency response and procedural ability across teams from universities worldwide.",
    source: "https://hirek.unideb.hu/en/international-success-debrecen-medical-students",
    youtubeAftermovie: "https://www.youtube.com/watch?v=gPz7goPlIUE",
    youtubeLivestream: "https://youtu.be/2DWyBH80oM8?si=ZZp9Th6jjj_lkchk",
    press: [
      { label: "HAON", url: "https://www.haon.hu/helyi-kozelet/2024/03/medcup-szakmai-verseny-debreceni-egyetem-orvostudomanyi-kar" },
      { label: "Debrecen Sun", url: "https://www.debrecensun.hu/uni/2024/03/08/medical-students-from-debrecen-successfully-participated-in-the-professional-championship-in-brussels/" },
      { label: "Le Spécialiste", url: "https://www.lespecialiste.be/fr/actualites/medcup-nbsp-2024-quand-les-etudiants-en-medecine-testent-leurs-aptitudes.html" },
      { label: "Sorbonne Paris Nord", url: "https://www.univ-spn.fr/sorbonne-paris-nord-a-la-medcup-2024/" }
    ],
    images: ["medcupMilitary1", "medcupMilitary2", "medcupFinalStage", "medcupFinalQuiz", "medcupAward"]
  },

  evidenceGroups: [
    {
      id: "education",
      title: "Academic credentials",
      description: "Core educational qualifications, shown in privacy-safe redacted form.",
      items: [
        { id:"medical-degree", title:"Doctor of Medicine · University of Debrecen", issuer:"University of Debrecen", year:"2026", note:"Medical degree · cum laude", imageKey:"medicalDegree" },
        { id:"high-school", title:"High School Diploma · Al Mawakeb School", issuer:"Al Mawakeb School, Dubai", year:"2020", note:"Secondary education diploma", imageKey:"highSchoolDiploma" }
      ]
    },
    {
      id: "clinical",
      title: "International clinical training",
      description: "Selected certificates documenting international clinical placements.",
      items: [
        { id:"porto-cert", title:"Neonatology / Perinatal Medicine", issuer:"IFMSA SCOPE · Hospital São João, Porto", year:"2026", note:"Professional exchange", imageKey:"portoNeonatology" },
        { id:"tunis-cert", title:"Pulmonology", issuer:"IFMSA SCOPE · La Rabta Hospital, Tunis", year:"2025", note:"Professional exchange", imageKey:"tunisExchange" },
        { id:"catania-cert", title:"Cardiology", issuer:"IFMSA SCOPE · Catania, Italy", year:"2024", note:"Professional exchange", imageKey:"cataniaCardiology" },
        { id:"merit-cert", title:"Disaster Medicine Situation Simulation Training", issuer:"MERIT · Interreg Romania–Hungary · ROHU00026", year:"2026", note:"Certificate of participation · 24–26 Apr · Diosig, Romania", imageKey:"meritCertificate", redacted:false },
                { id:"ahd-cert", title:"Cardiology Observership", issuer:"American Hospital Dubai", year:"2024", note:"Clinical observership", imageKey:"americanHospital" }
      ]
    },
    {
      id: "science",
      title: "Scientific awards & methods training",
      description: "Selected awards and formal research-methodology training.",
      items: [
        { id:"tdk-2025", title:"TDK Conference · Third Prize", issuer:"University of Debrecen", year:"2025", note:"Bone SPECT/CT research", imageKey:"tdk2025" },
        { id:"tdk-2026", title:"TDK Conference · Third Prize", issuer:"University of Debrecen", year:"2026", note:"Rituximab research", imageKey:"tdk2026" },
        { id:"maa-completion", title:"Meta-Analysis Academy · Completion", issuer:"Meta-Analysis Academy", year:"2024", note:"50-hour methods programme", imageKey:"maaCompletion" },
        { id:"maa-ta", title:"Meta-Analysis Academy · Teaching Assistant", issuer:"Meta-Analysis Academy", year:"2025", note:"80-hour teaching-assistant appointment", imageKey:"maaTeaching" }
      ]
    },
    {
      id: "community",
      title: "Community service",
      description: "Selected evidence of sustained service outside formal medical training.",
      items: [
        { id:"winners-service", title:"Community Service · 350 Hours", issuer:"Winners Equestrian Club · Dubai", year:"2019", note:"Volunteer customer-service role", imageKey:"communityService2019" }
      ]
    }
  ],

  recommendations: [
    {
      id:"siegen-recommendation",
      title:"General & Visceral Surgery · Recommendation",
      issuer:"Diakonie Klinikum · Siegen, Germany",
      year:"2025",
      detail:"Signed recommendation following a four-week surgical observership under Prof. Dr. M. Golriz.",
      imageKey:"siegenRecommendation"
    },
    {
      id:"tunis-recommendation",
      title:"Pulmonology · Recommendation",
      issuer:"La Rabta Hospital · Tunis, Tunisia",
      year:"2025",
      detail:"Signed recommendation following the pulmonology clinical attachment at La Rabta Hospital.",
      imageKey:"tunisRecommendation"
    },
    {
      id:"swansea-recommendation",
      title:"Gastroenterology · Recommendation",
      issuer:"Morriston Hospital · Swansea Bay University Health Board, Wales",
      year:"2025",
      detail:"Recommendation following the gastroenterology placement at Morriston Hospital under Dr. Jagadish Nagaraj.",
      imageKey:"swanseaRecommendation"
    }
  ],

  teaching: [
    {
      role: "Teaching Assistant",
      organization: "Meta-Analysis Academy",
      date: "Feb–Jun 2025",
      detail: "Reviewed 120+ research exercises and provided methodology feedback."
    },
    {
      role: "Pathology Teaching Assistant",
      organization: "University of Debrecen",
      date: "2023–2025",
      detail: "Supported third-year autopsy teaching across four semesters."
    }
  ],


  lubdub: {
    title: "The Lub Dub Club",
    role: "Founder & President · Aug 2024–Sep 2026",
    summary: "A student-led cardiology education initiative at the University of Debrecen built around practical, simulation-based learning.",
    points: [
      "Organized 14 events and trained 55+ students through practical cardiology sessions.",
      "Led two-hour Mentice VIST simulation sessions in which participants rotated through lead-operator and assistant roles.",
      "Built the club with faculty support to connect interventional-cardiology theory with practical, case-based learning."
    ],
    linkedin: "https://www.linkedin.com/company/lubdubclub",
    instagram: "https://www.instagram.com/lub.dubclub/",
    logoKey: "lubDubLogo",
    photoKey: "lubDubWorkshop"
  },

  doe: {
    title: "Medical Students’ Association of Debrecen",
    acronym: "DOE",
    role: "Local Officer of International Students (LOIS) · 2025–2026",
    summary: "Student leadership across international engagement, community outreach and capacity building within DOE and the IFMSA framework.",
    points: [
      "Led the LOIS team for the 2025–2026 term, coordinating international-student opportunities and exchange engagement.",
      "Supported paediatric and community outreach through child-friendly health education and prevention activities.",
      "Contributed to capacity-building programmes, soft-skills training and multidisciplinary student education."
    ],
    highlights: [
      { title:"LOIS · 2025–2026", detail:"Led the international-students team and promoted IFMSA exchanges, global opportunities and student integration." },
      { title:"Paediatric & Community Outreach", detail:"Participated in child-friendly health education, prevention and community-facing activities." },
      { title:"Capacity Building", detail:"Took part in PaTH soft-skills training and student-development programmes." }
    ],
    galleryTitle: "DOE & IFMSA in practice",
    gallery: [
      { key:"loisTeam2025", caption:"LOIS team · 2025–2026", position:"50% 48%" },
      { key:"doePediatric", caption:"Paediatric & community outreach", position:"52% 42%" },
      { key:"doePaTH", caption:"PaTH capacity-building training", position:"50% 46%" },
      { key:"doeAwareness", caption:"Community prevention & awareness activity", position:"50% 38%" },
      { key:"doeSurgeryClub", caption:"DOE / Surgery Club collaboration", position:"50% 45%" },
      { key:"doeStudentTalk", caption:"International-student orientation & guidance", position:"50% 40%" }
    ],
    website: "https://www.doedebrecen.hu/index.php"
  },

  hobbies: [
    {
      id: "equestrian",
      title: "Horse riding & show jumping",
      summary: "A personal hobby outside medicine, combining riding, training and competition days.",
      galleryTitle: "Horse riding & show jumping",
      gallery: [
        { key:"horseJumpWide", caption:"Show-jumping training", position:"50% 48%" },
        { key:"horseAward", caption:"Competition day", position:"50% 38%" },
        { key:"horseJumpRed", caption:"Show-jumping session", position:"50% 45%" },
        { key:"horseJumpBlue", caption:"Training over fences", position:"50% 46%" },
        { key:"horseCompetition", caption:"Indoor show-jumping competition", position:"50% 42%" }
      ]
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
    { label: "ESC 365", url: "https://esc365.escardio.org/presentation/309528?resource=abstract" },
    { label: "University of Debrecen Research Portal", url: "https://tudoster.unideb.hu/en/publikacio/BIBFORM134396" }
  ]
};
