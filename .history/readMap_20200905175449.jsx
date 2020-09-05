projectPath = arguments[0];
csvData = arguments[1];

var AiFile = File(projectPath + "/Aifile/map.ai");
var csvArr = [];
csvArr = csvData.split(',')


readMap();

function readMap() {
    var document = app.open(AiFile);

    document.activeLayer = document.layers.getByName('map');
    var mapLayer = document.activeLayer;
    var items = mapLayer.groupItems;

    for(var i = 0; i < 1; i++){
        
        for (var j = 0; j < csvArr.length-1; j++) {
            if (items[i].name === csvArr[j]) {
                var groupItemName = items[i].name
                items[i].name.replace(groupItemName, csvArr[j+1])
            }
        } 
    };

    return;
};




        // var itemLayer = items[i].pageItems
        // var itemPosition = itemLayer[0].position
        // stations.push(groupItemName);
        // stations.push(itemPosition);