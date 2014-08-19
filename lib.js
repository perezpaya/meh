String.prototype.format = function() {
	
	var formatted = this;

    if(typeof arguments[0] == 'object'){
    	var object = arguments[0];
    	for (key in object){
    		var regexp = new RegExp('\\{'+key+'\\}', 'gi');
	        formatted = formatted.replace(regexp, object[key]);
    	}
    } else if (typeof arguments[0] == 'array'){

        var arr = arguments[0];

        for (var i = 0; i < arr.length; i++) {
            var regexp = new RegExp('\\{'+i+'\\}', 'gi');
            formatted = formatted.replace(regexp, arr[i]);
        }

    } else{
	    for (var i = 0; i < arguments.length; i++) {
	        var regexp = new RegExp('\\{'+i+'\\}', 'gi');
	        formatted = formatted.replace(regexp, arguments[i]);
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
}