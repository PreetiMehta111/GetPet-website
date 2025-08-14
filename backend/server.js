

// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const pool = require('./db');
// require('dotenv').config();

// const app = express();
// app.use(express.json());
// app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend (React) to connect

// const JWT_SECRET = process.env.JWT_SECRET; // Use .env variable

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

// // Register endpoint
// app.post('/api/register', async (req, res) => {
//   const { fullName, email, phone, password } = req.body;

//   if (!fullName || !email || !phone || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const result = await pool.query(
//       'INSERT INTO users (full_name, email, phone, password, created_at, updated_at) VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING id',
//       [fullName, email.toLowerCase(), phone, hashedPassword]
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

//     const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
//     res.json({ message: 'Login successful', token });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Protected route (for testing)
// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Protected data', user: req.user });
// });

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






const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend (React) to connect

const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Middleware to check admin role
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};

// Register endpoint with optional admin role
app.post('/api/register', async (req, res) => {
  const { fullName, email, phone, password, role = 'user' } = req.body;

  if (!fullName || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      'INSERT INTO users (full_name, email, phone, password, role, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) RETURNING id',
      [fullName, email.toLowerCase(), phone, hashedPassword, role]
    );
    res.status(201).json({ message: 'User registered successfully', userId: result.rows[0].id });
  } catch (error) {
    if (error.code === '23505') {
      res.status(400).json({ message: 'Email already registered' });
    } else {
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token, role: user.role });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected admin dashboard route
app.get('/api/admin', authenticateToken, authorizeAdmin, (req, res) => {
  res.json({ message: 'Admin dashboard data', user: req.user });
});

// Test database connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
  } else {
    console.log('Database connected successfully:', res.rows[0]);
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));