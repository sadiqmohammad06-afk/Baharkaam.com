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
    cardRoadmapDesc: 'Source checked jobs, apply process',
    cardVisacheckTitle: 'Visa Fraud Check',
    cardVisacheckDesc: 'Fake visa & offer letter guide',
    cardSalaryTitle: 'Salary Guide',
    cardSalaryDesc: 'Salary, documents, country roadmap',
    cardMoneyTitle: 'Money & Govt Help',
    cardMoneyDesc: 'Rates, loan warnings, schemes',
    
    // Category Pills
    filterAll: 'Sabhi Roles',
    filterConst: '🏗️ Construction Jobs',
    filterFactory: '🏭 Factory & Packing',
    filterDriver: '🚛 Driver & Operator',
    filterHotel: '🏨 Hotel & Catering',
    
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
    btnViewDetails: 'View Full Details',
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

    // Modal Bodies Content
    bodyAbout: 'BaharKaam bharat aur dakshin asia ka sabse bada trust aur safety platform hai. Hum pravasi kamgaro ko sahi jaankari, visa fraud check karne ke tarike aur asli salary metrics pradan karte hain taaki unhe thaga na ja sake.',
    bodyContact: 'Kisi bhi madad ke liye support@baharkaam.com par email karein ya hamare verified helpdesk par baat karein. Emergency sawalo ka jawab 2 ghante mein diya jata hai.',
    bodyPrivacy: 'Aapki privacy hamari sabse badi priority hai. Aapki saari profile information aur scam reports local browser mein safe rehti hain. Hum kisi bhi unverified agent ko aapka data nahi dete.',
    bodyTerms: 'BaharKaam sirf ek suchna pradan karne wala portal hai. Hum visa, naukri ya money transfer service nahi dete. Kisi bhi agent ko paise dene se pehle offer letter zaroor verify karein.',
    bodyDisclaimer: 'Exchange rates aur salary ki jaankari sarkari bank records aur official sources se li gayi hai. Asli contract niyam alag ho sakte hain. Apne legal agreement ko dhyan se padhein.',
    bodyEditorial: 'Hamari jaankari certified migration vakeelo aur human rights experts dwara check ki jati hai. Hum unverified agencies se koi sponsored job post accept nahi karte.',
    bodyCorrections: 'Agar aapko koi galat exchange rate ya galat salary milti hai, toh corrections@baharkaam.com par batayein. Hum use 24 ghante ke andar theek karenge.',
    bodySafety: '1. Kisi bhi agent ko advance cash bina receipt ke na dein. <br>2. Apne work permit ki jaanch directly embassy se karein. <br>3. Passport aur contract ki photo family ke paas backup rakhein. <br>4. Visit ya tourist visa par videsh kaam karne na jayein.',

    // Scam Form Elements
    scamTitle: 'Report Predatory Agent Scam',
    scamWarnTitle: '⚠️ HELP PROTECT OTHER MIGRANTS',
    scamWarnDesc: 'Kya kisi agent ne aapse visa processing ke naam par gair-kanooni extra cash liya hai? Ya fake job offer letter diya hai? Uska report darj karein taaki hum local workers ko aware kar sakein.',
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
    cardRoadmapDesc: 'تصدیق شدہ ملازمتیں، درخواست کا طریقہ کار',
    cardVisacheckTitle: 'ویزا فراڈ کی جانچ',
    cardVisacheckDesc: 'جعلی ویزا اور آفر لیٹر کی گائیڈ',
    cardSalaryTitle: 'تنخواہ کی گائیڈ',
    cardSalaryDesc: 'تنخواہ، ضروری دستاویزات، ملکی روڈ میپ',
    cardMoneyTitle: 'پیسہ اور سرکاری مدد',
    cardMoneyDesc: 'شرح مبادلہ، قرض کی وارننگ، اسکیمیں',
    
    // Category Pills
    filterAll: 'تمام جابز',
    filterConst: '🏗️ تعمیراتی کام',
    filterFactory: '🏭 فیکٹری اور پیکنگ',
    filterDriver: '🚛 ڈرائیور اور آپریٹر',
    filterHotel: '🏨 ہوٹل اور کیٹرنگ',
    
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
    btnViewDetails: 'مکمل تفصیلات دیکھیں',
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

    // Modal Bodies Content
    bodyAbout: 'باہر کام بھارت اور جنوبی ایشیا کا سب سے بڑا ٹرسٹ اور سیفٹی پلیٹ فارم ہے جو بیرون ملک جانے والے ملازمین کے لیے کام کرتا ہے۔ ہم ویزا فراڈ کیلکولیٹر اور حقیقی تنخواہوں کے ذریعے ملازمین کو استحصال سے بچاتے ہیں۔',
    bodyContact: 'مدد کی ضرورت ہے؟ ہمیں support@baharkaam.com پر ای میل کریں یا ہمارے تصدیق شدہ ہیلپ ڈیسک سے رابطہ کریں۔ ہنگامی سوالات کا جواب ۲ گھنٹے کے اندر دیا جاتا ہے۔',
    bodyPrivacy: 'آپ کی رازداری ہماری ترجیح ہے۔ آپ کی تمام معلومات اور اسکیم رپورٹس مقامی براؤزر میں محفوظ رہتی ہیں۔ ہم آپ کا ڈیٹا کسی بھی غیر تصدیق شدہ ایجنٹ کو نہیں دیتے۔',
    bodyTerms: 'باہر کام صرف معلوماتی پورٹل ہے۔ ہم ویزا، نوکریاں یا مالیاتی خدمات فراہم نہیں کرتے۔ صارفین کو فریق ثالث ایجنٹوں کے ساتھ لین دین سے پہلے تصدیق کرنی چاہیے۔',
    bodyDisclaimer: 'تمام کرنسی ریٹس اور تنخواہوں کے اعداد و شمار مرکزی بینک اور سرکاری ذرائع سے لیے گئے ہیں۔ اصل معاہدے کی شرائط مختلف ہو سکتی ہیں۔ اپنا معاہدہ غور سے پڑھیں۔',
    bodyEditorial: 'ہماری معلومات کی تصدیق قانونی ماہرین اور انسانی حقوق کے نمائندے کرتے ہیں۔ ہم غیر تصدیق شدہ ایجنسیوں سے کسی قسم کا سپانسرڈ اشتہار قبول نہیں کرتے۔',
    bodyCorrections: 'اگر آپ کو کوئی غلط ریٹ یا تنخواہ نظر آئے تو ہمیں corrections@baharkaam.com پر مطلع کریں۔ ہم ۲۴ گھنٹے کے اندر اس کی تصدیق کر کے درست کریں گے۔',
    bodySafety: '۱۔ بغیر رسید کے کسی ایجنٹ کو پیشگی نقد رقم نہ دیں۔ <br>۲۔ اپنے ورک پرمٹ کی تصدیق براہ راست سفارت خانے سے کریں۔ <br>۳۔ پاسپورٹ اور معاہدے کی تصویر اپنے خاندان کے پاس محفوظ رکھیں۔ <br>۴۔ وزٹ یا ٹورسٹ ویزا پر کام کرنے بیرون ملک نہ جائیں۔',

    // Scam Form Elements
    scamTitle: 'ایجنٹ کے فراڈ کی رپورٹ کریں',
    scamWarnTitle: '⚠️ دوسرے مسافروں کو محفوظ رکھیں',
    scamWarnDesc: 'کیا کسی ایجنٹ نے آپ سے ویزا کے نام پر غیر قانونی نقد رقم لی ہے یا جعلی آفر لیٹر دیا ہے؟ رپورٹ درج کریں تاکہ دوسرے بھائیوں کو ہوشیار کیا جا سکے۔',
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
    cardRoadmapTitle: 'सुरक्षित কাজের রোডম্যাপ',
    cardRoadmapDesc: 'যাচাইকৃত কাজের উৎস ও আবেদন প্রক্রিয়া',
    cardVisacheckTitle: 'ভিসা জালিয়াতি পরীক্ষা',
    cardVisacheckDesc: 'জাল ভিসা ও অফার লেটার চেনার উপায়',
    cardSalaryTitle: 'বেতনের সঠিক নির্দেশিকা',
    cardSalaryDesc: 'দেশের বেতন বাস্তবতা ও নথিপত্রের তালিকা',
    cardMoneyTitle: 'অর্থ ও সরকারি সাহায্য',
    cardMoneyDesc: 'বিনিময় হার, লোন ওয়ার্নিং ও সরকারি স্কিম',
    
    // Category Pills
    filterAll: 'সব কাজ',
    filterConst: '🏗️ কনস্ট্রাকশন কাজ',
    filterFactory: '🏭 ফ্যাক্টরি ও প্যাকিং',
    filterDriver: '🚛 ড্রাইভার ও অপারেটর',
    filterHotel: '🏨 হোটেল ও ক্যাটারিং',
    
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
    btnViewDetails: 'বিস্তারিত দেখুন',
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

    // Modal Bodies Content
    bodyAbout: 'বাহারকাম হলো প্রবাসী শ্রমিকদের জন্য দক্ষিণ এশিয়ার অন্যতম প্রধান ট্রাস্ট ও সেফটি প্ল্যাটফর্ম। আমরা শ্রমিকদের সঠিক তথ্য, ভিসা জালিয়াতি যাচাইকরণ এবং সঠিক বেতনের তথ্য দিয়ে প্রতারণা থেকে রক্ষা করি।',
    bodyContact: 'যেকোনো সহায়তার জন্য support@baharkaam.com-এ ইমেল করুন বা আমাদের ভেরিফাইড হেল্পডেস্কে যোগাযোগ করুন। আমরা ২ ঘণ্টার মধ্যে জরুরি প্রশ্নের উত্তর দিই।',
    bodyPrivacy: 'আপনার গোপনীয়তা আমাদের প্রধান অগ্রাধিকার। আপনার সমস্ত তথ্য এবং জালিয়াতি রিপোর্ট স্থানীয় ব্রাউজারে সুরক্ষিত থাকে। আমরা কোনো অনিবন্ধিত এজেন্টের সাথে ডেটা শেয়ার করি না।',
    bodyTerms: 'বাহারকাম কেবল একটি তথ্যবহুল পোর্টাল। আমরা কোনো ভিসা বা সরাসরি চাকরি প্রদান করি না। কোনো এজেন্টকে টাকা দেওয়ার আগে অবশ্যই অফার লেটার যাচাই করে নেবেন।',
    bodyDisclaimer: 'বিনিময় হার এবং বেতনের তথ্য সেন্ট্রাল ব্যাংক ও সরকারি সূত্র থেকে নেওয়া হয়েছে। আসল চুক্তির নিয়ম ভিন্ন হতে পারে। আপনার আইনি চুক্তিটি ভালোভাবে পড়ে নিন।',
    bodyEditorial: 'আমাদের সমস্ত তথ্য প্রত্যয়িত অভিবাসন আইনজীবী এবং মানবাধিকার বিশেষজ্ঞদের দ্বারা যাচাই করা হয়। আমরা কোনো অনিবন্ধিত এজেন্সির বিজ্ঞাপন প্রকাশ করি না।',
    bodyCorrections: 'যদি আপনি কোনো ভুল বিনিময় হার বা বেতনের তথ্য লক্ষ্য করেন, তবে corrections@baharkaam.com-এ যোগাযোগ করুন। আমরা ২৪ ঘণ্টার মধ্যে তা সংশোধন করব।',
    bodySafety: '১. রসিদ ছাড়া কোনো এজেন্টকে অগ্রিম টাকা দেবেন না। <br>২. আপনার ওয়ার্ক পারমিট সরাসরি দূতাবাসের মাধ্যমে যাচাই করুন। <br>৩. আপনার পাসপোর্ট এবং চুক্তিনামার ছবি পরিবারের সাথে শেয়ার রাখুন। <br>৪. ভিজিট বা ট্যুরিস্ট ভিসায় কাজের উদ্দেশ্যে বিদেশ যাবেন না।',

    // Scam Form Elements
    scamTitle: 'দালালের জালিয়াতি রিপোর্ট করুন',
    scamWarnTitle: '⚠️ অন্যান্য অভিবাসীদের সুরক্ষিত রাখুন',
    scamWarnDesc: 'কোনো দালাল কি আপনার থেকে ভিসার নামে অতিরিক্ত টাকা নিয়েছে বা জাল অফফার লেটার দিয়েছে? এখানে রিপোর্ট করুন যাতে অন্য শ্রমিকরা সতর্ক হতে পারে।',
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
    cardRoadmapDesc: 'प्रमाणित कामको स्रोत र आवेदन प्रक्रिया',
    cardVisacheckTitle: 'भिसा जालसाजी जाँच',
    cardVisacheckDesc: 'नक्कली भिसा र अफर लेटर चिन्ने तरिका',
    cardSalaryTitle: 'तलव निर्देशिका',
    cardSalaryDesc: 'देशको तलब वास्तविकता र कागजातको सूची',
    cardMoneyTitle: 'पैसा र सरकारी सहयोग',
    cardMoneyDesc: 'विनिमय दर, ऋण चेतावनी र योजनाहरू',
    
    // Category Pills
    filterAll: 'सबै काम',
    filterConst: '🏗️ कन्स्ट्रक्सन काम',
    filterFactory: '🏭 फ्याक्ट्री र प्याकिङ',
    filterDriver: '🚛 ड्राइभर र अपरेटर',
    filterHotel: '🏨 होटल र क्याटरिङ',
    
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
    btnViewDetails: 'विवरण हेर्नुहोस्',
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

    // Modal Bodies Content
    bodyAbout: 'बाहरकाम दक्षिण एशियाका वैदेशिक रोजगारमा जाने श्रमिकहरूको लागि एक प्रमुख सुरक्षित प्लेटफर्म हो। हामी श्रमिकहरूलाई ठगीबाट बचाउन सही सूचना, भिसा फ्रड क्याल्कुलेटर र वास्तविक तलबको विवरण प्रदान गर्दछौं।',
    bodyContact: 'सहयोगको लागि support@baharkaam.com मा इमेल गर्नुहोस् वा हाम्रो प्रमाणित हेल्प डेस्कमा सम्पर्क गर्नुहोस्। हामी २ घण्टा भित्र सहयोग गर्नेछौं।',
    bodyPrivacy: 'तपाईंको गोपनीयता हाम्रो प्राथमिकता हो। तपाईंका सबै प्रोफाइल विवरण र रिपोर्टहरू स्थानीय ब्राउजरमा सुरक्षित रहन्छन्। हामी एजेन्टहरूलाई तपाईंको डाटा बेच्दैनौं।',
    bodyTerms: 'बाहरकाम केवल जानकारी दिने पोर्टल हो। हामी भिसा वा प्रत्यक्ष रोजगार दिँदैनौं। कुनै पनि एजेन्टलाई पैसा दिनु अघि अफर लेटर अवश्य जाँच गर्नुहोस्।',
    bodyDisclaimer: 'सबै विनिमय दर र तलबको विवरण केन्द्रीय बैंक र सरकारी स्रोतबाट लिइएको हो। वास्तविक सम्झौता फरक हुन सक्छ। आफ्नो सम्झौता पत्र ध्यानपूर्वक पढ्नुहोस्।',
    bodyEditorial: 'हाम्रा जानकारीहरू प्रमाणित आप्रवासन वकील र मानव अधिकार विज्ञहरूद्वारा जाँच गरिन्छ। हामी असुरक्षित एजेन्सीहरूबाट प्रायोजित पोस्टहरू स्वीकार गर्दैनौं।',
    bodyCorrections: 'यदि तपाईंले कुनै गलत विनिमय दर वा तलब विवरण फेला पार्नुभयो भने corrections@baharkaam.com मा सम्पर्क गर्नुहोस्। हामी २४ घण्टा भित्र सच्याउनेछौं।',
    bodySafety: '१. रसिद बिना कुनै पनि एजेन्टलाई पैसा नदिनुहोस्। <br>२. आफ्नो श्रम स्वीकृति (वर्क परमिट) सिधै राजदूतावासबाट जाँच गर्नुहोस्। <br>३. आफ्नो राहदानी र सम्झौता पत्रको फोटो परिवारमा सुरक्षित राख्नुहोस्। <br>४. भिजिट वा टुरिष्ट भिसामा काम गर्न विदेश नजानुहोस्।',

    // Scam Form Elements
    scamTitle: 'दलालको ठगी रिपोर्ट गर्नुहोस्',
    scamWarnTitle: '⚠️ अन्य कामदारहरूलाई सुरक्षित राख्नुहोस्',
    scamWarnDesc: 'के कुनै एजेन्टले भिसाको नाममा तपाईंबाट अतिरिक्त पैसा लिएको छ वा नक्कली अफर लेटर दिएको छ? यहाँ रिपोर्ट गर्नुहोस् ताकी अरु सचेत हुन सकून्।',
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
    cardRoadmapDesc: 'Source checked jobs, apply process',
    cardVisacheckTitle: 'Visa Fraud Check',
    cardVisacheckDesc: 'Fake visa & offer letter guide',
    cardSalaryTitle: 'Salary Guide',
    cardSalaryDesc: 'Salary, documents, country roadmap',
    cardMoneyTitle: 'Money & Govt Help',
    cardMoneyDesc: 'Rates, loan warnings, schemes',
    
    // Category Pills
    filterAll: 'All Roles',
    filterConst: '🏗️ Construction Jobs',
    filterFactory: '🏭 Factory & Packing',
    filterDriver: '🚛 Driver & Operator',
    filterHotel: '🏨 Hotel & Catering',
    
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
    btnViewDetails: 'View Full Details',
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

    // Modal Bodies Content
    bodyAbout: 'BaharKaam is India/South Asia’s leading trust and safety platform for blue-collar overseas migrants. We empower workers with verified information, visa fraud risk calculators, and real salary metrics to prevent exploitation and human trafficking.',
    bodyContact: 'Need assistance? Email us at support@baharkaam.com or contact our verified regional helpdesks. We respond to emergency queries within 2 hours.',
    bodyPrivacy: 'Your privacy is our priority. All your profile information and scam reports are stored locally in your browser. We never share or sell your personal data to unverified recruitment agents.',
    bodyTerms: 'BaharKaam is an information-only portal. We do not provide visas, job placements, or financial services. Users must verify all job offers before transacting with third-party agents.',
    bodyDisclaimer: 'All currency exchange rates and salary statistics are compiled from official central bank records and government sources. Actual contract terms may vary. Check your legal agreement thoroughly.',
    bodyEditorial: 'Our information is strictly vetted by certified migration lawyers and human rights experts. We do not accept sponsored job postings from unverified agencies to maintain absolute safety.',
    bodyCorrections: 'If you spot an outdated exchange rate or incorrect salary metric, contact us at corrections@baharkaam.com. We verify and correct all data issues within 24 hours of reporting.',
    bodySafety: '1. Never pay advance cash before getting a registered receipt. <br>2. Verify your work permit directly with the embassy. <br>3. Keep digital photos of your passport and contract with your family. <br>4. Never travel on a tourist/visit visa to work.'
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
    agentCheck: 'Agent Check'
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
    vcAlertDesc: 'وزٹ یا ٹورسٹ ویزا پر کام کرنا غیر قانونی ہے۔ ایجنٹ وزٹ ویزا پر بھیج کر ورک پرمٹ کا جھوٹا وعدہ کرتے ہیں۔ آپ کو جیل، ملک بدری یا پابندی کا سامنا کرنا پڑ سکتا ہے۔',
    vcHeading: 'ویزا فراڈ کی تصدیق کی جانچ',
    vcCheckpointsTitle: '🔍 اصلی اور جعلی ویزا کے اہم چیک پوائنٹس',
    vcCp1Title: 'سرکاری پورٹل کیو آر چیک',
    vcCp1Desc: 'وزارت محنت کی آفیشل ویب سائٹ پر پاسپورٹ کے ذریعے ویزا کی تصدیق کریں۔',
    vcCp2Title: 'ریکروٹر کے لائسنس کی جانچ',
    vcCp2Desc: 'بھرتی کرنے والی ایجنسی کا سرکاری لائسنس لازمی چیک کریں۔',
    vcCp3Title: 'رسید کے بغیر کوئی ادائیگی نہ کریں',
    vcCp3Desc: 'رقم دینے کے بعد اگر رجسٹرڈ تحریری رسید نہیں ملتی تو یہ ۱۰۰٪ فراڈ ہے۔',
    calcFormTitle: '📊 باہر کام ویزا فراڈ رسک کیلکولیٹر',
    calcFormSubtitle: 'سرکاری قوانین اور لیبر قوانین کے مطابق خطرے کا حساب لگائیں:',
    lblAgentName: 'ایجنٹ یا ایجنسی کا نام:',
    lblCountry: 'مطلوبہ ملک:',
    lblVisaType: 'ویزے کی قسم جس کا وعدہ کیا گیا:',
    lblMoney: 'طلب کردہ رقم (مقامی کرنسی میں):',
    lblPassport: 'کیا اصل پاسپورٹ قبضے میں لے لیا گیا ہے؟ (ہاں / نہیں):',
    lblReceipt: 'کیا ادائیگی کی رسید پیش کی گئی ہے؟:',
    btnCalcSubmit: 'خطرے کی سطح چیک کریں',
    optVisaWork: 'ورک ویزا / ملازمت (🟢 محفوظ)',
    optVisaVisit: 'وزٹ / ٹورسٹ / آزاد ویزا (🔴 انتہائی خطرناک)',
    optVisaOther: 'ٹرانزٹ / غیر واضح ویزا (🟡 زیادہ خطرہ)',
    optPassportNo: 'نہیں، اصل پاسپورٹ میرے پاس محفوظ ہے',
    optPassportYes: 'ہاں، ایجنٹ نے اصل پاسپورٹ اپنے پاس رکھ لیا ہے (🔴 خطرہ)',
    optReceiptYes: 'ہاں، مناسب رجسٹرڈ رسید دی گئی ہے',
    optReceiptNo: 'نہیں، بغیر کسی قانونی دستاویز کے نقد لین دین (🔴 خطرہ)',
    optScamVisit: 'وزٹ ویزا پر بھیج کر ورک ویزا نہ لگوانا (آزاد ویزا ٹریپ)',
    optScamCash: 'اضافی رقم لے کر جعلی آفر لیٹر دینا',
    optScamPassport: 'اصل پاسپورٹ زبردستی رکھ کر بلیک میل کرنا',
    optScamSalary: 'بیرون ملک بھیج کر معاہدے سے کم تنخواہ دینا',
    govtSchemesTitle: '🏛️ سرکاری فلاحی اسکیمیں اور امدادی قرضے',
    govtSchemesDesc: 'بیرون ملک جانے کے لیے دلالوں سے بھاری سود پر قرضہ نہ لیں۔ سرکاری بینکوں اور فلاحی اداروں سے رابطہ کریں:',
    govtCardIn: '🇮🇳 ہندوستانی فلاحی اسکیمیں اور قرضے',
    govtCardInDesc: 'ای مائیگریٹ پورٹل رجسٹریشن، ایس بی آئی پرواسی لون، اور پی بی بی وائی ۱۰ لاکھ کا انشورنس تحفظ۔',
    govtCardPk: '🇵🇰 اوورسیز پاکستانی فاؤنڈیشن (OPF)',
    govtCardPkDesc: 'او پی ایف بلا سود قرضے، پروٹیکٹر آف ایمیگرنٹس کی جانچ، اور رہائشی رہنمائی۔',
    govtCardBd: '🇧🇩 بنگلہ دیشی پرواسی فلاحی خدمات',
    govtCardBdDesc: 'پرواسی کلیان بینک سے کم شرح سود پر سفری قرضے اور ویج ارنرز فلاحی بورڈ کی مدد۔',
    govtCardNp: '🇳🇵 نیپال کا مہاجر فلاحی فنڈ',
    govtCardNpDesc: 'فارن ایمپلائمنٹ بورڈ گرانٹ اور منظور شدہ محنت نامہ ہولڈرز کے लिए बैंकंग जमानती कर्जै।',
    footCopyright: '© 2026 باہر کام۔ محفوظ بیرون ملک ملازمت کا معلوماتی گائیڈ۔',
    alertSaved: 'گائیڈ کامیابی کے ساتھ آپ کے آف لائن پروفائل میں محفوظ ہو گئی ہے!',
    alertRemoved: 'گائیڈ محفوظ کردہ فہرست سے ہٹا دی گئی ہے۔',
    alertCopied: 'تفصیلات کامیابی کے ساتھ کلپ بورڈ پر کاپی ہو گئیں۔ اب آپ واٹس ایپ پر پیسٹ کر سکتے ہیں۔',
    alertCopyFailed: 'کاپی کرنے میں ناکامی۔ براہ کرم کاپی کرنے کے لیے کارڈ کا ٹیکسٹ خود منتخب کریں۔',
    sathiRecommendation: 'سفارش: ',
    lblSecurityProtocolTitle: 'حفاظتی پروٹوکول:',
    lblSecurityProtocolBody: 'اصل پاسپورٹ کبھی کسی کے حوالے نہ کریں۔ گوگل ڈرائیو یا جی میل پر اسکین شدہ کاپیاں محفوظ رکھیں۔ صرف آفیشل بینک وائر سے ادائیگی کریں۔',
    reasonVisit: 'وزٹ، ٹورسٹ یا آزاد ویزا پر کام کرنا غیر قانونی ہے۔ جیل یا ملک بدری کا بڑا خطرہ ہے۔',
    reasonOther: 'ٹرانزٹ ویزا یا بغیر کسی واضح معاہدے کے بھیجا جا رہا ہے، جو انتہائی غیر تصدیق شدہ ہے۔',
    reasonReceipt: 'تحریری رسید کے بغیر نقد لین دین ۱۰۰ فیصد فراڈ کا اشارہ ہے۔ ثبوت کے بغیر شکایت درج نہیں کی جا سکتی۔',
    reasonPassport: 'اصل پاسپورٹ اپنے پاس رکھنا قانوناً جرم ہے۔ یہ پاسپورٹ ہولڈر کی حفاظت کے خلاف ہے۔',
    reasonMoneyHigh: 'مقررہ حد سے زیادہ رقم کا مطالبہ کرنا بھرتی قوانین کی خلاف ورزی اور مالی استحصال ہے۔',
    reasonMoneyStandard: 'مطلوبہ فیس معمول سے زیادہ معلوم ہوتی ہے۔ براہ کرم ایمبیسی سے لائسنس کی تصدیق کریں۔',
    reasonAllClear: 'تمام بنیادی شرائط پوری ہیں۔ پھر بھی کمپنی کی رجسٹریشن کی دوبارہ تصدیق کر لیں۔',
    agentCheck: 'ایجنٹ کی جانچ'
  },
  BN: {
    rmSec1Title: '🌐 বৈশ্বিক প্রবাসী গন্তব্যসমূহ',
    rmSec1Desc: 'সরাসরি যাচাইকৃত চ্যানেলগুলি ৯টি প্রধান দেশে অনুমোদিত রয়েছে:',
    rmSec2Title: '⚙️ ধাপে ধাপে নিরাপদ আবেদন প্রক্রিয়া',
    rmStep1Title: 'পাসপোর্ট যাচাইকরণ',
    rmStep1Desc: 'পাসপোর্টের মেয়াদ অন্তত ২ বছর থাকতে হবে, নাম এবং স্বাক্ষর সঠিক হতে হবে।',
    rmStep2Title: 'শুধুমাত্র যাচাইকৃত তথ্য উৎস',
    rmStep2Desc: 'কোনো দালালের কাছ থেকে ভিসা নেবেন না। সাথী এআই ব্যবহার করে সরাসরি লাইসেন্সপ্রাপ্ত রিক্রুটিং এজেন্সির খোঁজ নিন।',
    rmStep3Title: 'লিখিত শ্রম চুক্তিনামা যাচাই',
    rmStep3Desc: 'স্পন্সরশিপ, মূল বেতন, আবাসন, খাবার, বিমান টিকিট এবং কাজের সময় চুক্তিতে ভালো করে দেখে নিন।',
    rmStep4Title: 'মেডিকেল ও পুলিশ ছাড়পত্র',
    rmStep4Desc: 'সবসময় সরকার অনুমোদিত কেন্দ্র থেকে মেডিকেল করাবেন এবং পরিষ্কার পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC) সংগ্রহ করুন।',
    rmSec3Title: '✓ প্রয়োজনীয় নথিপত্রের চেকলিস্ট',
    rmDocItem1: '✓ পাসপোর্টের প্রথম ও শেষ পাতার স্পষ্ট স্ক্যান',
    rmDocItem2: '✓ অভিজ্ঞতা সনদ বা কারিগরি প্রশিক্ষণ कार्ड',
    rmDocItem3: '✓ গামকা (GAMCA) অনুমোদিত মেডিকেল ফিটনেস কপি',
    rmDocItem4: '✓ পুলিশ ক্লিয়ারেন্স সার্টিফিকেট (PCC)',
    rmDocItem5: '✓ শ্রম চুক্তির স্বাক্ষরিত কপি',
    rmSec4Title: '🔴 রিয়েল-টাইম সতর্কবার্তা: খাবার ও আবাসন শর্তাবলী',
    rmSec4Desc: 'অনেক এজেন্ট বিনামূল্যে খাবারের কথা বললেও বেতন থেকে টাকা কেটে নেয়। লিখিত চুক্তি থাকা আবশ্যক। নিরাপদ কাজের স্কোর ৯০% এর বেশি থাকা জরুরি।',
    vcAlertTitle: '⚠️ চাকরির উদ্দেশ্যে ভিজিট বা টুরিস্ট ভিসা সবসময় এড়িয়ে চলুন',
    vcAlertDesc: 'ভিজিট বা টুরিস্ট ভিসায় কাজ করা সম্পূর্ণ বেআইনি। এজেন্টরা ভিজিট ভিসায় পাঠিয়ে কাজের ভিসা করে দেওয়ার মিথ্যা প্রলোভন দেখায়। এতে জেল, জরিমানা বা নিষেধাজ্ঞা হতে পারে।',
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
    agentCheck: 'এজেন্ট যাচাইকরণ'
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
    agentCheck: 'एजेन्ट प्रमाणीकरण'
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
    agentCheck: 'Agent Check'
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
    category: 'Driver & Operator',
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
    category: 'Factory & Packing',
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
    category: 'Hotel & Catering',
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
    category: 'Factory & Packing',
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
      title: 'Naya QR-code wala Work visa check niyam shuru kiya KSA Ministry of Human Resources ne',
      source: 'Sarkari Labour Board',
      date: 'June 18, 2026',
      category: 'Visa Update',
      alert: false
    },
    UR: {
      title: 'سعودی وزارتِ انسانی وسائل نے کیو آر کوڈ پر مبنی ورک ویزا کی تصدیق کا نیا نظام شروع کر دیا',
      source: 'سرکاری لیبر بورڈ',
      date: '۱۸ جون، ۲۰۲۶',
      category: 'ویزا اپ ڈیٹ',
      alert: false
    },
    BN: {
      title: 'সৌদি মানবসম্পদ মন্ত্রণালয় কিউআর-কোড ভিত্তিক ওয়ার্ক ভিসা যাচাইয়ের নতুন নিয়ম চালু করেছে',
      source: 'সরকারি লেবার বোর্ড',
      date: '১৮ জুন, ২০২৬',
      category: 'ভিসা আপডেট',
      alert: false
    },
    NE: {
      title: 'साउदी मानव संसाधन मन्त्रालयले QR-code मा आधारित श्रम भिसा जाँचको नयाँ नियम सुरु गरेको छ',
      source: 'सरकारी श्रम बोर्ड',
      date: 'जुन १८, २०२६',
      category: 'भिसा अपडेट',
      alert: false
    },
    EN: {
      title: 'KSA Ministry of Human Resources launches new QR-code based work visa check systems',
      source: 'Govt Labour Board',
      date: 'June 18, 2026',
      category: 'Visa Update',
      alert: false
    }
  },
  {
    id: 'news-2',
    HI: {
      title: 'SABSE BADI ALERTM: Nakli offline agent se bachein, UAE ne bina licence ke logo ka visa band kiya',
      source: 'Visa Security Department',
      date: 'June 21, 2026',
      category: 'Security Alert',
      alert: true
    },
    UR: {
      title: 'اہم حفاظتی الرٹ: بغیر لائسنس والے ایجنٹوں کے جھوٹے وعدوں سے بچیں، یو اے ای نے غیر رجسٹرڈ ویزے بند کر دیے',
      source: 'ویزا سیکیورٹی ڈیپارٹمنٹ',
      date: '۲۱ جون، ۲۰۲۶',
      category: 'سیکیورٹی الرٹ',
      alert: true
    },
    BN: {
      title: 'সবচেয়ে বড় সতর্কবার্তা: জাল অফলাইন দালাল থেকে দূরে থাকুন, লাইসেন্সবিহীন এজেন্সির ভিসা বাতিল করছে ইউএই',
      source: 'ভিসা নিরাপত্তা বিভাগ',
      date: '২১ জুন, ২০২৬',
      category: 'নিরাপত্তা অ্যালার্ট',
      alert: true
    },
    NE: {
      title: 'सबैभन्दा ठूलो सतर्कता: नक्कली अफलाइन एजेन्टबाट बच्नुहोस्, युएईले बिना लाइसेन्सका एजेन्सीको भिसा बन्द गर्यो',
      source: 'भिसा सुरक्षा विभाग',
      date: 'जुन २१, २०२६',
      category: 'सुरक्षा चेतावनी',
      alert: true
    },
    EN: {
      title: 'URGENT SECURITY ALERT: Avoid unverified offline sub-agents, UAE deactivates unlicensed visas',
      source: 'Visa Security Department',
      date: 'June 21, 2026',
      category: 'Security Alert',
      alert: true
    }
  },
  {
    id: 'news-3',
    HI: {
      title: 'Kam byaj (low-interest) sarkaari migration loans khul gaya hai - Abhi apply karein',
      source: 'Reserve Bank Bulletin',
      date: 'June 15, 2026',
      category: 'Loan Scheme',
      alert: false
    },
    UR: {
      title: 'کم سود والے سرکاری مائیگریشن قرضے اب دستیاب ہیں - آج ہی چیک کریں',
      source: 'ریزرو بینک بلیٹن',
      date: '۱۵ جون، ۲۰۲۶',
      category: 'قرض اسکیم',
      alert: false
    },
    BN: {
      title: 'স্বল্প সুদে সরকারি অভিবাসন ঋণ চালু হয়েছে - এখনই বিস্তারিত যাচাই করুন',
      source: 'রিজার্ভ ব্যাংক বুলেটিন',
      date: '১৫ জুন, ২০২৬',
      category: 'ঋণ প্রকল্প',
      alert: false
    },
    NE: {
      title: 'कम ब्याजको सरकारी आप्रवासन ऋण खुला भएको छ - आजै चेक गर्नुहोस्',
      source: 'रिजर्भ बैंक बुलेटिन',
      date: 'जुन १५, २०२६',
      category: 'ऋण योजना',
      alert: false
    },
    EN: {
      title: 'Low-interest government welfare migration loans now active - apply securely',
      source: 'Reserve Bank Bulletin',
      date: 'June 15, 2026',
      category: 'Loan Announcement',
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

  // Initialize saved counter in profile
  const savedList = JSON.parse(localStorage.getItem('baharkaam_saved_guides') || '[]');
  document.getElementById('profile-saved-count').textContent = savedList.length;

  // Initialize default salary guide view
  renderSalaryCountryDetails(state.selectedSalaryCountry);

  // Load News list
  renderNews();

  // Load safety jobs feed
  renderJobs();
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
    'btn-filter-all': t.filterAll,
    'btn-filter-const': t.filterConst,
    'btn-filter-factory': t.filterFactory,
    'btn-filter-driver': t.filterDriver,
    'btn-filter-hotel': t.filterHotel,
    
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
    'sos-rules-desc': t.sosDisclaimer
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
    filtered = filtered.filter(job => job.category === state.selectedCategory);
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

  filtered.forEach(job => {
    const details = job.details[state.lang] || job.details['HI'];
    
    const card = document.createElement('div');
    card.className = 'safety-job-card';
    card.id = `job-card-${job.id}`;

    // Source trust badge color
    const badgeClass = job.riskLevel === 'low' ? 'source-checked' : 'source-careful';
    const badgeText = job.riskLevel === 'low' ? `🟢 Verified Checked` : `🟡 Check Carefully`;

    // Risk level text
    const riskText = job.riskLevel === 'low' ? '🟢 Safe (Verified)' : '🟡 Careful (Vigilant)';

    card.innerHTML = `
      <div class="job-header-row" style="display: flex; flex-direction: column; gap: 4px; width: 100%;">
        <div class="badge-wrapper" style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 4px;">
          <span class="job-cert-badge" style="font-size: 8px; font-weight: 800; background-color: var(--blue-light); color: var(--blue-primary); border: 1px solid rgba(37, 99, 235, 0.15); padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">${job.visaType.includes('Work') ? 'Work Visa Legal' : 'Strict Check'}</span>
          <span class="job-source-badge ${badgeClass}" style="font-size: 8.5px; font-weight: 800; padding: 2px 6px; border-radius: 4px; display: flex; align-items: center; gap: 2.5px; border: 1px solid;">${badgeText} (Score: ${job.safetyScore}%)</span>
        </div>
        <h4 class="job-title-h4" style="font-family: var(--font-display); font-size: 14px; font-weight: 800; color: #1e293b; margin: 4px 0 2px 0; line-height: 1.25;">${details.title}</h4>
        <p class="job-agent-p" style="font-size: 11px; font-weight: 600; color: var(--text-muted); margin-top: 1px; margin-bottom: 8px;">${details.company}</p>
      </div>

      <div class="job-stats-info-grid" style="display: grid; grid-template-cols: 1fr 1fr; gap: 8px; border-top: 1px solid #f1f5f9; padding-top: 8px; font-size: 11.5px; margin-top: 6px;">
        <div class="stat-item" style="display: flex; align-items: center; gap: 5px; font-weight: 700; color: #334155;">
          <strong>📍 ${t.lblCountry || 'Country'}:</strong> <span style="font-weight: 600; margin-left: 4px;">${job.country}</span>
        </div>
        <div class="stat-item salary-accent" style="display: flex; align-items: center; gap: 5px; font-weight: 700; color: var(--emerald-primary);">
          <strong>💰 ${t.lblSalary || 'Salary'}:</strong> <span style="font-weight: 600; margin-left: 4px;">${job.salaryRange} ${job.currency}/Mo</span>
        </div>
        <div class="stat-item" style="display: flex; align-items: center; gap: 5px; font-weight: 700; color: #334155;">
          <strong>📄 ${t.lblVisaType || 'Visa'}:</strong> <span style="font-weight: 600; margin-left: 4px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${job.visaType}</span>
        </div>
        <div class="stat-item" style="display: flex; align-items: center; gap: 5px; font-weight: 700; color: #334155;">
          <strong>🔒 ${t.lblRiskLevel || 'Risk'}:</strong> <span style="font-weight: 600; margin-left: 4px;">${riskText}</span>
        </div>
      </div>

      <!-- Warning Warning Warning -->
      <div class="job-important-warning-box" style="background-color: #fef3c7; border: 1px solid #fde68a; padding: 10px; border-radius: 10px; font-size: 10px; font-weight: 700; color: #92400e; margin-top: 10px; line-height: 1.35;">
        <strong>⚠️ ${t.lblWarning || 'Warning'}:</strong> ${details.warning}
      </div>

      <!-- Action Buttons Footer -->
      <div class="job-action-buttons-footer" style="display: grid; grid-template-cols: 1fr 1fr; gap: 6px; margin-top: 12px; width: 100%;">
        <button class="job-btn-action action-btn-details" style="grid-column: span 2; padding: 8px 10px; font-weight: 800; font-size: 10.5px; border-radius: 10px; cursor: pointer;" onclick="openJobSafetyModal('${job.id}')">
          🔍 ${t.btnViewDetails}
        </button>
        <button class="job-btn-action action-btn-checklist" style="padding: 8px 10px; font-weight: 800; font-size: 10.5px; border-radius: 10px; cursor: pointer;" onclick="openJobChecklistModal('${job.id}')">
          ✅ ${t.btnSafetyCheck}
        </button>
        <button class="job-btn-action action-btn-share" style="padding: 8px 10px; font-weight: 800; font-size: 10.5px; border-radius: 10px; cursor: pointer;" onclick="openFamilyShareModal('${job.id}')">
          👨‍👩‍👦 ${t.btnFamilyKoBhejo}
        </button>
      </div>

      <div style="font-size: 8px; color: var(--text-muted); font-family: var(--font-mono); text-align: right; margin-top: 8px;">
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
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
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
        <span>Passport is valid for at least 2 years and names match your legal records.</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>Work Permit/Visa scanned and verified as fully authentic.</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>Written agreement contains the promised salary (${job.salaryRange} ${job.currency}).</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>GAMCA Medical fit report uploaded to government portal.</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>Police Clearance Certificate (PCC) issued by your local police station.</span>
      </label>

      <label style="display: flex; gap: 10px; align-items: flex-start; background: #fafafa; border: 1px solid #e5e5e5; padding: 10px; border-radius: 10px; cursor: pointer; font-size: 11px; font-weight: 600;">
        <input type="checkbox" style="margin-top: 2px;" onchange="updateChecklistProgress('${job.id}')">
        <span>Shared full job details with your family via "Family Ko Bhejo" button.</span>
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
