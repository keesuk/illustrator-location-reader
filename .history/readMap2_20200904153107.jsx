projectPath = arguments[0];

var AiFile = File(projectPath + "/Aifile/map.ai");
var stations = [];

readMap();

function readMap() {
  var document = app.open(AiFile);

  document.activeLayer = document.layers.getByName('map');
  var mapLayer = document.activeLayer;
  var items = mapLayer.groupItems;

  for(var i = 0; i<2; i++){
      var itemLayer = items[i].pageItems[1].name
      // var itemName = itemLayer[1].contents.replace(/[\r\n]+/g, '');
      // items[i].name = itemName;
      alert(itemLayer);
    }

  // document.close();
  // app.quit();
  // alert(stations);

  return stations;
};
