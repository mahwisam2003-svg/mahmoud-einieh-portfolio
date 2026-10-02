(() => {
  const BASE = SITE_DATA;
  const I18N = typeof SITE_I18N !== 'undefined' ? SITE_I18N : { en:{} };
  const imgs = typeof SITE_IMAGES !== 'undefined' ? SITE_IMAGES : {};
  const media = window.SITE_MEDIA = window.SITE_MEDIA || {};
  const $ = (s, p=document) => p.querySelector(s);
  const $$ = (s, p=document) => [...p.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

  const supported = ['en','de','hu'];
  const queryLang = new URLSearchParams(location.search).get('lang');
  const savedLang = localStorage.getItem('me-lang');
  const lang = supported.includes(queryLang) ? queryLang : (supported.includes(savedLang) ? savedLang : 'en');
  const pack = I18N[lang] || I18N.en;
  const ui = pack.ui || I18N.en.ui;

  function cloneData(obj){ return JSON.parse(JSON.stringify(obj)); }
  function localizeData(){
    const d = cloneData(BASE);
    if(pack.profile) Object.assign(d.profile, pack.profile);
    if(pack.metrics) d.metrics = d.metrics.map((m,i)=>({...m,label:pack.metrics[i] || m.label}));

    d.research = d.research.map(p=>{
      const tr = pack.research?.[p.id] || {};
      const out = {...p,...tr};
      if(tr.metricLabels) out.metrics = p.metrics.map((m,i)=>({...m,label:tr.metricLabels[i] || m.label}));
      if(tr.linkLabels) out.links = p.links.map((l,i)=>({...l,label:tr.linkLabels[i] || l.label}));
      return out;
    });

    d.clinical = d.clinical.map(c=>({...c,...(pack.clinical?.[c.id]||{})}));

    d.awards = d.awards.map(a=>{
      const tr = pack.awards?.[a.title] || {};
      return {...a,...tr};
    });

    d.teaching = d.teaching.map(t=>{
      const key = `${t.role}|${t.organization}`;
      return {...t,...(pack.teaching?.[key]||{})};
    });

    if(pack.lubdub) d.lubdub = {...d.lubdub,...pack.lubdub};
    if(pack.doe) d.doe = {...d.doe,...pack.doe};

    if(pack.medcup) d.medcup = {...d.medcup,...pack.medcup};
    if(pack.evidenceGroups) d.evidenceGroups = d.evidenceGroups.map(g=>({...g,...(pack.evidenceGroups[g.id]||{})}));
    if(pack.recommendations) d.recommendations = d.recommendations.map(r=>({...r,...(pack.recommendations[r.id]||{})}));

    if(pack.languages) d.languages = pack.languages.map(([language,level])=>({language,level}));
    return d;
  }
  const d = localizeData();

  function applyDeferredMedia(){
    $('[data-media-key]').forEach(img=>{
      const key=img.dataset.mediaKey;
      if(key && media[key] && img.getAttribute('src') !== media[key]) img.setAttribute('src',media[key]);
    });
  }
  window.addEventListener('site-media-updated', applyDeferredMedia);

  function setHTML(sel, value){ const el=$(sel); if(el && value!=null) el.innerHTML=value; }
  function setText(sel, value){ const el=$(sel); if(el && value!=null) el.textContent=value; }
  function applyStaticUI(){
    document.documentElement.lang = lang;
    document.title = pack.meta?.title || document.title;
    const md=$('meta[name="description"]'); if(md && pack.meta?.description) md.content=pack.meta.description;
    const ogd=$('meta[property="og:description"]'); if(ogd && pack.meta?.description) ogd.content=pack.meta.description;

    const navMap = {
      research:ui.nav.research,
      clinical:ui.nav.clinical,
      publications:ui.nav.outputs,
      medcup:ui.nav.medcup || 'MedCup',
      lubdub:ui.nav.leadership || ui.nav.lubdub || 'Leadership',
      credentials:ui.nav.evidence,
      about:ui.nav.about
    };
    Object.entries(navMap).forEach(([id,label])=>{
      $$('a[href="#'+id+'"]').forEach(a=>a.textContent=label);
    });

    setHTML('.eyebrow', '<span class="status-dot"></span>'+esc(ui.hero.eyebrow));
    setHTML('#hero-title', ui.hero.title);
    const heroPrimary=$('.hero-actions .button-primary'); if(heroPrimary) heroPrimary.innerHTML=esc(ui.hero.explore)+' <span>↘</span>';
    const cv=$('#cvLink'); if(cv) cv.innerHTML=esc(ui.hero.publicCV)+' <span>↗</span>';
    setText('.profile-card .mini-label', ui.hero.currentFocus);
    setText('.profile-card > div:first-child strong', ui.hero.focusValue);
    setText('.profile-card-row span:first-child', ui.hero.researchIdentity);

    const applySection=(id,obj)=>{
      const sec=$('#'+id); if(!sec||!obj)return;
      const kicker=$('.kicker',sec); if(kicker) kicker.textContent=obj.kicker;
      const h2=$('.section-heading h2',sec); if(h2) h2.innerHTML=obj.title;
      const p=$('.section-heading > p',sec); if(p) p.textContent=obj.desc;
    };
    applySection('research',ui.sections.research);
    applySection('clinical',ui.sections.clinical);
    applySection('publications',ui.sections.outputs);
    applySection('medcup',ui.sections.medcup);
    applySection('awards',ui.sections.awards);
    applySection('lubdub',ui.sections.lubdub);
    applySection('doe',ui.sections.doe);
    applySection('credentials',ui.sections.evidence);
    applySection('recommendations',ui.sections.recommendations);
    applySection('teaching',ui.sections.teaching);

    const about=$('#about');
    if(about){
      const kicker=$('.about-copy .kicker',about); if(kicker) kicker.textContent=ui.sections.about.kicker;
      const h2=$('.about-copy h2',about); if(h2) h2.innerHTML=ui.sections.about.title;
      const ps=$$('.about-copy p',about); if(ps[0]) ps[0].textContent=ui.about.p1; if(ps[1]) ps[1].textContent=ui.about.p2;
      const label=$('.about-panel .mini-label',about); if(label) label.textContent=ui.about.selected;
      const links=$$('.about-panel > a',about);
      if(links[0]){ $('span',links[0]).textContent=ui.about.publicCV; $('strong',links[0]).textContent='PDF ↗'; }
      if(links[1]){ $('span',links[1]).textContent=ui.about.selectedEvidence || 'Selected evidence'; $('strong',links[1]).textContent=(ui.about.view || 'View')+' ↓'; }
      if(links[2]){ $('strong',links[2]).textContent=ui.about.record+' ↗'; }
      if(links[3]){ $('strong',links[3]).textContent=ui.about.firstAuthor+' ↗'; }
      const privacy=$('.privacy-note',about); if(privacy) privacy.textContent=ui.about.privacy;
    }

    const contact=$('.contact-section');
    if(contact){
      setText('.contact-section .kicker',ui.contact.kicker);
      setHTML('.contact-section h2',ui.contact.title);
      const email=$('.contact-actions .button-primary'); if(email) email.innerHTML=esc(ui.buttons.email)+' <span>↗</span>';
    }

    const footer=$('.site-footer');
    if(footer){
      const firstSpan=$('.site-footer > div:first-child span'); if(firstSpan) firstSpan.textContent=ui.footer.tagline;
      const living=$('.footer-meta span'); if(living) living.textContent=ui.footer.living;
      const back=$('.footer-meta a'); if(back) back.textContent=ui.buttons.backTop+' ↑';
    }

    const searchInput=$('#searchInput'); if(searchInput) searchInput.placeholder=ui.search.placeholder;
    const lubLink=$('.lubdub-link'); if(lubLink) lubLink.innerHTML=esc(ui.buttons.clubInstagram)+' <span>↗</span>';
    const doeLink=$('.doe-link'); if(doeLink) doeLink.innerHTML=esc(ui.buttons.doeWebsite)+' <span>↗</span>';

    $$('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  }
  applyStaticUI();

  $$('[data-lang]').forEach(b=>b.addEventListener('click',()=>{
    const next=b.dataset.lang;
    if(!supported.includes(next) || next===lang) return;
    localStorage.setItem('me-lang',next);
    const url=new URL(location.href);
    if(next==='en') url.searchParams.delete('lang'); else url.searchParams.set('lang',next);
    location.href=url.pathname+(url.search||'')+url.hash;
  }));

  $('#heroSummary').textContent = d.profile.summary;
  if($('#heroPortrait') && imgs.graduationPortrait) $('#heroPortrait').src = imgs.graduationPortrait;
  if($('#graduationPhoto') && imgs.graduationPortrait) $('#graduationPhoto').src = imgs.graduationPortrait;
  $('#cvLink').href = d.profile.cv;
  $('#cvLink').target = '_blank';
  $('#cvLink').rel = 'noopener';
  $('#heroLinks').innerHTML = [
    ['ORCID', d.profile.orcid],
    ['LinkedIn', d.profile.linkedin],
    ['Email', `mailto:${d.profile.email}`]
  ].map(([label,url]) => `<a href="${url}" ${url.startsWith('http')?'target="_blank" rel="noopener"':''}>${label}</a>`).join('');

  $('#metricStrip').innerHTML = d.metrics.map(m => `<div class="metric reveal"><strong><span data-count="${m.value}">0</span>${m.suffix}</strong><span>${esc(m.label)}</span></div>`).join('');

  const baseResearch = Object.fromEntries(BASE.research.map(x=>[x.id,x]));
  const researchCats = ['All','Cardiology','Imaging / AI','Nephrology','Hematology'];
  let researchFilter = 'All';
  let researchExpanded = false;
  const matchesResearchCategory = (p, filter) => {
    if(filter==='All') return true;
    const b=baseResearch[p.id] || p;
    const t = [b.domain,b.type,...b.tags].join(' ').toLowerCase();
    if(filter==='Cardiology') return /cardio|coronary|electrophysi|arrhythm|echo/.test(t);
    if(filter==='Imaging / AI') return /imaging|spect|oct|pet\/ct|artificial intelligence|synthetic ct/.test(t);
    if(filter==='Nephrology') return /nephro|kidney|ckd|rituximab|glomerular/.test(t);
    if(filter==='Hematology') return /hematolog|autopsy|myeloproliferative|hlh|bone marrow/.test(t);
    return false;
  };
  function renderResearchFilters(){
    $('#researchFilters').innerHTML = researchCats.map(c => `<button type="button" class="filter-pill ${c===researchFilter?'active':''}" data-filter="${c}">${esc(ui.filters.research[c]||c)}</button>`).join('');
  }
  renderResearchFilters();
  $('#researchFilters').addEventListener('click', e => {
    const b=e.target.closest('[data-filter]'); if(!b)return;
    researchFilter=b.dataset.filter; researchExpanded=true;
    renderResearchFilters(); renderResearch();
  });
  $('#showAllResearch').addEventListener('click',()=>{
    if(researchFilter!=='All'){
      researchFilter='All'; researchExpanded=false; renderResearchFilters();
    }else{ researchExpanded=!researchExpanded; }
    renderResearch();
  });

  const photoClass=p=>p.imageKey==='escPoster'?'photo-esc':p.imageKey==='eanmBarcelona'?'photo-eanm':'';
  function researchCard(p){
    const metrics = (p.metrics||[]).slice(0,4).map(m=>`<div class="micro-stat"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('');
    return `<article class="research-card ${p.featured?'featured':''} reveal" tabindex="0" data-project="${p.id}" role="button" aria-label="${esc(ui.aria.openProject)}: ${esc(p.title)}">
      ${p.imageKey && imgs[p.imageKey] ? `<div class="research-card-image ${photoClass(p)}"><img src="${imgs[p.imageKey]}" alt="${esc(p.title)}" loading="lazy"></div>` : ''}
      <div class="card-top"><span class="status-badge">${esc(p.status)}</span><span class="project-year">${esc(p.year)}</span></div>
      <h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
      ${metrics?`<div class="card-metrics">${metrics}</div>`:''}
      <div class="card-footer"><strong>${esc(p.domain)}</strong><span class="card-arrow">↗</span></div>
    </article>`;
  }
  function renderResearch(){
    let projects = d.research.filter(p => matchesResearchCategory(p,researchFilter));
    if(!researchExpanded && researchFilter==='All') projects = projects.slice(0,6);
    $('#researchGrid').innerHTML=projects.map(researchCard).join('');
    $('#showAllResearch').textContent = (!researchExpanded && researchFilter==='All') ? ui.buttons.showAll : ui.buttons.showFeatured;
    if(researchFilter!=='All') $('#showAllResearch').textContent=ui.buttons.resetResearch;
    bindReveal();
  }
  renderResearch();

  const modal=$('#projectModal'), modalContent=$('#modalContent');
  function openProject(id){
    const p=d.research.find(x=>x.id===id); if(!p)return;
    modalContent.innerHTML=`
      <span class="modal-kicker">${esc(p.domain)} · ${esc(p.year)}</span>
      <h3 class="modal-title">${esc(p.title)}</h3>
      ${p.imageKey && imgs[p.imageKey] ? `<img class="modal-project-photo ${photoClass(p)}" src="${imgs[p.imageKey]}" alt="${esc(p.title)}" loading="lazy">` : ''}
      <p class="modal-summary">${esc(p.summary)}</p>
      ${(p.metrics||[]).length?`<div class="modal-metrics">${(p.metrics||[]).map(m=>`<div class="modal-stat"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</div>`:''}
      <div class="modal-section"><h4>${esc(ui.modal.detail)}</h4><p>${esc(p.detail)}</p></div>
      <div class="modal-section"><h4>${esc(ui.modal.role)}</h4><p>${esc(p.role)}</p></div>
      <div class="modal-section"><h4>${esc(ui.modal.status)}</h4><p>${esc(p.status)} · ${esc(p.type)}</p></div>
      <div class="modal-links">
        ${(p.links||[]).map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}

      </div>`;
    modal.showModal(); document.body.classList.add('modal-open');
  }
  $('#researchGrid').addEventListener('click',e=>{const c=e.target.closest('[data-project]');if(c)openProject(c.dataset.project)});
  $('#researchGrid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-project]')){e.preventDefault();openProject(e.target.dataset.project)}});
  $('#modalClose').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
  modal.addEventListener('close',()=>document.body.classList.remove('modal-open'));

  const baseClinical = Object.fromEntries(BASE.clinical.map(x=>[x.id,x]));
  const clinicalCats=['All','Cardiology','Medicine','Surgery','Neonatology'];
  let clinicalFilter='All', countryFilter='All';
  function renderClinicalFilters(){
    $('#clinicalFilters').innerHTML=clinicalCats.map(c=>`<button type="button" class="filter-pill ${c===clinicalFilter?'active':''}" data-clinical="${c}">${esc(ui.filters.clinical[c]||c)}</button>`).join('');
  }
  renderClinicalFilters();
  const clinicalCategory=c=>{
    const s=(baseClinical[c.id]?.specialty || c.specialty).toLowerCase();
    if(s.includes('cardiology'))return'Cardiology';
    if(s.includes('surgery'))return'Surgery';
    if(s.includes('neonat'))return'Neonatology';
    return'Medicine';
  };
  function renderClinical(){
    let items=d.clinical.filter(c=>(clinicalFilter==='All'||clinicalCategory(c)===clinicalFilter)&&(countryFilter==='All'||(baseClinical[c.id]?.location||c.location).includes(countryFilter)));
    $('#clinicalList').innerHTML=items.map(c=>`<article class="clinical-item reveal">
      <div class="clinical-date"><strong>${esc(c.date)}</strong><br>${esc(c.duration)}</div>
      <div class="clinical-main"><h3>${esc(c.specialty)}</h3><div class="institution">${esc(c.institution)} · ${esc(c.location)}</div><p>${esc(c.detail)}</p></div>
      <div class="clinical-meta"><span>${esc(ui.clinical.supervision)}: ${esc(c.supervisor)}</span></div>
    </article>`).join('') || `<div class="search-empty">${esc(ui.clinical.empty)}</div>`;
    bindReveal();
  }
  $('#clinicalFilters').addEventListener('click',e=>{const b=e.target.closest('[data-clinical]');if(!b)return;clinicalFilter=b.dataset.clinical;renderClinicalFilters();renderClinical()});
  $$('.clinical-route button').forEach(b=>b.addEventListener('click',()=>{const c=b.dataset.country;if(countryFilter===c){countryFilter='All';b.classList.remove('active')}else{countryFilter=c;$$('.clinical-route button').forEach(x=>x.classList.toggle('active',x===b))}renderClinical()}));
  renderClinical();

  const outputIds = new Set(BASE.research.filter(p=>/Published|Submitted|Conference|Completed/.test(p.status)).map(p=>p.id));
  const outputs=d.research.filter(p=>outputIds.has(p.id));
  $('#outputsGrid').innerHTML=outputs.map(p=>`<article class="output-card">${p.imageKey && imgs[p.imageKey] ? `<div class="output-photo ${photoClass(p)}"><img src="${imgs[p.imageKey]}" alt="${esc(p.title)}" loading="lazy"></div>` : ''}<span class="pub-journal">${esc(p.venue||p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.status)} · ${esc(p.type)} · ${esc(p.year)}</p><div class="output-links">${(p.links||[]).map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div></article>`).join('');
  $('#sourceRibbon').innerHTML=d.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('');

  $('#awardList').innerHTML=d.awards.map(a=>`<article class="award-item reveal"><span class="award-year">${esc(a.year)}</span><h3>${esc(a.title)}</h3><p>${esc(a.detail)}</p><div class="award-action">${a.source?`<a class="doc-link" href="${a.source}" target="_blank" rel="noopener">${esc(ui.buttons.officialSource)} ↗</a>`:''}${a.credential?`<a class="doc-link" href="${a.credential}" target="_blank" rel="noopener">${esc(ui.buttons.supportingDoc)} ↗</a>`:''}</div></article>`).join('');

  if(d.medcup){
    setText('#medcupResult', d.medcup.result);
    setText('#medcupTitle', d.medcup.title);
    setText('#medcupSummary', d.medcup.summary);
    setText('#medcupDetail', d.medcup.detail);
    const source=$('#medcupSource'); if(source) source.href=d.medcup.source;
    const youtube=$('#medcupYoutube'); if(youtube && d.medcup.youtube) youtube.href=d.medcup.youtube;
    const press=$('#medcupPress');
    if(press) press.innerHTML=(d.medcup.press||[]).map(x=>`<a href="${x.url}" target="_blank" rel="noopener">${esc(x.label)} ↗</a>`).join('');
    const gallery=$('#medcupGallery');
    if(gallery){
      gallery.innerHTML=(d.medcup.images||[]).map((key,i)=>`<figure class="medcup-shot shot-${i+1}"><img data-media-key="${esc(key)}" alt="MedCup 2024 — ${i<2?'Belgian Defence clinical simulation':i===2?'final stage':i===3?'final quiz':'second-place award'}" loading="lazy" decoding="async"></figure>`).join('');
    }
  }

  const evidenceItems=(d.evidenceGroups||[]).flatMap(g=>(g.items||[]).map(item=>({...item,groupTitle:g.title})));
  const recommendationItems=d.recommendations||[];
  const evidenceById=Object.fromEntries([...evidenceItems,...recommendationItems].map(x=>[x.id,x]));

  $('#evidenceGroups').innerHTML=(d.evidenceGroups||[]).map(g=>`
    <section class="evidence-group reveal">
      <div class="evidence-group-head"><div><h3>${esc(g.title)}</h3><p>${esc(g.description||'')}</p></div><span>${g.items.length}</span></div>
      <div class="evidence-grid">
        ${g.items.map(item=>`<button class="evidence-card" type="button" data-evidence="${item.id}">
          <div class="evidence-preview"><img data-media-key="${esc(item.imageKey)}" alt="${esc(item.title)}" loading="lazy" decoding="async"></div>
          <div class="evidence-copy"><span>${esc(item.year)} · ${esc(item.note)}</span><h4>${esc(item.title)}</h4><p>${esc(item.issuer)}</p><strong>${esc(ui.credential?.open || 'View redacted copy')} ↗</strong></div>
        </button>`).join('')}
      </div>
    </section>`).join('');

  $('#recommendationGrid').innerHTML=recommendationItems.map(item=>`
    <button class="recommendation-card glass reveal" type="button" data-evidence="${item.id}">
      <div class="recommendation-preview"><img data-media-key="${esc(item.imageKey)}" alt="${esc(item.title)}" loading="lazy" decoding="async"></div>
      <div class="recommendation-copy"><span>${esc(item.year)} · Signed recommendation</span><h3>${esc(item.title)}</h3><p>${esc(item.issuer)}</p><p>${esc(item.detail)}</p><strong>View letter ↗</strong></div>
    </button>`).join('');

  const evidenceModal=$('#evidenceModal'), evidenceModalContent=$('#evidenceModalContent');
  function openEvidence(id){
    const item=evidenceById[id]; if(!item || !evidenceModal)return;
    const isRecommendation=recommendationItems.some(r=>r.id===id);
    evidenceModalContent.innerHTML=`
      <span class="modal-kicker">${esc(item.year)} · ${esc(isRecommendation?'Recommendation letter':item.note||item.groupTitle||'Supporting evidence')}</span>
      <h3 class="modal-title">${esc(item.title)}</h3>
      <p class="modal-summary">${esc(item.issuer||'')}</p>
      ${item.detail?`<p class="modal-summary">${esc(item.detail)}</p>`:''}
      <img class="evidence-modal-image" data-media-key="${esc(item.imageKey)}" alt="${esc(item.title)}">
      <div class="evidence-modal-note">${isRecommendation?'Signature redacted for privacy. Original unredacted copy available on reasonable request.':'Redacted for privacy. Original unredacted copy available on reasonable request.'}</div>`;
    applyDeferredMedia();
    evidenceModal.showModal(); document.body.classList.add('modal-open');
  }
  $('#evidenceGroups').addEventListener('click',e=>{const b=e.target.closest('[data-evidence]');if(b)openEvidence(b.dataset.evidence)});
  $('#recommendationGrid').addEventListener('click',e=>{const b=e.target.closest('[data-evidence]');if(b)openEvidence(b.dataset.evidence)});
  $('#evidenceModalClose').addEventListener('click',()=>evidenceModal.close());
  evidenceModal.addEventListener('click',e=>{if(e.target===evidenceModal)evidenceModal.close()});
  evidenceModal.addEventListener('close',()=>document.body.classList.remove('modal-open'));

  $('#teachingGrid').innerHTML=d.teaching.map(t=>`<article class="teaching-card reveal"><span class="role">${esc(t.role)}</span><h3>${esc(t.organization)}</h3><span class="date">${esc(t.date)}</span><p>${esc(t.detail)}</p>${t.credential?`<a class="doc-link" href="${t.credential}" target="_blank" rel="noopener">${esc(ui.buttons.supportingDoc)} ↗</a>`:''}</article>`).join('');
  $('#languageList').innerHTML=d.languages.map(l=>`<div class="language-chip"><strong>${esc(l.language)}</strong><span>${esc(l.level)}</span></div>`).join('');

  applyDeferredMedia();

  if(d.lubdub){
    if($('#lubdubPhoto') && imgs[d.lubdub.photoKey]) $('#lubdubPhoto').src = imgs[d.lubdub.photoKey];
    if($('#lubdubLogo') && imgs[d.lubdub.logoKey]) $('#lubdubLogo').src = imgs[d.lubdub.logoKey];
    if($('#lubdubTitle')) $('#lubdubTitle').textContent = d.lubdub.title;
    if($('#lubdubRole')) $('#lubdubRole').textContent = d.lubdub.role;
    if($('#lubdubSummary')) $('#lubdubSummary').textContent = d.lubdub.summary;
    if($('#lubdubPoints')) $('#lubdubPoints').innerHTML = d.lubdub.points.map(x=>`<li>${esc(x)}</li>`).join('');
    const lubLink=$('.lubdub-link'); if(lubLink && d.lubdub.instagram) lubLink.href=d.lubdub.instagram;
    const lubLinkedIn=$('.lubdub-linkedin'); if(lubLinkedIn && d.lubdub.linkedin) lubLinkedIn.href=d.lubdub.linkedin;
  }

  if(d.doe){
    if($('#doeTitle')) $('#doeTitle').textContent = d.doe.title;
    if($('#doeRole')) $('#doeRole').textContent = d.doe.role;
    if($('#doeSummary')) $('#doeSummary').textContent = d.doe.summary;
    if($('#doePoints')) $('#doePoints').innerHTML = d.doe.points.map(x=>`<li>${esc(x)}</li>`).join('');
    const doeLink=$('.doe-link'); if(doeLink && d.doe.website) doeLink.href=d.doe.website;
  }

  const themeToggle=$('#themeToggle');
  if(themeToggle && !themeToggle.dataset.themeBound){
    themeToggle.dataset.themeBound='true';
    themeToggle.addEventListener('click',()=>{
      const t=document.documentElement.dataset.theme==='dark'?'light':'dark';
      document.documentElement.dataset.theme=t;
      localStorage.setItem('me-theme',t);
      const meta=document.querySelector('meta[name="theme-color"]');
      if(meta) meta.content=t==='light'?'#ffffff':'#090b10';
    });
  }

  const menuToggle=$('#menuToggle'), mobileMenu=$('#mobileMenu');
  menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));mobileMenu.classList.toggle('open',!open)});
  $$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

  const searchDialog=$('#searchDialog'), searchInput=$('#searchInput'), searchResults=$('#searchResults');
  const searchable=[
    ...d.research.map(x=>({kind:ui.search.research,title:x.title,meta:`${x.domain} · ${x.status}`,text:[x.title,x.domain,x.summary,...(x.tags||[])].join(' '),action:()=>{searchDialog.close();openProject(x.id)}})),
    ...d.clinical.map(x=>({kind:ui.search.clinical,title:`${x.specialty} · ${x.institution}`,meta:`${x.location} · ${x.date}`,text:[x.specialty,x.institution,x.location,x.detail,x.supervisor].join(' '),action:()=>{searchDialog.close();location.hash='clinical'}})),
    ...d.awards.map(x=>({kind:ui.search.recognition,title:x.title,meta:x.year,text:[x.title,x.detail].join(' '),action:()=>{searchDialog.close();location.hash='awards'}})),
    ...(d.medcup?[{kind:'MedCup',title:d.medcup.title,meta:d.medcup.result,text:[d.medcup.title,d.medcup.result,d.medcup.summary,d.medcup.detail].join(' '),action:()=>{searchDialog.close();location.hash='medcup'}}]:[]),
    ...evidenceItems.map(x=>({kind:ui.search.credential,title:x.title,meta:`${x.issuer} · ${x.year}`,text:[x.title,x.issuer,x.note].join(' '),action:()=>{searchDialog.close();location.hash='credentials';setTimeout(()=>openEvidence(x.id),200)}})),
    ...recommendationItems.map(x=>({kind:'Recommendation',title:x.title,meta:`${x.issuer} · ${x.year}`,text:[x.title,x.issuer,x.detail].join(' '),action:()=>{searchDialog.close();location.hash='recommendations';setTimeout(()=>openEvidence(x.id),200)}}))
  ];
  function openSearch(){searchDialog.showModal();setTimeout(()=>searchInput.focus(),30);renderSearch('')}
  function renderSearch(q){
    q=q.trim().toLowerCase();
    const res=(q?searchable.filter(x=>x.text.toLowerCase().includes(q)):searchable.slice(0,8)).slice(0,12);
    searchResults.innerHTML=res.map((x,i)=>`<button class="search-result" type="button" data-search-index="${i}"><strong>${esc(x.title)}</strong><span>${esc(x.kind)} · ${esc(x.meta)}</span></button>`).join('')||`<div class="search-empty">${esc(ui.search.empty)}</div>`;
    $$('#searchResults [data-search-index]').forEach((b,i)=>b.addEventListener('click',()=>res[i].action()));
  }
  $('#searchToggle').addEventListener('click',openSearch); searchInput.addEventListener('input',()=>renderSearch(searchInput.value));
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();openSearch()}if(e.key==='Escape'&&searchDialog.open)searchDialog.close()});

  function bindReveal(){
    if(!('IntersectionObserver' in window)){
      $('.reveal:not(.visible)').forEach(el=>el.classList.add('visible'));
      return;
    }
    const io=new IntersectionObserver((entries,obs)=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');obs.unobserve(en.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});
    $('.reveal:not(.visible)').forEach(el=>io.observe(el));
  }
  bindReveal();

  const countObs=new IntersectionObserver((entries,obs)=>entries.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,target=Number(el.dataset.count);if(!Number.isFinite(target))return;const start=performance.now(),dur=900;const step=now=>{const p=Math.min(1,(now-start)/dur);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step);obs.unobserve(el)}),{threshold:.35});
  $$('[data-count]').forEach(x=>countObs.observe(x));

  const glow=$('.cursor-glow');
  window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}},{passive:true});
})();
