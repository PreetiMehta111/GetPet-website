const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet');
const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Create a new pet (with image upload)
router.post('/', upload.single('image'), petController.createPet);

// Get all pets
router.get('/', petController.getPets);

// Get a single pet by ID
router.get('/:id', petController.getPetById);

// Update a pet by ID (add upload.single if you want to update image)
router.put('/:id', upload.single('image'), petController.updatePet);

// Delete a pet by ID
router.delete('/:id', petController.deletePet);

module.exports = router;