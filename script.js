/**
 * Lucky Mobile (லக்கி மொபைல்) - Interactive Application Logic
 * Supports:
 * 1. Bilingual translation (English <-> Tamil)
 * 2. Dynamic smartphone catalog with category filters & search
 * 3. Instant Repair & Service Cost Estimator
 * 4. Custom WhatsApp inquiry generators
 */

// Phone Catalog Data
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
    badge: "Bestseller",
    badgeType: "offer",
    specs: ["50MP ZEISS Camera", "5500 mAh Battery", "8GB RAM + 128GB"]
  },
  {
    id: 2,
    name: "Redmi Note 13 5G",
    brand: "Redmi",
    brandClass: "redmi",
    category: "midrange",
    is5G: true,
    price: 15999,
    emi: "₹1,333/mo",
    badge: "5G Hot Pick",
    badgeType: "5g",
    specs: ["108MP Super-clear Cam", "120Hz AMOLED Screen", "33W Fast Charger"]
  },
  {
    id: 3,
    name: "Apple iPhone 15",
    brand: "Apple",
    brandClass: "apple",
    category: "flagship",
    is5G: true,
    price: 58999,
    emi: "₹4,916/mo",
    badge: "Special Fest Offer",
    badgeType: "offer",
    specs: ["Dynamic Island", "48MP Main Camera", "A16 Bionic Chip"]
  },
  {
    id: 4,
    name: "Samsung Galaxy A15 5G",
    brand: "Samsung",
    brandClass: "samsung",
    category: "midrange",
    is5G: true,
    price: 16499,
    emi: "₹1,375/mo",
    badge: "Long Battery",
    badgeType: "normal",
    specs: ["Super AMOLED 90Hz", "50MP Triple Camera", "5000 mAh Battery"]
  },
  {
    id: 5,
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
    id: 6,
    name: "Redmi 13C",
    brand: "Redmi",
    brandClass: "redmi",
    category: "budget",
    is5G: false,
    price: 7999,
    emi: "₹799/mo",
    badge: "Top Budget Phone",
    badgeType: "normal",
    specs: ["50MP AI Camera", "5000 mAh Battery", "90Hz Smooth Display"]
  },
  {
    id: 7,
    name: "OnePlus Nord CE4 Lite 5G",
    brand: "OnePlus",
    brandClass: "apple",
    category: "midrange",
    is5G: true,
    price: 19999,
    emi: "₹1,666/mo",
    badge: "80W SuperVOOC",
    badgeType: "5g",
    specs: ["Sony LYT-600 Camera", "5500 mAh Battery", "Dual Stereo Speakers"]
  },
  {
    id: 8,
    name: "Vivo Y28 5G",
    brand: "Vivo",
    brandClass: "vivo",
    category: "budget",
    is5G: true,
    price: 13999,
    emi: "₹1,166/mo",
    badge: "Slim & Stylish",
    badgeType: "normal",
    specs: ["Crystal Clear Camera", "5000 mAh Battery", "Dual 5G SIM"]
  }
];

