const express = require('express');

const router = express.Router();

var date_ob = new Date();
var day = ("0" + date_ob.getDate()).slice(-2);
var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
var year = date_ob.getFullYear();

var date = year + "-" + month + "-" + day;

router.get('/', function (req, res, next) {
    
  res.render('index', {
    date: date
  }) 
 
}
);

router.get('/about', function (req, res, next) {
    
  res.render('about', {}) 
 
}
);


module.exports = router;
