
function wStorage(options){  
    this.storage; 

    if(options.storage === 'session')
        this.storage  = window.sessionStorage;
    else{
        this.storage  = window.localStorage;
    }
}

wStorage.prototype.destroy = function(){
    this.storage.clear();
}

// Return true is support
wStorage.prototype.support = function(){
    return ('localStorage' in window && window['localStorage'] !== null);
}   

// find data from key
wStorage.prototype.find = function(key,callback){
    var $    = this;
    var data = {} ;

    try{
        data = JSON.parse($.storage[key]);
        if(typeof callback === 'function')
            callback(data);
    }catch(e){
        callback($.storage[key]);
    }

    return $;
}

// find all
wStorage.prototype.find_all = function(callback){
    var $ = this;

    if(typeof callback === 'function'){
        for (var key in $.storage) {
            $.find(key,function (data) {
                callback(key,data);
            })
        };
    }

    return $;
}

// data add
// string, object, array

wStorage.prototype.add = function(key,data){
    var $ = this;
    try{
        if(typeof data === 'string'){
            $.storage.setItem(key,data); 
        }else{
            // obj or array
            $.storage.setItem(key,JSON.stringify(data)); 
        }
    }catch(e){
        return false;
    }
    return $;
}

// Delete data

wStorage.prototype.del = function(key,callback){
    
    delete this.storage[key]; 
    return this;
}

//  wStorage.prototype.changeEvent = function(callback){

//     if(typeof callback === 'function'){
//         if (window.addEventListener) {
//             window.addEventListener('storage', function(event) {
//                 callback(event);
//             }, false);
//         }else{
//             window.attachEvent("onstorage", function(event) {
//                 callback(event);
//             }, false);
//         }            
//     }
//     return this;
// }