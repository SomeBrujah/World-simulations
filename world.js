export default class World {
    constructor(populate) {
        this.populate = populate;
        this.getStatistic();
    }

    getStatistic(){
        setInterval(()=>{
            console.log(this.populate);
        }, 5000)
    }
}

