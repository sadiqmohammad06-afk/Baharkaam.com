const $ = (q, root = document) => root.querySelector(q);
const $$ = (q, root = document) => [...root.querySelectorAll(q)];

const roles = ['Driver','Factory & Packing','Construction','Helper / Labour','Cleaner','Security','Welder','Electrician'];
const jobs = [
  {title:'Dubai Driver', country:'UAE', place:'Dubai', salary:'AED 1,800–2,200 / month', visa:'Work Visa Only', benefits:'Food + Room + Ticket', source:'Source Checked', risk:'Low Risk Indicators', docs:'Passport, Driving License, CV', warning:'User must verify offer letter and visa from official sources.', updated:'Today'},
  {title:'Construction Helper', country:'Saudi Arabia', place:'Riyadh', salary:'SAR 900–1,200 / month', visa:'Work Visa Only', benefits:'Food + Room + Ticket', source:'Needs Official Verification', risk:'Medium Risk', docs:'Passport, Medical, CV', warning:'Verify company details and visa stamp from official portal.', updated:'Today'},
  {title:'Qatar Cleaner', country:'Qatar', place:'Doha', salary:'QAR 1,000–1,400 / month', visa:'Work Visa Only', benefits:'Room + Transport', source:'Needs Official Verification', risk:'Medium Risk', docs:'Passport, Medical, CV', warning:'Check contract, salary and duty hours before travel.', updated:'Demo'},
  {title:'Factory Packing Worker', country:'Romania', place:'Bucharest', salary:'EUR 550–750 / month', visa:'Work Permit Required', benefits:'Room details must be checked', source:'Needs Official Verification', risk:'Medium Risk', docs:'Passport, CV, Experience Proof', warning:'Verify employer and work permit process from official sources.', updated:'Demo'}
];
const guides = [
  {icon:'🛂', title:'Fake Visa Check', text:'Visa copy, number and portal verification basics.'},
  {icon:'🎫', title:'Ticket / PNR Fraud', text:'Ticket screenshot ko official airline website par check karein.'},
  {icon:'🚗', title:'Dubai Driver Salary', text:'Salary reality, licence, duty hours and contract checks.'},
  {icon:'🇪🇺', title:'Europe Work Guide', text:'Work permit, salary, country and document safety.'}
];
const dashboard = [
  ['🧭','My Abroad Plan','Role, country, documents and travel status'], ['✅','Safe Departure Checklist','Before payment, before ticket, before travel'], ['🔎','My Checks','Visa, ticket, offer and agent checks'], ['📚','Saved Guides','Important guides saved for later'], ['👨‍👩‍👦','Family Safety Hub','Share plan and emergency details'], ['🗂️','Proof Locker','Save documents and payment proof'], ['⚙️','Settings','Language and notification demo'], ['📌','Official Verification Needed','Always confirm with official sources']
];
const sosItems = [
  ['🚨','Emergency Now','Immediate safety steps and official help reminder'], ['📝','Report Scam','Agent, visa, ticket, payment or passport issue'], ['🏛️','Get Official Help','Embassy/government contact placeholder'], ['🛂','Passport & Exit Help','Passport held, exit or travel document issue'], ['💰','Salary & Labour Rights Help','Salary not paid or contract mismatch'], ['👨‍👩‍👦','Family Help','Share situation with family safely'], ['🗂️','Proof Locker','Save screenshots, receipts and documents'], ['⚠️','Community Scam Alerts','Reviewed anonymous safety alerts only'], ['🌍','Country-wise Help','Country specific guidance placeholder']
];
const prompts = ['Dubai driver salary kitni hoti hai?','Visa fake hai ya nahi kaise check karun?','Agent advance payment maang raha hai kya karun?','Saudi mein salary nahi mili to kya karein?','Ticket / PNR kaise check karein?','Main videsh mein fas gaya hoon'];

