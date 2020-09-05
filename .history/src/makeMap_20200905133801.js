const runApplescript = require('run-applescript');
const path = require("path");
const jsxPath = path.resolve("./readMap.jsx");
const csv = require("fast-csv");
const fs = require('fs');

var dirNow = path.dirname(require.main.filename);
  
var stationsCor = [];
var tmp = [];
var ws = fs.createWriteStream(dirNow + "/seoul.csv");

async function makeMap(csvData) {
  var corArr = await runApplescript(`
  set theList to {"${csvData}"}
  display dialog theList
    tell application "Adobe Illustrator" to do javascript file "#include ${jsxPath}" with arguments {"${dirNow}", theList}
  `);
  
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

module.exports = makeMap; 

