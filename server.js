/**
 * Lucky Mobile (லக்கி மொபைல்) - Full-Stack Express / Node.js Server
 * Provides REST APIs for smartphones, orders, and UPI checkout
 * Auto-compatible with Render Web Services and local development
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Shop Owner UPI and Business Configuration
const SHOP_CONFIG = {
  shopName: "Lucky Mobile (லக்கி மொபைல்)",
  ownerName: "Lucky Mobile Thirukkanur",
  upiId: process.env.SHOP_UPI_ID || "luckymobile@upi",
  phonePeNumber: process.env.SHOP_PHONEPE || "+91 98765 43210",
  gPayNumber: process.env.SHOP_GPAY || "+91 98765 43210",
  whatsappNumber: "919876543210",
  address: "76, Tiruvannamalai Rd, Thamarai Nagar, Thirukkanur, Puducherry 605501",
  currency: "INR"
};

// In-memory orders store
const orders = [];

// MIME types for static files
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// Request Handler
const server = http.createServer((req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // API Route: Shop Owner UPI & Contact Config
  if (pathname === '/api/upi-config' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', config: SHOP_CONFIG }));
    return;
  }

  // API Route: Create / Register Online Order
  if (pathname === '/api/order' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const orderData = JSON.parse(body || '{}');
        const orderId = 'LM-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000);
        
        const newOrder = {
          orderId,
          createdAt: new Date().toISOString(),
          customerName: orderData.customerName || 'Anonymous Customer',
          phone: orderData.phone || '',
          address: orderData.address || 'Store Pickup, Thirukkanur',
          phoneModel: orderData.phoneModel || '',
          brand: orderData.brand || '',
          price: orderData.price || 0,
          paymentMethod: orderData.paymentMethod || 'UPI (GPay/PhonePe)',
          transactionRef: orderData.transactionRef || 'PENDING_CONFIRMATION',
          status: 'ORDER_PLACED'
        };

        orders.push(newOrder);

        // Generate custom UPI payment URI for mobile deep links
        const upiUri = `upi://pay?pa=${encodeURIComponent(SHOP_CONFIG.upiId)}&pn=${encodeURIComponent(SHOP_CONFIG.ownerName)}&am=${encodeURIComponent(newOrder.price)}&cu=INR&tn=${encodeURIComponent('Order ' + orderId)}`;

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          status: 'success',
          message: 'Order created successfully',
          order: newOrder,
          upiUri,
          shopDetails: SHOP_CONFIG
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'error', message: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // API Route: Get Orders List
  if (pathname === '/api/orders' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', count: orders.length, orders }));
    return;
  }

  // Static File Serving
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

  // Security: Prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routing if needed
      filePath = path.join(__dirname, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`Lucky Mobile Server running on http://localhost:${PORT}`);
});
