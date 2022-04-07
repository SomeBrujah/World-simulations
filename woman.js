const { Man } = require('./man');
const { WOMAN_NAMES, MAN_NAMES, EYE_COLORS, getRandomGender, getRandomManName, getRandomWomanName, defineChildEyeColor } = require('./helpFunction');
const { Human } = require('./human');

class Woman extends Human {
    constructor(name) {
        super();
        this.name = name;
        this.world = null;
        this.live();
        this.wasPregnantAge = null;
    }

    live() {
        const life = setInterval(() => {
            this.age++;
            if (this.age === this.lifeDuration) {
                this.world.anotherWorld.push(this);
                clearInterval(life);
                this.world.population.splice(this.world.population.indexOf(this), 1)
            }
            if (this.age >= 18 && this.age < 50) {
                if (this.wasPregnantAge !== null && this.age !== this.wasPregnantAge + 4) {
                    return;
                }
                this.reproduce();
            }
        }, 500)
    }

    reproduce() {
        let love = this.findMan();
        let gender = getRandomGender();
        if (gender === 'male') {
            let man = new Man(getRandomManName(MAN_NAMES));
            man.eyeColor = defineChildEyeColor(love, this, EYE_COLORS);
            this.world.addCreature(man);
        } else {
            let woman = new Woman(getRandomWomanName(WOMAN_NAMES));
            woman.eyeColor = defineChildEyeColor(love, this, EYE_COLORS);
            this.world.addCreature(woman);
        }
        this.wasPregnantAge = this.age;
    }

    findMan() {
        let mans = this.world.population.filter((person) => { return (person instanceof Man) });
        let man = mans[Math.floor(Math.random() * mans.length)]
        return man;
    }
}

module.exports = {
    Woman
}