const translations = {
  en:{name:'English',tagline:'Safe Foreign Jobs & Visa Guide',brandCaps:'BAHARKAAM',heroTitle:'Safe Foreign Jobs & Visa Guide',heroSub:'For South Asian workers going to Gulf, Europe & worldwide.',sathiTitle:'Sathi AI',sathiSub:'Ask anything about jobs, visa, salary, safety...',safetyAlert:'Latest Safety Alert'},
  hi:{name:'Hindi / Hinglish',tagline:'Safe Foreign Jobs & Visa Guide',brandCaps:'BAHARKAAM',heroTitle:'Safe Foreign Jobs & Visa Guide',heroSub:'Gulf, Europe aur worldwide jane wale South Asian workers ke liye.',sathiTitle:'Sathi AI',sathiSub:'Job, visa, salary, safety ke bare mein poochhein...',safetyAlert:'Latest Safety Alert'},
  ur:{name:'Urdu',tagline:'محفوظ بیرون ملک نوکری اور ویزا گائیڈ',brandCaps:'BAHARKAAM',heroTitle:'Safe Foreign Jobs & Visa Guide',heroSub:'Gulf, Europe aur worldwide jane wale workers ke liye safety guide.',sathiTitle:'Sathi AI',sathiSub:'Job, visa, salary aur fraud ke bare mein poochhein...',safetyAlert:'Latest Safety Alert'},
  bn:{name:'Bengali',tagline:'Safe Foreign Jobs & Visa Guide',brandCaps:'BAHARKAAM',heroTitle:'বিদেশি চাকরি ও ভিসা সেফটি গাইড',heroSub:'Gulf, Europe এবং worldwide যেতে চাইলে safety steps বুঝুন.',sathiTitle:'Sathi AI',sathiSub:'চাকরি, ভিসা, salary, safety নিয়ে জিজ্ঞাসা করুন...',safetyAlert:'Latest Safety Alert'},
  ne:{name:'Nepali',tagline:'Safe Foreign Jobs & Visa Guide',brandCaps:'BAHARKAAM',heroTitle:'विदेशी काम र भिसा सुरक्षा गाइड',heroSub:'Gulf, Europe र worldwide जान चाहने workers का लागि.',sathiTitle:'Sathi AI',sathiSub:'Job, visa, salary र safety बारे सोध्नुहोस्...',safetyAlert:'Latest Safety Alert'}
};
let activeLang = 'en';

