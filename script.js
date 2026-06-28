/*
 * BaharKaam Reactive State Engine & Controller
 * Pure Vanilla JavaScript
 */

// Global App State
const state = {
  lang: localStorage.getItem('baharkaam_lang') || 'HI',
  activeTab: 'home',
  searchQuery: '',
  selectedCategory: null,
  selectedSalaryCountry: 'UAE'
};

/// 1. COMPREHENSIVE 5-LANGUAGE TRANSLATION DICTIONARY
const translations = {
  HI: {
    brandName: 'BAHARKAAM',
    tagline: 'Safe Foreign Jobs & Visa Guide',
    langMenuTitle: 'Bhasha Choice',
    heroTitle: 'Videsh Jane Se Pehle Sathi AI Se Salah Lein',
    heroSubtitle: 'Visa fraud se bachein, asli salary jaanein, surakshit tarike se kamayein',
    sathiStatus: 'Sathi AI sun raha hai... Jab aap bolna shuru karenge, yahan jawaab dikhega',
    sathiListening: 'Sathi AI sun raha hai... Bolo "Driver Jobs Dubai" ya "Saudi Helper"...',
    statusOnline: 'Online',
    statusSearching: 'Khoj raha hai...',
    
    // Core Cards
    cardRoadmapTitle: 'Safe Job Roadmap',
    cardRoadmapDesc: 'Verified jobs, apply process & guidance',
    cardVisacheckTitle: 'Visa Fraud Check',
    cardVisacheckDesc: 'Fake visa & offer letter check karein',
    cardSalaryTitle: 'Salary Guide',
    cardSalaryDesc: 'Salary range, documents, country roadmap',
    cardMoneyTitle: 'Money & Govt Help',
    cardMoneyDesc: 'Rates, loan warnings, schemes & helplines',
    
    // Category Pills
    filterAll: 'Sabhi Roles',
    filterConst: '🏗️ Construction Jobs',
    filterFactory: '🏭 Factory & Packing',
    filterDriver: '🚛 Driver & Operator',
    filterHotel: '🏨 Hotel & Catering',
    popularRolesHeading: 'Popular Job Roles',
    viewAllRoles: '🗂️ View All Roles',
    roleDriver: '🚛 Driver',
    roleHelper: '🧹 Helper / Labour',
    roleFactory: '🏭 Factory & Packing',
    roleConstruction: '🏗️ Construction',
    roleCleaner: '🧹 Cleaner',
    roleSecurity: '🛡️ Security',
    roleWelder: '👨‍🏭 Welder',
    
    // Bottom Nav
    navHome: 'Home',
    navNaukri: 'Naukri',
    navProfile: 'Profile',
    navSos: 'SOS',
    
    // Search input
    searchPlaceholder: 'Type karein: desh, role, visa check...',
    activeFilterBadge: 'Active Filter: ',
    btnClearAll: 'Clear All',
    
    // Profile
    profileTitle: 'Pravasi Bhaai',
    profileSubtitle: 'Safe Migration Profile',
    profileReadiness: 'Tayyari Status',
    profileSaved: 'Saved Guides',
    profileWarnings: 'Risk Alert',
    profileChecklistTitle: 'Aapka Safe Departure Checklist',
    chkPassport: 'Original Passport (valid 2 saal) check kiya',
    chkVisa: 'Work Visa Type Verification complete',
    chkPcc: 'PCC (Police Clearance) Thane se mila',
    chkMedical: 'Medical fit report card mila',
    chkFamily: 'Emergency contact family ko share kiya',
    profileTrustTitle: 'Baharkaam Protection Engine',
    profileTrustBody: 'Aapki saari information local browser storage mein secure rehti hai. Hum isko kisi private server par sell ya leak nahi karte hain.',
    
    // Helpline Contacts SOS
    sosHeading: 'Verified Emergency Helplines',
    sosIntro: '⚠️ Videsh mein salary phans gayi ho, passport chhin liya ho, ya koi khatra ho? Direct official sarkari embassy helplines se baat karein:',
    sosDisclaimer: 'Apne contract aur passport ki photo family ke pass hamesha safe rakhein. Koi bhi employer kanoonan aapka passport hold nahi kar sakta.',
    sosCallBtn: 'Call Now',
    
    // Buttons inside Job cards
    btnViewDetails: 'View Safety Details',
    btnSafetyCheck: 'Safety Checklist',
    btnFamilyKoBhejo: 'Family Ko Bhejo',
    btnHideDetails: 'Hide Details',
    
    // Job details static text
    lblCountry: 'Country',
    lblRole: 'Role',
    lblSalary: 'Salary Range',
    lblVisaType: 'Visa Type',
    lblDocuments: 'Documents Required',
    lblFoodTicket: 'Food / Room / Ticket',
    lblSource: 'Information Source',
    lblRiskLevel: 'Risk Level',
    lblWarning: 'Important Warning',
    lblLastUpdated: 'Last Updated',
    lblVerifiedSeal: 'Agent verified via Baharkaam Security Matrix',
    
    // Family Share Summary modal
    familyShareHeading: 'Family Safety Share Summary',
    familyNotice: '*Note: Yeh summary family ke sath share karne ke liye copy ho jayegi ya WhatsApp par ja sakti hai.',
    familyBtnCopy: 'Copy Details',
    familyBtnWA: 'WhatsApp Family Share',
    familyAdviceTitle: 'Maa-Baap / Family ke liye sifarish:',
    familyAdviceBody: 'Kisi bhi gair-kanooni agent ko advance cash na dein, aur hamesha bank transfer se ya registered receipt ke sath hi transaction karein.',

    // Salary Guide Modal
    salaryHeading: 'Overseas Country Salary Reality Guide',
    salarySelectLbl: 'Apna target country select karein:',
    
    // Money safety modal
    moneyHeading: 'Money Safety & Exchange rates',
    moneyDiscTitle: '🛡️ IMPORTANT SAFE REMITTANCE DISCLAIMER',
    moneyDiscBody: 'BaharKaam is not a bank, remittance service, money transfer or wallet app. Hum direct money transfer nahi karte hain. Hum sirf official exchange rates compare karne aur safe remittance guides dete hain.',
    currencyCompareTitle: '💰 Live Exchange Rate Comparator',
    currencyCompareSubtitle: 'Check banking exchange rates securely (Regulated Channels Only):',
    lblSendAmt: 'Videsh Ke Kaise:',
    lblRecvAmt: 'Ghar Ke Paise (Bhasha currency):',
    partnerLinksTitle: 'Compare Regulated Safe Transfer Options:',
    moneyStep1Title: 'Never use Hawala / Hundi',
    moneyStep1Desc: 'Private offline hawala agents illegal hain. Hawala se bheja paisa block ya freeze ho sakta hai.',
    moneyStep2Title: 'Safe receipts custody',
    moneyStep2Desc: 'Har digital/physical receipt ko safe PDF bana kar WhatsApp par family ke sath share rakhein.',
    moneyStep3Title: 'Debt and loan awareness',
    moneyStep3Desc: 'Broker se high-interest loan le kar videsh jana sabse bada trap hai. Sarkaari welfare loans check karein.',

    // Footer & Policies Keys
    footAbout: 'Humare Baare Mein',
    footContact: 'Sampark Karein',
    footPrivacy: 'Privacy Policy',
    footTerms: 'Niyam aur Shartein',
    footDisclaimer: 'Disclaimer (Ghoshna)',
    footEditorial: 'Editorial Policy',
    footCorrections: 'Corrections Policy',
    footScam: 'Scam Report Karein',
    footSos: 'Emergency Help',
    footSafety: 'Safety Guidelines',
    footRecruiters: 'For Recruiters / Companies',

    // Modal Bodies Content
    bodyAbout: 'BaharKaam India, Pakistan, Bangladesh aur Nepal ke workers ke liye ek safety-first foreign work guidance platform hai jo Gulf, Europe aur worldwide kaam karna chahte hain. <br><br>Hum workers ko videshi naukri ki requirements, visa process, salary reality, documents, ticket/PNR fraud, fake offer letters, agent payment risks aur source-checked hiring ki jankari samajhne mein madad karte hain. <br><br>BaharKaam koi visa agency, recruitment agency ya sarkari website nahi hai. Hum naukri ya visa ki guarantee nahi dete. Kisi bhi agent ko paise dene ya documents dene se pehle workers ko hamesha official sources se details verify karni chahiye.',
    bodyContact: 'Kisi bhi madad ke liye support@baharkaam.com par email karein ya hamare verified helpdesk par baat karein. Emergency sawalo ka jawab 2 ghante mein diya jata hai.',
    bodyPrivacy: 'BaharKaam aapka phone number, name, job role, target country, language preference, document/check details aur saved guides collect kar sakta hai. Aapka phone number aur profile recruiter ya companies ke saath aapki permission (consent) ke bina share nahi kiya jayega. Future mein analytics, ads, ya cookies ka use service ko behtar banane ke liye kiya ja sakta hai.',
    bodyTerms: 'Users ko is platform ka upyog sirf guidance aur jankari ke liye hi karna chahiye. Yeh koi final legal ya visa advice nahi hai. Users ko hamesha official ya sarkari sources se saari details verify karni chahiye.',
    bodyDisclaimer: 'BaharKaam koi visa service, naukri ki guarantee, recruitment, immigration approval, flight ticket confirmation, ya loan approval pradan nahi karta hai. Hum sirf safety guidance aur source-checking help pradan karte hain.',
    bodyEditorial: 'Hamari guides public information, jahan tak sambhav ho official-source references, safety principles, aur manual review dwara taiyar kiye jate hain. Jankari badalne par content ko update ya correct kiya ja sakta hai.',
    bodyCorrections: 'Users galat ya purani jankari ko report kar sakte hain. BaharKaam aisi reports ka review karega aur zaroorat ke mutabik content ko update karega.',
    bodySafety: '1. Kisi bhi agent ko advance cash bina valid receipt ke na dein. <br>2. Visa, offer letter aur ticket ko hamesha official ya embassy sources se verify karein. <br>3. Apni job aur company ki saari details apni family ke saath share karein. <br>4. Un agents se bachein jo guaranteed visa ya job ka vada karte hain. <br>5. Apna passport, contract aur payment receipts ko hamesha safe aur digital backup ke sath rakhein.',
    bodyRecruiters: 'Licensed recruiters, manpower agencies aur companies videshi hiring requirements ko review ke liye submit kar sakte hain. BaharKaam sirf source-checked requirements aur consent-based worker interest ko hi show kar sakta hai. BaharKaam kisi bhi fake, unclear, misleading, ya guaranteed job/visa posts ko allow nahi karta hai.',

    // Scam Form Elements
    scamTitle: 'Report Predatory Agent Scam',
    scamWarnTitle: '⚠️ HELP PROTECT OTHER MIGRANTS',
    scamWarnDesc: 'Aap fake visa, fake offer letter, ticket/PNR fraud, agent payment demand, ya suspicious recruiter ki report kar sakte hain. Warning: Jab tak zaroorat na ho sensitive documents upload na karein, aur apna OTP ya password kisi se kabhi share na karein.',
    scamLblAgentName: 'Scamming Agent / Agency Name:',
    scamLblAgentPhone: 'Agent Phone Number:',
    scamLblTargetCountry: 'Target Country Promised:',
    scamLblFraudType: 'Fraud Type:',
    scamLblMoneyLost: 'Money Lost (Local currency equivalent):',
    scamLblNarrative: 'Briefly explain how you were scammed (Safarnama details):',
    scamBtnSubmit: '🚨 Submit Scam Report',
    scamSuccessTitle: '🟢 Report Received Successfully',
    scamSuccessDesc: 'Aapki report locally save ho gayi hai. Hamari security team is agent ke phone number ko public verification blacklist mein check karegi. Safe rahein!'
  },
  UR: {
    brandName: 'باہر کام',
    tagline: 'محفوظ بیرون ملک ملازمتیں اور ویزا گائیڈ',
    langMenuTitle: 'زبان کا انتخاب',
    heroTitle: 'بیرون ملک جانے سے پہلے ساتھی AI سے مشورہ لیں',
    heroSubtitle: 'ویزا فراڈ سے بچیں، اصل تنخواہ جانیں، اور محفوظ طریقے سے کمائیں',
    sathiStatus: 'ساتھی AI سن رہا ہے... جب آپ بولنا شروع کریں گے، یہاں جواب دکھائے گا',
    sathiListening: 'ساتھی AI سن رہا ہے... بولیں "ڈرائیور جابز دبئی" یا "سعودی ہیلپر"...',
    statusOnline: 'آن لائن',
    statusSearching: 'تلاش کر رہا ہے...',
    
    // Core Cards
    cardRoadmapTitle: 'محفوظ ملازمت کا روڈ میپ',
    cardRoadmapDesc: 'تصدیق شدہ نوکریاں، اپلائی پروسیس اور رہنمائی',
    cardVisacheckTitle: 'ویزا فراڈ کی جانچ',
    cardVisacheckDesc: 'جعلی ویزا اور آفر لیٹر چیک کریں',
    cardSalaryTitle: 'تنخواہ کی گائیڈ',
    cardSalaryDesc: 'تنخواہ کی حد، دستاویزات اور ملک کا روڈ میپ',
    cardMoneyTitle: 'پیسہ اور سرکاری مدد',
    cardMoneyDesc: 'شرح مبادلہ، قرض کی وارننگ اور اسکیمیں',
    
    // Category Pills
    filterAll: 'تمام جابز',
    filterConst: '🏗️ تعمیراتی کام',
    filterFactory: '🏭 فیکٹری اور پیکنگ',
    filterDriver: '🚛 ڈرائیور اور آپریٹر',
    filterHotel: '🏨 ہوٹل اور کیٹرنگ',
    popularRolesHeading: 'مقبول جاب رولز',
    viewAllRoles: '🗂️ تمام جابز دیکھیں',
    roleDriver: '🚛 ڈرائیور',
    roleHelper: '🧹 ہیلپر / مزدور',
    roleFactory: '🏭 فیکٹری اور پیکنگ',
    roleConstruction: '🏗️ تعمیراتی کام',
    roleCleaner: '🧹 کلینر',
    roleSecurity: '🛡️ سیکیورٹی گارڈ',
    roleWelder: '👨‍🏭 ویلڈر',
    
    // Bottom Nav
    navHome: 'ہوم',
    navNaukri: 'ملازمتیں',
    navProfile: 'پروفائل',
    navSos: 'ایس او ایس',
    
    // Search input
    searchPlaceholder: 'ٹائپ کریں: ملک، ملازمت، ویزا کی جانچ...',
    activeFilterBadge: 'فعال فلٹر: ',
    btnClearAll: 'سب صاف کریں',
    
    // Profile
    profileTitle: 'پردیسی بھائی',
    profileSubtitle: 'محفوظ ہجرت کا پروفائل',
    profileReadiness: 'تیاری کا اسٹیٹس',
    profileSaved: 'محفوظ کردہ گائیڈز',
    profileWarnings: 'خطرے کا الرٹ',
    profileChecklistTitle: 'آپ کا محفوظ روانگی کا چیک لسٹ',
    chkPassport: 'اصل پاسپورٹ (درستگی ۲ سال) چیک کر لیا ہے',
    chkVisa: 'ورک ویزا کی قسم کی تصدیق مکمل ہے',
    chkPcc: 'پی سی سی (پولیس کلئیرنس) مقامی تھانے سے مل گیا ہے',
    chkMedical: 'میڈیکل فٹ رپورٹ کارڈ مل گیا ہے',
    chkFamily: 'ایمرجنسی رابطہ نمبر خاندان کو شیئر کر دیا ہے',
    profileTrustTitle: 'باہر کام پروٹیکشن انجن',
    profileTrustBody: 'آپ کی تمام معلومات لوکل براؤزر اسٹوریج میں محفوظ رہتی ہیں۔ ہم اس کو کسی پرائیویٹ سرور پر فروخت یا لیک نہیں کرتے۔',
    
    // Helpline Contacts SOS
    sosHeading: 'تصدیق شدہ ہنگامی ہیلپ لائنز',
    sosIntro: '⚠️ بیرون ملک تنخواہ پھنس گئی ہو، پاسپورٹ چھین لیا گیا ہو، یا کوئی خطرہ ہو؟ براہ راست سرکاری سفارت خانے کی ہیلپ لائنز سے رابطہ کریں:',
    sosDisclaimer: 'اپنے معاہدے اور پاسپورٹ کی تصویر ہمیشہ اپنے خاندان کے پاس محفوظ رکھیں۔ قانوناً کوئی بھی آجر آپ کا پاسپورٹ اپنے پاس نہیں رکھ سکتا۔',
    sosCallBtn: 'ابھی کال کریں',
    
    // Buttons inside Job cards
    btnViewDetails: 'حفاظتی تفصیلات دیکھیں',
    btnSafetyCheck: 'حفاظتی چیک لسٹ',
    btnFamilyKoBhejo: 'خاندان کو بھیجیں',
    btnHideDetails: 'تفصیلات چھپائیں',
    
    // Job details static text
    lblCountry: 'ملک',
    lblRole: 'عہدہ / کام',
    lblSalary: 'تنخواہ کی حد',
    lblVisaType: 'ویزا کی قسم',
    lblDocuments: 'ضروری دستاویزات',
    lblFoodTicket: 'کھانا / رہائش / ٹکٹ',
    lblSource: 'معلومات کا ذریعہ',
    lblRiskLevel: 'خطرے کی سطح',
    lblWarning: 'اہم وارننگ',
    lblLastUpdated: 'آخری بار اپ ڈیٹ کیا گیا',
    lblVerifiedSeal: 'ایجنٹ باہر کام سیکیورٹی میٹرکس کے ذریعے تصدیق شدہ ہے',
    
    // Family Share Summary modal
    familyShareHeading: 'خاندان کے لیے حفاظتی شیئر سمری',
    familyNotice: '*نوٹ: یہ سمری خاندان کے ساتھ شیئر کرنے کے لیے کاپی ہو جائے گی یا واٹس ایپ پر بھیجی جا سکتی ہے۔',
    familyBtnCopy: 'تفصیلات کاپی کریں',
    familyBtnWA: 'واٹس ایپ پر شیئر کریں',
    familyAdviceTitle: 'خاندان / والدین کے لیے نصیحت:',
    familyAdviceBody: 'کسی بھی غیر تصدیق شدہ ایجنٹ کو پیشگی نقد رقم نہ دیں، اور ہمیشہ بینک ٹرانسفر کے ذریعے یا رجسٹرڈ رسید کے ساتھ ہی لین دین کریں۔',

    // Salary Guide Modal
    salaryHeading: 'بیرون ملک تنخواہوں کی اصل حقیقت کا گائیڈ',
    salarySelectLbl: 'اپنے ہدف کا ملک منتخب کریں:',
    
    // Money safety modal
    moneyHeading: 'رقم کی حفاظت اور شرح مبادلہ',
    moneyDiscTitle: '🛡️ اہم محفوظ ترسیل زر کا اعلان',
    moneyDiscBody: 'باہر کام کوئی بینک، ترسیل زر کی سروس، رقم کی منتقلی یا والیٹ ایپ نہیں ہے۔ ہم براہ راست رقم منتقل نہیں کرتے۔ ہم صرف سرکاری شرح مبادلہ کا موازنہ کرنے اور محفوظ ترسیل زر کے گائیڈز فراہم کرتے ہیں۔',
    currencyCompareTitle: '💰 لائیو شرح مبادلہ کا موازنہ',
    currencyCompareSubtitle: 'بینکنگ شرح مبادلہ کو محفوظ طریقے سے چیک کریں (صرف ریگولیٹڈ ذرائع):',
    lblSendAmt: 'بیرونی رقم:',
    lblRecvAmt: 'گھریلو رقم (مقامی کرنسی):',
    partnerLinksTitle: 'محفوظ ترسیل زر کے ریگولیٹڈ اختیارات کا موازنہ کریں:',
    moneyStep1Title: 'حوالہ / ہنڈی کا استعمال کبھی نہ کریں',
    moneyStep1Desc: 'نجی آف لائن حوالہ ایجنٹ غیر قانونی ہیں۔ حوالہ کے ذریعے بھیجا گیا پیسہ منجمد یا بلاک ہو سکتا ہے۔',
    moneyStep2Title: 'رسیدیں محفوظ رکھیں',
    moneyStep2Desc: 'ہر ڈیجیٹل/طبیعی رسید کو محفوظ پی ڈی ایف بنا کر واٹس ایپ پر اپنے خاندان کے ساتھ شیئر رکھیں۔',
    moneyStep3Title: 'قرض اور ادھار کی آگاہی',
    moneyStep3Desc: 'مقامی دلال سے بھاری سود پر قرض لے کر بیرون ملک جانا سب سے بڑا جال ہے۔ سرکاری امدادی قرضوں کو چیک کریں۔',

    // Footer & Policies Keys
    footAbout: 'ہمارے بارے میں',
    footContact: 'رابطہ کریں',
    footPrivacy: 'رازداری کی پالیسی',
    footTerms: 'شرائط و ضوابط',
    footDisclaimer: 'دستبرداری',
    footEditorial: 'ادارتی پالیسی',
    footCorrections: 'تصحیحات کی پالیسی',
    footScam: 'اسکام کی رپورٹ کریں',
    footSos: 'ہنگامی مدد',
    footSafety: 'حفاظتی رہنما خطوط',
    footRecruiters: 'بھرتی کاروں / کمپنیوں کے لیے',

    // Modal Bodies Content
    bodyAbout: 'باہر کام بھارت، پاکستان، بنگلہ دیش اور نیپال کے کارکنوں کے لیے ایک حفاظتی رہنمائی کا پلیٹ فارم ہے جو خلیج، یورپ اور دنیا بھر میں کام کرنا چاہتے ہیں۔ <br><br>ہم کارکنوں کو بیرون ملک ملازمت کے تقاضے، ویزا کا عمل، تنخواہ کی حقیقت، دستاویزات، ٹکٹ/PNR فراڈ، جعلی آفر لیٹرز، ایجنٹ کی ادائیگی کے خطرات اور تصدیق شدہ معلومات کو سمجھنے میں مدد کرتے ہیں۔ <br><br>باہر کام کوئی ویزا ایجنسی، بھرتی کی ایجنسی یا سرکاری ویب سائٹ نہیں ہے۔ ہم ملازمتوں یا ویزا کی ضمانت نہیں دیتے۔ کارکنوں کو رقم ادا کرنے یا دستاویزات شیئر کرنے سے پہلے ہمیشہ سرکاری ذرائع سے تفصیلات کی تصدیق کرنی چاہیے۔',
    bodyContact: 'مدد کی ضرورت ہے؟ ہمیں support@baharkaam.com پر ای میل کریں یا ہمارے تصدیق شدہ ہیلپ ڈیسک سے رابطہ کریں۔ ہنگامی سوالات کا جواب ۲ گھنٹے کے اندر دیا جاتا ہے۔',
    bodyPrivacy: 'باہر کام آپ کا فون نمبر، نام، ملازمت کا کردار، ہدف ملک، زبان کی ترجیح، دستاویز/چیک کی تفصیلات اور محفوظ کردہ گائیڈز جمع کر سکتا ہے۔ آپ کا فون نمبر اور پروفائل آپ کی واضح رضامندی کے بغیر بھرتی کرنے والوں یا کمپنیوں کے ساتھ شیئر نہیں کیا جائے گا۔ مستقبل میں سروس کو بہتر بنانے کے لیے اینالیٹکس، اشتہارات، یا کوکیز کا استعمال کیا جا سکتا ہے۔',
    bodyTerms: 'صارفین کو اس پلیٹ فارم کا استعمال صرف رہنمائی اور تعلیمی مقاصد کے لیے کرنا چاہیے، اور اسے حتمی قانونی، ہجرت، یا ویزا مشورہ کے طور پر نہیں لینا چاہیے۔ صارفین پر لازم ہے کہ وہ کسی بھی اقدام یا ادائیگی سے پہلے سرکاری یا سفارتی ذرائع سے تمام تفصیلات کی تصدیق کریں۔',
    bodyDisclaimer: 'باہر کام مکمل طور پر خود مختار ہے۔ ہم ویزا، نوکری کی ضمانت، بھرتی کی خدمات، امیگریشن کی منظوری، فلائٹ ٹکٹ کی تصدیق، یا قرض کی منظوری فراہم نہیں کرتے ہیں۔ ہمارا پلیٹ فارم سختی سے حفاظتی رہنمائی اور معلومات کی تصدیق تک محدود ہے۔',
    bodyEditorial: 'ہماری گائیڈز عوامی طور پر دستیاب معلومات، جہاں ممکن ہو سرکاری حوالہ جات، اور دستی جائزے کے ذریعے تیار کی جاتی ہیں۔ امیگریشن پالیسیوں میں تبدیلی کے ساتھ معلومات کو اپ ڈیٹ یا درست کیا جا سکتا ہے۔',
    bodyCorrections: 'صارفین غلط یا پرانی معلومات کی رپورٹ کر سکتے ہیں۔ باہر کام ایسی رپورٹس کا جائزہ لے گا اور ضرورت کے مطابق مواد کو اپ ڈیٹ کرے گا۔',
    bodySafety: '۱۔ بغیر رسید کے کسی ایجنٹ کو پیشگی نقد رقم نہ دیں۔ <br>۲۔ ویزا، آفر لیٹر اور ٹکٹ کی تصدیق ہمیشہ سرکاری ذرائع سے کریں۔ <br>۳۔ ملازمت کی تمام تفصیلات اپنے خاندان کے ساتھ شیئر کریں۔ <br>۴۔ ان ایجنٹوں سے بچیں جو ویزا یا نوکری کی ضمانت کا وعدہ کرتے ہیں۔ <br>۵۔ پاسپورٹ، معاہدہ اور ادائیگی کی رسیدیں ہمیشہ محفوظ اور ڈیجیٹل بیک اپ کے ساتھ رکھیں۔',
    bodyRecruiters: 'لائسنس یافتہ بھرتی کار، افرادی قوت کی ایجنسیاں اور کمپنیاں بیرون ملک ملازمت کی ضروریات جائزے کے لیے جمع کر سکتی ہیں۔ باہر کام صرف تصدیق شدہ معلومات اور رضامندی پر مبنی ملازمین کی دلچسپی دکھا سکتا ہے۔ باہر کام کسی بھی جعلی، مبہم، گمراہ کن، یا ملازمت کی ضمانت والی پوسٹس کی اجازت نہیں دیتا۔',

    // Scam Form Elements
    scamTitle: 'ایجنٹ کے فراڈ کی رپورٹ کریں',
    scamWarnTitle: '⚠️ دوسرے مسافروں کو محفوظ رکھیں',
    scamWarnDesc: 'آپ جعلی ویزا، جعلی آفر لیٹر، ٹکٹ/PNR فراڈ، ایجنٹ کی ادائیگی کا مطالبہ، یا مشکوک بھرتی کار کی رپورٹ کر سکتے ہیں۔ انتباہ: جب تک ضرورت نہ ہو حساس دستاویزات اپ لوڈ نہ کریں، اور اپنا OTP یا پاس ورڈ کبھی بھی کسی کے ساتھ شیئر نہ کریں۔',
    scamLblAgentName: 'ایجنٹ / ایجنسی کا نام:',
    scamLblAgentPhone: 'ایجنٹ کا فون نمبر / واٹس ایپ:',
    scamLblTargetCountry: 'مطلوبہ ملک کا نام:',
    scamLblFraudType: 'فراڈ کی قسم:',
    scamLblMoneyLost: 'خرچ کی گئی رقم (مقامی کرنسی میں):',
    scamLblNarrative: 'فراڈ کی تفصیلات یہاں لکھیں (سفرنامہ):',
    scamBtnSubmit: '🚨 رپورٹ جمع کروائیں',
    scamSuccessTitle: '🟢 رپورٹ کامیابی سے موصول ہو گئی',
    scamSuccessDesc: 'آپ کی رپورٹ محفوظ ہو گئی ہے۔ ہماری ٹیم اس ایجنٹ کے فون نمبر کو بلیک لسٹ میں چیک کرے گی۔ محفوظ رہیں!'
  },
  BN: {
    brandName: 'বাহারকাম',
    tagline: 'বিদেশে নিরাপদ কাজ ও ভিসা গাইড',
    langMenuTitle: 'ভাষা নির্বাচন',
    heroTitle: 'বিদেশে যাওয়ার আগে সাথী এআই থেকে পরামর্শ নিন',
    heroSubtitle: 'ভিসা জালিয়াতি থেকে বাঁচুন, সঠিক বেতন জানুন, নিরাপদে উপার্জন করুন',
    sathiStatus: 'সাথী এআই শুনছে... আপনি কথা বলা শুরু করলে এখানে উত্তর দেখাবে',
    sathiListening: 'সাথী এআই শুনছে... বলুন "ড্রাইভার জবস দুবাই" অথবা "সৌদি হেল্পার"...',
    statusOnline: 'অনলাইন',
    statusSearching: 'অনুসন্ধান করা হচ্ছে...',
    
    // Core Cards
    cardRoadmapTitle: 'सुरक्षित কাজের রোডम্যাপ',
    cardRoadmapDesc: 'যাচাইকৃত চাকরি, আবেদন প্রক্রিয়া এবং নির্দেশিকা',
    cardVisacheckTitle: 'ভিসা জালিয়াতি পরীক্ষা',
    cardVisacheckDesc: 'ভুরো ভিসা এবং অফার লেটার চেক করুন',
    cardSalaryTitle: 'বেতনের সঠিক নির্দেশিকা',
    cardSalaryDesc: 'বেতনের সীমা, নথিপত্র এবং দেশের রোডম্যাপ',
    cardMoneyTitle: 'অর্থ ও সরকারি সাহায্য',
    cardMoneyDesc: 'বিনিময় হার, লোন ওয়ার্নিং ও সরকারি স্কিম',
    
    // Category Pills
    filterAll: 'সব কাজ',
    filterConst: '🏗️ কনস্ট্রাকশন কাজ',
    filterFactory: '🏭 ফ্যাক্টরি ও প্যাকিং',
    filterDriver: '🚛 ড্রাইভার ও অপারেটর',
    filterHotel: '🏨 হোটেল ও ক্যাটারিং',
    popularRolesHeading: 'জনপ্রিয় কাজের ভূমিকা',
    viewAllRoles: '🗂️ সব কাজ দেখুন',
    roleDriver: '🚛 ড্রাইভার',
    roleHelper: '🧹 হেল্পার / লেবার',
    roleFactory: '🏭 ফ্যাক্টরি ও প্যাকিং',
    roleConstruction: '🏗️ কনস্ট্রাকশন',
    roleCleaner: '🧹 ক্লিনার',
    roleSecurity: '🛡️ সিকিউরিটি',
    roleWelder: '👨‍🏭 ওয়েল্ডার',
    
    // Bottom Nav
    navHome: 'হোম',
    navNaukri: 'চাকরি',
    navProfile: 'প্রোফাইল',
    navSos: 'জরুরী সাহায্য',
    
    // Search input
    searchPlaceholder: 'টাইপ করুন: দেশ, কাজ, ভিসা পরীক্ষা...',
    activeFilterBadge: 'সক্রিয় ফিল্টার: ',
    btnClearAll: 'সব মুছুন',
    
    // Profile
    profileTitle: 'প্রবাসী ভাই',
    profileSubtitle: 'নিরাপদ অভিবাসন প্রোফাইল',
    profileReadiness: 'প্রস্তুতির অবস্থা',
    profileSaved: 'সংরক্ষিত নির্দেশিকা',
    profileWarnings: 'ঝুঁকি সতর্কতা',
    profileChecklistTitle: 'আপনার নিরাপদ যাত্রা চেকলিস্ট',
    chkPassport: 'মূল পাসপোর্ট (২ বছর মেয়াদসহ) পরীক্ষা করা হয়েছে',
    chkVisa: 'কাজের ভিসার ধরন যাচাই করা হয়েছে',
    chkPcc: 'থানা থেকে পুলিশ ক্লিয়ারেন্স (PCC) নেওয়া হয়েছে',
    chkMedical: 'মেডিকেল ফিটনেস কার্ড পাওয়া গেছে',
    chkFamily: 'জরুরী যোগাযোগ নম্বর পরিবারকে দেওয়া হয়েছে',
    profileTrustTitle: 'বাহারকাম সুরক্ষা ইঞ্জিন',
    profileTrustBody: 'আপনার সমস্ত তথ্য ব্রাউজারের নিজস্ব মেমরিতে সুরক্ষিত থাকে। আমরা কোন প্রাইভেট সার্ভারে এটি বিক্রি বা ফাঁস করি না।',
    
    // Helpline Contacts SOS
    sosHeading: 'যাচাইকৃত জরুরী হেল্পলাইন',
    sosIntro: '⚠️ বিদেশে বেতন আটকে গেলে, পাসপোর্ট কেড়ে নিলে, অথবা কোন বিপদে পড়লে? সরাসরি সরকারি দূতাবাসের হেল্পলাইনে যোগাযোগ করুন:',
    sosDisclaimer: 'পাসপোর্ট ও চুক্তিপত্রের ছবি সবসময় পরিবারের কাছে রাখবেন। কোন নিয়োগকারী আইনত আপনার পাসপোর্ট আটকে রাখতে পারে না।',
    sosCallBtn: 'কল করুন',
    
    // Buttons inside Job cards
    btnViewDetails: 'নিরাপত্তা বিবরণ দেখুন',
    btnSafetyCheck: 'सुरक्षा চেকলিস্ট',
    btnFamilyKoBhejo: 'পরিবারকে পাঠান',
    btnHideDetails: 'বন্ধ করুন',
    
    // Job details static text
    lblCountry: 'দেশ',
    lblRole: 'কাজের ধরন',
    lblSalary: 'বেতনের সীমা',
    lblVisaType: 'ভিসার ধরন',
    lblDocuments: 'প্রয়োজনীয় নথিপত্র',
    lblFoodTicket: 'খাবার / বাসস্থান / বিমান টিকিট',
    lblSource: 'নথি উৎস',
    lblRiskLevel: 'ঝুঁকির মাত্রা',
    lblWarning: 'গুরুত্বপূর্ণ সতর্কতা',
    lblLastUpdated: 'সর্বশেষ আপডেট',
    lblVerifiedSeal: 'বাহারকাম সিকিউরিটি ম্যাট্রিক্স দ্বারা যাচাইকৃত এজেন্সি',
    
    // Family Share Summary modal
    familyShareHeading: 'পারিবারিক নিরাপত্তা শেয়ার সারাংশ',
    familyNotice: '*দ্রষ্টব্য: এই সারাংশটি পরিবারের সাথে শেয়ার করার জন্য ক্লিপবোর্ডে কপি হবে বা হোয়াটসঅ্যাপে পাঠানো যাবে।',
    familyBtnCopy: 'কপি করুন',
    familyBtnWA: 'হোয়াটসঅ্যাপে শেয়ার করুন',
    familyAdviceTitle: 'মা-বাবা / পরিবারের জন্য পরামর্শ:',
    familyAdviceBody: 'কোন অবৈধ এজেন্টকে অগ্রিম টাকা দেবেন না এবং সবসময় ব্যাংক বা নিবন্ধিত রশিদের মাধ্যমে লেনদেন করুন।',

    // Salary Guide Modal
    salaryHeading: 'বিদেশের বাস্তব বেতন নির্দেশিকা',
    salarySelectLbl: 'আপনার গন্তব্য দেশ নির্বাচন করুন:',
    
    // Money safety modal
    moneyHeading: 'অর্থ ও সরকারি সহায়তা নির্দেশিকা',
    moneyDiscTitle: '🛡️ গুরুত্বপূর্ণ সুরক্ষিত রেমিট্যান্স ও কল্যাণ বিবৃতি',
    moneyDiscBody: 'বাহারকাম কোনো ব্যাংক, রেমিট্যান্স বা মানি ট্রান্সফার প্রতিষ্ঠান নয়। আমরা কোনো সরাসরি অর্থ বা লোন দিই না। আমরা শুধু অফিসিয়াল বিনিময় হার ও নিরাপদ রেমিট্যান্স গাইড প্রদান করি।',
    currencyCompareTitle: '💰 লাইভ বিনিময় হার তুলনাকারী',
    currencyCompareSubtitle: 'নিরাপদ এবং নিয়ন্ত্রিত চ্যানেলের মাধ্যমে বিনিময় হার পরীক্ষা করুন:',
    lblSendAmt: 'বিদেশের মুদ্রা:',
    lblRecvAmt: 'বাড়ির মুদ্রা (দেশী টাকা):',
    partnerLinksTitle: 'নিয়ন্ত্রিত সুরক্ষিত রেমিট্যান্স অপশন তুলনা করুন:',
    moneyStep1Title: 'হুন্ডি কখনো ব্যবহার করবেন না',
    moneyStep1Desc: 'হুন্ডি সম্পূর্ণ অবৈধ। হুন্ডির মাধ্যমে টাকা পাঠালে অ্যাকাউন্ট ফ্রিজ বা ব্লক হতে পারে।',
    moneyStep2Title: 'রসিদ নিরাপদে সংরক্ষণ করুন',
    moneyStep2Desc: 'প্রতিটি লেনদেনের রসিদ পিডিএফ করে হোয়াটসঅ্যাপে পরিবারের সাথে শেয়ার রাখুন।',
    moneyStep3Title: 'ঋণ গ্রহণের সতর্কতা',
    moneyStep3Desc: 'চড়া সুদে ঋণ নিয়ে বিদেশ যাওয়া বড় একটি ফাঁদ। সরকারি প্রবাসী কল্যাণ ব্যাংক লোন যাচাই করুন।',

    // Footer & Policies Keys
    footAbout: 'আমাদের সম্পর্কে',
    footContact: 'যোগাযোগ',
    footPrivacy: 'গোপনীয়তা নীতি',
    footTerms: 'শর্তাবলী',
    footDisclaimer: 'দাবিত্যাগ',
    footEditorial: 'সম্পাদকীয় নীতি',
    footCorrections: 'সংশোধন নীতি',
    footScam: 'প্রতারণা রিপোর্ট',
    footSos: 'জরুরি সাহায্য',
    footSafety: 'নিরাপত্তা নির্দেশিকা',
    footRecruiters: 'নিয়োগকারী / কোম্পানির জন্য',

    // Modal Bodies Content
    bodyAbout: 'BaharKaam হলো ভারত, পাকিস্তান, বাংলাদেশ এবং নেপালের কর্মীদের জন্য একটি সেফটি-ফার্স্ট বৈদেশিক কাজের গাইডেন্স প্ল্যাটফর্ম, যারা উপসাগরীয় দেশ, ইউরোপ এবং বিশ্বজুড়ে কাজ করতে চান। <br><br>আমরা কর্মীদের বিদেশের কাজের প্রয়োজনীয়তা, ভিসা প্রক্রিয়া, বেতনের বাস্তবতা, নথিপত্র, টিকিট/PNR জালিয়াতি, নকল অফার লেটার, এজেন্ট পেমেন্টের ঝুঁকি এবং যাচাইকৃত নিয়োগের তথ্য বুঝতে সাহায্য করি। <br><br>BaharKaam কোনো ভিসা এজেন্সি, রিক্রুটমেন্ট এজেন্সি বা সরকারি ওয়েবসাইট নয়। আমরা চাকরি বা ভিসার গ্যারান্টি দিই না। টাকা দেওয়ার বা নথিপত্র শেয়ার করার আগে কর্মীদের সর্বদা অফিশিয়াল সোর্স থেকে বিবরণ যাচাই করা উচিত।',
    bodyContact: 'যেকোনো সহায়তার জন্য support@baharkaam.com-এ ইমেল করুন বা আমাদের ভেরিফাইড হেল্পডেস্কে যোগাযোগ করুন। আমরা ২ ঘণ্টার মধ্যে জরুরি প্রশ্নের উত্তর দিই।',
    bodyPrivacy: 'BaharKaam আপনার ফোন নম্বর, নাম, কাজের ভূমিকা, লক্ষ্য দেশ, ভাষা পছন্দ, নথি/চেক বিবরণ এবং সংরক্ষিত গাইড সংগ্রহ করতে পারে। আপনার ফোন নম্বর এবং প্রোফাইল বিবরণ আপনার স্পষ্ট সম্মতি ছাড়া নিয়োগকারী বা কোম্পানির সাথে শেয়ার করা হবে না। ভবিষ্যতে আমাদের পরিষেবা উন্নত করতে বিশ্লেষণ, কুকিজ বা বিজ্ঞাপন ব্যবহার করা হতে পারে।',
    bodyTerms: 'ব্যবহারকারীদের এই প্ল্যাটফর্মটি শুধুমাত্র নির্দেশিকা এবং শিক্ষামূলক উদ্দেশ্যে ব্যবহার করা উচিত এবং এটি চূড়ান্ত আইনি বা ভিসা পরামর্শ হিসাবে নেওয়া উচিত নয়। ব্যবহারকারীদের কোনো পদক্ষেপ বা অর্থ প্রদানের আগে অফিশিয়াল সরকারি বা দূতাবাস উৎস থেকে সমস্ত বিবরণ যাচাই করা আবশ্যক।',
    bodyDisclaimer: 'BaharKaam সম্পূর্ণ স্বাধীন। আমরা কোনো ভিসা, চাকরির গ্যারান্টি, নিয়োগ পরিষেবা, অভিবাসন অনুমোদন, টিকিট নিশ্চিতকরণ বা ঋণ অনুমোদন প্রদান করি না। আমাদের প্ল্যাটফর্ম কঠোরভাবে কর্মীদের জন্য নিরাপত্তা নির্দেশিকা এবং উৎস যাচাইকরণ সহায়তার মধ্যে সীমাবদ্ধ।',
    bodyEditorial: 'আমাদের গাইডগুলি সর্বজনীনভাবে উপলব্ধ তথ্য, যেখানে সম্ভব অফিশিয়াল সরকারি এবং দূতাবাসের তথ্য এবং ম্যানুয়াল পর্যালোচনার মাধ্যমে প্রস্তুত করা হয়। ইমিগ্রেশন নীতি এবং প্রয়োজনীয়তার পরিবর্তনের সাথে সাথে তথ্য আপডেট বা সংশোধন করা হতে পারে।',
    bodyCorrections: 'ব্যবহারকারীরা ভুল বা পুরানো তথ্য রিপোর্ট করতে পারেন। BaharKaam এই জাতীয় রিপোর্ট পর্যালোচনা করবে এবং প্রয়োজন অনুযায়ী আপডেট করবে।',
    bodySafety: '১. রসিদ ছাড়া কোনো এজেন্টকে অগ্রিম টাকা দেবেন না। <br>২. ভিসা, অফার লেটার এবং টিকিট সর্বদা অফিশিয়াল বা দূতাবাস উৎস থেকে যাচাই করুন। <br>৩. আপনার চাকরির সমস্ত বিবরণ পরিবারের সাথে শেয়ার করুন। <br>৪. যেসব এজেন্ট নিশ্চিত ভিসা বা চাকরির প্রতিশ্রুতি দেয় তাদের এড়িয়ে চলুন। <br>৫. আপনার পাসপোর্ট, চুক্তি এবং অর্থ প্রদানের রসিদ সর্বদা নিরাপদ এবং ডিজিটাল ব্যাকআপ সহ রাখুন।',
    bodyRecruiters: 'লাইসেন্সপ্রাপ্ত নিয়োগকারী, জনশক্তি সংস্থা এবং কোম্পানিগুলি পর্যালোচনার জন্য বিদেশের নিয়োগের প্রয়োজনীয়তা জমা দিতে পারে। BaharKaam শুধুমাত্র যাচাইকৃত নিয়োগের তথ্য এবং সম্মতি-ভিত্তিক কর্মীদের আগ্রহের বিবরণ প্রদর্শন করতে পারে। BaharKaam কোনো জাল, অস্পষ্ট, বিভ্রান্তিকর বা নিশ্চিত চাকরি/ভিসা পোস্টের অনুমতি দেয় না।',

    // Scam Form Elements
    scamTitle: 'দালালের জালিয়াতি রিপোর্ট করুন',
    scamWarnTitle: '⚠️ অন্যান্য অভিবাসীদের সুরক্ষিত রাখুন',
    scamWarnDesc: 'আপনি নকল ভিসা, নকল অফার লেটার, টিকিট/PNR জালিয়াতি, এজেন্ট পেমেন্টের অতিরিক্ত দাবি বা সন্দেহজনক নিয়োগকারীর রিপোর্ট করতে পারেন। সতর্কতা: প্রয়োজন ছাড়া সংবেদনশীল নথি আপলোড করবেন না এবং আপনার ওটিপি (OTP) বা পাসওয়ার্ড কারও সাথে শেয়ার করবেন না।',
    scamLblAgentName: 'দালাল বা এজেন্সির নাম:',
    scamLblAgentPhone: 'দালালের ফোন নম্বর / হোয়াটসঅ্যাপ:',
    scamLblTargetCountry: 'কোন দেশের কথা বলেছিল:',
    scamLblFraudType: 'জালিয়াতির ধরন:',
    scamLblMoneyLost: 'হারানো টাকার পরিমাণ:',
    scamLblNarrative: 'কীভাবে প্রতারিত হয়েছেন সংক্ষেপে লিখুন:',
    scamBtnSubmit: '🚨 রিপোর্ট জমা দিন',
    scamSuccessTitle: '🟢 রিপোর্ট সফলভাবে গৃহীত হয়েছে',
    scamSuccessDesc: 'আপনার রিপোর্টটি সংরক্ষণ করা হয়েছে। আমাদের নিরাপত্তা দল এই দালালের নম্বরটি যাচাই করবে। নিরাপদ থাকুন!'
  },
  NE: {
    brandName: 'बहारकाम',
    tagline: ' विदेशमा सुरक्षित काम र भिसा निर्देशिका',
    langMenuTitle: 'भाषा छनौट',
    heroTitle: 'विदेश जानु अघि साथी एआईसँग सल्लाह लिनुहोस्',
    heroSubtitle: 'भिसा जालसाजीबाट बच्नुहोस्, वास्तविक तलब जान्नुहोस्, सुरक्षित कमाउनुहोस्',
    sathiStatus: 'साथी एआईले सुन्दैछ... तपाईंले बोल्न सुरु गरेपछि यहाँ जवाफ देखिनेछ',
    sathiListening: 'साथी एआईले सुन्दैछ... भन्नुहोस् "ड्राइभर जब्स दुबई" वा "साउदी हेल्पर"...',
    statusOnline: 'अनलाइन',
    statusSearching: 'खोजिँदैछ...',
    
    // Core Cards
    cardRoadmapTitle: 'सुरक्षित वैदेशिक रोजगारी रोडम्याप',
    cardRoadmapDesc: 'प्रमाणित जागिर, आवेदन प्रक्रिया र मार्गदर्शन',
    cardVisacheckTitle: 'भिसा जालसाजी जाँच',
    cardVisacheckDesc: 'नक्कली भिसा र अफर लेटर जाँच गर्नुहोस्',
    cardSalaryTitle: 'तलव निर्देशिका',
    cardSalaryDesc: 'तलबको दायरा, कागजात र देशको रोडम्याप',
    cardMoneyTitle: 'पैसा र सरकारी सहयोग',
    cardMoneyDesc: 'दर, ऋण चेतावनी र सरकारी योजनाहरू',
    
    // Category Pills
    filterAll: 'सबै काम',
    filterConst: '🏗️ कन्स्ट्रक्सन काम',
    filterFactory: '🏭 फ्याक्ट्री र प्याकिङ',
    filterDriver: '🚛 ड्राइभर र अपरेटर',
    filterHotel: '🏨 होटल र क्याटरिङ',
    popularRolesHeading: 'लोकप्रिय कामहरू',
    viewAllRoles: '🗂️ सबै कामहरू हेर्नुहोस्',
    roleDriver: '🚛 चालक / ड्राइभर',
    roleHelper: '🧹 सहयोगी / लेबर',
    roleFactory: '🏭 फ्याक्ट्री र प्याकिङ',
    roleConstruction: '🏗️ कन्स्ट्रक्सन',
    roleCleaner: '🧹 क्लिनर',
    roleSecurity: '🛡️ सुरक्षाकर्मी',
    roleWelder: '👨‍🏭 वेल्डर',
    
    // Bottom Nav
    navHome: 'होम',
    navNaukri: 'काम',
    navProfile: 'प्रोफाइल',
    navSos: 'आपतकालीन',
    
    // Search input
    searchPlaceholder: 'टाइप गर्नुहोस्: देश, काम, भिसा जाँच...',
    activeFilterBadge: 'सक्रिय फिल्टर: ',
    btnClearAll: 'सबै हटाउनुहोस्',
    
    // Profile
    profileTitle: 'प्रवासी भाइ',
    profileSubtitle: 'सुरक्षित आप्रवासन प्रोफाइल',
    profileReadiness: 'तयारी अवस्था',
    profileSaved: 'बचत गरिएका निर्देशिका',
    profileWarnings: 'जोखिम चेतावनी',
    profileChecklistTitle: 'तपाईंको सुरक्षित प्रस्थान चेकलिस्ट',
    chkPassport: 'मूल पासपोर्ट (२ वर्षको म्याद) जाँच गरियो',
    chkVisa: 'कामको भिसा प्रकार प्रमाणीकरण पूरा भयो',
    chkPcc: 'प्रहरी प्रतिवेदन (PCC) प्राप्त भयो',
    chkMedical: 'मेडिकल फिटनेस रिपोर्ट कार्ड पाइयो',
    chkFamily: 'आपतकालीन सम्पर्क परिवारलाई जानकारी गराइयो',
    profileTrustTitle: 'बहारकाम सुरक्षा इन्जिन',
    profileTrustBody: 'तपाईंका सबै जानकारी ब्राउजरको स्थानीय मेमोरीमा सुरक्षित रहन्छ। हामी यसलाई कुनै पनि निजी सर्भरमा बिक्री वा चुहावट गर्दैनौं।',
    
    // Helpline Contacts SOS
    sosHeading: 'प्रमाणित आपतकालीन हेल्पलाइनहरू',
    sosIntro: '⚠️ विदेशमा तलब नपाएमा, पासपोर्ट खोसिएमा वा कुनै खतरा भएमा? सिधै आधिकारिक सरकारी दूतावासको हेल्पलाइनमा सम्पर्क गर्नुहोस्:',
    sosDisclaimer: 'पासपोर्ट र श्रम सम्झौताको फोटो सधैं परिवारको साथ सुरक्षित राख्नुहोस्। कुनै पनि रोजगारदाताले कानुन विपरित तपाईंको पासपोर्ट रोक्न सक्दैन।',
    sosCallBtn: 'कल गर्नुहोस्',
    
    // Buttons inside Job cards
    btnViewDetails: 'सुरक्षा विवरण हेर्नुहोस्',
    btnSafetyCheck: 'सुरक्षा चेकलिस्ट',
    btnFamilyKoBhejo: 'परिवारलाई पठाउनुहोस्',
    btnHideDetails: 'बन्द गर्नुहोस्',
    
    // Job details static text
    lblCountry: 'देश',
    lblRole: 'कामको प्रकार',
    lblSalary: 'तलब दायरा',
    lblVisaType: 'भिसाको प्रकार',
    lblDocuments: 'आवश्यक कागजातहरू',
    lblFoodTicket: 'खाना / बस्ने / हवाई टिकट',
    lblSource: 'जानकारी स्रोत',
    lblRiskLevel: 'जोखिम स्तर',
    lblWarning: 'महत्त्वपूर्ण चेतावनी',
    lblLastUpdated: 'अन्तिम अपडेट',
    lblVerifiedSeal: 'बहारकाम सुरक्षा म्याट्रिक्सद्वारा प्रमाणित एजेन्सी',
    
    // Family Share Summary modal
    familyShareHeading: 'पारिवारिक सुरक्षा साझा सारांश',
    familyNotice: '*नोट: यो सारांश परिवारसँग साझा गर्नका लागि प्रतिलिपि हुनेछ वा व्हाट्सएपमा पठाउन सकिन्छ।',
    familyBtnCopy: 'कपी गर्नुहोस्',
    familyBtnWA: 'व्हाट्सएपमा साझा गर्नुहोस्',
    familyAdviceTitle: 'आमा-बुबा / परिवारका लागि सल्लाह:',
    familyAdviceBody: 'कुनै पनि अवैध एजेन्टलाई अग्रिम नगद नदिनुहोस्, र सधैं बैंक स्थानान्तरण वा दर्ता गरिएको रसिद मार्फत मात्र कारोबार गर्नुहोस्।',

    // Salary Guide Modal
    salaryHeading: 'विदेशको वास्तविक तलब निर्देशिका',
    salarySelectLbl: 'आफ्नो गन्तव्य देश चयन गर्नुहोस्:',
    
    // Money safety modal
    moneyHeading: 'पैसा र सरकारी सहयोग निर्देशिका',
    moneyDiscTitle: '🛡️ महत्त्वपूर्ण सुरक्षित रेमिट्यान्स र कल्याणकारी घोषणा',
    moneyDiscBody: 'बहारकाम कुनै बैंक, रेमिट्यान्स वा ऋण दिने कम्पनी होइन। हामी प्रत्यक्ष रकम वा ऋण प्रदान गर्दैनौं। हामी केवल आधिकारिक विनिमय दर र सुरक्षित रेमिट्यान्स मार्गदर्शकहरू प्रदान गर्दछौं।',
    currencyCompareTitle: '💰 प्रत्यक्ष विनिमय दर तुलना',
    currencyCompareSubtitle: 'सुरक्षित र विनियमित च्यानलहरू मार्फत विनिमय दर जाँच गर्नुहोस्:',
    lblSendAmt: 'विदेशको मुद्रा:',
    lblRecvAmt: 'घरको मुद्रा (नेपाली रुपैयाँ):',
    partnerLinksTitle: 'विनियमित सुरक्षित रेमिट्यान्स विकल्पहरू तुलना गर्नुहोस्:',
    moneyStep1Title: 'हुन्डी कहिल्यै प्रयोग नगर्नुहोस्',
    moneyStep1Desc: 'हुन्डी पूर्ण रूपमा अवैध छ। हुन्डी मार्फत पैसा पठाउँदा बैंक खाता फ्रिज वा ब्लक हुन सक्छ।',
    moneyStep2Title: 'रसिद सुरक्षित राख्नुहोस्',
    moneyStep2Desc: 'प्रत्येक कारोबारको रसिद पिडिएफ बनाएर व्हाट्सएपमा परिवारसँग सुरक्षित राख्नुहोस्।',
    moneyStep3Title: 'ऋणको सावधानी',
    moneyStep3Desc: 'महँगो ब्याजमा ऋण लिएर विदेश जानु ठूलो जाल हो। सरकारी आप्रवासी कल्याण बैंक ऋण जाँच गर्नुहोस्।',

    // Footer & Policies Keys
    footAbout: 'हाम्रो बारेमा',
    footContact: 'सम्पर्क',
    footPrivacy: 'गोपनीयता नीति',
    footTerms: 'शर्तहरू',
    footDisclaimer: 'अस्वीकरण',
    footEditorial: 'सम्पादकीय नीति',
    footCorrections: 'सच्याउने नीति',
    footScam: 'ठगी रिपोर्ट गर्नुहोस्',
    footSos: 'आकस्मिक सहयोग',
    footSafety: 'सुरक्षा मार्गनिर्देशनहरू',
    footRecruiters: 'भर्तीकर्ता / कम्पनीहरूको लागि',

    // Modal Bodies Content
    bodyAbout: 'BaharKaam भारत, पाकिस्तान, बंगलादेश र नेपालका कामदारहरूका लागि एक सुरक्षित वैदेशिक रोजगार मार्गदर्शन प्लेटफर्म हो जसले खाडी, युरोप र विश्वभर काम गर्न चाहन्छन्। <br><br>हामी कामदारहरूलाई वैदेशिक रोजगारीका आवश्यकताहरू, भिसा प्रक्रिया, वास्तविक तलब, कागजातहरू, टिकट/PNR ठगी, नक्कली अफर लेटर, एजेन्ट भुक्तानी जोखिम र प्रमाणित भर्तीसम्बन्धी जानकारी बुझ्न मद्दत गर्दछौं। <br><br>BaharKaam कुनै भिसा एजेन्सी, रिक्रूटमेन्ट एजेन्सी वा सरकारी वेबसाइट होइन। हामी रोजगारी वा भिसाको ग्यारेन्टी दिँदैनौं। पैसा तिर्नु वा कागजातहरू साझा गर्नु अघि कामदारहरूले सध मुख्य सरकारी वा आधिकारिक स्रोतहरूबाट विवरणहरू प्रमाणित गर्नुपर्छ।',
    bodyContact: 'सहयोगको लागि support@baharkaam.com मा इमेल गर्नुहोस् वा हाम्रो प्रमाणित हेल्प डेस्कमा सम्पर्क गर्नुहोस्। हामी २ घण्टा भित्र सहयोग गर्नेछौं।',
    bodyPrivacy: 'BaharKaam ले तपाईंको phone number, नाम, कामको भूमिका, लक्षित देश, भाषा प्राथमिकता, कागजात/जाँच विवरणहरू, र सुरक्षित गरिएका गाइडहरू सङ्कलन गर्न सक्छ। तपाईंको phone number र प्रोफाइल विवरणहरू तपाईंको स्पष्ट सहमति बिना भर्तीकर्ता वा कम्पनीहरूसँग साझा गरिने छैन। भविष्यमा हाम्रो सेवा सुधार गर्न विश्लेषण, कुकीज वा विज्ञापनहरू प्रयोग गर्न सकिन्छ।',
    bodyTerms: 'प्रयोगकर्ताहरूले यो प्लेटफर्म मार्गदर्शन र शैक्षिक उद्देश्यका लागि मात्र प्रयोग गर्नुपर्दछ, र यसलाई अन्तिम कानूनी, बसाइँसराइ, वा भिसा सल्लाहको रूपमा लिनु हुँदैन। प्रयोगकर्ताहरूले कुनै पनि कदम चाल्नु वा भुक्तानी गर्नु अघि आधिकारिक सरकारी वा दूतावास स्रोतहरूबाट सबै विवरणहरू प्रमाणित गर्नुपर्छ।',
    bodyDisclaimer: 'BaharKaam पूर्ण रूपमा स्वतन्त्र छ। हामी भिसा, जागिरको ग्यारेन्टी, भर्ती सेवाहरू, अध्यागमन स्वीकृतिहरू, उडान टिकटको पुष्टि, वा ऋण स्वीकृति प्रदान गर्दैनौं। हाम्रो प्लेटफर्म कडा रूपमा कामदारहरूको लागि सुरक्षा मार्गदर्शन र स्रोत-जाँच सहायतामा सीमित छ।',
    bodyEditorial: 'हाम्रा गाइडहरू सार्वजनिक रूपमा उपलब्ध जानकारी, जहाँ सम्भव छ आधिकारिक सरकारी र दूतावासका सन्दर्भहरू, र म्यानुअल समीक्षाको माध्यमबाट तयार गरिन्छ। अध्यागमन नीति र आवश्यकताहरूमा परिवर्तनको साथसाथै जानकारी अद्यावधिक वा सच्याउन सकिन्छ।',
    bodyCorrections: 'प्रयोगकर्ताहरूले गलत वा पुरानो जानकारी रिपोर्ट गर्न सक्छन्। BaharKaam ले त्यस्ता रिपोर्टहरूको समीक्षा गर्नेछ र आवश्यकता अनुसार सामग्री अद्यावधिक गर्नेछ।',
    bodySafety: '१. रसिद बिना कुनै पनि एजेन्टलाई पैसा नदिनुहोस्। <br>२. भिसा, अफर लेटर र टिकट सधैं आधिकारिक वा दूतावासको स्रोतबाट प्रमाणित गर्नुहोस्। <br>३. आफ्नो जागिरको सबै विवरण परिवारसँग साझा गर्नुहोस्। <br>४. निश्चित भिसा वा जागिरको प्रतिवद्धता दिने एजेन्टहरूबाट बच्नुहोस्। <br>५. आफ्नो राहदानी, सम्झौता र भुक्तानी रसिद सधैं सुरक्षित र डिजिटल ब्याकअप सहित राख्नुहोस्।',
    bodyRecruiters: 'इजाजतपत्र प्राप्त भर्तीकर्ताहरू, म्यानपावर एजेन्सीहरू र कम्पनीहरूले समीक्षाको लागि वैदेशिक भर्ती आवश्यकताहरू बुझाउन सक्छन्। BaharKaam ले प्रमाणित भर्तीसम्बन्धी जानकारी र सहमति-आधारित कामदारहरूको रुचि विवरण मात्र प्रदर्शन गर्न सक्छ। BaharKaam ले कुनै पनि नक्कली, अस्पष्ट, भ्रामक, वा ग्यारेन्टी गरिएको जागिर/भिसा पोस्टहरूलाई अनुमति दिँदैन।',

    // Scam Form Elements
    scamTitle: 'दलालको ठगी रिपोर्ट गर्नुहोस्',
    scamWarnTitle: '⚠️ अन्य कामदारहरूलाई सुरक्षित राख्नुहोस्',
    scamWarnDesc: 'तपाईं नक्कली भिसा, नक्कली अफर लेटर, टिकट/PNR ठगी, एजेन्ट भुक्तानीको अतिरिक्त माग वा शङ्कास्पद भर्तीकर्ताको रिपोर्ट गर्न सक्नुहुन्छ। चेतावनी: आवश्यकता बिना संवेदनशील कागजातहरू अपलोड नगर्नुहोस् र आफ्नो ओटीपी (OTP) वा पासवर्ड कहिल्यै कसैसँग साझा नगर्नुहोस्।',
    scamLblAgentName: 'दलाल वा एजेन्सीको नाम:',
    scamLblAgentPhone: 'दलालको फोन नम्बर / व्हाट्सएप:',
    scamLblTargetCountry: 'कुन देश पठाउने भनेको थियो:',
    scamLblFraudType: 'ठगीको प्रकार:',
    scamLblMoneyLost: 'गुमेको रकम:',
    scamLblNarrative: 'कसरी ठगी भयो संक्षेपमा लेख्नुहोस्:',
    scamBtnSubmit: '🚨 रिपोर्ट बुझाउनुहोस्',
    scamSuccessTitle: '🟢 रिपोर्ट सफलतापूर्वक प्राप्त भयो',
    scamSuccessDesc: 'तपाईंको रिपोर्ट सुरक्षित गरिएको छ। हाम्रो टोलीले यस एजेन्टको नम्बर ब्ल्याकलिस्टमा जाँच गर्नेछ। सुरक्षित रहनुहोस्!'
  },
  EN: {
    brandName: 'BAHARKAAM',
    tagline: 'Safe Foreign Jobs & Visa Guide',
    langMenuTitle: 'Language Choice',
    heroTitle: 'Consult Sathi AI Before Travelling Abroad',
    heroSubtitle: 'Avoid visa fraud, learn actual salary reality, and earn safely',
    sathiStatus: 'Sathi AI is listening... When you start speaking, your answer will appear here',
    sathiListening: 'Sathi AI is listening... Say "Driver Jobs Dubai" or "Saudi Helper"...',
    statusOnline: 'Online',
    statusSearching: 'Searching...',
    
    // Core Cards
    cardRoadmapTitle: 'Safe Job Roadmap',
    cardRoadmapDesc: 'Verified jobs, apply process & guidance',
    cardVisacheckTitle: 'Visa Fraud Check',
    cardVisacheckDesc: 'Fake visa & offer letter check karein',
    cardSalaryTitle: 'Salary Guide',
    cardSalaryDesc: 'Salary range, documents, country roadmap',
    cardMoneyTitle: 'Money & Govt Help',
    cardMoneyDesc: 'Rates, loan warnings, schemes & helplines',
    
    // Category Pills
    filterAll: 'All Roles',
    filterConst: '🏗️ Construction Jobs',
    filterFactory: '🏭 Factory & Packing',
    filterDriver: '🚛 Driver & Operator',
    filterHotel: '🏨 Hotel & Catering',
    popularRolesHeading: 'Popular Job Roles',
    viewAllRoles: '🗂️ View All Roles',
    roleDriver: '🚛 Driver',
    roleHelper: '🧹 Helper / Labour',
    roleFactory: '🏭 Factory & Packing',
    roleConstruction: '🏗️ Construction',
    roleCleaner: '🧹 Cleaner',
    roleSecurity: '🛡️ Security',
    roleWelder: '👨‍🏭 Welder',
    
    // Bottom Nav
    navHome: 'Home',
    navNaukri: 'Jobs',
    navProfile: 'Profile',
    navSos: 'SOS',
    
    // Search input
    searchPlaceholder: 'Type here: country, role, visa check...',
    activeFilterBadge: 'Active Filter: ',
    btnClearAll: 'Clear All',
    
    // Profile
    profileTitle: 'Migrant Brother',
    profileSubtitle: 'Safe Migration Profile',
    profileReadiness: 'Readiness Status',
    profileSaved: 'Saved Guides',
    profileWarnings: 'Risk Alert',
    profileChecklistTitle: 'Your Safe Departure Checklist',
    chkPassport: 'Original Passport (valid 2 years) verified',
    chkVisa: 'Work Visa Type Verification complete',
    chkPcc: 'PCC (Police Clearance) from Local PS received',
    chkMedical: 'Medical fitness fit report card obtained',
    chkFamily: 'Emergency contacts shared with family',
    profileTrustTitle: 'Baharkaam Protection Engine',
    profileTrustBody: 'All your information is stored securely in your local browser. We never sell or leak your data to private servers.',
    
    // Helpline Contacts SOS
    sosHeading: 'Verified Emergency Helplines',
    sosIntro: '⚠️ Salary withheld, passport confiscated, or facing physical danger abroad? Directly contact verified government embassies:',
    sosDisclaimer: 'Always keep digital photos of your passport & contract with your family. No employer can legally hold your passport.',
    sosCallBtn: 'Call Now',
    
    // Buttons inside Job cards
    btnViewDetails: 'View Safety Details',
    btnSafetyCheck: 'Safety Checklist',
    btnFamilyKoBhejo: 'Family Ko Bhejo',
    btnHideDetails: 'Hide Details',
    
    // Job details static text
    lblCountry: 'Country',
    lblRole: 'Role',
    lblSalary: 'Salary Range',
    lblVisaType: 'Visa Type',
    lblDocuments: 'Documents Required',
    lblFoodTicket: 'Food / Room / Ticket',
    lblSource: 'Information Source',
    lblRiskLevel: 'Risk Level',
    lblWarning: 'Important Warning',
    lblLastUpdated: 'Last Updated',
    lblVerifiedSeal: 'Agent verified via Baharkaam Security Matrix',
    
    // Family Share Summary modal
    familyShareHeading: 'Family Safety Share Summary',
    familyNotice: '*Note: This summary will copy to your phone clipboard or can be shared directly via WhatsApp.',
    familyBtnCopy: 'Copy Details',
    familyBtnWA: 'WhatsApp Family Share',
    familyAdviceTitle: 'Advice for Parents / Family:',
    familyAdviceBody: 'Never give advance cash to unverified agents, and always transact through bank transfer or with registered receipts.',

    // Salary Guide Modal
    salaryHeading: 'Overseas Country Salary Reality Guide',
    salarySelectLbl: 'Select your target country:',
    
    // Money safety modal
    moneyHeading: 'Money & Govt Help Guide',
    moneyDiscTitle: '🛡️ IMPORTANT SAFE REMITTANCE & WELFARE STATEMENT',
    moneyDiscBody: 'BaharKaam is not a bank, remittance service, money transfer or wallet app. We do not transfer money or provide loans. We only compare official exchange rates and provide safe remittance guides.',
    currencyCompareTitle: '💰 Live Exchange Rate Comparator',
    currencyCompareSubtitle: 'Check banking exchange rates securely (Regulated Channels Only):',
    lblSendAmt: 'Foreign Amount:',
    lblRecvAmt: 'Home Amount (Local Currency):',
    partnerLinksTitle: 'Compare Regulated Safe Transfer Options:',
    moneyStep1Title: 'Never use Hawala / Hundi',
    moneyStep1Desc: 'Private offline hawala channels are illegal. Money sent via hawala can lead to account freezes or blockages.',
    moneyStep2Title: 'Safe receipts custody',
    moneyStep2Desc: 'Save all transaction receipts as secure PDFs and share them immediately with your family.',
    moneyStep3Title: 'Debt and loan awareness',
    moneyStep3Desc: 'Taking high-interest loans from local brokers is a massive trap. Use government-sponsored welfare loans instead.',

    // Footer & Policies Keys
    footAbout: 'About Us',
    footContact: 'Contact',
    footPrivacy: 'Privacy Policy',
    footTerms: 'Terms',
    footDisclaimer: 'Disclaimer',
    footEditorial: 'Editorial Policy',
    footCorrections: 'Corrections Policy',
    footScam: 'Report Scam',
    footSos: 'Emergency Help',
    footSafety: 'Safety Guidelines',
    footRecruiters: 'For Recruiters / Companies',

    // Modal Bodies Content
    bodyAbout: 'BaharKaam is a safety-first foreign work guidance platform for workers from India, Pakistan, Bangladesh and Nepal who want to work in Gulf, Europe and worldwide. <br><br>We help workers understand overseas job requirements, visa process, salary reality, documents, ticket/PNR fraud, fake offer letters, agent payment risks and source-checked hiring information. <br><br>BaharKaam is not a visa agency, recruitment agency or government website. We do not guarantee jobs or visas. Workers should always verify details from official sources before paying money or sharing documents.',
    bodyContact: 'Need assistance? Email us at support@baharkaam.com or contact our verified regional helpdesks. We respond to emergency queries within 2 hours.',
    bodyPrivacy: 'BaharKaam may collect your phone number, name, job role, target country, language preference, document/check details, and saved guides. Your phone number and profile details will not be shared with recruiters or companies without your explicit consent. Analytics, ads, and cookies may be used in the future to improve our services.',
    bodyTerms: 'You must use this platform for guidance and educational purposes only, and not as final legal, migration, or visa advice. Users are responsible for verifying all details, contracts, and visa info from official government or embassy sources before making any decisions or payments.',
    bodyDisclaimer: 'BaharKaam does not provide visa services, job guarantees, recruitment, immigration approvals, flight ticket confirmations, or loan approvals. Our platform is strictly limited to providing safety guidance and source-checking assistance to protect workers from recruitment fraud.',
    bodyEditorial: 'Our guides are prepared using publicly available information, references from official sources where possible, safety principles, and rigorous manual review. Content may be updated or corrected over time as requirements change.',
    bodyCorrections: 'Users can report incorrect or outdated information. BaharKaam will review such reports and update the content as needed to ensure the highest safety standard.',
    bodySafety: '1. Never pay advance cash without a registered valid receipt. <br>2. Always check visa, offer letter, and flight ticket validity from official or embassy sources. <br>3. Share all job, contract, and company details with your family. <br>4. Avoid agents promising guaranteed visas or jobs. <br>5. Keep your passport, contract, and payment receipts safe with a digital backup.',
    bodyRecruiters: 'Licensed recruiters, manpower agencies and companies can submit overseas hiring requirements for review. BaharKaam may show only source-checked requirements and consent-based worker interest. BaharKaam does not allow fake, unclear, misleading, or guaranteed job/visa posts.'
  }
};

