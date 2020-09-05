const runApplescript = require('run-applescript');
const path = require("path");
const jsxPath = path.resolve("./readMap.jsx");
const csv = require("fast-csv");
const fs = require('fs');
const parse = require('csv-parse');

var csvData =[];
var dirNow = path.dirname(require.main.filename);
fs.createReadStream(dirNow + "/PseoulStation.csv")
  .pipe(parse({delimiter: ','}))
  .on('data', function(csvrow) {
      for(let i =0; i<csvrow.length; i++){
        csvData.push(csvrow[i]);
      };
  })
  .on('end', function() {
  })

var stationsCor = [];
var tmp = [];
var dirNow = path.dirname(require.main.filename);
var ws = fs.createWriteStream(dirNow + "/seoul.csv");

async function makeMap() {
  var corArr = await runApplescript(`
    set theDelimiter
    set theList
    on convertListToString(theList, theDelimiter)
      set AppleScript's text item delimiters to theDelimiter
      set theString to theList as string
      set AppleScript's text item delimiters to ""
      return theString
    end convertListToString
      tell application "Adobe Illustrator" to do javascript file "${jsxPath}" with arguments {"${dirNow}"}
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

