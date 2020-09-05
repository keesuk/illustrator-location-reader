const runApplescript = require('run-applescript');
const path = require("path");
const jsxPath = path.resolve("./readMap.jsx");
const csv = require("fast-csv");
const fs = require('fs');
const parse = require('csv-parse');

console.log(`배열 생성 시작`);

var csvData =[];
var dirNow = path.dirname(require.main.filename);
fs.createReadStream(dirNow + "/PseoulStation.csv")
  .pipe(parse({delimiter: ':'}))
  .on('data', function(csvrow) {
    console.log(csvrow);
    csvData.push(csvrow);
  })
  .on('end', function() {
    console.log(csvData);
  })

var stationsCor = [];
var tmp = [];
var dirNow = path.dirname(require.main.filename);
var ws = fs.createWriteStream(dirNow + "/seoul.csv");

async function makeMap() {
  var corArr = await runApplescript(`tell application "Adobe Illustrator" to do javascript "#include ${jsxPath}" with arguments {"${dirNow}", "${csvData}"}`);
  
  stationsCor = corArr.split(',')
  stationsCor.toString();
  
  Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len/n) + (Math.floor(len% n)> 0 ? 1 : 0);

    for (var i = 0; i < cnt; i++){
      tmp.push(arr.splice(0, n));
    }
    tmp.unshift(['station','xCor','yCor']);
    return tmp;
  }
  stationsCor.division(3);
  csv.write(tmp, {headers:true}).pipe(ws);

  return;
};

console.log(`배열 생성 끝`);

module.exports = makeMap; 

