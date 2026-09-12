/**
 * Lucky Mobile (லக்கி மொபைல்) - Advanced Multi-Brand Smart Catalog & E-Commerce Logic
 * 1. Advanced Interactive Touching Effect (Canvas Particles + Glow Pointer + Touch Ripples)
 * 2. 3D Tilt Element Engine for Cards & Poster
 * 3. 3D Flip-Flop Phone Cards: Display Front <-> High-Tech Rear Camera & Back Design
 * 4. Comprehensive Indian Smartphone Market Catalog (Apple, Samsung, OnePlus, Vivo, iQOO, Oppo, Xiaomi, Realme, Motorola, Nothing, POCO, Tecno, Infinix, itel, Lava)
 * 5. Online Shopping & Shop Owner UPI Checkout (GPay, PhonePe, Paytm, Dynamic Live QR)
 * 6. Dual Full-Stack Backend Integration (Node.js API + Static GitHub Pages Fallback)
 * 7. Corner Poster & Specs Lightbox Modals
 * 8. Instant Repair & Service Cost Estimator
 * 9. Full English <-> Tamil Bilingual Translation
 */

// Phone Catalog Data for the Indian Smartphone Market
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
    cameraIsland: {
      brandTag: "ZEISS T* OPTICS",
      sensorType: "50MP ZEISS OIS + 50MP UW",
      lensCount: 2,
      primary: "50MP f/1.88 ZEISS OIS Main",
      zoom: "2X In-Sensor Lossless Zoom",
      ultraWide: "50MP 119° Ultra-Wide Auto Focus",
      video: "4K @ 60fps / ZEISS Cinematic Bokeh",
      features: "Smart Aura Light 2.0, ZEISS Multifocal Portrait",
      finish: "Fluorite AG Satin Glass (Water & Dust IP68)"
    },
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
      { icon: "fa-solid fa-camera", text: "48MP Main (Sensor-shift OIS)" },
      { icon: "fa-solid fa-microchip", text: "Apple A16 Bionic Chip" },
      { icon: "fa-solid fa-memory", text: "6GB RAM + 128GB / 256GB NVMe" },
      { icon: "fa-solid fa-battery-full", text: "All-Day Battery + USB-C" }
    ],
    cameraIsland: {
      brandTag: "APPLE DUAL CAMERA",
      sensorType: "48MP SENSOR-SHIFT OIS",
      lensCount: 2,
      primary: "48MP f/1.6 26mm Sensor-shift OIS",
      zoom: "2X Optical-quality Telephoto",
      ultraWide: "12MP 120° Ultra-Wide",
      video: "4K Dolby Vision HDR @ 60fps / Action Mode",
      features: "Photonic Engine, Next-Gen Portraits with Focus Control",
      finish: "Color-infused Matte Frosted Glass + Aerospace Aluminum"
    },
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
    cameraIsland: {
      brandTag: "SAMSUNG FLOATING LENSES",
      sensorType: "50MP ISOCELL DUAL PIXEL",
      lensCount: 3,
      primary: "50MP f/1.8 OIS Dual Pixel AF",
      zoom: "3X Optical Zoom (10MP OIS Telephoto)",
      ultraWide: "12MP 120° Ultra-Wide Sensor",
      video: "8K @ 30fps / Super Steady OIS",
      features: "Galaxy AI Generative Edit, ProVisual Engine, Nightography",
      finish: "Armor Aluminum 2.0 + Satin Gorilla Glass Victus 2"
    },
    details: {
      processor: "Snapdragon 8 Gen 3 / Exynos 2400 (4nm)",
      display: "6.2\" Dynamic LTPO AMOLED 2X, 120Hz (2600 nits)",
      rearCamera: "50MP Main (OIS) + 10MP Telephoto (3x Optical) + 12MP Ultra-wide",
      frontCamera: "12MP Dual Pixel Autofocus Selfie",
      battery: "4000 mAh + 25W Wired + 15W Wireless PowerShare",
      ramStorage: "8GB RAM + 128GB / 256GB / 512GB",
      os: "One UI 6.1 with 7 Years OS Updates",
      colors: ["Onyx Black", "Marble Gray", "Cobalt Violet", "Amber Yellow"],
      warranty: "1 Year Official Samsung India Warranty",
      highlights: "Circle to Search, Live Call Translation, IP68 Waterproof"
    }
  },
  {
    id: 4,
    name: "OnePlus 12 5G",
    brand: "OnePlus",
    brandClass: "oneplus",
    category: "flagship",
    is5G: true,
    price: 64999,
    emi: "₹5,416/mo",
    image: "assets/phones/oneplus-nord.jpg",
    badge: "Hasselblad 4th Gen",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Sony LYT-808 + 64MP Periscope" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 8 Gen 3 (4nm)" },
      { icon: "fa-solid fa-memory", text: "12GB / 16GB RAM + 256GB / 512GB" },
      { icon: "fa-solid fa-battery-full", text: "5400 mAh + 100W SUPERVOOC" }
    ],
    cameraIsland: {
      brandTag: "HASSELBLAD CAMERA",
      sensorType: "64MP PERISCOPE + 50MP SONY",
      lensCount: 3,
      primary: "50MP Sony LYT-808 OIS (1/1.4\")",
      zoom: "3X Optical / 6X In-Sensor / 120X Digital Zoom",
      ultraWide: "48MP 114° Ultra-wide Sony IMX581",
      video: "8K @ 24fps / 4K Dolby Vision HDR",
      features: "Hasselblad Natural Color Calibration, Star Trail Night Mode",
      finish: "Luxury Timepiece Design + Ceramic & Emerald Green AG Glass"
    },
    details: {
      processor: "Qualcomm Snapdragon 8 Gen 3 (4nm)",
      display: "6.82\" 2K 120Hz ProXDR LTPO AMOLED (4500 nits peak)",
      rearCamera: "50MP Sony LYT-808 OIS + 64MP OmniVision Periscope + 48MP Ultra-wide",
      frontCamera: "32MP Sony IMX615 Selfie Camera with 4K Video",
      battery: "5400 mAh Dual-Cell + 100W Wired + 50W AIRVOOC Wireless",
      ramStorage: "12GB/16GB LPDDR5X + 256GB/512GB UFS 4.0",
      os: "OxygenOS 14 (Android 14) with 4 OS Updates",
      colors: ["Flowy Emerald", "Silky Black", "Glacial White"],
      warranty: "1 Year Official OnePlus Warranty + Free Case",
      highlights: "Periscope Telephoto, Aqua Touch Display, Alert Slider"
    }
  },
  {
    id: 5,
    name: "OnePlus Nord CE 4 5G",
    brand: "OnePlus",
    brandClass: "oneplus",
    category: "midrange",
    is5G: true,
    price: 24999,
    emi: "₹1,388/mo",
    image: "assets/phones/oneplus-nord.jpg",
    badge: "100W SuperVOOC",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Sony LYT-600 with OIS" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7 Gen 3 (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB RAM (+8GB Exp) + 128GB / 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5500 mAh + 100W Fast Charge" }
    ],
    cameraIsland: {
      brandTag: "SONY LYT-600 OIS",
      sensorType: "50MP SONY RAW HDR",
      lensCount: 2,
      primary: "50MP Sony LYT-600 OIS (f/1.8)",
      zoom: "2X Lossless In-Sensor Zoom",
      ultraWide: "8MP 112° Ultra-wide Sony IMX355",
      video: "4K @ 30fps with Ultra Steady EIS/OIS",
      features: "Ultra Clear Image Engine, RAW HDR Algorithm",
      finish: "Celadon Marble Texture / Dark Chrome Finish"
    },
    details: {
      processor: "Qualcomm Snapdragon 7 Gen 3",
      display: "6.7\" FHD+ 120Hz Fluid AMOLED (Aqua Touch)",
      rearCamera: "50MP Sony LYT-600 OIS + 8MP Ultra-wide (112°)",
      frontCamera: "16MP Clear Selfie Camera",
      battery: "5500 mAh Battery (Fastest charging in segment - 100W)",
      ramStorage: "8GB LPDDR4X + 128GB / 256GB UFS 3.1 (Expandable 1TB)",
      os: "OxygenOS 14 (Smooth, clean & bloatware-free)",
      colors: ["Celadon Marble", "Dark Chrome"],
      warranty: "1 Year Official OnePlus Warranty",
      highlights: "100W Fast Charge (1-100% in 28 mins), Aqua Touch Screen"
    }
  },
  {
    id: 6,
    name: "iQOO Z9s Pro 5G",
    brand: "iQOO",
    brandClass: "vivo",
    category: "midrange",
    is5G: true,
    price: 24999,
    emi: "₹1,388/mo",
    image: "assets/phones/vivo-v40.jpg",
    badge: "50MP Sony OIS",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Sony IMX882 OIS + 8MP UW" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7 Gen 3 (820k AnTuTu)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 128GB / 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5500 mAh + 80W FlashCharge" }
    ],
    cameraIsland: {
      brandTag: "iQOO TURBO CAMERA",
      sensorType: "50MP SONY IMX882 OIS",
      lensCount: 2,
      primary: "50MP Sony IMX882 OIS (f/1.79)",
      zoom: "2X Portrait Telephoto Mode",
      ultraWide: "8MP Ultra-Wide Angle Lens",
      video: "4K @ 30fps Ultra Steady Video",
      features: "Aura Light Portrait, Super Night Video Engine",
      finish: "Luxe Vegan Leather / Flamboyant Orange Back"
    },
    details: {
      processor: "Snapdragon 7 Gen 3 (4nm, Over 820,000 AnTuTu score)",
      display: "6.77\" 120Hz 3D Curved AMOLED (4500 nits peak brightness)",
      rearCamera: "50MP Sony IMX882 OIS + 8MP Ultra-wide lens",
      frontCamera: "16MP HD Selfie Camera",
      battery: "5500 mAh Slim Battery + 80W FlashCharge (0-50% in 21 mins)",
      ramStorage: "8GB/12GB LPDDR4X + 128GB/256GB UFS 2.2",
      os: "Funtouch OS 14 based on Android 14 (2 OS + 3 Yrs Security)",
      colors: ["Flamboyant Orange (Vegan Leather)", "Luxe Marble"],
      warranty: "1 Year iQOO Official India Warranty",
      highlights: "Curved 120Hz AMOLED, IP64 Dust & Water Resistance, Gaming Beast"
    }
  },
  {
    id: 7,
    name: "Redmi Note 13 Pro+ 5G",
    brand: "Xiaomi",
    brandClass: "xiaomi",
    category: "midrange",
    is5G: true,
    price: 29999,
    emi: "₹1,666/mo",
    image: "assets/phones/redmi-note-13.jpg",
    badge: "200MP OIS Camera",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "200MP Samsung ISOCELL HP3 OIS" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 7200-Ultra" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 256GB / 512GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 120W HyperCharge" }
    ],
    cameraIsland: {
      brandTag: "200MP MATRIX OIS",
      sensorType: "200MP ISOCELL HP3 (1/1.4\")",
      lensCount: 3,
      primary: "200MP f/1.65 OIS Super QPD Main",
      zoom: "2X & 4X Lossless In-Sensor Zoom",
      ultraWide: "8MP 120° Ultra-wide Sensor",
      video: "4K @ 30fps / 1080p @ 120fps Slow-mo",
      features: "Xiaomi Imaging Engine 2.0, Smart-ISO Pro, Film Filters",
      finish: "Fusion Curved Vegan Leather / Fusion Glass"
    },
    details: {
      processor: "MediaTek Dimensity 7200-Ultra (4nm TSMC)",
      display: "6.67\" 1.5K 120Hz 3D Curved AMOLED (1800 nits)",
      rearCamera: "200MP HP3 OIS + 8MP Ultra-wide + 2MP Macro",
      frontCamera: "16MP In-display Selfie Camera",
      battery: "5000 mAh + 120W HyperCharge (100% in 19 mins!)",
      ramStorage: "8GB/12GB LPDDR5 + 256GB/512GB UFS 3.1",
      os: "Xiaomi HyperOS (Android 14)",
      colors: ["Fusion Purple (Vegan Leather)", "Fusion Black", "Fusion White"],
      warranty: "1 Year Official Xiaomi India Warranty",
      highlights: "IP68 Flagship Waterproofing, Corning Gorilla Glass Victus"
    }
  },
  {
    id: 8,
    name: "Realme 12 Pro+ 5G",
    brand: "Realme",
    brandClass: "realme",
    category: "midrange",
    is5G: true,
    price: 28999,
    emi: "₹1,611/mo",
    image: "assets/phones/realme-12-pro.jpg",
    badge: "64MP Periscope Zoom",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "64MP Periscope OIS (120X SuperZoom)" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7s Gen 2 (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 128GB / 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 67W SUPERVOOC" }
    ],
    cameraIsland: {
      brandTag: "LUXURY WATCH PERISCOPE",
      sensorType: "64MP OV64B PERISCOPE OIS",
      lensCount: 3,
      primary: "50MP Sony IMX890 OIS (f/1.8)",
      zoom: "3X Optical / 6X In-Sensor / 120X Digital SuperZoom",
      ultraWide: "8MP 112° Ultra-wide Camera",
      video: "4K @ 30fps with Cinematic Portrait Bokeh",
      features: "Cinematic Bokeh Algorithm by Oscar-winning Claudio Miranda",
      finish: "Luxury Watch Dial Fluted Bezel + Premium Vegan Leather"
    },
    details: {
      processor: "Qualcomm Snapdragon 7s Gen 2 (4nm 5G)",
      display: "6.7\" 120Hz Curved Vision AMOLED (2160Hz PWM)",
      rearCamera: "64MP Periscope OIS (3x Optical) + 50MP Sony IMX890 OIS + 8MP UW",
      frontCamera: "32MP Sony Selfie Camera",
      battery: "5000 mAh Massive Battery + 67W Fast Charging",
      ramStorage: "8GB/12GB + 128GB/256GB (Up to 24GB Dynamic RAM)",
      os: "realme UI 5.0 (Based on Android 14)",
      colors: ["Submarine Blue", "Navigator Beige", "Explorer Red"],
      warranty: "1 Year Official Realme India Warranty",
      highlights: "Submarine Periscope Lens, Luxury Swiss Watch Design by Ollivier Savéo"
    }
  },
  {
    id: 9,
    name: "Moto Edge 50 Fusion 5G",
    brand: "Motorola",
    brandClass: "motorola",
    category: "midrange",
    is5G: true,
    price: 22999,
    emi: "₹1,277/mo",
    image: "assets/phones/realme-12-pro.jpg",
    badge: "IP68 Waterproof",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Sony LYT-700C OIS + 13MP UW" },
      { icon: "fa-solid fa-microchip", text: "Snapdragon 7s Gen 2 (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 128GB / 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 68W TurboPower" }
    ],
    cameraIsland: {
      brandTag: "MOTO PURE CAMERA",
      sensorType: "50MP SONY LYTIA LYT-700C",
      lensCount: 2,
      primary: "50MP Sony LYT-700C OIS (f/1.88, All-Pixel Focus)",
      zoom: "2X Optical-grade Macro & Portrait Zoom",
      ultraWide: "13MP 120° Ultra-Wide + Macro Vision",
      video: "4K UHD @ 30fps on all cameras",
      features: "Pantone Validated Colors, Optical Image Stabilization",
      finish: "Vegan Suede / Vegan Leather Body with IP68 Submersion Rating"
    },
    details: {
      processor: "Qualcomm Snapdragon 7s Gen 2 (4nm)",
      display: "6.7\" Endless Edge 144Hz 3D Curved pOLED (1600 nits, 10-bit)",
      rearCamera: "50MP Sony LYT-700C OIS + 13MP Ultra-wide with Macro Vision",
      frontCamera: "32MP Quad Pixel 4K Selfie Camera",
      battery: "5000 mAh + 68W TurboPower (Full Day power in 15 mins)",
      ramStorage: "8GB/12GB LPDDR4X + 128GB/256GB UFS 2.2",
      os: "Hello UI based on Android 14 (Near-Stock, zero ads)",
      colors: ["Marshmallow Blue (Vegan Leather)", "Hot Pink (Vegan Suede)", "Forest Blue"],
      warranty: "1 Year Official Motorola India Warranty",
      highlights: "IP68 Underwater Protection, 144Hz 3D Curved Screen, Clean Android"
    }
  },
  {
    id: 10,
    name: "Nothing Phone (2a) 5G",
    brand: "Nothing",
    brandClass: "nothing",
    category: "midrange",
    is5G: true,
    price: 23999,
    emi: "₹1,333/mo",
    image: "assets/phones/infinix-note-40.jpg",
    badge: "Glyph Interface",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Main OIS + 50MP Ultra-Wide" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 7200 Pro" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 128GB / 256GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 45W Fast Charge" }
    ],
    cameraIsland: {
      brandTag: "GLYPH DUAL 50MP",
      sensorType: "50MP OIS + 50MP ULTRA-WIDE",
      lensCount: 2,
      primary: "50MP f/1.88 OIS (1/1.56\" Sensor)",
      zoom: "2X In-Sensor Digital Telephoto",
      ultraWide: "50MP 114° Ultra-Wide Sensor",
      video: "4K @ 30fps / Action Mode / Ultra XDR",
      features: "Glyph LED Flashlight & Timer Indicator, TrueLens Engine",
      finish: "Transparent Polycarbonate Back with Iconic Glyph LEDs"
    },
    details: {
      processor: "MediaTek Dimensity 7200 Pro (4nm TSMC, Co-engineered)",
      display: "6.7\" Flexible AMOLED, 120Hz Adaptive (1300 nits peak)",
      rearCamera: "50MP Main OIS + 50MP Ultra-wide (Dual 50MP Setup)",
      frontCamera: "32MP High-Definition Selfie Camera",
      battery: "5000 mAh Battery (2 Days Battery Life) + 45W Fast Charging",
      ramStorage: "8GB/12GB RAM + 128GB/256GB Storage",
      os: "Nothing OS 2.6 (Clean, Minimalist, Zero Bloatware)",
      colors: ["Black", "White", "Milk", "Blue Edition"],
      warranty: "1 Year Official Nothing India Warranty",
      highlights: "Iconic Transparent Design, Interactive Glyph Light Interface"
    }
  },
  {
    id: 11,
    name: "Oppo Reno 11 Pro 5G",
    brand: "Oppo",
    brandClass: "oppo",
    category: "midrange",
    is5G: true,
    price: 37999,
    emi: "₹2,111/mo",
    image: "assets/phones/oppo-reno-11.jpg",
    badge: "32MP Telephoto Portrait",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Sony IMX890 OIS + 32MP Telephoto" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 8200 (4nm)" },
      { icon: "fa-solid fa-memory", text: "12GB RAM + 256GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "4600 mAh + 80W SUPERVOOC" }
    ],
    cameraIsland: {
      brandTag: "OPPO PORTRAIT EXPERT",
      sensorType: "32MP SONY TELEPHOTO OIS",
      lensCount: 3,
      primary: "50MP Sony IMX890 OIS (f/1.8)",
      zoom: "2X Optical Telephoto Portrait Lens",
      ultraWide: "8MP 112° Sony IMX355 Ultra-wide",
      video: "4K @ 30fps Ultra HDR Video",
      features: "Portrait Expert Engine, Natural Skin Tone AI, Studio Bokeh",
      finish: "Natural Silk Texture Glass & Jewel-like Camera Deco"
    },
    details: {
      processor: "MediaTek Dimensity 8200 Flagship Processor (4nm)",
      display: "6.7\" 120Hz 3D Curved OLED (10-bit color, HDR10+)",
      rearCamera: "50MP Sony IMX890 OIS + 32MP Telephoto Portrait + 8MP Ultra-wide",
      frontCamera: "32MP Sony Flagship Selfie Camera with AF",
      battery: "4600 mAh + 80W SUPERVOOC (50% charge in 10 mins)",
      ramStorage: "12GB LPDDR5X + 256GB UFS 3.1",
      os: "ColorOS 14 (Smooth, responsive, Trinity Engine)",
      colors: ["Pearl White", "Rock Grey"],
      warranty: "1 Year Official Oppo India Warranty",
      highlights: "Dedicated 32MP DSLR Portrait Camera, 3D Curved Borderless Display"
    }
  },
  {
    id: 12,
    name: "POCO X6 Pro 5G",
    brand: "POCO",
    brandClass: "poco",
    category: "midrange",
    is5G: true,
    price: 24999,
    emi: "₹1,388/mo",
    image: "assets/phones/poco-x6-pro.jpg",
    badge: "1.4M AnTuTu Score",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "64MP Triple Camera with OIS" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 8300-Ultra (4nm)" },
      { icon: "fa-solid fa-memory", text: "8GB / 12GB RAM + 256GB / 512GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 67W Turbo Charge" }
    ],
    cameraIsland: {
      brandTag: "POCO MATRIX AI",
      sensorType: "64MP OIS TURBO CAMERA",
      lensCount: 3,
      primary: "64MP f/1.79 OIS Main Sensor",
      zoom: "2X In-Sensor Crop Lossless Zoom",
      ultraWide: "8MP 120° Ultra-wide Camera",
      video: "4K @ 30fps with Dual OIS+EIS Stabilization",
      features: "Motion Tracking Focus, Night Mode 2.0, Film Camera Presets",
      finish: "Signature POCO Vegan Leather / Damascus Steel Texture"
    },
    details: {
      processor: "MediaTek Dimensity 8300-Ultra (1.46 Million AnTuTu!)",
      display: "6.67\" 1.5K Flow AMOLED, 120Hz (1800 nits peak brightness)",
      rearCamera: "64MP Main (OIS) + 8MP Ultra-wide + 2MP Macro",
      frontCamera: "16MP Clear View Front Camera",
      battery: "5000 mAh + 67W Turbo Charger inside the box",
      ramStorage: "8GB/12GB LPDDR5X + 256GB/512GB UFS 4.0",
      os: "Xiaomi HyperOS (Based on Android 14)",
      colors: ["POCO Yellow (Vegan Leather)", "Racing Grey", "Spectre Black"],
      warranty: "1 Year POCO Official Warranty",
      highlights: "Fastest Gaming Phone under ₹25k, 1.5K Flow AMOLED Display"
    }
  },
  {
    id: 13,
    name: "Samsung Galaxy A15 5G",
    brand: "Samsung",
    brandClass: "samsung",
    category: "budget",
    is5G: true,
    price: 15499,
    emi: "₹861/mo",
    image: "assets/phones/samsung-a15.jpg",
    badge: "Super AMOLED",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Triple Camera Setup" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 6100+ 5G" },
      { icon: "fa-solid fa-memory", text: "6GB / 8GB RAM + 128GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 25W Fast Charge" }
    ],
    cameraIsland: {
      brandTag: "SAMSUNG TRIPLE CAM",
      sensorType: "50MP HIGH RESOLUTION",
      lensCount: 3,
      primary: "50MP f/1.8 Autofocus Main",
      zoom: "10X Digital Clear Zoom",
      ultraWide: "5MP Ultra-Wide + 2MP Macro",
      video: "1080p FHD @ 30fps Slow-mo",
      features: "Knox Vault Hardware Security, Object Eraser",
      finish: "Key Island Glossy Back with Holographic Shine"
    },
    details: {
      processor: "MediaTek Dimensity 6100+ (6nm Octa-Core)",
      display: "6.5\" FHD+ Super AMOLED, 90Hz (800 nits Vision Booster)",
      rearCamera: "50MP Main + 5MP Ultra-wide + 2MP Macro",
      frontCamera: "13MP High-Quality Front Camera",
      battery: "5000 mAh 2-Day Battery + 25W Fast Charging",
      ramStorage: "6GB/8GB RAM + 128GB/256GB Storage (MicroSD up to 1TB)",
      os: "One UI 6.0 with 4 Years of OS Upgrades + 5 Years Security",
      colors: ["Blue Black", "Light Blue", "Blue"],
      warranty: "1 Year Official Samsung India Warranty",
      highlights: "Super AMOLED Display, Samsung Knox Vault Security"
    }
  },
  {
    id: 14,
    name: "Realme 12x 5G",
    brand: "Realme",
    brandClass: "realme",
    category: "budget",
    is5G: true,
    price: 11999,
    emi: "₹666/mo",
    image: "assets/phones/realme-12x.jpg",
    badge: "45W Fast Charge",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP AI Dual Camera" },
      { icon: "fa-solid fa-microchip", text: "Dimensity 6100+ 6nm 5G" },
      { icon: "fa-solid fa-memory", text: "6GB RAM (+6GB) + 128GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 45W SUPERVOOC" }
    ],
    cameraIsland: {
      brandTag: "CIRCULAR WATCH DIAL",
      sensorType: "50MP AI REAR SENSOR",
      lensCount: 2,
      primary: "50MP f/1.8 High Resolution AI Sensor",
      zoom: "4X Digital Zoom",
      ultraWide: "2MP Depth Portrait Sensor",
      video: "1080p @ 30fps with Street Mode",
      features: "Super Nightscape Mode, Dual View Video",
      finish: "Light Feather 3D Texture Back with IP54 Splash Proof"
    },
    details: {
      processor: "MediaTek Dimensity 6100+ 5G (6nm Power-efficient)",
      display: "6.72\" FHD+ 120Hz Ultra Smooth Display (950 nits)",
      rearCamera: "50MP AI Primary + 2MP Portrait",
      frontCamera: "8MP AI Selfie Camera",
      battery: "5000 mAh + 45W Fast Charging (Fastest in segment)",
      ramStorage: "6GB/8GB RAM + 128GB Storage (Up to 2TB Expandable)",
      os: "realme UI 5.0 based on Android 14",
      colors: ["Twilight Purple", "Woodland Green"],
      warranty: "1 Year Official Realme India Warranty",
      highlights: "Dual Stereo Speakers, Air Gestures & Dynamic Button"
    }
  },
  {
    id: 15,
    name: "Redmi 13C 5G",
    brand: "Xiaomi",
    brandClass: "xiaomi",
    category: "budget",
    is5G: true,
    price: 10499,
    emi: "₹583/mo",
    image: "assets/phones/redmi-13c.jpg",
    badge: "Budget 5G King",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP AI Dual Camera" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 6100+ (6nm)" },
      { icon: "fa-solid fa-memory", text: "4GB / 6GB / 8GB RAM + 128GB" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 18W Fast Charging" }
    ],
    cameraIsland: {
      brandTag: "AI DUAL SENSOR",
      sensorType: "50MP ULTRA HD SENSOR",
      lensCount: 2,
      primary: "50MP f/1.8 AI Ultra HD Camera",
      zoom: "5X Digital Zoom",
      ultraWide: "Auxiliary AI Portrait Sensor",
      video: "1080p @ 30fps HDR",
      features: "Film Camera Filters, HDR Portrait Mode",
      finish: "Star Trail Design with Anti-Fingerprint Coating"
    },
    details: {
      processor: "MediaTek Dimensity 6100+ 5G (6nm)",
      display: "6.74\" 90Hz Dot Drop Display with Corning Gorilla Glass",
      rearCamera: "50MP AI Dual Camera with Night Mode",
      frontCamera: "5MP Front Camera with Soft Light Ring",
      battery: "5000 mAh Massive Battery (Type-C)",
      ramStorage: "4GB/6GB/8GB RAM + 128GB/256GB Storage",
      os: "MIUI 14 based on Android 13",
      colors: ["Starlight Black", "Startrail Green", "Startrail Silver"],
      warranty: "1 Year Official Xiaomi India Warranty",
      highlights: "Affordable 5G for Everyone, 90Hz Smooth Display"
    }
  },
  {
    id: 16,
    name: "Vivo Y28 5G",
    brand: "Vivo",
    brandClass: "vivo",
    category: "budget",
    is5G: true,
    price: 13999,
    emi: "₹777/mo",
    image: "assets/phones/vivo-y28.jpg",
    badge: "Glittering Design",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP HD Main Camera" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 6020 5G" },
      { icon: "fa-solid fa-memory", text: "6GB / 8GB RAM + 128GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 15W Fast Charge" }
    ],
    cameraIsland: {
      brandTag: "VIVO DUAL CAMERA",
      sensorType: "50MP ULTRA CLEAR",
      lensCount: 2,
      primary: "50MP f/1.8 HD Main Camera",
      zoom: "10X Digital Clear Zoom",
      ultraWide: "2MP Bokeh Camera",
      video: "1080p @ 30fps Video",
      features: "Super Night Mode, Multi-style Portrait Filters",
      finish: "Dual-layer Crystal Coating + Glitter AG Finish"
    },
    details: {
      processor: "MediaTek Dimensity 6020 (7nm 5G)",
      display: "6.56\" 90Hz HD+ Sunlight Display (840 nits)",
      rearCamera: "50MP Main + 2MP Bokeh Camera",
      frontCamera: "8MP Front Camera with Aura Screen Light",
      battery: "5000 mAh Battery with Smart Power Saving",
      ramStorage: "4GB/6GB/8GB RAM + 128GB ROM",
      os: "Funtouch OS 13 based on Android 13",
      colors: ["Crystal Purple", "Glitter Aqua"],
      warranty: "1 Year Official Vivo India Warranty",
      highlights: "Ultra-slim 8.09mm body, IP54 Water & Dust Resistance"
    }
  },
  {
    id: 17,
    name: "Tecno Spark 20 Pro+ 5G",
    brand: "Tecno",
    brandClass: "tecno",
    category: "midrange",
    is5G: true,
    price: 16999,
    emi: "₹944/mo",
    image: "assets/phones/tecno-spark-20.jpg",
    badge: "108MP Curved AMOLED",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "108MP Ultra-Sensing Camera" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Helio G99 Ultimate" },
      { icon: "fa-solid fa-memory", text: "8GB RAM (+8GB) + 256GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 33W Super Charge" }
    ],
    cameraIsland: {
      brandTag: "108MP ULTRA SENSING",
      sensorType: "108MP 3X LOSSLESS SENSOR",
      lensCount: 3,
      primary: "108MP f/1.75 1/1.67\" Large Sensor",
      zoom: "3X In-Sensor Lossless Zoom / 10X Digital",
      ultraWide: "AI Macro & Depth Assistant",
      video: "2K @ 30fps with Dual View Video Mode",
      features: "Super Night Mode 3.0, Dual Flashlight",
      finish: "Magic Skin 2.0 Eco-Leather / Starfall Glass"
    },
    details: {
      processor: "MediaTek Helio G99 Ultimate (6nm Flagship Octa-core)",
      display: "6.78\" 120Hz 3D Double Curved AMOLED (1000 nits)",
      rearCamera: "108MP Ultra-sensing + Macro AI Triple Camera",
      frontCamera: "32MP Glowing Selfie with Dual Flash",
      battery: "5000 mAh + 33W Fast Charger included",
      ramStorage: "8GB RAM + 256GB Storage (Up to 16GB Extended RAM)",
      os: "HiOS 14 (Android 14)",
      colors: ["Temporal Orbits", "Lunar Frost", "Magic Skin 2.0 Green"],
      warranty: "1 Year Official Tecno Warranty",
      highlights: "Double Curved AMOLED Screen under ₹17k, Dual Stereo Speakers"
    }
  },
  {
    id: 18,
    name: "Infinix Note 40 Pro 5G",
    brand: "Infinix",
    brandClass: "infinix",
    category: "midrange",
    is5G: true,
    price: 19999,
    emi: "₹1,111/mo",
    image: "assets/phones/infinix-note-40.jpg",
    badge: "Wireless MagCharge",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "108MP Super-Zoom OIS Camera" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 7020 5G" },
      { icon: "fa-solid fa-memory", text: "8GB RAM + 256GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 45W Wired + 20W Mag" }
    ],
    cameraIsland: {
      brandTag: "INFINIX OIS ZOOM",
      sensorType: "108MP OIS 3X LOSSLESS",
      lensCount: 3,
      primary: "108MP f/1.75 OIS Super-Zoom Main",
      zoom: "3X Lossless In-Sensor Zoom",
      ultraWide: "2MP Macro + 2MP Depth",
      video: "2K @ 30fps with Dual Video",
      features: "Active Halo AI Lighting Ring, Super Night Algorithm",
      finish: "Vintage Green Vegan Leather & Metal Halo Ring"
    },
    details: {
      processor: "MediaTek Dimensity 7020 (6nm 5G)",
      display: "6.78\" 120Hz 3D Curved AMOLED (1300 nits peak)",
      rearCamera: "108MP OIS + 2MP + 2MP Triple Camera with Active Halo AI Lighting",
      frontCamera: "32MP Front Camera with Dual Flash",
      battery: "5000 mAh + 45W Fast Charging + 20W Wireless Magnetic Charging",
      ramStorage: "8GB RAM (+8GB Expandable) + 256GB UFS 2.2",
      os: "XOS 14 (Based on Android 14, 2 Years OS Upgrades)",
      colors: ["Vintage Green (Vegan Leather)", "Titan Gold"],
      warranty: "1 Year Official Infinix Warranty",
      highlights: "First in segment with 20W Magnetic Wireless Charging & Active Halo AI"
    }
  },
  {
    id: 19,
    name: "itel ColorPro 5G",
    brand: "itel",
    brandClass: "itel",
    category: "budget",
    is5G: true,
    price: 9999,
    emi: "₹555/mo",
    image: "assets/phones/itel-colorpro.jpg",
    badge: "Color Changing Back",
    badgeType: "5g",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP AI Dual Camera" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 6080 5G" },
      { icon: "fa-solid fa-memory", text: "6GB RAM (+6GB) + 128GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "5000 mAh + 18W Type-C" }
    ],
    cameraIsland: {
      brandTag: "ITEL COLOR AI",
      sensorType: "50MP DUAL CAM",
      lensCount: 2,
      primary: "50MP f/1.8 AI Clear Main",
      zoom: "4X Digital Zoom",
      ultraWide: "AI Scene Detection Lens",
      video: "1080p Full HD Video Recording",
      features: "IVCO Color Shift Technology (Changes color in sunlight)",
      finish: "Sunlight Photochromic Color Shift Finish"
    },
    details: {
      processor: "MediaTek Dimensity 6080 5G (6nm Ultra Fast)",
      display: "6.6\" HD+ 90Hz Smooth Display",
      rearCamera: "50MP AI Dual Camera with Super Night Mode",
      frontCamera: "8MP Front Camera with LED Flash",
      battery: "5000 mAh Battery + 18W Fast Charging Type-C",
      ramStorage: "6GB RAM (+6GB Virtual) + 128GB Internal Storage",
      os: "itel OS 13 (Android 13)",
      colors: ["River Blue", "Lavender Fantasy (Color Changing Back)"],
      warranty: "1 Year itel Warranty + Free Screen Replacement in 100 Days",
      highlights: "India's Most Affordable 5G, IVCO Color-shift Technology"
    }
  },
  {
    id: 20,
    name: "Lava Agni 2 5G",
    brand: "Lava",
    brandClass: "lava",
    category: "midrange",
    is5G: true,
    price: 17999,
    emi: "₹999/mo",
    image: "assets/phones/realme-12x.jpg",
    badge: "Proudly Indian",
    badgeType: "offer",
    specs: [
      { icon: "fa-solid fa-camera", text: "50MP Quad Camera with 1.0µm" },
      { icon: "fa-solid fa-microchip", text: "MediaTek Dimensity 7050 (6nm)" },
      { icon: "fa-solid fa-memory", text: "8GB RAM + 256GB Storage" },
      { icon: "fa-solid fa-battery-full", text: "4700 mAh + 66W Super Fast Charge" }
    ],
    cameraIsland: {
      brandTag: "LAVA QUAD MATRIX",
      sensorType: "50MP 1.0µm BIG PIXEL",
      lensCount: 4,
      primary: "50MP f/1.88 1.0µm Sensor",
      zoom: "4X In-Sensor Digital Zoom",
      ultraWide: "8MP Ultra-wide + 2MP Macro + 2MP Depth",
      video: "4K @ 30fps Video Recording",
      features: "Zero Bloatware Clean Camera UI, Night Mode",
      finish: "3D Curved Matte AG Glass with Viridian Gloss"
    },
    details: {
      processor: "MediaTek Dimensity 7050 5G (6nm Octa-core)",
      display: "6.78\" FHD+ 120Hz 3D Curved AMOLED (HDR10+)",
      rearCamera: "50MP (1.0µm) + 8MP UW + 2MP Macro + 2MP Depth",
      frontCamera: "16MP Selfie Camera",
      battery: "4700 mAh + 66W Super Fast Charge (50% in 16 mins)",
      ramStorage: "8GB RAM + 256GB Storage (8GB Virtual RAM)",
      os: "Clean Android 13 (Guaranteed upgrade to Android 14 & 15, No Ads)",
      colors: ["Viridian Green (3D Curved Glass)"],
      warranty: "1 Year Free In-Home Service Warranty across India",
      highlights: "Indian Flagship with 3D Curved AMOLED & Free at-home replacement"
    }
  }
];

