const runApplescript = require('run-applescript');
const path = require("path");
const jsxPath = path.resolve("./readMap.jsx");
const csv = require("fast-csv");
const fs = require('fs');

console.log(`배열 생성 시작`);

var stationsCor = [];
var tmp = [];
var dirNow = path.dirname(require.main.filename);
var ws = fs.createWriteStream(dirNow + "/seoul.csv");

async function makeMap() {
  var corArr = await runApplescript(`tell application "Adobe Illustrator" to do javascript of file "${jsxPath}" with arguments {"${dirNow}"}`);
  
  stationsCor = corArr.split(',')
  stationsCor.toString();
  
  Array.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len/n) + (Math.floor(len% n)> 0 ? 1 : 0);

    for (var i = 0; i < cnt; i++){
      tmp.push(arr.splice(0, n));
    }
    return tmp;
  }
  stationsCor.division(3);
  csv.write(tmp, {headers:true}).pipe(ws);

  return;
};

console.log(`배열 생성 끝`);

module.exports = makeMap; 