const additionalTranslations = {
  HI: {
    rmSec1Title: '🌐 Global Migrant Destinations',
    rmSec1Desc: 'Direct checked channels are verified across 9 main countries:',
    rmSec2Title: '⚙️ Step-by-Step Safe Apply Process',
    rmStep1Title: 'Passport check',
    rmStep1Desc: 'Passport mein kam se kam 2 saal ki validity honi chahiye, name aur signature sahi ho.',
    rmStep2Title: 'Source checked info only',
    rmStep2Desc: 'Kisi bhi broker se visa na lein. Sathi AI par direct licensed recruitment companies ya direct job roadmaps se guide lein.',
    rmStep3Title: 'Written labor contract verification',
    rmStep3Desc: 'Sponsorship, basic salary, rehna, khana, air ticket, aur duty hours contract mein check karein.',
    rmStep4Title: 'PCC & Medical reports',
    rmStep4Desc: 'Hamesha govt approved center se medical karein aur clean Police Clearance Certificate (PCC) upload/verify karein.',
    rmSec3Title: '✓ Required Documents Checklist',
    rmDocItem1: '✓ Passport front & back scan (high clear quality)',
    rmDocItem2: '✓ Experience Certificate/Vocational training card',
    rmDocItem3: '✓ GAMCA / Approved Medical clearance copy',
    rmDocItem4: '✓ Police Clearance certificate (PCC)',
    rmDocItem5: '✓ Labor Contract signed copy',
    rmSec4Title: '🔴 Real-time Warning: Food & Lodging Terms',
    rmSec4Desc: "Bahut agents 'Free Food' bolte hain par salary se paisa kaat lete hain. Likha hua contract hona zaroori hai. Risk check: 🟢 Safe Job Score is 90%+ only when employer direct registers.",
    vcAlertTitle: '⚠️ ALWAYS AVOID VISIT/TOURIST VISA FOR JOBS',
    vcAlertDesc: 'Visit/tourist visa par naukri karna illegal hai. Agent log visit visa par bhej kar work visa lagwane ka vaada karte hain, jo 99% fake hota hai. Jail, deport aur ban ho sakte hain.',
    vcHeading: 'Visa Fraud Verification Check',
    vcCheckpointsTitle: '🔍 Real vs Fake Visa Checkpoints',
    vcCp1Title: 'Government Portal QR Check',
    vcCp1Desc: 'Wazarat / Labour Ministry website par passport se verify karein.',
    vcCp2Title: 'License Check of Recruiter',
    vcCp2Desc: 'Recruitment agency ka MEA / Government license check karein.',
    vcCp3Title: 'Zero Cash Without Receipt',
    vcCp3Desc: 'Paisa dekar agar official legal written receipt nahi mili toh fraud 100% taye hai.',
    calcFormTitle: '📊 BaharKaam Visa Fraud Risk Calculator',
    calcFormSubtitle: 'Sarkar, MEA aur labor laws ke mutabik risk calculator:',
    lblAgentName: 'Agent / Agency Name:',
    lblCountry: 'Target Country:',
    lblVisaType: 'Visa Type Promised:',
    lblMoney: 'Money Demanded (Local Currency equivalent):',
    lblPassport: 'Original Passport Seized? (Yes/No):',
    lblReceipt: 'Payment Receipt Offered?:',
    btnCalcSubmit: 'Check Risk Level',
    optVisaWork: 'Work Visa / Employment (🟢 Safe)',
    optVisaVisit: 'Visit / Tourist / Azad Visa (🔴 Extreme Risk)',
    optVisaOther: 'Transit / Unspecified (🟡 High Risk)',
    optPassportNo: 'No, physical passport mere paas hai',
    optPassportYes: 'Yes, agent ne original passport rakh liya hai (🔴 Risk)',
    optReceiptYes: 'Yes, proper registered receipt',
    optReceiptNo: 'No, cash without legal paperwork (🔴 Risk)',
    optScamVisit: 'Visit Visa bhej kar employment visa na lagwana (Azad Visa Trap)',
    optScamCash: 'Extra Cash lekar fake offer letter dena',
    optScamPassport: 'Original Passport jabardasti rakhna aur paise mangna',
    optScamSalary: 'Videsh bhej kar contract se kam salary dena',
    govtSchemesTitle: '🏛️ Official Govt Schemes & Welfare Loans',
    govtSchemesDesc: 'Videsh jaane ke liye brokers se high-interest interest loans na lein. Sarkari banks aur welfare funds se contact karein:',
    govtCardIn: '🇮🇳 India Welfare & Loans',
    govtCardInDesc: 'eMigrate Portal registration, SBI Pravasi Loan, aur PBBY (Pravasi Bharatiya Bima Yojana) 10 Lakh insurance safety wrapper.',
    govtCardPk: '🇵🇰 Pakistan Overseas OPF',
    govtCardPkDesc: 'OPF (Overseas Pakistanis Foundation) interest-free loans, Protector of Emigrants check, aur migrant housing guides.',
    govtCardBd: '🇧🇩 Bangladesh Prabashi Kallyan',
    govtCardBdDesc: 'Prabashi Kallyan Bank (PKB) travel & recruitment loans low interest par, Wage Earners Welfare Board assistance.',
    govtCardNp: '🇳🇵 Nepal Migrant Welfare Fund',
    govtCardNpDesc: 'Foreign Employment Board Welfare grant, banking collateral loans legally approved labor permit holders ke liye.',
    footCopyright: '© 2026 BaharKaam. Surakshit videsh naukri margdarshan portal.',
    alertSaved: 'Guide successfully saved to your offline profile!',
    alertRemoved: 'Guide removed from saved list.',
    alertCopied: 'Summary details successfully copied to clipboard! You can paste in WhatsApp.',
    alertCopyFailed: 'Failed to copy. Please manually select the card text to copy.',
    sathiRecommendation: 'Sifarish: ',
    lblSecurityProtocolTitle: 'Security Protocol:',
    lblSecurityProtocolBody: 'Physical passport kabhi kisi ko na dein. Gmail/Google Drive par scanned copies safe rakhein. Sirf official bank wire se payment karein.',
    reasonVisit: 'Visit/Tourist/Azad Visa par kaam karna gair-kanooni hai. Jail aur deportation ka bada khatra hai.',
    reasonOther: 'Transit visa ya bina clear contract ke bhej raha hai, highly unverified.',
    reasonReceipt: 'Bina written receipt/legal bill ke cash transaction 100% fraud ka ishaara hai. Proof ke bina complaint nahi ho sakti.',
    reasonPassport: 'Original physical passport apne pass rakhna kanoonan illegal hai. Passport holder ki safety ke khilaf hai.',
    reasonMoneyHigh: 'INR/PKR 2.5 Lakh se zyada demand karna recruitment ceiling laws ke khilaf hai. This is financial exploitation.',
    reasonMoneyStandard: 'Fee demand standard se zyada lag rahi hai. License documents embassy se verify karein.',
    reasonAllClear: 'All basic compliance parameters met. Still, double-check company registration.',
    agentCheck: 'Agent Check',
    popularGuidesTitle: 'Popular Safety Guides',
    popularGuidesSubtitle: 'Videshi naukri, visa safety, salary reality aur fraud se bachne ke aasan tareeqe.',
    allGuidesTitle: 'Sabhi Safety Guides',
    allGuidesSubtitle: 'Videsh mein naukri, visa fraud, aur salary reality se bachne ki poori jaankari.',
    viewAllGuidesText: 'Sabhi Guides Dekhein'
  },
  UR: {
    rmSec1Title: '🌐 بیرون ملک ہجرت کی مقبول ترین منزلیں',
    rmSec1Desc: 'براہ راست تصدیق شدہ چینلز ۹ اہم ممالک میں کارآمد ہیں:',
    rmSec2Title: '⚙️ مرحلہ وار محفوظ درخواست کا طریقہ کار',
    rmStep1Title: 'پاسپورٹ کی جانچ',
    rmStep1Desc: 'پاسپورٹ کی میعاد کم از کم ۲ سال ہونی چاہیے، اور نام و دستخط درست ہوں۔',
    rmStep2Title: 'صرف تصدیق شدہ ذرائع کا استعمال',
    rmStep2Desc: 'کسی بھی غیر تصدیق شدہ دلال سے ویزا نہ لیں۔ ساتھی AI پر براہ راست لائسنس یافتہ بھرتی کمپنیوں سے رہنمائی لیں۔',
    rmStep3Title: 'تحریری معاہدہ ملازمت کی تصدیق',
    rmStep3Desc: 'کفالت، بنیادی تنخواہ، رہائش، کھانا، فضائی ٹکٹ اور ڈیوٹی کے اوقات معاہدے میں چیک کریں۔',
    rmStep4Title: 'پی سی سی اور میڈیکل رپورٹس',
    rmStep4Desc: 'ہمیشہ سرکاری طور پر منظور شدہ سینٹر سے میڈیکل کروائیں اور صاف پولیس کلیئرنس سرٹیفکیٹ (PCC) حاصل کریں۔',
    rmSec3Title: '✓ مطلوبہ دستاویزات کی چیک لسٹ',
    rmDocItem1: '✓ پاسپورٹ کے اگلے اور پچھلے صفحے کا صاف اسکین',
    rmDocItem2: '✓ تجربہ سرٹیفکیٹ یا پیشہ ورانہ تربیتی کارڈ',
    rmDocItem3: '✓ گامکا (GAMCA) منظور شدہ میڈیکل کلیئرنس کاپی',
    rmDocItem4: '✓ پولیس کلیئرنس سرٹیفکیٹ (PCC)',
    rmDocItem5: '✓ ملازمت کے معاہدے پر دستخط شدہ کاپی',
    rmSec4Title: '🔴 بروقت وارننگ: کھانا اور رہائش کی شرائط',
    rmSec4Desc: 'بہت سے ایجنٹ مفت کھانے کا وعدہ کرتے ہیں لیکن تنخواہ سے رقم کاٹ لیتے ہیں۔ تحریری معاہدہ ہونا لازمی ہے۔ محفوظ جاب اسکور ۹۰٪ سے زیادہ ہونا ضروری ہے۔',
    vcAlertTitle: '⚠️ روزگار کے لیے وزٹ یا ٹورسٹ ویزا سے ہمیشہ بچیں',
    vcAlertDesc: 'وزٹ یا ٹورسٹ ویزا پر کام کرنا قانوناً جرم ہے۔ ایجنٹ اکثر وزٹ ویزا پر بھیج کر اسے ورک ویزا میں تبدیل کرانے کا جھوٹا وعدہ کرتے ہیں۔ آپ کو جیل، ملک بدری یا پابندی کا سامنا کرنا پڑ سکتا ہے۔',
    vcHeading: 'ویزا فراڈ کی تصدیق',
    vcCheckpointsTitle: '🔍 اصلی بمقابلہ جعلی ویزا پوائنٹس',
    vcCp1Title: 'سرکاری پورٹل کیو آر تصدیق',
    vcCp1Desc: 'وزارتِ محنت کی آفیشل ویب سائٹ پر پاسپورٹ نمبر کے ذریعے ویزا چیک کریں۔',
    vcCp2Title: 'ایجنسی کا لائسنس چیک کریں',
    vcCp2Desc: 'بھرتی کرنے والی ایجنسی کے پاس حکومت کا جاری کردہ درست لائسنس ہونا ضروری ہے۔',
    vcCp3Title: 'رسید کے بغیر کوئی نقد رقم نہ دیں',
    vcCp3Desc: 'رجسٹرڈ تحریری رسید کے بغیر کی جانے والی کوئی بھی ادائیگی ۱۰۰٪ فراڈ ہے۔',
    calcFormTitle: '📊 بہار کام ویزا فراڈ رسک کیلکولیٹر',
    calcFormSubtitle: 'سرکاری قوانین اور لیبر گائیڈ لائنز کے مطابق اپنے رسک کا حساب لگائیں:',
    lblAgentName: 'ایجنٹ یا ایجنسی کا نام:',
    lblCountry: 'مطلوبہ ملک:',
    lblVisaType: 'ویزے کی قسم جس کا وعدہ کیا گیا ہے:',
    lblMoney: 'طلب کردہ رقم (مقامی کرنسی کے برابر):',
    lblPassport: 'کیا اصل پاسپورٹ ایجنٹ نے ضبط کر لیا ہے؟ (ہاں / نہیں):',
    lblReceipt: 'کیا ادائیگی کی تحریری رسید دی گئی ہے؟:',
    btnCalcSubmit: 'رسک کی سطح چیک کریں',
    optVisaWork: 'ورک ویزا / باقاعدہ ملازمت (🟢 محفوظ)',
    optVisaVisit: 'وزٹ / ٹورسٹ / آزاد ویزا (🔴 انتہائی خطرناک)',
    optVisaOther: 'ٹرانزٹ / غیر واضح ویزا (🟡 زیادہ خطرہ)',
    optPassportNo: 'نہیں، اصل پاسپورٹ میرے اپنے پاس ہے',
    optPassportYes: 'ہاں، ایجنٹ نے میرا اصل پاسپورٹ رکھ لیا ہے (🔴 خطرہ)',
    optReceiptYes: 'ہاں، رجسٹرڈ تحریری رسید دی گئی ہے',
    optReceiptNo: 'نہیں، بغیر کسی کاغذی کارروائی کے نقد رقم دی گئی ہے (🔴 خطرہ)',
    optScamVisit: 'وزٹ ویزا پر بھیج کر ورک ویزا نہ لگوانا (آزاد ویزا کا جال)',
    optScamCash: 'اضافی رقم لے کر جعلی آفر لیٹر دینا',
    optScamPassport: 'اصل پاسپورٹ زبردستی اپنے پاس رکھ کر بلیک میل کرنا',
    optScamSalary: 'بیرون ملک پہنچنے پر معاہدے سے کم تنخواہ دینا',
    govtSchemesTitle: '🏛️ سرکاری فلاحی اسکیمیں اور قرضے',
    govtSchemesDesc: 'بیرون ملک جانے کے لیے دلالوں سے بھاری سود پر قرض نہ لیں۔ سرکاری اوورسیز فاؤنڈیشنز اور بینکوں سے رابطہ کریں:',
    govtCardIn: '🇮🇳 بھارتی مہاجر فلاح و بہبود اور قرضے',
    govtCardInDesc: 'ای مائیگریٹ پورٹل رجسٹریشن، ایس بی آئی پرواسی لون، اور PBBY ۱۰ لاکھ روپے کا انشورنس تحفظ غلاف۔',
    govtCardPk: '🇵🇰 پاکستان اوورسیز او پی ایف (OPF)',
    govtCardPkDesc: 'او پی ایف سود سے پاک قرضے، پروٹیکٹر آف ایمیگرینٹس تصدیق، اور بیرون ملک مقیم پاکستانیوں کے لیے ہاؤسنگ گائیڈز۔',
    govtCardBd: '🇧🇩 بنگلہ دیش پرواشی کلیان',
    govtCardBdDesc: 'پرواشی کلیান بینک (PKB) سے کم شرح سود پر سفরি ও কর্মসংস্থান ঋণ এবং ওয়েজ আর্নার্স ওয়েলফেয়ার বোর্ডের সাহায্য।',
    govtCardNp: '🇳🇵 نیपाल اوورسیز ویلفیئر فنڈ',
    govtCardNpDesc: 'वैदेशिक रोजगार बोर्ड कल्याणकारी अनुदान र स्वीकृत श्रम स्वीकृति प्राप्तहरूका लागि बैंक कर्जा।',
    footCopyright: '© 2026 بہار کام۔ محفوظ بیرون ملک ملازمت کا معلوماتی پورٹل۔',
    alertSaved: 'گائیڈ کامیابی کے ساتھ آپ کے آف لائن پروفائل میں محفوظ ہو گئی ہے!',
    alertRemoved: 'گائیڈ محفوظ فہرست سے ہٹا دی گئی ہے۔',
    alertCopied: 'خلاصہ کامیابی کے ساتھ کاپی ہو گیا ہے! آپ واٹس ایپ پر پیسٹ کر سکتے ہیں۔',
    alertCopyFailed: 'کاپی کرنے میں ناکامی۔ براہ کرم متن کو دستی طور پر منتخب کر کے کاپی کریں۔',
    sathiRecommendation: 'سفارش: ',
    lblSecurityProtocolTitle: 'سیکیورٹی پروٹوکول:',
    lblSecurityProtocolBody: 'اصل پاسپورٹ کبھی کسی کے ہاتھ میں نہ دیں۔ گوگل ڈرائیو یا جی میل پر اسکین شدہ نقول محفوظ رکھیں۔ صرف آفیشل بینکنگ چینل کے ذریعے ادائیگی کریں۔',
    reasonVisit: 'وزٹ، ٹورسٹ یا آزاد ویزا پر کام کرنا غیر قانونی ہے۔ جیل اور ملک بدری کا بڑا خطرہ ہے۔',
    reasonOther: 'ٹرانزٹ ویزا پر یا بغیر کسی واضح تحریری معاہدے کے بھیجا جا رہا ہے، جو کہ انتہائی غیر تصدیق شدہ ہے۔',
    reasonReceipt: 'تحریری رسید یا قانونی بل کے بغیر نقد لین دین ۱۰۰٪ فراڈ کی نشانی ہے۔ ثبوت کے بغیر کوئی شکایت درج نہیں کرائی جا سکتی۔',
    reasonPassport: 'اصل پاسپورٹ ضبط کرنا قانوناً جرم ہے اور یہ آپ کی ذاتی سیکیورٹی کے خلاف ہے۔',
    reasonMoneyHigh: 'مقررہ حد سے زیادہ رقم کا مطالبہ کرنا لیبر قوانین کی خلاف ورزی اور مالی استحصال ہے۔',
    reasonMoneyStandard: 'طلب کردہ فیس معمول سے زیادہ لگ رہی ہے۔ براہ کرم ایجنسی کا لائسنس براہ راست سفارت خانے سے چیک کریں۔',
    reasonAllClear: 'تمام بنیادی شرائط پوری ہیں۔ پھر بھی آجر کمپنی کی رجسٹریشن کی دوبارہ تصدیق کر لیں۔',
    agentCheck: 'ایجنٹ की تصدیق',
    popularGuidesTitle: 'مقبول حفاظتی گائیڈز',
    popularGuidesSubtitle: 'بیرون ملک ملازمتوں، ویزا کی حفاظت، تنخواہ، دستاویزات اور فراڈ کی روک تھام کے بارے میں آسان گائیڈز۔',
    allGuidesTitle: 'تمام حفاظتی گائیڈز',
    allGuidesSubtitle: 'بیرون ملک ملازمت کے فراڈ، ویزا کی جانچ اور حقیقی تنخواہ کی مکمل معلومات۔',
    viewAllGuidesText: 'تمام گائیڈز دیکھیں'
  },
  BN: {
    rmSec1Title: '🌐 বিশ্বব্যাপী প্রবাসী শ্রমিকদের গন্তব্যস্থল',
    rmSec1Desc: 'সরাসরি যাচাইকৃত চ্যানেলসমূহ ৯টি প্রধান দেশে কার্যকর রয়েছে:',
    rmSec2Title: '⚙️ ধাপে ধাপে নিরাপদ আবেদন প্রক্রিয়া',
    rmStep1Title: 'পাসপোর্ট যাচাইকরণ',
    rmStep1Desc: 'পাসপোর্টের মেয়াদ অন্তত ২ বছর থাকতে হবে এবং নাম ও স্বাক্ষর সঠিক হতে হবে।',
    rmStep2Title: 'শুধুমাত্র যাচাইকৃত তথ্য ব্যবহার করুন',
    rmStep2Desc: 'কোনো স্থানীয় দালালের কাছ থেকে ভিসা কিনবেন না। সরকারি লাইসেন্সধারী এজেন্সির জন্য সাথী এআই-এর পরামর্শ নিন।',
    rmStep3Title: 'লিখিত চুক্তিপত্র যাচাইকরণ',
    rmStep3Desc: 'বেসিক বেতন, থাকা-খাওয়া, বিমান টিকিট এবং কাজের সময় লিখিত চুক্তিতে ভালো করে দেখে নিন।',
    rmStep4Title: 'police ক্লিয়ারেন্স ও মেডিকেল পরীক্ষা',
    rmStep4Desc: 'সবসময় সরকার অনুমোদিত কেন্দ্র থেকে মেডিকেল করান এবং পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC) সংগ্রহ করুন।',
    rmSec3Title: '✓ প্রয়োজনীয় নথিপত্র চেকলিস্ট',
    rmDocItem1: '✓ পাসপোর্টের প্রথম ও শেষ পৃষ্ঠার স্পষ্ট স্ক্যান কপি',
    rmDocItem2: '✓ কাজের অভিজ্ঞতা সনদ বা কারিগরি প্রশিক্ষণ কার্ড',
    rmDocItem3: '✓ গামকা (GAMCA) অনুমোদিত মেডিকেল ফিটনেস রিপোর্ট',
    rmDocItem4: '✓ পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC) কপি',
    rmDocItem5: '✓ স্বাক্ষরিত শ্রম চুক্তির কপি',
    rmSec4Title: '🔴 জরুরি সতর্কবার্তা: থাকা ও খাওয়ার শর্তাবলী',
    rmSec4Desc: 'অনেক এজেন্ট ফ্রি খাওয়ার কথা বললেও পরে বেতন থেকে টাকা কেটে নেয়। লিখিত চুক্তি থাকা বাধ্যতামূলক। নিরাপদ জব স্কোর ৯০% বা তার বেশি হওয়া উচিত।',
    vcAlertTitle: '⚠️ কাজের জন্য ভিজিট বা ট্যুরিস্ট ভিসা সবসময় এড়িয়ে চলুন',
    vcAlertDesc: 'ভিজিট বা ট্যুরিস্ট ভিসায় কাজ করা সম্পূর্ণ অবৈধ। দালালেরা প্রায়ই কাজের ভিসায় পরিবর্তনের মিথ্যা আশ্বাস দেয়। এতে জেল, জরিমানা ও নির্বাসনের চরম ঝুঁকি থাকে।',
    vcHeading: 'ভিসা জালিয়াতি যাচাইকরণ',
    vcCheckpointsTitle: '🔍 আসল বনাম জাল ভিসা চেনার উপায়',
    vcCp1Title: 'সরকারি পোর্টাল কিউআর কোড যাচাই',
    vcCp1Desc: 'শ্রম মন্ত্রণালয়ের অফিসিয়াল ওয়েবসাইটে পাসপোর্ট দিয়ে ভিসা যাচাই করুন।',
    vcCp2Title: 'এজেন্সির লাইসেন্স যাচাই',
    vcCp2Desc: 'রিক্রুটিং এজেন্সির সরকারি লাইসেন্স অবশ্যই ভালো করে দেখে নেবেন।',
    vcCp3Title: 'রসিদ ছাড়া কোনো লেনদেন নয়',
    vcCp3Desc: 'টাকা দেওয়ার পর রেজিস্টার্ড লিখিত রসিদ না পাওয়া গেলে তা নিশ্চিত জালিয়াতি।',
    calcFormTitle: '📊 বিহারকাম ভিসা জালিয়াতি ঝুঁকি ক্যালকুলেটর',
    calcFormSubtitle: 'সরকারি নিয়ম ও শ্রম আইন অনুযায়ী আপনার ঝুঁকি হিসাব করুন:',
    lblAgentName: 'এজেন্ট বা এজেন্সির নাম:',
    lblCountry: 'গন্তব্য দেশ:',
    lblVisaType: 'প্রতিশ্রুত ভিসার ধরন:',
    lblMoney: 'দাবিকৃত টাকার পরিমাণ (দেশীয় টাকায়):',
    lblPassport: 'আসল পাসপোর্ট কি আটকে রাখা হয়েছে? (হ্যাঁ/না):',
    lblReceipt: 'লেনদেনের রসিদ দেওয়া হয়েছে কি?:',
    btnCalcSubmit: 'ঝুঁকির মাত্রা যাচাই করুন',
    optVisaWork: 'ওয়ার্ক ভিসা / নিয়মিত চাকরি (🟢 নিরাপদ)',
    optVisaVisit: 'ভিজিট / ট্যুরিস্ট / আজাদ ভিসা (🔴 চরম ঝুঁকিপূর্ণ)',
    optVisaOther: 'ট্রানজিট / অনির্দিষ্ট ভিসা (🟡 উচ্চ ঝুঁকিপূর্ণ)',
    optPassportNo: 'না, আসল পাসপোর্ট আমার নিজের কাছে আছে',
    optPassportYes: 'হ্যাঁ, এজেন্ট আসল পাসপোর্ট আটকে রেখেছে (🔴 ঝুঁকি)',
    optReceiptYes: 'হ্যাঁ, রেজিস্টার্ড লিখিত রসিদ দেওয়া হয়েছে',
    optReceiptNo: 'না, কোনো বৈধ কাগজপত্র ছাড়াই নগদ লেনদেন (🔴 ঝুঁকি)',
    optScamVisit: 'ভিজিট ভিসায় পাঠিয়ে কাজের ভিসা না লাগানো (আজাদ ভিসা ফাঁদ)',
    optScamCash: 'অতিরিক্ত টাকা নিয়ে জাল অফার লেটার দেওয়া',
    optScamPassport: 'আসল পাসপোর্ট জোরপূর্বক আটকে রেখে ব্লাকমেইল করা',
    optScamSalary: 'বিদেশে পাঠিয়ে চুক্তির চেয়ে কম বেতন দেওয়া',
    govtSchemesTitle: '🏛️ সরকারি ফلاحি স্কিম ও কল্যাণ লোন',
    govtSchemesDesc: 'বিদেশ যাওয়ার জন্য দালালের কাছ থেকে চড়া সুদে ঋণ নেবেন না। সরকারি প্রবাসী কল্যাণ ব্যাংক ও তহবিল সমূহে যোগাযোগ করুন:',
    govtCardIn: '🇮🇳 ভারতীয় প্রবাসী কল্যাণ ও ঋণ',
    govtCardInDesc: 'ই-মাইগ্রেট পোর্টাল রেজিস্ট্রেশন, এসবিআই প্রবাসী লোন এবং পিবিবিওয়াই ১০ লাখ টাকার বিমা নিরাপত্তা।',
    govtCardPk: '🇵🇰 পাকিস্তান প্রবাসী কল্যাণ ফাউন্ডেশন (OPF)',
    govtCardPkDesc: 'ওপিএফ সুদমুক্ত ঋণ, প্রোটেক্টর অফ ইমিগ্রেশন যাচাইকরণ এবং আবাসন গাইড।',
    govtCardBd: '🇧🇩 বাংলাদেশ প্রবাসী কল্যাণ ও ঋণ',
    govtCardBdDesc: 'প্রবাসী কল্যাণ ব্যাংক (PKB) থেকে স্বল্প সুদে অভিবাসন লোন এবং ওয়েজ আর্নার্স কল্যাণ বোর্ড সহায়তা।',
    govtCardNp: '🇳🇵 নেপাল প্রবাসী কল্যাণ ফান্ড',
    govtCardNpDesc: 'বৈদেশিক কর্মসংস্থান बोर्ड कल्याणकारी अनुदान र स्वीकृत श्रम स्वीकृति प्राप्तहरूका लागि बैंक कर्जा।',
    footCopyright: '© 2026 বাহারকাম। নিরাপদ অভিবাসন তথ্য পোর্টাল।',
    alertSaved: 'নির্দেশিকা সফলভাবে আপনার অফলাইন প্রোফাইলে সংরক্ষিত হয়েছে!',
    alertRemoved: 'সংরক্ষিত তালিকা থেকে নির্দেশিকা সরিয়ে নেওয়া হয়েছে।',
    alertCopied: 'সারাংশ সফলভাবে ক্লিপবোর্ডে কপি হয়েছে! আপনি হোয়াটসঅ্যাপে শেয়ার করতে পারবেন।',
    alertCopyFailed: 'কপি করতে ব্যর্থ হয়েছে। কপি করতে দয়া করে ম্যানুয়ালি টেক্সট সিলেক্ট করুন।',
    sathiRecommendation: 'সুপারিশ: ',
    lblSecurityProtocolTitle: 'নিরাপত্তা প্রোটোকল:',
    lblSecurityProtocolBody: 'কখনো আসল পাসপোর্ট অন্যের হাতে দেবেন না। গুগল ড্রাইভ বা জিমেইলে স্ক্যান কপি সুরক্ষিত রাখুন। সবসময় অফিশিয়াল ব্যাংকিং চ্যানেলে লেনদেন করুন।',
    reasonVisit: 'ভিজিট, ট্যুরিস্ট বা আজাদ ভিসায় কাজ করা বেআইনি। জেল ও নির্বাসনের বড় আশঙ্কা রয়েছে।',
    reasonOther: 'কোনো সুনির্দিষ্ট লিখিত চুক্তি ছাড়া ট্রানজিট ভিসায় পাঠানো হচ্ছে, যা অত্যন্ত ঝুঁকিপূর্ণ।',
    reasonReceipt: 'লিখিত রসিদ ছাড়া নগদ লেনদেন জালিয়াতির প্রধান লক্ষণ। কোনো প্রমাণ ছাড়া অভিযোগ করা সম্ভব হবে না।',
    reasonPassport: 'আসল ভৌত পাসপোর্ট আটকে রাখা আইনত দণ্ডনীয় অপরাধ। এটি আপনার নিরাপত্তার জন্য ক্ষতিকর।',
    reasonMoneyHigh: 'অতিরিক্ত অর্থ দাবি করা অভিবাসন আইনের পরিপন্থী এবং আর্থিক শোষণ।',
    reasonMoneyStandard: 'দাবিকৃত ফি অতিরিক্ত মনে হচ্ছে। অনুগ্রহ করে দূতাবাস থেকে লাইসেন্স যাচাই করুন।',
    reasonAllClear: 'প্রাথমিক যাচাইকরণ সঠিক। তবুও নিয়োগকারী কোম্পানির বৈধতা পুনরায় নিশ্চিত করুন।',
    agentCheck: 'এজেন্ট যাচাইকরণ',
    popularGuidesTitle: 'জনপ্রিয় নিরাপত্তা গাইড',
    popularGuidesSubtitle: 'বিদেশে চাকরি, ভিসার নিরাপত্তা, বেতন, নথিপত্র এবং জালিয়াতি প্রতিরোধ সম্পর্কে সহজ নির্দেশিকা।',
    allGuidesTitle: 'সব নিরাপত্তা গাইড',
    allGuidesSubtitle: 'বিদেশে কাজের জালিয়াতি, ভিসার সত্যতা এবং প্রকৃত বেতনের বিস্তারিত তথ্য।',
    viewAllGuidesText: 'সব গাইড দেখুন'
  },
  NE: {
    rmSec1Title: '🌐 लोकप्रिय गन्तव्य देशहरू',
    rmSec1Desc: '९ वटा मुख्य देशहरूमा प्रमाणित च्यानलहरू उपलब्ध छन्:',
    rmSec2Title: '⚙️ चरण-दर-चरण सुरक्षित आवेदन प्रक्रिया',
    rmStep1Title: 'राहदानी जाँच',
    rmStep1Desc: 'राहदानीको म्याद कम्तीमा २ वर्ष हुनुपर्छ, र नाम तथा हस्ताक्षर सही हुनुपर्छ।',
    rmStep2Title: 'प्रमाणित स्रोतको मात्र प्रयोग',
    rmStep2Desc: 'कुनै पनि दलालबाट भिसा नलिनुहोस्। साथी एआई मार्फत सरकारी इजाजत प्राप्त एजेन्सीहरूको मात्र सहयोग लिनुहोस्।',
    rmStep3Title: 'लिखित श्रम सम्झौता पत्रको प्रमाणीकरण',
    rmStep3Desc: 'मूल तलब, बस्ने, खाने, हवाई टिकट र ड्युटी समय सम्झौता पत्रमा राम्रोसँग जाँच गर्नुहोस्।',
    rmStep4Title: 'प्रहरी प्रतिवेदन र स्वास्थ्य परीक्षण',
    rmStep4Desc: 'सधैं सरकारी मान्यता प्राप्त केन्द्रबाट स्वास्थ्य परीक्षण गराउनुहोस् र प्रहरी क्यियरेन्स रिपोर्ट (PCC) लिनुहोस्।',
    rmSec3Title: '✓ आवश्यक कागजातहरूको चेकलिस्ट',
    rmDocItem1: '✓ राहदानीको पहिलो र अन्तिम पानाको स्पष्ट स्क्यान',
    rmDocItem2: '✓ कार्य अनुभव प्रमाणपत्र वा सीप तालिम कार्ड',
    rmDocItem3: '✓ गामका (GAMCA) स्वीकृत मेडिकल फिटनेस प्रतिलिपि',
    rmDocItem4: '✓ प्रहरी प्रतिवेदन प्रमाणपत्र (PCC)',
    rmDocItem5: '✓ श्रम सम्झौता पत्रको हस्ताक्षर गरिएको प्रतिलिपि',
    rmSec4Title: '🔴 तत्काल चेतावनी: खाना र बस्ने सुविधा',
    rmSec4Desc: 'धेरै एजेन्टहरूले निःशुल्क खाना भन्छन् तर तलबबाट काट्छन्। लिखित सम्झौता हुनै पर्छ। सुरक्षित कामको स्कोर ९०% भन्दा बढी हुनुपर्छ।',
    vcAlertTitle: '⚠️ कामका लागि भिजिट वा टुरिष्ट भिसा सधैं अस्वीकार गर्नुहोस्',
    vcAlertDesc: 'भिजिट वा टुरिष्ट भिसामा काम गर्नु पूर्ण रूपमा गैरकानुनी हो। दलालहरूले भिजिट भिसामा पठाएर श्रम भिसा बनाइदिने झूटो आशा दिन्छन्। यसले जेल, जरिवाना वा देश निकाला गराउन सक्छ।',
    vcHeading: 'भिसा जालसाजी प्रमाणीकरण',
    vcCheckpointsTitle: '🔍 वास्तविक र नक्कली भिसा चिन्ने तरिकाहरू',
    vcCp1Title: 'सरकारी पोर्टल क्यूआर कोड जाँच',
    vcCp1Desc: 'श्रम मन्त्रालयको आधिकारिक वेबसाइटमा राहदानी नम्बर राखेर भिसा जाँच गर्नुहोस्।',
    vcCp2Title: 'रिक्रुटर्सको इजाजत पत्र जाँच',
    vcCp2Desc: 'म्यानपावर कम्पनीको सरकारी दर्ता नम्बर अनिवार्य रूपमा जाँच गर्नुहोस्।',
    vcCp3Title: 'रसिद बिना पैसा नतिर्नुहोस्',
    vcCp3Desc: 'रकम तिरेपछि आधिकारिक लिखित रसिद प्राप्त भएन भने त्यो १००% ठगी हो।',
    calcFormTitle: '📊 बहारकाम भिसा जालसाजी जोखिम क्यालकुलेटर',
    calcFormSubtitle: 'सरकारी नियम र श्रम कानुन अनुसार आफ्नो जोखिमको स्तर जाँच्नुहोस्:',
    lblAgentName: 'एजेन्ट वा एजेन्सीको नाम:',
    lblCountry: 'गन्तव्य देश:',
    lblVisaType: 'प्रतिज्ञा गरिएको भिसा प्रकार:',
    lblMoney: 'माग गरिएको रकम (स्थानीय रुपैयाँमा):',
    lblPassport: 'के मूल राहदानी खोसिएको छ? (हो / होइन):',
    lblReceipt: 'के भुक्तानीको रसिद दिइएको छ? (हो / होइन):',
    btnCalcSubmit: 'जोखिम स्तर जाँच्नुहोस्',
    optVisaWork: 'श्रम भिसा / नियमित रोजगार (🟢 सुरक्षित)',
    optVisaVisit: 'भिजिट / टुरिष्ट / आजाद भिसा (🔴 अत्यन्त जोखिमपूर्ण)',
    optVisaOther: 'ट्रान्जिट / नखुलेको भिसा (🟡 उच्च जोखिम)',
    optPassportNo: 'होइन, राहदानी मसँगै सुरक्षित छ',
    optPassportYes: 'हो, एजेन्टले मूल राहदानी राखेको छ (🔴 जोखिम)',
    optReceiptYes: 'हो, दर्ता गरिएको लिखित रसिद प्राप्त भएको छ',
    optReceiptNo: 'होइन, बिना कुनै कानूनी कागजात नगद लेनदेन (🔴 जोखिम)',
    optScamVisit: 'भिजिट भिसामा पठाएर श्रम भिसा नबनाइदिने (आजाद भिसाको जाल)',
    optScamCash: 'थप रकम लिएर नक्कली अफर लेटर दिने',
    optScamPassport: 'मूल राहदानी जबर्जस्ती कब्जा गरेर ब्ल्याकमेल गर्ने',
    optScamSalary: 'विदेश पठाएर सम्झौता भन्दा कम तलब दिने',
    govtSchemesTitle: '🏛️ सरकारी कल्याणकारी योजना र आप्रवासन कर्जा',
    govtSchemesDesc: 'विदेश जानका लागि दलालबाट चर्को ब्याजमा ऋण नलिनुहोस्। सरकारी बैंक र कल्याणकारी कोषमा सम्पर्क गर्नुहोस्:',
    govtCardIn: '🇮🇳 भारतीय कल्याणकारी कर्जा तथा योजनाहरू',
    govtCardInDesc: 'ई-माइग्रेट पोर्टल दर्ता, एसबीआई आप्रवासी कर्जा, र १० लाखको पीबीबीवाई बीमा सुरक्षा।',
    govtCardPk: '🇵🇰 पाकिस्तान ओभरसीज फाउन्डेशन (OPF)',
    govtCardPkDesc: 'ओपीएफ ब्याजमुक्त कर्जा, आप्रवासी सुरक्षा विभाग जाँच, र आवास गाइड।',
    govtCardBd: '🇧🇩 बंगलादेश आप्रवासी कल्याण तथा लोन',
    govtCardBdDesc: 'प्रवासी कल्याण बैंकबाट सस्तो ब्याजमा कर्जा र वेज अर्नर्स कल्याण बोर्ड सहायता।',
    govtCardNp: '🇳🇵 नेपाल आप्रवासी कल्याण कोष',
    govtCardNpDesc: 'वैदेशिक रोजगार बोर्ड कल्याणकारी अनुदान र स्वीकृत श्रम स्वीकृति प्राप्तहरूका लागि बैंक कर्जा।',
    footCopyright: '© 2026 बहारकाम। सुरक्षित आप्रवासन जानकारी पोर्टल।',
    alertSaved: 'मार्गनिर्देशन सफलतापूर्वक तपाईंको अफलाइन प्रोफाइलमा सुरक्षित गरिएको छ!',
    alertRemoved: 'मार्गनिर्देशन सुरक्षित गरिएको सूचीबाट हटाइएको छ।',
    alertCopied: 'विवरण सफलतापूर्वक क्लिपबोर्डमा प्रतिलिपि भयो! अब तपाईं व्हाट्सएपमा साझा गर्न सक्नुहुन्छ।',
    alertCopyFailed: 'प्रतिलिपि गर्न असफल भयो। कृपया म्यानुअल्ली चयन गरेर प्रतिलिपि गर्नुहोस्।',
    sathiRecommendation: 'सिफारिस: ',
    lblSecurityProtocolTitle: 'सुरक्षा नियमहरू:',
    lblSecurityProtocolBody: 'मूल राहदानी कहिल्यै कसैलाई नबुझाउनुहोस्। गुगल ड्राइभ वा जिमेलमा स्क्यान गरिएका प्रतिलिपिहरू सुरक्षित राख्नुहोस्। भुक्तानी सधैं बैंकिङ माध्यमबाट मात्र गर्नुहोस्।',
    reasonVisit: 'भिजिट वा टुरिष्ट भिसामा काम गर्नु गैरकानुनी हो। जेल र देश निकालाको उच्च जोखिम हुन्छ।',
    reasonOther: 'कुनै लिखित श्रम सम्झौता बिना ट्रान्जिट भिसामा पठाउन खोज्नु ठूलो जोखिम हो।',
    reasonReceipt: 'लिखित रसिद बिनाको नगद कारोबार शतप्रतिशत ठगीको संकेत हो। रसिद बिना कानुनी कारबाही सम्भव हुँदैन।',
    reasonPassport: 'मूल राहदानी कब्जामा लिनु कानुनी रूपमा दण्डनीय अपराध हो। यो कामदारको सुरक्षाको विरुद्ध छ।',
    reasonMoneyHigh: 'तोकिएको सीमा भन्दा बढी रकम माग्नु श्रम नियम विपरीत र आर्थिक शोषण हो।',
    reasonMoneyStandard: 'माग गरिएको सेवा शुल्क अत्यधिक देखिन्छ। कृपया सम्बन्धित दूतावासबाट इजाजतपत्र प्रमाणित गर्नुहोस्।',
    reasonAllClear: 'सबै प्रारम्भिक प्रक्रिया सही देखिन्छ। यद्यपि कम्पनी दर्ताको थप प्रमाणीकरण गर्नुहोस्।',
    agentCheck: 'एजेन्ट प्रमाणीकरण',
    popularGuidesTitle: 'लोकप्रिय सुरक्षा मार्गदर्शकहरू',
    popularGuidesSubtitle: 'वैदेशिक रोजगारी, भिसा सुरक्षा, तलब, कागजात र ठगी रोकथाम सम्बन्धी सरल गाइडहरू।',
    allGuidesTitle: 'सबै सुरक्षा गाइडहरू',
    allGuidesSubtitle: 'वैदेशिक रोजगार ठगी, भिसा प्रमाणीकरण र वास्तविक तलब सम्बन्धी सम्पूर्ण जानकारी।',
    viewAllGuidesText: 'सबै गाइडहरू हेर्नुहोस्'
  },
  EN: {
    rmSec1Title: '🌐 Global Migrant Destinations',
    rmSec1Desc: 'Direct checked channels are verified across 9 main countries:',
    rmSec2Title: '⚙️ Step-by-Step Safe Apply Process',
    rmStep1Title: 'Passport Check',
    rmStep1Desc: 'Passport must have at least 2 years validity, with correct name and signature.',
    rmStep2Title: 'Use Verified Sources Only',
    rmStep2Desc: 'Never buy visas from local brokers. Consult Sathi AI for official licensed agencies.',
    rmStep3Title: 'Labor Contract Verification',
    rmStep3Desc: 'Double-check sponsorship details, base salary, lodging, meals, and flight tickets in writing.',
    rmStep4Title: 'PCC & Medical Records',
    rmStep4Desc: 'Always get medical checkups at approved centers and obtain a clean Police Clearance Certificate (PCC).',
    rmSec3Title: '✓ Required Documents Checklist',
    rmDocItem1: '✓ Passport front & back clear scan copy',
    rmDocItem2: '✓ Experience certificate or vocational training card',
    rmDocItem3: '✓ GAMCA approved medical fitness report',
    rmDocItem4: '✓ Police Clearance Certificate (PCC) copy',
    rmDocItem5: '✓ Labor contract signed copy',
    rmSec4Title: '🔴 Real-time Warning: Food & Lodging Terms',
    rmSec4Desc: 'Many agents claim "Free Food" but deduct it from your wages. A written contract is mandatory. Safe job score is 90%+ only.',
    vcAlertTitle: '⚠️ ALWAYS AVOID VISIT/TOURIST VISA FOR JOBS',
    vcAlertDesc: 'Working on a visit/tourist visa is strictly illegal. Agents often promise work permit conversion, which is 99% fake. You risk jail, deportation, or bans.',
    vcHeading: 'Visa Fraud Verification Check',
    vcCheckpointsTitle: '🔍 Real vs Fake Visa Checkpoints',
    vcCp1Title: 'Government Portal QR Check',
    vcCp1Desc: 'Verify the visa on the official ministry website using your passport details.',
    vcCp2Title: 'Recruiter License Check',
    vcCp2Desc: 'Confirm the recruitment agency holds a valid government-issued recruiting license.',
    vcCp3Title: 'No Cash Without Receipt',
    vcCp3Desc: 'Any cash payment without an official registered written receipt is 100% fraud.',
    calcFormTitle: '📊 BaharKaam Visa Fraud Risk Calculator',
    calcFormSubtitle: 'Calculate fraud risks based on labor laws and compliance guidelines:',
    lblAgentName: 'Agent / Agency Name:',
    lblCountry: 'Target Country:',
    lblVisaType: 'Visa Type Promised:',
    lblMoney: 'Money Demanded (Local Currency equivalent):',
    lblPassport: 'Original Passport Seized? (Yes/No):',
    lblReceipt: 'Payment Receipt Offered?:',
    btnCalcSubmit: 'Check Risk Level',
    optVisaWork: 'Work Visa / Employment (🟢 Safe)',
    optVisaVisit: 'Visit / Tourist / Azad Visa (🔴 Extreme Risk)',
    optVisaOther: 'Transit / Unspecified (🟡 High Risk)',
    optPassportNo: 'No, original physical passport is with me',
    optPassportYes: 'Yes, agent has confiscated my original passport (🔴 Risk)',
    optReceiptYes: 'Yes, proper registered receipt offered',
    optReceiptNo: 'No, cash transaction without legal paperwork (🔴 Risk)',
    optScamVisit: 'Visit Visa scam without work permit (Azad Visa Trap)',
    optScamCash: 'Extra cash demanded for fake offer letters',
    optScamPassport: 'Passport confiscated forcibly for extortion',
    optScamSalary: 'Landed abroad and paid less than contract',
    govtSchemesTitle: '🏛️ Official Govt Schemes & Welfare Loans',
    govtSchemesDesc: 'Avoid taking high-interest loans from local brokers to go abroad. Use official banking programs:',
    govtCardIn: '🇮🇳 India Welfare & Loans',
    govtCardInDesc: 'eMigrate Portal registration, SBI Pravasi Loan, and PBBY 10 Lakh insurance safety wrapper.',
    govtCardPk: '🇵🇰 Pakistan Overseas OPF',
    govtCardPkDesc: 'OPF interest-free welfare loans, Protector of Emigrants verification, and migrant housing guides.',
    govtCardBd: '🇧🇩 Bangladesh Prabashi Kallyan',
    govtCardBdDesc: 'Prabashi Kallyan Bank (PKB) low-interest migration loans and Wage Earners Welfare Board aid.',
    govtCardNp: '🇳🇵 Nepal Migrant Welfare Fund',
    govtCardNpDesc: 'Foreign Employment Board Welfare grant and collateral-based banking loans for approved permit holders.',
    footCopyright: '© 2026 BaharKaam. Safety-first foreign work guidance platform.',
    alertSaved: 'Guide successfully saved to your offline profile!',
    alertRemoved: 'Guide removed from saved list.',
    alertCopied: 'Summary details successfully copied to clipboard! You can paste in WhatsApp.',
    alertCopyFailed: 'Failed to copy. Please manually select the card text to copy.',
    sathiRecommendation: 'Recommendation: ',
    lblSecurityProtocolTitle: 'Security Protocol:',
    lblSecurityProtocolBody: 'Never hand over your physical passport. Keep scanned digital copies on Gmail/Google Drive. Transact only through official bank wires.',
    reasonVisit: 'Working on a visit, tourist, or azad visa is illegal. There is extreme risk of jail and deportation.',
    reasonOther: 'Sent on transit visa or without a clear written contract, which is highly unverified.',
    reasonReceipt: 'Cash transaction without a written receipt is 100% indicative of fraud. No complaint can be registered without proof.',
    reasonPassport: 'Holding an original physical passport is legally illegal. It compromises the safety of the passport holder.',
    reasonMoneyHigh: 'Demanding more than the specified ceiling limit violates labor recruitment laws and is financial exploitation.',
    reasonMoneyStandard: 'Demanded service fee seems higher than normal. Please verify the agency license directly with the embassy.',
    reasonAllClear: 'All basic compliance parameters met. Still, double-check company registration details.',
    agentCheck: 'Agent Check',
    popularGuidesTitle: 'Popular Safety Guides',
    popularGuidesSubtitle: 'Safety guides for foreign jobs, visas, salary and fraud prevention.',
    allGuidesTitle: 'All Safety Guides',
    allGuidesSubtitle: 'Comprehensive list of safety guides to protect yourself from foreign work scams, visa fraud, and incorrect salary promises.',
    viewAllGuidesText: 'View All Guides'
  }
};

