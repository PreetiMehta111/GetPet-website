// const express = require('express');
// const router = express.Router();
// const petController = require('../controllers/pet');
// const multer = require('multer');
// const path = require('path');

// // Set up multer storage
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalname));
//   }
// });
// const upload = multer({ storage: storage });

// // Create a new pet (with image upload)
// router.post('/', upload.single('image'), petController.createPet);

// // Get all pets
// router.get('/', petController.getPets);

// // Get a single pet by ID
// router.get('/:id', petController.getPetById);

// // Update a pet by ID (add upload.single if you want to update image)
// router.put('/:id', upload.single('image'), petController.updatePet);

// // Delete a pet by ID
// router.delete('/:id', petController.deletePet);

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const petController = require('../controllers/pet');
// const multer = require('multer');
// const path = require('path');
// const authenticateToken = require('../middleware/auth');
// const authorizeAdmin = require('../middleware/admin');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.join(__dirname, '../uploads'));
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalName));
//   }
// });
// const upload = multer({ storage: storage });

// // Public routes
// router.get('/', petController.getPets);
// router.get('/:id', petController.getPetById);

// // Admin routes
// router.post('/', authenticateToken, authorizeAdmin, upload.single('image'), petController.createPet);
// router.put('/:id', authenticateToken, authorizeAdmin, upload.single('image'), petController.updatePet);
// router.delete('/:id', authenticateToken, authorizeAdmin, petController.deletePet);
const express = require('express');
const router = express.Router();
const petController = require('../controllers/pet');
const multer = require('multer');
const path = require('path');
const authenticateToken = require('../middleware/auth');
const authorizeAdmin = require('../middleware/admin');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../Uploads')); // Changed to '../uploads'
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalName));
  }
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalName).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    } else {
      cb(new Error('Only .jpg and .png files are allowed'));
    }
  }
});

router.get('/', petController.getPets);
router.get('/:id', petController.getPetById);
router.post('/', authenticateToken, authorizeAdmin, upload.single('image'), petController.createPet);
router.put('/:id', authenticateToken, authorizeAdmin, upload.single('image'), petController.updatePet);
router.delete('/:id', authenticateToken, authorizeAdmin, petController.deletePet);

module.exports = router;