


// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const pool = require('./db');
// require('dotenv').config();


// const petRoutes = require('./routes/pet'); // <-- Add this line

// const app = express();
// app.use(express.json());
// // app.use(cors({ origin: 'http://localhost:5173' }));
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:5174'],
//   credentials: true
// }));

// const JWT_SECRET = process.env.JWT_SECRET;

// // Middleware to verify JWT
// const authenticateToken = (req, res, next) => {
//   const token = req.headers['authorization']?.split(' ')[1];
//   if (!token) return res.status(401).json({ message: 'Access denied' });

//   jwt.verify(token, JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ message: 'Invalid token' });
//     req.user = user;
//     next();
//   });
// };

// // Middleware to check admin role
// const authorizeAdmin = (req, res, next) => {
//   if (req.user.role !== 'admin') {
//     return res.status(403).json({ message: 'Admin access required' });
//   }
//   next();
// };

// // Register endpoint with optional admin role
// app.post('/api/register', async (req, res) => {
//   const { fullName, email, phone, password, role = 'user' } = req.body;

//   if (!fullName || !email || !phone || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await pool.query(
//       'INSERT INTO users (full_name, email, phone, password, role, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING id',
//       [fullName, email.toLowerCase(), phone, hashedPassword, 'user']
//     );
//     res.status(201).json({ message: 'User registered successfully', userId: result.rows[0].id });
//   } catch (error) {
//     if (error.code === '23505') {
//       res.status(400).json({ message: 'Email already registered' });
//     } else {
//       console.error('Registration error:', error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// });

// // Login endpoint
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email and password are required' });
//   }

//   try {
//     const result = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);
//     const user = result.rows[0];

//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token, role: user.role });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected admin dashboard route
// app.get('/api/admin', authenticateToken, authorizeAdmin, (req, res) => {
//   res.json({ message: 'Admin dashboard data', user: req.user });
// });

// // Use pet routes
// app.use('/api/pets', petRoutes); // <-- Add this line
// app.use('/uploads', express.static('uploads'));

// const cartRoutes = require('./routes/cart');
// app.use('/api/cart', cartRoutes);

// // Test database connection
// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//   } else {
//     console.log('Database connected successfully:', res.rows[0]);
//   }
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





const pool = require('../db');
const path = require('path');

// Create a new pet with image upload
exports.createPet = async (req, res) => {
  const {
    name, category, breed, origin, behavior, diet, feeding, price, discount
  } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  try {
    const result = await pool.query(
      `INSERT INTO pets 
        (name, category, breed, origin, behavior, diet, feeding, price, discount, image_url) 
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [
        name, category, breed, origin, behavior, diet, feeding,
        price ? Number(price) : null,
        discount ? Number(discount) : null,
        image_url
      ]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all pets
exports.getPets = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pets');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single pet by ID
exports.getPetById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pets WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Pet not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a pet by ID
exports.updatePet = async (req, res) => {
  const {
    name, category, breed, origin, behavior, diet, feeding, price, discount
  } = req.body;
  let image_url = null;
  if (req.file) {
    image_url = `/uploads/${req.file.filename}`;
  }

  try {
    const fields = [];
    const values = [];
    let index = 1;

    if (name !== undefined) { fields.push(`name = $${index++}`); values.push(name); }
    if (category !== undefined) { fields.push(`category = $${index++}`); values.push(category); }
    if (breed !== undefined) { fields.push(`breed = $${index++}`); values.push(breed); }
    if (origin !== undefined) { fields.push(`origin = $${index++}`); values.push(origin); }
    if (behavior !== undefined) { fields.push(`behavior = $${index++}`); values.push(behavior); }
    if (diet !== undefined) { fields.push(`diet = $${index++}`); values.push(diet); }
    if (feeding !== undefined) { fields.push(`feeding = $${index++}`); values.push(feeding); }
    if (price !== undefined) { fields.push(`price = $${index++}`); values.push(Number(price)); }
    if (discount !== undefined) { fields.push(`discount = $${index++}`); values.push(Number(discount)); }
    if (image_url) { fields.push(`image_url = $${index++}`); values.push(image_url); }

    fields.push(`updated_at = CURRENT_TIMESTAMP`);

    values.push(req.params.id);

    if (fields.length === 1) return res.status(400).json({ error: 'No fields to update' });

    const query = `UPDATE pets SET ${fields.join(', ')} WHERE id = $${index} RETURNING *`;

    const result = await pool.query(query, values);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Pet not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a pet by ID
exports.deletePet = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM pets WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Pet not found' });
    res.json({ message: 'Pet deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};