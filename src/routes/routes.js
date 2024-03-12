// ROUTER INIT
const express = require('express');
const router = express.Router();

// MULTER => FILES HANDLER
const multer = require('multer');
const upload = multer({dest: 'folderImages/'}); // Multer Shadow files location => Go to controller.js l-29 for details

// CONTROLLERS IMPORTS
const analyseCarImage = require('../controllers/analyseCar');
const calculateCarValue = require('../controllers/carValueController')
const calculateRiskRating = require('../controllers/riskRatingController')
const calculateQuote = require('../controllers/calculateQuote')

// ROUTES
router.get('/', (req, res) => res.send('server is up'));
router.post('/analyse-car-image', upload.single('car-image'), (req, res) => analyseCarImage(req, res));
router.post('/calculate_car_value', calculateCarValue);
router.post('/calculate_risk_rating', calculateRiskRating);
router.post('/calculate_quote', calculateQuote);

// EXPORT ROUTER
module.exports = router;