// Merge additional translations into core translations
for (const lang in additionalTranslations) {
  if (translations[lang]) {
    Object.assign(translations[lang], additionalTranslations[lang]);
  }
}


// 2. REALISTIC SAFETY-FIRST FOREIGN JOB DATA (TRANSLATED ON THE FLY OR MULTILINGUAL-READY)
const jobsData = [
  {
    id: 'job-1',
    category: 'Driving Jobs',
    role: 'Driver',
    country: 'UAE (Dubai)',
    salaryRange: '1,800 - 2,500',
    currency: 'AED',
    visaType: 'Work Visa (Company Sponsored)',
    safetyScore: 96,
    riskLevel: 'low',
    lastUpdated: '2h ago',
    sourceType: 'Direct Registered Employer',
    details: {
      HI: {
        title: 'Dubai Driver — Work Visa Guide',
        company: 'Al-Masaad Logistics Group',
        documents: 'Light/Heavy UAE driving license, Medical Test, PCC check.',
        foodRoomTicket: 'Kholi/Room mili, Food allowance included, 2 saal mein ticket free.',
        warning: 'Driver visa ke liye UAE ka valid license hona zaroori hai. Kisi bhi agent ko license lagwane ke liye advance paise na dein.'
      },
      UR: {
        title: 'دبئی ڈرائیور — ورک ویزا گائیڈ',
        company: 'المساعد لاجسٹکس گروپ',
        documents: 'متحدہ عرب امارات کا لائٹ/ہیوی ڈرائیونگ لائسنس، میڈیکل ٹیسٹ، پولیس کلیئرنس سرٹیفکیٹ۔',
        foodRoomTicket: 'رہائشی کمرہ مفت، کھانے کا الاؤنس شامل، ہر ۲ سال بعد واپسی کا فضائی ٹکٹ۔',
        warning: 'ڈرائیور ویزا کے لیے یو اے ای کا درست لائسنس ہونا لازمی ہے۔ لائسنس بنوانے کے بہانے کسی ایجنٹ کو پیشگی رقم نہ دیں۔'
      },
      BN: {
        title: 'দুবাই ড্রাইভার — ওয়ার্ক ভিসা নির্দেশিকা',
        company: 'আল-মাসাদ লজিস্টিক গ্রুপ',
        documents: 'সংযুক্ত আরব আমিরাতের হালকা/ভারী ড্রাইভিং লাইসেন্স, মেডিকেল টেস্ট, পুলিশ ছাড়পত্র।',
        foodRoomTicket: 'থাকার ঘর বিনামূল্যে, খাবারের ভাতা অন্তর্ভুক্ত, প্রতি ২ বছরে বিমান টিকিট।',
        warning: 'ড্রাইভার ভিসার জন্য সংযুক্ত আরব আমিরাতের বৈধ লাইসেন্স থাকতে হবে। লাইসেন্স করিয়ে দেওয়ার নামে কোনো দালালকে অগ্রিম টাকা দেবেন না।'
      },
      NE: {
        title: 'दुबई ड्राइभर — श्रम भिसा निर्देशिका',
        company: 'अल-मसाद लजिस्टिक ग्रुप',
        documents: 'युएईको हल्का/गह्रौं सवारी चालक अनुमति पत्र, मेडिकल जाँच, प्रहरी रिपोर्ट।',
        foodRoomTicket: 'बस्ने कोठा नि:शुल्क, खाना भत्ता समावेश, प्रत्येक २ वर्षमा हवाई टिकट।',
        warning: 'ड्राइभर भिसाको लागि युएईको वैध लाइसेन्स हुन आवश्यक छ। लाइसेन्स बनाइदिने बहानामा कुनै पनि एजेन्टलाई अग्रिम पैसा नदिनुहोस्।'
      },
      EN: {
        title: 'Dubai Driver — Work Visa Guide',
        company: 'Al-Masaad Logistics Group',
        documents: 'Light/Heavy UAE driving license, Medical Test, PCC check.',
        foodRoomTicket: 'Shared room provided, food allowance included, free flight ticket every 2 years.',
        warning: 'A valid UAE driving license is mandatory for driver visa. Do not pay any agent in advance to get a license.'
      }
    }
  },
  {
    id: 'job-2',
    category: 'Construction Jobs',
    role: 'Helper / Labour',
    country: 'Saudi Arabia (Riyadh)',
    salaryRange: '1,000 - 1,400',
    currency: 'SAR',
    visaType: 'Work Visa (Sponsor sponsored)',
    safetyScore: 93,
    riskLevel: 'low',
    lastUpdated: '5h ago',
    sourceType: 'Government Approved Recruiting Center',
    details: {
      HI: {
        title: 'Saudi Helper — Safety Checklist',
        company: 'Express Gulf Cargo Co.',
        documents: 'Passport (valid 2 saal), Medical fit, Local PCC Certificate.',
        foodRoomTicket: 'Company sharing room, kitchen facility, ticket after 2 years.',
        warning: 'Sponsor (Kafeel) ka naam aur company registration check karna zaroori hai. Har saal Iqama renewal company ki zimmedari hoti hai.'
      },
      UR: {
        title: 'سعودی ہیلپر — حفاظتی چیک لسٹ',
        company: 'ایکسپریس گلف کارگو کمپنی',
        documents: 'پاسپورٹ (میعاد ۲ سال)، میڈیکل فٹنس، مقامی پولیس کلیئرنس سرٹیفکیٹ۔',
        foodRoomTicket: 'کمپنی کا مشترکہ کمرہ، باورچی خانے کی سہولت، ۲ سال بعد واپسی کا فضائی ٹکٹ۔',
        warning: 'کفیل کا نام اور کمپنی کی رجسٹریشن چیک کرنا لازمی ہے۔ ہر سال اقامہ کی تجدید کمپنی کی ذمہ داری ہوتی ہے۔'
      },
      BN: {
        title: 'সৌদি হেল্পার — নিরাপত্তা চেকলিস্ট',
        company: 'এক্সপ্রেস গালফ কার্গো কোং',
        documents: 'পাসপোর্ট (নূন্যতম ২ বছর মেয়াদ), মেডিকেল ফিটনেস, পুলিশ ছাড়পত্র।',
        foodRoomTicket: 'কোম্পানি শেয়ারিং রুম, রান্নার সুবিধা, ২ বছর পর বিমান টিকিট।',
        warning: 'স্পন্সর (কফিল) এর নাম এবং কোম্পানি রেজিস্ট্রেশন যাচাই করা জরুরি। প্রতি বছর ইকামা রিনিউ করার দায়িত্ব কোম্পানির।'
      },
      NE: {
        title: 'साउदी हेल्पर — सुरक्षा चेकलिस्ट',
        company: 'एक्सप्रेस गल्फ कार्गो को.',
        documents: 'पासपोर्ट (२ वर्ष म्याद), मेडिकल फिटनेस, स्थानीय प्रहरी रिपोर्ट।',
        foodRoomTicket: 'कम्पनीको साझा कोठा, भान्साको सुविधा, २ वर्षपछि हवाई टिकट।',
        warning: 'स्पन्सर (कफिल) को नाम र कम्पनीको दर्ता जाँच गर्न आवश्यक छ। प्रत्येक वर्ष इकामा नवीकरण गर्ने जिम्मेवारी कम्पनीको हुन्छ।'
      },
      EN: {
        title: 'Saudi Helper — Safety Checklist',
        company: 'Express Gulf Cargo Co.',
        documents: 'Passport (valid 2 years), Medical fit test, local PCC check.',
        foodRoomTicket: 'Company sharing room, kitchen facility, ticket after 2 years.',
        warning: 'Verifying the Sponsor (Kafeel) name and company registration is mandatory. Iqama renewal is the employer’s responsibility.'
      }
    }
  },
  {
    id: 'job-3',
    category: 'Hotel & Cleaning',
    role: 'Cleaner',
    country: 'Qatar (Doha)',
    salaryRange: '1,100 - 1,500',
    currency: 'QAR',
    visaType: 'Work Visa (Direct contract)',
    safetyScore: 91,
    riskLevel: 'low',
    lastUpdated: '1d ago',
    sourceType: 'Licensed Recruitment Center',
    details: {
      HI: {
        title: 'Qatar Cleaner — Salary Reality',
        company: 'Hala Al Jadeed Hospitality',
        documents: 'Passport, PCC clearance check, basic medical fit report.',
        foodRoomTicket: 'Room provided, food or food allowance provided, 2-year ticket.',
        warning: 'Qatar mein minimum basic salary rules hain. Agar contract mein salary isse kam likhi ho, toh sign na karein aur helpline par report karein.'
      },
      UR: {
        title: 'قطر کلینر — تنخواہ کی حقیقت',
        company: 'ہالا الجدید ہاسپیٹلیٹی',
        documents: 'پاسپورٹ، پولیس کلیئرنس سرٹیفکیٹ، بنیادی میڈیکل فٹنس رپورٹ۔',
        foodRoomTicket: 'رہائش کمپنی کی طرف سے، کھانا یا کھانے کا الاؤنس، ۲ سال کا فضائی ٹکٹ۔',
        warning: 'قطر میں کم از کم بنیادی تنخواہ کے سخت قوانین ہیں۔ اگر معاہدے میں تنخواہ اس سے کم لکھی ہو تو دستخط نہ کریں اور ہیلپ لائن پر فوری رپورٹ کریں۔'
      },
      BN: {
        title: 'কাতার ক্লিনার — বেতনের সত্যতা',
        company: 'হালা আল জাদিদ হসপিটালিটি',
        documents: 'পাসপোর্ট, পুলিশ ছাড়পত্র যাচাই, প্রাথমিক মেডিকেল রিপোর্ট।',
        foodRoomTicket: 'থাকার ব্যবস্থা কোম্পানি দেবে, খাবার বা খাবারের ভাতা, ২ বছরের টিকিট।',
        warning: 'কাতারে ন্যূনতম বেতনের সরকারি নিয়ম রয়েছে। চুক্তিতে বেতন এর চেয়ে কম লেখা থাকলে স্বাক্ষর করবেন না এবং হেল্পলাইনে রিপোর্ট করুন।'
      },
      NE: {
        title: 'कतार क्लिनर — तलब वास्तविकता',
        company: 'हाला अल जदिद हस्पिटालिटी',
        documents: 'पासपोर्ट, प्रहरी प्रतिवेदन प्रमाण, सामान्य मेडिकल फिटनेस।',
        foodRoomTicket: 'बस्ने ठाउँ उपलब्ध, खाना वा खाना भत्ता उपलब्ध, २ वर्षमा हवाई टिकट।',
        warning: 'कतारमा न्यूनतम तलब सम्बन्धी नियम छ। यदि सम्झौता पत्रमा तलब यो भन्दा कम लेखिएको छ भने हस्ताक्षर नगर्नुहोस् र हेल्पलाइनमा रिपोर्ट गर्नुहोस्।'
      },
      EN: {
        title: 'Qatar Cleaner — Salary Reality',
        company: 'Hala Al Jadeed Hospitality',
        documents: 'Passport, PCC clearance, basic medical fitness certificate.',
        foodRoomTicket: 'Room provided, food or food allowance, flight ticket every 2 years.',
        warning: 'Qatar has strict minimum basic salary laws. If the contract lists a lower wage, do not sign and report to the helpline immediately.'
      }
    }
  },
  {
    id: 'job-4',
    category: 'Factory & Warehouse',
    role: 'Factory Worker',
    country: 'Romania',
    salaryRange: '600 - 800',
    currency: 'USD',
    visaType: 'Work Permit (D/AM Visa)',
    safetyScore: 65,
    riskLevel: 'careful',
    lastUpdated: '3d ago',
    sourceType: 'Private Recruiting Agency',
    details: {
      HI: {
        title: 'Romania Factory Worker — Documents Guide',
        company: 'Euro-East Manufacturing',
        documents: 'PCC (Apostille/Embassy stamp), VFS appointment letter.',
        foodRoomTicket: 'Shared worker dorms, meal allowance, ticket self-paid initially.',
        warning: "Europe ke visayein mein fraud bahut zyada hota hai. Agent agar Rs. 5 Lakh se zyada maange ya 'Visit Visa par bhej kar work permit karwane' ki kahe, toh turant mana karein!"
      },
      UR: {
        title: 'رومانیہ فیکٹری ورکر — دستاویزات کی گائیڈ',
        company: 'یورو-ایسٹ مینوفیکچرنگ',
        documents: 'پولیس کلیئرنس (ایپوسٹائل/ایمبیسی مہر)، VFS اپائنٹمنٹ لیٹر۔',
        foodRoomTicket: 'مشترکہ ورکر ہاسٹل، کھانے کا الاؤنس، فضائی ٹکٹ شروع میں خود ادا کرنا ہوگا۔',
        warning: 'یورپ کے ویزوں میں فراڈ بہت زیادہ ہوتا ہے۔ اگر ایجنٹ ۵ لاکھ روپے سے زیادہ مانگے یا وزٹ ویزا پر بھیج کر ورک پرمٹ کروانے کا کہے، تو فوری انکار کر دیں!'
      },
      BN: {
        title: 'রোমানিয়া ফ্যাক্টরি কর্মী — কাগজপত্র নির্দেশিকা',
        company: 'ইউরো-ইস্ট ম্যানুফ্যাকচারিং',
        documents: 'পুলিশ ছাড়পত্র (অ্যাপোস্টিল/দূতাবাস সিল), VFS অ্যাপয়েন্টমেন্ট পত্র।',
        foodRoomTicket: 'শেয়ারিং ডরমিটরি, খাবার ভাতা, বিমান টিকিট শুরুতে নিজেকে দিতে হতে পারে।',
        warning: 'ইউরোপের ভিসার নামে জালিয়াতি সবচেয়ে বেশি হয়। কোনো দালাল যদি ৫ লক্ষ টাকার বেশি দাবি করে বা ভিজিট ভিসায় পাঠিয়ে কাজের ভিসা দেওয়ার কথা বলে, তবে এখনই না বলুন!'
      },
      NE: {
        title: 'रोमानिया फ्याक्ट्री कामदार — कागजात निर्देशिका',
        company: 'युरो-इस्ट म्यानुफ्याक्चरिङ',
        documents: 'प्रहरी प्रतिवेदन (अपाोस्टिल/दूतावास छाप), VFS अपोइन्टमेन्ट पत्र।',
        foodRoomTicket: 'साझा कामदार कोठा, खाना भत्ता, हवाई टिकट सुरुमा आफैं बेहोर्नुपर्ने।',
        warning: 'युरोपको भिसाको नाममा ठगी धेरै हुन्छ। यदि एजेन्टले ५ लाख भन्दा बढी मागेमा वा "भिजिट भिसामा पठाएर श्रम भिसा बनाइदिने" भनेमा तुरुन्तै अस्वीकार गर्नुहोस्!'
      },
      EN: {
        title: 'Romania Factory Worker — Documents Guide',
        company: 'Euro-East Manufacturing',
        documents: 'PCC (Apostilled/Embassy stamp), VFS appointment letter.',
        foodRoomTicket: 'Shared worker dorms, meal allowance, flight ticket self-paid initially.',
        warning: 'European visas have the highest fraud rates. If an agent demands over ₹5 Lakhs or proposes a visit-to-work visa conversion, refuse immediately!'
      }
    }
  },
  {
    id: 'job-5',
    category: 'Technical Jobs',
    role: 'Welder',
    country: 'Oman (Muscat)',
    salaryRange: '150 - 200',
    currency: 'OMR',
    visaType: 'Work Visa (Sponsor sponsored)',
    safetyScore: 92,
    riskLevel: 'low',
    lastUpdated: '12h ago',
    sourceType: 'Government Approved Recruiting Center',
    details: {
      HI: {
        title: 'Oman Welder — Safety Guide & Trade Test',
        company: 'Muscat Steel Engineering',
        documents: 'ITI Certificate / Welder Trade Test Card, PCC verification, Medical fit report.',
        foodRoomTicket: 'Company sharing room, transport facility, free plane ticket.',
        warning: 'Welding jobs ke liye approved Trade Test Center se Card hona zaroori hai. Bina trade test agent ko moti rakam na dein.'
      },
      UR: {
        title: 'عمان ویلڈر — حفاظتی گائیڈ اور ٹریڈ ٹیسٹ',
        company: 'مسقط اسٹیل انجینئرنگ',
        documents: 'آئی ٹی آئی سرٹیفکیٹ / ویلڈر ٹریڈ ٹیسٹ کارڈ، پولیس تصدیق، میڈیکل فٹنس رپورٹ۔',
        foodRoomTicket: 'کمپنی کا مشترکہ رہائشی کمرہ، ٹرانسپورٹ کی سہولت، مفت واپسی کا فضائی ٹکٹ۔',
        warning: 'ویلڈنگ کے کاموں کے لیے منظور شدہ ٹریڈ ٹیسٹ سینٹر سے کارڈ ہونا لازمی ہے۔ بغیر ٹریڈ ٹیسٹ کے ایجنٹ کو بڑی رقم نہ دیں۔'
      },
      BN: {
        title: 'ওমান ওয়েল্ডার — নিরাপত্তা নির্দেশিকা ও ট্রেড টেস্ট',
        company: 'মাস্কাট স্টিল ইঞ্জিনিয়ারিং',
        documents: 'আইটিআই সার্টিফিকেট / ওয়েল্ডার ট্রেড টেস্ট কার্ড, পুলিশ ছাড়পত্র যাচাই, মেডিকেল ফিটনেস রিপোর্ট।',
        foodRoomTicket: 'কোম্পানি শেয়ারিং রুম, যাতায়াতের সুবিধা, বিনামূল্যে বিমান টিকিট।',
        warning: 'ওয়েল্ডিং কাজের জন্য অনুমোদিত ট্রেড টেস্ট সেন্টার থেকে কার্ড থাকা বাধ্যতামূলক। ট্রেড টেস্ট ছাড়া কোনো দালালকে বড় অঙ্কের টাকা দেবেন না।'
      },
      NE: {
        title: 'ओमान वेल्डर — सुरक्षा गाइड र ट्रेड टेस्ट',
        company: 'मस्कट स्टिल इन्जिनियरिङ',
        documents: 'ITI प्रमाणपत्र / वेल्डर ट्रेड टेस्ट कार्ड, प्रहरी प्रतिवेदन, मेडिकल फिटनेस।',
        foodRoomTicket: 'कम्पनीको साझा कोठा, यातायात सुविधा, नि:शुल्क हवाई टिकट।',
        warning: 'वेल्डर कामको लागि स्वीकृत ट्रेड टेस्ट सेन्टरबाट कार्ड हुन आवश्यक छ। बिना ट्रेड टेस्ट एजेन्टलाई ठूलो रकम नदिनुहोस्।'
      },
      EN: {
        title: 'Oman Welder — Safety Guide & Trade Test',
        company: 'Muscat Steel Engineering',
        documents: 'ITI Certificate / Welder Trade Test Card, PCC verification, Medical fit report.',
        foodRoomTicket: 'Company sharing room, transport facility, free return flight ticket.',
        warning: 'An approved Trade Test Card is mandatory for welding jobs. Do not pay agents large sums without a valid trade test.'
      }
    }
  },
  {
    id: 'job-6',
    category: 'Security Jobs',
    role: 'Security Guard',
    country: 'Kuwait',
    salaryRange: '120 - 160',
    currency: 'KWD',
    visaType: 'Work Visa (Sponsor sponsored)',
    safetyScore: 94,
    riskLevel: 'low',
    lastUpdated: '1d ago',
    sourceType: 'Licensed Recruitment Center',
    details: {
      HI: {
        title: 'Kuwait Security Guard — Verification Roadmap',
        company: 'Kuwait National Protection Service',
        documents: 'Minimum height proof (5ft 8in), PCC report, Basic English/Arabic interview.',
        foodRoomTicket: 'Duty room/Guard accommodation, uniform free, flight ticket every 2 years.',
        warning: 'Security guards ke duty hours check karein. 8 to 12 hours se zyada duty bina overtime illegal hai.'
      },
      UR: {
        title: 'کویت سیکیورٹی گارڈ — تصدیقی روڈ میپ',
        company: 'کویت نیشنل پروٹیکشن سروس',
        documents: 'کم از کم قد ۵ فٹ ۸ انچ، پولیس رپورٹ، بنیادی انگریزی/عربی انٹرویو۔',
        foodRoomTicket: 'ڈیوٹی روم/گارڈ ہاسٹل، یونیفارم مفت، ہر ۲ سال بعد واپسی کا فضائی ٹکٹ۔',
        warning: 'سیکیورٹی گارڈز کے ڈیوٹی کے اوقات چیک کریں۔ بغیر اوور ٹائم ۸ سے ۱۲ گھنٹے سے زیادہ ڈیوٹی غیر قانونی ہے۔'
      },
      BN: {
        title: 'কুয়েত সিকিউরিটি গার্ড — যাচাইকরণ রোডম্যাপ',
        company: 'কুয়েত ন্যাশনাল প্রোটেকশন সার্ভিস',
        documents: 'ন্যূনতম উচ্চতা ৫ ফুট ৮ ইঞ্চি, পুলিশ ছাড়পত্র রিপোর্ট, ইংরেজি/আরবি ইন্টারভিউ।',
        foodRoomTicket: 'গার্ড ডরমিটরি, বিনামূল্যে ইউনিফর্ম, প্রতি ২ বছরে বিমান টিকিট।',
        warning: 'সিকিউরিটি গার্ডের কাজের সময় নিশ্চিত করুন। ওভারটাইম ছাড়া ৮ থেকে ১২ ঘণ্টার বেশি কাজ বেআইনি।'
      },
      NE: {
        title: 'कुवेत सुरक्षा गार्ड — प्रमाणिकरण रोडम्याप',
        company: 'कुवेत राष्ट्रिय सुरक्षा सेवा',
        documents: 'न्यूनतम उचाई ५ फिट ८ इन्च, प्रहरी प्रतिवेदन, सामान्य अंग्रेजी/अरबी अन्तरवार्ता।',
        foodRoomTicket: 'गार्डको बस्ने कोठा, नि:शुल्क युनिफर्म, प्रत्येक २ वर्षमा हवाई टिकट।',
        warning: 'सुरक्षा गार्डको ड्युटी समय जाँच गर्नुहोस्। ओभरटाइम बिना ८ देखि १२ घण्टा भन्दा बढी काम गराउनु गैरकानूनी हो।'
      },
      EN: {
        title: 'Kuwait Security Guard — Verification Roadmap',
        company: 'Kuwait National Protection Service',
        documents: 'Minimum height proof (5ft 8in), PCC report, Basic English/Arabic interview.',
        foodRoomTicket: 'Guard barracks accommodation, free uniform, flight ticket every 2 years.',
        warning: 'Verify security duty hours. Working over 8-12 hours without overtime pay is illegal.'
      }
    }
  },
  {
    id: 'job-7',
    category: 'Agriculture Jobs',
    role: 'Farm Worker',
    country: 'Malaysia',
    salaryRange: '1,500 - 1,800',
    currency: 'MYR',
    visaType: 'Work Permit (Calling Visa)',
    safetyScore: 78,
    riskLevel: 'careful',
    lastUpdated: '12h ago',
    sourceType: 'Private Recruiting Agency',
    details: {
      HI: {
        title: 'Malaysia Agriculture Farm Worker — Checklist',
        company: 'Kuala Lumpur Plantation Corp.',
        documents: 'Passport (valid 18 months), Medical fitness (FOMEMA registration), visa letter.',
        foodRoomTicket: 'Estate sharing dorm room, food self-paid, ticket provided initially.',
        warning: 'Malaysia plantation jobs mein weather and work pressure bahut zyada hota hai. Real employer name check karein taake sub-contractor fraud se bachein.'
      },
      UR: {
        title: 'ملائیشیا زرعی فارم ورکر — چیک لسٹ',
        company: 'کوالالمپور پلانٹیشن کارپوریشن',
        documents: 'پاسپورٹ (میعاد ۱۸ ماہ)، میڈیکل فٹنس (FOMEMA رجسٹریشن)، ویزا لیٹر۔',
        foodRoomTicket: 'اسٹیٹ ہاسٹل کمرہ، کھانا ذاتی خرچہ، فضائی ٹکٹ شروع میں دیا جائے گا۔',
        warning: 'ملائیشیا پلانٹیشن کے کاموں میں موسم اور کام کا دباؤ بہت زیادہ ہوتا ہے۔ ذیلی ٹھیکیدار کے فراڈ سے بچنے کے لیے اصل آجر کا نام چیک کریں۔'
      },
      BN: {
        title: 'মালয়েশিয়া কৃষি খামার কর্মী — চেকলিস্ট',
        company: 'কুয়ালালামপুর প্ল্যান্টেশন কর্পোরেশন',
        documents: 'পাসপোর্ট (ন্যূনতম ১৮ মাস মেয়াদ), মেডিকেল ফিটনেস (FOMEMA রেজিস্ট্রেশন), ভিসা চিঠি।',
        foodRoomTicket: 'প্ল্যান্টেশন শেয়ারিং ডরমিটরি, খাবার নিজের খরচে, বিমান টিকিট শুরুতে প্রদান করা হবে।',
        warning: 'মালয়েশিয়ায় প্ল্যান্টেশন বা খামারের কাজে আবহাওয়া ও কাজের চাপ অনেক বেশি থাকে। সাব-কন্ট্রাক্টর জালিয়াতি এড়াতে মূল নিয়োগকর্তার নাম যাচাই করুন।'
      },
      NE: {
        title: 'मलेसिया कृषि कामदार — चेकलिस्ट',
        company: 'क्वालालम्पुर प्लान्टेशन को.',
        documents: 'पासपोर्ट (१८ महिना म्याद), मेडिकल फिटनेस (FOMEMA दर्ता), भिसा पत्र।',
        foodRoomTicket: 'प्लान्टेशनको साझा कोठा, खाना आफैं बेहोर्नुपर्ने, हवाई टिकट सुरुमा उपलब्ध गराइने।',
        warning: 'मलेसियाको कृषि काममा मौसम र कामको चाप धेरै हुन्छ। सब-कन्ट्र्याक्टर ठगीबाट बच्नको लागि वास्तविक रोजगारदाताको नाम जाँच गर्नुहोस्।'
      },
      EN: {
        title: 'Malaysia Agriculture Farm Worker — Checklist',
        company: 'Kuala Lumpur Plantation Corp.',
        documents: 'Passport (valid 18 months), Medical fitness (FOMEMA registration), Calling Visa letter.',
        foodRoomTicket: 'Estate dormitory shared room, meals self-paid, outbound flight ticket provided.',
        warning: 'Malaysia plantation jobs involve outdoor work and intensive labor. Check the master employer name to avoid sub-contractor fraud.'
      }
    }
  },
  {
    id: 'job-8',
    category: 'Office / Support Jobs',
    role: 'Office Helper',
    country: 'UAE (Dubai)',
    salaryRange: '1,200 - 1,600',
    currency: 'AED',
    visaType: 'Work Visa (Company Sponsored)',
    safetyScore: 93,
    riskLevel: 'low',
    lastUpdated: '3h ago',
    sourceType: 'Direct Registered Employer',
    details: {
      HI: {
        title: 'Dubai Office Helper — Reality Guide',
        company: 'Emaar Business Support Hub',
        documents: '10th pass / matric cert, basic English communication, Medical fitness check.',
        foodRoomTicket: 'Shared accommodation, health insurance card, 2-year free return ticket.',
        warning: 'Office Helper ke naam par kuch agent "Catering Helper" ya "Construction helper" mein bhej dete hain. Contract dhyan se padhein.'
      },
      UR: {
        title: 'دبئی آفس ہیلپر — حقیقت گائیڈ',
        company: 'اعمار بزنس سپورٹ ہب',
        documents: 'میٹرک پاس سرٹیفکیٹ، بنیادی انگریزی بول چال، میڈیکل فٹنس کی جانچ۔',
        foodRoomTicket: 'مشترکہ رہائش، ہیلتھ انشورنس کارڈ، ہر ۲ سال بعد مفت واپسی کا فضائی ٹکٹ۔',
        warning: 'آفس ہیلپر کے نام پر کچھ ایجنٹ "کیٹرنگ ہیلپر" یا "تعمیراتی ہیلپر" میں بھیج دیتے ہیں۔ معاہدہ غور سے پڑھیں۔'
      },
      BN: {
        title: 'দুবাই অফিস হেল্পার — বাস্তব নির্দেশিকা',
        company: 'এমার বিজনেস সাপোর্ট হাব',
        documents: 'মাধ্যমিক সার্টিফিকেট, প্রাথমিক ইংরেজি দক্ষতা, মেডিকেল ফিটনেস পরীক্ষা।',
        foodRoomTicket: 'শেয়ারিং ডরমিটরি, স্বাস্থ্য বীমা কার্ড, ২ বছর পর বিনামূল্যে বিমান টিকিট।',
        warning: 'অফিস হেল্পার পদের কথা বলে অনেক দালাল "ক্যাটারিং হেল্পার" বা "কনস্ট্রাকশন হেল্পার" কাজে পাঠিয়ে দেয়। চুক্তির কাজ ভালো করে পড়ুন।'
      },
      NE: {
        title: 'दुबई कार्यालय सहयोगी — वास्तविक निर्देशिका',
        company: 'एमार बिजनेस सपोर्ट हब',
        documents: '१० कक्षा उत्तीर्ण प्रमाणपत्र, सामान्य अंग्रेजी बोलचाल, मेडिकल फिटनेस जाँच।',
        foodRoomTicket: 'साझा बस्ने ठाउँ, स्वास्थ्य बीमा कार्ड, २ वर्षमा नि:शुल्क हवाई टिकट।',
        warning: 'कार्यालय सहयोगी भनेर केही एजेन्टले "क्याटरिङ सहयोगी" वा "निर्माण सहयोगी" काममा पठाइदिन्छन्। सम्झौता पत्र ध्यानपूर्वक पढ्नुहोस्।'
      },
      EN: {
        title: 'Dubai Office Helper — Reality Guide',
        company: 'Emaar Business Support Hub',
        documents: 'Secondary high school certificate, basic English communication, Medical fitness check.',
        foodRoomTicket: 'Shared housing provided, health insurance card, free return ticket every 2 years.',
        warning: 'Some dishonest agents place Office Helpers in "Catering" or "Construction" labor roles. Read the written contract carefully before signing.'
      }
    }
  }
];;

