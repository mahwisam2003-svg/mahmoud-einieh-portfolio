(() => {
  const d = SITE_DATA;
  const imgs = typeof SITE_IMAGES !== 'undefined' ? SITE_IMAGES : {};
  const $ = (s, p=document) => p.querySelector(s);
  const $$ = (s, p=document) => [...p.querySelectorAll(s)];
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));

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

  const researchCats = ['All','Cardiology','Imaging / AI','Nephrology','Hematology'];
  let researchFilter = 'All';
  let researchExpanded = false;
  const matchesResearchCategory = (p, filter) => {
    if(filter==='All') return true;
    const t = [p.domain,p.type,...p.tags].join(' ').toLowerCase();
    if(filter==='Cardiology') return /cardio|coronary|electrophysi|arrhythm|echo/.test(t);
    if(filter==='Imaging / AI') return /imaging|spect|oct|pet\/ct|artificial intelligence|synthetic ct/.test(t);
    if(filter==='Nephrology') return /nephro|kidney|ckd|rituximab|glomerular/.test(t);
    if(filter==='Hematology') return /hematolog|autopsy|myeloproliferative|hlh|bone marrow/.test(t);
    return false;
  };
  $('#researchFilters').innerHTML = researchCats.map(c => `<button type="button" class="filter-pill ${c==='All'?'active':''}" data-filter="${c}">${c}</button>`).join('');
  $('#researchFilters').addEventListener('click', e => {
    const b=e.target.closest('[data-filter]'); if(!b)return;
    researchFilter=b.dataset.filter; researchExpanded=true;
    $$('.filter-pill', $('#researchFilters')).forEach(x=>x.classList.toggle('active',x===b));
    renderResearch();
  });
  $('#showAllResearch').addEventListener('click',()=>{
    if(researchFilter!=='All'){
      researchFilter='All'; researchExpanded=false;
      $$('.filter-pill', $('#researchFilters')).forEach(x=>x.classList.toggle('active',x.dataset.filter==='All'));
    }else{ researchExpanded=!researchExpanded; }
    renderResearch();
  });

  function researchCard(p){
    const metrics = p.metrics.slice(0,4).map(m=>`<div class="micro-stat"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('');
    return `<article class="research-card ${p.featured?'featured':''} reveal" tabindex="0" data-project="${p.id}" role="button" aria-label="Open ${esc(p.title)} details">
      ${p.imageKey && imgs[p.imageKey] ? `<div class="research-card-image"><img src="${imgs[p.imageKey]}" alt="${esc(p.title)}" loading="lazy"></div>` : ''}
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
    $('#showAllResearch').textContent = (!researchExpanded && researchFilter==='All') ? 'Show complete research portfolio' : 'Show featured research only';
    if(researchFilter!=='All') $('#showAllResearch').textContent='Reset to featured research';
    bindReveal();
  }
  renderResearch();

  const modal=$('#projectModal'), modalContent=$('#modalContent');
  function openProject(id){
    const p=d.research.find(x=>x.id===id); if(!p)return;
    modalContent.innerHTML=`
      <span class="modal-kicker">${esc(p.domain)} · ${esc(p.year)}</span>
      <h3 class="modal-title">${esc(p.title)}</h3>
      ${p.imageKey && imgs[p.imageKey] ? `<img class="modal-project-photo" src="${imgs[p.imageKey]}" alt="${esc(p.title)}" loading="lazy">` : ''}
      <p class="modal-summary">${esc(p.summary)}</p>
      ${p.metrics.length?`<div class="modal-metrics">${p.metrics.map(m=>`<div class="modal-stat"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join('')}</div>`:''}
      <div class="modal-section"><h4>Research detail</h4><p>${esc(p.detail)}</p></div>
      <div class="modal-section"><h4>My role</h4><p>${esc(p.role)}</p></div>
      <div class="modal-section"><h4>Status</h4><p>${esc(p.status)} · ${esc(p.type)}</p></div>
      <div class="modal-links">
        ${p.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}
        ${p.credential?`<a href="${p.credential}" target="_blank" rel="noopener">Redacted credential ↗</a>`:''}
      </div>`;
    modal.showModal(); document.body.classList.add('modal-open');
  }
  $('#researchGrid').addEventListener('click',e=>{const c=e.target.closest('[data-project]');if(c)openProject(c.dataset.project)});
  $('#researchGrid').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-project]')){e.preventDefault();openProject(e.target.dataset.project)}});
  $('#modalClose').addEventListener('click',()=>modal.close());
  modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});
  modal.addEventListener('close',()=>document.body.classList.remove('modal-open'));

  const clinicalCats=['All','Cardiology','Medicine','Surgery','Neonatology'];
  let clinicalFilter='All', countryFilter='All';
  $('#clinicalFilters').innerHTML=clinicalCats.map(c=>`<button type="button" class="filter-pill ${c==='All'?'active':''}" data-clinical="${c}">${c}</button>`).join('');
  const clinicalCategory=c=>{
    const s=c.specialty.toLowerCase();
    if(s.includes('cardiology'))return'Cardiology';
    if(s.includes('surgery'))return'Surgery';
    if(s.includes('neonat'))return'Neonatology';
    return'Medicine';
  };
  function renderClinical(){
    let items=d.clinical.filter(c=>(clinicalFilter==='All'||clinicalCategory(c)===clinicalFilter)&&(countryFilter==='All'||c.location.includes(countryFilter)));
    $('#clinicalList').innerHTML=items.map(c=>`<article class="clinical-item reveal">
      <div class="clinical-date"><strong>${esc(c.date)}</strong><br>${esc(c.duration)}</div>
      <div class="clinical-main"><h3>${esc(c.specialty)}</h3><div class="institution">${esc(c.institution)} · ${esc(c.location)}</div><p>${esc(c.detail)}</p></div>
      <div class="clinical-meta"><span>Supervision: ${esc(c.supervisor)}</span>${c.credential?`<a class="doc-link" href="${c.credential}" target="_blank" rel="noopener">${esc(c.credentialLabel||'View credential')} ↗</a>`:''}${c.privateDoc?`<span class="private-doc">${esc(c.privateDoc)}</span>`:''}</div>
    </article>`).join('') || `<div class="search-empty">No clinical experiences match this filter.</div>`;
    bindReveal();
  }
  $('#clinicalFilters').addEventListener('click',e=>{const b=e.target.closest('[data-clinical]');if(!b)return;clinicalFilter=b.dataset.clinical;$$('[data-clinical]').forEach(x=>x.classList.toggle('active',x===b));renderClinical()});
  $$('.clinical-route button').forEach(b=>b.addEventListener('click',()=>{const c=b.dataset.country;if(countryFilter===c){countryFilter='All';b.classList.remove('active')}else{countryFilter=c;$$('.clinical-route button').forEach(x=>x.classList.toggle('active',x===b))}renderClinical()}));
  renderClinical();

  const outputs=d.research.filter(p=>/Published|Submitted|Conference|Completed/.test(p.status));
  $('#outputsGrid').innerHTML=outputs.map(p=>`<article class="output-card">${p.imageKey && imgs[p.imageKey] ? `<div class="output-photo ${p.imageKey==='escPoster'?'photo-esc':p.imageKey==='eanmBarcelona'?'photo-eanm':''}"><img src="${imgs[p.imageKey]}" alt="${esc(p.title)}" loading="lazy"></div>` : ''}<span class="pub-journal">${esc(p.venue||p.status)}</span><h3>${esc(p.title)}</h3><p>${esc(p.status)} · ${esc(p.type)} · ${esc(p.year)}</p><div class="output-links">${p.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}${p.credential?`<a href="${p.credential}" target="_blank" rel="noopener">Credential ↗</a>`:''}</div></article>`).join('');
  $('#sourceRibbon').innerHTML=d.sources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('');

  $('#awardList').innerHTML=d.awards.map(a=>`<article class="award-item reveal"><span class="award-year">${esc(a.year)}</span><h3>${esc(a.title)}</h3><p>${esc(a.detail)}</p><div class="award-action">${a.source?`<a class="doc-link" href="${a.source}" target="_blank" rel="noopener">Official source ↗</a>`:''}${a.credential?`<a class="doc-link" href="${a.credential}" target="_blank" rel="noopener">Redacted certificate ↗</a>`:''}</div></article>`).join('');


  $('#credentialGrid').innerHTML=d.credentials.map(c=>`<a class="credential-card reveal" href="${c.doc}" target="_blank" rel="noopener">
    <div class="credential-preview"><img src="${c.thumb}" alt="${esc(c.title)} — ${esc(c.issuer)}" loading="lazy" decoding="async"></div>
    <div class="credential-copy"><span>${esc(c.year)} · ${esc(c.note)}</span><h3>${esc(c.title)}</h3><p>${esc(c.issuer)}</p><strong>Open credential ↗</strong></div>
  </a>`).join('');

  $('#teachingGrid').innerHTML=d.teaching.map(t=>`<article class="teaching-card reveal"><span class="role">${esc(t.role)}</span><h3>${esc(t.organization)}</h3><span class="date">${esc(t.date)}</span><p>${esc(t.detail)}</p>${t.credential?`<a class="doc-link" href="${t.credential}" target="_blank" rel="noopener">View credential ↗</a>`:''}</article>`).join('');
  $('#languageList').innerHTML=d.languages.map(l=>`<div class="language-chip"><strong>${esc(l.language)}</strong><span>${esc(l.level)}</span></div>`).join('');

  if(d.lubdub){
    if($('#lubdubPhoto') && imgs[d.lubdub.photoKey]) $('#lubdubPhoto').src = imgs[d.lubdub.photoKey];
    if($('#lubdubLogo') && imgs[d.lubdub.logoKey]) $('#lubdubLogo').src = imgs[d.lubdub.logoKey];
    if($('#lubdubTitle')) $('#lubdubTitle').textContent = d.lubdub.title;
    if($('#lubdubRole')) $('#lubdubRole').textContent = d.lubdub.role;
    if($('#lubdubSummary')) $('#lubdubSummary').textContent = d.lubdub.summary;
    if($('#lubdubPoints')) $('#lubdubPoints').innerHTML = d.lubdub.points.map(x=>`<li>${esc(x)}</li>`).join('');
    const lubLink=$('.lubdub-link'); if(lubLink && d.lubdub.instagram) lubLink.href=d.lubdub.instagram;
  }

  if(d.doe){
    if($('#doeTitle')) $('#doeTitle').textContent = d.doe.title;
    if($('#doeRole')) $('#doeRole').textContent = d.doe.role;
    if($('#doeSummary')) $('#doeSummary').textContent = d.doe.summary;
    if($('#doePoints')) $('#doePoints').innerHTML = d.doe.points.map(x=>`<li>${esc(x)}</li>`).join('');
    const doeLink=$('.doe-link'); if(doeLink && d.doe.website) doeLink.href=d.doe.website;
  }

  const themeToggle=$('#themeToggle');
  const savedTheme=localStorage.getItem('me-theme');
  if(savedTheme)document.documentElement.dataset.theme=savedTheme;
  themeToggle.addEventListener('click',()=>{const t=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=t;localStorage.setItem('me-theme',t)});

  const menuToggle=$('#menuToggle'), mobileMenu=$('#mobileMenu');
  menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));mobileMenu.classList.toggle('open',!open)});
  $$('#mobileMenu a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));

  const searchDialog=$('#searchDialog'), searchInput=$('#searchInput'), searchResults=$('#searchResults');
  const searchable=[
    ...d.research.map(x=>({kind:'Research',title:x.title,meta:`${x.domain} · ${x.status}`,text:[x.title,x.domain,x.summary,...x.tags].join(' '),action:()=>{searchDialog.close();openProject(x.id)}})),
    ...d.clinical.map(x=>({kind:'Clinical',title:`${x.specialty} · ${x.institution}`,meta:`${x.location} · ${x.date}`,text:[x.specialty,x.institution,x.location,x.detail,x.supervisor].join(' '),action:()=>{searchDialog.close();location.hash='clinical'}})),
    ...d.awards.map(x=>({kind:'Recognition',title:x.title,meta:x.year,text:[x.title,x.detail].join(' '),action:()=>{searchDialog.close();location.hash='awards'}})),
    ...d.credentials.map(x=>({kind:'Credential',title:x.title,meta:`${x.issuer} · ${x.year}`,text:[x.title,x.issuer,x.note].join(' '),action:()=>{searchDialog.close();location.hash='credentials'}}))
  ];
  function openSearch(){searchDialog.showModal();setTimeout(()=>searchInput.focus(),30);renderSearch('')}
  function renderSearch(q){
    q=q.trim().toLowerCase();
    const res=(q?searchable.filter(x=>x.text.toLowerCase().includes(q)):searchable.slice(0,8)).slice(0,12);
    searchResults.innerHTML=res.map((x,i)=>`<button class="search-result" type="button" data-search-index="${i}"><strong>${esc(x.title)}</strong><span>${esc(x.kind)} · ${esc(x.meta)}</span></button>`).join('')||`<div class="search-empty">No matching portfolio items.</div>`;
    $$('#searchResults [data-search-index]').forEach((b,i)=>b.addEventListener('click',()=>res[i].action()));
  }
  $('#searchToggle').addEventListener('click',openSearch); searchInput.addEventListener('input',()=>renderSearch(searchInput.value));
  document.addEventListener('keydown',e=>{if(e.key==='/'&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();openSearch()}if(e.key==='Escape'&&searchDialog.open)searchDialog.close()});

  function bindReveal(){
    const io=new IntersectionObserver((entries,obs)=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('visible');obs.unobserve(en.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});
    $$('.reveal:not(.visible)').forEach(el=>io.observe(el));
  }
  bindReveal();

  const countObs=new IntersectionObserver((entries,obs)=>entries.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,target=Number(el.dataset.count);if(!Number.isFinite(target))return;const start=performance.now(),dur=900;const step=now=>{const p=Math.min(1,(now-start)/dur);el.textContent=Math.round(target*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step);obs.unobserve(el)}),{threshold:.35});
  $$('[data-count]').forEach(x=>countObs.observe(x));

  const glow=$('.cursor-glow');
  window.addEventListener('pointermove',e=>{if(glow){glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'}},{passive:true});
})();
