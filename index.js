import Man from "./man.js";
import Woman from "./woman.js";
import World from "./world.js";

const world = new World([new Man('Adam'), new Woman('Eva')]);
world.populate[0].world = world;
world.populate[1].world = world;
// console.log(world.populate[0].world.populate);