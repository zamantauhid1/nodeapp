var modules = require('./modules.js');

console.log(modules.messenger.addMessage())
console.log(modules.calculator.add(3,7))
console.log(modules.messenger.addMessage())
console.log(modules.calculator.subtract(7,3))
console.log(modules.messenger.addMessage())
console.log(modules.calculator.multiply(3,7))
console.log(modules.messenger.addMessage())
console.log(modules.calculator.divide(9,3))