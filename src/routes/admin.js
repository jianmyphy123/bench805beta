var express = require('express');
var router = express.Router();
var fs = require('fs');
var XLSX = require('xlsx');
var path = require('path');

var mainController = require('../controllers/main');

router.post('/upload', function(req, res) {

  if(req.files == undefined || req.files == null || req.files.length == 0) {

    res.status(400).json({errors: ['Please select file to upload']});

  } else {

    let file = req.files[0];

    let originalname = file.originalname;
    let filename = file.filename;
    let mimetype = file.mimetype;
    let filepath = file.path;
    let size = file.size;

    let ext = path.extname(originalname).toLowerCase();

    if(ext == '.xlsm' || ext == '.xls' || ext == '.xlsx') {
      const workbook = XLSX.readFile(filepath);

      const sheet = workbook.Sheets.MAIN;

      if(sheet == undefined || sheet == null) {

        fs.unlinkSync(filepath);

        res.status(400).json({errors: ['This file is not correct. Please try again.']});

      } else {
        const rows = XLSX.utils.sheet_to_json(sheet);

        mainController.buildTable(rows, () => {
          fs.unlinkSync(filepath);

          res.json({success: true});
        })

      }
    } else {

      fs.unlinkSync(filepath);

      res.status(400).json({errors: ['This file is not correct. Please try again.']});
    }

  }


});

router.post('/viewtable', function(req, res) {

  mainController.fetchTableData().then(data => {

    res.json({tabledata: data});

  })

});

module.exports = router;
