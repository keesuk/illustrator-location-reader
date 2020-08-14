projectPath = arguments[0];

var AiFile = File(projectPath + "/Aifile/map.ai");
var stations = [];

readMap();

function readMap() {
  var document = app.open(AiFile);

  document.activeLayer = document.layers.getByName('map');
  var mapLayer = document.activeLayer;
  var items = mapLayer.pageItems;


  for(var i = 0; i<items.length; i++){
      var active = item[i].textRange.characterAttributes;

      var itemName = items[i].contents.replace(/[\r\n]+/g, "<br/>");
      var itemPosition = items[i].position;
      var itemText = active.size;
      stations.push(itemName);
      stations.push(itemPosition);
      stations.push(itemsText);
    }

  // document.close();
  // app.quit();
  // alert(stations);

  return stations;
};
