const { EYE_COLORS } = require('./helpFunction');
const { getRandomEyeColor } = require('./helpFunction');

class Human {
    constructor() {
        this.age = 0;
        this.lifeDuration = 100 - Math.floor(Math.random() * 20);
        this.eyeColor = getRandomEyeColor(EYE_COLORS);
        this.hasALovingCouple = false;
    }
}

module.exports = {
    EYE_COLORS,
    getRandomEyeColor,
    Human
}