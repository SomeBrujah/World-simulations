const { Human } = require('./human');

class Man extends Human {
    constructor(name) {
        super();
        this.name = name;
        this.world = null;
        this.live();
    }

    live() {
        const life = setInterval(() => {
            this.age++;
            if (this.age === this.lifeDuration) {
                this.world.anotherWorld.push(this);
                clearInterval(life);
                this.world.population.splice(this.world.population.indexOf(this), 1)
            }
        }, 500)
    }
}

module.exports = {
    Man
}