// Translations Dictionary
const translations = {
  en: {
    addressShort: "76, Tiruvannamalai Rd, Thirukkanur, Puducherry",
    timingShort: "Open Everyday: 9:00 AM - 9:30 PM",
    navHome: "Home",
    navPhones: "Smartphones",
    navAccessories: "Accessories",
    navRepairs: "Repairs & Service",
    navOffers: "Offers",
    navReviews: "Reviews",
    navContact: "Contact",
    chatWhatsapp: "WhatsApp Us",
    heroBadge: "Thirukkanur's Premier Multi-Brand Mobile Hub",
    heroTitle: "Latest Smartphones & Express Mobile Repairs Under One Roof",
    heroDesc: "Authorized multi-brand sales, 100% genuine accessories, tempered glass installation, and express 30-minute chip-level smartphone repair by certified experts.",
    btnBrowsePhones: "Explore Phones",
    btnRepairCalc: "Repair Estimator",
    btnGetDirections: "Get Directions",
    feat1Title: "100% Genuine",
    feat1Desc: "Original spares & sealed box",
    feat2Title: "30-Min Express",
    feat2Desc: "Instant screen & battery fixes",
    feat3Title: "0% EMI Available",
    feat3Desc: "Bajaj & Credit card options",
    openEveryday: "Store Open Today: 9 AM - 9:30 PM",
    festivalDeal: "Special Deal",
    checkOffer: "Instant ₹3,000 Exchange Bonus",
    brandBarTitle: "Authorized Sales & Care For Top Brands",
    catSubtitle: "Flagships, Mid-Rangers & Budget Bestsellers",
    catTitle: "Featured Smartphones in Stock",
    catDesc: "Walk into our Thirukkanur store for live demo, easy EMI options, and instant exchange quotes.",
    searchPlaceholder: "Search phone models (e.g. Vivo, iPhone, Samsung)...",
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
    revSubtitle: "Trusted By Hundreds of Happy Customers",
    revTitle: "What Local Customers Say",
    writeReview: "Write a Google Review",
    contactSubtitle: "Easy to Find in Thirukkanur",
    contactTitle: "Visit Our Store or Contact Us",
    storeTagline: "Your Reliable Neighbourhood Smartphone & Service Specialist",
    addressLabel: "Store Address:",
    hoursLabel: "Operating Hours:",
    allDaysOpen: "Open All 7 Days",
    phoneLabel: "Direct Call:",
    waSupportLabel: "WhatsApp Instant Support:",
    openInMaps: "Open in Google Maps",
    footerTagline: "Serving Thirukkanur, Koodapakkam, Katterikuppam, and Puducherry with trusted smartphone deals and genuine repair services.",
    quickLinks: "Quick Links",
    popularBrands: "Brands Handled",
    btnBuyWa: "Enquire"
  },
  ta: {
    addressShort: "76, திருவண்ணாமலை ரோடு, திருக்கனூர், புதுச்சேரி",
    timingShort: "அனைத்து நாட்களும்: காலை 9:00 - இரவு 9:30",
    navHome: "முகப்பு",
    navPhones: "மொபைல்கள்",
    navAccessories: "உதிரிபாகங்கள்",
    navRepairs: "சர்வீஸ் மையம்",
    navOffers: "சலுகைகள்",
    navReviews: "கருத்துகள்",
    navContact: "தொடர்புக்கு",
    chatWhatsapp: "வாட்ஸ்அப் உதவி",
    heroBadge: "திருக்கனூரின் முன்னணி மல்டி-பிராண்ட் மொபைல் ஷோரூம்",
    heroTitle: "அனைத்து முன்னணி மொபைல்கள் & 30-நிமிட துரித சர்வீஸ்",
    heroDesc: "அசல் பிராண்ட் போன்கள், 100% ஒரிஜினல் சார்ஜர்கள் & கவர்கள், ஒரிஜினல் டிஸ்ப்ளே மாற்றம் மற்றும் சிப்-லெவல் மொபைல் சர்வீஸ் ஒரே இடத்தில்.",
    btnBrowsePhones: "மொபைல்களை பார்க்க",
    btnRepairCalc: "சர்வீஸ் கட்டணம் கணக்கிடு",
    btnGetDirections: "வழித்தடம் (Google Map)",
    feat1Title: "100% அசல் தரம்",
    feat1Desc: "சீல் வைக்கப்பட்ட புதிய போன்கள்",
    feat2Title: "30-நிமிட சர்வீஸ்",
    feat2Desc: "டிஸ்ப்ளே & பேட்டரி உடனடி மாற்றம்",
    feat3Title: "0% தவணை முறை (EMI)",
    feat3Desc: "பஜாஜ் மற்றும் கிரெடிட் கார்டு",
    openEveryday: "இன்று திறந்துள்ளது: காலை 9 - இரவு 9:30",
    festivalDeal: "சிறப்பு தள்ளுபடி",
    checkOffer: "பழைய மொபைலுக்கு ₹3,000 போனஸ்",
    brandBarTitle: "அனைத்து முன்னணி பிராண்டுகளும் கிடைக்கும்",
    catSubtitle: "டாப் மாடல்கள் & பட்ஜெட் போன்கள்",
    catTitle: "விற்பனைக்கு உள்ள மொபைல்கள்",
    catDesc: "நேரடி செயல்முறை விளக்கம், எளிதான தவணை மற்றும் சிறந்த எக்ஸ்சேஞ்ச் சலுகைகளுக்கு உடனே வாருங்கள்.",
    searchPlaceholder: "மொபைல் மாடலை தேடவும் (எ.கா: Vivo, iPhone, Samsung)...",
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
    revSubtitle: "மகிழ்ச்சியான வாடிக்கையாளர்களின் கருத்துகள்",
    revTitle: "வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்?",
    writeReview: "கூகுள் விமர்சனம் எழுத",
    contactSubtitle: "எளிதில் கண்டறியும் அமைவிடம்",
    contactTitle: "கடைக்கு வாருங்கள் அல்லது தொடர்பு கொள்ளவும்",
    storeTagline: "உங்கள் நம்பிக்கைக்குரிய அக்கம் பக்கத்து மொபைல் நிபுணர்",
    addressLabel: "கடை முகவரி:",
    hoursLabel: "திறந்திருக்கும் நேரம்:",
    allDaysOpen: "வாரத்தின் 7 நாட்களும் திறந்துள்ளது",
    phoneLabel: "நேரடி அழைப்பு:",
    waSupportLabel: "வாட்ஸ்அப் உதவி:",
    openInMaps: "Google Map-ல் பார்க்க",
    footerTagline: "திருக்கனூர், கூடப்பாக்கம், காட்டேரிக்குப்பம் மற்றும் சுற்றுவட்டார மக்களுக்கு சிறந்த சேவை.",
    quickLinks: "முக்கிய இணைப்புகள்",
    popularBrands: "பிராண்டுகள்",
    btnBuyWa: "விசாரி"
  }
};

