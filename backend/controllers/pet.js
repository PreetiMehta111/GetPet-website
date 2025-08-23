// const { Pet } = require('../models');

// // Create a new pet
// exports.createPet = async (req, res) => {
//   try {
//     const pet = await Pet.create(req.body);
//     res.status(201).json(pet);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Get all pets
// exports.getPets = async (req, res) => {
//   try {
//     const pets = await Pet.findAll();
//     res.json(pets);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get a single pet by ID
// exports.getPetById = async (req, res) => {
//   try {
//     const pet = await Pet.findByPk(req.params.id);
//     if (!pet) return res.status(404).json({ error: 'Pet not found' });
//     res.json(pet);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Update a pet by ID
// exports.updatePet = async (req, res) => {
//   try {
//     const [updated] = await Pet.update(req.body, { where: { id: req.params.id } });
//     if (!updated) return res.status(404).json({ error: 'Pet not found' });
//     const updatedPet = await Pet.findByPk(req.params.id);
//     res.json(updatedPet);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// // Delete a pet by ID
// exports.deletePet = async (req, res) => {
//   try {
//     const deleted = await Pet.destroy({ where: { id: req.params.id } });
//     if (!deleted) return res.status(404).json({ error: 'Pet not found' });
//     res.json({ message: 'Pet deleted' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
const pool = require('../db');
const path = require('path');

exports.getPets = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pets');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPetById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM pets WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Pet not found' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPet = async (req, res) => {
  const {
    name, category, breed, origin, behavior, diet, feeding, price, discount
  } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  if (!name || !category || !breed) {
    return res.status(400).json({ error: 'Name, category, and breed are required' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO pets 
        (name, category, breed, origin, behavior, diet, feeding, price, discount, image_url) 
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [
        name, category, breed, origin || null, behavior || null, diet || null, feeding || null,
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

exports.updatePet = async (req, res) => {
  const {
    name, category, breed, origin, behavior, diet, feeding, price, discount
  } = req.body;
  const image_url = req.file ? `/uploads/${req.file.filename}` : req.body.image_url;

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
    if (image_url !== undefined) { fields.push(`image_url = $${index++}`); values.push(image_url); }

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

exports.deletePet = async (req, res) => {
  try {
    const result = await pool.query('DELETE FROM pets WHERE id = $1 RETURNING *', [req.params.id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Pet not found' });
    res.json({ message: 'Pet deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};