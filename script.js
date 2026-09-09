/**
 * Lucky Mobile (லக்கி மொபைல்) - Interactive Application Logic
 * 1. Advanced Interactive Touching Effect (Canvas Particles + Glow Pointer + Touch Ripples)
 * 2. 3D Tilt Element Engine for Cards & Poster
 * 3. Corner Poster & Lightbox Modal Controller
 * 4. Bilingual translation (English <-> Tamil)
 * 5. Dynamic Smartphone Catalog with Category Filters & Search
 * 6. Instant Repair & Service Cost Estimator
 */

// Phone Catalog Data (Reflecting multi-brand poster: iPhone, Samsung, Vivo, Oppo, OnePlus, Redmi, Realme, Tecno, Poco, Infinix)
const phonesData = [
  {
    id: 1,
    name: "Vivo V40 5G",
    brand: "Vivo",
    brandClass: "vivo",
    category: "midrange",
    is5G: true,
    price: 34999,
    emi: "₹1,944/mo",
    badge: "ZEISS Portrait",
    badgeType: "offer",
    specs: ["50MP ZEISS Camera", "5500 mAh Battery", "8GB RAM + 128GB"]
  },
  {
    id: 2,
    name: "Apple iPhone 15",
    brand: "Apple",
    brandClass: "apple",
    category: "flagship",
    is5G: true,
    price: 58999,
    emi: "₹4,916/mo",
    badge: "Fest Special",
    badgeType: "offer",
    specs: ["Dynamic Island", "48MP Main Camera", "A16 Bionic Chip"]
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 / A15",
    brand: "Samsung",
    brandClass: "samsung",
    category: "midrange",
    is5G: true,
    price: 16499,
    emi: "₹1,375/mo",
    badge: "5G Bestseller",
    badgeType: "5g",
    specs: ["Super AMOLED 90Hz", "50MP Triple Camera", "5000 mAh Battery"]
  },
  {
    id: 4,
    name: "OnePlus Nord CE4 Lite 5G",
    brand: "OnePlus",
    brandClass: "apple",
    category: "midrange",
    is5G: true,
    price: 19999,
    emi: "₹1,666/mo",
    badge: "80W SuperVOOC",
    badgeType: "5g",
    specs: ["Sony LYT-600 OIS", "5500 mAh Battery", "Dual Stereo Speakers"]
  },
  {
    id: 5,
    name: "Redmi Note 13 5G",
    brand: "Redmi",
    brandClass: "redmi",
    category: "midrange",
    is5G: true,
    price: 15999,
    emi: "₹1,333/mo",
    badge: "108MP Camera",
    badgeType: "5g",
    specs: ["108MP Super-clear Cam", "120Hz AMOLED Screen", "33W Fast Charger"]
  },
  {
    id: 6,
    name: "Realme 12x 5G",
    brand: "Realme",
    brandClass: "realme",
    category: "budget",
    is5G: true,
    price: 11999,
    emi: "₹999/mo",
    badge: "Budget 5G King",
    badgeType: "5g",
    specs: ["Dimensity 6100+ 5G", "45W SuperVOOC Charge", "120Hz Display"]
  },
  {
    id: 7,
    name: "Tecno Spark 20 Pro+ / POCO X6",
    brand: "Tecno",
    brandClass: "vivo",
    category: "budget",
    is5G: true,
    price: 14499,
    emi: "₹1,208/mo",
    badge: "Curved AMOLED",
    badgeType: "offer",
    specs: ["108MP Camera", "120Hz Curved AMOLED", "Helio G99 Ultimate"]
  },
  {
    id: 8,
    name: "Redmi 13C / Itel 5G",
    brand: "Redmi",
    brandClass: "redmi",
    category: "budget",
    is5G: false,
    price: 7999,
    emi: "₹799/mo",
    badge: "Top Budget Value",
    badgeType: "normal",
    specs: ["50MP AI Camera", "5000 mAh Battery", "90Hz Smooth Display"]
  }
];