let currentLang = "en";

// DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  document.getElementById("yearSpan").textContent = new Date().getFullYear();

  // Render initial catalog
  renderProducts(phonesData);

  // Setup event listeners
  setupFilterTabs();
  setupSearch();
  setupRepairCalculator();
  setupLanguageToggle();
  setupMobileMenu();
});

// Render Products
function renderProducts(items) {
  const container = document.getElementById("productGrid");
  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--gray-600);">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; margin-bottom: 12px; color: var(--gray-400);"></i>
        <p>No phone models found matching your search. Please contact us for custom stock inquiries!</p>
      </div>
    `;
    return;
  }

  const buyBtnText = translations[currentLang].btnBuyWa || "Enquire";

  container.innerHTML = items.map(phone => {
    const waText = encodeURIComponent(`Hi Lucky Mobile, I am interested in checking stock/price for ${phone.name} (₹${phone.price.toLocaleString('en-IN')}). Is it available in your Thirukkanur store?`);
    return `
      <div class="product-card" data-category="${phone.category}">
        <span class="product-badge badge-${phone.badgeType}">${phone.badge}</span>
        <div class="product-img-box">
          <div class="product-phone-icon ${phone.brandClass}">
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
}

// Category Tabs
function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
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

// Search Function
function setupSearch() {
  const searchInput = document.getElementById("phoneSearchInput");
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

  function updateEstimate() {
    const selectedOption = issueSelect.options[issueSelect.selectedIndex];
    const minPrice = parseInt(selectedOption.getAttribute("data-min"), 10) || 500;
    const maxPrice = parseInt(selectedOption.getAttribute("data-max"), 10) || 2000;
    const time = selectedOption.getAttribute("data-time") || "45 mins";

    // Adjust estimate based on premium brand
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

  // Initial calculation
  updateEstimate();
}

// Language Switcher
function setupLanguageToggle() {
  const btn = document.getElementById("langToggleBtn");
  const label = document.getElementById("currentLangLabel");

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

  // Text content elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-render products to update button text
  const currentActiveTab = document.querySelector(".filter-tab.active");
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

  toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Close when clicking link
  document.querySelectorAll(".nav-item").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("show");
    });
  });
}
