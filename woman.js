import Human from "./human.js";
import Man from "./man.js";

function getRandomManName(){
    const names = ['James', 'Joshua', 'Jack', 'Mat', 'Tom', 'Max'];
    return names[Math.floor(Math.random()*(names.length))];
}
function getRandomWomanName(){
    const names = ['Maria', 'Jessy', 'Moira', 'Ann', 'Dafni', 'Rose'];
    return names[Math.floor(Math.random()*(names.length))];
}
export default class Woman extends Human {
    constructor(name, world) {
        super();
        this.name = name;
        this.world = world;
        this.live();
    }

    live() {
        const life = setInterval(() => {
            this.age++;
            // console.log(this);
            if (this.age === this.lifeDuration) {
                console.log(`${this.name} went to heaven...`)
                // console.log(this.populate);
                clearInterval(life);
            }
            if (this.age >= 18 && (((this.age - 18) % 5) === 0) && this.age < 50) {
                this.reproduce();
                // console.log(this.world);
            }
        }, 100)
    }
    reproduce() {
        let man = this.findMan();
        let gender = Math.floor(Math.random()*2);
        if(gender === 1) {
            this.world["populate"].push(
                new Man(
                    getRandomManName(),
                    this.world
                )
            );
        } else {
            this.world["populate"].push(
                new Woman(
                    getRandomWomanName(),
                    this.world
                )
            );
        }
        
    }
    findMan() {
        let person = null;
        do {
            person = this.world["populate"][Math.floor(Math.random() * this.world["populate"].length)]
        } while (person instanceof Man && person.age >= 18);
        return person;
    }
}