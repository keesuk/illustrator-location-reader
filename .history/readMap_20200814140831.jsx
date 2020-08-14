projectPath = arguments[0];

var AiFile = File(projectPath + "/Aifile/map.ai");
var stations = [];

readMap();

function readMap() {
  var document = app.open(AiFile);

  document.activeLayer = document.layers.getByName('map');
  var mapLayer = document.activeLayer;
  var items = mapLayer.pageItems;

  $.writeln(items[1].contents);

  for(var i = 0; i<items.length; i++){

      var itemName = items[i].contents;
      var itemPosition = items[i].position;
      stations.push(itemName);
      stations.push(itemPosition);
    }

  // document.close();
  // app.quit();
  alert(stations);

  return stations;
};
