projectPath = arguments[0];
csvData = arguments[1];

var AiFile = File(projectPath + "/Aifile/map.ai");
var csvArr = [];
    alert(csvData)
csvArr = csvData.split(',')
    alert(csvArr)
csvArr.push(csvData); 


readMap();

function readMap() {
    var document = app.open(AiFile);

    document.activeLayer = document.layers.getByName('map');
    var mapLayer = document.activeLayer;
    var items = mapLayer.groupItems;


    // for(var i = 0; i < 1; i++){

    //     for (var j = 0; j < csvArr.length; j++) {
    //         if (items[i].name === csvArr[j]) {

    //             items[i].name = csvArr[j];
    //             alert(items[i].name)
    //         }else { 
    //             alert(csvArr[j]) 
    //         }
    //     } 
    // };

    // return;
};




        // var itemLayer = items[i].pageItems
        // var itemPosition = itemLayer[0].position
        // stations.push(groupItemName);
        // stations.push(itemPosition);