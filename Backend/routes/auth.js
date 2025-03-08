const express = require('express');
const { query, body } = require('express-validator')
const router = express.Router()
const User = require('../model/user')

router.post('/', [
    body('name').isLength({min:3}),
    body('email').isEmail(),
], (req, res) => {
    res.send(req.body) 
    const user = User(req.body)
    user.save()
    console.log(req.body)
})

module.exports = router