/**
 * Lucky Mobile (லக்கி மொபைல்) - Interactive Application Logic
 * 1. Advanced Interactive Touching Effect (Canvas Particles + Glow Pointer + Touch Ripples)
 * 2. 3D Tilt Element Engine for Cards & Poster
 * 3. Corner Poster & Lightbox Modal Controller
 * 4. Bilingual translation (English <-> Tamil)
 * 5. Dynamic Smartphone Catalog with Real Photos, Detailed Specs & Company Filtering
 * 6. Phone Details / Specifications Lightbox Modal
 * 7. Instant Repair & Service Cost Estimator
 */

// Phone Catalog Data with High-Resolution Photos & Rich Specifications
// Brands represented from official store flyer: Apple, Samsung, Vivo, Oppo, OnePlus, Xiaomi, Realme, Tecno, Infinix, POCO, itel
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
    image: "assets/phones/vivo-v40.jpg",
    badge: "50MP ZEISS Portrait",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP ZEISS OIS + 50MP Ultra-Wide" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7 Gen 3 (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 256GB / 512GB" },
      { icon: "fa-solid fa-battery-full", text: "5500 mAh + 80W FlashCharge" }
    ],
    details: {
      processor: "Qualcomm Snapdragon 7 Gen 3 (4nm TSMC)",
      display: "6.78\" 1.5K 120Hz 3D Curved AMOLED (4500 nits peak)",
      rearCamera: "50MP ZEISS OIS (f/1.88) + 50MP Ultra-wide (119°)",
      frontCamera: "50MP ZEISS Group Selfie Camera with AF",
      battery: "5500 mAh BlueVolt Silicon-Carbon + 80W Fast Charge",
      ramStorage: "8GB/12GB LPDDR4X + 256GB/512GB UFS 2.2",
      os: "Funtouch OS 14 (Based on Android 14)",
      colors: ["Ganges Blue", "Titanium Grey", "Lotus Purple"],
      warranty: "1 Year Official Brand Warranty + Free Screen Protector",
      highlights: "IP68 Water & Dust Resistance, Smart Aura Light Portrait"
    }
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
    image: "assets/phones/iphone-15.jpg",
    badge: "Dynamic Island",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "48MP Main Camera (Sensor-shift OIS)" },
      { icon: "fa-solid fa-microchip", text: "Apple A16 Bionic Chip" },
      { icon: "fa-solid fa-memory", text: "6GB RAM + 128GB / 256GB NVMe" },
      { icon: "fa-solid fa-battery-full", text: "All-Day Battery + USB-C" }
    ],
    details: {
      processor: "Apple A16 Bionic (4nm) 6-core CPU + 5-core GPU",
      display: "6.1\" Super Retina XDR OLED (2000 nits peak brightness)",
      rearCamera: "48MP Main (f/1.6, Sensor-shift OIS) + 12MP Ultra-wide",
      frontCamera: "12MP TrueDepth Camera with 4K Dolby Vision HDR",
      battery: "3349 mAh with 20W Fast Charging (50% in 30 mins) + MagSafe",
      ramStorage: "6GB RAM + 128GB / 256GB / 512GB NVMe",
      os: "iOS 17 (Free Upgrade to iOS 18)",
      colors: ["Black", "Blue", "Green", "Yellow", "Pink"],
      warranty: "1 Year Apple India Warranty + Free Data Transfer",
      highlights: "Dynamic Island, USB Type-C, Ceramic Shield Front Glass"
    }
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 5G",
    brand: "Samsung",
    brandClass: "samsung",
    category: "flagship",
    is5G: true,
    price: 62999,
    emi: "₹5,249/mo",
    image: "assets/phones/samsung-s24.jpg",
    badge: "Galaxy AI",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Dual Pixel OIS + 3X Telephoto" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 8 Gen 3 for Galaxy" },
      { icon: "fa-solid fa-memory", text: "8GB RAM + 256GB UFS 4.0" },
      { icon: "fa-solid fa-battery-full", text: "4000 mAh + 25W Fast Charge" }
    ],
    details: {
      processor: "Snapdragon 8 Gen 3 / Exynos 2400 (4nm)",
      display: "6.2\" Dynamic LTPO AMOLED 2X, 120Hz (2600 nits)",
      rearCamera: "50MP Main (OIS) + 10MP Telephoto (3x Optical) + 12MP Ultra-wide",
      frontCamera: "12MP Dual Pixel Autofocus Selfie",
      battery: "4000 mAh + 25W Wired + 15W Wireless PowerShare",
      ramStorage: "8GB LPDDR5X + 256GB / 512GB UFS 4.0",
      os: "One UI 6.1 (7 Years Guaranteed OS & Security Updates)",
      colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
      warranty: "1 Year Samsung India Warranty + VIP Setup",
      highlights: "Circle to Search with Google, Live Call Translation, Armor Aluminum 2"
    }
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
    image: "assets/phones/oneplus-nord.jpg",
    badge: "80W SuperVOOC",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Sony LYT-600 OIS Camera" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 695 5G" },
      { icon: "fa-solid fa-memory", text: "8GB RAM + 128GB / 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5500 mAh + 80W SUPERVOOC" }
    ],
    details: {
      processor: "Qualcomm Snapdragon 695 5G Octa-core",
      display: "6.67\" 120Hz AMOLED (2100 nits peak brightness)",
      rearCamera: "50MP Sony LYT-600 with Hardware OIS + 2MP Depth",
      frontCamera: "16MP Clear HDR Selfie Camera",
      battery: "5500 mAh Battery + 80W SuperVOOC + 5W Reverse Charge",
      ramStorage: "8GB LPDDR4X + 128GB / 256GB UFS 2.2",
      os: "OxygenOS 14.0 (Based on Android 14)",
      colors: ["Mega Blue", "Super Silver"],
      warranty: "1 Year OnePlus Official Warranty",
      highlights: "Aqua Touch Technology, 300% Ultra Volume Dual Stereo Speakers"
    }
  },
  {
    id: 5,
    name: "Xiaomi Redmi Note 13 Pro 5G",
    brand: "Xiaomi",
    brandClass: "redmi",
    category: "midrange",
    is5G: true,
    price: 24999,
    emi: "₹2,083/mo",
    image: "assets/phones/redmi-note-13.jpg",
    badge: "200MP OIS Camera",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "200MP Samsung ISOCELL HP3 (OIS)" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7s Gen 2 (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5100 mAh + 67W Turbo Charge" }
    ],
    details: {
      processor: "Qualcomm Snapdragon 7s Gen 2 (4nm)",
      display: "6.67\" 1.5K 120Hz Curved CrystalRes AMOLED, Dolby Vision",
      rearCamera: "200MP Ultra-clear Main (OIS) + 8MP Ultra-wide + 2MP Macro",
      frontCamera: "16MP AI Beauty Camera",
      battery: "5100 mAh + 67W Turbo Charger (In-box adapter)",
      ramStorage: "8GB/12GB RAM + 128GB/256GB UFS 2.2",
      os: "Xiaomi HyperOS (Android 14)",
      colors: ["Coral Purple", "Midnight Black", "Arctic White"],
      warranty: "1 Year Xiaomi India Warranty",
      highlights: "Corning Gorilla Glass Victus, In-display Fingerprint with Heart Rate"
    }
  },
  {
    id: 6,
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    brandClass: "realme",
    category: "midrange",
    is5G: true,
    price: 29999,
    emi: "₹2,499/mo",
    image: "assets/phones/realme-12-pro.jpg",
    badge: "64MP Periscope",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "64MP Periscope (3X Optical, 120X Zoom)" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7s Gen 2 (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 67W SUPERVOOC" }
    ],
    details: {
      processor: "Qualcomm Snapdragon 7s Gen 2 5G (4nm)",
      display: "6.7\" 120Hz Curved Vision OLED, 2160Hz PWM Dimming",
      rearCamera: "64MP OV64B Periscope OIS + 50MP Sony IMX890 OIS + 8MP Wide",
      frontCamera: "32MP Sony Selfie Sensor",
      battery: "5000 mAh Massive Battery + 67W SuperVOOC Fast Charge",
      ramStorage: "8GB/12GB RAM + 128GB/256GB UFS 3.1",
      os: "realme UI 5.0 (Based on Android 14)",
      colors: ["Submarine Blue", "Navigator Beige", "Explorer Red"],
      warranty: "1 Year Realme Warranty + Case Included",
      highlights: "Luxury Watch Design by Ollivier Savéo, Premium Vegan Leather"
    }
  },
  {
    id: 7,
    name: "Samsung Galaxy A15 5G",
    brand: "Samsung",
    brandClass: "samsung",
    category: "midrange",
    is5G: true,
    price: 15999,
    emi: "₹1,333/mo",
    image: "assets/phones/samsung-a15.jpg",
    badge: "Super AMOLED",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Triple Camera + 5MP Wide" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 6100+ 5G (6nm)" },
      { icon: "fa-solid fa-memory", text: "6GB / 8GB RAM + 128GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 25W Fast Charging" }
    ],
    details: {
      processor: "MediaTek Dimensity 6100+ (6nm Octa-Core)",
      display: "6.5\" Super AMOLED, 90Hz, 800 nits with Vision Booster",
      rearCamera: "50MP Main (f/1.8) + 5MP Ultra-wide + 2MP Macro",
      frontCamera: "13MP Selfie Camera",
      battery: "5000 mAh All-day Battery + 25W Fast Charge",
      ramStorage: "6GB/8GB RAM + 128GB (Expandable up to 1TB)",
      os: "One UI 6.0 with 4 Generations of OS Upgrades",
      colors: ["Blue Black", "Light Blue", "Blue"],
      warranty: "1 Year Samsung India Warranty",
      highlights: "Samsung Knox Vault Security, Side Fingerprint Sensor"
    }
  },
  {
    id: 8,
    name: "Oppo Reno 11 5G",
    brand: "Oppo",
    brandClass: "oppo",
    category: "midrange",
    is5G: true,
    price: 27999,
    emi: "₹2,333/mo",
    image: "assets/phones/oppo-reno-11.jpg",
    badge: "Portrait Expert",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "32MP Telephoto Portrait + 50MP Sony OIS" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 7050 (6nm)" },
      { icon: "fa-solid fa-memory", text: "8GB RAM + 256GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 67W SUPERVOOC" }
    ],
    details: {
      processor: "MediaTek Dimensity 7050 (6nm)",
      display: "6.7\" 120Hz 3D Curved AMOLED (1.07 Billion Colors)",
      rearCamera: "50MP Sony LYT-600 OIS + 32MP Telephoto Portrait + 8MP Ultra-wide",
      frontCamera: "32MP Sony Selfie with 4K Video Recording",
      battery: "5000 mAh + 67W SUPERVOOC (100% in 45 mins)",
      ramStorage: "8GB RAM + 256GB UFS 2.2",
      os: "ColorOS 14 (Android 14)",
      colors: ["Wave Green", "Rock Grey"],
      warranty: "1 Year Oppo Official Warranty",
      highlights: "Portrait Expert Engine, LinkBoost 360° Antenna Array"
    }
  },
  {
    id: 9,
    name: "POCO X6 Pro 5G",
    brand: "POCO",
    brandClass: "vivo",
    category: "midrange",
    is5G: true,
    price: 25999,
    emi: "₹2,166/mo",
    image: "assets/phones/poco-x6-pro.jpg",
    badge: "Dimensity 8300-Ultra",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "64MP OIS Triple Camera Setup" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 8300-Ultra (1.4M AnTuTu)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB LPDDR5X + 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 67W Turbo Charge" }
    ],
    details: {
      processor: "MediaTek Dimensity 8300-Ultra Flagship Processor (4nm)",
      display: "6.67\" 1.5K Flow AMOLED, 120Hz, 1800 nits, Dolby Vision",
      rearCamera: "64MP Main (OIS + EIS) + 8MP Ultra-wide + 2MP Macro",
      frontCamera: "16MP HDR Front Camera",
      battery: "5000 mAh + 67W Turbo Fast Charger In Box",
      ramStorage: "8GB/12GB LPDDR5X + 256GB/512GB UFS 4.0",
      os: "Xiaomi HyperOS (Android 14)",
      colors: ["POCO Yellow (Vegan Leather)", "Racing Grey", "Spectre Black"],
      warranty: "1 Year Official Brand Warranty",
      highlights: "LiquidCool 2.0 Vapor Chamber, Dual Stereo Dolby Atmos Speakers"
    }
  },
  {
    id: 10,
    name: "Tecno Spark 20 Pro+",
    brand: "Tecno",
    brandClass: "vivo",
    category: "budget",
    is5G: true,
    price: 14999,
    emi: "₹1,249/mo",
    image: "assets/phones/tecno-spark-20.jpg",
    badge: "108MP Curved AMOLED",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "108MP Ultra Sensing Camera" },
      { icon: "fa-solid fa-microchip", text: "Helio G99 Ultimate 6nm" },
      { icon: "fa-solid fa-memory", text: "8GB (+8GB Virtual) + 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 33W Super Charge" }
    ],
    details: {
      processor: "MediaTek Helio G99 Ultimate Octa-Core (6nm)",
      display: "6.78\" 120Hz 3D Curved AMOLED, 1000 nits, Gorilla Glass 5",
      rearCamera: "108MP Main Sensor with 3X Lossless In-sensor Zoom",
      frontCamera: "32MP Glowing Selfie with Dual Micro-slit Flash",
      battery: "5000 mAh + 33W Type-C Super Fast Charge",
      ramStorage: "8GB RAM (+8GB Extended) + 256GB ROM",
      os: "HiOS 14 (Based on Android 14)",
      colors: ["Temporal Orbits", "Lunar Frost", "Magic Skin 2.0 Green"],
      warranty: "1 Year Official Warranty",
      highlights: "Dual Stereo DTS Speakers (400% Volume), IP53 Dust/Water Resistant"
    }
  },
  {
    id: 11,
    name: "Infinix Note 40 Pro 5G",
    brand: "Infinix",
    brandClass: "vivo",
    category: "midrange",
    is5G: true,
    price: 21999,
    emi: "₹1,833/mo",
    image: "assets/phones/infinix-note-40.jpg",
    badge: "100W + Wireless Mag",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "108MP OIS Super-Zoom Camera" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 7020 5G (6nm)" },
      { icon: "fa-solid fa-memory", text: "8GB RAM + 256GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "100W All-Round FastCharge + 20W Mag" }
    ],
    details: {
      processor: "MediaTek Dimensity 7020 5G Processor",
      display: "6.78\" 3D Curved 120Hz AMOLED, 1300 nits, Corning Gorilla Glass",
      rearCamera: "108MP Super-Zoom with OIS + 2MP + 2MP AI",
      frontCamera: "32MP Front Camera with Dual LED Flash",
      battery: "5000 mAh + 100W Wired FastCharge + 20W Wireless MagCharge",
      ramStorage: "8GB RAM (+8GB Extended) + 256GB UFS 2.2",
      os: "XOS 14 (Android 14)",
      colors: ["Vintage Green (Vegan Leather)", "Titan Gold"],
      warranty: "1 Year Brand Warranty",
      highlights: "Active Halo AI Breathing Light, Dual Speakers Tuned by JBL"
    }
  },
  {
    id: 12,
    name: "Realme 12x 5G",
    brand: "Realme",
    brandClass: "realme",
    category: "budget",
    is5G: true,
    price: 11999,
    emi: "₹999/mo",
    image: "assets/phones/realme-12x.jpg",
    badge: "Budget 5G King",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP AI Primary Camera" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 6100+ 5G (6nm)" },
      { icon: "fa-solid fa-memory", text: "6GB / 8GB RAM + 128GB ROM" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 45W SUPERVOOC" }
    ],
    details: {
      processor: "MediaTek Dimensity 6100+ 5G (6nm)",
      display: "6.72\" 120Hz FHD+ Display, 950 nits peak brightness",
      rearCamera: "50MP AI Dual Camera with Night Scene Mode",
      frontCamera: "8MP AI Selfie Camera",
      battery: "5000 mAh + 45W SuperVOOC Charge (0-50% in 30 mins)",
      ramStorage: "6GB/8GB RAM + 128GB (Expandable up to 2TB)",
      os: "realme UI 5.0 (Android 14)",
      colors: ["Twilight Purple", "Woodland Green"],
      warranty: "1 Year Realme India Warranty",
      highlights: "Air Gestures, Rainwater Smart Touch, Dual Stereo Speakers"
    }
  },
  {
    id: 13,
    name: "Vivo Y28 5G",
    brand: "Vivo",
    brandClass: "vivo",
    category: "budget",
    is5G: true,
    price: 13999,
    emi: "₹1,166/mo",
    image: "assets/phones/vivo-y28.jpg",
    badge: "Crystal Design",
    badgeType: "normal",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Ultra Clear + 2MP Bokeh" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 6020 5G (7nm)" },
      { icon: "fa-solid fa-memory", text: "6GB RAM + 128GB ROM" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 15W Fast Charge" }
    ],
    details: {
      processor: "MediaTek Dimensity 6020 5G Octa-core",
      display: "6.56\" 90Hz Sunlight Display, High Brightness Mode",
      rearCamera: "50MP HD Main + 2MP Bokeh Camera",
      frontCamera: "8MP with Aura Screen Light",
      battery: "5000 mAh Long-lasting Battery + 15W Charge",
      ramStorage: "6GB RAM (+6GB Extended) + 128GB ROM",
      os: "Funtouch OS 13 (Android 13)",
      colors: ["Crystal Purple", "Glitter Aqua"],
      warranty: "1 Year Vivo India Warranty",
      highlights: "8.09mm Ultra-slim Body, IP54 Splash Resistance"
    }
  },
  {
    id: 14,
    name: "Xiaomi Redmi 13C",
    brand: "Xiaomi",
    brandClass: "redmi",
    category: "budget",
    is5G: false,
    price: 7999,
    emi: "₹799/mo",
    image: "assets/phones/redmi-13c.jpg",
    badge: "Top Budget Value",
    badgeType: "normal",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP AI Triple Camera" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Helio G85" },
      { icon: "fa-solid fa-memory", text: "4GB / 6GB / 8GB + 128GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 18W Type-C" }
    ],
    details: {
      processor: "MediaTek Helio G85 Octa-Core Processor",
      display: "6.74\" 90Hz Smooth Display, Corning Gorilla Glass",
      rearCamera: "50MP Main + 2MP Macro + Auxiliary Lens",
      frontCamera: "8MP Selfie with Soft-light Ring",
      battery: "5000 mAh + 18W Fast Charging via Type-C",
      ramStorage: "4GB/6GB/8GB RAM + 128GB/256GB",
      os: "MIUI 14 (Android 13)",
      colors: ["Starshine Green", "Stardust Black", "Glacier White"],
      warranty: "1 Year Xiaomi Official Warranty",
      highlights: "Fingerprint Sensor, 3.5mm Headphone Jack, 5000mAh Battery"
    }
  },
  {
    id: 15,
    name: "itel ColorPro 5G",
    brand: "itel",
    brandClass: "vivo",
    category: "budget",
    is5G: true,
    price: 9999,
    emi: "₹833/mo",
    image: "assets/phones/itel-colorpro.jpg",
    badge: "Color Changing 5G",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP AI Dual Camera" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 6080 5G (6nm)" },
      { icon: "fa-solid fa-memory", text: "6GB (+6GB Virtual) + 128GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 18W Fast Charge" }
    ],
    details: {
      processor: "MediaTek Dimensity 6080 5G (6nm High Performance)",
      display: "6.6\" HD+ IPS Display, 90Hz Smooth Refresh Rate",
      rearCamera: "50MP AI Dual Camera with Super Night Mode",
      frontCamera: "8MP Front Camera with LED Flash",
      battery: "5000 mAh Battery + 18W Fast Charging Type-C",
      ramStorage: "6GB RAM (+6GB Virtual) + 128GB Internal Storage",
      os: "itel OS 13 (Android 13)",
      colors: ["River Blue", "Lavender Fantasy (Color Changing Back)"],
      warranty: "1 Year itel Warranty + Free Screen Replacement in 100 Days",
      highlights: "India's Most Affordable 5G, IVO Color-shift Technology"
    }
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
    catSubtitle: "Search by Model Name & Company",
    catTitle: "Featured Smartphones in Stock",
    catDesc: "Live demo, all brand photos, exact specifications, easy EMI options, and instant exchange quotes.",
    searchPlaceholder: "Search by model or company (e.g. Vivo, iPhone, Samsung, Tecno, Poco)...",
    companyAll: "All Companies",
    filterAll: "All Mobiles",
    filterFlagship: "Flagship / Premium",
    filterMid: "Mid-Range (₹12k - ₹25k)",
    filterBudget: "Budget (Under ₹12k)",
    filter5G: "5G Specials",
    modelsFound: "mobiles available in stock",
    viewSpecsBtn: "View Specs",
    enquireThisPhone: "Enquire Availability on WhatsApp",
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
    catSubtitle: "மாடல் & நிறுவனம் வாரியாக தேடுங்கள்",
    catTitle: "விற்பனைக்கு உள்ள மொபைல்கள்",
    catDesc: "அனைத்து பிராண்ட் புகைப்படங்கள், முழு விபரங்கள் மற்றும் எளிதான தவணை சலுகைகளுக்கு உடனே வாருங்கள்.",
    searchPlaceholder: "மாடல் அல்லது பிராண்ட் பெயரை தேடவும் (எ.கா: Vivo, iPhone, Samsung, Tecno)...",
    companyAll: "அனைத்து பிராண்டுகள்",
    filterAll: "அனைத்து போன்கள்",
    filterFlagship: "பிரீமியம் போன்கள்",
    filterMid: "நடுத்தர விலை (₹12k - ₹25k)",
    filterBudget: "பட்ஜெட் (₹12k கீழ்)",
    filter5G: "5G போன்கள்",
    modelsFound: "மொபைல்கள் கையிருப்பில் உள்ளன",
    viewSpecsBtn: "முழு விபரம்",
    enquireThisPhone: "வாட்ஸ்அப்பில் விசாரிக்க",
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
let activeCategoryFilter = "all";
let activeBrandFilter = "all";
let currentSearchTerm = "";

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("yearSpan").textContent = new Date().getFullYear();

  // 1. Setup Advanced Touching Effect & Particle Canvas
  initTouchInteractiveCanvas();

  // 2. Setup 3D Card Tilt on Touch & Mouse
  init3DTiltEngine();

  // 3. Setup Corner Poster Lightbox Modal
  initPosterModal();

  // 4. Setup Specs Modal
  initSpecsModal();

  // 5. Initial Render with Full Dataset
  applyFilters();

  // 6. Setup Company Tabs, Category Tabs, and Search
  setupCompanyTabs();
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

  window.addEventListener("mousemove", (e) => {
    updatePointer(e.clientX, e.clientY);
  });

  window.addEventListener("mouseleave", () => {
    pointer.active = false;
    if (spotlight) spotlight.style.opacity = "0";
  });

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

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      let distFromPointer = 9999;
      if (pointer.active) {
        const dx = pointer.x - p.x;
        const dy = pointer.y - p.y;
        distFromPointer = Math.sqrt(dx * dx + dy * dy);

        if (distFromPointer < pointer.radius) {
          const force = (1 - distFromPointer / pointer.radius) * 0.9;
          p.x += (dx / distFromPointer) * force;
          p.y += (dy / distFromPointer) * force;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(250, 204, 21, ${(1 - distFromPointer / pointer.radius) * 0.4})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const alpha = distFromPointer < pointer.radius ? 0.9 : 0.45;
      ctx.fillStyle = `${p.baseColor}${alpha})`;
      ctx.fill();

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

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
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
// 4. PHONE DETAILS / SPECIFICATIONS LIGHTBOX MODAL
// ==========================================================================
function initSpecsModal() {
  const modal = document.getElementById("specsModal");
  const closeBtn = document.getElementById("closeSpecsBtn");
  const backdrop = document.getElementById("closeSpecsBackdrop");

  function closeModal() {
    if (modal) modal.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

function openSpecsModal(phoneId) {
  const phone = phonesData.find(p => p.id === phoneId);
  if (!phone) return;

  const modal = document.getElementById("specsModal");
  const companyTag = document.getElementById("modalCompanyTag");
  const title = document.getElementById("modalPhoneTitle");
  const price = document.getElementById("modalPhonePrice");
  const body = document.getElementById("modalPhoneBody");
  const waBtn = document.getElementById("modalWhatsAppBtn");

  companyTag.textContent = phone.brand;
  title.textContent = phone.name;
  price.textContent = `₹${phone.price.toLocaleString('en-IN')} (EMI from ${phone.emi})`;

  const d = phone.details;
  const isTa = currentLang === "ta";

  body.innerHTML = `
    <div class="modal-photo-column">
      <img src="${phone.image}" alt="${phone.name}" class="modal-phone-img-large" onerror="this.src='lucky-mobile-poster.jpg'">
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold); text-align: center;">
        ${isTa ? "கிடைக்கும் நிறங்கள்:" : "Colors in Stock:"}
      </div>
      <div class="modal-color-pills">
        ${d.colors.map(c => `<span class="modal-color-pill">${c}</span>`).join('')}
      </div>
    </div>
    <div class="modal-specs-table">
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-microchip"></i> ${isTa ? "பிராசஸர்" : "Processor"}</span>
        <span class="spec-val">${d.processor}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-mobile-screen"></i> ${isTa ? "திரை (Display)" : "Display"}</span>
        <span class="spec-val">${d.display}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-camera"></i> ${isTa ? "பின்புற கேமரா" : "Rear Camera"}</span>
        <span class="spec-val">${d.rearCamera}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-camera-rotate"></i> ${isTa ? "செல்ஃபி கேமரா" : "Front Camera"}</span>
        <span class="spec-val">${d.frontCamera}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-battery-full"></i> ${isTa ? "பேட்டரி / சார்ஜ்" : "Battery"}</span>
        <span class="spec-val">${d.battery}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-memory"></i> ${isTa ? "ரேம் & மெமரி" : "RAM & Storage"}</span>
        <span class="spec-val">${d.ramStorage}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-gear"></i> ${isTa ? "இயங்குதளம்" : "OS & UI"}</span>
        <span class="spec-val">${d.os}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-shield-halved"></i> ${isTa ? "உத்தரவாதம்" : "Warranty"}</span>
        <span class="spec-val">${d.warranty}</span>
      </div>
      <div class="modal-spec-row">
        <span class="spec-label"><i class="fa-solid fa-star"></i> ${isTa ? "சிறப்பம்சங்கள்" : "Key Feature"}</span>
        <span class="spec-val text-cyan">${d.highlights}</span>
      </div>
    </div>
  `;

  const waMsg = encodeURIComponent(`Hi Lucky Mobile, I am inquiring about the ${phone.name} (Company: ${phone.brand}, Price: ₹${phone.price.toLocaleString('en-IN')}).
Specs: ${d.ramStorage}, ${d.processor}.
Do you have it ready in your Thirukkanur shop?`);

  waBtn.href = `https://wa.me/919876543210?text=${waMsg}`;

  modal.classList.add("active");
}

// ==========================================================================
// 5. COMBINED SEARCH & FILTER ENGINE
// ==========================================================================
function applyFilters() {
  const term = currentSearchTerm.toLowerCase().trim();

  const filtered = phonesData.filter(phone => {
    // 1. Category Filter
    let matchesCategory = true;
    if (activeCategoryFilter === "5g") {
      matchesCategory = phone.is5G;
    } else if (activeCategoryFilter !== "all") {
      matchesCategory = phone.category === activeCategoryFilter;
    }

    // 2. Company / Brand Filter
    let matchesBrand = true;
    if (activeBrandFilter !== "all") {
      matchesBrand = phone.brand.toLowerCase() === activeBrandFilter.toLowerCase();
    }

    // 3. Search Term Filter (Checks Model Name, Company Name, Specs, and Details)
    let matchesSearch = true;
    if (term) {
      const nameMatch = phone.name.toLowerCase().includes(term);
      const brandMatch = phone.brand.toLowerCase().includes(term);
      const specsMatch = phone.specs.some(s => s.text.toLowerCase().includes(term));
      const detailsMatch = Object.values(phone.details).some(v => 
        typeof v === 'string' && v.toLowerCase().includes(term)
      );
      matchesSearch = nameMatch || brandMatch || specsMatch || detailsMatch;
    }

    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Update Result Count
  const countSpan = document.getElementById("searchCountNumber");
  if (countSpan) countSpan.textContent = filtered.length;

  renderProducts(filtered);
}

// ==========================================================================
// 6. RENDER SMARTPHONES WITH REAL PHOTOS & SPECIFICATIONS
// ==========================================================================
function renderProducts(items) {
  const container = document.getElementById("productGrid");
  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-glass);">
        <i class="fa-solid fa-mobile-screen-button" style="font-size: 3.5rem; margin-bottom: 14px; color: var(--gold);"></i>
        <h4 style="color:#fff; margin-bottom: 8px;">No mobile phones matched your search</h4>
        <p style="margin-bottom: 18px;">We sell all major models from Apple, Samsung, Vivo, Oppo, Xiaomi, Realme, Tecno, Infinix, and itel!</p>
        <a href="https://wa.me/919876543210?text=Hi%20Lucky%20Mobile,%20do%20you%20have%20this%20phone%20model%20in%20stock?" target="_blank" class="btn btn-gold">
          <i class="fa-brands fa-whatsapp"></i> Enquire Custom Model on WhatsApp
        </a>
      </div>
    `;
    return;
  }

  const buyBtnText = translations[currentLang].btnBuyWa || "Enquire";
  const viewSpecsText = translations[currentLang].viewSpecsBtn || "View Specs";

  container.innerHTML = items.map(phone => {
    const waText = encodeURIComponent(`Hi Lucky Mobile, I am interested in ${phone.name} (${phone.brand}) priced at ₹${phone.price.toLocaleString('en-IN')}. Is this in stock at your Thirukkanur shop?`);
    return `
      <div class="product-card-dark tilt-element" data-category="${phone.category}" data-brand="${phone.brand}">
        <span class="product-badge-dark badge-${phone.badgeType}">${phone.badge}</span>
        
        <!-- Real Mobile Photo -->
        <div class="product-photo-wrap" onclick="openSpecsModal(${phone.id})" title="Click to view full specifications">
          <img src="${phone.image}" alt="${phone.brand} ${phone.name}" class="product-photo-img" loading="lazy" onerror="this.src='lucky-mobile-poster.jpg'">
          <span class="photo-overlay-badge"><i class="fa-solid fa-magnifying-glass-plus"></i> Specs</span>
        </div>

        <div class="product-header-info">
          <span class="product-company-pill">${phone.brand}</span>
          ${phone.is5G ? '<span style="font-size:0.7rem; font-weight:800; color:var(--cyan);"><i class="fa-solid fa-bolt"></i> 5G</span>' : ''}
        </div>

        <h3 class="product-title" onclick="openSpecsModal(${phone.id})" style="cursor:pointer;" title="Click for details">${phone.name}</h3>

        <!-- Key Specifications Chips -->
        <div class="product-specs-chips">
          ${phone.specs.map(spec => `
            <div class="spec-chip-item">
              <i class="${spec.icon}"></i>
              <span>${spec.text}</span>
            </div>
          `).join('')}
        </div>

        <!-- Price & Dual Action Buttons -->
        <div class="product-footer">
          <div class="price-row">
            <div>
              <span class="price-val">₹${phone.price.toLocaleString('en-IN')}</span>
            </div>
            <span class="emi-val">EMI from ${phone.emi}</span>
          </div>

          <div class="product-actions-group">
            <button type="button" class="btn-view-specs" onclick="openSpecsModal(${phone.id})">
              <i class="fa-solid fa-circle-info text-gold"></i> ${viewSpecsText}
            </button>
            <a href="https://wa.me/919876543210?text=${waText}" target="_blank" class="btn-buy-wa">
              <i class="fa-brands fa-whatsapp"></i> ${buyBtnText}
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Rebind 3D tilt
  init3DTiltEngine();
}

// ==========================================================================
// 7. SETUP EVENT LISTENERS (COMPANY TABS, CATEGORIES, SEARCH, CLEAR)
// ==========================================================================
function setupCompanyTabs() {
  const tabs = document.querySelectorAll(".company-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeBrandFilter = tab.getAttribute("data-brand") || "all";
      applyFilters();
    });
  });
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab-dark");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      activeCategoryFilter = tab.getAttribute("data-filter") || "all";
      applyFilters();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("phoneSearchInput");
  const clearBtn = document.getElementById("clearSearchBtn");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = currentSearchTerm.length > 0 ? "flex" : "none";
    }
    applyFilters();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchTerm = "";
      clearBtn.style.display = "none";
      applyFilters();
      searchInput.focus();
    });
  }
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

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  applyFilters();
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

// Expose openSpecsModal globally for inline onclick
window.openSpecsModal = openSpecsModal;