function init(){
  renderRoles(); renderGuides(); renderJobs(); renderDashboard(); renderSos(); renderPrompts(); populateFilters(); bindEvents(); setLanguage('en');
}
function bindEvents(){
  document.addEventListener('click', e=>{
    const screenBtn = e.target.closest('[data-screen]');
    if(screenBtn){ switchScreen(screenBtn.dataset.screen); closeMenu(); }
    const actionBtn = e.target.closest('[data-action]');
    if(actionBtn) handleAction(actionBtn.dataset.action);
    const feature = e.target.closest('[data-feature]');
    if(feature) openFeature(feature.dataset.feature);
    const jobBtn = e.target.closest('[data-job-action]');
    if(jobBtn) openJobAction(jobBtn.dataset.jobAction, Number(jobBtn.dataset.jobIndex));
    const guide = e.target.closest('[data-guide]');
    if(guide) openGuide(Number(guide.dataset.guide));
    const sos = e.target.closest('[data-sos]');
    if(sos) openSos(sos.dataset.sos);
  });
  $('#menuButton').addEventListener('click',()=>$('#sideMenu').classList.add('open'));
  $('#closeMenu').addEventListener('click',closeMenu);
  $('#sideMenu').addEventListener('click',e=>{ if(e.target.id==='sideMenu') closeMenu(); });
  $('#closeModal').addEventListener('click',closeModal);
  $('#appModal').addEventListener('click',e=>{ if(e.target.id==='appModal') closeModal(); });
  $('#languageButton').addEventListener('click',openLanguageModal);
  ['countryFilter','roleFilter','riskFilter','sourceFilter'].forEach(id=>$('#'+id).addEventListener('change',renderJobs));
}
function closeMenu(){ $('#sideMenu').classList.remove('open'); }
function switchScreen(name){
  $$('.screen').forEach(s=>s.classList.remove('active'));
  $('#'+name+'Screen')?.classList.add('active');
  $$('.bottom-nav button').forEach(b=>b.classList.toggle('active', b.dataset.screen===name));
  window.scrollTo({top:0,behavior:'smooth'});
}
function setLanguage(lang){
  activeLang = lang; const t = translations[lang] || translations.en;
  $('#activeLanguage').textContent = t.name.split(' ')[0];
  $$('[data-i18n]').forEach(el=>{ const key=el.dataset.i18n; if(t[key]) el.textContent=t[key]; });
  closeModal();
}
function renderRoles(){
  $('#roleChips').innerHTML = roles.map(r=>`<button data-screen="jobs" data-role="${r}">${r}</button>`).join('');
}
function populateFilters(){
  const roleFilter = $('#roleFilter');
  roles.forEach(r=>roleFilter.insertAdjacentHTML('beforeend',`<option>${r}</option>`));
}
function renderGuides(){
  $('#guideGrid').innerHTML = guides.map((g,i)=>`<button class="guide-card" data-guide="${i}"><span>${g.icon}</span><strong>${g.title}</strong><p>${g.text}</p></button>`).join('');
}
function jobCard(j,i,compact=false){
  const low = j.risk.includes('Low');
  return `<article class="job-card"><div class="job-head"><div><h3>${j.title}</h3><p>${j.country} · ${j.place}</p></div><small>${j.updated}</small></div><p><strong>${j.salary}</strong></p><div class="risk-row"><span>${j.visa}</span><span>${j.benefits}</span><span>${j.source}</span><span class="${low?'low':'medium'}">${j.risk}</span></div><p><strong>Documents:</strong> ${j.docs}</p><p class="warning">${j.warning}</p><div class="job-actions"><button data-job-action="details" data-job-index="${i}">${compact?'View Safety Details':'View Safety Details'}</button><button data-job-action="interested" data-job-index="${i}">Interested Hoon</button><button data-job-action="verify" data-job-index="${i}">Verify Source</button><button data-job-action="family" data-job-index="${i}">Family Ko Bhejo</button></div></article>`;
}
function renderJobs(){
  const cf=$('#countryFilter')?.value||'', rf=$('#roleFilter')?.value||'', risk=$('#riskFilter')?.value||'', sf=$('#sourceFilter')?.value||'';
  const filtered = jobs.filter(j=>(!cf||j.country===cf)&&(!risk||j.risk===risk)&&(!sf||j.source===sf)&&(!rf||j.title.includes(rf.split(' ')[0])||rf===''));
  $('#homeJobs').innerHTML = jobs.slice(0,2).map((j,i)=>jobCard(j,i,true)).join('');
  $('#jobsList').innerHTML = (filtered.length?filtered:jobs).map((j,i)=>jobCard(j,i)).join('');
}
function renderDashboard(){
  $('#dashboardGrid').innerHTML = dashboard.map(d=>`<button class="dash-card" data-action="placeholder"><span>${d[0]}</span><strong>${d[1]}</strong><p>${d[2]}</p></button>`).join('');
}
function renderSos(){
  $('#sosGrid').innerHTML = sosItems.map((s,i)=>`<button class="sos-card" data-sos="${i}"><span>${s[0]}</span><strong>${s[1]}</strong><p>${s[2]}</p></button>`).join('');
}
function renderPrompts(){
  $('#quickPrompts').innerHTML = prompts.map(p=>`<button data-action="aiPrompt">${p}</button>`).join('');
}
function openModal(title, body){
  $('#modalTitle').textContent = title; $('#modalBody').innerHTML = body; $('#appModal').classList.add('open');
}
function closeModal(){ $('#appModal').classList.remove('open'); }
function openFeature(type){
  const data = {
    roadmap:['Safe Job Roadmap',['Role choose','Country choose','Documents checklist','Before payment checklist','Before travel checklist','Family safety setup'],'Save Roadmap'],
    visa:['Visa Fraud Check',['Offer letter check','Visa check','Ticket / PNR check','Agent check','Payment warning','Risk result placeholder'],'Start Safety Check'],
    salary:['Salary Guide',['Country','Role','Salary range','Food / room / ticket','Duty hours','Contract mismatch warning'],'View Salary Reality'],
    money:['Money & Govt Help',['Agent payment safety','Receipt checklist','Loan safety','No hawala warning','Family payment summary','Official help guide placeholder'],'Open Money Safety Guide']
  }[type];
  openModal(data[0], `<ul class="modal-list">${data[1].map(x=>`<li>${x}</li>`).join('')}</ul><div class="button-row"><button class="primary-btn">${data[2]}</button><button class="soft-btn" onclick="closeModal()">Close</button></div>`);
}
function openJobAction(action, i){
  const j = jobs[i] || jobs[0];
  if(action==='interested') return openLoginPrompt();
  const titles = {details:'Job Safety Details', verify:'Verify Source', family:'Family Safety Share'};
  const bodies = {
    details:`<p><strong>${j.title}</strong> — ${j.country} · ${j.place}</p><ul class="modal-list"><li>Salary: ${j.salary}</li><li>Visa: ${j.visa}</li><li>Benefits: ${j.benefits}</li><li>Source Status: ${j.source}</li><li>Risk: ${j.risk}</li><li>Documents: ${j.docs}</li><li>${j.warning}</li></ul>`,
    verify:`<ul class="modal-list"><li>Check company name from official source.</li><li>Check offer letter details before payment.</li><li>Check visa/work permit only from official portal.</li><li>Keep receipt for every payment.</li></ul>`,
    family:`<p>Share job details with family before paying money or travelling.</p><ul class="modal-list"><li>Job title and country</li><li>Agent details</li><li>Payment receipt</li><li>Ticket / PNR</li><li>Emergency contact</li></ul>`
  };
  openModal(titles[action], bodies[action] || 'Demo placeholder');
}
function openLoginPrompt(){
  openModal('Login / Sign Up', `<p>Mobile number se login karein, taaki aapki safety profile, saved guides aur job interest secure rahe.</p><div class="form-grid"><input placeholder="Mobile number"><button class="primary-btn">Continue</button><button class="soft-btn" onclick="closeModal()">Continue as Guest</button></div>`);
}
function openGuide(i){ const g=guides[i]; openModal(g.title, `<p>${g.text}</p><ul class="modal-list"><li>Step 1: Basic document details samjhein.</li><li>Step 2: Official source par verify karein.</li><li>Step 3: Payment se pehle family ko share karein.</li><li>Step 4: Doubt ho to report/ask help use karein.</li></ul>`); }
function openLanguageModal(){
  openModal('Choose Language', `<div class="lang-list">${Object.entries(translations).map(([k,v])=>`<button onclick="setLanguage('${k}')">${v.name}</button>`).join('')}</div>`);
}
function openSos(index){
  const item = sosItems[Number(index)];
  if(item && item[1]==='Report Scam') return openReportScam();
  openModal(item ? item[1] : 'SOS Help', `<p>${item ? item[2] : ''}</p><div class="notice-card">Official contact details will be added after source verification. Always confirm from official embassy/government website before calling.</div>`);
}
function openReportScam(){
  const steps = ['Scam Type: Fake visa, fake offer letter, fake ticket / PNR, advance payment scam, agent missing, passport held, salary/job mismatch, visit visa job promise, company/agency fake, other','Agent / Agency Details: name, phone/WhatsApp, city, office address, country/job promised','Money Details: amount paid, payment method, receipt yes/no, payment date','Proof Upload UI Placeholder: photos, video, WhatsApp screenshots, ticket/PNR screenshot, offer letter, visa copy, receipt, audio proof','Privacy Choice: keep identity private, allow contact, want official complaint help, allow anonymous safety alert','Submit Report for Review'];
  openModal('Report Scam', `<div class="modal-list">${steps.map((s,i)=>`<div class="form-step"><strong>Step ${i+1}</strong><p>${s}</p></div>`).join('')}</div><button class="primary-btn">Submit Report for Review</button>`);
}
function handleAction(action){
  closeMenu();
  if(action==='login') return openLoginPrompt();
  if(action==='language') return openLanguageModal();
  if(action==='guides') return openModal('All Safety Guides', guides.map((g,i)=>`<button class="guide-card" data-guide="${i}"><span>${g.icon}</span><strong>${g.title}</strong><p>${g.text}</p></button>`).join(''));
  if(action==='recruiter') return openRecruiterModal();
  openModal(action.replace(/\b\w/g,c=>c.toUpperCase()), '<p>Demo placeholder. Backend and full content baad mein add hoga.</p>');
}
function openRecruiterModal(){
  const fields = ['Agency / Company Name','Country','License / Registration Number','Official Website','Contact Person','Email / Phone','Job Country','Job Role','Workers Needed','Salary Range','Visa Type','Food / Room / Ticket','Contract Duration','Documents Required','Service Charge / Fees','Message'];
  openModal('For Recruiters / Companies', `<p>BaharKaam reviews hiring requirements before showing them to workers. Fake, unclear, misleading or guaranteed job/visa posts are not allowed. Submitting a requirement does not guarantee listing. Worker profiles will never be shared without their consent.</p><div class="form-grid">${fields.map(f=>f==='Message'?`<textarea placeholder="${f}"></textarea>`:`<input placeholder="${f}">`).join('')}<button class="primary-btn">Submit Requirement for Review</button></div>`);
}
window.closeModal = closeModal;
window.setLanguage = setLanguage;
init();