// Translations Dictionary
const translations = {
  en: {
    addressShort: "76, Tiruvannamalai Rd, Thirukkanur, Puducherry 605501",
    timingShort: "Open Everyday: 9:00 AM - 9:30 PM",
    navHome: "Home",
    navPhones: "Smartphones",
    navAllServices: "Store Services",
    navAccessories: "Accessories",
    navRepairs: "Repair Estimator",
    navOffers: "Offers",
    navContact: "Location",
    chatWhatsapp: "WhatsApp",
    viewFlyerNav: "Store Flyer",
    flyerTag: "Official Flyer",
    downloadPoster: "Download Poster",
    brandMotto: "Your Mobile Our Priority",
    heroBadge: "New Arrivals Everyday • Best Deals • Trusted Service",
    heroTitle: "Latest Smartphones & Express Mobile Solutions Under One Roof",
    mottoCallout: "\"Your Mobile Our Priority\"",
    mottoSub: "Thirukkanur's most trusted smartphone & chip-level repair hub.",
    heroDesc: "Authorized multi-brand sales, 100% genuine accessories, tempered glass installation, SIM card services, and express 30-minute chip-level smartphone repair.",
    btnBrowsePhones: "Explore Phones",
    btnRepairCalc: "Repair Estimator",
    heroViewPoster: "View Store Poster",
    feat1Title: "100% Original Products",
    feat1Desc: "Sealed box & authentic parts",
    featBestPrices: "Best Price Guarantee",
    featBestPricesDesc: "Unbeatable local festival deals",
    featCustomerSat: "Customer Satisfaction",
    featCustomerSatDesc: "Fast, friendly & reliable service",
    openEveryday: "Open Everyday: 9 AM - 9:30 PM",
    touchHint: "Tap to enlarge",
    clickFullPoster: "View Full Details",
    brandBarTitle: "Authorized Sales, Accessories & Service For All Major Brands",
    matrixSubtitle: "Mobile Solutions Under One Roof",
    matrixTitle: "Sales & Services Breakdown",
    matrixDesc: "Everything you need for your smartphone — from brand new devices to chip-level servicing and utility recharges.",
    matrixSalesTitle: "SALES DEPARTMENT",
    matrixSalesSub: "New Arrivals Everyday!",
    s1: "Latest Smartphones",
    s2: "Original Accessories",
    s3: "New & Refurbished Phones",
    s4: "Exchange Offers",
    s5: "EMI / Finance Available",
    browseStockBtn: "Browse In-Stock Phones",
    matrixServicesTitle: "SERVICES DEPARTMENT",
    matrixServicesSub: "Certified Technical Experts",
    srv1: "Mobile Repairing",
    srv2: "Software Update & Unlocking",
    srv3: "Data Transfer & Backup",
    srv4: "SIM Card Services",
    srv5: "Accessories Installation",
    srv6: "Mobile Recharges & Bill Payments",
    calcRepairQuoteBtn: "Calculate Repair Quote",
    catSubtitle: "Flagships, Mid-Rangers & Budget Bestsellers",
    catTitle: "Featured Smartphones in Stock",
    catDesc: "Walk into our Thirukkanur store for live demo, easy EMI options, and instant exchange quotes.",
    filterAll: "All Phones",
    filterFlagship: "Flagship / Premium",
    filterMid: "Mid-Range (₹12k - ₹25k)",
    filterBudget: "Budget (Under ₹12k)",
    filter5G: "5G Specials",
    accSubtitle: "Keep Your Phone Powered & Protected",
    accTitle: "Must-Have Mobile Accessories",
    accDesc: "100% genuine chargers, fast charging cables, high-bass earbuds, smartwatches, and unbreakable screen guards.",
    acc1Title: "Tempered Glass & UV Protectors",
    acc1Desc: "Edge-to-edge 9D, matte, privacy, and UV tempered glass applied with zero bubbles.",
    acc2Title: "Fast Chargers & Type-C Cables",
    acc2Desc: "Original 20W, 33W, 67W, 100W PD adapters, braided cables for iPhone and Android.",
    acc3Title: "TWS Earbuds & Neckbands",
    acc3Desc: "Noise-cancelling wireless earbuds, boAt, Noise, OnePlus, and Realme audio accessories.",
    acc4Title: "Smartwatches & Fitness Bands",
    acc4Desc: "Bluetooth calling smartwatches, AMOLED displays with heart rate and fitness tracking.",
    acc5Title: "Power Banks (10k / 20k mAh)",
    acc5Desc: "High-capacity flight-friendly power banks with quick charge 3.0 & two-way Type-C.",
    acc6Title: "Trendy Back Covers & Pouches",
    acc6Desc: "Shockproof silicon, leather wallet cases, MagSafe covers, and custom printed cases.",
    repairSubtitle: "Quick & Reliable Chip-Level Care",
    repairTitle: "Instant Mobile Repair Cost Estimator",
    repairDesc: "Broken screen? Battery draining fast? Water damage? Get an instant cost estimate and turnaround time. We offer on-the-spot repair with transparent pricing.",
    repBen1: "30 to 60 Minutes Quick Screen / Battery Swap",
    repBen2: "Up to 90 Days Warranty on Replacement Displays",
    repBen3: "Free Device Diagnostics & Inspection",
    repBen4: "100% Data Privacy & Safe Component Handling",
    repairCallHelp: "Need immediate technician advice?",
    calcHeader: "Calculate Repair Estimate",
    calcSub: "Select your phone details below",
    lblBrand: "1. Select Phone Brand",
    lblModel: "2. Model Name / Number",
    lblIssue: "3. What is the Problem?",
    estPriceLbl: "Estimated Cost:",
    estTimeLbl: "Service Time:",
    estNote: "*Final price subject to exact model and OEM/Original display choice upon store inspection.",
    btnBookRepair: "Book This Repair on WhatsApp",
    limitedOffer: "Exclusive Thirukkanur Store Offer",
    offerHeading: "Upgrade Your Old Phone Today!",
    offerDesc: "Bring any working or broken old smartphone to Lucky Mobile and get an instant cash exchange value up to ₹3,000 extra bonus on your new smartphone purchase.",
    enquireExchange: "Check Exchange Value",
    contactSubtitle: "Easy to Find in Thirukkanur",
    contactTitle: "Visit Our Store or Contact Us",
    storeTagline: "\"Your Mobile Our Priority\" — Multi-Brand Mobile Sales & Service Center",
    addressLabel: "Store Address:",
    hoursLabel: "Operating Hours:",
    allDaysOpen: "Open All 7 Days",
    phoneLabel: "Direct Call:",
    waSupportLabel: "WhatsApp Instant Support:",
    openInMaps: "Open in Google Maps",
    footerTagline: "\"Your Mobile Our Priority\" — Serving Thirukkanur, Koodapakkam, Katterikuppam, and Puducherry with trusted smartphone deals and genuine repair services.",
    quickLinks: "Quick Links",
    popularBrands: "Brands Handled",
    btnBuyWa: "Enquire"
  },
  ta: {
    addressShort: "76, திருவண்ணாமலை ரோடு, திருக்கனூர், புதுச்சேரி 605501",
    timingShort: "அனைத்து நாட்களும்: காலை 9:00 - இரவு 9:30",
    navHome: "முகப்பு",
    navPhones: "மொபைல்கள்",
    navAllServices: "சேவைகள்",
    navAccessories: "உதிரிபாகங்கள்",
    navRepairs: "சர்வீஸ் மையம்",
    navOffers: "சலுகைகள்",
    navContact: "அமைவிடம்",
    chatWhatsapp: "வாட்ஸ்அப்",
    viewFlyerNav: "போஸ்டர்",
    flyerTag: "அதிகாரப்பூர்வ விளம்பரம்",
    downloadPoster: "போஸ்டர் பதிவிறக்கம்",
    brandMotto: "உங்கள் மொபைல் எங்கள் முன்னுரிமை",
    heroBadge: "தினமும் புதிய மாடல்கள் • சிறந்த சலுகைகள் • நம்பகமான சேவை",
    heroTitle: "அனைத்து முன்னணி மொபைல்கள் & துரித சர்வீஸ் ஒரே இடத்தில்",
    mottoCallout: "\"உங்கள் மொபைல் எங்கள் முன்னுரிமை\"",
    mottoSub: "திருக்கனூரின் தலைசிறந்த மொபைல் விற்பனை மற்றும் சர்வீஸ் மையம்.",
    heroDesc: "அசல் பிராண்ட் போன்கள், 100% ஒரிஜினல் சார்ஜர்கள் & கவர்கள், சிம் கார்டு சேவைகள் மற்றும் 30 நிமிட சிப்-லெவல் மொபைல் பழுதுநீக்கம்.",
    btnBrowsePhones: "மொபைல்களை பார்க்க",
    btnRepairCalc: "சர்வீஸ் கணக்கீடு",
    heroViewPoster: "கடை போஸ்டர் பார்க்க",
    feat1Title: "100% அசல் தயாரிப்புகள்",
    feat1Desc: "சீல் வைக்கப்பட்ட புதிய போன்கள் & உதிரிபாகங்கள்",
    featBestPrices: "சிறந்த விலை உத்தரவாதம்",
    featBestPricesDesc: "உள்ளூர் திருவிழா தள்ளுபடி சலுகைகள்",
    featCustomerSat: "வாடிக்கையாளர் திருப்தி",
    featCustomerSatDesc: "துரிதமான மற்றும் அன்பான சேவை",
    openEveryday: "அனைத்து நாட்களும்: காலை 9 - இரவு 9:30",
    touchHint: "பெரிதாக்க தொடவும்",
    clickFullPoster: "முழு விபரம் பார்க்க",
    brandBarTitle: "அனைத்து முன்னணி பிராண்டுகளும் கிடைக்கும்",
    matrixSubtitle: "அனைத்து மொபைல் தீர்வுகளும் ஒரே கூரையின் கீழ்",
    matrixTitle: "விற்பனை மற்றும் சேவைகள்",
    matrixDesc: "புதிய போன்கள் முதல் சிப்-லெவல் சர்வீஸ் மற்றும் ரீசார்ஜ் வரை அனைத்தும் இங்கு கிடைக்கும்.",
    matrixSalesTitle: "விற்பனை பிரிவு (SALES)",
    matrixSalesSub: "தினமும் புதிய மாடல்கள்!",
    s1: "லேட்டஸ்ட் ஸ்மார்ட்போன்கள்",
    s2: "அசல் மொபைல் உபகரணங்கள்",
    s3: "புதிய & தரமான பழைய போன்கள்",
    s4: "பழைய போன் எக்ஸ்சேஞ்ச் சலுகைகள்",
    s5: "எளிதான தவணை முறை (EMI)",
    browseStockBtn: "போன்களை பார்வையிட",
    matrixServicesTitle: "சர்வீஸ் பிரிவு (SERVICES)",
    matrixServicesSub: "சான்றளிக்கப்பட்ட தொழில்நுட்ப வல்லுநர்கள்",
    srv1: "மொபைல் பழுதுநீக்கம் (Repairing)",
    srv2: "சாப்ட்வேர் அப்டேட் & அன்லாக்கிங்",
    srv3: "டேட்டா டிரான்ஸ்பர் & பேக்கப்",
    srv4: "சிம் கார்டு சேவைகள் (New SIM / Porting)",
    srv5: "டெம்பர்டு கிளாஸ் & ஸ்கிரீன் கார்டு",
    srv6: "ரீசார்ஜ் மற்றும் பில் பேமெண்ட்ஸ்",
    calcRepairQuoteBtn: "சர்வீஸ் கட்டணம் அறிய",
    catSubtitle: "டாப் மாடல்கள் & பட்ஜெட் போன்கள்",
    catTitle: "விற்பனைக்கு உள்ள மொபைல்கள்",
    catDesc: "நேரடி செயல்முறை விளக்கம், எளிதான தவணை மற்றும் சிறந்த எக்ஸ்சேஞ்ச் சலுகைகளுக்கு உடனே வாருங்கள்.",
    filterAll: "அனைத்து போன்கள்",
    filterFlagship: "பிரீமியம் போன்கள்",
    filterMid: "நடுத்தர விலை (₹12k - ₹25k)",
    filterBudget: "பட்ஜெட் (₹12k கீழ்)",
    filter5G: "5G போன்கள்",
    accSubtitle: "மொபைல் பாதுகாப்பு மற்றும் உபகரணங்கள்",
    accTitle: "அனைத்து மொபைல் ஆக்சஸரீஸ்",
    accDesc: "100% ஒரிஜினல் ஃபாஸ்ட் சார்ஜர்கள், கேபிள்கள், ஹெட்போன்கள், ஸ்மார்ட்வாட்ச் மற்றும் டெம்பர்டு கிளாஸ்.",
    acc1Title: "டெம்பர்டு கிளாஸ் & UV பாதுகாப்பு",
    acc1Desc: "9D, மேட், பிரைவசி மற்றும் UV கிளாஸ் பபுள் இன்றி ஒட்டித் தரப்படும்.",
    acc2Title: "ஃபாஸ்ட் சார்ஜர்கள் & கேபிள்கள்",
    acc2Desc: "20W, 33W, 67W, 100W PD சார்ஜர்கள் மற்றும் பிரைடட் கேபிள்கள்.",
    acc3Title: "ப்ளூடூத் இயர்பட்ஸ் & நெக்பேண்ட்",
    acc3Desc: "boAt, Noise, OnePlus, Realme உள்ளிட்ட தரமான ஆடியோ சாதனங்கள்.",
    acc4Title: "ஸ்மார்ட் வாட்ச்கள்",
    acc4Desc: "ப்ளூடூத் காலிங், AMOLED டிஸ்ப்ளே மற்றும் ஃபிட்னஸ் டிராக்கர் வாட்ச்கள்.",
    acc5Title: "பவர் பேங்க் (10k / 20k mAh)",
    acc5Desc: "நீண்ட நேரம் சார்ஜ் நிற்கும் தரமான ஃபாஸ்ட் சார்ஜிங் பவர் பேங்குகள்.",
    acc6Title: "ஃபேஷன் பேக் கவர்கள்",
    acc6Desc: "சிலிகான், லெதர், MagSafe மற்றும் டிசைனர் கவர்கள் அனைத்து மாடல்களுக்கும்.",
    repairSubtitle: "துரித மற்றும் நம்பகமான பழுதுநீக்கம்",
    repairTitle: "மொபைல் சர்வீஸ் கட்டணம் தெரிந்துகொள்ள",
    repairDesc: "டிஸ்ப்ளே உடைந்ததா? சார்ஜ் நிற்கவில்லையா? தண்ணீர் புகுந்துவிட்டதா? உடனடியாக உத்தேச செலவை கணக்கிட்டு வாட்ஸ்அப்பில் பதிவு செய்யுங்கள்.",
    repBen1: "30 முதல் 60 நிமிடங்களில் டிஸ்ப்ளே மாற்றம்",
    repBen2: "டிஸ்ப்ளே மாற்றத்திற்கு 90 நாட்கள் வரை வாரண்டி",
    repBen3: "இலவச மொபைல் பரிசோதனை",
    repBen4: "100% வாடிக்கையாளர் தரவு பாதுகாப்பு (Data Safe)",
    repairCallHelp: "உடனடி சர்வீஸ் உதவி தேவையா?",
    calcHeader: "சர்வீஸ் செலவை கணக்கிடுங்கள்",
    calcSub: "உங்கள் போன் விபரங்களை தேர்ந்தெடுக்கவும்",
    lblBrand: "1. மொபைல் பிராண்ட்",
    lblModel: "2. மாடல் பெயர் / எண்",
    lblIssue: "3. என்ன பிரச்சினை?",
    estPriceLbl: "உத்தேச கட்டணம்:",
    estTimeLbl: "ஆகும் நேரம்:",
    estNote: "*மொபைல் மாடல் மற்றும் தேர்ந்தெடுக்கப்படும் பாகத்தின் தரத்திற்கு ஏற்ப இறுதி விலை மாறுபடலாம்.",
    btnBookRepair: "இந்த சர்வீஸை வாட்ஸ்அப்பில் புக் செய்ய",
    limitedOffer: "திருக்கனூர் வாடிக்கையாளர்களுக்கு சிறப்பு சலுகை",
    offerHeading: "உங்கள் பழைய மொபைலை உடனே மாற்றிக்கொள்ளுங்கள்!",
    offerDesc: "எந்த ஒரு பழைய அல்லது பழுதான ஸ்மார்ட்போனையும் கொண்டுவந்து புதிய போன் வாங்கும்போது ₹3,000 வரை கூடுதல் எக்ஸ்சேஞ்ச் மதிப்பு பெறுங்கள்.",
    enquireExchange: "எக்ஸ்சேஞ்ச் மதிப்பு அறிய",
    contactSubtitle: "எளிதில் கண்டறியும் அமைவிடம்",
    contactTitle: "கடைக்கு வாருங்கள் அல்லது தொடர்பு கொள்ளவும்",
    storeTagline: "\"உங்கள் மொபைல் எங்கள் முன்னுரிமை\" — மல்டி-பிராண்ட் மொபைல் விற்பனை & சர்வீஸ் மையம்",
    addressLabel: "கடை முகவரி:",
    hoursLabel: "திறந்திருக்கும் நேரம்:",
    allDaysOpen: "வாரத்தின் 7 நாட்களும் திறந்துள்ளது",
    phoneLabel: "நேரடி அழைப்பு:",
    waSupportLabel: "வாட்ஸ்அப் உதவி:",
    openInMaps: "Google Map-ல் பார்க்க",
    footerTagline: "\"உங்கள் மொபைல் எங்கள் முன்னுரிமை\" — திருக்கனூர் மற்றும் சுற்றுவட்டார மக்களுக்கு சிறந்த சேவை.",
    quickLinks: "முக்கிய இணைப்புகள்",
    popularBrands: "பிராண்டுகள்",
    btnBuyWa: "விசாரி"
  }
};

