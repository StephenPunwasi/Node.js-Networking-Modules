const fs = require('fs');

fs.writeFile('target.txt', 'I added this through node!', function(err){
 if(err){
  throw err;
  }
 console.log('File saved');
});