// Translations Dictionary (English & Tamil)
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
    catDesc: "Click any phone to flip in 3D and see the back camera design, or order directly with GPay / PhonePe.",
    searchPlaceholder: "Search by phone model, company, 50MP camera, or processor...",
    companyAll: "All Companies",
    filterAll: "All Mobiles",
    filterFlagship: "Flagship / Premium",
    filterMid: "Mid-Range (₹12k - ₹25k)",
    filterBudget: "Budget (Under ₹12k)",
    filter5G: "5G Specials",
    modelsFound: "mobiles available",
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
    acc5Title: "Back Covers & Armor Cases",
    acc5Desc: "Slim silicone, transparent, leather, shockproof armor, and magnetic ring cases for all models.",
    acc6Title: "Power Banks & Car Chargers",
    acc6Desc: "10,000mAh & 20,000mAh fast charging power banks and dual-port car quick chargers.",
    repairSubtitle: "Quick & Transparent Estimates",
    repairTitle: "Express Mobile Repair Estimator",
    repairDesc: "Check estimated repair charges for your smartphone before visiting our Thirukkanur workshop.",
    brandLabel: "Select Phone Brand:",
    issueLabel: "Select Issue / Repair Needed:",
    modelLabel: "Phone Model (Optional):",
    estChargeLabel: "Estimated Cost Range:",
    estTimeLabel: "Estimated Turnaround Time:",
    bookRepairWa: "Book Repair on WhatsApp",
    offerBadge: "Special Exchange Offer",
    offerTitle: "Upgrade to 5G with Extra Exchange Bonus!",
    offerDesc: "Bring any old or broken phone to Lucky Mobile Thirukkanur and get up to ₹3,000 extra exchange value towards a brand new 5G smartphone.",
    enquireExchange: "Enquire Exchange Value",
    contactSubtitle: "Visit Our Shop",
    contactTitle: "Store Location & Contact Information",
    storeTagline: "\"Your Mobile Our Priority\" — Multibrand Mobile Sales, Service & Accessories",
    addressLabel: "Store Address:",
    hoursLabel: "Store Timings:",
    allDaysOpen: "Open 7 Days a Week",
    phoneLabel: "Call Directly:",
    waSupportLabel: "WhatsApp Support:",
    openInMaps: "Open in Google Maps",
    footerTagline: "\"Your Mobile Our Priority\" — Serving Thirukkanur and surrounding villages with genuine mobile deals.",
    quickLinks: "Quick Links",
    popularBrands: "Brands Handled",
    btnBuyWa: "Buy / UPI",
    viewSpecsBtn: "Specs",
    flipToBack: "Back Camera",
    flipToFront: "Front View",
    verifiedUpiBadge: "100% Verified Shop Owner UPI",
    checkoutTitle: "Buy Online with GPay / PhonePe",
    checkoutSub: "Direct Payment to Lucky Mobile Thirukkanur Store",
    freebieNotice: "Free 9D Tempered Glass + Protective Cover Included",
    customerDetailsTitle: "1. Customer & Delivery Information",
    labelYourName: "Your Full Name",
    labelWhatsAppNumber: "WhatsApp Phone Number",
    labelDeliveryAddress: "Delivery Address / Area (Thirukkanur & Puducherry)",
    labelColorPreference: "Preferred Color",
    labelDeliveryMode: "Delivery Option",
    payViaUpiTitle: "2. Pay Online via Official Shop Owner UPI",
    payViaUpiNote: "Tap your preferred UPI App below to pay directly on your phone, or scan the live QR code with Google Pay / PhonePe:",
    qrScanBadge: "Scan with GPay or PhonePe",
    verifiedShopPayee: "Verified Merchant / Shop Owner",
    labelUpiUtr: "UPI Transaction Reference / UTR Number (Optional, 12 digits)",
    btnCancel: "Cancel",
    btnConfirmOrderWa: "Confirm Order & Send Receipt on WhatsApp"
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
    srv6: "மொபைல் ரீசார்ஜ் & கட்டணங்கள்",
    calcRepairQuoteBtn: "சர்வீஸ் செலவு அறிய",
    catSubtitle: "சிறந்த கேமரா மற்றும் 5G ஸ்மார்ட்போன்கள்",
    catTitle: "திருக்கனூர் கடையில் கிடைக்கும் மொபைல்கள்",
    catDesc: "போனின் பின்புற கேமராவை 3D-ல் பார்க்க கிளிக் செய்யவும். GPay அல்லது PhonePe மூலம் எளிதில் ஆர்டர் செய்யலாம்.",
    searchPlaceholder: "போன் மாடல், கம்பெனி பெயர், கேமரா (50MP) அல்லது பிராசஸர் கொண்டு தேடவும்...",
    companyAll: "அனைத்து கம்பெனிகள்",
    filterAll: "அனைத்து போன்கள்",
    filterFlagship: "விலை உயர்ந்த மாடல்கள்",
    filterMid: "நடுத்தர விலை (₹12k - ₹25k)",
    filterBudget: "குறைந்த விலை (₹12k-க்குள்)",
    filter5G: "5G போன்கள்",
    modelsFound: "போன்கள் உள்ளன",
    accSubtitle: "பாதுகாப்பு & உதிரிபாகங்கள்",
    accTitle: "அசல் மொபைல் உதிரிபாகங்கள்",
    accDesc: "ஒரிஜினல் சார்ஜர்கள், கேபிள்கள், இயர்பட்ஸ், ஸ்மார்ட்வாட்ச் மற்றும் சிறந்த ஸ்கிரீன் கார்டுகள்.",
    acc1Title: "9D & UV டெம்பர்டு கிளாஸ்",
    acc1Desc: "சிறந்த ஒட்டுதலுடன் உடையாத 9D மற்றும் UV மேட் கிளாஸ்.",
    acc2Title: "பாஸ்ட் சார்ஜர்கள் & கேபிள்கள்",
    acc2Desc: "20W, 33W, 67W, 100W அசல் பாஸ்ட் சார்ஜிங் அடாப்டர்கள்.",
    acc3Title: "ப்ளூடூத் இயர்பட்ஸ் & நெக்பேண்ட்",
    acc3Desc: "boAt, Noise, OnePlus அசல் ப்ளூடூத் ஹெட்செட்டுகள்.",
    acc4Title: "ஸ்மார்ட் வாட்ச்கள்",
    acc4Desc: "காலிங் வசதியுடன் கூடிய AMOLED ஸ்மார்ட்வாட்ச்கள்.",
    acc5Title: "மொபைல் பேக் கவர்கள்",
    acc5Desc: "அனைத்து மாடல்களுக்கும் சிலிகான், லெதர் மற்றும் ஆர்மர் கவர்கள்.",
    acc6Title: "பவர் பேங்க்கள் & கார் சார்ஜர்",
    acc6Desc: "10000mAh, 20000mAh அதிவேக பவர் பேங்க்கள்.",
    repairSubtitle: "துல்லியமான விலை விபரம்",
    repairTitle: "மொபைல் சர்வீஸ் கட்டண மதிப்பீடு",
    repairDesc: "கடைக்கு வரும் முன் உங்களது போன் பழுதுநீக்கும் கட்டணத்தை இங்கேயே கணக்கிடுங்கள்.",
    brandLabel: "மொபைல் பிராண்ட்:",
    issueLabel: "பழுது விபரம்:",
    modelLabel: "மாடல் பெயர்:",
    estChargeLabel: "தோராய கட்டணம்:",
    estTimeLabel: "ஆகும் நேரம்:",
    bookRepairWa: "வாட்ஸ்அப் மூலம் பதிவு செய்ய",
    offerBadge: "சிறப்பு எக்ஸ்சேஞ்ச் ஆஃபர்",
    offerTitle: "பழைய போனுக்கு கூடுதல் எக்ஸ்சேஞ்ச் மதிப்பு!",
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
    btnBuyWa: "GPay / UPI",
    viewSpecsBtn: "விவரம்",
    flipToBack: "பின்புற கேமரா",
    flipToFront: "முன்புறம்",
    verifiedUpiBadge: "100% சரிபார்க்கப்பட்ட கடை UPI",
    checkoutTitle: "GPay / PhonePe மூலம் ஆன்லைன் ஆர்டர்",
    checkoutSub: "லக்கி மொபைல் திருக்கனூர் கடைக்கு நேரடி கட்டணம்",
    freebieNotice: "இலவச 9D டெம்பர்டு கிளாஸ் + பாதுகாப்பு கவர் வழங்கப்படும்",
    customerDetailsTitle: "1. வாடிக்கையாளர் & முகவரி விபரம்",
    labelYourName: "உங்கள் முழு பெயர்",
    labelWhatsAppNumber: "வாட்ஸ்அப் எண்",
    labelDeliveryAddress: "டெலிவரி முகவரி / ஏரியா (திருக்கனூர் சுற்றுவட்டாரம்)",
    labelColorPreference: "விருப்பமான நிறம்",
    labelDeliveryMode: "டெலிவரி முறை",
    payViaUpiTitle: "2. கடை உரிமையாளர் UPI மூலம் செலுத்துங்கள்",
    payViaUpiNote: "கீழே உள்ள GPay / PhonePe பொத்தானை தட்டவும் அல்லது QR கோடை ஸ்கேன் செய்து தொகையை செலுத்தவும்:",
    qrScanBadge: "GPay அல்லது PhonePe-ல் ஸ்கேன் செய்க",
    verifiedShopPayee: "அங்கீகரிக்கப்பட்ட கடை உரிமையாளர்",
    labelUpiUtr: "UPI குறிப்பு எண் / UTR (தேவைப்பட்டால்)",
    btnCancel: "ரத்து செய்",
    btnConfirmOrderWa: "ஆர்டரை உறுதிசெய்து வாட்ஸ்அப் ரசீது அனுப்புக"
  }
};

