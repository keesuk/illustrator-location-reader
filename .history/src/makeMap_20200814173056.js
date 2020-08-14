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
  
  Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len/n) + (Math.floor(len% n)> 0 ? 1 : 0);
    var tmp = [];

    for (var i = 0; i < cnt; i++){
      tmp.push(arr.splice(0, n));
    }

    fastCsv.pipe(writeStream);
    fastCsv.write(tmp, {headers:true})
    fastCsv.end();

    return tmp;
  }

  stationsCor.division(3);


  return;
};

console.log(`배열 생성 끝`);

module.exports = makeMap; 

