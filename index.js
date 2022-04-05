import Man from "./man.js";
import Woman from "./woman.js";
import World from "./world.js";

const world = new World([new Man('Adam'), new Woman('Eva')]);

console.log(world.populate);