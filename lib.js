String.prototype.format = function() {

	var formatted = this;
	var exp, i;
  if(typeof arguments[0] == 'object'){
  	var object = arguments[0];
  	for (var key in object){
  		exp = new RegExp('\\{'+key+'\\}', 'gi');
      formatted = formatted.replace(exp, object[key]);
  	}
  } else if (arguments[0] instanceof Array){

      var arr = arguments[0];

      for (i = 0; i < arr.length; i++) {
          exp = new RegExp('\\{'+i+'\\}', 'gi');
          formatted = formatted.replace(exp, arr[i]);
      }

  } else{
    for (i = 0; i < arguments.length; i++) {
        exp = new RegExp('\\{'+i+'\\}', 'gi');
        formatted = formatted.replace(exp, arguments[i]);
    }
  }

  return formatted;

};

Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array || !(array instanceof Array))
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};

Array.prototype.map = function (mapCallback, endCallback){

	endCallback = (typeof endCallback == 'function') ? endCallback : function (){};

	for (var i = 0; i < this.length; i++){
		mapCallback(this[i]);
	}

};
