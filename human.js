const helpFunctions = require('./helpFunction')
const EYE_COLORS = helpFunctions.EYE_COLORS;
const getRandomEyeColor = helpFunctions.getRandomEyeColor;

class Human{
    constructor() {
        this.age = 0;
        this.lifeDuration = 100 - Math.floor(Math.random() * 20);
        this.eyeColor = getRandomEyeColor(EYE_COLORS);
        this.hasALovingCouple = false;
    }
}

module.exports = {
    'EYE_COLORS': EYE_COLORS,
    'getRandomEyeColor': getRandomEyeColor,
    'Human' : Human
}