const runApplescript = require('run-applescript');
const path = require("path");
const jsxPath = path.resolve("./readMap.jsx");
const csv = require("fast-csv");
const fs = require('fs');

console.log(`배열 생성 시작`);

var stationsCor = [];
var dirNow = path.dirname(require.main.filename);
var fastCsv = csv.createWriteStream();
var writeStream = fs.createWriteStream(dirNow + "/outputfile.csv");

async function makeMap() {
  var corArr = await runApplescript(`tell application "Adobe Illustrator" to do javascript of file "${jsxPath}" with arguments {"${dirNow}"}`);
  stationsCor = corArr.split(','); 
  stationsCor.value.replace(/\n/g, "<br />");
  
    for (var i = 0; i <= stationsCor.length; i++ ){
      console.log(stationsCor[i]);
    
  };

  fastCsv.pipe(writeStream);
  fastCsv.write(stationsCor)
  fastCsv.end();

  return;
};

console.log(`배열 생성 끝`);

module.exports = makeMap; 

