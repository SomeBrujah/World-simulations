import getRandomEyeColor from "./helpFunc.js";

export default class Human{
    constructor() {
        this.age = 0;
        this.lifeDuration = 100 - Math.floor(Math.random() * 20);
        this.eyeColor = getRandomEyeColor();
    }
}