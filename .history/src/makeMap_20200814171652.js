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
  stationsCor.division(3);
  
  Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len/n) + (Math.floor(len% n)> 0 ? 1 : 0);
    var tmp = [];

    for (var i = 0; i < cnt; i++){
      tmp.push(arr.splice(0, n));
    }
    return tmp;
  }

  fastCsv.pipe(writeStream);
  fastCsv.write(stationsCor)
  fastCsv.end();

  // var count = 1;
  // var csvOutputStream = csv.createWriteStream({rtrim: true, headers: true});
  // var output = csvOutputStream
  //   .pipe(fs.createWriteStream("output.csv", {encoding: 'utf-8'}))
  //   .on("finish", function () {
  //       console.log("done");
  //   });

  // csv.fromPath("outputfile.csv", {rtrim: true, headers: true})
  //   .on("record", function (data) {
  //       data.ordinalValue = count;
  //       count = count + 1;
  //       csvOutputStream.write(data);
  //   })
  //   .on("end", function () {
  //       csvOutputStream.write(null);
  //   });

  return;
};

console.log(`배열 생성 끝`);

module.exports = makeMap; 

