const { Man } = require("./man");
const { Woman } = require("./woman");

class World {
    constructor(populate) {
        this.population = [];
        this.anotherWorld = [];
        this.inicializeFirstHumanInWorld(populate);
    }

    inicializeFirstHumanInWorld(peoples) {
        for (let i = 0; i < peoples.length; i++) {
            this.addCreature(peoples[i]);
        }
    }

    addCreature(creature) {
        creature.world = this;
        this.population.push(creature);
    }

    getStatistic() {
        const stat = {
            population: this.population.length,
            inAnotherWorld: this.anotherWorld.length,
            women: this.population.filter((person) => { return person instanceof Woman }).length,
            men: this.population.filter((person) => { return person instanceof Man }).length,
            brown: this.population.filter((person) => { return person.eyeColor === 'brown' }).length,
            green: this.population.filter((person) => { return person.eyeColor === 'green' }).length,
            grey: this.population.filter((person) => { return person.eyeColor === 'grey' }).length,
            blue: this.population.filter((person) => { return person.eyeColor === 'blue' }).length,
            hazel: this.population.filter((person) => { return person.eyeColor === 'hazel' }).length,
        }
        return stat;
    }
}

module.exports = {
    World
}