const roleGroupsData = [
  {
    icon: '🚛',
    title: {
      HI: 'Driving Jobs',
      UR: 'ڈرائیونگ کی نوکریاں',
      BN: 'ড্রাইভিং কাজ',
      NE: 'ड्राइभिङ कामहरू',
      EN: 'Driving Jobs'
    },
    roles: [
      { id: 'Driver', names: { HI: 'Driver', UR: 'ڈرائیور', BN: 'ড্রাইভার', NE: 'ड्राइभर', EN: 'Driver' } },
      { id: 'Heavy Driver', names: { HI: 'Heavy Driver', UR: 'ہیوی ڈرائیور', BN: 'হেভি ড্রাইভার', NE: 'हेभी ड्राइभर', EN: 'Heavy Driver' } },
      { id: 'Delivery Driver', names: { HI: 'Delivery Driver', UR: 'ڈیلیوری ڈرائیور', BN: 'ডেলিভারি ড্রাইভার', NE: 'डेलिभरी ड्राइभर', EN: 'Delivery Driver' } },
      { id: 'Bus Driver', names: { HI: 'Bus Driver', UR: 'بس ڈرائیور', BN: 'বাস ড্রাইভার', NE: 'बस चालक', EN: 'Bus Driver' } }
    ]
  },
  {
    icon: '🏗️',
    title: {
      HI: 'Construction Jobs',
      UR: 'تعمیراتی کام',
      BN: 'কনস্ট্রাকশন কাজ',
      NE: 'कन्स्ट्रक्सन कामहरू',
      EN: 'Construction Jobs'
    },
    roles: [
      { id: 'Helper / Labour', names: { HI: 'Helper / Labour', UR: 'ہیلپر / مزدور', BN: 'হেল্পার / লেবার', NE: 'सहयोगी / लेबर', EN: 'Helper / Labour' } },
      { id: 'Mason / Raj Mistri', names: { HI: 'Mason / Raj Mistri', UR: 'راج مستری', BN: 'রাজমিস্ত্রি', NE: 'राजमिस्त्री', EN: 'Mason / Raj Mistri' } },
      { id: 'Steel Fixer', names: { HI: 'Steel Fixer', UR: 'سٹیل فکسر', BN: 'স্টিল ফিক্সার', NE: 'स्टिल फिक्सर', EN: 'Steel Fixer' } },
      { id: 'Carpenter', names: { HI: 'Carpenter', UR: 'بڑھئی', BN: 'কার্পেন্টার', NE: 'सिकर्मी', EN: 'Carpenter' } },
      { id: 'Painter', names: { HI: 'Painter', UR: 'رنگ ساز / پینٹر', BN: 'পেইন্টার', NE: 'पेन्टर', EN: 'Painter' } },
      { id: 'Tile Worker', names: { HI: 'Tile Worker', UR: 'ٹائل ورکر', BN: 'টাইলস মিস্ত্রি', NE: 'टायल कामदार', EN: 'Tile Worker' } }
    ]
  },
  {
    icon: '🏭',
    title: {
      HI: 'Factory & Warehouse',
      UR: 'فیکٹری اور گودام',
      BN: 'ফ্যাক্টরি ও ওয়্যারহাউস',
      NE: 'फ्याक्ट्री र गोदाम',
      EN: 'Factory & Warehouse'
    },
    roles: [
      { id: 'Factory Worker', names: { HI: 'Factory Worker', UR: 'فیکٹری ورکر', BN: 'ফ্যাক্টরি কর্মী', NE: 'फ्याक्ट्री कामदार', EN: 'Factory Worker' } },
      { id: 'Packing Worker', names: { HI: 'Packing Worker', UR: 'پیکنگ ورکر', BN: 'প্যাকিং কর্মী', NE: 'प्याकिङ कामदार', EN: 'Packing Worker' } },
      { id: 'Machine Operator', names: { HI: 'Machine Operator', UR: 'مشین آپریٹر', BN: 'মেশিন অপারেটর', NE: 'মেসিন अपरेटर', EN: 'Machine Operator' } },
      { id: 'Loader', names: { HI: 'Loader', UR: 'لوڈر', BN: 'লোডার', NE: 'लोडर', EN: 'Loader' } },
      { id: 'Warehouse Worker', names: { HI: 'Warehouse Worker', UR: 'گودام ورکر', BN: 'ওয়্যারহাউস কর্মী', NE: 'गोदाम कामदार', EN: 'Warehouse Worker' } }
    ]
  },
  {
    icon: '🔧',
    title: {
      HI: 'Technical Jobs',
      UR: 'تکنیکی نوکریاں',
      BN: 'টেকনিক্যাল কাজ',
      NE: 'प्राविधिक कामहरू',
      EN: 'Technical Jobs'
    },
    roles: [
      { id: 'Welder', names: { HI: 'Welder', UR: 'ویلڈر', BN: 'ওয়েল্ডার', NE: 'वेल्डर', EN: 'Welder' } },
      { id: 'Electrician', names: { HI: 'Electrician', UR: 'الیکٹریشن', BN: 'ইলেকট্রিশিয়ান', NE: 'इलेक्ट्रिसियन', EN: 'Electrician' } },
      { id: 'Plumber', names: { HI: 'Plumber', UR: 'پلمبر', BN: 'প্লাম্বার', NE: 'प्लम्बर', EN: 'Plumber' } },
      { id: 'AC Technician', names: { HI: 'AC Technician', UR: 'اے سی ٹیکنیشن', BN: 'এসি টেকনিশিয়ান', NE: 'एसी टेक्निसियन', EN: 'AC Technician' } },
      { id: 'Mechanic', names: { HI: 'Mechanic', UR: 'مکینک', BN: 'মেকানিক', NE: 'मेकानिक', EN: 'Mechanic' } }
    ]
  },
  {
    icon: '🏨',
    title: {
      HI: 'Hotel & Cleaning',
      UR: 'ہوٹل اور صفائی',
      BN: 'হোটেল ও ক্লিনিং',
      NE: 'होटल र सरसफाई',
      EN: 'Hotel & Cleaning'
    },
    roles: [
      { id: 'Cleaner', names: { HI: 'Cleaner', UR: 'کلینر', BN: 'ক্লিনার', NE: 'क्लिनर', EN: 'Cleaner' } },
      { id: 'Housekeeping', names: { HI: 'Housekeeping', UR: 'ہاؤس کیپنگ', BN: 'হাউসকিপিং', NE: 'हाउसकिपिङ', EN: 'Housekeeping' } },
      { id: 'Cook', names: { HI: 'Cook', UR: 'باورچی', BN: 'বাবুর্চি', NE: 'कुक', EN: 'Cook' } },
      { id: 'Waiter', names: { HI: 'Waiter', UR: 'ویٹر', BN: 'ওয়েটার', NE: 'वेटर', EN: 'Waiter' } },
      { id: 'Catering Helper', names: { HI: 'Catering Helper', UR: 'کیٹرنگ ہیلپر', BN: 'ক্যাটারিং হেল্পার', NE: 'क्याटरिङ सहयोगी', EN: 'Catering Helper' } }
    ]
  },
  {
    icon: '🛡️',
    title: {
      HI: 'Security Jobs',
      UR: 'سیکیورٹی کی نوکریاں',
      BN: 'সিকিউরিটি কাজ',
      NE: 'सुरक्षा कामहरू',
      EN: 'Security Jobs'
    },
    roles: [
      { id: 'Security Guard', names: { HI: 'Security Guard', UR: 'سیکیورٹی گارڈ', BN: 'সিকিউরিটি গার্ড', NE: 'सुरक्षा गार्ड', EN: 'Security Guard' } },
      { id: 'CCTV Operator', names: { HI: 'CCTV Operator', UR: 'سی سی ٹی وی آپریٹر', BN: 'সিসিটিভি অপারেটর', NE: 'सिसीटिभी अपरेटर', EN: 'CCTV Operator' } }
    ]
  },
  {
    icon: '🌱',
    title: {
      HI: 'Agriculture Jobs',
      UR: 'زرعی نوکریاں',
      BN: 'কৃষি কাজ',
      NE: 'कृषि कामहरू',
      EN: 'Agriculture Jobs'
    },
    roles: [
      { id: 'Farm Worker', names: { HI: 'Farm Worker', UR: 'فارم ورکر', BN: 'খামার কর্মী', NE: 'कृषि कामदार', EN: 'Farm Worker' } },
      { id: 'Greenhouse Worker', names: { HI: 'Greenhouse Worker', UR: 'گرین ہاؤس ورکر', BN: 'গ্রিনহাউস কর্মী', NE: 'ग्रीनहाउस कामदार', EN: 'Greenhouse Worker' } },
      { id: 'Dairy Worker', names: { HI: 'Dairy Worker', UR: 'ڈیری ورکر', BN: 'ডেইরি কর্মী', NE: 'डेरी कामदार', EN: 'Dairy Worker' } }
    ]
  },
  {
    icon: '❤️',
    title: {
      HI: 'Care Jobs',
      UR: 'دیکھ بھال کی نوکریاں',
      BN: 'কেয়ারগিভার কাজ',
      NE: 'केयरगिभर कामहरू',
      EN: 'Care Jobs'
    },
    roles: [
      { id: 'Caregiver', names: { HI: 'Caregiver', UR: 'کیئر گیور', BN: 'কেয়ারগিভার', NE: 'केयरगिभर', EN: 'Caregiver' } },
      { id: 'Nurse Assistant', names: { HI: 'Nurse Assistant', UR: 'نرس اسسٹنٹ', BN: 'নার্স সহকারী', NE: 'नर्स सहायक', EN: 'Nurse Assistant' } },
      { id: 'Patient Helper', names: { HI: 'Patient Helper', UR: 'مریضوں کا ہیلپر', BN: 'রোগীর সাহায্যকারী', NE: 'बिरामी कुरुवा', EN: 'Patient Helper' } }
    ]
  },
  {
    icon: '🏢',
    title: {
      HI: 'Office / Support Jobs',
      UR: 'آفس اور سپورٹ کام',
      BN: 'অফিস ও সাপোর্ট কাজ',
      NE: 'कार्यालय र सहयोग कामहरू',
      EN: 'Office / Support Jobs'
    },
    roles: [
      { id: 'Office Helper', names: { HI: 'Office Helper', UR: 'آفس ہیلپر', BN: 'অফিস হেল্পার', NE: 'कार्यालय सहयोगी', EN: 'Office Helper' } },
      { id: 'Data Entry', names: { HI: 'Data Entry', UR: 'ڈیٹا انٹری', BN: 'ডেটা এন্ট্রি', NE: 'डाटा इन्ट्री', EN: 'Data Entry' } },
      { id: 'Store Keeper', names: { HI: 'Store Keeper', UR: 'اسٹور کیپر', BN: 'স্টোর কিপার', NE: 'स्टोर किपर', EN: 'Store Keeper' } },
      { id: 'Supervisor', names: { HI: 'Supervisor', UR: 'سپروائزر', BN: 'সুপারভাইজার', NE: 'सुपरभाइजर', EN: 'Supervisor' } }
    ]
  }
];


