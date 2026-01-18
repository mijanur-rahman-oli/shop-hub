// server.js
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// ── Middleware ────────────────────────────────────────────────
const allowedOrigins = [
  'https://shop-hub-sandy-seven.vercel.app',
  'http://localhost:3000',
  'http://localhost:3001', // dev frontend if needed
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json({ limit: '10mb' }));
app.use(cookieParser());

// ── In-memory data (for demo only) ─────────────────────────────
let items = [
  { id: 1, name: 'Premium Headphones', description: 'High-quality wireless headphones with noise cancellation', price: 299, category: 'Audio', brand: 'SoundMax', stock: 45, rating: 4.9, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400' },
  { id: 2, name: 'Smart Watch', description: 'Fitness tracking smartwatch with heart rate monitor', price: 399, category: 'Wearables', brand: 'TechFit', stock: 32, rating: 4.7, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400' },
  { id: 3, name: 'Laptop Stand', description: 'Ergonomic aluminum laptop stand for better posture', price: 79, category: 'Accessories', brand: 'ErgoDesk', stock: 120, rating: 4.6, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400' },
  { id: 4, name: 'Mechanical Keyboard', description: 'RGB backlit mechanical gaming keyboard', price: 149, category: 'Peripherals', brand: 'KeyMaster', stock: 67, rating: 4.8, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400' },
  { id: 5, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with precision tracking', price: 59, category: 'Peripherals', brand: 'ClickPro', stock: 95, rating: 4.5, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400' },
  { id: 6, name: 'USB-C Hub', description: '7-in-1 USB-C hub with HDMI, SD card reader, and power delivery', price: 89, category: 'Accessories', brand: 'ConnectPlus', stock: 78, rating: 4.7, image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400' },
  { id: 8, name: 'Portable SSD 1TB', description: 'High-speed portable solid-state drive with USB-C', price: 139, category: 'Storage', brand: 'DataVault', stock: 88, rating: 4.9, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400' },
  { id: 9, name: 'Wireless Earbuds', description: 'True wireless earbuds with active noise cancellation', price: 199, category: 'Audio', brand: 'SoundMax', stock: 156, rating: 4.6, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400' },
  { id: 10, name: 'Monitor 27" 4K', description: 'Ultra HD 4K monitor with HDR and USB-C connectivity', price: 549, category: 'Displays', brand: 'ViewMax', stock: 23, rating: 4.8, image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400' },
  { id: 11, name: 'Gaming Mouse Pad', description: 'Extended RGB gaming mouse pad with wireless charging', price: 45, category: 'Accessories', brand: 'GameZone', stock: 203, rating: 4.4, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400' },
  { id: 12, name: 'Desk Lamp LED', description: 'Smart LED desk lamp with adjustable brightness and temperature', price: 69, category: 'Office', brand: 'LightWorks', stock: 112, rating: 4.7, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400' },
  { id: 13, name: 'Graphics Tablet', description: 'Professional drawing tablet with pressure-sensitive pen', price: 249, category: 'Creative', brand: 'ArtPro', stock: 34, rating: 4.8, image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400' },
  { id: 14, name: 'Microphone Studio', description: 'Professional USB condenser microphone for streaming', price: 189, category: 'Audio', brand: 'VoiceMaster', stock: 56, rating: 4.9, image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400' },
  { id: 15, name: 'Cable Organizer Kit', description: 'Complete cable management solution with clips and sleeves', price: 29, category: 'Accessories', brand: 'OrganiZen', stock: 287, rating: 4.5, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400' },
  { id: 16, name: 'Bluetooth Speaker', description: 'Portable waterproof Bluetooth speaker with 360° sound', price: 119, category: 'Audio', brand: 'SoundWave', stock: 143, rating: 4.6, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400' },
  { id: 18, name: 'External Hard Drive 2TB', description: 'Portable external hard drive with USB 3.0', price: 99, category: 'Storage', brand: 'DataVault', stock: 167, rating: 4.5, image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400' },
  { id: 19, name: 'Laptop Sleeve 15"', description: 'Premium leather laptop sleeve with extra pockets', price: 49, category: 'Accessories', brand: 'ProCase', stock: 234, rating: 4.6, image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400' },
  { id: 20, name: 'Monitor Arm', description: 'Dual monitor arm with gas spring and cable management', price: 159, category: 'Office', brand: 'ErgoDesk', stock: 45, rating: 4.8, image: 'https://images.unsplash.com/photo-1587653915936-5623ea0b949a?w=400' },
  { id: 22, name: 'Tablet 10" Pro', description: 'High-performance tablet with stylus and keyboard support', price: 599, category: 'Tablets', brand: 'TechTab', stock: 28, rating: 4.8, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400' },
  { id: 23, name: 'Gaming Headset', description: '7.1 surround sound gaming headset with RGB lighting', price: 129, category: 'Audio', brand: 'GameZone', stock: 89, rating: 4.6, image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=400' }
];

let nextId = 25;
// ── Routes ─────────────────────────────────────────────────────
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    uptime: process.uptime()
  });
});

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const item = items.find(i => i.id === id);
  
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  res.json(item);
});

app.post('/api/items', (req, res) => {
  const { name, description, price, image, category, brand, stock, rating } = req.body;

  // Basic validation
  if (!name || !description || !price) {
    return res.status(400).json({ 
      error: 'Missing required fields',
      required: ['name', 'description', 'price']
    });
  }

  const newItem = {
    id: nextId++,
    name: String(name).trim(),
    description: String(description).trim(),
    price: Number(parseFloat(price).toFixed(2)),
    image: image && typeof image === 'string' 
      ? image.trim() 
      : 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    category: category ? String(category).trim() : 'Uncategorized',
    brand: brand ? String(brand).trim() : 'Generic',
    stock: Number(stock) || 0,
    rating: Number(rating) || 4.5,
    createdAt: new Date().toISOString()
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// ── Start server (only in development) ─────────────────────────
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

// Important for serverless / platforms like Render, Railway, Vercel Functions
export default app;