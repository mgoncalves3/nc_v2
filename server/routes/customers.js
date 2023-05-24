const express = require('express');
const router = express.Router();

const Client = require('../models/customerModel');

// Get all clients
router.get('/', async (req, res) => {
  console.log('getting clients')
  const clients = await Client.find({})
});

module.exports = router;