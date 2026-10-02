const SITE_I18N = {
  en: {
    meta: {
      title: "Dr. Mahmoud Einieh, MD · Research & Clinical Portfolio",
      description: "Dr. Mahmoud Einieh, MD — cardiovascular research, advanced imaging, evidence synthesis, international clinical experience, publications and academic portfolio."
    },
    ui: {
      nav: { research:"Research", clinical:"Clinical", outputs:"Outputs", medcup:"MedCup", leadership:"Leadership", awards:"Awards", lubdub:"Lub Dub", doe:"DOE", evidence:"Evidence", teaching:"Teaching", about:"About" },
      hero: {
        eyebrow:"MD · Clinical researcher · International experience",
        title:"Clinical medicine,<br><em>translated through evidence.</em>",
        explore:"Explore research", publicCV:"Public CV",
        currentFocus:"Current focus", focusValue:"Cardiovascular physiology · Imaging · AI",
        researchIdentity:"Research identity"
      },
      sections: {
        research:{kicker:"01 · Research",title:"Research.",desc:"Selected projects."},
        clinical:{kicker:"02 · Clinical",title:"Clinical.",desc:"International placements, electives and simulation."},
        outputs:{kicker:"03 · Outputs",title:"Publications.",desc:"Papers, abstracts and presentations."},
        medcup:{kicker:"04 · MedCup",title:"MedCup 2024.",desc:"Second place in Brussels."},
        awards:{kicker:"05 · Recognition",title:"Awards.",desc:"Selected academic and scientific recognition."},
        lubdub:{kicker:"06 · Leadership",title:"Lub Dub Club.",desc:"Founder-led cardiology education through simulation."},
        doe:{kicker:"07 · Leadership",title:"DOE & IFMSA.",desc:"Leadership, outreach and exchange."},
        evidence:{kicker:"08 · Evidence",title:"Credentials.",desc:"Selected certificates and supporting documents."},
        recommendations:{kicker:"09 · References",title:"Letters of recommendation.",desc:""},
        teaching:{kicker:"10 · Teaching",title:"Teaching.",desc:"Research methods and pathology."},
        about:{kicker:"11 · About",title:"About."}
      },
      buttons: {
        showAll:"Show complete research portfolio", showFeatured:"Show featured research only", resetResearch:"Reset to featured research",
        clubInstagram:"Club Instagram", doeWebsite:"DOE website", supportingDoc:"View supporting document*", openSupporting:"Open supporting document*",
        officialSource:"Official source", email:"Email Mahmoud", backTop:"Back to top"
      },
      filters: {
        research:{"All":"All","Cardiology":"Cardiology","Imaging / AI":"Imaging / AI","Nephrology":"Nephrology","Hematology":"Hematology"},
        clinical:{"All":"All","Cardiology":"Cardiology","Medicine":"Medicine","Surgery":"Surgery","Neonatology":"Neonatology","Emergency":"Emergency"}
      },
      clinical:{supervision:"Supervision",empty:"No clinical experiences match this filter.",recommendation:"Recommendation letter available on request"},
      modal:{detail:"Research detail",role:"My role",status:"Status",supporting:"Supporting document*"},
      search:{placeholder:"Search projects, specialties, institutions…",empty:"No matching portfolio items.",research:"Research",clinical:"Clinical",recognition:"Recognition",credential:"Credential"},
      credential:{open:"View redacted copy"},
      about:{
        p1:"Graduated from the six-year English Medicine programme at the University of Debrecen in 2026.",
        p2:"Interested in cardiovascular medicine, clinical research, imaging, and translational science.",
        selected:"Selected credentials", selectedEvidence:"Selected evidence", view:"View", publicCV:"Public CV", credential:"Credential", record:"Record", firstAuthor:"First-author paper",
        privacy:"Documents are shown in redacted form for privacy. Original unredacted copies can be made available on reasonable request."
      },
      contact:{kicker:"Contact",title:"Research collaboration,<br>clinical opportunities, or academic work."},
      footer:{tagline:"Cardiovascular Research · Advanced Imaging · Evidence Synthesis",living:"Built as a living academic portfolio."},
      aria:{openProject:"Open project details"}
    },
    profile:{summary:"Medical doctor and clinical researcher focused on cardiovascular medicine, imaging, AI, and evidence synthesis."},
    metrics:["Research projects","Peer-reviewed publications","International clinical placements","Selected awards & congress highlights"]
  },

  de: {
    meta: {
      title: "Dr. Mahmoud Einieh, MD · Forschungs- & klinisches Portfolio",
      description: "Dr. Mahmoud Einieh, MD — kardiovaskuläre Forschung, moderne Bildgebung, Evidenzsynthese, internationale klinische Erfahrung und wissenschaftliches Portfolio."
    },
    ui: {
      nav: { research:"Forschung", clinical:"Klinik", outputs:"Publikationen", medcup:"MedCup", leadership:"Engagement", awards:"Auszeichnungen", lubdub:"Lub Dub", doe:"DOE", evidence:"Nachweise", teaching:"Lehre", about:"Über mich" },
      hero: {
        eyebrow:"MD · Klinischer Forscher · Internationale Erfahrung",
        title:"Klinische Medizin,<br><em>evidenzbasiert weitergedacht.</em>",
        explore:"Forschung entdecken", publicCV:"Öffentlicher Lebenslauf",
        currentFocus:"Aktueller Schwerpunkt", focusValue:"Kardiovaskuläre Physiologie · Bildgebung · KI",
        researchIdentity:"Forschungsprofil"
      },
      sections: {
        research:{kicker:"01 · Forschung",title:"Forschung.",desc:"Ausgewählte Projekte."},
        clinical:{kicker:"02 · Klinik",title:"Klinik.",desc:"Internationale Praktika, Wahlfächer und Simulation."},
        outputs:{kicker:"03 · Arbeiten",title:"Publikationen.",desc:"Artikel, Abstracts und Präsentationen."},
        medcup:{kicker:"04 · MedCup",title:"MedCup 2024.",desc:"Zweiter Platz in Brüssel."},
        awards:{kicker:"05 · Anerkennung",title:"Auszeichnungen.",desc:"Ausgewählte akademische und wissenschaftliche Anerkennungen."},
        lubdub:{kicker:"06 · Leitung",title:"Lub Dub Club.",desc:"Von mir gegründete Kardiologieausbildung durch Simulation."},
        doe:{kicker:"07 · Leitung",title:"DOE & IFMSA.",desc:"Leitung, Outreach und Austausch."},
        evidence:{kicker:"08 · Nachweise",title:"Nachweise.",desc:"Ausgewählte Dokumente und Zertifikate."},
        recommendations:{kicker:"09 · Referenzen",title:"Empfehlungsschreiben.",desc:""},
        teaching:{kicker:"10 · Lehre",title:"Lehre.",desc:"Forschungsmethoden und Pathologie."},
        about:{kicker:"11 · Über mich",title:"Über mich."}
      },
      buttons: {
        showAll:"Vollständiges Forschungsportfolio anzeigen", showFeatured:"Nur ausgewählte Forschung anzeigen", resetResearch:"Auf ausgewählte Forschung zurücksetzen",
        clubInstagram:"Club auf Instagram", doeWebsite:"DOE-Website", supportingDoc:"Nachweis ansehen*", openSupporting:"Nachweis öffnen*",
        officialSource:"Offizielle Quelle", email:"Mahmoud kontaktieren", backTop:"Nach oben"
      },
      filters: {
        research:{"All":"Alle","Cardiology":"Kardiologie","Imaging / AI":"Bildgebung / KI","Nephrology":"Nephrologie","Hematology":"Hämatologie"},
        clinical:{"All":"Alle","Cardiology":"Kardiologie","Medicine":"Innere Medizin","Surgery":"Chirurgie","Neonatology":"Neonatologie","Emergency":"Notfall / Katastrophenmedizin"}
      },
      clinical:{supervision:"Betreuung",empty:"Keine klinischen Erfahrungen entsprechen diesem Filter.",recommendation:"Empfehlungsschreiben auf Anfrage verfügbar"},
      modal:{detail:"Forschungsdetails",role:"Meine Rolle",status:"Status",supporting:"Nachweis*"},
      search:{placeholder:"Projekte, Fachgebiete, Institutionen durchsuchen…",empty:"Keine passenden Einträge gefunden.",research:"Forschung",clinical:"Klinik",recognition:"Auszeichnung",credential:"Nachweis"},
      credential:{open:"Geschwärzte Kopie ansehen"},
      about:{
        p1:"Abschluss des sechsjährigen englischsprachigen Medizinstudiums an der Universität Debrecen im Jahr 2026.",
        p2:"Interessen: Kardiovaskuläre Medizin, klinische Forschung, Bildgebung und translationale Wissenschaft.",
        selected:"Ausgewählte Nachweise", selectedEvidence:"Ausgewählte Nachweise", view:"Ansehen", publicCV:"Öffentlicher Lebenslauf", credential:"Nachweis", record:"Profil", firstAuthor:"Erstautor-Publikation",
        privacy:"Dokumente werden aus Datenschutzgründen in geschwärzter Form gezeigt. Unveränderte Originale können auf begründete Anfrage zur Verfügung gestellt werden."
      },
      contact:{kicker:"Kontakt",title:"Forschungskooperation,<br>klinische Möglichkeiten oder akademische Projekte."},
      footer:{tagline:"Kardiovaskuläre Forschung · Moderne Bildgebung · Evidenzsynthese",living:"Als fortlaufend aktualisiertes akademisches Portfolio erstellt."},
      aria:{openProject:"Projektdetails öffnen"}
    },
    profile:{summary:"Arzt und klinischer Forscher mit Schwerpunkt auf kardiovaskulärer Medizin, Bildgebung, KI und Evidenzsynthese."},
    metrics:["Forschungsprojekte","Peer-reviewte Publikationen","Internationale klinische Praktika","Ausgewählte Auszeichnungen & Kongress-Highlights"],
    research:{
      avf:{title:"AV-Fistelligatur und reverses kardiovaskuläres Remodeling",domain:"Kardio-Nephrologie",type:"Systematisches Review & Meta-Analyse",status:"Publiziert · Erstautor",summary:"Meta-Analyse kardiovaskulärer Veränderungen nach Ligatur einer AV-Fistel bei chronischer Nierenerkrankung.",metricLabels:["Studien","Patienten","LV-Massenindex","Herzindex"],role:"Studiendesign · Analyse · Manuskript · Präsentation",detail:"Die Ligatur der AV-Fistel war mit günstigem kardialem Remodeling assoziiert. Präsentiert beim ESC-Kongress 2025 und anschließend publiziert."},
      circrna:{title:"Zirkuläre RNAs bei diabetischen kardiovaskulären Komplikationen",domain:"Molekulare Kardiologie",type:"Narratives Review",status:"Publiziert · Koautor",summary:"Übersichtsarbeit zu circRNAs als kardiovaskuläre Biomarker und therapeutische Ziele bei Diabetes.",role:"Koautor · Literaturrecherche · Manuskript",detail:"Publizierte Übersichtsarbeit zu Biomarkern, Liquid Biopsy und RNA-basierten Therapien."},
      "spect-ai":{title:"Ganzkörper-Knochen-SPECT + KI-synthetische CT",domain:"Nuklearmedizin + KI",type:"Originale patientenbasierte Bildgebungsstudie",status:"Eingereicht · Erst-/Korrespondenzautor",summary:"Originale Bildgebungsstudie zur Kombination von Ganzkörper-SPECT mit KI-generierter synthetischer CT.",metricLabels:["vollständige Bildgebung / Nachbeobachtung","extra-regionale Mehranreicherung","orthopädische Sensitivität","orthopädische Spezifität"],role:"Daten · Statistik · Manuskript · Präsentation",detail:"Patientenbasierte diagnostische Bildgebungsstudie, präsentiert beim EANM-Kongress 2025 in Barcelona.",linkLabels:["Universitäres Forschungsportal","EANM-Programm"]},
      "bone-spect":{title:"Rolle der Knochen-SPECT/CT bei nichtonkologischen Indikationen",domain:"Nuklearmedizin",type:"Originale diagnostische Genauigkeitsstudie",status:"Abgeschlossen · Erstautor",summary:"Diagnostische Genauigkeitsstudie der Knochen-SPECT/CT bei nichtonkologischen Indikationen.",metricLabels:["TDK 2025"],role:"Bildauswertung · diagnostische Genauigkeit · klinische Korrelation",detail:"Präsentiert bei der TDK der Universität Debrecen und auf der nationalen MONT-Tagung."},
      rituximab:{title:"Rituximab bei immunvermittelten glomerulären Erkrankungen",domain:"Nephrologie",type:"MD-Thesis · Retrospektive klinische Kohorte",status:"Abgeschlossen · Erstautor",summary:"Siebenjährige Real-World-Kohorte zu Rituximab bei immunvermittelten glomerulären Erkrankungen.",metricLabels:["Patienten","membranöse Nephropathie","komplette Remission · MN","komplette Remission · Podozytopathien"],role:"Aktenauswertung · Outcomes · Sicherheit · Thesis",detail:"MD-Thesis zu renalen Outcomes und Therapiesicherheit. 3. Platz bei der TDK 2026.",linkLabels:["Universitärer Thesis-Eintrag"]},
      hlh:{title:"18F-FDG-PET/CT bei hämophagozytischer Lymphohistiozytose",domain:"Hämatologische Bildgebung",type:"Evidenzsynthese zur diagnostischen Genauigkeit",status:"Kongressarbeit",summary:"Evidenzsynthese zur diagnostischen Rolle der 18F-FDG-PET/CT bei HLH.",role:"Systematisches Review · diagnostische Leistungsfähigkeit",detail:"Hämatologisch ausgerichtete funktionelle Bildgebung und Forschung zur diagnostischen Genauigkeit."},
      bmt:{title:"Klinische versus autoptische Befunde nach allogener Knochenmarktransplantation",domain:"Pathologie / Hämatologie",type:"Klinikopathologische Kohorte",status:"Laufend",summary:"Klinikopathologischer Vergleich prä-mortaler und autoptischer Befunde nach allogener Knochenmarktransplantation.",role:"Datensatz · klinikopathologische Korrelation",detail:"Untersuchung diagnostischer Diskrepanzen und von Befunden, die ausschließlich bei der Autopsie erkannt wurden."},
      mpn:{title:"Mitochondriale Dysfunktion bei myeloproliferativen Neoplasien",domain:"Hämatologie / Molekulare Medizin",type:"Narratives Review",status:"Publiziert · Koautor",summary:"Übersichtsarbeit zu mitochondrialer Dysfunktion und therapeutischen Angriffspunkten bei myeloproliferativen Neoplasien.",role:"Koautor · Literaturrecherche · Manuskript",detail:"Publizierte Übersichtsarbeit zu Stoffwechsel, oxidativem Stress, Mitophagie und Präzisionstherapien."}
    },
    clinical:{
      "romania-disaster":{specialty:"Katastrophenmedizin & Notfallversorgung",date:"24.–26. Apr. 2026",duration:"3-tägiges interregionales Simulationstraining",detail:"Praxisnahes Katastrophenmedizin-Training im Volunteer Firefighter Center mit Notfallkoordination, Brandbekämpfung, Rettung/Extrikation, Triage und Teamarbeit."},
      "debrecen-surgical-skills":{specialty:"Chirurgische Fertigkeiten (BST)",date:"2023–2025",duration:"4 praktische Wahlfächer · alle mit Sehr gut (5)",detail:"Alle vier praktischen Wahlfächer der chirurgischen Skills-Reihe des Fachbereichs wurden abgeschlossen: Operationstechnik, Mikrochirurgie, Laparoskopie und fortgeschrittene Operationstechniken."},
      "porto-neonatology":{specialty:"Neonatologie",date:"Juli 2026",duration:"1 Monat · IFMSA SCOPE",detail:"Erfahrung auf neonatologischen und perinatalen Stationen, einschließlich Frühgeburtlichkeit und neonataler Sepsis."},
      "siegen-surgery":{specialty:"Allgemein- & Viszeralchirurgie",date:"November 2025",duration:"4 Wochen",detail:"Visiten, perioperative Versorgung und operative Hospitation in der Allgemein- und Viszeralchirurgie.",privateDoc:"Empfehlungsschreiben auf Anfrage verfügbar"},
      "swansea-gastro":{specialty:"Gastroenterologie",date:"September 2025",duration:"4 Wochen",detail:"Stationäre Gastroenterologie, diagnostische Abklärung und endoskopische Verfahren."},
      "tunis-pulmonology":{specialty:"Pneumologie",date:"August 2025",duration:"4 Wochen · IFMSA SCOPE",detail:"Pneumologische Rotation mit Prozeduren, Bildgebung, Onkologie, Tuberkulose und Stationsarbeit.",privateDoc:"Empfehlungsschreiben auf Anfrage verfügbar"},
      "catania-cardio":{specialty:"Kardiologie",date:"August 2024",duration:"1 Monat · IFMSA SCOPE",detail:"Elektrophysiologische Erfahrung mit EP-Untersuchungen und Ablationen bei WPW und AVNRT."},
      "stgeorges-cardio":{specialty:"Kardiologie",date:"Juni–Juli 2024",duration:"2 Wochen",detail:"Hospitation bei TAVI, PCI, Ablationen und in der Schrittmacherambulanz."},
      "ahd-cardio":{specialty:"Kardiologie",date:"Januar–Februar 2024",duration:"Hospitation",detail:"Hospitation in der interventionellen Kardiologie mit Einblicken ins Herzkatheterlabor."},
      "debrecen-clinical":{specialty:"Multidisziplinäre klinische Rotationen",date:"2023–2026",duration:"Kontinuierliche klinische Ausbildung",detail:"Kernrotationen in Innerer Medizin, Chirurgie, Pädiatrie, Notfallmedizin und weiteren Fachgebieten."},
      "ahd-nephrology":{specialty:"Nephrologie",date:"Februar 2023",duration:"Hospitation",detail:"Dialyse, Laborinterpretation und nephrologische Patientenbeurteilung."}
    },
    awards:{
      "2nd Place · MedCup 2024":{title:"2. Platz · MedCup 2024",detail:"Team der Universität Debrecen erreichte in Brüssel Platz 2 unter 100 Teams."},
      "3rd Place · TDK Conference 2025":{title:"3. Platz · TDK-Konferenz 2025",detail:"3. Preis für die erstautorige Knochen-SPECT/CT-Forschung."},
      "ESC Congress 2025 · Presenter":{title:"ESC-Kongress 2025 · Vortragender",detail:"Präsentation der erstautorigen AVF-Ligatur-Meta-Analyse in Madrid."},
      "EANM Congress 2025 · Presenter":{title:"EANM-Kongress 2025 · Vortragender",detail:"Präsentation der Ganzkörper-SPECT + KI-synthetische-CT-Forschung in Barcelona."},
      "3rd Place · TDK Conference 2026":{title:"3. Platz · TDK-Konferenz 2026",detail:"3. Preis für die erstautorige Rituximab-Forschung."},
      "1st Place · Arthroscopic Simulator Station":{title:"1. Platz · Arthroskopie-Simulatorstation",detail:"Skills-Wettbewerb des Surgery Club der Universität Debrecen."}
    },
    teaching:{
      "Teaching Assistant|Meta-Analysis Academy":{role:"Tutor / Teaching Assistant",detail:"Überprüfung von mehr als 120 Forschungsaufgaben und methodisches Feedback."},
      "Pathology Teaching Assistant|University of Debrecen":{role:"Teaching Assistant Pathologie",detail:"Unterstützung des Autopsieunterrichts für Studierende im 3. Studienjahr über drei Semester."}
    },
    lubdub:{role:"Gründer & Präsident · Aug. 2024–Sep. 2026",summary:"Studentische Kardiologie-Initiative an der Universität Debrecen mit Schwerpunkt auf praxisnahem, simulationsbasiertem Lernen.",points:["Wöchentliche Kardiologie-Workshops gemeinsam mit Vizerektor Prof. Norbert Németh und Fakultätskollegen gegründet und organisiert.","Semesterlange Sitzungen mit dem Mentice-VIST-Simulator geleitet, um klinische und prozedurale Fähigkeiten anhand simulierter kardiologischer Fälle zu trainieren.","Mit Fachärzten zusammengearbeitet, um kardiovaskuläre Theorie mit praxisnahem, fallbasiertem Lernen zu verbinden."]},
    doe:{role:"Local Officer of International Students (LOIS) · 2025–2026",summary:"Studentische Leitung in internationaler Vernetzung, Community Outreach und Capacity Building innerhalb von DOE und IFMSA.",points:["Leitung des LOIS-Teams 2025–2026 mit Fokus auf internationale Möglichkeiten und Austauschprogramme.","Mitwirkung an pädiatrischen und gemeindenahen Gesundheits- und Präventionsaktivitäten.","Mitwirkung an Capacity-Building-, Soft-Skills- und interdisziplinären Bildungsprogrammen."],highlights:[{title:"LOIS · 2025–2026",detail:"Leitung des Teams für internationale Studierende und Förderung von IFMSA-Austausch und globalen Möglichkeiten."},{title:"Pädiatrie & Community Outreach",detail:"Kindgerechte Gesundheitsbildung, Prävention und gemeindenahe Aktivitäten."},{title:"Capacity Building",detail:"PaTH-Soft-Skills-Training und Programme zur studentischen Weiterentwicklung."}]},
    credentials:{
      "Cardiology Observership":{title:"Kardiologie-Hospitation",note:"Nachweis*"},
      "Cardiology Professional Exchange":{title:"Kardiologischer Fachaustausch",note:"Nachweis*"},
      "Pulmonology Professional Exchange":{title:"Pneumologischer Fachaustausch",note:"Nachweis*"},
      "Neonatology Professional Exchange":{title:"Neonatologischer Fachaustausch",note:"Nachweis*"},
      "TDK Conference · Third Prize|2025":{title:"TDK-Konferenz · 3. Preis",note:"Wissenschaftliche Präsentation"},
      "TDK Conference · Third Prize|2026":{title:"TDK-Konferenz · 3. Preis",note:"Wissenschaftliche Präsentation"},
      "Meta-Analysis Academy":{title:"Meta-Analysis Academy",note:"Methodentraining"},
      "Teaching Assistant":{title:"Teaching Assistant",note:"80-stündige Teaching-Assistant-Tätigkeit"}
    },
    languages:[["Arabisch","Muttersprache"],["Englisch","C2"],["Ungarisch","B1–B2"],["Deutsch","B1"]]
  },

  hu: {
    meta: {
      title: "Dr. Mahmoud Einieh, MD · Kutatási és klinikai portfólió",
      description: "Dr. Mahmoud Einieh, MD — kardiovaszkuláris kutatás, korszerű képalkotás, evidenciaszintézis, nemzetközi klinikai tapasztalat és tudományos portfólió."
    },
    ui: {
      nav: { research:"Kutatás", clinical:"Klinikum", outputs:"Publikációk", medcup:"MedCup", leadership:"Vezetői szerepek", awards:"Eredmények", lubdub:"Lub Dub", doe:"DOE", evidence:"Igazolások", teaching:"Oktatás", about:"Rólam" },
      hero: {
        eyebrow:"MD · Klinikai kutató · Nemzetközi tapasztalat",
        title:"Klinikai orvoslás,<br><em>bizonyítékokra építve.</em>",
        explore:"Kutatások megtekintése", publicCV:"Nyilvános önéletrajz",
        currentFocus:"Jelenlegi fókusz", focusValue:"Kardiovaszkuláris fiziológia · Képalkotás · MI",
        researchIdentity:"Kutatói profil"
      },
      sections: {
        research:{kicker:"01 · Kutatás",title:"Kutatás.",desc:"Válogatott projektek."},
        clinical:{kicker:"02 · Klinikum",title:"Klinikum.",desc:"Nemzetközi gyakorlatok, választható tárgyak és szimuláció."},
        outputs:{kicker:"03 · Eredmények",title:"Publikációk.",desc:"Cikkek, absztraktok és előadások."},
        medcup:{kicker:"04 · MedCup",title:"MedCup 2024.",desc:"Második hely Brüsszelben."},
        awards:{kicker:"05 · Elismerés",title:"Díjak.",desc:"Válogatott akadémiai és tudományos elismerések."},
        lubdub:{kicker:"06 · Vezetés",title:"Lub Dub Club.",desc:"Saját alapítású kardiológiai oktatás szimulációval."},
        doe:{kicker:"07 · Vezetés",title:"DOE & IFMSA.",desc:"Vezetés, közösségi programok és cserekapcsolatok."},
        evidence:{kicker:"08 · Igazolások",title:"Igazolások.",desc:"Válogatott dokumentumok és tanúsítványok."},
        recommendations:{kicker:"09 · Referenciák",title:"Ajánlólevelek.",desc:""},
        teaching:{kicker:"10 · Oktatás",title:"Oktatás.",desc:"Kutatásmódszertan és patológia."},
        about:{kicker:"11 · Rólam",title:"Rólam."}
      },
      buttons: {
        showAll:"Teljes kutatási portfólió megjelenítése", showFeatured:"Csak a kiemelt kutatások megjelenítése", resetResearch:"Vissza a kiemelt kutatásokhoz",
        clubInstagram:"Club Instagram", doeWebsite:"DOE honlap", supportingDoc:"Igazoló dokumentum megtekintése*", openSupporting:"Igazoló dokumentum megnyitása*",
        officialSource:"Hivatalos forrás", email:"E-mail Mahmoudnak", backTop:"Vissza az oldal tetejére"
      },
      filters: {
        research:{"All":"Összes","Cardiology":"Kardiológia","Imaging / AI":"Képalkotás / MI","Nephrology":"Nefrológia","Hematology":"Hematológia"},
        clinical:{"All":"Összes","Cardiology":"Kardiológia","Medicine":"Belgyógyászat","Surgery":"Sebészet","Neonatology":"Neonatológia","Emergency":"Sürgősségi / katasztrófa-orvostan"}
      },
      clinical:{supervision:"Témavezető / felügyelet",empty:"Nincs a szűrőnek megfelelő klinikai tapasztalat.",recommendation:"Ajánlólevél kérésre elérhető"},
      modal:{detail:"Kutatási részletek",role:"Saját szerepem",status:"Státusz",supporting:"Igazoló dokumentum*"},
      search:{placeholder:"Keresés projektek, szakterületek és intézmények között…",empty:"Nincs megfelelő találat.",research:"Kutatás",clinical:"Klinikum",recognition:"Elismerés",credential:"Igazolás"},
      credential:{open:"Kitakart példány megtekintése"},
      about:{
        p1:"2026-ban végeztem a Debreceni Egyetem hatéves, angol nyelvű általános orvosképzésén.",
        p2:"Fő érdeklődési területeim a kardiovaszkuláris medicina, klinikai kutatás, képalkotás és transzlációs tudomány.",
        selected:"Válogatott igazolások", selectedEvidence:"Válogatott igazolások", view:"Megtekintés", publicCV:"Nyilvános önéletrajz", credential:"Igazolás", record:"Profil", firstAuthor:"Első szerzős közlemény",
        privacy:"A dokumentumok adatvédelmi okokból kitakart formában jelennek meg. Az eredeti, módosítatlan példányok indokolt kérésre rendelkezésre bocsáthatók."
      },
      contact:{kicker:"Kapcsolat",title:"Kutatási együttműködés,<br>klinikai lehetőségek vagy akadémiai projektek."},
      footer:{tagline:"Kardiovaszkuláris kutatás · Korszerű képalkotás · Evidenciaszintézis",living:"Folyamatosan frissülő akadémiai portfólió."},
      aria:{openProject:"Projekt részleteinek megnyitása"}
    },
    profile:{summary:"Orvos és klinikai kutató, fő fókuszban a kardiovaszkuláris medicina, képalkotás, mesterséges intelligencia és evidenciaszintézis."},
    metrics:["Kutatási projektek","Lektorált publikációk","Nemzetközi klinikai gyakorlatok","Válogatott díjak és kongresszusi eredmények"],
    research:{
      avf:{title:"AV-fisztula ligáció és reverz kardiovaszkuláris remodelling",domain:"Kardio-nefrológia",type:"Szisztematikus áttekintés és metaanalízis",status:"Megjelent · első szerző",summary:"A kardiovaszkuláris változások metaanalízise AV-fisztula ligációt követően krónikus vesebetegségben.",metricLabels:["tanulmány","beteg","bal kamrai tömegindex","szívindex"],role:"Vizsgálattervezés · elemzés · kézirat · prezentáció",detail:"Az AV-fisztula ligáció kedvező szívremodellinggel társult. Az eredményeket az ESC Congress 2025 konferencián mutattam be, majd a munka publikálásra került."},
      circrna:{title:"Cirkuláris RNS-ek diabéteszes kardiovaszkuláris szövődményekben",domain:"Molekuláris kardiológia",type:"Narratív áttekintés",status:"Megjelent · társszerző",summary:"Áttekintés a circRNS-ekről mint kardiovaszkuláris biomarkerekről és terápiás célpontokról diabetesben.",role:"Társszerző · irodalomkutatás · kézirat",detail:"Publikált áttekintés biomarkerekről, liquid biopsy megközelítésekről és RNS-alapú terápiákról."},
      "spect-ai":{title:"Teljes testes csont-SPECT + MI-alapú szintetikus CT",domain:"Nukleáris medicina + MI",type:"Eredeti, betegszintű képalkotó kutatás",status:"Benyújtva · első / levelező szerző",summary:"Eredeti képalkotó vizsgálat teljes testes SPECT és MI által generált szintetikus CT kombinációjával.",metricLabels:["teljes képalkotás / utánkövetés","extra-regionális aktivitás","ortopédiai szenzitivitás","ortopédiai specificitás"],role:"Adat · statisztika · kézirat · prezentáció",detail:"Betegszintű diagnosztikai képalkotó kutatás, bemutatva az EANM Congress 2025 kongresszuson Barcelonában.",linkLabels:["Egyetemi kutatási portál","EANM program"]},
      "bone-spect":{title:"A csont-SPECT/CT szerepe nem onkológiai indikációkban",domain:"Nukleáris medicina",type:"Eredeti diagnosztikai pontossági kutatás",status:"Befejezve · első szerző",summary:"A csont-SPECT/CT diagnosztikai pontosságának vizsgálata nem onkológiai indikációkban.",metricLabels:["TDK 2025"],role:"Képértékelés · diagnosztikai pontosság · klinikai korreláció",detail:"Bemutatva a Debreceni Egyetem TDK konferenciáján és az országos MONT rendezvényen."},
      rituximab:{title:"Rituximab immunmediált glomeruláris betegségekben",domain:"Nefrológia",type:"MD szakdolgozat · retrospektív klinikai kohorsz",status:"Befejezve · első szerző",summary:"Hétéves valós életbeli kohorsz rituximabkezelésről immunmediált glomeruláris betegségekben.",metricLabels:["beteg","membrános nephropathia","teljes remisszió · MN","teljes remisszió · podocytopathiák"],role:"Dokumentáció-áttekintés · kimenetelek · biztonság · szakdolgozat",detail:"MD szakdolgozat renális kimenetelekről és kezelési biztonságról. 3. helyezés a TDK 2026-on.",linkLabels:["Egyetemi szakdolgozati rekord"]},
      hlh:{title:"18F-FDG PET/CT haemophagocytás lymphohistiocytosisban",domain:"Hematológiai képalkotás",type:"Diagnosztikai pontossági evidenciaszintézis",status:"Kongresszusi kutatás",summary:"Evidenciaszintézis az 18F-FDG PET/CT diagnosztikai szerepéről HLH-ban.",role:"Szisztematikus áttekintés · diagnosztikai teljesítmény",detail:"Hematológiai fókuszú funkcionális képalkotás és diagnosztikai pontossági kutatás."},
      bmt:{title:"Klinikai és boncolási leletek összehasonlítása allogén csontvelő-transzplantáció után",domain:"Patológia / hematológia",type:"Klinikopatológiai kohorsz",status:"Folyamatban",summary:"Premortem klinikai és boncolási leletek klinikopatológiai összehasonlítása allogén BMT után.",role:"Adatbázis · klinikopatológiai korreláció",detail:"A diagnosztikai eltérések és kizárólag boncolás során azonosított leletek vizsgálata."},
      mpn:{title:"Mitokondriális diszfunkció myeloproliferatív neopláziákban",domain:"Hematológia / molekuláris medicina",type:"Narratív áttekintés",status:"Megjelent · társszerző",summary:"Áttekintés a mitokondriális diszfunkcióról és terápiás célpontokról myeloproliferatív neopláziákban.",role:"Társszerző · irodalomkutatás · kézirat",detail:"Publikált áttekintés az anyagcseréről, oxidatív stresszről, mitofágiáról és precíziós terápiákról."}
    },
    clinical:{
      "romania-disaster":{specialty:"Katasztrófa-orvostan és sürgősségi ellátás",date:"2026. ápr. 24–26.",duration:"3 napos interregionális szimulációs képzés",detail:"Gyakorlati katasztrófa-orvostani képzés a Volunteer Firefighter Centerben sürgősségi koordinációval, tűzoltással, mentéssel/extrikációval, triázzsal és csapatmunkával."},
      "debrecen-surgical-skills":{specialty:"Sebészeti készségfejlesztő választható tárgyak (BST)",date:"2023–2025",duration:"4 gyakorlati kurzus · mind kiváló (5)",detail:"A tanszék sebészeti készségfejlesztő sorozatának mind a négy gyakorlati választható tárgyát teljesítette: műtéttani alapok, mikrosebészet, laparoszkópia és haladó műtéti technikák."},
      "porto-neonatology":{specialty:"Neonatológia",date:"2026. július",duration:"1 hónap · IFMSA SCOPE",detail:"Neonatológiai és perinatális osztályos tapasztalat, beleértve a koraszülöttséget és a neonatalis sepsist."},
      "siegen-surgery":{specialty:"Általános és visceralis sebészet",date:"2025. november",duration:"4 hét",detail:"Vizitek, perioperatív ellátás és műtéti megfigyelés általános és visceralis sebészeten.",privateDoc:"Ajánlólevél kérésre elérhető"},
      "swansea-gastro":{specialty:"Gasztroenterológia",date:"2025. szeptember",duration:"4 hét",detail:"Fekvőbeteg gasztroenterológia, diagnosztikai kivizsgálás és endoszkópos beavatkozások."},
      "tunis-pulmonology":{specialty:"Pulmonológia",date:"2025. augusztus",duration:"4 hét · IFMSA SCOPE",detail:"Pulmonológiai gyakorlat beavatkozásokkal, képalkotással, onkológiával, tuberkulózissal és osztályos betegellátással.",privateDoc:"Ajánlólevél kérésre elérhető"},
      "catania-cardio":{specialty:"Kardiológia",date:"2024. augusztus",duration:"1 hónap · IFMSA SCOPE",detail:"Elektrofiziológiai tapasztalat EP-vizsgálatokkal és WPW-, illetve AVNRT-ablációkkal."},
      "stgeorges-cardio":{specialty:"Kardiológia",date:"2024. június–július",duration:"2 hét",detail:"TAVI, PCI, ablációk és pacemaker-ambulancia megfigyelése."},
      "ahd-cardio":{specialty:"Kardiológia",date:"2024. január–február",duration:"Observership",detail:"Intervenciós kardiológiai observership katéterlaboros tapasztalattal."},
      "debrecen-clinical":{specialty:"Több szakterületet érintő klinikai gyakorlatok",date:"2023–2026",duration:"Folyamatos klinikai képzés",detail:"Alapvető klinikai rotációk belgyógyászatban, sebészetben, gyermekgyógyászatban, sürgősségi ellátásban és további szakterületeken."},
      "ahd-nephrology":{specialty:"Nefrológia",date:"2023. február",duration:"Observership",detail:"Dialízis, laboreredmények értelmezése és nefrológiai betegvizsgálat."}
    },
    awards:{
      "2nd Place · MedCup 2024":{title:"2. hely · MedCup 2024",detail:"A Debreceni Egyetem csapata 100 csapat közül a 2. helyen végzett Brüsszelben."},
      "3rd Place · TDK Conference 2025":{title:"3. hely · TDK Konferencia 2025",detail:"3. díj az első szerzős csont-SPECT/CT kutatásért."},
      "ESC Congress 2025 · Presenter":{title:"ESC Congress 2025 · előadó",detail:"Az első szerzős AV-fisztula-ligációs metaanalízis bemutatása Madridban."},
      "EANM Congress 2025 · Presenter":{title:"EANM Congress 2025 · előadó",detail:"A teljes testes SPECT + MI-szintetikus CT kutatás bemutatása Barcelonában."},
      "3rd Place · TDK Conference 2026":{title:"3. hely · TDK Konferencia 2026",detail:"3. díj az első szerzős rituximab-kutatásért."},
      "1st Place · Arthroscopic Simulator Station":{title:"1. hely · Artroszkópos szimulátor állomás",detail:"A Debreceni Egyetem Surgery Club készségversenye."}
    },
    teaching:{
      "Teaching Assistant|Meta-Analysis Academy":{role:"Oktatási asszisztens",detail:"Több mint 120 kutatási feladat értékelése és módszertani visszajelzés adása."},
      "Pathology Teaching Assistant|University of Debrecen":{role:"Patológia oktatási asszisztens",detail:"Harmadéves bonctermi oktatás támogatása három féléven keresztül."}
    },
    lubdub:{role:"Alapító és elnök · 2024. aug.–2026. szept.",summary:"Hallgatói kardiológiai oktatási kezdeményezés a Debreceni Egyetemen, gyakorlati és szimulációalapú tanulással.",points:["Heti kardiológiai workshopok alapítása és szervezése Prof. Norbert Németh dékánhelyettessel és egyetemi oktatókkal.","Féléves foglalkozások vezetése Mentice VIST szimulátorral a klinikai és procedurális készségek fejlesztésére szimulált kardiológiai eseteken keresztül.","Szakorvosokkal együttműködve a kardiovaszkuláris elmélet és a gyakorlati, eset-alapú tanulás összekapcsolása."]},
    doe:{role:"Local Officer of International Students (LOIS) · 2025–2026",summary:"Hallgatói vezetés nemzetközi kapcsolatokban, közösségi programokban és készségfejlesztésben a DOE és az IFMSA keretében.",points:["A 2025–2026-os LOIS csapat vezetése nemzetközi lehetőségek és csereprogramok koordinálásával.","Részvétel gyermekgyógyászati és közösségi egészségnevelési, valamint prevenciós programokban.","Részvétel készségfejlesztő, soft-skills és multidiszciplináris oktatási programokban."],highlights:[{title:"LOIS · 2025–2026",detail:"A nemzetközi hallgatói csapat vezetése, IFMSA csereprogramok és globális lehetőségek népszerűsítése."},{title:"Gyermekgyógyászati & közösségi programok",detail:"Gyermekbarát egészségnevelés, prevenció és közösségi tevékenységek."},{title:"Készségfejlesztés",detail:"PaTH soft-skills képzés és hallgatói fejlesztő programok."}]},
    credentials:{
      "Cardiology Observership":{title:"Kardiológiai observership",note:"Igazoló dokumentum*"},
      "Cardiology Professional Exchange":{title:"Kardiológiai szakmai csereprogram",note:"Igazoló dokumentum*"},
      "Pulmonology Professional Exchange":{title:"Pulmonológiai szakmai csereprogram",note:"Igazoló dokumentum*"},
      "Neonatology Professional Exchange":{title:"Neonatológiai szakmai csereprogram",note:"Igazoló dokumentum*"},
      "TDK Conference · Third Prize|2025":{title:"TDK Konferencia · 3. díj",note:"Tudományos prezentáció"},
      "TDK Conference · Third Prize|2026":{title:"TDK Konferencia · 3. díj",note:"Tudományos prezentáció"},
      "Meta-Analysis Academy":{title:"Meta-Analysis Academy",note:"Módszertani képzés"},
      "Teaching Assistant":{title:"Oktatási asszisztens",note:"80 órás oktatási asszisztensi megbízás"}
    },
    languages:[["Arab","Anyanyelvi"],["Angol","C2"],["Magyar","B1–B2"],["Német","B1"]]
  }
};
