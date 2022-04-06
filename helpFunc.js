export default function getRandomEyeColor(){
    let someColors = ['brown', 'blue', 'green', 'grey', 'hazel'];
    return someColors[Math.floor(Math.random()*(someColors.length))];
}

function getRandomManName(){
    const names = ['James', 'Joshua', 'Jack', 'Mat', 'Tom', 'Max'];
    return names[Math.floor(Math.random()*(names.length))];
}

function getRandomWomanName(){
    const names = ['Maria', 'Jessy', 'Moira', 'Ann', 'Dafni', 'Rose'];
    return names[Math.floor(Math.random()*(names.length))];
}