let currentLang = "en";
let activeCategoryFilter = "all";
let activeBrandFilter = "all";
let currentSearchTerm = "";
let currentCheckoutPhone = null;

// Shop Owner UPI Configuration
let shopUpiConfig = {
  vpa: "luckymobile@upi",
  payeeName: "Lucky Mobile Thirukkanur",
  phone: "+91 98765 43210",
  address: "76, Tiruvannamalai Rd, Thamarai Nagar, Thirukkanur, Puducherry 605501"
};

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("yearSpan");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 1. Setup Touch Interactive Canvas (Luxury Glowing Particles)
  initTouchInteractiveCanvas();

  // 2. Setup 3D Card Tilt on Touch & Mouse
  init3DTiltEngine();

  // 3. Setup Poster Lightbox Modal
  initPosterModal();

  // 4. Setup Phone Specs Modal
  initSpecsModal();

  // 5. Setup Online Shopping & UPI Checkout Modal
  initCheckoutModal();

  // 6. Fetch live UPI config from backend (Node.js Render support)
  loadShopUpiConfig();

  // 7. Initial Catalog Render
  applyFilters();

  // 8. Event Listeners (Company Tabs, Category Tabs, Search, Calculator, Language)
  setupCompanyTabs();
  setupFilterTabs();
  setupSearch();
  setupRepairCalculator();
  setupLanguageToggle();
  setupMobileMenu();
});

