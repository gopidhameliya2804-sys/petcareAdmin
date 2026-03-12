const express = require("express");
const multer = require("multer");

// Storage configuration
//cb - call back
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


const upload = multer({
  storage: storage,
  limits: {fileSize : 5 * 1024 * 1024 }, // 5MB 
});


module.exports = upload;