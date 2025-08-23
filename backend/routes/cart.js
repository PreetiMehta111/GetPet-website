// const express = require('express');
// const router = express.Router();
// const pool = require('../db');

// // Add to cart
// router.post('/', async (req, res) => {
//   const { userId, petId, quantity = 1 } = req.body;
//   if (!userId || !petId) {
//     return res.status(400).json({ message: 'userId and petId are required' });
//   }
//   try {
//     await pool.query(
//       'INSERT INTO cart (user_id, pet_id, quantity, created_at) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)',
//       [userId, petId, quantity]
//     );
//     res.status(201).json({ message: 'Added to cart' });
//   } catch (error) {
//     console.error('Add to cart error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Get cart for a user
// router.get('/:userId', async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const result = await pool.query(
//       'SELECT * FROM cart WHERE user_id = $1',
//       [userId]
//     );
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Get cart error:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const pool = require('../db');
const authenticateToken = require('../middleware/auth');

router.get('/:userId', authenticateToken, async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await pool.query(
      'SELECT c.*, p.name, p.category, p.breed, p.price, p.discount, p.image_url FROM cart c JOIN pets p ON c.pet_id = p.id WHERE c.user_id = $1 ORDER BY c.created_at',
      [userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', authenticateToken, async (req, res) => {
  const { user_id, pet_id, quantity } = req.body;
  if (!user_id || !pet_id || !quantity) {
    return res.status(400).json({ error: 'User ID, pet ID, and quantity are required' });
  }
  try {
    const petCheck = await pool.query('SELECT id FROM pets WHERE id = $1', [pet_id]);
    if (petCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Pet not found' });
    }
    const result = await pool.query(
      'INSERT INTO cart (user_id, pet_id, quantity) VALUES ($1, $2, $3) RETURNING *',
      [user_id, pet_id, quantity]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  if (!quantity) {
    return res.status(400).json({ error: 'Quantity is required' });
  }
  try {
    const result = await pool.query(
      'UPDATE cart SET quantity = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
      [quantity, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM cart WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Cart item not found' });
    }
    res.json({ message: 'Cart item deleted' });
  } catch (error) {
    console.error('Delete cart error:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;