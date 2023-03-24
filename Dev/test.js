const Blockchain = require('./blockchain');

const bitcoin  = new Blockchain();

bitcoin.createNewBlock(2389, 'DOEOJJEJJ33IJI4K', 'H43DHUH444U3RFFE');
bitcoin.createNewBlock(232, 'DOEOJJERII3IJI4K', 'HERIJJEDJJD39RFFE');
bitcoin.createNewBlock(3829, 'FJJRJIJFR4J33IJI4K', '34UDJRIDD4U3RFFE');

var testLast = bitcoin.getLastBlock();

console.log(bitcoin);
console.log(testLast);