let currentLang = "en";

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("yearSpan").textContent = new Date().getFullYear();

  // 1. Setup Advanced Touching Effect & Particle Canvas
  initTouchInteractiveCanvas();

  // 2. Setup 3D Card Tilt on Touch & Mouse
  init3DTiltEngine();

  // 3. Setup Corner Poster Lightbox Modal
  initPosterModal();

  // 4. Render Smartphone Catalog
  renderProducts(phonesData);

  // 5. Filters, Search, Estimator, and Translations
  setupFilterTabs();
  setupSearch();
  setupRepairCalculator();
  setupLanguageToggle();
  setupMobileMenu();
});

// ==========================================================================
// 1. ADVANCED TOUCHING EFFECT ENGINE (CANVAS + SPOTLIGHT + RIPPLES)
// ==========================================================================
function initTouchInteractiveCanvas() {
  const canvas = document.getElementById("touchCanvas");
  const spotlight = document.getElementById("touchSpotlight");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // Particle constellation
  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 70);
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.7,
      vy: (Math.random() - 0.5) * 0.7,
      size: Math.random() * 2 + 1,
      baseColor: Math.random() > 0.6 ? "rgba(250, 204, 21, " : "rgba(56, 189, 248, "
    });
  }

  // Pointer position tracking (mouse & touch)
  const pointer = { x: -1000, y: -1000, active: false, radius: 180 };

  function updatePointer(x, y) {
    pointer.x = x;
    pointer.y = y;
    pointer.active = true;

    if (spotlight) {
      spotlight.style.opacity = "1";
      spotlight.style.left = `${x}px`;
      spotlight.style.top = `${y}px`;
    }
  }

  // Mouse events
  window.addEventListener("mousemove", (e) => {
    updatePointer(e.clientX, e.clientY);
  });

  window.addEventListener("mouseleave", () => {
    pointer.active = false;
    if (spotlight) spotlight.style.opacity = "0";
  });

  // Touch events (Mobile touching effect)
  window.addEventListener("touchmove", (e) => {
    if (e.touches.length > 0) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener("touchstart", (e) => {
    if (e.touches.length > 0) {
      const touch = e.touches[0];
      updatePointer(touch.clientX, touch.clientY);
      createTouchRipple(touch.clientX, touch.clientY);
    }
  }, { passive: true });

  // Touch click ripple anywhere
  window.addEventListener("click", (e) => {
    createTouchRipple(e.clientX, e.clientY);
  });

  function createTouchRipple(x, y) {
    const ripple = document.createElement("div");
    ripple.className = "touch-ripple";
    const size = 90;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 850);
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & Draw Particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around bounds
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Reaction to touch/pointer
      let distFromPointer = 9999;
      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        distFromPointer = Math.sqrt(dx * dx + dy * dy);

        // Gentle interactive pull toward pointer
        if (distFromPointer < pointer.radius) {
          const force = (1 - distFromPointer / pointer.radius) * 0.9;
          p.x += (dx / distFromPointer) * force;
          p.y += (dy / distFromPointer) * force;

          // Draw glowing filament to pointer
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(250, 204, 21, ${(1 - distFromPointer / pointer.radius) * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Draw particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const alpha = distFromPointer < pointer.radius ? 0.9 : 0.45;
      ctx.fillStyle = `${p.baseColor}${alpha})`;
      ctx.fill();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - dist / 110) * 0.15})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================================================
// 2. 3D CARD TILT ENGINE
// ==========================================================================
function init3DTiltEngine() {
  const elements = document.querySelectorAll(".tilt-element");

  elements.forEach(el => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

// ==========================================================================
// 3. POSTER LIGHTBOX MODAL CONTROLLER
// ==========================================================================
function initPosterModal() {
  const modal = document.getElementById("posterModal");
  const openCornerBtn = document.getElementById("openPosterModalBtn");
  const openHeroCard = document.getElementById("heroPosterCard");
  const openHeroBtn = document.getElementById("heroPosterTriggerBtn");
  const openNavBtn = document.getElementById("navFlyerBtn");
  const openMobBtn = document.getElementById("mobilePosterOpenBtn");
  const closeBtn = document.getElementById("closePosterBtn");
  const backdrop = document.getElementById("closePosterBackdrop");
  const flyerWidget = document.getElementById("cornerFlyer");
  const minimizeBtn = document.getElementById("minimizeFlyerBtn");

  function openModal() {
    if (modal) modal.classList.add("active");
  }

  function closeModal() {
    if (modal) modal.classList.remove("active");
  }

  if (openCornerBtn) openCornerBtn.addEventListener("click", openModal);
  if (openHeroCard) openHeroCard.addEventListener("click", openModal);
  if (openHeroBtn) openHeroBtn.addEventListener("click", openModal);
  if (openNavBtn) openNavBtn.addEventListener("click", openModal);
  if (openMobBtn) openMobBtn.addEventListener("click", openModal);

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  if (minimizeBtn && flyerWidget) {
    minimizeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      flyerWidget.style.display = "none";
    });
  }
}

// ==========================================================================
// 4. RENDER SMARTPHONES (WITH DARK CARD STYLING & 3D TILT)
// ==========================================================================
function renderProducts(items) {
  const container = document.getElementById("productGrid");
  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 12px; color: var(--text-dim);"></i>
        <p>No phone models found matching your search. Contact us on WhatsApp for special stock requests!</p>
      </div>
    `;
    return;
  }

  const buyBtnText = translations[currentLang].btnBuyWa || "Enquire";

  container.innerHTML = items.map(phone => {
    const waText = encodeURIComponent(`Hi Lucky Mobile, I am interested in checking stock/price for ${phone.name} (₹${phone.price.toLocaleString('en-IN')}). Is it available in your Thirukkanur shop?`);
    return `
      <div class="product-card-dark tilt-element" data-category="${phone.category}">
        <span class="product-badge-dark badge-${phone.badgeType}">${phone.badge}</span>
        <div class="product-img-box">
          <div class="product-phone-icon-dark">
            <span class="phone-cam"></span>
            <span class="phone-screen-text">${phone.brand}</span>
          </div>
        </div>
        <span class="product-brand">${phone.brand}</span>
        <h3 class="product-title">${phone.name}</h3>
        <div class="product-specs">
          ${phone.specs.map(spec => `<span><i class="fa-solid fa-check"></i> ${spec}</span>`).join('')}
        </div>
        <div class="product-footer">
          <div class="price-wrapper">
            <span class="price-val">₹${phone.price.toLocaleString('en-IN')}</span>
            <span class="emi-val">EMI from ${phone.emi}</span>
          </div>
          <a href="https://wa.me/919876543210?text=${waText}" target="_blank" class="btn-buy-wa">
            <i class="fa-brands fa-whatsapp"></i> ${buyBtnText}
          </a>
        </div>
      </div>
    `;
  }).join('');

  // Rebind 3D tilt
  init3DTiltEngine();
}

// Category Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab-dark");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");
      let filtered = [];

      if (filter === "all") {
        filtered = phonesData;
      } else if (filter === "5g") {
        filtered = phonesData.filter(p => p.is5G);
      } else {
        filtered = phonesData.filter(p => p.category === filter);
      }

      renderProducts(filtered);
    });
  });
}

// Search
function setupSearch() {
  const searchInput = document.getElementById("phoneSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase().trim();
    if (!term) {
      renderProducts(phonesData);
      return;
    }
    const filtered = phonesData.filter(p => 
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.specs.some(s => s.toLowerCase().includes(term))
    );
    renderProducts(filtered);
  });
}

// Repair Calculator
function setupRepairCalculator() {
  const brandSelect = document.getElementById("brandSelect");
  const issueSelect = document.getElementById("issueSelect");
  const modelInput = document.getElementById("modelInput");
  const priceDisplay = document.getElementById("calcPriceDisplay");
  const timeDisplay = document.getElementById("calcTimeDisplay");
  const bookBtn = document.getElementById("bookWhatsAppBtn");

  if (!brandSelect || !issueSelect) return;

  function updateEstimate() {
    const selectedOption = issueSelect.options[issueSelect.selectedIndex];
    const minPrice = parseInt(selectedOption.getAttribute("data-min"), 10) || 500;
    const maxPrice = parseInt(selectedOption.getAttribute("data-max"), 10) || 2000;
    const time = selectedOption.getAttribute("data-time") || "45 mins";

    const brand = brandSelect.value;
    let multiplier = 1.0;
    if (brand === "apple") multiplier = 1.8;
    else if (brand === "samsung" || brand === "oneplus") multiplier = 1.25;

    const calcMin = Math.round(minPrice * multiplier);
    const calcMax = Math.round(maxPrice * multiplier);

    priceDisplay.textContent = `₹${calcMin.toLocaleString('en-IN')} - ₹${calcMax.toLocaleString('en-IN')}`;
    timeDisplay.innerHTML = `<i class="fa-regular fa-clock"></i> ~${time}`;
  }

  brandSelect.addEventListener("change", updateEstimate);
  issueSelect.addEventListener("change", updateEstimate);

  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      const brand = brandSelect.options[brandSelect.selectedIndex].text;
      const issue = issueSelect.options[issueSelect.selectedIndex].text;
      const model = modelInput.value.trim() || "Unspecified Model";
      const est = priceDisplay.textContent;

      const msg = `Hi Lucky Mobile, I want to book a mobile repair at your Thirukkanur shop:
• Phone: ${brand} (${model})
• Issue: ${issue}
• Est. Quote Shown: ${est}
Please let me know when I can bring my phone.`;

      const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, "_blank");
    });
  }

  updateEstimate();
}

// Language Switcher
function setupLanguageToggle() {
  const btn = document.getElementById("langToggleBtn");
  const label = document.getElementById("currentLangLabel");

  if (!btn || !label) return;

  btn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ta" : "en";
    label.textContent = currentLang === "en" ? "தமிழ்" : "English";
    document.body.classList.toggle("lang-ta", currentLang === "ta");

    applyTranslations();
  });
}

function applyTranslations() {
  const dict = translations[currentLang];
  if (!dict) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const currentActiveTab = document.querySelector(".filter-tab-dark.active");
  const filter = currentActiveTab ? currentActiveTab.getAttribute("data-filter") : "all";
  let items = phonesData;
  if (filter === "5g") items = phonesData.filter(p => p.is5G);
  else if (filter !== "all") items = phonesData.filter(p => p.category === filter);

  renderProducts(items);
}

// Mobile Menu
function setupMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("navLinks");

  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
}
