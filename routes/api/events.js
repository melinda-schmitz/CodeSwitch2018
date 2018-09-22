const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Events = require('../../models/Events.js');



//@route Get api/events/test
//@desc Test events 
//@access Public
router.get('/test', (req, res) => res.json({msg:'Events  Works'}))


module.exports = router;