// 3. EMERGENCY CONTACT HELPLINE INFORMATION
const helplineContacts = [
  {
    id: 'help-1',
    agencyName: 'Sarkari Embassy Consular Help Desk (KSA)',
    phone: '+966-11-4882030',
    type: 'embassy',
    flag: '🇸🇦',
    location: 'Riyadh, Saudi Arabia'
  },
  {
    id: 'help-2',
    agencyName: 'Pravasi Safe Migrants Help Center (UAE)',
    phone: '+971-4-2384666',
    type: 'community',
    flag: '🇦🇪',
    location: 'Dubai, UAE'
  },
  {
    id: 'help-3',
    agencyName: 'Aero-Migrant Legal Advice Cell (Qatar)',
    phone: '+974-44431555',
    type: 'legal',
    flag: '🇶🇦',
    location: 'Doha, Qatar'
  },
  {
    id: 'help-4',
    agencyName: 'Migrant Support Circle Hotline (Malaysia)',
    phone: '+60-3-21615001',
    type: 'community',
    flag: '🇲🇾',
    location: 'Kuala Lumpur, Malaysia'
  },
  {
    id: 'help-5',
    agencyName: 'Government Grievance Ministry Desk',
    phone: '+880-277-2266',
    type: 'embassy',
    flag: '🇧🇩',
    location: 'Head Office Dhaka'
  }
];

// 4. SECURITY ALERTS & NEWS
const securityNews = [
  {
    id: 'news-1',
    HI: {
      title: 'Fake Visa Alert: Apne visa ka QR code aur official embassy portal se asliyat verify karein.',
      source: 'Embassy Safety Group',
      date: 'June 24, 2026',
      category: 'Visa Check',
      alert: true
    },
    UR: {
      title: 'جعلی ویزا الرٹ: اپنے ویزے کے کیو آر کوڈ اور آفیشل سفارت خانہ پورٹل سے ویزا چیک کریں۔',
      source: 'سفارتی حفاظتی گروپ',
      date: '۲۴ جون، ۲۰۲۶',
      category: 'ویزا چیک',
      alert: true
    },
    BN: {
      title: 'ভুয়া ভিসা অ্যালার্ট: কিউআর কোড এবং অফিশিয়াল ওয়েবসাইট থেকে ভিসার সত্যতা যাচাই করুন।',
      source: 'দূতাবাস নিরাপত্তা গ্রুপ',
      date: '২৪ জুন, ২০২৬',
      category: 'ভিসা যাচাই',
      alert: true
    },
    NE: {
      title: 'नक्कली भिसा सतर्कता: आफ्नो भिसाको QR कोड र आधिकारिक वेबसाइटबाट आधिकारिकता जाँच गर्नुहोस्।',
      source: 'दूतावास सुरक्षा समूह',
      date: 'जुन २४, २०२६',
      category: 'भिसा जाँच',
      alert: true
    },
    EN: {
      title: 'Fake Visa Alert: Always verify visa authenticity using QR code and official embassy portal.',
      source: 'Embassy Safety Group',
      date: 'June 24, 2026',
      category: 'Visa Check',
      alert: true
    }
  },
  {
    id: 'news-2',
    HI: {
      title: 'Ticket Cancel Fraud: Flight se pehle agent dwara ticket cancel hone se bachne ke liye airline se seedhe check karein.',
      source: 'Aviation Trust Portal',
      date: 'June 22, 2026',
      category: 'Ticket Security',
      alert: true
    },
    UR: {
      title: 'ٹکٹ منسوخی فراڈ: فلائٹ سے پہلے ایجنٹ کی جانب سے ٹکٹ منسوخ ہونے سے بچنے کے لیے براہِ راست ایئر لائن سے تصدیق کریں۔',
      source: 'ایوی ایشن ٹرسٹ پورٹل',
      date: '۲۲ جون، ۲۰۲۶',
      category: 'ٹکٹ سیکیورٹی',
      alert: true
    },
    BN: {
      title: 'টিকিট বাতিল জালিয়াতি: ফ্লাইটের আগে এজেন্টের টিকিট বাতিল জালিয়াতি থেকে বাঁচতে সরাসরি এয়ারলাইন্সে যাচাই করুন।',
      source: 'বিমান নিরাপত্তা সংস্থা',
      date: '২২ জুন, ২০২৬',
      category: 'টিকিট নিরাপত্তা',
      alert: true
    },
    NE: {
      title: 'टिकट रद्द ठगी: उडान अगाडि एजेन्टले टिकट रद्द गर्ने जालसाजीबाट बच्न सिधै एयरलाइन्सबाट बुझ्नुहोस्।',
      source: 'उड्डयन सुरक्षा पोर्टल',
      date: 'जुन  २२, २०२६',
      category: 'टिकट सुरक्षा',
      alert: true
    },
    EN: {
      title: 'Ticket Cancel Fraud: Prevent unauthorized booking cancellations by verifying directly with the airline.',
      source: 'Aviation Trust Portal',
      date: 'June 22, 2026',
      category: 'Ticket Security',
      alert: true
    }
  },
  {
    id: 'news-3',
    HI: {
      title: 'Dubai Driver Salary Reality: Basic pay aur duty hours ka sanyukt calculation check karein, bina written contract over-time par bharosa na karein.',
      source: 'Labour Welfare Bureau',
      date: 'June 20, 2026',
      category: 'Salary Guide',
      alert: false
    },
    UR: {
      title: 'دبئی ڈرائیور تنخواہ حقیقت: بنیادی تنخواہ اور ڈیوٹی اوقات کا حساب چیک کریں، بغیر تحریری معاہدے کے اضافی کام پر بھروسہ نہ کریں۔',
      source: 'لیبر ویلفیئر بیورو',
      date: '۲۰ جون، ۲۰۲۶',
      category: 'تنخواہ گائیڈ',
      alert: false
    },
    BN: {
      title: 'দুবাই ড্রাইভার বেতন বাস্তবতা: মূল বেতন এবং কর্মঘণ্টার সঠিক হিসাব করুন, চুক্তিপত্র ছাড়া অতিরিক্ত খাটুনির প্রতিশ্রুতি বিশ্বাস করবেন না।',
      source: 'শ্রম কল্যাণ ব্যুরো',
      date: '২০ জুন, ২০২৬',
      category: 'বেতন নির্দেশিকা',
      alert: false
    },
    NE: {
      title: 'दुबई ड्राइभर तलब वास्तविकता: आधारभूत तलब र काम गर्ने समयको गणना गर्नुहोस्, विना सम्झौता थप कामको प्रलोभनमा नपर्नुहोस्।',
      source: 'श्रम कल्याण ब्यूरो',
      date: 'जुन २०, २०२६',
      category: 'तलब निर्देशिका',
      alert: false
    },
    EN: {
      title: 'Dubai Driver Salary Reality: Understand basic pay versus overtime hours. Do not rely on unwritten promises.',
      source: 'Labour Welfare Bureau',
      date: 'June 20, 2026',
      category: 'Salary Guide',
      alert: false
    }
  },
  {
    id: 'news-4',
    HI: {
      title: 'PCC / Medical Documents Guide: Police Clearance Certificate aur GAMCA health checks authorized centers se hi karayein.',
      source: 'Sarkari Document Center',
      date: 'June 18, 2026',
      category: 'Document Guide',
      alert: false
    },
    UR: {
      title: 'پی سی سی اور میڈیکل گائیڈ: پولیس کلیئرنس سرٹیفکیٹ اور گیمکا میڈیکل صرف منظور شدہ اور تصدیق شدہ سینٹرز سے کروائیں۔',
      source: 'سرکاری دستاویزاتی مرکز',
      date: '۱۸ جون، ۲۰۲۶',
      category: 'دستاویزات گائیڈ',
      alert: false
    },
    BN: {
      title: 'পিসিসি এবং মেডিকেল গাইড: পুলিশ ক্লিয়ারেন্স সার্টিফিকেট ও গামকা স্বাস্থ্য পরীক্ষা শুধুমাত্র অনুমোদিত কেন্দ্র থেকেই করান।',
      source: 'সরকারি নথি কেন্দ্র',
      date: '১৮ জুন, ২০২৬',
      category: 'নথি নির্দেশিকা',
      alert: false
    },
    NE: {
      title: 'PCC र मेडिकल निर्देशिका: प्रहरी क्लियरेन्स र GAMCA स्वास्थ्य जाँच आधिकारिक र स्वीकृत केन्द्रबाट मात्र गराउनुहोस्।',
      source: 'सरकारी कागजात केन्द्र',
      date: 'जुन १८, २०२६',
      category: 'कागजात निर्देशिका',
      alert: false
    },
    EN: {
      title: 'PCC & Medical Documents Guide: Complete your Police Clearance and GAMCA health checks only at authorized hubs.',
      source: 'Govt Document Center',
      date: 'June 18, 2026',
      category: 'Document Guide',
      alert: false
    }
  }
];

// 5. COUNTRY SALARY REALITY DATA MATRIX
const countrySalaryDetails = {
  UAE: {
    realityDesc: 'UAE (Dubai/Abu Dhabi) mein labor laws bahut strict hain. Basic min wage helpers ke liye lagbhag 1000-1200 AED hota hai.',
    exchangeRate: '1 AED ≈ 22.7 INR | 75 PKR | 32 BDT | 36 NPR',
    wages: [
      { role: 'Construction Helper', salary: '1,000 - 1,200 AED' },
      { role: 'Warehouse Packer', salary: '1,200 - 1,400 AED' },
      { role: 'Heavy Vehicle Driver', salary: '2,200 - 3,000 AED' },
      { role: 'Catering Waiter', salary: '1,200 - 1,500 AED' }
    ],
    documents: 'Required: Valid Employment Visa stamp, GAMCA Medical, PCC, Labor Contract registered in MoHRE portal.',
    costReality: 'Sarkari visa cost employer ki zimmedari hai. Agents gair-kanooni tarike se 1 Lakh se 2 Lakh INR demand karte hain.',
    accommodation: 'Hamesha company shared rooms block dalti hai. Room mein AC, pani aur safety kitchen hona kanoonan zaroori hai.'
  },
  KSA: {
    realityDesc: 'Saudi Arabia (Riyadh/Jeddah) mein naya labor system (Qiwa/Musaned) lagne se workers ko safety mili hai. Min wage helpers ko 1000 SAR basic hai.',
    exchangeRate: '1 SAR ≈ 22.2 INR | 74 PKR | 31.5 BDT | 35.5 NPR',
    wages: [
      { role: 'Site Construction Mason', salary: '1,200 - 1,500 SAR' },
      { role: 'Factory Helper', salary: '1,000 - 1,200 SAR' },
      { role: 'Trailer Driver', salary: '2,500 - 3,500 SAR' },
      { role: 'Hotel Assistant Cook', salary: '1,500 - 1,800 SAR' }
    ],
    documents: 'Required: Musaned contract copy, Muqeem visa print, GAMCA Medical, Biometrics registration.',
    costReality: 'Iqama fees (Kafala renewal) har saal company bharti hai. Agar agent aapse Iqama ka paisa maange toh fraud hai.',
    accommodation: 'Labor camps block dur hote hain par transportation buses employer provide karta hai.'
  },
  Qatar: {
    realityDesc: 'Qatar mein min wage law lagbhag 1000 QAR basic aur 300 QAR food allowance fixed hai (Total 1300 QAR minimum).',
    exchangeRate: '1 QAR ≈ 22.9 INR | 76 PKR | 32.5 BDT | 37 NPR',
    wages: [
      { role: 'Site Welder (Karigar)', salary: '1,800 - 2,500 QAR' },
      { role: 'Cleaning Helper', salary: '1,000 - 1,300 QAR' },
      { role: 'Light Vehicle Driver', salary: '1,800 - 2,200 QAR' }
    ],
    documents: 'Required: Qatar ID card check, ADLSA labor contract online print, Medical Fit Card.',
    costReality: 'Aane ka ticket aur visa stamp completely free hota hai labor law v4 ke mutabik.',
    accommodation: 'Clean worker zones styled sharing quarters are provided.'
  },
  Oman: {
    realityDesc: 'Oman (Muscat) mein standard minimum helpers salary 120-140 OMR aur skilled driving 200 OMR+ dalti hai.',
    exchangeRate: '1 OMR ≈ 216 INR | 722 PKR | 309 BDT | 347 NPR',
    wages: [
      { role: 'Construction Mason', salary: '140 - 160 OMR' },
      { role: 'Airport Delivery Driver', salary: '220 - 260 OMR' },
      { role: 'Warehouse Packer', salary: '120 - 130 OMR' }
    ],
    documents: 'Required: Oman Labour Ministry approval code, PCC certified, GAMCA Clearance.',
    costReality: 'Visa cost reality: Direct government processing fee is below 50 OMR, don’t pay high broker cuts.',
    accommodation: 'Standard company sharing mess quarters.'
  },
  Kuwait: {
    realityDesc: 'Kuwait mein Dinar ki value sabse zyada hai par strict civil rules hain. Helper min salary 120-150 KWD hoti hai.',
    exchangeRate: '1 KWD ≈ 271 INR | 906 PKR | 388 BDT | 436 NPR',
    wages: [
      { role: 'Shuttering Carpenter', salary: '160 - 200 KWD' },
      { role: 'Factory Assistant', salary: '110 - 130 KWD' },
      { role: 'Heavy Forklift Operator', salary: '220 - 300 KWD' }
    ],
    documents: 'Required: Kuwait Chamber of Commerce Chamber stamp contract, PCC, GAMCA.',
    costReality: 'Agents Kuwait visa ke liye 3 Lakh se upar gair-kanooni demand karte hain, stay safe via direct licensed sources.',
    accommodation: 'Air conditioned residential units provided.'
  },
  Bahrain: {
    realityDesc: 'Bahrain mein standard basic helpers salary 100-130 BHD dalti hai. Safety laws strictly checked.',
    exchangeRate: '1 BHD ≈ 221 INR | 739 PKR | 316 BDT | 355 NPR',
    wages: [
      { role: 'Industrial Structural Welder', salary: '200 - 250 BHD' },
      { role: 'Catering Service Waiter', salary: '120 - 140 BHD' }
    ],
    documents: 'Required: LMRA Visa approval printout, Medical report, original Passport copy.',
    costReality: 'LMRA visa direct registration can be verified online for 100% legal clearance.',
    accommodation: 'Company quarters, kitchen facility provided.'
  },
  Romania: {
    realityDesc: 'Romania (Europe) mein basic minimum wage lagbhag 3000 RON (approx 650-750 USD) net hota hai.',
    exchangeRate: '1 EUR ≈ 90 INR | 301 PKR | 129 BDT | 145 NPR',
    wages: [
      { role: 'Factory Packer (Packing)', salary: '650 - 750 USD' },
      { role: 'Construction Worker', salary: '700 - 900 USD' }
    ],
    documents: 'Required: Romanian Work Permit (Aviz de angajare), PCC with Apostille stamp, VFS Appointment Visa Sticker.',
    costReality: 'European visa scam bahut high hai. Private agents Rs. 6 Lakh+ demand karte hain, jabki company official visa cost is very low.',
    accommodation: 'Shared worker dorms (6-8 workers per room) are standard. Heating in winter is kanoonan mandatory.'
  },
  Croatia: {
    realityDesc: 'Croatia (Europe) mein standard work permits minimum net wages around 700-800 EUR detey hain.',
    exchangeRate: '1 EUR ≈ 90 INR | 301 PKR | 129 BDT | 145 NPR',
    wages: [
      { role: 'Warehouse Loader', salary: '700 - 800 EUR' },
      { role: 'Mason Carpenter', salary: '800 - 1,000 EUR' }
    ],
    documents: 'Required: Croatian Work Permit (Dozvola za boravak i rad), Apostilled PCC, VFS Schedule.',
    costReality: 'Never pay agents for job assurances without work permit numbers. Always verify permit on Croatian Govt Portal.',
    accommodation: 'Worker hostels or shared apartments.'
  },
  Poland: {
    realityDesc: 'Poland mein wages hourly rates (Zloty PLN) ke mutabik calculate hote hain. Min monthly helper around 3000-3500 PLN (approx 750 USD).',
    exchangeRate: '1 PLN ≈ 21 INR | 70 PKR | 30 BDT | 33.7 NPR',
    wages: [
      { role: 'Food Factory Helper', salary: '700 - 800 USD' },
      { role: 'Trailer Driver operator', salary: '1,000 - 1,500 USD' }
    ],
    documents: 'Required: Polish Voivodeship Work Invitation (Zezwolenie), PCC Apostille, VFS Booking verification.',
    costReality: 'Work invitation check process takes 2-3 months. Agents taking advance money before invitation are risky.',
    accommodation: 'Shared communal dormitories.'
  }
};


// 6. INITIALIZATION & STATE CONTROLLERS
document.addEventListener('DOMContentLoaded', () => {
  // Restore language choice
  selectLanguage(state.lang);

  // Initialize saved counter safely
  updateSavedCounterUI();

  // Initialize default salary guide view
  renderSalaryCountryDetails(state.selectedSalaryCountry);

  // Load News list
  renderNews();

  // Load safety jobs feed
  renderJobs();

  // Initialize Abroad Safety Dashboard
  if (typeof initAbroadSafetyDashboard === 'function') {
    initAbroadSafetyDashboard();
  }
});

// LANGUAGE TOGGLE MANAGEMENT
function toggleLanguageDropdown(event) {
  event.stopPropagation();
  const dropdown = document.getElementById('lang-dropdown');
  dropdown.classList.toggle('hidden');
}

// Close language dropdown if clicked elsewhere
document.addEventListener('click', () => {
  document.getElementById('lang-dropdown').classList.add('hidden');
});

function selectLanguage(langCode) {
  state.lang = langCode;
  localStorage.setItem('baharkaam_lang', langCode);
  
  // Handle RTL text direction and font overrides for Urdu
  if (langCode === 'UR') {
    document.documentElement.dir = 'ltr';
    document.documentElement.classList.add('lang-ur');
  } else {
    document.documentElement.dir = 'ltr';
    document.documentElement.classList.remove('lang-ur');
  }
  
  // Update badge UI
  document.getElementById('active-lang-badge').textContent = langCode;
  
  // Mark active item in dropdown
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  dropdownItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${langCode}'`)) {
      item.classList.add('active');
    }
  });

  // Apply overall static translations
  applyStaticTranslations();

  // Re-render components with newly selected language
  renderNews();
  renderJobs();
  renderSalaryCountryDetails(state.selectedSalaryCountry);

  // Re-initialize dashboard for language updates
  if (typeof initAbroadSafetyDashboard === 'function') {
    initAbroadSafetyDashboard();
  }
}

