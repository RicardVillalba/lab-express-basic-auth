const express = require('express');
const siteRouter = express.Router();


function isLoggedIn(req, res, next) {
    if (req.session.currentUser) { // If user is authenticated
      next();
    } else {
      res.redirect('/auth/login');
    }
  }
  

// GET         '/secret'       
siteRouter.get('/private', isLoggedIn, (req, res, next) => {
  res.render('private');
})

// GET         '/profile'       
siteRouter.get('/main', isLoggedIn, (req, res, next) => {
  res.render('main');
})

module.exports = siteRouter;