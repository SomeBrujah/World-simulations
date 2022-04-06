class World {
    constructor(populate) {
        this.population = [];
        this.anotherWorld = [];
        this.inicializeFirstHumanInWorld(populate);
    }

    inicializeFirstHumanInWorld(peoples){
        for (let i = 0; i < peoples.length; i++) {
            this.addCreature(peoples[i]);
        }
    }

    addCreature(creature) {
        creature.world = this;
        this.population.push(creature);
    }

    getStatistic(){
        return this;
    }
}

module.exports = {
    'World':World
}