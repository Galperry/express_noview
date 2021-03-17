const express = require('express');
const app = require('../app');
const router = express.Router();
const path= require("path")
const data = require("../data.json")
const fs = require("fs")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "..", 'data.json'));
});

router.post('/', function(req,res){
  let content=''

  const username = req.body.username
  const age = req.body.age

  data.users.push({username, age})
  content=JSON.stringify(data)

  fs.writeFile('data.json', content, function(err,data){
      if (err){
          console.log(err)
      }
      res.redirect("/")
  })
})

module.exports = router;
