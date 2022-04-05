import Man from "./man.js";
import Woman from "./woman.js";
import World from "./world.js";

const world = new World([new Man('Adam', 'brown'), new Woman('Eva', 'green')]);

for(let i = 0; i < world.populate.length; i++){
    world.populate[i].live();
}