import Human from "./human.js";

export default class Man extends Human {
    constructor(name, world){
        super();
        this.name = name;
        this.world = world;
        this.live();
    }

    live(){
        const life = setInterval(()=>{
            this.age++;
            // console.log(this);
            if(this.age === this.lifeDuration) {
                console.log(`${this.name} went to heaven...`)
                // console.log(this.populate);
                clearInterval(life);
            }
        }, 100)
    }
}