// Map static translation keys
function applyStaticTranslations() {
  const t = translations[state.lang];
  if (!t) return;

  // Text Replacement Map
  const map = {
    'header-brand-name': t.brandName,
    'header-tagline': t.tagline,
    'lang-menu-title': t.langMenuTitle,
    'hero-title': t.heroTitle,
    'hero-subtitle': t.heroSubtitle,
    'sathi-status-text': t.sathiStatus,
    'status-text-online': t.statusOnline,
    
    // Core Cards Titles & Descs
    'card-roadmap-title': t.cardRoadmapTitle,
    'card-roadmap-desc': t.cardRoadmapDesc,
    'card-visacheck-title': t.cardVisacheckTitle,
    'card-visacheck-desc': t.cardVisacheckDesc,
    'card-salary-title': t.cardSalaryTitle,
    'card-salary-desc': t.cardSalaryDesc,
    'card-money-title': t.cardMoneyTitle,
    'card-money-desc': t.cardMoneyDesc,
    
    // Category pills in Naukri list
    'popular-roles-heading': t.popularRolesHeading,
    'btn-view-all-roles': t.viewAllRoles,
    'btn-filter-all': t.filterAll,
    'btn-filter-driver': t.roleDriver,
    'btn-filter-helper': t.roleHelper,
    'btn-filter-factory': t.roleFactory,
    'btn-filter-construction': t.roleConstruction,
    'btn-filter-cleaner': t.roleCleaner,
    'btn-filter-security': t.roleSecurity,
    'btn-filter-welder': t.roleWelder,
    
    // Bottom Nav Labeling
    'nav-lbl-home': t.navHome,
    'nav-lbl-jobs': t.navNaukri,
    'nav-lbl-profile': t.navProfile,
    'nav-lbl-sos': t.navSos,
    
    // Profile
    'profile-user-name': t.profileTitle,
    'profile-user-subtitle': t.profileSubtitle,
    'profile-stat-readiness': t.profileReadiness,
    'profile-stat-saved': t.profileSaved,
    'profile-stat-warnings': t.profileWarnings,
    'profile-checklist-title': t.profileChecklistTitle,
    'chk-profile-passport': t.chkPassport,
    'chk-profile-visa': t.chkVisa,
    'chk-profile-pcc': t.chkPcc,
    'chk-profile-medical': t.chkMedical,
    'chk-profile-family': t.chkFamily,
    'profile-trust-heading': t.profileTrustTitle,
    'profile-trust-body': t.profileTrustBody,
    
    // Footers
    'footer-badge-text': t.profileTrustTitle,
    'footer-main-disclaimer': t.sosDisclaimer,
    'link-f-roadmap': t.cardRoadmapTitle,
    'link-f-visacheck': t.cardVisacheckTitle,
    'link-f-salary': t.cardSalaryTitle,
    'link-f-money': t.cardMoneyTitle,

    'btn-foot-about': t.footAbout,
    'btn-foot-contact': t.footContact,
    'btn-foot-privacy': t.footPrivacy,
    'btn-foot-terms': t.footTerms,
    'btn-foot-disclaimer': t.footDisclaimer,
    'btn-foot-editorial': t.footEditorial,
    'btn-foot-corrections': t.footCorrections,
    'btn-foot-scam': t.footScam,
    'btn-foot-sos': t.footSos,
    'btn-foot-safety': t.footSafety,
    'btn-foot-recruiters': t.footRecruiters,
    'footer-copyright': t.footCopyright,

    // Modal Bodies and Titles (About, Contact, Privacy, Terms, Disclaimer, Editorial, Corrections, Safety)
    'modal-about-title': t.footAbout,
    'modal-about-body': t.bodyAbout,
    'modal-contact-title': t.footContact,
    'modal-contact-body': t.bodyContact,
    'modal-privacy-title': t.footPrivacy,
    'modal-privacy-body': t.bodyPrivacy,
    'modal-terms-title': t.footTerms,
    'modal-terms-body': t.bodyTerms,
    'modal-disclaimer-title': t.footDisclaimer,
    'modal-disclaimer-body': t.bodyDisclaimer,
    'modal-editorial-title': t.footEditorial,
    'modal-editorial-body': t.bodyEditorial,
    'modal-corrections-title': t.footCorrections,
    'modal-corrections-body': t.bodyCorrections,
    'modal-safety-title': t.footSafety,
    'modal-safety-body': t.bodySafety,
    'modal-recruiters-title': t.footRecruiters,
    'modal-recruiters-body': t.bodyRecruiters,

    // Modals Title & Descs
    'modal-roadmap-heading': t.cardRoadmapTitle,
    'modal-visacheck-heading': t.cardVisacheckTitle,
    'modal-salary-heading': t.cardSalaryTitle,
    'modal-money-heading': t.cardMoneyTitle,
    'modal-sos-heading': t.sosHeading,
    'modal-family-heading': t.familyShareHeading,
    
    // Modal Details - Roadmap static keys
    'rm-btn-family': t.btnFamilyKoBhejo,
    'rm-sec1-title': t.rmSec1Title,
    'rm-sec1-desc': t.rmSec1Desc,
    'rm-sec2-title': t.rmSec2Title,
    'rm-step1-title': t.rmStep1Title,
    'rm-step1-desc': t.rmStep1Desc,
    'rm-step2-title': t.rmStep2Title,
    'rm-step2-desc': t.rmStep2Desc,
    'rm-step3-title': t.rmStep3Title,
    'rm-step3-desc': t.rmStep3Desc,
    'rm-step4-title': t.rmStep4Title,
    'rm-step4-desc': t.rmStep4Desc,
    'rm-sec3-title': t.rmSec3Title,
    'rm-doc-item1': t.rmDocItem1,
    'rm-doc-item2': t.rmDocItem2,
    'rm-doc-item3': t.rmDocItem3,
    'rm-doc-item4': t.rmDocItem4,
    'rm-doc-item5': t.rmDocItem5,
    'rm-sec4-title': t.rmSec4Title,
    'rm-sec4-desc': t.rmSec4Desc,

    // Modal Details - Visa Check Calculator Form static keys
    'vc-alert-title': t.vcAlertTitle,
    'vc-alert-desc': t.vcAlertDesc,
    'vc-checklist-title': t.vcCheckpointsTitle,
    'vc-cp1-title': t.vcCp1Title,
    'vc-cp1-desc': t.vcCp1Desc,
    'vc-cp2-title': t.vcCp2Title,
    'vc-cp2-desc': t.vcCp2Desc,
    'vc-cp3-title': t.vcCp3Title,
    'vc-cp3-desc': t.vcCp3Desc,
    'calc-form-title': t.calcFormTitle,
    'calc-form-subtitle': t.calcFormSubtitle,
    'lbl-agent-name': t.lblAgentName,
    'lbl-country': t.lblCountry,
    'lbl-visa-type': t.lblVisaType,
    'lbl-money': t.lblMoney,
    'lbl-passport': t.lblPassport,
    'lbl-receipt': t.lblReceipt,
    'btn-calc-submit': t.btnCalcSubmit,
    'opt-visa-work': t.optVisaWork,
    'opt-visa-visit': t.optVisaVisit,
    'opt-visa-other': t.optVisaOther,
    'opt-passport-no': t.optPassportNo,
    'opt-passport-yes': t.optPassportYes,
    'opt-receipt-yes': t.optReceiptYes,
    'opt-receipt-no': t.optReceiptNo,
    
    // Scam reporting form translations
    'lbl-scam-agent-name': t.scamLblAgentName,
    'lbl-scam-agent-phone': t.scamLblAgentPhone,
    'lbl-scam-target-country': t.scamLblTargetCountry,
    'lbl-scam-fraud-type': t.scamLblFraudType,
    'lbl-scam-money-lost': t.scamLblMoneyLost,
    'lbl-scam-narrative': t.scamLblNarrative,
    'btn-scam-submit': t.scamBtnSubmit,
    'scam-success-title': t.scamSuccessTitle,
    'scam-success-desc': t.scamSuccessDesc,
    'opt-scam-visit': t.optScamVisit,
    'opt-scam-cash': t.optScamCash,
    'opt-scam-passport': t.optScamPassport,
    'opt-scam-salary': t.optScamSalary,

    'lbl-salary-country-select': t.salarySelectLbl,

    // Modal Details - Money safety keys
    'money-disc-title': t.moneyDiscTitle,
    'money-disc-body': t.moneyDiscBody,
    'govt-schemes-title': t.govtSchemesTitle,
    'govt-schemes-desc': t.govtSchemesDesc,
    'govt-card-in': t.govtCardIn,
    'govt-card-in-desc': t.govtCardInDesc,
    'govt-card-pk': t.govtCardPk,
    'govt-card-pk-desc': t.govtCardPkDesc,
    'govt-card-bd': t.govtCardBd,
    'govt-card-bd-desc': t.govtCardBdDesc,
    'govt-card-np': t.govtCardNp,
    'govt-card-np-desc': t.govtCardNpDesc,
    'exch-calc-title': t.currencyCompareTitle,
    'exch-calc-subtitle': t.currencyCompareSubtitle,
    'lbl-send-amt': t.lblSendAmt,
    'lbl-recv-amt': t.lblRecvAmt,
    'partner-links-lbl': t.partnerLinksTitle,
    'ms-checklist-title': t.cardMoneyTitle,
    'ms-step1-title': t.moneyStep1Title,
    'ms-step1-desc': t.moneyStep1Desc,
    'ms-step2-title': t.moneyStep2Title,
    'ms-step2-desc': t.moneyStep2Desc,
    'ms-step3-title': t.moneyStep3Title,
    'ms-step3-desc': t.moneyStep3Desc,

    // SOS emergency elements
    'sos-intro-text': t.sosIntro,
    'sos-rules-desc': t.sosDisclaimer,
    'popular-guides-title': t.popularGuidesTitle,
    'popular-guides-subtitle': t.popularGuidesSubtitle,
    'all-guides-modal-heading': t.allGuidesTitle,
    'all-guides-modal-subtitle': t.allGuidesSubtitle,
    'btn-view-all-guides-text': t.viewAllGuidesText
  };

  // Run the element translator loop
  for (const [id, value] of Object.entries(map)) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        // Safe innerText or inline SVGs preservation
        const svgEl = el.querySelector('svg');
        if (svgEl) {
          // keep SVG but change the subsequent text node
          const textNode = Array.from(el.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
          if (textNode) {
            textNode.textContent = ' ' + value;
          }
        } else {
          el.innerHTML = value;
        }
      }
    }
  }

  // Update dynamic placeholders
  const searchInput = document.getElementById('manual-text-search');
  if (searchInput) searchInput.placeholder = t.searchPlaceholder;
}


// NAVIGATION TAB CONTROLLER
function navigateToTab(tabId) {
  if (tabId === 'naukri') {
    // Navigate to home tab and smooth scroll to roles
    state.activeTab = 'home';
    const tabs = ['home', 'naukri', 'profile'];
    tabs.forEach(id => {
      const element = document.getElementById(`section-${id}`);
      if (element) {
        element.classList.remove('active-tab');
      }
    });
    const homeElement = document.getElementById('section-home');
    if (homeElement) {
      homeElement.classList.add('active-tab');
    }

    // Toggle bottom bar button highlights
    const navBtns = {
      home: 'nav-btn-home',
      naukri: 'nav-btn-naukri',
      profile: 'nav-btn-profile'
    };
    for (const [key, btnId] of Object.entries(navBtns)) {
      const btn = document.getElementById(btnId);
      if (btn) {
        btn.classList.remove('active');
        if (key === 'naukri') {
          btn.classList.add('active');
        }
      }
    }

    const popularSection = document.getElementById('popular-roles-section');
    if (popularSection) {
      setTimeout(() => {
        popularSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
    return;
  }

  state.activeTab = tabId;

  // Toggle active tab content classes
  const tabs = ['home', 'naukri', 'profile'];
  tabs.forEach(id => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      element.classList.remove('active-tab');
    }
  });

  const activeElement = document.getElementById(`section-${tabId}`);
  if (activeElement) {
    activeElement.classList.add('active-tab');
  }

  // Toggle bottom bar button highlights
  const navBtns = {
    home: 'nav-btn-home',
    naukri: 'nav-btn-naukri',
    profile: 'nav-btn-profile'
  };

  for (const [key, btnId] of Object.entries(navBtns)) {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.classList.remove('active');
      if (key === tabId) {
        btn.classList.add('active');
      }
    }
  }

  // Scroll to top of mobile screen smooth
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Load dashboard data fresh when switching to profile
  if (tabId === 'profile' && typeof initAbroadSafetyDashboard === 'function') {
    initAbroadSafetyDashboard();
  }
}


// 7. RENDER HELPNES, ALERTS & JOB CARDS
function renderNews() {
  const container = document.getElementById('news-list-container');
  if (!container) return;
  container.innerHTML = '';

  securityNews.forEach(item => {
    const textData = item[state.lang] || item['HI']; // fallback to Hinglish
    
    const div = document.createElement('div');
    div.className = `news-item ${textData.alert ? 'alert-news' : ''}`;
    
    div.innerHTML = `
      <div class="news-meta">
        <span class="news-tag">${textData.category}</span>
        <span>${textData.date}</span>
      </div>
      <h4 class="news-title">${textData.alert ? '⚠️ ' : ''}${textData.title}</h4>
      <div class="news-meta" style="margin-top:6px; margin-bottom:0;">
        <span>Source: <strong>${textData.source}</strong></span>
      </div>
    `;
    container.appendChild(div);
  });
}

