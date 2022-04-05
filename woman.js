import Human from "./human.js";
import Man from "./man.js";

export default class Woman extends Human {
    constructor(name, eyeColor){
        super();
        this.name = name;
        this.eyeColor = eyeColor;
        this.kindOfActions = ['reproduce', 'little talk', 'have some ladyes fun']
    }

    findMan(population){
        let person = null;
        do {
            person = population[Math.floor(Math.random() * population.length - 1)]
        } while (person.age < 18 && person instanceof Man);
        return person;
    }

    reproduce(searchMan){

        console.log(searchMan);
    }
}