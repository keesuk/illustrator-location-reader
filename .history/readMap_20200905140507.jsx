projectPath = arguments[0];
csvData = arguments[1];

var AiFile = File(projectPath + "/Aifile/map.ai");
var csvArr = [];
csvArr.push(csvData)

readMap();

function readMap() {
  var document = app.open(AiFile);

  document.activeLayer = document.layers.getByName('map');
  var mapLayer = document.activeLayer;
  var items = mapLayer.groupItems;

  for(var i = 0; i<2; i++){
      var groupItemName = items[i].name
      alert(csvArr.find( groupItemName ))
      var itemLayer = items[i].pageItems
      // var itemPosition = itemLayer[0].position
      stations.push(groupItemName);
      // stations.push(itemPosition);
    }

  return stations;
};
