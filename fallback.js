(() => {
  const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const $ = id => document.getElementById(id);
  const media = () => window.SITE_MEDIA || {};

  function hydrateMedia(){
    const m=media();
    document.querySelectorAll('[data-media-key]').forEach(img=>{
      const key=img.dataset.mediaKey;
      if(key && m[key] && img.src!==m[key]) img.src=m[key];
    });
  }

  function render(){
    const d = typeof SITE_DATA !== 'undefined' ? SITE_DATA : null;
    if(!d) return;

    const metricStrip=$('metricStrip');
    if(metricStrip && !metricStrip.children.length){
      metricStrip.innerHTML=(d.metrics||[]).map(x=>`<div class="metric reveal visible"><strong>${esc(x.value)}${esc(x.suffix||'')}</strong><span>${esc(x.label)}</span></div>`).join('');
    }

    const research=$('researchGrid');
    if(research && !research.children.length){
      research.innerHTML=(d.research||[]).slice(0,6).map(p=>`<article class="research-card ${p.featured?'featured':''} reveal visible">
        <div class="card-top"><span class="status-badge">${esc(p.status)}</span><span class="project-year">${esc(p.year)}</span></div>
        <h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p>
        <div class="card-footer"><strong>${esc(p.domain)}</strong></div>
      </article>`).join('');
    }

    const clinical=$('clinicalList');
    if(clinical && !clinical.children.length){
      clinical.innerHTML=(d.clinical||[]).map(c=>`<article class="clinical-item reveal visible">
        <div class="clinical-date"><strong>${esc(c.date)}</strong><br>${esc(c.duration)}</div>
        <div class="clinical-main"><h3>${esc(c.specialty)}</h3><div class="institution">${esc(c.institution)} · ${esc(c.location)}</div><p>${esc(c.detail)}</p></div>
        <div class="clinical-meta"><span>Supervision: ${esc(c.supervisor)}</span></div>
      </article>`).join('');
    }

    const outputs=$('outputsGrid');
    if(outputs && !outputs.children.length){
      const items=(d.research||[]).filter(p=>/Published|Submitted|Conference|Completed/.test(p.status||''));
      outputs.innerHTML=items.map(p=>`<article class="output-card">
        <span class="pub-journal">${esc(p.venue||p.status)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.status)} · ${esc(p.type)} · ${esc(p.year)}</p>
        <div class="output-links">${(p.links||[]).map(l=>`<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>
      </article>`).join('');
    }

    const ribbon=$('sourceRibbon');
    if(ribbon && !ribbon.children.length){
      ribbon.innerHTML=(d.sources||[]).map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a>`).join('');
    }

    const awards=$('awardList');
    if(awards && !awards.children.length){
      awards.innerHTML=(d.awards||[]).map(a=>`<article class="award-item reveal visible"><span class="award-year">${esc(a.year)}</span><h3>${esc(a.title)}</h3><p>${esc(a.detail)}</p><div class="award-action">${a.source?`<a class="doc-link" href="${esc(a.source)}" target="_blank" rel="noopener">Official source ↗</a>`:''}</div></article>`).join('');
    }

    if(d.medcup){
      if($('medcupResult') && !$('medcupResult').textContent.trim()) $('medcupResult').textContent=d.medcup.result||'';
      if($('medcupTitle') && !$('medcupTitle').textContent.trim()) $('medcupTitle').textContent=d.medcup.title||'';
      if($('medcupSummary') && !$('medcupSummary').textContent.trim()) $('medcupSummary').textContent=d.medcup.summary||'';
      if($('medcupDetail') && !$('medcupDetail').textContent.trim()) $('medcupDetail').textContent=d.medcup.detail||'';
      if($('medcupSource')) $('medcupSource').href=d.medcup.source||'#';
      if($('medcupYoutube')) $('medcupYoutube').href=d.medcup.youtube||'#';
      const gallery=$('medcupGallery');
      if(gallery && !gallery.children.length){
        gallery.innerHTML=(d.medcup.images||[]).map((key,i)=>`<figure class="medcup-shot shot-${i+1}"><img data-media-key="${esc(key)}" alt="MedCup 2024" loading="lazy" decoding="async"></figure>`).join('');
      }
    }

    const evidence=$('evidenceGroups');
    if(evidence && !evidence.children.length){
      evidence.innerHTML=(d.evidenceGroups||[]).map(g=>`<section class="evidence-group reveal visible">
        <div class="evidence-group-head"><div><h3>${esc(g.title)}</h3><p>${esc(g.description||'')}</p></div><span>${(g.items||[]).length}</span></div>
        <div class="evidence-grid">${(g.items||[]).map(item=>`<article class="evidence-card">
          <div class="evidence-preview"><img data-media-key="${esc(item.imageKey)}" alt="${esc(item.title)}" loading="lazy" decoding="async"></div>
          <div class="evidence-copy"><span>${esc(item.year)} · ${esc(item.note)}</span><h4>${esc(item.title)}</h4><p>${esc(item.issuer)}</p><strong>Redacted copy</strong></div>
        </article>`).join('')}</div>
      </section>`).join('');
    }

    const rec=$('recommendationGrid');
    if(rec && !rec.children.length){
      rec.innerHTML=(d.recommendations||[]).map(item=>`<article class="recommendation-card glass reveal visible">
        <div class="recommendation-preview"><img data-media-key="${esc(item.imageKey)}" alt="${esc(item.title)}" loading="lazy" decoding="async"></div>
        <div class="recommendation-copy"><span>${esc(item.year)} · Signed recommendation</span><h3>${esc(item.title)}</h3><p>${esc(item.issuer)}</p><p>${esc(item.detail||'')}</p></div>
      </article>`).join('');
    }

    const teaching=$('teachingGrid');
    if(teaching && !teaching.children.length){
      teaching.innerHTML=(d.teaching||[]).map(t=>`<article class="teaching-card reveal visible"><span class="role">${esc(t.role)}</span><h3>${esc(t.organization)}</h3><span class="date">${esc(t.date)}</span><p>${esc(t.detail)}</p></article>`).join('');
    }

    const langs=$('languageList');
    if(langs && !langs.children.length){
      langs.innerHTML=(d.languages||[]).map(l=>`<div class="language-chip"><strong>${esc(l.language)}</strong><span>${esc(l.level)}</span></div>`).join('');
    }

    hydrateMedia();
  }

  window.addEventListener('site-media-updated', hydrateMedia);
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', render, {once:true});
  else render();
  setTimeout(render, 1200);
})();