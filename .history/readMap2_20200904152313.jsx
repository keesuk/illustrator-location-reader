projectPath = arguments[0];

var AiFile = File(projectPath + "/Aifile/map.ai");
var stations = [];

readMap();

function readMap() {
  var document = app.open(AiFile);

  document.activeLayer = document.layers.getByName('map');
  var mapLayer = document.activeLayer;
  var items = mapLayer.groupItems;

  for(var i = 0; i<items.length; i++){
      var itemLayer = items[i].layer
      var itemName = itemLayer.contents.replace(/[\r\n]+/g, '');
      items[i].name = itemName;
    }

  // document.close();
  // app.quit();
  // alert(stations);

  return stations;
};
