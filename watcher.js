const fs = require('fs'),
fs.watch('target.txt', function(){
	fs.readFile('target.txt', function(err, data){
	  if (err){
	   throw err;
		}
	})
	console.log(data.toString());
});

console.log("Now watching for changes in target.txt");
