(() => {
  'use strict';
  const BASE = window.SITE_DATA || (typeof SITE_DATA !== 'undefined' ? SITE_DATA : null);
  if (!BASE) { console.error('SITE_DATA missing'); return; }
  const I18N = window.SITE_I18N || (typeof SITE_I18N !== 'undefined' ? SITE_I18N : {en:{}});
  const IMAGES = window.SITE_IMAGES || (typeof SITE_IMAGES !== 'undefined' ? SITE_IMAGES : {});
  const MEDIA = window.SITE_MEDIA || {};
  const $ = (s, p=document) => p.querySelector(s);
  const $$ = (s, p=document) => Array.from(p.querySelectorAll(s));
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const supported = ['en','de','hu'];
  const params = new URLSearchParams(location.search);
  const requested = params.get('lang');
  const saved = localStorage.getItem('me-lang');
  const lang = supported.includes(requested) ? requested : (supported.includes(saved) ? saved : 'en');
  const pack = I18N[lang] || I18N.en || {};
  const ui = pack.ui || I18N.en?.ui || {};

  function clone(x){ return JSON.parse(JSON.stringify(x)); }
  function localizedData(){
    const d = clone(BASE);
    if (pack.profile) Object.assign(d.profile, pack.profile);
    if (Array.isArray(pack.metrics)) d.metrics = d.metrics.map((m,i)=>({...m,label:pack.metrics[i] || m.label}));
    if (pack.research) d.research = d.research.map(x=>({...x,...(pack.research[x.id]||{})}));
    if (pack.clinical) d.clinical = d.clinical.map(x=>({...x,...(pack.clinical[x.id]||{})}));
    if (pack.awards) d.awards = d.awards.map(a=>({...a,...(pack.awards[a.title]||pack.awards[`${a.title}|${a.year}`]||{})}));
    if (pack.teaching) d.teaching = d.teaching.map(t=>{
      const tr=pack.teaching[`${t.role}|${t.organization}`]||{};
      const out={...t,...tr};
      if(t.role==='Pathology Teaching Assistant'){
        if(lang==='de') out.detail='Unterstützung des Autopsieunterrichts für Studierende im 3. Studienjahr über vier Semester.';
        if(lang==='hu') out.detail='Harmadéves bonctermi oktatás támogatása négy féléven keresztül.';
      }
      return out;
    });
    if (pack.lubdub) d.lubdub = {...d.lubdub,...pack.lubdub};
    if (pack.doe) d.doe = {...d.doe,...pack.doe};
    if (pack.languages) d.languages = pack.languages.map(([language,level])=>({language,level}));
    return d;
  }
  const d = localizedData();

  const copy = {
    en:{documents:'Documents',documentsDesc:'Qualifications, certificates, supporting evidence and recommendation letters.',open:'Open document',photos:'View photos',gallery:'Photo gallery',articlePdf:'Open uploaded article PDF',videos:'Video',press:'Press coverage',recommendations:'Letters of recommendation',outside:'Outside medicine',academic:'Academic & research moments'},
    de:{documents:'Nachweise',documentsDesc:'Qualifikationen, Zertifikate, Belege und Empfehlungsschreiben.',open:'Dokument öffnen',photos:'Fotos ansehen',gallery:'Fotogalerie',articlePdf:'Hochgeladenen Artikel als PDF öffnen',videos:'Video',press:'Presse',recommendations:'Empfehlungsschreiben',outside:'Außerhalb der Medizin',academic:'Akademische & wissenschaftliche Momente'},
    hu:{documents:'Igazolások',documentsDesc:'Végzettségek, tanúsítványok, igazoló dokumentumok és ajánlólevelek.',open:'Dokumentum megnyitása',photos:'Fotók megtekintése',gallery:'Fotógaléria',articlePdf:'Feltöltött cikk megnyitása PDF-ben',videos:'Videó',press:'Sajtómegjelenések',recommendations:'Ajánlólevelek',outside:'Az orvosláson kívül',academic:'Akadémiai és kutatási pillanatok'}
  }[lang];

  function imageSrc(key){ return (key && (MEDIA[key] || IMAGES[key])) || ''; }
  function figureTile(item, groupTitle){
    const src=imageSrc(item.key);
    if(!src) return '';
    return `<button type="button" class="photo-tile" data-gallery-key="${esc(item.key)}" aria-label="${esc(item.caption||groupTitle)}"><span class="photo-tile-image"><img class="photo-tile-backdrop" src="${src}" alt="" aria-hidden="true" loading="lazy" decoding="async"><img class="photo-tile-main" src="${src}" alt="${esc(item.caption||groupTitle)}" loading="lazy" decoding="async" style="object-fit:${esc(item.fit||'contain')};${item.position?`object-position:${esc(item.position)};`:''}"></span><span class="photo-tile-caption">${esc(item.caption||groupTitle)}</span></button>`;
  }
  function openGallery(title, items){
    const valid=(items||[]).filter(x=>imageSrc(x.key));
    if(!valid.length) return;
    $('#galleryContent').innerHTML=`<span class="kicker">${esc(copy.gallery)}</span><h3>${esc(title)}</h3><div class="dialog-grid">${valid.map(x=>`<figure><span class="dialog-image"><img class="dialog-backdrop" src="${imageSrc(x.key)}" alt="" aria-hidden="true" loading="lazy" decoding="async"><img class="dialog-main" src="${imageSrc(x.key)}" alt="${esc(x.caption||title)}" loading="lazy" decoding="async" style="object-fit:${esc(x.fit||'contain')};${x.position?`object-position:${esc(x.position)};`:''}"></span><figcaption>${esc(x.caption||title)}</figcaption></figure>`).join('')}</div>`;
    $('#galleryDialog').showModal();
  }

  function dataUrlToBlobUrl(dataUrl){
    try{
      const [head,body]=dataUrl.split(',',2);
      const mime=(head.match(/^data:([^;]+)/)||[])[1]||'application/octet-stream';
      const bytes=head.includes(';base64') ? Uint8Array.from(atob(body),c=>c.charCodeAt(0)) : new TextEncoder().encode(decodeURIComponent(body));
      return URL.createObjectURL(new Blob([bytes],{type:mime}));
    }catch(e){ console.error(e); return dataUrl; }
  }
  function openDataUrl(dataUrl){
    const url=dataUrlToBlobUrl(dataUrl);
    window.open(url,'_blank','noopener');
    if(url.startsWith('blob:')) setTimeout(()=>URL.revokeObjectURL(url),120000);
  }
  const pdfMap={
    'porto-cert':'assets/docs/IFMSA_Neonatology_Porto_2026_Redacted.pdf',
    'tunis-cert':'assets/docs/IFMSA_Pulmonology_Tunis_2025_Redacted.pdf',
    'catania-cert':'assets/docs/IFMSA_Cardiology_Catania_2024_Redacted.pdf',
    'ahd-cert':'assets/docs/American_Hospital_Dubai_Cardiology_2024_Redacted.pdf',
    'tdk-2025':'assets/docs/TDK_2025_Third_Prize_Redacted.pdf',
    'tdk-2026':'assets/docs/TDK_2026_Third_Prize_Redacted.pdf',
    'maa-completion':'assets/docs/Meta_Analysis_Academy_Completion_Redacted.pdf'
  };
  function openEvidence(item){
    if(pdfMap[item.id]) { window.open(pdfMap[item.id],'_blank','noopener'); return; }
    const src=imageSrc(item.imageKey);
    if(src){ openDataUrl(src); return; }
  }

  function setText(id,value){ const el=$(id); if(el && value!=null) el.textContent=value; }
  function setHtml(id,value){ const el=$(id); if(el && value!=null) el.innerHTML=value; }

  // Language and static UI
  document.documentElement.lang=lang;
  $$('.lang-switch [data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  const sections=ui.sections||{};
  const nav=ui.nav||{};
  const navLabels={research:nav.research||'Research',clinical:nav.clinical||'Clinical',leadership:nav.leadership||'Leadership',highlights:nav.highlights||'Highlights',documents:copy.documents,about:nav.about||'About'};
  Object.entries(navLabels).forEach(([k,v])=>$$(`[data-nav="${k}"]`).forEach(a=>a.textContent=v));
  setText('#researchKicker',sections.research?.kicker||'01 · Research'); setText('#researchHeading',sections.research?.title||'Research.'); setText('#researchDesc',sections.research?.desc||'Projects, publications and presentations.');
  setText('#clinicalKicker',sections.clinical?.kicker||'02 · Clinical'); setText('#clinicalHeading',sections.clinical?.title||'Clinical.'); setText('#clinicalDesc',sections.clinical?.desc||'International placements, electives and simulation training.');
  setText('#leadershipKicker',sections.leadership?.kicker||'03 · Leadership'); setText('#leadershipHeading',sections.leadership?.title||'Leadership.'); setText('#leadershipDesc',sections.leadership?.desc||'Student leadership, teaching and practical medical education.');
  setText('#highlightsKicker',sections.highlights?.kicker||'04 · Highlights'); setText('#highlightsHeading',sections.highlights?.title||'Highlights.'); setText('#highlightsDesc',sections.highlights?.desc||'Selected awards, competitions and academic milestones.');
  setText('#documentsKicker',sections.evidence?.kicker||`05 · ${copy.documents}`); setText('#documentsHeading',sections.evidence?.title||`${copy.documents}.`); setText('#documentsDesc',copy.documentsDesc);
  setText('#aboutKicker',sections.about?.kicker||'06 · About'); setText('#aboutHeading',sections.about?.title||'About.');
  setText('#aboutP1',ui.about?.p1||'Graduated from the six-year English Medicine programme at the University of Debrecen in 2026.');
  setText('#aboutP2',ui.about?.p2||'Interested in cardiovascular medicine, clinical research, imaging and translational science.');
  setText('#privacyNote',ui.about?.privacy||'Documents are shown in redacted form for privacy. Original unredacted copies can be made available on reasonable request.');
  setText('#hobbyLabel',copy.outside);

  // Hero
  setText('#heroEyebrow',ui.hero?.eyebrow||'MD · Clinical researcher · International experience');
  setHtml('#heroTitle',ui.hero?.title||'Clinical medicine,<br><em>built on evidence.</em>');
  setText('#heroSummary',d.profile.summary);
  setText('#exploreBtn',ui.hero?.explore||'Explore research');
  setHtml('#cvBtn',`${esc(ui.hero?.publicCV||'Public CV')} ↗`);
  $('#cvBtn').href=d.profile.cv;
  setHtml('#heroLinks',`<a href="${esc(d.profile.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="${esc(d.profile.orcid)}" target="_blank" rel="noopener">ORCID ↗</a><a href="mailto:${esc(d.profile.email)}">Email ↗</a>`);
  setText('#footerTagline',ui.footer?.tagline||d.profile.tagline);

  // Metrics
  setHtml('#metricStrip',d.metrics.map(m=>`<div class="metric"><strong>${esc(m.value)}${esc(m.suffix||'')}</strong><span>${esc(m.label)}</span></div>`).join(''));

  // Research
  setHtml('#researchGrid',d.research.map(p=>{
    const src=imageSrc(p.imageKey);
    return `<article class="research-card ${p.featured?'featured':''}">${src?`<div class="card-photo"><img src="${src}" alt="${esc(p.title)}" loading="lazy"></div>`:''}<span class="meta">${esc(p.venue||p.domain)} · ${esc(p.year)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="tag-row">${(p.tags||[]).slice(0,4).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><div class="link-row">${(p.links||[]).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}${p.credential?`<a href="${esc(p.credential)}" target="_blank" rel="noopener">${esc(copy.open)} ↗</a>`:''}</div></article>`;
  }).join(''));

  // Clinical
  setHtml('#clinicalGrid',d.clinical.map(c=>{
    const gallery=(c.gallery||[]).filter(x=>imageSrc(x.key));
    const src=gallery.length?imageSrc(gallery[0].key):'';
    return `<article class="clinical-card">${src?`<div class="clinical-visual"><img src="${src}" alt="${esc(gallery[0].caption||c.specialty)}" loading="lazy" style="${gallery[0].position?`object-position:${esc(gallery[0].position)}`:''}"></div>`:''}<div class="clinical-body"><div class="clinical-topline"><span>${esc(c.date)}</span><span>${esc(c.duration)}</span></div><h3>${esc(c.specialty)}</h3><div class="institution">${esc(c.institution)} · ${esc(c.location)}</div><p>${esc(c.detail)}</p>${(c.courses||[]).length?`<ul class="course-list">${c.courses.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`:''}<div class="clinical-actions">${gallery.length?`<button class="button secondary" type="button" data-clinical-gallery="${esc(c.id)}">${esc(copy.photos)} · ${gallery.length}</button>`:''}${c.credential?`<a class="button ghost" href="${esc(c.credential)}" target="_blank" rel="noopener">${esc(copy.open)} ↗</a>`:''}${c.evidenceId?`<button class="button ghost" type="button" data-evidence-id="${esc(c.evidenceId)}">${esc(copy.open)} ↗</button>`:''}</div></div></article>`;
  }).join(''));
  $$('[data-clinical-gallery]').forEach(b=>b.addEventListener('click',()=>{const c=d.clinical.find(x=>x.id===b.dataset.clinicalGallery); if(c) openGallery(c.galleryTitle||c.specialty,c.gallery||[]);}));

  // Leadership — Lub Dub
  const lub=d.lubdub;
  setHtml('#lubdubBlock',`<div class="subhead"><div><span class="mini-label">${esc(sections.lubdub?.kicker||'Founder-led education')}</span><h3>${esc(sections.lubdub?.title||'Lub Dub Club.')}</h3></div><p>${esc(sections.lubdub?.desc||'Cardiology education through simulation.')}</p></div><div class="feature-panel"><div class="feature-grid"><figure class="feature-photo"><img src="${imageSrc(lub.photoKey)||'assets/lubdub_activity.webp'}" alt="Lub Dub Club cardiology simulation" loading="lazy"></figure><div class="feature-copy"><img class="logo-small" src="${imageSrc(lub.logoKey)||'assets/lubdub_logo.webp'}" alt="Lub Dub Club logo"><span class="meta">${esc(lub.role)}</span><h3>${esc(lub.title)}</h3><p>${esc(lub.summary)}</p><ul>${(lub.points||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="link-row"><a href="${esc(lub.instagram)}" target="_blank" rel="noopener">Instagram ↗</a><a href="${esc(lub.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a></div></div></div></div>`);

  // Leadership — DOE
  const doe=d.doe;
  const doeGallery=[
    ...(doe.gallery||[]),
    {key:'pedsTeam',caption:'Paediatric outreach team',position:'50% 43%',fit:'contain'},
    {key:'doeCommunityGroup',caption:'Community health outreach group',position:'50% 50%',fit:'contain'}
  ].filter((x,i,a)=>imageSrc(x.key) && a.findIndex(y=>y.key===x.key)===i);
  setHtml('#doeBlock',`<div class="subhead"><div><span class="mini-label">${esc(sections.doe?.kicker||'Student leadership')}</span><h3>${esc(sections.doe?.title||'DOE & IFMSA.')}</h3></div><p>${esc(sections.doe?.desc||'Leadership, outreach and exchange.')}</p></div><div class="doe-layout"><div class="doe-copy"><img src="assets/doe_logo.png" alt="DOE logo"><span class="meta">${esc(doe.role)}</span><h3>${esc(doe.title)}</h3><p>${esc(doe.summary)}</p><ul>${(doe.points||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><div class="link-row"><a href="${esc(doe.website)}" target="_blank" rel="noopener">DOE ↗</a></div></div><div><div class="photo-grid">${doeGallery.map(x=>figureTile(x,doe.galleryTitle)).join('')}</div></div></div>`);
  $$('#doeBlock .photo-tile').forEach(b=>b.addEventListener('click',()=>openGallery(doe.galleryTitle||'DOE & IFMSA',doeGallery)));

  // Teaching
  setHtml('#teachingBlock',`<div class="subhead"><div><span class="mini-label">${esc(sections.teaching?.kicker||'Education')}</span><h3>${esc(sections.teaching?.title||'Teaching.')}</h3></div><p>${esc(sections.teaching?.desc||'Research methods and pathology.')}</p></div><div class="teaching-grid">${d.teaching.map(t=>`<article class="teaching-card"><span class="meta">${esc(t.date)}</span><h4>${esc(t.role)}</h4><strong>${esc(t.organization)}</strong><p>${esc(t.detail)}</p></article>`).join('')}</div>`);

  // Highlights — MedCup
  const med=d.medcup; const medItems=(med.images||[]).map((key,i)=>({key,caption:['Belgian Defence medical simulation','Belgian Defence medical simulation','Final clinical stage','Final quiz','2nd place · MedCup 2024'][i]||'MedCup 2024'})).filter(x=>imageSrc(x.key));
  setHtml('#medcupBlock',`<div class="subhead"><div><span class="mini-label">${esc(sections.medcup?.kicker||'Featured')}</span><h3>${esc(sections.medcup?.title||'MedCup 2024.')}</h3></div><p>${esc(sections.medcup?.desc||'Second place in Brussels.')}</p></div><div class="medcup-panel"><div class="medcup-header"><div><span class="meta">${esc(med.result)}</span><h3>${esc(med.title)}</h3><p>${esc(med.summary)}</p><p>${esc(med.detail)}</p></div><div class="medcup-actions"><a class="button primary" href="assets/docs/MedCup_2024_Article.pdf" target="_blank" rel="noopener">${esc(copy.articlePdf)} ↗</a><a class="button secondary" href="${esc(med.source)}" target="_blank" rel="noopener">University article ↗</a><a class="button ghost" href="${esc(med.youtubeAftermovie)}" target="_blank" rel="noopener">Aftermovie ↗</a><a class="button ghost" href="${esc(med.youtubeLivestream)}" target="_blank" rel="noopener">Livestream replay ↗</a></div></div><div class="photo-grid">${medItems.map(x=>figureTile(x,med.title)).join('')}</div><div class="link-row" style="margin-top:18px">${(med.press||[]).map(p=>`<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.label)} ↗</a>`).join('')}</div></div>`);
  $$('#medcupBlock .photo-tile').forEach(b=>b.addEventListener('click',()=>openGallery(med.title,medItems)));

  // Highlights — Academic photography (includes user-supplied final batch)
  const academicItems=[
    {key:'boneSpectPresentation',caption:'Bone SPECT/CT research presentation',fit:'contain'},
    {key:'tdkAwardPortrait',caption:'Third prize at the TDK conference',fit:'contain'},
    {key:'mdThesisPortrait',caption:'MD thesis milestone',fit:'contain'},
    {key:'mdThesisBook',caption:'MD thesis, University of Debrecen',fit:'contain'},
    {key:'mdThesisOutdoor',caption:'MD thesis graduation portrait',fit:'contain'},
    {key:'unidebStudentTalk',caption:'Student orientation talk at the University of Debrecen',fit:'contain'}
  ].filter(x=>imageSrc(x.key));
  setHtml('#academicPhotosBlock',`<div class="subhead"><div><span class="mini-label">${esc(copy.academic)}</span><h3>${esc(copy.academic)}.</h3></div><p></p></div><div class="academic-photo-grid">${academicItems.map(x=>figureTile(x,copy.academic)).join('')}</div>`);
  $$('#academicPhotosBlock .photo-tile').forEach(b=>b.addEventListener('click',()=>openGallery(copy.academic,academicItems)));

  // Awards
  setHtml('#awardsBlock',`<div class="subhead"><div><span class="mini-label">${esc(sections.awards?.kicker||'Recognition')}</span><h3>${esc(sections.awards?.title||'Awards & recognition.')}</h3></div><p>${esc(sections.awards?.desc||'Selected academic and scientific recognition.')}</p></div><div class="award-list">${d.awards.map(a=>`<article class="award-item"><span class="meta">${esc(a.year)}</span><h4>${esc(a.title)}</h4><p>${esc(a.detail)}</p>${a.source?`<a class="award-link" href="${esc(a.source)}" target="_blank" rel="noopener">Source ↗</a>`:'<span></span>'}</article>`).join('')}</div>`);

  // Documents
  const evidenceIndex={}; (d.evidenceGroups||[]).forEach(g=>(g.items||[]).forEach(i=>evidenceIndex[i.id]=i));
  setHtml('#evidenceGroups',(d.evidenceGroups||[]).map(g=>`<section class="evidence-group"><h3>${esc(g.title)}</h3><p>${esc(g.description)}</p><div class="document-grid">${(g.items||[]).map(item=>{const src=imageSrc(item.imageKey);return `<button type="button" class="document-card" data-evidence="${esc(item.id)}">${src?`<div class="document-preview"><img src="${src}" alt="${esc(item.title)}" loading="lazy"></div>`:''}<div class="document-body"><span class="meta">${esc(item.year||'')} · ${esc(item.issuer||'')}</span><h4>${esc(item.title)}</h4><p>${esc(item.note||'')}</p><span class="open-label">${esc(copy.open)} ↗</span></div></button>`}).join('')}</div></section>`).join(''));
  $$('[data-evidence]').forEach(b=>b.addEventListener('click',()=>{const item=evidenceIndex[b.dataset.evidence]; if(item)openEvidence(item);}));
  $$('[data-evidence-id]').forEach(b=>b.addEventListener('click',()=>{const item=evidenceIndex[b.dataset.evidenceId]; if(item)openEvidence(item);}));

  // Recommendations are intentionally separate as requested.
  setHtml('#recommendationsBlock',`<div class="subhead"><div><span class="mini-label">References</span><h3>${esc(copy.recommendations)}.</h3></div><p></p></div><div class="recommendation-grid">${(d.recommendations||[]).map(r=>{const src=imageSrc(r.imageKey);return `<button type="button" class="document-card" data-recommendation="${esc(r.id)}">${src?`<div class="document-preview"><img src="${src}" alt="${esc(r.title)}" loading="lazy"></div>`:''}<div class="document-body"><span class="meta">${esc(r.year)} · ${esc(r.issuer)}</span><h4>${esc(r.title)}</h4><p>${esc(r.detail)}</p><span class="open-label">${esc(copy.open)} ↗</span></div></button>`}).join('')}</div>`);
  $$('[data-recommendation]').forEach(b=>b.addEventListener('click',()=>{const r=d.recommendations.find(x=>x.id===b.dataset.recommendation); if(r)openEvidence(r);}));

  // About / languages / equestrian
  setHtml('#languageList',(d.languages||[]).map(l=>`<div class="language-chip"><strong>${esc(l.language)}</strong><span>${esc(l.level)}</span></div>`).join(''));
  setHtml('#contactLinks',`<a href="mailto:${esc(d.profile.email)}">${esc(d.profile.email)}</a><a href="${esc(d.profile.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a><a href="${esc(d.profile.orcid)}" target="_blank" rel="noopener">ORCID ↗</a>`);
  const hobby=d.hobbies?.[0];
  if(hobby){setText('#hobbyTitle',hobby.title);setText('#hobbySummary',hobby.summary);const items=(hobby.gallery||[]).filter(x=>imageSrc(x.key));setHtml('#hobbyGallery',items.map(x=>figureTile(x,hobby.title)).join(''));$$('#hobbyGallery .photo-tile').forEach(b=>b.addEventListener('click',()=>openGallery(hobby.galleryTitle||hobby.title,items)));}

  // Dialog
  $('#galleryClose')?.addEventListener('click',()=>$('#galleryDialog').close());
  $('#galleryDialog')?.addEventListener('click',e=>{if(e.target===$('#galleryDialog'))$('#galleryDialog').close();});

  // Language switching: preserve current section/hash; if no hash, stay at top.
  $$('.lang-switch [data-lang]').forEach(b=>b.addEventListener('click',()=>{
    const next=b.dataset.lang; if(!supported.includes(next)||next===lang)return;
    localStorage.setItem('me-lang',next); const u=new URL(location.href); u.searchParams.set('lang',next); location.href=u.toString();
  }));

  // Theme
  const savedTheme=localStorage.getItem('me-theme'); if(savedTheme==='light'||savedTheme==='dark')document.documentElement.dataset.theme=savedTheme;
  $('#themeToggle')?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;localStorage.setItem('me-theme',next);});

  // Mobile nav
  $('#menuToggle')?.addEventListener('click',()=>{const m=$('#mobileMenu');const open=m.classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));});
  $$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{$('#mobileMenu').classList.remove('open');$('#menuToggle').setAttribute('aria-expanded','false');}));

  // Fail-safe diagnostics: make missing-media problems visible in console without breaking the page.
  const requestedMedia=new Set();
  d.clinical.forEach(c=>(c.gallery||[]).forEach(x=>requestedMedia.add(x.key)));
  (d.doe?.gallery||[]).forEach(x=>requestedMedia.add(x.key));
  (d.medcup?.images||[]).forEach(x=>requestedMedia.add(x));
  (d.hobbies?.[0]?.gallery||[]).forEach(x=>requestedMedia.add(x.key));
  [...requestedMedia].filter(k=>!imageSrc(k)).forEach(k=>console.warn('Portfolio media missing:',k));
})();