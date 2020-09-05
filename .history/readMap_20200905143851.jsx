projectPath = arguments[0];
csvData = arguments[1];

var AiFile = File(projectPath + "/Aifile/map.ai");
csvData.split(',');
alert(csvData)

readMap();

function readMap() {
    var document = app.open(AiFile);

    document.activeLayer = document.layers.getByName('map');
    var mapLayer = document.activeLayer;
    var items = mapLayer.groupItems;

    for(var i = 0; i<2; i++){
        var groupItemName = items[i].name
        var index, value, result;
alert(csvData)
        for (index = 0; index < csvData.length; ++index) {
            value = csvData[index];
            if (value.substring(0, 3) === groupItemName) {
                result = value;
            }else if(value.substring(0,5) === groupItemName){
                result = value;
            }break;
        }
        alert(result)
        // var itemLayer = items[i].pageItems
        // var itemPosition = itemLayer[0].position
        // stations.push(groupItemName);
        // stations.push(itemPosition);
    }

    return stations;
};