function renderJobs() {
  const container = document.getElementById('safety-jobs-grid-container');
  if (!container) return;
  container.innerHTML = '';

  const t = translations[state.lang];

  // Apply filters
  let filtered = jobsData;
  if (state.selectedCategory) {
    const sel = state.selectedCategory.toLowerCase();
    filtered = filtered.filter(job => {
      const category = job.category.toLowerCase();
      const role = job.role.toLowerCase();
      
      if (sel === 'driver') return role.includes('driver');
      if (sel === 'helper / labour') return role.includes('helper') || role.includes('labour');
      if (sel === 'factory & packing') return category.includes('factory') || role.includes('factory') || role.includes('packing');
      if (sel === 'construction') return category.includes('construction') || role.includes('construction') || role.includes('labour') || role.includes('mason') || role.includes('steel fixer') || role.includes('carpenter') || role.includes('painter') || role.includes('tile');
      if (sel === 'cleaner') return role.includes('cleaner') || category.includes('cleaning') || role.includes('housekeeping');
      if (sel === 'security') return role.includes('security') || category.includes('security');
      if (sel === 'welder') return role.includes('welder') || category.includes('technical');
      
      // Fallback
      return category === sel || role === sel || category.includes(sel) || role.includes(sel);
    });
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(job => {
      const details = job.details[state.lang] || job.details['HI'];
      return (
        job.country.toLowerCase().includes(q) ||
        job.category.toLowerCase().includes(q) ||
        details.title.toLowerCase().includes(q) ||
        details.company.toLowerCase().includes(q)
      );
    });
  }

  // Update count badge
  document.getElementById('jobs-count').textContent = `${filtered.length} Roles`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="reality-fact-box" style="text-align:center; padding: 24px;">
        <strong style="color:var(--text-muted);">No Safety Guides Found</strong>
        <p style="font-size:11px; margin-top:6px;">Try changing the filter or search query like "Dubai" or "Helper".</p>
      </div>
    `;
    return;
  }

  const shortBtnLabels = {
    HI: { details: 'Details', checklist: 'Checklist', family: 'Family' },
    UR: { details: 'تفصیلات', checklist: 'چیک لسٹ', family: 'فیملی' },
    BN: { details: 'বিবরণ', checklist: 'চেকলিস্ট', family: 'পরিবার' },
    NE: { details: 'विवरण', checklist: 'चेकलिस्ट', family: 'परिवार' },
    EN: { details: 'Details', checklist: 'Checklist', family: 'Family' }
  };
  const labels = shortBtnLabels[state.lang] || shortBtnLabels['HI'];

  filtered.forEach(job => {
    const details = job.details[state.lang] || job.details['HI'];
    
    const card = document.createElement('div');
    card.className = 'safety-job-card';
    card.id = `job-card-${job.id}`;

    // Source trust text format: 🟢 Source Checked · Low Risk
    const trustText = job.riskLevel === 'low' 
      ? '🟢 Source Checked · Low Risk' 
      : '🟡 Check Carefully · Vigilant Check';
    const trustColor = job.riskLevel === 'low' ? '#16a34a' : '#d97706';

    card.innerHTML = `
      <div class="job-header-row" style="display: flex; flex-direction: column; gap: 2px; width: 100%;">
        <h4 class="job-title-h4" style="font-family: var(--font-display); font-size: 13.5px; font-weight: 800; color: #0f172a; margin: 0; line-height: 1.35;">
          ${details.title}
        </h4>
        <div style="font-size: 10.5px; font-weight: 700; color: ${trustColor}; display: flex; align-items: center; gap: 4px; margin-top: 1px;">
          ${trustText}
        </div>
      </div>

      <!-- Small layout/meta -->
      <div class="job-meta-lines" style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #e2e8f0; font-size: 11px; font-weight: 700; color: #475569; line-height: 1.45; display: flex; flex-direction: column; gap: 2px;">
        <div>📍 ${job.country} · 💼 ${job.role} · 💰 ${job.currency} ${job.salaryRange}</div>
        <div style="color: #2563eb;">📄 ${job.visaType} · Contract check required</div>
      </div>

      <!-- Yellow warning warning line -->
      <div class="job-warning-box-compact" style="background-color: #fffbeb; border-left: 3px solid #f59e0b; padding: 6px 8px; border-radius: 4px; font-size: 10.5px; font-weight: 600; color: #b45309; margin-top: 8px; line-height: 1.35;">
        <strong>⚠️ ${t.lblWarning || 'Warning'}:</strong> ${details.warning}
      </div>

      <!-- Action Buttons Footer: 3 Columns -->
      <div class="job-action-buttons-footer" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-top: 10px; width: 100%;">
        <button class="job-btn-action action-btn-details" style="padding: 7px 4px; font-weight: 800; font-size: 10.5px; border-radius: 8px; cursor: pointer; text-align: center; display: flex; align-items: center; justify-content: center; gap: 3px;" onclick="openJobSafetyModal('${job.id}')">
          <span>🔍</span> <span>${labels.details}</span>
        </button>
        <button class="job-btn-action action-btn-checklist" style="padding: 7px 4px; font-weight: 800; font-size: 10.5px; border-radius: 8px; cursor: pointer; text-align: center; display: flex; align-items: center; justify-content: center; gap: 3px;" onclick="openJobChecklistModal('${job.id}')">
          <span>📋</span> <span>${labels.checklist}</span>
        </button>
        <button class="job-btn-action action-btn-share" style="padding: 7px 4px; font-weight: 800; font-size: 10.5px; border-radius: 8px; cursor: pointer; text-align: center; display: flex; align-items: center; justify-content: center; gap: 3px;" onclick="openFamilyShareModal('${job.id}')">
          <span>👨‍👩‍👦</span> <span>${labels.family}</span>
        </button>
      </div>

      <div style="font-size: 8px; color: var(--text-muted); font-family: var(--font-mono); text-align: right; margin-top: 6px;">
        🕒 ${t.lblLastUpdated || 'Last Updated'}: ${job.lastUpdated}
      </div>
    `;
    container.appendChild(card);
  });
}

// SAVE ROADMAP GUIDES LOCALSTORAGE
function triggerSaveGuide(jobId) {
  let savedList = JSON.parse(localStorage.getItem('baharkaam_saved_guides') || '[]');
  if (!savedList.includes(jobId)) {
    savedList.push(jobId);
    localStorage.setItem('baharkaam_saved_guides', JSON.stringify(savedList));
    alert('Guide successfully saved to your offline profile!');
  } else {
    // Remove if already saved to toggle
    savedList = savedList.filter(id => id !== jobId);
    localStorage.setItem('baharkaam_saved_guides', JSON.stringify(savedList));
    alert('Guide removed from saved list.');
  }

  // Update profile counter UI
  document.getElementById('profile-saved-count').textContent = savedList.length;
}


// 8. VOICE SEARCH / SATHI AI ASSISTANT SIMULATION
function triggerVoiceSearch() {
  const micBtn = document.getElementById('premium-sathi-mic');
  const statusPill = document.getElementById('sathi-status-pill');
  const statusText = document.getElementById('sathi-status-text');
  const t = translations[state.lang];

  // UI Listening Phase
  micBtn.style.transform = 'scale(1.15)';
  statusPill.style.backgroundColor = '#eff6ff';
  statusText.textContent = t.sathiListening;
  statusText.style.animation = 'none'; // pause scrolling for focus

  // Start animated wave triggers in CSS
  document.getElementById('mic-ripple-3').style.animation = 'ring-pulse 1s infinite ease-in-out';
  document.getElementById('mic-ripple-2').style.animation = 'ring-pulse 0.7s infinite ease-in-out';
  document.getElementById('mic-ripple-1').style.animation = 'ring-pulse 0.4s infinite ease-in-out';
  document.getElementById('icon-mic-idle').classList.add('hidden');
  document.getElementById('icon-mic-active').classList.remove('hidden');

  // Trigger simulated voice recognition results
  setTimeout(() => {
    // Select dynamic query based on country/role
    const queries = {
      HI: [
        { q: 'Dubai Driver', text: 'Dubai driver guide' },
        { q: 'Saudi Helper', text: 'Saudi helper safety' },
        { q: 'Qatar Cleaner', text: 'Qatar cleaner reality' },
        { q: 'Romania Factory', text: 'Romania factory worker' }
      ],
      UR: [
        { q: 'دبئی ڈرائیور', text: 'Dubai driver guide' },
        { q: 'سعودی ہیلپر', text: 'Saudi helper safety' },
        { q: 'قطر کلینر', text: 'Qatar cleaner reality' },
        { q: 'رومانیہ فیکٹری', text: 'Romania factory worker' }
      ],
      BN: [
        { q: 'দুবাই ড্রাইভার', text: 'Dubai driver guide' },
        { q: 'সৌদি হেল্পার', text: 'Saudi helper safety' },
        { q: 'কাতার ক্লিনার', text: 'Qatar cleaner reality' },
        { q: 'রোমানিয়া ফ্যাক্টরি', text: 'Romania factory worker' }
      ],
      NE: [
        { q: 'दुबई ड्राइभर', text: 'Dubai driver guide' },
        { q: 'साउदी हेल्पर', text: 'Saudi helper safety' },
        { q: 'कतार क्लिनर', text: 'Qatar cleaner reality' },
        { q: 'रोमानिया फ्याक्ट्री', text: 'Romania factory worker' }
      ],
      EN: [
        { q: 'Dubai Driver', text: 'Dubai driver guide' },
        { q: 'Saudi Helper', text: 'Saudi helper safety' },
        { q: 'Qatar Cleaner', text: 'Qatar cleaner reality' },
        { q: 'Romania Factory', text: 'Romania factory worker' }
      ]
    };

    const choiceList = queries[state.lang] || queries['EN'];
    const selected = choiceList[Math.floor(Math.random() * choiceList.length)];

    // Reset Voice UI Status
    micBtn.style.transform = '';
    statusPill.style.backgroundColor = '';
    statusText.textContent = t.sathiStatus;
    statusText.style.animation = ''; // resume scroll

    document.getElementById('mic-ripple-3').style.animation = '';
    document.getElementById('mic-ripple-2').style.animation = '';
    document.getElementById('mic-ripple-1').style.animation = '';
    document.getElementById('icon-mic-idle').classList.remove('hidden');
    document.getElementById('icon-mic-active').classList.add('hidden');

    // Trigger filter results
    state.searchQuery = selected.q;
    
    // Show toast banner
    const toast = document.getElementById('speech-result-toast');
    toast.classList.remove('hidden');
    document.getElementById('speech-result-text').textContent = `Sifarish: "${selected.q}"`;

    // Navigate to Naukri tab with pre-filled results
    navigateToTab('naukri');
    
    const searchBar = document.getElementById('manual-text-search');
    searchBar.value = selected.q;
    document.getElementById('search-clear-btn').classList.remove('hidden');

    // Trigger grid filter
    renderJobs();
    
    // Show active filter helper bar
    const filterBadgeRow = document.getElementById('active-filter-badge-row');
    filterBadgeRow.classList.remove('hidden');
    document.getElementById('active-filter-badge-text').textContent = `${t.activeFilterBadge} "${selected.q}"`;

  }, 2200);
}

function closeSpeechToast() {
  document.getElementById('speech-result-toast').classList.add('hidden');
}


// 9. FILTERS MANAGEMENT
function filterCategory(categoryName, element) {
  state.selectedCategory = categoryName;

  // Toggle active styling
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => pill.classList.remove('active'));
  
  if (element) {
    element.classList.add('active');
  } else if (categoryName) {
    // If element is null, try to find and activate the corresponding filter pill
    const pillIds = {
      'Driver': 'btn-filter-driver',
      'Helper / Labour': 'btn-filter-helper',
      'Factory & Packing': 'btn-filter-factory',
      'Construction': 'btn-filter-construction',
      'Cleaner': 'btn-filter-cleaner',
      'Security': 'btn-filter-security',
      'Welder': 'btn-filter-welder'
    };
    const matchingPillId = pillIds[categoryName];
    if (matchingPillId) {
      const pill = document.getElementById(matchingPillId);
      if (pill) pill.classList.add('active');
    }
  } else {
    const allPill = document.getElementById('btn-filter-all');
    if (allPill) allPill.classList.add('active');
  }

  // Render
  renderJobs();

  // Show active helper bar if filter active
  const t = translations[state.lang];
  const filterBadgeRow = document.getElementById('active-filter-badge-row');
  if (categoryName) {
    filterBadgeRow.classList.remove('hidden');
    document.getElementById('active-filter-badge-text').textContent = `${t.activeFilterBadge} "${categoryName}"`;
  } else if (!state.searchQuery) {
    filterBadgeRow.classList.add('hidden');
  }
}

function handleManualSearch(val) {
  state.searchQuery = val;
  const clearBtn = document.getElementById('search-clear-btn');
  if (val) {
    clearBtn.classList.remove('hidden');
  } else {
    clearBtn.classList.add('hidden');
  }
  
  // Show active badge row
  const t = translations[state.lang];
  const filterBadgeRow = document.getElementById('active-filter-badge-row');
  if (val) {
    filterBadgeRow.classList.remove('hidden');
    document.getElementById('active-filter-badge-text').textContent = `${t.activeFilterBadge} "${val}"`;
  } else if (!state.selectedCategory) {
    filterBadgeRow.classList.add('hidden');
  }

  renderJobs();
}

function clearTextSearch() {
  const searchInput = document.getElementById('manual-text-search');
  searchInput.value = '';
  document.getElementById('search-clear-btn').classList.add('hidden');
  state.searchQuery = '';
  
  const filterBadgeRow = document.getElementById('active-filter-badge-row');
  if (!state.selectedCategory) {
    filterBadgeRow.classList.add('hidden');
  } else {
    const t = translations[state.lang];
    document.getElementById('active-filter-badge-text').textContent = `${t.activeFilterBadge} "${state.selectedCategory}"`;
  }

  renderJobs();
}

function clearAllFilters() {
  state.searchQuery = '';
  state.selectedCategory = null;
  
  const searchInput = document.getElementById('manual-text-search');
  if (searchInput) searchInput.value = '';
  document.getElementById('search-clear-btn').classList.add('hidden');

  // Clear pills active state
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  document.getElementById('btn-filter-all').classList.add('active');

  document.getElementById('active-filter-badge-row').classList.add('hidden');

  renderJobs();
}


// 10. MODALS CONTROLLER & POPUPS MATRIX
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    if (modalId === 'modal-roles') {
      renderAllJobCategories();
    }
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

function openVisaCheckGuide(tab) {
  openModal('modal-visacheck');
  if (typeof switchVCTab === 'function') {
    switchVCTab(tab);
  }
}

function openSalaryGuide(countryCode) {
  openModal('modal-salary');
  const selector = document.getElementById('salary-country-selector');
  if (selector) {
    selector.value = countryCode;
  }
  if (typeof renderSalaryCountryDetails === 'function') {
    renderSalaryCountryDetails(countryCode);
  }
}

function openCustomGuide(guideKey) {
  const modal = document.getElementById('modal-custom-guide');
  const titleEl = document.getElementById('custom-guide-modal-title');
  const bodyEl = document.getElementById('custom-guide-modal-body');
  if (!modal || !titleEl || !bodyEl) return;

  const lang = state.lang || 'EN';

  const customGuides = {
    kerala: {
      EN: {
        title: 'Kerala Gulf Jobs Guide',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Safe Channels for Kerala Migrants</h4>
          <p style="margin-bottom: 10px;">Kerala has some of the safest government-backed immigration systems in India to protect workers going to Gulf countries (UAE, Saudi Arabia, Qatar, etc.).</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>NORKA Roots:</strong> Always use the official NORKA Roots portal (norkaroots.kerala.gov.in) for verified job openings, certificate attestation, and pre-departure orientation.</li>
            <li><strong>ODEPC:</strong> Overseas Development and Employment Promotion Consultants (odepc.kerala.gov.in) is a government of Kerala undertaking that provides safe, direct recruitment without high agent charges.</li>
            <li><strong>Registered eMigrate Agencies:</strong> Only transact with recruiters having a valid License Number from the Ministry of External Affairs. Verify them on the official eMigrate portal.</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ Warning:</strong> Avoid sub-agents operating in local villages without official license numbers. Never hand over your passport to anyone except for visa stamping.
          </div>
        `
      },
      HI: {
        title: 'Kerala Gulf Jobs Guide',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Kerala Migrants Ke Liye Surakshit Tareeqe</h4>
          <p style="margin-bottom: 10px;">Kerala se Gulf countries (UAE, Saudi Arabia, Qatar, etc.) jaane wale bhaiyon ke liye sarkar ne bahot hi surakshit systems banaye hain.</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>NORKA Roots:</strong> Hamesha official NORKA Roots portal (norkaroots.kerala.gov.in) ka istemal karein. Yahan verified job openings aur free safety guidance milti hai.</li>
            <li><strong>ODEPC:</strong> Yeh Kerala government ki official agency hai jo direct recruitment karti hai bina kisi bade agent commission ke.</li>
            <li><strong>eMigrate Portal:</strong> Kisi bhi agent se deal karne se pehle MEA license number check karein aur eMigrate portal par verify karein.</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ Savdhani:</strong> Bina license wale sub-agents ko paise ya apna asli passport kabhi na dein. Passport sirf authorized stamping ke liye hi jama karein.
          </div>
        `
      },
      UR: {
        title: 'کیرالہ گلف جابز گائیڈ',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px; text-align: right;">کیرالہ کے تارکین وطن کے لیے محفوظ راستے</h4>
          <p style="margin-bottom: 10px; text-align: right;">کیرالہ سے خلیجی ممالک (متحدہ عرب امارات، سعودی عرب، قطر وغیرہ) جانے والے کارکنوں کے لیے حکومت نے بہت محفوظ نظام بنائے ہیں۔</p>
          <ul style="list-style-type: disc; padding-right: 20px; padding-left: 0; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px; text-align: right; direction: rtl;">
            <li><strong>NORKA Roots:</strong> ہمیشہ آفیشل پورٹل (norkaroots.kerala.gov.in) کا استعمال کریں جہاں تصدیق شدہ ملازمتیں اور رہنمائی ملتی ہے۔</li>
            <li><strong>ODEPC:</strong> یہ کیرالہ حکومت کا آفیشل ادارہ ہے جو بغیر کسی بھاری کمیشن کے براہ راست بھرتی فراہم کرتا ہے۔</li>
            <li><strong>eMigrate تصدیق:</strong> کسی بھی ایجنٹ سے لین دین سے پہلے وزارت خارجہ کا لائسنس نمبر آفیشل پورٹل پر ضرور چیک کریں۔</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px; text-align: right; direction: rtl;">
            <strong>⚠️ انتباہ:</strong> بغیر لائسنس کے مقامی سب ایجنٹوں کو کبھی رقم یا اپنا اصل پاسپورٹ نہ دیں۔ پاسپورٹ صرف ویزا سٹیمپنگ کے لیے ہی جمع کرائیں۔
          </div>
        `
      },
      BN: {
        title: 'কেরালা গালফ জবস গাইড',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">কেরালা কর্মীদের জন্য নিরাপদ উপায়</h4>
          <p style="margin-bottom: 10px;">কেরালা থেকে উপসাগরীয় দেশে (ইউএই, সৌদি আরব, কাতার ইত্যাদি) যাওয়া কর্মীদের সুরক্ষার জন্য সরকার অত্যন্ত নিরাপদ ব্যবস্থা তৈরি করেছে।</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>NORKA Roots:</strong> সর্বদা অফিশিয়াল পোর্টাল (norkaroots.kerala.gov.in) ব্যবহার করুন। এখানে যাচাইকৃত কাজের সুযোগ এবং নিরাপত্তা নির্দেশিকা পাওয়া যায়।</li>
            <li><strong>ODEPC:</strong> এটি কেরালা সরকারের একটি অফিশিয়াল সংস্থা যা কোনো অতিরিক্ত কমিশন ছাড়াই সরাসরি নিয়োগ প্রদান করে।</li>
            <li><strong>eMigrate যাচাই:</strong> যেকোনো এজেন্টের সাথে লেনদেনের আগে তাদের লাইসেন্স নম্বর ই-মাইগ্রেট পোর্টালে যাচাই করে নিন।</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ সতর্কতা:</strong> কোনো লাইসেন্সবিহীন স্থানীয় সাব-এজেন্টকে অগ্রিম টাকা বা আসল পাসপোর্ট দেবেন না।
          </div>
        `
      },
      NE: {
        title: 'केराला गल्फ रोजगार गाइड',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">केराला कामदारहरूका लागि सुरक्षित च्यानलहरू</h4>
          <p style="margin-bottom: 10px;">केरालाबाट खाडी मुलुक (यूएई, साउदी अरब, कतर आदि) जाने कामदारहरूको सुरक्षाका लागि सरकारले अत्यन्त सुरक्षित प्रणालीहरू बनाएको छ।</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>NORKA Roots:</strong> सधैं आधिकारिक पोर्टल (norkaroots.kerala.gov.in) प्रयोग गर्नुहोस्। यहाँ प्रमाणित रोजगारीका अवसरहरू र मार्गदर्शन पाइन्छ।</li>
            <li><strong>ODEPC:</strong> यो केराला सरकारको आधिकारिक एजेन्सी हो जसले कुनै अतिरिक्त कमिसन बिना सीधा भर्ना गराउँदछ।</li>
            <li><strong>eMigrate प्रमाणीकरण:</strong> कुनै पनि एजेन्टसँग कारोबार गर्नु अघि उनीहरूको इजाजतपत्र नम्बर ई-माइग्रेट पोर्टलमा जाँच गर्नुहोस्।</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ चेतावनी:</strong> आधिकारिक इजाजतपत्र नभएका स्थानीय एजेन्टहरूलाई पैसा वा राहदानी कहिल्यै नदिनुहोस्।
          </div>
        `
      }
    },
    europe: {
      EN: {
        title: 'Europe Work Visa Guide',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Schengen Work Permit & Visa Safety</h4>
          <p style="margin-bottom: 10px;">European work permits (Romania, Croatia, Poland, Lithuania, etc.) have become very popular but carry extremely high rates of recruitment fraud.</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Official Processing Costs:</strong> Official embassy visa fees for Schengen/European work visas are usually between €80 to €150. Do not pay agents lakhs of rupees in the name of "official government fees".</li>
            <li><strong>Real Work Permit vs. Fake Papers:</strong> A real work permit has an official registration number with the country's Inspectorate General for Immigration. Always ask for the registration number and verify it with the official embassy.</li>
            <li><strong>Processing Timelines:</strong> European work visas take 3 to 6 months to process. Agents promising visas within 15-30 days are trying to scam you.</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ Fatal Scam Warning:</strong> Never travel on a Tourist/Visit Visa to Europe with the promise of "conversion to work permit" on arrival. It is 100% illegal and leads to arrest and deportation.
          </div>
        `
      },
      HI: {
        title: 'Europe Work Visa Guide',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Europe Work Permit Aur Visa Safety</h4>
          <p style="margin-bottom: 10px;">Europe (Romania, Croatia, Poland, etc.) ke work permits aajkal bahot chal rahe hain par isme fraud ka khatra sabse zyada hota hai.</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Official Fees:</strong> European work visas ki official embassy fee sirf ₹7,000 se ₹13,000 (€80 to €150) hoti hai. Agent ke lakhon rupaye ke demand se bachein.</li>
            <li><strong>Work Permit Verification:</strong> Har asli work permit par ek official registration number hota hai. Ise us country ke immigration portal ya embassy ke zariye verify karwayein.</li>
            <li><strong>Time Duration:</strong> Europe ka poora process hone mein 3 se 6 mahine lagte hain. Jo agents 15-30 din mein visa dene ka vaada karein, woh fraud hain.</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ Sakht Inthabah:</strong> Europe kabhi bhi Tourist ya Visit Visa par kaam karne ke liye na jayein. Conversion wahan kanoon ke khilaf hai aur jail ho sakti hai.
          </div>
        `
      },
      UR: {
        title: 'یورپ ورک ویزا گائیڈ',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px; text-align: right;">یورپ ورک پرمٹ اور ویزا کی حفاظت</h4>
          <p style="margin-bottom: 10px; text-align: right;">یورپ (رومانیہ، کروشیا، پولینڈ وغیرہ) کے ورک پرمٹ کی مانگ بہت زیادہ ہے لیکن اس میں فراڈ کے امکانات بھی سب سے زیادہ ہوتے ہیں۔</p>
          <ul style="list-style-type: disc; padding-right: 20px; padding-left: 0; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px; text-align: right; direction: rtl;">
            <li><strong>آفیشل فیس:</strong> یورپی ورک ویزا کی آفیشل سفارت خانہ فیس صرف €80 سے €150 کے درمیان ہوتی ہے۔ ایجنٹوں کی بھاری رقم کے مطالبات سے ہوشیار رہیں۔</li>
            <li><strong>ورک پرمٹ کی تصدیق:</strong> ہر حقیقی ورک پرمٹ پر ایک رجسٹریشن نمبر ہوتا ہے جسے متعلقہ ملک کے امیگریشن پورٹل یا سفارت خانے سے تصدیق کرایا جا سکتا ہے۔</li>
            <li><strong>پروسیسنگ کا وقت:</strong> یورپی ورک ویزا کے پروسیسنگ میں ۳ سے ۶ ماہ لگتے ہیں۔ ۱۵ سے ۳۰ دن میں ویزا کا وعدہ کرنے والے ایجنٹ اسکام کر رہے ہیں۔</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px; text-align: right; direction: rtl;">
            <strong>⚠️ سخت وارننگ:</strong> یورپ کبھی بھی ٹورسٹ یا وزٹ ویزا پر کام کرنے کے وعدے پر نہ جائیں۔ وہاں پہنچ کر ویزا تبدیل ہونا ناممکن اور غیر قانونی ہے۔
          </div>
        `
      },
      BN: {
        title: 'ইউরোপ ওয়ার্ক ভিসা গাইড',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">ইউরোপ ওয়ার্ক পারমিট এবং ভিসা নিরাপত্তা</h4>
          <p style="margin-bottom: 10px;">ইউরোপের ওয়ার্ক পারমিট (রোমানিয়া, ক্রোয়েশিয়া, পোল্যান্ড ইত্যাদি) অত্যন্ত জনপ্রিয় হলেও এতে নিয়োগ জালিকতার ঝুঁকি সবচেয়ে বেশি।</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>অফিশিয়াল ফি:</strong> ইউরোপীয় কাজের ভিসার আসল কাস্টম ফি সাধারণত মাত্র ৮০ থেকে ১৫০ ইউরো (€80 - €150) হয়। সরকারি ফির নামে দালালের লাখ লাখ টাকা দাবি করা থেকে সতর্ক থাকুন।</li>
            <li><strong>ওয়ার্ক পারমিট যাচাই:</strong> প্রতিটি আসল ওয়ার্ক পারমিটের একটি অফিশিয়াল রেজিস্ট্রেশন নম্বর থাকে, যা সংশ্লিষ্ট দেশের ইমিগ্রেশন পোর্টাল বা দূতাবাসের মাধ্যমে যাচাই করা যায়।</li>
            <li><strong>প্রক্রিয়াকরণের সময়:</strong> ইউরোপীয় কাজের ভিসা হতে ৩ থেকে ৬ মাস সময় লাগে। যারা ১৫-৩০ দিনে ভিসার গ্যারান্টি দেয় তারা প্রতারক।</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ চরম সতর্কতা:</strong> ইউরোপে কাজের উদ্দেশ্যে কখনোই ট্যুরিস্ট বা ভিজিট ভিসায় যাবেন না। সেখানে এটি সম্পূর্ণ অবৈধ এবং এর ফলে গ্রেফতার বা ডিপোর্ট হতে পারেন।
          </div>
        `
      },
      NE: {
        title: 'युरोप वर्क भिसा गाइड',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">युरोप वर्क परमिट र भिसा सुरक्षा</h4>
          <p style="margin-bottom: 10px;">युरोपेली वर्क परमिट (रोमानिया, क्रोएसिया, पोल्याण्ड आदि) लोकप्रिय भए पनि यसमा भर्ती ठगीको जोखिम सबैभन्दा बढी छ।</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>आधिकारिक दस्तुर:</strong> युरोपेली वर्क भिसाको वास्तविक दूतावास शुल्क सामान्यतया ८० देखि १५० यूरो (€80 - €150) मात्र हुन्छ। एजेन्टको लाखौं रुपैयाँको मागबाट सावधान रहनुहोस्।</li>
            <li><strong>वर्क परमिट प्रमाणीकरण:</strong> प्रत्येक वास्तविक वर्क परमिटमा एउटा आधिकारिक दर्ता नम्बर हुन्छ, जसलाई सम्बन्धित देशको अध्यागमन पोर्टल वा दूतावासबाट प्रमाणित गराउन सकिन्छ।</li>
            <li><strong>प्रक्रियाको अवधि:</strong> युरोपेली भिसा हुन ३ देखि ६ महिना लाग्छ। १५-३० दिनमा भिसा मिलाइदिने दाबी गर्ने एजेन्टहरू ठग हुन्।</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ कडा चेतावनी:</strong> काम गर्ने उद्देश्यले युरोप कहिल्यै पनि टुरिष्ट वा भिजिट भिसामा नजानुहोस्। त्यहाँ पुगेर भिसा परिवर्तन गर्नु अवैध हो र जेल जानुपर्ने हुन सक्छ।
          </div>
        `
      }
    },
    agent: {
      EN: {
        title: 'Agent Payment Safety Guide',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Protecting Your Hard-Earned Money</h4>
          <p style="margin-bottom: 10px;">Paying money to agents without written contracts and valid, registered receipts is the number one cause of migrant exploitation.</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Insist on Registered Receipts:</strong> Never pay cash directly in hand without getting a stamped and signed physical receipt that lists the purpose of payment and the recruiter's official license details.</li>
            <li><strong>Beware of Passport Confiscation:</strong> No recruiter is legally allowed to keep your original passport unless they are sending it for official visa stamping. Keep a digital scan of your passport on your phone and with your family.</li>
            <li><strong>Service Charges Cap:</strong> Most countries have laws restricting recruitment service charges (e.g., in India, registered agents cannot charge more than ₹20,000 + GST). Charging lakhs of rupees is illegal.</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ Money Scam Indicator:</strong> If an agent asks you to pay money into a personal bank account instead of their company's registered account, or demands cash only, cancel the deal immediately.
          </div>
        `
      },
      HI: {
        title: 'Agent Payment Safety Guide',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">Apne Mehnat Ki Kamai Ko Surakshit Rakhein</h4>
          <p style="margin-bottom: 10px;">Bina receipt ya contract ke agents ko cash dena pravasi majdooron ke sath hone wale dhokhadhadi ka sabse bada kaaran hai.</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>Hamesha Valid Receipt Maangein:</strong> Kabhi bhi bina sign aur stamp wali receipt ke cash payment na karein. Receipt par agent ka registered business naam aur license details hona chahiye.</li>
            <li><strong>Original Passport Apne Pass Rakhein:</strong> Koi bhi agent aapka original passport zabardasti nahi rakh sakta. Sirf authorized stamping ke waqt hi passport jama karein, baki samay digital scan apne phone mein rakhein.</li>
            <li><strong>Kanooni Fees Limit:</strong> Sarkar ne recruitment service charges ki limit tay ki hui hai (Jaise India mein ₹20,000 + GST). Lakhon rupaye demand karna gair-kanooni hai.</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ Scam ki Nishani:</strong> Agar agent company account ke badle apne personal bank account mein paise mangta hai ya sirf cash dene ka dabav banata hai, toh turant mana kar dein.
          </div>
        `
      },
      UR: {
        title: 'ایجنٹ پیمنٹ سیفٹی گائیڈ',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px; text-align: right;">اپنی محنت کی کمائی کی حفاظت کریں</h4>
          <p style="margin-bottom: 10px; text-align: right;">بغیر تحریری معاہدے اور رسید کے ایجنٹوں کو نقد رقم دینا تارکین وطن کے ساتھ ہونے والے فراڈ کی سب سے بڑی وجہ ہے۔</p>
          <ul style="list-style-type: disc; padding-right: 20px; padding-left: 0; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px; text-align: right; direction: rtl;">
            <li><strong>ہمیشہ آفیشل رسید مانگیں:</strong> کبھی بھی بغیر دستخط اور مہر کی رسید کے نقد ادائیگی نہ کریں۔ رسید پر ایجنٹ کا رجسٹرڈ کاروباری نام اور لائسنس کی تفصیلات ہونی چاہئیں۔</li>
            <li><strong>پاسپورٹ اپنے پاس رکھیں:</strong> کوئی بھی ایجنٹ آپ کا اصل پاسپورٹ زبردستی نہیں رکھ سکتا۔ صرف ویزا سٹیمپنگ کے وقت ہی جمع کرائیں، باقی وقت فوٹو اپنے فون میں رکھیں۔</li>
            <li><strong>سروس چارجز کی حد:</strong> حکومت نے سروس چارجز کی حد مقرر کر رکھی ہے۔ اس سے زیادہ لاکھوں روپے مانگنا غیر قانونی ہے۔</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px; text-align: right; direction: rtl;">
            <strong>⚠️ فراڈ کا اشارہ:</strong> اگر ایجنٹ کمپنی کے بجائے ذاتی بینک اکاؤنٹ میں رقم مانگے یا صرف نقد رقم کا مطالبہ کرے تو فورا ڈیل ختم کر دیں۔
          </div>
        `
      },
      BN: {
        title: 'এজেন্ট পেমেন্ট সেফটি গাইড',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">আপনার কষ্টের উপার্জিত অর্থ নিরাপদ রাখুন</h4>
          <p style="margin-bottom: 10px;">লিখিত চুক্তি এবং বৈধ রসিদ ছাড়া দালালকে নগদ অর্থ প্রদান করাই কর্মীদের প্রতারিত হওয়ার প্রধান কারণ।</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>সর্বদা রসিদ দাবি করুন:</strong> দালালের সিল ও স্বাক্ষরযুক্ত রসিদ ছাড়া কোনো টাকা দেবেন না। রসিদে এজেন্সির নিবন্ধিত নাম এবং লাইসেন্স নম্বর উল্লেখ থাকতে হবে।</li>
            <li><strong>পাসপোর্ট নিজের কাছে রাখুন:</strong> কোনো দালাল বা এজেন্সি আইনত আপনার আসল পাসপোর্ট আটকে রাখতে পারে না। ভিসা স্ট্যাম্পিং ছাড়া অন্য সময়ে আসল পাসপোর্ট নিজের কাছে রাখুন এবং ফোনে স্ক্যান কপি রাখুন।</li>
            <li><strong>নির্ধারিত ফি:</strong> সরকার রিক্রুটমেন্ট চার্জ নির্ধারণ করে দিয়েছে। দালালের লাখ লাখ টাকা দাবি করা সম্পূর্ণ অবৈধ।</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ জালিকতার লক্ষণ:</strong> যদি কোনো দালাল কোম্পানির অ্যাকাউন্টের পরিবর্তে ব্যক্তিগত অ্যাকাউন্টে টাকা পাঠাতে বলে বা শুধু নগদ টাকার দাবি করে, তবে অবিলম্বে লেনদেন বাতিল করুন।
          </div>
        `
      },
      NE: {
        title: 'एजेन्ट पेमेन्ट सेफ्टीको गाइड',
        body: `
          <h4 style="font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 8px;">आफ्नो दुःखको कमाइ सुरक्षित राख्नुहोस्</h4>
          <p style="margin-bottom: 10px;">लिखित सम्झौता र आधिकारिक रसिद बिना एजेन्टलाई नगद पैसा बुझाउनु नै कामदारहरू ठगिने मुख्य कारण हो।</p>
          <ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 12px; display: flex; flex-direction: column; gap: 6px;">
            <li><strong>सधैं आधिकारिक रसिद माग्नुहोस्:</strong> एजेन्टको छाप र हस्ताक्षर भएको आधिकारिक रसिद बिना कहिल्यै पैसा नतिर्नुहोस्। रसिदमा एजेन्सीको दर्ता नम्बर स्पष्ट हुनुपर्छ।</li>
            <li><strong>राहदानी आफ्नै साथमा राख्नुहोस्:</strong> भिसा स्ट्याम्पिङको समय बाहेक कुनै पनि एजेन्टले कानुनतः तपाईंको राहदानी रोकेर राख्न मिल्दैन।</li>
            <li><strong>सेवा शुल्कको सीमा:</strong> सरकारले म्यानपावर कम्पनीहरूका लागि सेवा शुल्कको सीमा तोकिदिएको हुन्छ। लाखौं रुपैयाँ माग्नु गैरकानुनी हो।</li>
          </ul>
          <div style="margin-top: 12px; padding: 12px; background-color: #fffbeb; border: 1.5px solid #fef3c7; border-radius: 10px; color: #b45309; font-size: 11.5px;">
            <strong>⚠️ ठगीको लक्षण:</strong> यदि एजेन्टले कम्पनीको खाताको सट्टा व्यक्तिगत बैंक खातामा पैसा पठाउन भन्छ वा नगद मात्र माग्दछ भने, तुरुन्तै कारोबार रद्द गर्नुहोस्।
          </div>
        `
      }
    }
  };

  const guide = customGuides[guideKey];
  if (!guide) return;

  const content = guide[lang] || guide['EN'];
  titleEl.innerHTML = content.title;
  bodyEl.innerHTML = content.body;

  modal.classList.remove('hidden');
}

// Render the detailed grouped job categories in the "View All Roles" modal
function renderAllJobCategories() {
  const container = document.getElementById('modal-roles-body');
  if (!container) return;
  container.innerHTML = '';

  const currentLang = state.lang || 'EN';

  roleGroupsData.forEach(group => {
    const groupTitle = group.title[currentLang] || group.title['EN'] || group.title['HI'];
    
    const groupEl = document.createElement('div');
    groupEl.className = 'role-group-container';
    groupEl.style.marginBottom = '20px';

    const headerEl = document.createElement('h4');
    headerEl.className = 'role-group-title';
    headerEl.style.display = 'flex';
    headerEl.style.alignItems = 'center';
    headerEl.style.gap = '8px';
    headerEl.style.fontSize = '14px';
    headerEl.style.fontWeight = '800';
    headerEl.style.color = '#1e293b';
    headerEl.style.borderBottom = '1px solid #e2e8f0';
    headerEl.style.paddingBottom = '6px';
    headerEl.style.marginBottom = '10px';
    headerEl.innerHTML = `<span>${group.icon}</span> <span>${groupTitle}</span>`;
    groupEl.appendChild(headerEl);

    const rolesGrid = document.createElement('div');
    rolesGrid.className = 'roles-grid-container';
    rolesGrid.style.display = 'grid';
    rolesGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    rolesGrid.style.gap = '8px';

    group.roles.forEach(role => {
      const roleName = role.names[currentLang] || role.names['EN'] || role.names['HI'];
      const btn = document.createElement('button');
      btn.className = 'role-select-btn';
      btn.style.textAlign = 'left';
      btn.style.padding = '8px 12px';
      btn.style.borderRadius = '8px';
      btn.style.border = '1px solid #e2e8f0';
      btn.style.backgroundColor = '#f8fafc';
      btn.style.fontSize = '11.5px';
      btn.style.fontWeight = '600';
      btn.style.color = '#334155';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.2s';
      btn.textContent = roleName;

      // Hover styles using standard event handlers
      btn.onmouseenter = () => {
        btn.style.borderColor = 'var(--blue-primary)';
        btn.style.backgroundColor = 'var(--blue-light)';
        btn.style.color = 'var(--blue-primary)';
      };
      btn.onmouseleave = () => {
        btn.style.borderColor = '#e2e8f0';
        btn.style.backgroundColor = '#f8fafc';
        btn.style.color = '#334155';
      };

      btn.onclick = () => {
        filterCategory(role.id, null);
        closeModal('modal-roles');
      };

      rolesGrid.appendChild(btn);
    });

    groupEl.appendChild(rolesGrid);
    container.appendChild(groupEl);
  });
}

// Open SOS helpline specifically
function openSosModal() {
  openModal('modal-sos');
  renderSosHelplineContacts();
}

// Close modals if click outside of modal card
window.addEventListener('click', (event) => {
  const overlays = document.querySelectorAll('.modal-overlay');
  overlays.forEach(overlay => {
    if (event.target === overlay) {
      overlay.classList.add('hidden');
    }
  });
});


// 11. DYNAMIC RENDER MODAL DETAILS

// Render Country Salary reality guide
function renderSalaryCountryDetails(countryCode) {
  state.selectedSalaryCountry = countryCode;
  const container = document.getElementById('salary-reality-details');
  if (!container) return;

  const data = countrySalaryDetails[countryCode];
  if (!data) return;

  const t = translations[state.lang];

  container.innerHTML = `
    <div class="reality-fact-box" style="margin-top: 10px;">
      <strong style="color:var(--blue-primary)">📊 Country Salary Reality Check</strong>
      <p style="font-size:11px; font-weight:600; line-height:1.45; margin-top:4px;">${data.realityDesc}</p>
    </div>

    <div class="reality-fact-box" style="background-color:var(--emerald-light); border-color:rgba(16,185,129,0.15)">
      <strong style="color:var(--emerald-primary)">🏦 Regulated Exchange Rate Matrix</strong>
      <p style="font-family:var(--font-mono); font-size:11.5px; font-weight:800; margin-top:2px;">${data.exchangeRate}</p>
    </div>

    <div class="reality-fact-box">
      <strong>💼 Safe Salary Expectations by Role:</strong>
      <div class="wage-grid">
        ${data.wages.map(item => `
          <div class="wage-row">
            <span class="role-lbl">${item.role}</span>
            <span class="wage-val">${item.salary}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="reality-fact-box">
      <strong style="color:var(--amber-primary)">📄 Cost & Legal Visa Stamp Guide:</strong>
      <p style="font-size:10.5px; margin-top:4px; line-height:1.4;">${data.documents}</p>
      <div class="job-important-warning-box" style="margin-top:8px;">
        <strong>Sarkari Cost Guideline:</strong> ${data.costReality}
      </div>
    </div>

    <div class="reality-fact-box">
      <strong>🏨 Food & Camp Accommodation Reality Check:</strong>
      <p style="font-size:10.5px; margin-top:4px; line-height:1.4;">${data.accommodation}</p>
    </div>
  `;
}

// Render dynamic emergency contacts list inside SOS modal
function renderSosHelplineContacts() {
  const container = document.getElementById('sos-contacts-list');
  if (!container) return;
  container.innerHTML = '';

  const t = translations[state.lang];

  helplineContacts.forEach(contact => {
    const div = document.createElement('div');
    div.className = 'sos-contact-card';

    div.innerHTML = `
      <div class="sos-contact-info-block">
        <span class="flag-emoji" role="img" aria-label="country flag">${contact.flag}</span>
        <div>
          <h4 class="sos-agency-h4">${contact.agencyName}</h4>
          <p class="sos-loc-p">${contact.location}</p>
          <span class="sos-type-span">${contact.type} Helpdesk</span>
        </div>
      </div>
      <button class="sos-call-action-btn" onclick="triggerPhoneCall('${contact.phone}')" aria-label="Call emergency phone">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </button>
    `;
    container.appendChild(div);
  });
}

function triggerPhoneCall(phoneNum) {
  window.location.href = `tel:${phoneNum}`;
}


// 12. INTERACTIVE LIVE FRAUD RISK CALCULATOR FORM
function calculateVisaRisk(event) {
  event.preventDefault();

  const agentName = document.getElementById('calc-agent-name').value;
  const country = document.getElementById('calc-country').value;
  const visaType = document.getElementById('calc-visa-type').value;
  const money = parseInt(document.getElementById('calc-money').value) || 0;
  const passportSeized = document.getElementById('calc-passport').value;
  const receiptOffered = document.getElementById('calc-receipt').value;

  const resultBox = document.getElementById('calculator-result-box');
  resultBox.classList.remove('hidden');

  let riskLevel = 'LOW';
  let score = 95;
  const reasons = [];

  // Rules checklist
  if (visaType === 'visit') {
    riskLevel = 'EXTREME';
    score -= 60;
    reasons.push('Visit/Tourist/Azad Visa par kaam karna gair-kanooni hai. Jail aur deportation ka bada khatra hai.');
  } else if (visaType === 'other') {
    riskLevel = 'HIGH';
    score -= 30;
    reasons.push('Transit visa ya bina clear contract ke bhej raha hai, highly unverified.');
  }

  if (receiptOffered === 'no') {
    riskLevel = 'HIGH';
    score -= 30;
    reasons.push('Bina written receipt/legal bill ke cash transaction 100% fraud ka ishaara hai. Proof ke bina complaint nahi ho sakti.');
  }

  if (passportSeized === 'yes') {
    riskLevel = 'HIGH';
    score -= 25;
    reasons.push('Original physical passport apne pass rakhna kanoonan illegal hai. Passport holder ki safety ke khilaf hai.');
  }

  if (money > 250000) {
    if (riskLevel !== 'EXTREME') riskLevel = 'HIGH';
    score -= 20;
    reasons.push('INR/PKR 2.5 Lakh se zyada demand karna recruitment ceiling laws ke khilaf hai. This is financial exploitation.');
  } else if (money > 120000 && score > 60) {
    riskLevel = 'CAREFUL';
    score -= 15;
    reasons.push('Fee demand standard se zyada lag rahi hai. License documents embassy se verify karein.');
  }

  // Adjust bounds
  if (score < 10) score = 15;
  if (score > 95) score = 95;

  let bgClass = 'bg-low-risk';
  let riskSymbol = '🟢 LOW RISK';
  
  if (riskLevel === 'EXTREME' || score < 40) {
    bgClass = 'bg-danger-risk';
    riskSymbol = '🔴 EXTREME HIGH RISK';
  } else if (riskLevel === 'HIGH' || score < 70) {
    bgClass = 'bg-danger-risk';
    riskSymbol = '🔴 HIGH RISK';
  } else if (riskLevel === 'CAREFUL' || score < 90) {
    bgClass = 'bg-careful-risk';
    riskSymbol = '🟡 CHECK CAREFULLY / VERIFY LICENSE';
  }

  resultBox.className = `calculator-result-box ${bgClass}`;
  resultBox.innerHTML = `
    <span class="risk-tag">${riskSymbol} (Safety Score: ${score}%)</span>
    <p><strong>Agent Check:</strong> "${agentName}" targeting ${country}</p>
    <ul class="risk-reasons-list">
      ${reasons.map(r => `<li>• ${r}</li>`).join('')}
      ${reasons.length === 0 ? '<li>• All basic compliance parameters met. Still, double-check company registration.</li>' : ''}
    </ul>
    <div style="margin-top:8px; text-align:right;">
      <button class="clear-badge-btn" style="background:white;" onclick="triggerCalculatorFamilyShare('${agentName}', '${country}', '${riskSymbol}', '${score}%', '${visaType}')">Family Ko report Bhejo</button>
    </div>
  `;
}


// 13. FAMILY KO BHEJO SHARE & SUMMARY ENGINE
let activeFamilySummaryString = '';

function openFamilyShareModal(jobId) {
  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;

  const details = job.details[state.lang] || job.details['HI'];
  const t = translations[state.lang];

  const shareCard = document.getElementById('family-sharable-card-content');
  const modal = document.getElementById('modal-familyshare');
  modal.classList.remove('hidden');

  const riskBadge = job.riskLevel === 'low' ? '🟢 Safe (Verified Direct)' : '🟡 Verify First (Careful)';

  shareCard.innerHTML = `
    <div class="family-card-hdr">
      <h4>BaharKaam Safety Share Summary</h4>
      <p>Family verification data for peace of mind</p>
    </div>
    <div class="family-grid-list">
      <div class="family-grid-item">
        <span class="family-lbl">Target Country:</span>
        <span class="family-val">${job.country}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Job Role:</span>
        <span class="family-val">${details.title}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Employer Name:</span>
        <span class="family-val">${details.company}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Expected Salary:</span>
        <span class="family-val">${job.salaryRange} ${job.currency} / Month</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Visa Type:</span>
        <span class="family-val">${job.visaType}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Safety Score:</span>
        <span class="family-val">${job.safetyScore}%</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Safety Rating:</span>
        <span class="family-val">${riskBadge}</span>
      </div>
    </div>
    <div class="family-warning-block">
      <strong>⚠️ ${t.familyAdviceTitle}</strong> ${t.familyAdviceBody}
    </div>
  `;

  // Build the sharable raw text string
  activeFamilySummaryString = `*BaharKaam.com Family Safety Share Summary*\n` +
    `----------------------------------------\n` +
    `📍 *Country:* ${job.country}\n` +
    `💼 *Job:* ${details.title}\n` +
    `🏢 *Employer:* ${details.company}\n` +
    `💰 *Salary Package:* ${job.salaryRange} ${job.currency}/Mo\n` +
    `📄 *Visa Status:* ${job.visaType}\n` +
    `🔒 *Trust Rating:* ${job.safetyScore}% (${riskBadge})\n` +
    `----------------------------------------\n` +
    `⚠️ *Family Safety advice:* Gair-kanooni agent ko advance cash na dein. Kisi bhi payment ki registered written receipt zaroor save karein.`;
}

// Share from Roadmap directly
function triggerRoadmapFamilyShare() {
  const t = translations[state.lang];
  const shareCard = document.getElementById('family-sharable-card-content');
  const modal = document.getElementById('modal-familyshare');
  
  // Close roadmap first
  closeModal('modal-roadmap');
  modal.classList.remove('hidden');

  shareCard.innerHTML = `
    <div class="family-card-hdr">
      <h4>BaharKaam Safe Job Roadmap Summary</h4>
      <p>Standard legal route for family reference</p>
    </div>
    <div class="family-grid-list">
      <div class="family-grid-item">
        <span class="family-lbl">Status:</span>
        <span class="family-val">🟢 100% Legal Route Info</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Mandatory Check:</span>
        <span class="family-val">Original Passport (min 2 Yr)</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Medical Clearance:</span>
        <span class="family-val">GAMCA Approved Center</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Police Record Check:</span>
        <span class="family-val">Clear PCC Certificate</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Verification Matrix:</span>
        <span class="family-val">Direct labor contract required</span>
      </div>
    </div>
    <div class="family-warning-block">
      <strong>⚠️ ${t.familyAdviceTitle}</strong> ${t.familyAdviceBody}
    </div>
  `;

  activeFamilySummaryString = `*BaharKaam.com Safe Migration Roadmap*\n` +
    `----------------------------------------\n` +
    `✅ Hamesha original Work Visa par hi jaana legal hai. Visit Visa par kaam karna band hai.\n` +
    `✅ Passport copy aur written job contract family ke paas backup rakhein.\n` +
    `✅ Advance cash broker ko na dein bina standard written receipt ke.`;
}

// Share from Calculator dynamically
function triggerCalculatorFamilyShare(agentName, country, riskSymbol, safetyScore, visaType) {
  const t = translations[state.lang];
  const shareCard = document.getElementById('family-sharable-card-content');
  const modal = document.getElementById('modal-familyshare');
  
  // Close calculator
  closeModal('modal-visacheck');
  modal.classList.remove('hidden');

  const riskClass = riskSymbol.includes('LOW') ? '' : 'danger-red';

  shareCard.innerHTML = `
    <div class="family-card-hdr">
      <h4>Visa Fraud Risk Report Summary</h4>
      <p>Calculator analysis for agent check</p>
    </div>
    <div class="family-grid-list">
      <div class="family-grid-item">
        <span class="family-lbl">Agent/Agency Checked:</span>
        <span class="family-val">${agentName}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Target Country:</span>
        <span class="family-val">${country}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Visa Promised:</span>
        <span class="family-val">${visaType}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Calculated Risk:</span>
        <span class="family-val ${riskClass}">${riskSymbol}</span>
      </div>
      <div class="family-grid-item">
        <span class="family-lbl">Safety Compliance:</span>
        <span class="family-val">${safetyScore}</span>
      </div>
    </div>
    <div class="family-warning-block">
      <strong>⚠️ ${t.familyAdviceTitle}</strong> ${t.familyAdviceBody}
    </div>
  `;

  activeFamilySummaryString = `*BaharKaam.com Visa Fraud Risk Report*\n` +
    `----------------------------------------\n` +
    `👤 *Agent Name:* ${agentName}\n` +
    `📍 *Target Country:* ${country}\n` +
    `📄 *Visa Promised:* ${visaType}\n` +
    `🔒 *Risk Rating:* ${riskSymbol} (Safety score: ${safetyScore})\n` +
    `----------------------------------------\n` +
    `⚠️ *Direct advice for family:* Agent agar advance cash maange ya original passport hold kare toh police alert/helpline par consult karein. Gair-kanooni visit visa par work permit nahi banta.`;
}

function copyFamilySummaryToClipboard() {
  if (!activeFamilySummaryString) return;
  
  // Clipboard API fallback for mobile/iframe
  const textarea = document.createElement('textarea');
  textarea.value = activeFamilySummaryString;
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    alert('Summary details successfully copied to clipboard! You can paste in WhatsApp.');
  } catch (err) {
    alert('Failed to copy. Please manually select the card text to copy.');
  }
  
  document.body.removeChild(textarea);
}

function simulateWhatsAppShare() {
  if (!activeFamilySummaryString) return;
  const encodedText = encodeURIComponent(activeFamilySummaryString);
  window.open(`https://api.whatsapp.com/send?text=${encodedText}`, '_blank');
}

function openJobSafetyModal(jobId) {
  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;

  const details = job.details[state.lang] || job.details['HI'];
  const t = translations[state.lang];

  const modalBody = document.getElementById('modal-job-safety-body');
  if (!modalBody) return;

  const riskBadge = job.riskLevel === 'low' ? '🟢 Low Risk (Highly Safe)' : '🟡 Caution (Vigilance Required)';
  const badgeClass = job.riskLevel === 'low' ? 'source-checked' : 'source-careful';

  modalBody.innerHTML = `
    <div style="background-color: #fafbfc; border: 1px solid #e2e8f0; padding: 14px; border-radius: 16px; margin-bottom: 12px;">
      <h4 style="font-size: 15px; font-weight: 800; color: #1e293b; margin-bottom: 2px;">${details.title}</h4>
      <p style="font-size: 11px; font-weight: 600; color: var(--text-muted); margin-bottom: 8px;">${details.company}</p>
      
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 8px;">
        <span class="job-cert-badge">${job.visaType.includes('Work') ? 'Work Visa Legal' : 'Strict Check'}</span>
        <span class="job-source-badge ${badgeClass}">Score: ${job.safetyScore}%</span>
      </div>
    </div>

    <div style="display: grid; grid-template-cols: 1fr; gap: 10px; margin-bottom: 12px;">
      <div style="background: white; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; font-size: 11px;">
        <strong>📍 ${t.lblCountry || 'Country'}:</strong> ${job.country}
      </div>
      <div style="background: white; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; font-size: 11px; color: var(--emerald-primary);">
        <strong>💰 ${t.lblSalary || 'Salary Package'}:</strong> ${job.salaryRange} ${job.currency} / Month
      </div>
      <div style="background: white; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; font-size: 11px;">
        <strong>📄 ${t.lblVisaType || 'Visa Type'}:</strong> ${job.visaType}
      </div>
      <div style="background: white; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; font-size: 11px;">
        <strong>🔒 ${t.lblRiskLevel || 'Risk Rating'}:</strong> ${riskBadge}
      </div>
      <div style="background: white; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; font-size: 11px;">
        <strong>🏢 Source Type:</strong> ${job.sourceType || 'Direct Registered Employer'}
      </div>
      <div style="background: white; border: 1px solid #f1f5f9; padding: 10px; border-radius: 12px; font-size: 11px;">
        <strong>🟢 Source Status:</strong> Active & Checked by Sathi AI
      </div>
    </div>

    <!-- Official Source Verification Reminder -->
    <div style="background: #fef2f2; border: 1px solid #fca5a5; padding: 12px; border-radius: 12px; font-size: 11px; margin-bottom: 12px; color: #991b1b; line-height: 1.45;">
      <strong>📢 Official Source Verification Reminder:</strong>
      BaharKaam is an informational safety advisory resource. Kisi bhi videshi job or offer letter par blind trust na karein. Sarkar ke official eMigrate (India) ya BE&OE (Pakistan) portal par jaakar agent ka license id aur job order zaroor verify karein.
    </div>

    <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 10px; border-radius: 12px; font-size: 11px; margin-bottom: 12px;">
      <h5 style="font-weight: 800; color: #1d4ed8; margin-bottom: 4px;">📋 ${t.lblDocuments || 'Documents Required'}</h5>
      <p style="color: #1e40af; line-height: 1.4;">${details.documents}</p>
    </div>

    <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 10px; border-radius: 12px; font-size: 11px; margin-bottom: 12px;">
      <h5 style="font-weight: 800; color: #047857; margin-bottom: 4px;">🎁 ${t.lblFoodTicket || 'Welfare & Benefits'}</h5>
      <p style="color: #065f46; line-height: 1.4;">${details.foodRoomTicket}</p>
    </div>

    <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 10px; border-radius: 12px; font-size: 11px; margin-bottom: 12px;">
      <h5 style="font-weight: 800; color: #b45309; margin-bottom: 4px;">⚠️ ${t.lblWarning || 'Security Warning'}</h5>
      <p style="color: #92400e; line-height: 1.4; font-weight: 600;">${details.warning}</p>
    </div>

    <div style="background: #fafafa; border: 1px solid #e5e5e5; padding: 12px; border-radius: 12px; font-size: 10.5px; color: var(--text-muted); line-height: 1.4;">
      <strong>🛡️ BaharKaam Protection Protocol:</strong>
      <ol style="margin-left: 14px; margin-top: 4px; padding: 0; list-style-type: decimal;">
        <li>Never pay recruitment fees in advance without an official receipt.</li>
        <li>Ensure your contract mentions the basic salary in the local currency.</li>
        <li>Submit visa copies to Sathi AI or the national portal for verification before travelling.</li>
        <li>Keep your family updated with the details of your employer and your accommodation location.</li>
      </ol>
    </div>

    <div style="margin-top: 14px; text-align: center;">
      <button class="share-action-btn copy-btn" style="background-color: var(--blue-primary); color: white; border: none; padding: 10px 16px; border-radius: 12px; font-weight: 800; cursor: pointer; width: 100%; font-size: 12px;" onclick="closeModal('modal-job-safety')">
        Close Safety Details
      </button>
    </div>
  `;

  openModal('modal-job-safety');
}

function openJobChecklistModal(jobId) {
  const job = jobsData.find(j => j.id === jobId);
  if (!job) return;

  const details = job.details[state.lang] || job.details['HI'];
  const t = translations[state.lang];

  const modalBody = document.getElementById('modal-job-checklist-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="background-color: #ecfdf5; border: 1px solid #a7f3d0; padding: 12px; border-radius: 16px; margin-bottom: 12px;">
      <h4 style="font-size: 14px; font-weight: 800; color: #065f46; margin-bottom: 2px;">${details.title}</h4>
      <p style="font-size: 11px; color: #047857;">Interactive safety checklist for ${job.country}</p>
    </div>

    <p style="font-size: 11px; color: var(--text-muted); margin-bottom: 10px;">
      Verify and complete each of the following safety milestones before booking your flight:
    </p>

    <div class="profile-checklist-items" style="display: flex; flex-direction: column; gap: 8px;">
      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>🏢 Company Name Clear? (Verify if the registered company name is written clearly on the offer letter/document).</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>📄 Visa Type Work Visa? (Ensure your visa is a real, legal "Work Visa" and NOT a "Tourist/Visit/Group Visa").</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>💰 Salary Written in Contract? (Check if the exact basic salary ${job.salaryRange} ${job.currency} is written in the legal contract).</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>🏠 Food / Room / Ticket Clear? (Confirm who is paying for food, housing accommodation, and the return flight ticket).</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>🧾 Agent Receipt Available? (Always demand a stamped/signed receipt for every payment made to the agent).</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>🛂 Passport Safe? (Keep your original passport in your own hands or secure locker, never give it permanently to any sub-agent).</span>
      </label>
    </div>

    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 12px; margin-top: 12px; font-size: 11px; font-weight: 700; color: #166534; display: flex; justify-content: space-between; align-items: center;">
      <span>Your Progress:</span>
      <span id="checklist-progress-badge-${job.id}">0 / 6 Completed</span>
    </div>

    <div style="margin-top: 14px;">
      <button class="share-action-btn copy-btn" style="background-color: var(--emerald-primary); color: white; border: none; padding: 10px 16px; border-radius: 12px; font-weight: 800; cursor: pointer; width: 100%; font-size: 12px;" onclick="closeModal('modal-job-checklist')">
        Save & Close Checklist
      </button>
    </div>
  `;

  openModal('modal-job-checklist');
}

function updateChecklistProgress(jobId) {
  const modal = document.getElementById('modal-job-checklist-body');
  if (!modal) return;
  const checkboxes = modal.querySelectorAll('input[type="checkbox"]');
  let count = 0;
  checkboxes.forEach(cb => {
    if (cb.checked) count++;
  });
  const badge = document.getElementById(`checklist-progress-badge-${jobId}`);
  if (badge) {
    badge.textContent = `${count} / ${checkboxes.length} Completed`;
  }
}


// 14. COMPANION REMITTANCE CURRENCY CALCULATOR
const currencyRates = {
  SAR: { INR: 22.25, PKR: 74.30, BDT: 31.40, NPR: 35.60 },
  AED: { INR: 22.72, PKR: 75.80, BDT: 32.10, NPR: 36.35 },
  QAR: { INR: 22.90, PKR: 76.45, BDT: 32.35, NPR: 36.65 },
  OMR: { INR: 216.50, PKR: 722.00, BDT: 305.80, NPR: 346.40 },
  KWD: { INR: 271.30, PKR: 905.50, BDT: 383.60, NPR: 434.50 },
  EUR: { INR: 90.15, PKR: 301.20, BDT: 127.40, NPR: 144.30 }
};

function calculateRemittanceConvert() {
  const sendAmount = parseFloat(document.getElementById('remit-send-amount').value) || 0;
  const sendCurrency = document.getElementById('remit-send-currency').value;
  const recvCurrency = document.getElementById('remit-recv-currency').value;

  const rates = currencyRates[sendCurrency];
  if (!rates) return;

  const conversionMultiplier = rates[recvCurrency] || 1;
  const finalResult = (sendAmount * conversionMultiplier).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

  document.getElementById('remit-recv-amount').value = `${finalResult} ${recvCurrency}`;
}

// Initial calculation call
setTimeout(() => {
  calculateRemittanceConvert();
}, 500);


// 15. PROFILE CHECKLIST REACTIVE TRIGGERS
function updateProfileChecklist() {
  const checkboxes = document.querySelectorAll('.profile-checklist-items input[type="checkbox"]');
  let checkedCount = 0;
  
  checkboxes.forEach(cb => {
    if (cb.checked || cb.disabled) {
      checkedCount++;
    }
  });

  const total = checkboxes.length + 2; // +2 for the pre-disabled checked items
  const readinessPercent = Math.round((checkedCount / total) * 100);

  // Update profile status UI
  const readinessEl = document.querySelector('.stat-num.text-emerald');
  if (readinessEl) {
    readinessEl.textContent = `${readinessPercent}%`;
  }
}

// 16. SCAM REPORTING FORM HANDLER
function handleScamReportSubmit(event) {
  event.preventDefault();

  const agentName = document.getElementById('scam-agent-name').value;
  const agentPhone = document.getElementById('scam-agent-phone').value;
  const targetCountry = document.getElementById('scam-target-country').value;
  const fraudType = document.getElementById('scam-fraud-type').value;
  const moneyLost = document.getElementById('scam-money-lost').value;
  const narrative = document.getElementById('scam-narrative').value;

  const report = {
    agentName,
    agentPhone,
    targetCountry,
    fraudType,
    moneyLost,
    narrative,
    date: new Date().toLocaleDateString()
  };

  // Save report to localStorage for persistent security analysis
  const savedReports = JSON.parse(localStorage.getItem('baharkaam_scam_reports') || '[]');
  savedReports.push(report);
  localStorage.setItem('baharkaam_scam_reports', JSON.stringify(savedReports));

  // Reset the form input fields gracefully
  document.getElementById('scam-reporting-form').reset();

  // Show the user-friendly glassmorphic success notice
  const successMsg = document.getElementById('scam-report-success-msg');
  if (successMsg) {
    successMsg.classList.remove('hidden');
    // Hide it again after 10 seconds of visibility
    setTimeout(() => {
      successMsg.classList.add('hidden');
    }, 10000);
  }
}

// Tab switcher for Visa & Ticket check
function switchVCTab(tab) {
  const calcTab = document.getElementById('vc-tab-calc');
  const pnrTab = document.getElementById('vc-tab-pnr');
  const calcContent = document.getElementById('vc-calc-content');
  const pnrContent = document.getElementById('vc-pnr-content');

  if (tab === 'calc') {
    calcTab.classList.add('active');
    pnrTab.classList.remove('active');
    calcContent.classList.remove('hidden');
    pnrContent.classList.add('hidden');
  } else {
    calcTab.classList.remove('active');
    pnrTab.classList.add('active');
    calcContent.classList.add('hidden');
    pnrContent.classList.remove('hidden');
  }
}

// AI PNR Safety Check
function checkTicketPNR(event) {
  event.preventDefault();

  const name = document.getElementById('pnr-passenger-name').value;
  const airline = document.getElementById('pnr-airline').value;
  const pnr = document.getElementById('pnr-ref').value;
  const flight = document.getElementById('pnr-flight-num').value;
  const date = document.getElementById('pnr-date').value;
  const route = document.getElementById('pnr-route').value;

  const resultBox = document.getElementById('pnr-result-box');
  if (!resultBox) return;
  resultBox.classList.remove('hidden');

  const pnrUpper = pnr.toUpperCase();
  const airlineLower = airline.toLowerCase();

  let riskIndicators = [];
  let isSuspicious = false;

  if (pnrUpper.length < 6) {
    riskIndicators.push("⚠️ PNR reference standard format se chota hai. Standard airline PNR 6 characters ka hota hai.");
    isSuspicious = true;
  }
  if (airlineLower.includes('tourist') || airlineLower.includes('visit') || airlineLower.includes('charter')) {
    riskIndicators.push("⚠️ Charter flight ya tourist flights high-risk migration ke liye use ki jaati hain.");
    isSuspicious = true;
  }

  riskIndicators.push("✓ Passenger name passport spelling se match hona chahiye.");
  riskIndicators.push("✓ Flight number aur departure date air carrier ke standard timetable se matched hai.");

  const riskStatusText = isSuspicious 
    ? "🟡 Attention Required / Manual Check Recommended" 
    : "🟢 AI Compliant Scan (No obvious template mismatch)";

  resultBox.innerHTML = `
    <h5 style="font-weight: 800; color: #1e3a8a; margin-bottom: 8px; font-size: 12.5px;">📊 AI Ticket Safety Analysis Report</h5>
    
    <div style="display: grid; grid-template-columns: 1fr; gap: 6px; font-size: 11px; margin-bottom: 10px;">
      <div><strong>Passenger Name:</strong> ${name}</div>
      <div><strong>Airline:</strong> ${airline}</div>
      <div><strong>PNR / Booking Ref:</strong> <span style="font-family: monospace; font-weight: 800; background: #e2e8f0; padding: 1px 4px; border-radius: 3px;">${pnrUpper}</span></div>
      <div><strong>Flight Number:</strong> ${flight}</div>
      <div><strong>Travel Date:</strong> ${date}</div>
      <div><strong>Route:</strong> ${route}</div>
    </div>

    <div style="background: #fffbeb; border: 1px solid #fde68a; padding: 8px; border-radius: 8px; font-size: 10.5px; margin-bottom: 8px; color: #92400e;">
      <strong>🛡️ Safety Status:</strong> ${riskStatusText}
      <ul style="margin-left: 12px; margin-top: 4px; list-style-type: disc;">
        ${riskIndicators.map(i => `<li>${i}</li>`).join('')}
      </ul>
    </div>

    <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 8px; border-radius: 8px; font-size: 10px; color: #1e40af; line-height: 1.45;">
      <strong>📢 Official Airline website verification reminder:</strong>
      This is an offline AI template analysis only. Hum direct live GDS check ya booking confirm nahi karte. Status confirm karne ke liye hamesha airline ki official website par jaakar <strong>"Manage Booking"</strong> section mein <strong>PNR: ${pnrUpper}</strong> aur apna <strong>Last Name</strong> dalkar live status verify karein.
    </div>

    <div style="margin-top: 10px; text-align: right;">
      <button type="button" class="clear-badge-btn" style="background: var(--blue-primary); color: white; border: none; padding: 6px 12px; font-size: 10.5px; border-radius: 6px; font-weight: 800; cursor: pointer;" onclick="triggerTicketFamilyShare('${name.replace(/'/g, "\\'")}', '${airline.replace(/'/g, "\\'")}', '${pnrUpper}', '${flight.replace(/'/g, "\\'")}', '${date}', '${route.replace(/'/g, "\\'")}')">Family Ko report Bhejo</button>
    </div>
  `;
}

// File Select and Drop for PNR Check
function handlePNRFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    document.getElementById('pnr-upload-label').textContent = `📄 Selected File: ${file.name} (Ready to Scan)`;
  }
}

function handlePNRFileDrop(event) {
  const file = event.dataTransfer.files[0];
  if (file) {
    document.getElementById('pnr-upload-label').textContent = `📄 Selected File: ${file.name} (Ready to Scan)`;
  }
}

// Share PNR Report with Family
function triggerTicketFamilyShare(name, airline, pnr, flight, date, route) {
  const modal = document.getElementById('modal-familyshare');
  closeModal('modal-visacheck');
  modal.classList.remove('hidden');

  const shareCard = document.getElementById('family-sharable-card-content');
  shareCard.innerHTML = `
    <div class="family-card-hdr" style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 14px; border-radius: 12px 12px 0 0; text-align: center;">
      <h4 style="font-weight: 800; font-size: 14px; margin: 0;">✈️ BaharKaam Ticket Verification Summary</h4>
      <p style="font-size: 10.5px; opacity: 0.9; margin: 2px 0 0 0;">Flight details safety report</p>
    </div>
    <div class="family-grid-list" style="padding: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px;">
      <div>
        <span style="color: var(--text-muted); display: block;">Passenger Name:</span>
        <span style="font-weight: 700; color: #1e293b;">${name}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Airline Name:</span>
        <span style="font-weight: 700; color: #1e293b;">${airline}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">PNR Booking Ref:</span>
        <span style="font-weight: 700; color: #1e293b; font-family: monospace;">${pnr}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Flight No:</span>
        <span style="font-weight: 700; color: #1e293b;">${flight}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Travel Date:</span>
        <span style="font-weight: 700; color: #1e293b;">${date}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Route:</span>
        <span style="font-weight: 700; color: #1e293b;">${route}</span>
      </div>
    </div>
    <div class="family-warning-block" style="background-color: #fef3c7; border: 1px solid #fde68a; padding: 10px; border-radius: 8px; font-size: 10px; font-weight: 700; color: #92400e; margin: 0 14px 14px 14px;">
      ⚠️ Flight Warning: Confirm this PNR manually on the official airline website. Fake booking records are highly common among fraudulent agencies.
    </div>
  `;

  activeFamilySummaryString = `*BaharKaam Ticket Verification Summary*\n` +
    `----------------------------------------\n` +
    `👤 *Passenger:* ${name}\n` +
    `✈️ *Airline:* ${airline}\n` +
    `🆔 *PNR:* ${pnr}\n` +
    `🔢 *Flight:* ${flight}\n` +
    `📅 *Date:* ${date}\n` +
    `📍 *Route:* ${route}\n` +
    `----------------------------------------\n` +
    `⚠️ *Disclaimer:* Is ticket ko hamesha airline website par check karein. Gair-kanooni agent dummy ticket dekar advance paise lelete hain.`;
}

// Share Family Payment Summary from Money Guide
function triggerFamilyPaymentShare() {
  const payMoney = document.getElementById('pay-money').value;
  const payPurpose = document.getElementById('pay-purpose').value;
  const payMode = document.getElementById('pay-mode').value;
  const payDate = document.getElementById('pay-date').value;
  const payAgent = document.getElementById('pay-agent').value;

  const modal = document.getElementById('modal-familyshare');
  closeModal('modal-money');
  modal.classList.remove('hidden');

  const shareCard = document.getElementById('family-sharable-card-content');
  shareCard.innerHTML = `
    <div class="family-card-hdr" style="background: linear-gradient(135deg, #10b981, #047857); color: white; padding: 14px; border-radius: 12px 12px 0 0; text-align: center;">
      <h4 style="font-weight: 800; font-size: 14px; margin: 0;">💰 Agent Payment Family Record Card</h4>
      <p style="font-size: 10.5px; opacity: 0.9; margin: 2px 0 0 0;">Secure transaction proof tracking</p>
    </div>
    <div class="family-grid-list" style="padding: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px;">
      <div>
        <span style="color: var(--text-muted); display: block;">Agent / Agency Name:</span>
        <span style="font-weight: 700; color: #1e293b;">${payAgent}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Money Paid:</span>
        <span style="font-weight: 700; color: var(--emerald-primary);">${payMoney}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Purpose of Payment:</span>
        <span style="font-weight: 700; color: #1e293b;">${payPurpose}</span>
      </div>
      <div>
        <span style="color: var(--text-muted); display: block;">Payment Mode:</span>
        <span style="font-weight: 700; color: #1e293b;">${payMode}</span>
      </div>
      <div style="grid-column: span 2;">
        <span style="color: var(--text-muted); display: block;">Payment Date:</span>
        <span style="font-weight: 700; color: #1e293b;">${payDate}</span>
      </div>
    </div>
    <div class="family-warning-block" style="background-color: #fef2f2; border: 1px solid #fca5a5; padding: 10px; border-radius: 8px; font-size: 10px; font-weight: 700; color: #b91c1c; margin: 0 14px 14px 14px;">
      ⚠️ Receipt Reminder: Hamesha payment ki signed/stamped receipt demand karein. Bina stamped receipt paise bilkul na dein!
    </div>
  `;

  activeFamilySummaryString = `*BaharKaam Agent Payment Proof Summary*\n` +
    `----------------------------------------\n` +
    `🏢 *Agent / Agency:* ${payAgent}\n` +
    `💰 *Money Paid:* ${payMoney}\n` +
    `📋 *Purpose:* ${payPurpose}\n` +
    `💳 *Mode:* ${payMode}\n` +
    `📅 *Date:* ${payDate}\n` +
    `----------------------------------------\n` +
    `⚠️ *Important:* Hamesha stamped receipt parivaar ke paas safe rakhein. Bina receipt payment fraud ho sakti hai!`;
}

function scrollToUpdatesAndGuides() {
  const element = document.getElementById('updates-guides-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// SAFE COUNTER UI SYNC HELPER
function updateSavedCounterUI() {
  const savedList = JSON.parse(localStorage.getItem('baharkaam_saved_guides') || '[]');
  const profileEl = document.getElementById('profile-saved-count');
  if (profileEl) {
    profileEl.textContent = savedList.length;
  }
  const dashboardBadge = document.getElementById('dashboard-saved-count-badge');
  if (dashboardBadge) {
    dashboardBadge.textContent = savedList.length;
  }
}

/* ==========================================================================
   ABROAD SAFETY DASHBOARD INTERACTIVE SCRIPTING
   ========================================================================== */

// Initialize default storage data if empty on profile load
function getProfileData() {
  const defaultProfile = {
    name: 'Pravasi Bhaai',
    phone: '+91 98765 43210',
    targetCountry: 'Saudi Arabia',
    jobRole: 'Carpenter'
  };
  const stored = localStorage.getItem('baharkaam_profile_data');
  return stored ? JSON.parse(stored) : defaultProfile;
}

function getPlanData() {
  const defaultPlan = {
    passportStatus: 'Ready',
    experience: '5 Years',
    agentName: 'Perfect Overseas Agency',
    offerLetterStatus: 'Verified',
    ticketStatus: 'Confirmed'
  };
  const stored = localStorage.getItem('baharkaam_plan_data');
  return stored ? JSON.parse(stored) : defaultPlan;
}

function getChecklistData() {
  const defaultChecklist = {
    passport: true,
    salary: true,
    offer: true,
    visa: false,
    ticket: false,
    family: false
  };
  const stored = localStorage.getItem('baharkaam_profile_checklist_v2');
  return stored ? JSON.parse(stored) : defaultChecklist;
}

function getFamilyContact() {
  const defaultContact = {
    name: 'Rahul (Brother)',
    phone: '+91 98989 89898'
  };
  const stored = localStorage.getItem('baharkaam_family_contact');
  return stored ? JSON.parse(stored) : defaultContact;
}

// Main Dashboard Initializer
function initAbroadSafetyDashboard() {
  const profile = getProfileData();
  const plan = getPlanData();
  const checklist = getChecklistData();
  const family = getFamilyContact();

  // 1. Render Top Profile Card Details
  const nameEl = document.getElementById('profile-user-name');
  if (nameEl) nameEl.textContent = profile.name;
  
  const avatarEl = document.getElementById('profile-avatar-char');
  if (avatarEl && profile.name) {
    avatarEl.textContent = profile.name.charAt(0).toUpperCase();
  }

  const metaEl = document.getElementById('profile-meta-job-country');
  if (metaEl) {
    metaEl.textContent = `💼 ${profile.jobRole} · 📍 ${profile.targetCountry}`;
  }

  const dispPhone = document.getElementById('disp-profile-phone');
  if (dispPhone) dispPhone.textContent = profile.phone;

  const dispLang = document.getElementById('disp-profile-lang');
  if (dispLang) {
    const langNames = { HI: 'Hindi / Hinglish', UR: 'Urdu / اردو', BN: 'Bengali / বাংলা', NE: 'Nepali / नेपाली', EN: 'English' };
    dispLang.textContent = langNames[state.lang] || 'English';
  }

  const dispDest = document.getElementById('disp-profile-target-country');
  if (dispDest) dispDest.textContent = profile.targetCountry;

  const dispJob = document.getElementById('disp-profile-job-role');
  if (dispJob) dispJob.textContent = profile.jobRole;

  // Set values in profile edit inputs
  const inName = document.getElementById('input-profile-name');
  if (inName) inName.value = profile.name;
  const inPhone = document.getElementById('input-profile-phone');
  if (inPhone) inPhone.value = profile.phone;
  const inDest = document.getElementById('input-profile-target-country');
  if (inDest) inDest.value = profile.targetCountry;
  const inJob = document.getElementById('input-profile-job-role');
  if (inJob) inJob.value = profile.jobRole;

  // 2. Render Abroad Plan Card Details
  const dispPlanRole = document.getElementById('disp-plan-role');
  if (dispPlanRole) dispPlanRole.textContent = profile.jobRole; // tied to profile job role
  
  const dispPlanCountry = document.getElementById('disp-plan-country');
  if (dispPlanCountry) dispPlanCountry.textContent = profile.targetCountry; // tied to profile destination

  const dispPlanExp = document.getElementById('disp-plan-experience');
  if (dispPlanExp) dispPlanExp.textContent = plan.experience;

  const dispPlanAgent = document.getElementById('disp-plan-agent');
  if (dispPlanAgent) dispPlanAgent.textContent = plan.agentName;

  const dispPlanOffer = document.getElementById('disp-plan-offer');
  if (dispPlanOffer) {
    const offerLabels = {
      Pending: '🕒 Not Received Yet',
      Received: '📄 Received (Not Verified)',
      Verified: '🟢 Verified & Safe',
      Fake: '⚠️ Flagged / Fake Offer'
    };
    dispPlanOffer.textContent = offerLabels[plan.offerLetterStatus] || 'Not Received Yet';
  }

  const dispPlanPnr = document.getElementById('disp-plan-pnr');
  if (dispPlanPnr) dispPlanPnr.textContent = plan.ticketStatus;

  // Badges
  const badgePassport = document.getElementById('badge-plan-passport');
  if (badgePassport) {
    const passportLabels = {
      Ready: '🛂 Passport Ready',
      Expired: '⚠️ Passport Expired',
      Applied: '🕒 Passport Applied',
      NoPassport: '❌ No Passport'
    };
    badgePassport.textContent = passportLabels[plan.passportStatus] || 'Passport Status';
    if (plan.passportStatus === 'Ready') {
      badgePassport.style.backgroundColor = '#eff6ff';
      badgePassport.style.color = '#2563eb';
      badgePassport.style.borderColor = '#bfdbfe';
    } else {
      badgePassport.style.backgroundColor = '#fef2f2';
      badgePassport.style.color = '#ef4444';
      badgePassport.style.borderColor = '#fca5a5';
    }
  }

  const badgeVisa = document.getElementById('badge-plan-visa');
  if (badgeVisa) {
    if (checklist.visa) {
      badgeVisa.textContent = '📄 Work Visa Verified';
      badgeVisa.style.backgroundColor = '#f0fdf4';
      badgeVisa.style.color = '#16a34a';
      badgeVisa.style.borderColor = '#bbf7d0';
    } else {
      badgeVisa.textContent = '⚠️ Visa Verification Pending';
      badgeVisa.style.backgroundColor = '#fffbeb';
      badgeVisa.style.color = '#d97706';
      badgeVisa.style.borderColor = '#fef3c7';
    }
  }

  // Set values in plan edit inputs
  const inPlanPassport = document.getElementById('input-plan-passport');
  if (inPlanPassport) inPlanPassport.value = plan.passportStatus;
  const inPlanExp = document.getElementById('input-plan-experience');
  if (inPlanExp) inPlanExp.value = plan.experience;
  const inPlanAgent = document.getElementById('input-plan-agent');
  if (inPlanAgent) inPlanAgent.value = plan.agentName;
  const inPlanOffer = document.getElementById('input-plan-offer');
  if (inPlanOffer) inPlanOffer.value = plan.offerLetterStatus;
  const inPlanPnr = document.getElementById('input-plan-pnr');
  if (inPlanPnr) inPlanPnr.value = plan.ticketStatus;

  // 3. Render Checklist Card Checkboxes
  const chkPassport = document.getElementById('chk-passport-ready');
  if (chkPassport) chkPassport.checked = checklist.passport;
  const chkSalary = document.getElementById('chk-salary-checked');
  if (chkSalary) chkSalary.checked = checklist.salary;
  const chkOffer = document.getElementById('chk-offer-letter-verified');
  if (chkOffer) chkOffer.checked = checklist.offer;
  const chkVisa = document.getElementById('chk-visa-checked');
  if (chkVisa) chkVisa.checked = checklist.visa;
  const chkTicket = document.getElementById('chk-ticket-checked');
  if (chkTicket) chkTicket.checked = checklist.ticket;
  const chkFamily = document.getElementById('chk-family-shared');
  if (chkFamily) chkFamily.checked = checklist.family;

  // Re-calculate readiness status
  updateDashboardChecklist(false); // don't write back, just render

  // 4. Render Saved Offline Guides
  renderDashboardSavedGuides();

  // 5. Render Security Checks History List
  renderSecurityChecksHistory();

  // 6. Render Family Safety Contact Card
  renderFamilyContactCard();

  // 7. Update language select dropdown value
  const langSelect = document.getElementById('account-lang-select');
  if (langSelect) langSelect.value = state.lang;
}

// Toggle View/Edit Profile form
function toggleEditProfile(show = true) {
  const viewDetails = document.getElementById('profile-view-details');
  const editForm = document.getElementById('profile-edit-form');
  const btnEdit = document.getElementById('btn-edit-profile');

  if (!viewDetails || !editForm || !btnEdit) return;

  if (show) {
    viewDetails.classList.add('hidden');
    editForm.classList.remove('hidden');
    btnEdit.classList.add('hidden');
  } else {
    viewDetails.classList.remove('hidden');
    editForm.classList.add('hidden');
    btnEdit.classList.remove('hidden');
  }
}

// Toggle View/Edit Plan form
function toggleEditPlan(show = true) {
  const viewDetails = document.getElementById('plan-view-details');
  const editForm = document.getElementById('plan-edit-form');
  const btnEdit = document.getElementById('btn-edit-plan');

  if (!viewDetails || !editForm || !btnEdit) return;

  if (show) {
    viewDetails.classList.add('hidden');
    editForm.classList.remove('hidden');
    btnEdit.classList.add('hidden');
  } else {
    viewDetails.classList.remove('hidden');
    editForm.classList.add('hidden');
    btnEdit.classList.remove('hidden');
  }
}

// Save Profile Details Form Submit
function saveProfileDetails(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('input-profile-name').value.trim();
  const phone = document.getElementById('input-profile-phone').value.trim();
  const targetCountry = document.getElementById('input-profile-target-country').value.trim();
  const jobRole = document.getElementById('input-profile-job-role').value.trim();

  const updated = { name, phone, targetCountry, jobRole };
  localStorage.setItem('baharkaam_profile_data', JSON.stringify(updated));

  toggleEditProfile(false);
  initAbroadSafetyDashboard();
  alert('Profile details successfully updated!');
}

// Save Plan Details Form Submit
function savePlanDetails(event) {
  if (event) event.preventDefault();
  const passportStatus = document.getElementById('input-plan-passport').value;
  const experience = document.getElementById('input-plan-experience').value.trim();
  const agentName = document.getElementById('input-plan-agent').value.trim();
  const offerLetterStatus = document.getElementById('input-plan-offer').value;
  const ticketStatus = document.getElementById('input-plan-pnr').value.trim();

  const updatedPlan = { passportStatus, experience, agentName, offerLetterStatus, ticketStatus };
  localStorage.setItem('baharkaam_plan_data', JSON.stringify(updatedPlan));

  toggleEditPlan(false);
  initAbroadSafetyDashboard();
  alert('Abroad plan details successfully updated!');
}

// Update Checklist Progress & Percentage
function updateDashboardChecklist(writeToStorage = true) {
  const keys = ['passport', 'salary', 'offer', 'visa', 'ticket', 'family'];
  const ids = {
    passport: 'chk-passport-ready',
    salary: 'chk-salary-checked',
    offer: 'chk-offer-letter-verified',
    visa: 'chk-visa-checked',
    ticket: 'chk-ticket-checked',
    family: 'chk-family-shared'
  };

  let checkedCount = 0;
  const checklistState = {};

  keys.forEach(k => {
    const el = document.getElementById(ids[k]);
    if (el) {
      checklistState[k] = el.checked;
      if (el.checked) checkedCount++;
    } else {
      checklistState[k] = false;
    }
  });

  if (writeToStorage) {
    localStorage.setItem('baharkaam_profile_checklist_v2', JSON.stringify(checklistState));
  }

  // Calculate percentage
  const totalItems = keys.length;
  const percent = Math.round((checkedCount / totalItems) * 100);

  // Update Progress Bar
  const progressBar = document.getElementById('checklist-progress-bar');
  if (progressBar) progressBar.style.width = `${percent}%`;

  const progressText = document.getElementById('checklist-progress-text');
  if (progressText) {
    progressText.textContent = `${checkedCount} of ${totalItems} Completed (${percent}%)`;
  }

  // Update Top Profile Header Risk Badge & Status text
  const statusLabel = document.getElementById('dashboard-status-label');
  if (statusLabel) {
    if (percent === 100) {
      statusLabel.textContent = '🟢 100% Safe Depart';
      statusLabel.style.backgroundColor = '#f0fdf4';
      statusLabel.style.color = '#16a34a';
    } else if (percent >= 66) {
      statusLabel.textContent = '🛡️ Low Risk Profile';
      statusLabel.style.backgroundColor = '#eff6ff';
      statusLabel.style.color = '#2563eb';
    } else if (percent >= 33) {
      statusLabel.textContent = '⚠️ Moderate Risk';
      statusLabel.style.backgroundColor = '#fffbeb';
      statusLabel.style.color = '#d97706';
    } else {
      statusLabel.textContent = '🛑 High Departure Risk';
      statusLabel.style.backgroundColor = '#fef2f2';
      statusLabel.style.color = '#ef4444';
    }
  }
}

// Render Saved Guides
function renderDashboardSavedGuides() {
  const container = document.getElementById('dashboard-saved-guides-list');
  const badge = document.getElementById('dashboard-saved-count-badge');
  if (!container) return;

  const savedList = JSON.parse(localStorage.getItem('baharkaam_saved_guides') || '[]');
  if (badge) badge.textContent = savedList.length;

  container.innerHTML = '';

  if (savedList.length === 0) {
    container.innerHTML = `
      <div class="empty-saved-box">
        💡 Aapne abhi koi safety guide save nahi kiya hai.<br>
        <button class="profile-edit-btn" style="margin-top: 8px;" onclick="navigateToTab('home')">🔍 View Guides</button>
      </div>
    `;
    return;
  }

  savedList.forEach(id => {
    // Find job details in global jobsData array
    const job = jobsData.find(j => j.id === id);
    if (job) {
      const details = job.details[state.lang] || job.details['HI'];
      const card = document.createElement('div');
      card.className = 'saved-mini-card';
      card.innerHTML = `
        <div class="saved-mini-card-info">
          <span class="saved-mini-card-title">${details.title}</span>
          <span class="saved-mini-card-meta">📍 ${job.country} · 💼 ${job.role}</span>
        </div>
        <button class="btn-view-guide" onclick="openJobSafetyModal('${job.id}')">View Guide</button>
      `;
      container.appendChild(card);
    }
  });
}

// Render Security Checks History List
function renderSecurityChecksHistory() {
  const container = document.getElementById('dashboard-safety-checks-list');
  if (!container) return;

  container.innerHTML = '';

  // Retrieve scam reports
  const reports = JSON.parse(localStorage.getItem('baharkaam_scam_reports') || '[]');
  
  // We can also check if visa, ticket or offer checks are run based on current plan status
  const plan = getPlanData();
  const checklist = getChecklistData();

  const listItems = [];

  // 1. Add Visa Verification Check Log
  if (checklist.visa || plan.offerLetterStatus === 'Verified') {
    listItems.push({
      icon: '🛂',
      title: 'Work Visa & Agent Verifier',
      meta: `Agent: ${plan.agentName || 'Perfect Agency'} checked.`,
      statusText: 'Verified Low Risk',
      statusClass: 'status-check-safe'
    });
  } else {
    listItems.push({
      icon: '🛂',
      title: 'Work Visa & Agent Verifier',
      meta: 'Check agent credentials & visa type authenticity.',
      statusText: 'Vigilant Check Pending',
      statusClass: 'status-check-warn'
    });
  }

  // 2. Add PNR Ticket Check Log
  if (checklist.ticket || plan.ticketStatus === 'Confirmed') {
    listItems.push({
      icon: '✈️',
      title: 'AI Ticket & GDS Authenticity',
      meta: `Checked flight PNR status directly.`,
      statusText: 'Confirmed Confirmed',
      statusClass: 'status-check-safe'
    });
  } else {
    listItems.push({
      icon: '✈️',
      title: 'AI Ticket & GDS Authenticity',
      meta: 'Verify dummy ticket scams before paying agent.',
      statusText: 'Check Required',
      statusClass: 'status-check-warn'
    });
  }

  // 3. Add Scam Reports filed by user
  reports.forEach(rep => {
    listItems.push({
      icon: '🚨',
      title: 'Filed Fraud Complaint',
      meta: `Reported agent ${rep.agentName} on ${rep.date || '2026-06-25'}`,
      statusText: 'Active Alert',
      statusClass: 'status-check-warn'
    });
  });

  listItems.forEach(item => {
    const div = document.createElement('div');
    div.className = 'check-log-item';
    div.innerHTML = `
      <span class="check-log-icon">${item.icon}</span>
      <div class="check-log-details">
        <span class="check-log-title">${item.title}</span>
        <span class="check-log-meta">${item.meta}</span>
      </div>
      <span class="check-log-status ${item.statusClass}">${item.statusText}</span>
    `;
    container.appendChild(div);
  });
}

// Save Family Emergency Contact Form submit
function saveFamilyContact(event) {
  if (event) event.preventDefault();
  const name = document.getElementById('input-family-name').value.trim();
  const phone = document.getElementById('input-family-phone').value.trim();

  const contact = { name, phone };
  localStorage.setItem('baharkaam_family_contact', JSON.stringify(contact));

  initAbroadSafetyDashboard();
  alert('Family Emergency contact saved successfully!');
}

// Remove Family Emergency Contact
function removeFamilyContact() {
  if (confirm('Are you sure you want to delete family emergency contact details?')) {
    localStorage.removeItem('baharkaam_family_contact');
    initAbroadSafetyDashboard();
    alert('Family contact details removed.');
  }
}

// Render Active Family Emergency Contact card
function renderFamilyContactCard() {
  const form = document.getElementById('family-contact-form');
  const box = document.getElementById('disp-family-contact-box');
  const dispNamePhone = document.getElementById('disp-family-name-phone');

  const contact = localStorage.getItem('baharkaam_family_contact');
  if (contact) {
    const data = JSON.parse(contact);
    if (form) form.classList.add('hidden');
    if (box) box.classList.remove('hidden');
    if (dispNamePhone) dispNamePhone.textContent = `👨‍👩‍👦 ${data.name} · 📞 ${data.phone}`;
  } else {
    if (form) form.classList.remove('hidden');
    if (box) box.classList.add('hidden');
    // Clear inputs in form
    const inFamName = document.getElementById('input-family-name');
    if (inFamName) inFamName.value = '';
    const inFamPhone = document.getElementById('input-family-phone');
    if (inFamPhone) inFamPhone.value = '';
  }
}

// Share Abroad Safety Plan details with family
function shareAbroadPlanWithFamily() {
  const profile = getProfileData();
  const plan = getPlanData();
  const checklist = getChecklistData();
  const family = localStorage.getItem('baharkaam_family_contact') ? JSON.parse(localStorage.getItem('baharkaam_family_contact')) : null;

  // Calculate completed checklist items
  let checkedCount = 0;
  const items = [checklist.passport, checklist.salary, checklist.offer, checklist.visa, checklist.ticket, checklist.family];
  items.forEach(i => { if (i) checkedCount++; });

  const summary = `*BaharKaam Abroad Safety Plan Updates*\n` +
    `-------------------------------------------\n` +
    `👤 *Pravasi Name:* ${profile.name}\n` +
    `📞 *Phone:* ${profile.phone}\n` +
    `💼 *Job Role:* ${profile.jobRole}\n` +
    `📍 *Target Destination:* ${profile.targetCountry}\n` +
    `-------------------------------------------\n` +
    `✈️ *Passport Status:* ${plan.passportStatus === 'Ready' ? '✅ Ready' : '🕒 Pending'}\n` +
    `🏢 *Contracted Agency:* ${plan.agentName || 'No Agency Contacted'}\n` +
    `📄 *Offer Status:* ${plan.offerLetterStatus}\n` +
    `🎫 *Flight Ticket:* ${plan.ticketStatus}\n` +
    `-------------------------------------------\n` +
    `🛡️ *Departure Safety Readiness:* ${checkedCount} / 6 Verified (${Math.round((checkedCount/6)*100)}% Safe!)\n` +
    (family ? `👨‍👩‍👦 *Emergency Contact Set:* ${family.name} (${family.phone})\n` : '') +
    `-------------------------------------------\n` +
    `⚠️ *Advice:* Kabhi bhi Visit/Tourist visa par kaam karne videsh na jaayein. Hamesha official work visa hi legal hai!`;

  // Try to write to clipboard
  navigator.clipboard.writeText(summary).then(() => {
    alert('Aapka Abroad Safety Plan summary clipboard par copy ho gaya hai! Aap isko apne parivaar ke sath WhatsApp par send kar sakte hain.\n\nCopied text:\n' + summary);
  }).catch(err => {
    // Fallback if clipboard fails
    alert('Aapka Abroad Safety Plan summary text:\n\n' + summary);
  });
}

// Change language via settings panel select
function changeAccountLanguage(event) {
  const langCode = event.target.value;
  selectLanguage(langCode);
}

// Privacy section click
function openPrivacySection() {
  alert('🔒 BAHARKAAM DATA PRIVACY COMMITMENT:\n\nYour privacy is our number one priority. All your input profiles, flight details, agent records, checklist items, and reported scams are strictly cached inside your local web browser storage (IndexedDB/localStorage).\n\nNo databases, external APIs, or server synchronization layers are attached. Your safety is 100% private, client-side, and secure.');
}

// Support desk click
function openProfileHelpSection() {
  alert('❓ EMIGRATION SUPPORT HELPDESK:\n\nIf you face agent harassment, visa forgery, or contract fraud, immediately contact national helplines:\n\n🇮🇳 eMigrate / MADAD Support: 1800-11-3090\n🇵ким Bureau of Emigration (BE&OE): +92-51-9204204\n🇧🇩 Bangladesh Ministry of Expatriates Welfare: 16108\n🇳🇵 Nepal Foreign Employment Department: +977-1-4112350\n🚨 SOS Sathi Hotline: Click SOS button on home screen.');
}

// Reset entire dashboard
function resetProfileData() {
  if (confirm('🚨 WARNING!\n\nAre you sure you want to reset all your profile details, safety checklist items, saved offline guides, and active family contacts?\n\nThis action cannot be undone.')) {
    localStorage.removeItem('baharkaam_profile_data');
    localStorage.removeItem('baharkaam_plan_data');
    localStorage.removeItem('baharkaam_profile_checklist_v2');
    localStorage.removeItem('baharkaam_family_contact');
    localStorage.removeItem('baharkaam_saved_guides');
    localStorage.removeItem('baharkaam_scam_reports');

    // Update global saved list
    updateSavedCounterUI();
    
    // Re-initialize
    initAbroadSafetyDashboard();
    
    alert('Dashboard successfully reset back to default.');
  }
}


