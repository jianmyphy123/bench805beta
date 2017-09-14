var Main = require('../models').Main;


module.exports = {

  convertRow: (row) => {
    let data = {};
    let i;

    for(i=1; i<=45; i++) {

      let val = row[i.toString()];

      if(val === undefined || val === null) {
        data["col"+i] = '';
        continue;
      }

      val = val.trim();

  		if(val == '-')
  			val = '0';

      switch(i) {
  			case 9:
  			case 10:
  			case 11:
  			case 12:
  			case 13:
  			case 14:
  			case 15:
  			case 18:
  			case 19:
  			case 22:
  			case 23:
  			case 26:
  			case 27:
  			case 30:
  			case 31:
  			case 34:
  			case 35:
  			case 38:
        case 39:
          val = val.replace(/\,/g,'');

          // if(val === 'Indefinite')

          data["col"+i] = val;
          break;
        default:

          data["col"+i] = val;
          break;
      }



    }
    return data;
  },


  saveRow: function(rows, callback) {

    if(rows.length == 0) {
      return callback();
    }

    let row = rows.shift();

  	row = this.convertRow(row);

    Main.findOne({where: {col44: row["col44"]}}).then(data => {
      if(data) {
        data.update(row).then(() => {
          this.saveRow(rows, callback);
        })
      } else {
        Main.create(row).then(row => {
          this.saveRow(rows, callback);
        })
      }
    });

  },

  buildTable: function(rows, callback) {

    let headerRow = {};

  	for(let i=1; i<=45; i++) {
  		headerRow[i.toString()] = i.toString();
  	}

  	rows.unshift(headerRow);

  	this.saveRow(rows, () => {
  		callback();
  	});

  },

  fetchTableData: function() {

    return Main.findAll();

  }

}
