wStorage
=====================

 It's easy and simple to access WebStorage data.

# API


If WebStorage support that will return ture
    wStorage.support()  

* Find data by key
wStorage.prototype.find(key,callback)

* Find all data 
wStorage.prototype.find_all(callback)

* Add data by key
wStorage.prototype.add(key,data)

* Delete data by key
wStorage.del(key)

* Clear all data 
wStorage.destroy()

# Example


	var options = {
		storage : 'local', // choice session or local storage
	};


	var data_array = Array();
	var data_array1 = Array();
	data_array[0] = 1;
	data_array[1] = 'a';

	var ws = new wStorage(options);


	// insert data
	if(ws.support()){

	    ws.add('ws',"my"); // add string
	    ws.add('data_array',data_array); // add array
	    ws.add('obj',ws); // add object
	    ws.add(11,12);

	    // find data

	     ws.find('ws',function(data){
	         console.log(data);
	     })

	     ws.find('data_array',function(data){
	         data_array1 = data;
	         console.log(data_array1);
	     })

	     ws.find('obj',function(data){
	         ws1 = data;
	         console.log(ws1);
	     })

	     ws.del('obj').find('obj',function(data){
	         console.log(data);
	     })

	     ws.find_all(function(key,data){
	         console.log("find all from storage");
	         console.log(key+":"+data);
	         console.log(typeof key);
	     });

	    // ws.changeEvent(function (event) {
	    //     console.log(event);
	    // })

	}

# Blog
http://hamisme.blogspot.tw/

# License

Copyright (c) 2012 Tsai Ming-Hsien

Released under the MIT license. See `LICENSE` for details.
