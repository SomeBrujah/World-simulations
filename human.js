export default class Human {
    constructor() {
        this.age = 1;
        this.lifeDuration = 100 - Math.floor(Math.random() * 30);
    }

    live() {
        let life = setInterval(() => {
            this.age++;
            if(this.age === this.lifeDuration) {
                console.log(`${this.name} went to heaven...`)
                clearInterval(life);
            }
            console.log(this.age);
            let randomAction = this.kindOfActions[Math.floor(Math.random() * (this.kindOfActions.length))];

            switch (randomAction) {
                case 'find woman':
                    console.log(`${this.name} wants love.`);
                    break;

                case 'mans talk':
                    console.log(`${this.name} say about manly themes.`);
                    break;

                case 'hunting':
                    console.log(`${this.name} went hunting.`);
                    break;

                case 'reproduce':
                    console.log(`${this.name} want a child.`);
                    // this.reproduce(this.findMan())
                    break;

                case 'little talk':
                    console.log(`${this.name} talks about women's topics.`);
                    break;

                case 'have some ladyes fun':
                    console.log(`${this.name} is having fun.`);
                    break;

                default:
                    break;
            }
        }, 200);
        
    }


}