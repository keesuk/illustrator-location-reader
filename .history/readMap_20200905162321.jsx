if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      var o = Object(this);
      var len = o.length >>> 0;
      if (len === 0) {
        return false;
      }
      var n = fromIndex | 0;
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }
      while (k < len) {
        if (sameValueZero(o[k], searchElement)) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

Object.createGetSetProperty = function (object, property, get, set, enumerable, configurable) {
    if (!Object.defineProperty) throw new Error("Object.defineProperty is not supported on this platform");
    Object.defineProperty(object, property, {
        get: get,
        set: set,
        enumerable: enumerable || true,
        configurable: configurable || false
    });
};

Object.createValueProperty = function (object, property, value, enumerable, configurable, writable) {
    if (!Object.defineProperty) {
        object[property] = value;
    } else {
        Object.defineProperty(object, property, {
            value: value,
            enumerable: enumerable || true,
            configurable: configurable || false,
            writable: writable || false
        });
    }
};


projectPath = arguments[0];
csvData = arguments[1];

var AiFile = File(projectPath + "/Aifile/map.ai");
var csvArr = [];
csvArr = csvData.split(',')
csvArr.push(csvData); 


readMap();

function readMap() {
    var document = app.open(AiFile);

    document.activeLayer = document.layers.getByName('map');
    var mapLayer = document.activeLayer;
    var items = mapLayer.groupItems;

    for(var i = 0; i<2; i++){
        var groupItemName = items[i].name;
        var hi = csvArr.prototype.includes(groupItemName);
        alert(hi);
        // var itemLayer = items[i].pageItems
        // var itemPosition = itemLayer[0].position
        // stations.push(groupItemName);
        // stations.push(itemPosition);
    }

    return stations;
};