// ==========================================================================
// 1. ADVANCED TOUCHING EFFECT ENGINE (CANVAS PARTICLES + GLOW SPOTLIGHT)
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

  const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);
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

  const pointer = { x: -1000, y: -1000, active: false, radius: 190 };

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
    const size = 95;
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
          const force = (1 - distFromPointer / pointer.radius) * 0.95;
          p.x += (dx / distFromPointer) * force;
          p.y += (dy / distFromPointer) * force;

          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.strokeStyle = `rgba(250, 204, 21, ${(1 - distFromPointer / pointer.radius) * 0.45})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      const alpha = distFromPointer < pointer.radius ? 0.95 : 0.45;
      ctx.fillStyle = `${p.baseColor}${alpha})`;
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 115) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - dist / 115) * 0.16})`;
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

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.012, 1.012, 1.012)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

// ==========================================================================
// 3. 3D FLIP-FLOP CARD ENGINE (FRONT DISPLAY <-> REAR CAMERA MODULE)
// ==========================================================================
function toggleCardFlip(phoneId, event) {
  if (event) {
    event.stopPropagation();
  }
  const inner = document.getElementById(`phoneCardInner-${phoneId}`);
  if (inner) {
    inner.classList.toggle("is-flipped");
  }
}

function renderLensMatrix(lensCount) {
  const count = Math.min(Math.max(lensCount || 2, 2), 4);
  let html = '';
  for (let i = 0; i < count; i++) {
    html += `
      <div class="lens-ring" title="Camera Sensor #${i + 1}">
        <div class="lens-inner-glass"></div>
      </div>
    `;
  }
  return html;
}

