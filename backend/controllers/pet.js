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
  const { name, species, age, adopted } = req.body;
  try {
    const result = await pool.query(
      'UPDATE pets SET name = $1, species = $2, age = $3, adopted = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *',
      [name, species, age, adopted, req.params.id]
    );
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