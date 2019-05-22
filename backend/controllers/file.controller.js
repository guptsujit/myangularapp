var express = require('express');
var multer = require('multer');
var fs = require('fs');
var app = express();
const jwt = require('jsonwebtoken');
var DIR = './uploads/';
 app.use(function (req, res, next) {
  next();
});
var upload = multer({dest: DIR});
app.use(multer({
  dest: DIR,
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));
module.exports.upload = (req,res,next)=>{
    upload(req, res, function (err) {
    if (err) {
      res.status(501).json({error : "file upload failed"});
    }
   res.status(200).json({ filename: filename, uploadname :filename + Date.now()});
   
  });


}