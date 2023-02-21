const moduleB = require('./secondmodule');
const fs = require('fs');

function onemodule() {
  console.log('One module is calling another Module ');
  moduleB();
  
 
}

module.exports = onemodule;