// ==========================================================================
// 4. POSTER LIGHTBOX MODAL CONTROLLER
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
// 5. PHONE DETAILS / SPECIFICATIONS LIGHTBOX MODAL
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

  if (!modal) return;

  companyTag.textContent = phone.brand;
  title.textContent = phone.name;
  price.textContent = `₹${phone.price.toLocaleString('en-IN')} (EMI from ${phone.emi})`;

  const d = phone.details;
  const isTa = currentLang === "ta";

  body.innerHTML = `
    <div class="modal-photo-column">
      <img src="${phone.image}" alt="${phone.name}" class="modal-phone-img-large" onerror="this.src='lucky-mobile-poster.jpg'">
      <div style="font-size: 0.8rem; font-weight: 700; color: var(--gold); text-align: center; margin-top: 10px;">
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

  if (waBtn) waBtn.href = `https://wa.me/919876543210?text=${waMsg}`;

  modal.classList.add("active");
}

// ==========================================================================
// 6. ONLINE SHOPPING & UPI CHECKOUT (GPAY, PHONEPE, PAYTM, DYNAMIC QR)
// ==========================================================================
async function loadShopUpiConfig() {
  try {
    const res = await fetch("/api/upi-config");
    if (res.ok) {
      const data = await res.json();
      const cfg = data.config || data;
      if (cfg && (cfg.upiId || cfg.vpa)) {
        shopUpiConfig = {
          vpa: cfg.upiId || cfg.vpa || "luckymobile@upi",
          payeeName: cfg.ownerName || cfg.payeeName || "Lucky Mobile Thirukkanur",
          phone: cfg.phonePeNumber || cfg.phone || "+91 98765 43210",
          address: cfg.address || "76, Tiruvannamalai Rd, Thamarai Nagar, Thirukkanur, Puducherry 605501"
        };
        const upiCodeEl = document.getElementById("upiIdDisplay");
        if (upiCodeEl) upiCodeEl.textContent = shopUpiConfig.vpa;
      }
    }
  } catch (err) {
    // Graceful fallback for static GitHub Pages
  }
}

function initCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  const closeBtn = document.getElementById("closeCheckoutBtn");
  const cancelBtn = document.getElementById("cancelCheckoutBtn");
  const backdrop = document.getElementById("closeCheckoutBackdrop");
  const copyBtn = document.getElementById("copyUpiBtn");
  const confirmBtn = document.getElementById("confirmOrderWhatsAppBtn");

  function closeModal() {
    if (modal) modal.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (backdrop) backdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
  });

  // Copy Shop UPI ID
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const upiId = shopUpiConfig.vpa || "luckymobile@upi";
      navigator.clipboard.writeText(upiId).then(() => {
        const copyTextSpan = document.getElementById("copyUpiBtnText");
        if (copyTextSpan) {
          copyTextSpan.textContent = "Copied! ✓";
          setTimeout(() => {
            copyTextSpan.textContent = "Copy";
          }, 2000);
        }
      }).catch(() => {
        alert(`Lucky Mobile UPI ID: ${upiId}`);
      });
    });
  }

  // Confirm Order & Send WhatsApp Receipt
  if (confirmBtn) {
    confirmBtn.addEventListener("click", async () => {
      if (!currentCheckoutPhone) return;

      const name = (document.getElementById("custName").value || "").trim();
      const phoneNum = (document.getElementById("custPhone").value || "").trim();
      const address = (document.getElementById("custAddress").value || "").trim();
      const colorSelect = document.getElementById("custColorChoice");
      const color = colorSelect ? colorSelect.value : "Default Color";
      const deliverySelect = document.getElementById("custDeliveryMode");
      const deliveryMode = deliverySelect ? deliverySelect.value : "delivery";
      const utr = (document.getElementById("custUtr").value || "").trim();

      if (!name) {
        alert(currentLang === "ta" ? "தயவுசெய்து உங்கள் பெயரை உள்ளிடவும்." : "Please enter your full name.");
        document.getElementById("custName").focus();
        return;
      }

      if (!phoneNum || phoneNum.length < 10) {
        alert(currentLang === "ta" ? "தயவுசெய்து 10 இலக்க வாட்ஸ்அப் மொபைல் எண்ணை உள்ளிடவும்." : "Please enter a valid 10-digit WhatsApp number.");
        document.getElementById("custPhone").focus();
        return;
      }

      if (!address) {
        alert(currentLang === "ta" ? "தயவுசெய்து உங்கள் டெலிவரி முகவரியை உள்ளிடவும்." : "Please enter your delivery address in Thirukkanur.");
        document.getElementById("custAddress").focus();
        return;
      }

      const orderCode = `LM-${Math.floor(1000 + Math.random() * 9000)}`;
      const deliveryText = deliveryMode === "delivery" ? "⚡ Express Doorstep Delivery (Thirukkanur Area)" : "🏪 Store Pickup at Thirukkanur Shop";

      // Dispatch order to Node backend if available
      try {
        await fetch("/api/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: orderCode,
            phoneId: currentCheckoutPhone.id,
            phoneName: currentCheckoutPhone.name,
            brand: currentCheckoutPhone.brand,
            price: currentCheckoutPhone.price,
            customerName: name,
            customerPhone: phoneNum,
            address: address,
            color: color,
            deliveryMode: deliveryMode,
            utr: utr,
            timestamp: new Date().toISOString()
          })
        });
      } catch (err) {
        // Fallback gracefully on static host
      }

      // Format WhatsApp Itemized Order Invoice
      const waReceipt = `*📱 LUCKY MOBILE (லக்கி மொபைல்) - ONLINE SHOPPING ORDER*
━━━━━━━━━━━━━━━━━━━━━━
🧾 *Order Reference:* ${orderCode}
📱 *Device:* ${currentCheckoutPhone.name} (${currentCheckoutPhone.brand})
🎨 *Color:* ${color}
💰 *Total Amount:* ₹${currentCheckoutPhone.price.toLocaleString('en-IN')}
🎁 *Special Bonus:* Free 9D Tempered Glass + Protective Cover Included

*👤 Customer Delivery Details:*
• *Customer Name:* ${name}
• *WhatsApp Number:* ${phoneNum}
• *Delivery Address:* ${address}
• *Delivery Mode:* ${deliveryText}

*💳 Payment Details:*
• *Payment Mode:* Google Pay / PhonePe UPI
• *Merchant UPI:* ${shopUpiConfig.vpa}
• *Payee Name:* ${shopUpiConfig.payeeName}
${utr ? `• *UPI UTR / Ref No:* ${utr}` : '• *Payment Status:* Paid via UPI / In Progress'}
━━━━━━━━━━━━━━━━━━━━━━
📍 *Lucky Mobile Store:* 76, Tiruvannamalai Rd, Thirukkanur, Puducherry 605501
📞 *Support:* +91 98765 43210
_"Your Mobile Our Priority"_

Please confirm my order and share invoice/dispatch details!`;

      const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(waReceipt)}`;
      window.open(waUrl, "_blank");

      closeModal();
      alert(currentLang === "ta" 
        ? `நன்றி ${name}! உங்கள் ஆர்டர் எண் ${orderCode} வாட்ஸ்அப் மூலம் கடை உரிமையாளருக்கு அனுப்பப்பட்டது.` 
        : `Thank you ${name}! Your order ${orderCode} has been sent to Lucky Mobile owner via WhatsApp.`);
    });
  }
}

function openCheckoutModal(phoneId) {
  const phone = phonesData.find(p => p.id === phoneId);
  if (!phone) return;

  currentCheckoutPhone = phone;
  const modal = document.getElementById("checkoutModal");
  if (!modal) return;

  // Set Phone Summary
  const imgEl = document.getElementById("checkoutPhoneImg");
  const brandEl = document.getElementById("checkoutPhoneBrand");
  const nameEl = document.getElementById("checkoutPhoneName");
  const priceEl = document.getElementById("checkoutPhonePrice");
  const emiEl = document.getElementById("checkoutPhoneEmi");

  if (imgEl) imgEl.src = phone.image;
  if (brandEl) brandEl.textContent = phone.brand;
  if (nameEl) nameEl.textContent = phone.name;
  if (priceEl) priceEl.textContent = `₹${phone.price.toLocaleString('en-IN')}`;
  if (emiEl) emiEl.textContent = `EMI from ${phone.emi}`;

  // Populate color choices
  const colorSelect = document.getElementById("custColorChoice");
  if (colorSelect && phone.details && phone.details.colors) {
    colorSelect.innerHTML = phone.details.colors.map(c => `<option value="${c}">${c}</option>`).join('');
  }

  // Generate UPI String
  const upiVpa = shopUpiConfig.vpa || "luckymobile@upi";
  const payee = encodeURIComponent(shopUpiConfig.payeeName || "Lucky Mobile Thirukkanur");
  const amount = phone.price;
  const note = encodeURIComponent(`LuckyMobile ${phone.name}`);
  const upiString = `upi://pay?pa=${upiVpa}&pn=${payee}&am=${amount}&tn=${note}&cu=INR`;

  // Deep links for GPay, PhonePe, Paytm
  const gpayBtn = document.getElementById("gpayDirectBtn");
  const phonepeBtn = document.getElementById("phonepeDirectBtn");
  const paytmBtn = document.getElementById("paytmDirectBtn");

  if (gpayBtn) gpayBtn.href = upiString;
  if (phonepeBtn) phonepeBtn.href = upiString;
  if (paytmBtn) paytmBtn.href = upiString;

  // Live Dynamic UPI QR Code
  const qrImg = document.getElementById("dynamicUpiQrImg");
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(upiString)}`;
  }

  modal.classList.add("active");
}

// ==========================================================================
// 7. COMBINED SEARCH & MULTI-BRAND FILTER ENGINE
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

    // 3. Search Term Filter (Checks Model Name, Brand, Rear Camera Specs, Processor)
    let matchesSearch = true;
    if (term) {
      const nameMatch = phone.name.toLowerCase().includes(term);
      const brandMatch = phone.brand.toLowerCase().includes(term);
      const specsMatch = phone.specs.some(s => s.text.toLowerCase().includes(term));
      const camIslandMatch = Object.values(phone.cameraIsland).some(v => 
        typeof v === 'string' && v.toLowerCase().includes(term)
      );
      const detailsMatch = Object.values(phone.details).some(v => 
        typeof v === 'string' && v.toLowerCase().includes(term)
      );
      matchesSearch = nameMatch || brandMatch || specsMatch || camIslandMatch || detailsMatch;
    }

    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Update Result Count
  const countSpan = document.getElementById("searchCountNumber");
  if (countSpan) countSpan.textContent = filtered.length;

  renderProducts(filtered);
}

// ==========================================================================
// 8. RENDER 3D FLIP-FLOP SMARTPHONE CARDS (FRONT DISPLAY <-> REAR CAMERA)
// ==========================================================================
function renderProducts(items) {
  const container = document.getElementById("productGrid");
  if (!container) return;

  if (!items || items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted); background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-glass);">
        <i class="fa-solid fa-mobile-screen-button" style="font-size: 3.5rem; margin-bottom: 14px; color: var(--gold);"></i>
        <h4 style="color:#fff; margin-bottom: 8px;">No mobile phones matched your search</h4>
        <p style="margin-bottom: 18px;">We sell all major models from Apple, Samsung, OnePlus, Vivo, iQOO, Oppo, Xiaomi, Realme, Motorola, Nothing, POCO, Tecno, Infinix, and itel!</p>
        <a href="https://wa.me/919876543210?text=Hi%20Lucky%20Mobile,%20do%20you%20have%20this%20phone%20model%20in%20stock?" target="_blank" class="btn btn-gold">
          <i class="fa-brands fa-whatsapp"></i> Enquire Custom Model on WhatsApp
        </a>
      </div>
    `;
    return;
  }

  const isTa = currentLang === "ta";
  const flipBtnText = isTa ? "பின்புற கேமரா" : "Back Camera";
  const flipBackBtnText = isTa ? "முன்புற திரை" : "Front View";
  const buyBtnText = isTa ? "GPay / PhonePe" : "Buy / UPI";

  container.innerHTML = items.map(phone => {
    return `
      <div class="flip-card-container tilt-element" data-id="${phone.id}" data-category="${phone.category}" data-brand="${phone.brand}">
        <div class="flip-card-inner" id="phoneCardInner-${phone.id}">
          
          <!-- FRONT OF CARD: DISPLAY & FRONT SPECS -->
          <div class="flip-card-front">
            <span class="product-badge-dark badge-${phone.badgeType}">${phone.badge}</span>
            
            <!-- Quick Flip Badge on top-right -->
            <button type="button" class="flip-badge-toggle" onclick="toggleCardFlip(${phone.id}, event)" title="Flip to inspect rear camera module">
              <i class="fa-solid fa-camera-rotate"></i> <span>${flipBtnText}</span>
            </button>

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
                <button type="button" class="btn-flip-card" onclick="toggleCardFlip(${phone.id}, event)">
                  <i class="fa-solid fa-camera-rotate text-gold"></i> ${flipBtnText}
                </button>
                <button type="button" class="btn-order-upi-trigger" onclick="openCheckoutModal(${phone.id})">
                  <i class="fa-solid fa-bolt text-cyan"></i> ${buyBtnText}
                </button>
              </div>
            </div>
          </div>

          <!-- BACK OF CARD: REALISTIC REAR CAMERA MODULE & SPECS ("FLIP-FLOP") -->
          <div class="flip-card-back">
            <div class="card-back-header">
              <div class="back-header-left">
                <span class="back-camera-tag"><i class="fa-solid fa-camera"></i> REAR CAMERA</span>
                <h4 class="back-title">${phone.name}</h4>
              </div>
              <button type="button" class="flip-badge-toggle" onclick="toggleCardFlip(${phone.id}, event)" title="Flip back to front display">
                <i class="fa-solid fa-rotate-left"></i> <span>Front</span>
              </button>
            </div>

            <!-- Realistic Camera Module Bump -->
            <div class="rear-camera-island">
              <div class="island-branding">
                <span class="island-co-brand">${phone.cameraIsland.brandTag}</span>
                <span class="island-sensor-type">${phone.cameraIsland.sensorType}</span>
              </div>
              <div class="lens-matrix">
                ${renderLensMatrix(phone.cameraIsland.lensCount)}
                <div class="lens-flash" title="Dual Tone LED Flash"></div>
              </div>
            </div>

            <!-- Detailed Camera Specs Breakdown -->
            <div class="camera-specs-table">
              <div class="cam-spec-item">
                <span class="cam-spec-label"><i class="fa-solid fa-circle-dot text-cyan"></i> Main:</span>
                <span class="cam-spec-val">${phone.cameraIsland.primary}</span>
              </div>
              <div class="cam-spec-item">
                <span class="cam-spec-label"><i class="fa-solid fa-magnifying-glass text-gold"></i> Zoom:</span>
                <span class="cam-spec-val">${phone.cameraIsland.zoom}</span>
              </div>
              <div class="cam-spec-item">
                <span class="cam-spec-label"><i class="fa-solid fa-expand text-cyan"></i> Ultra-Wide:</span>
                <span class="cam-spec-val">${phone.cameraIsland.ultraWide}</span>
              </div>
              <div class="cam-spec-item">
                <span class="cam-spec-label"><i class="fa-solid fa-video text-gold"></i> Video:</span>
                <span class="cam-spec-val">${phone.cameraIsland.video}</span>
              </div>
              <div class="cam-spec-item">
                <span class="cam-spec-label"><i class="fa-solid fa-palette text-cyan"></i> Finish:</span>
                <span class="cam-spec-val">${phone.cameraIsland.finish}</span>
              </div>
            </div>

            <!-- Available Back Colors -->
            <div class="cam-color-pills">
              ${phone.details.colors.map(c => `<span class="cam-color-pill"><i class="fa-solid fa-circle" style="font-size:0.5rem; margin-right:4px;"></i>${c}</span>`).join('')}
            </div>

            <!-- Back Actions Group -->
            <div class="card-back-footer">
              <button type="button" class="btn-flip-back" onclick="toggleCardFlip(${phone.id}, event)">
                <i class="fa-solid fa-rotate-left"></i> ${flipBackBtnText}
              </button>
              <button type="button" class="btn-order-upi-trigger" onclick="openCheckoutModal(${phone.id})">
                <i class="fa-solid fa-credit-card"></i> ${buyBtnText}
              </button>
            </div>
          </div>

        </div>
      </div>
    `;
  }).join('');

  // Re-bind 3D tilt engine on newly created elements
  init3DTiltEngine();
}

// ==========================================================================
// 9. EVENT LISTENERS (COMPANY TABS, CATEGORIES, SEARCH, CLEAR)
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

    if (priceDisplay) priceDisplay.textContent = `₹${calcMin.toLocaleString('en-IN')} - ₹${calcMax.toLocaleString('en-IN')}`;
    if (timeDisplay) timeDisplay.innerHTML = `<i class="fa-regular fa-clock"></i> ~${time}`;
  }

  brandSelect.addEventListener("change", updateEstimate);
  issueSelect.addEventListener("change", updateEstimate);

  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      const brand = brandSelect.options[brandSelect.selectedIndex].text;
      const issue = issueSelect.options[issueSelect.selectedIndex].text;
      const model = modelInput.value.trim() || "Unspecified Model";
      const est = priceDisplay ? priceDisplay.textContent : "";

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

// Language Switcher (English <-> Tamil)
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

// Expose functions globally for inline onclick triggers
window.openSpecsModal = openSpecsModal;
window.toggleCardFlip = toggleCardFlip;
window.openCheckoutModal = openCheckoutModal;
