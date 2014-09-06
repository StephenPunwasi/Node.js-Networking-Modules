fs = require('fs');

fs.watch('target.txt', function(){
 console.log('the file was just changed!');
});
