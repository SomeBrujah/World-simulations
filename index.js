const { World } = require('./world');
const { Man } = require('./man');
const { Woman } = require('./woman');

const world = new World([new Man('Adam'), new Woman('Eva')]);

setInterval(() => {
    console.table(world.getStatistic());
}, 2000)