# Lucky Mobile (லக்கி மொபைல்) - Website

Official website for **Lucky Mobile**, located at 76, Tiruvannamalai Rd, Thamarai Nagar, Thirukkanur, Puducherry 605501.

## 📱 Features
- **Bilingual Interface**: Seamless toggle between **English** and **தமிழ் (Tamil)**.
- **Dynamic Smartphone Catalog**: Live filtering for Flagship, Mid-Range, Budget, and 5G smartphones with dynamic search.
- **Repair Cost Estimator**: Instant estimation calculator for displays, batteries, charging ports, and water damage with direct WhatsApp booking.
- **Interactive Google Maps**: Integrated route navigation and Plus Code `XJRR+X3 Thirukkanur`.
- **One-Click WhatsApp & Call CTAs**: Pre-filled inquiry messages for phone purchases and service bookings.
- **Mobile First**: Fixed quick-action bar for mobile shoppers and repair clients.

## 🚀 Live Demo & GitHub Pages
This repository is configured with GitHub Actions to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch.

### Local Development
To run this website locally, open `index.html` directly in any web browser, or use a local HTTP server:

```bash
# Using Node.js
npx serve .

# Using Python
python -m http.server 8000
```
Then visit `http://localhost:8000`.

## ⚙️ Configuration
- To update phone numbers or WhatsApp contact, search and replace `+919876543210` / `919876543210` in `index.html` and `script.js`.
- To update store timing or catalog models, edit `script.js`.
