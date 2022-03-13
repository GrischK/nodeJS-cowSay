const information = require('./information');
const infoUser = require('./information');
const cowsay = require('cowsay');

// console.log(`Hello, I'm ${information.nom} from ${information.campus} campus.`);

console.log(cowsay.say({
    text : `Hello, I'm ${information.nom} from ${information.campus} campus.`,
    e : "oO",
    T : "U "
}));