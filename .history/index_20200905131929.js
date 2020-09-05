const attachMap = require('./src/makeMap');

var csvData = [];

fs.createReadStream(dirNow + "/PseoulStation.csv")
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvrow) {
      for(let i =0; i<csvrow.length; i++){
        csvData.push(csvrow[i]);
      };
    attachMap(csvData);;
  })
  .on('end', function() {
  })

