import Human from "./human.js";
import Woman from "./woman.js";

export default class Man extends Human {
    constructor(name, eyeColor) {
        super();
        this.name = name;
        this.eyeColor = eyeColor;
        this.kindOfActions = ['find woman', 'mans talk', 'hunting']
    }

    findWoman(population) {
        let person = null;
        do {
            person = population[Math.floor(Math.random() * population.length - 1)]
        } while (person.age < 18 && person instanceof Woman);
        person.reproduce(this)
    }

}