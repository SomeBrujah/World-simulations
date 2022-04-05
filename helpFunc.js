export default function getRandomEyeColor(){
    let someColors = ['brown', 'blue', 'green', 'grey', 'hazel'];
    return someColors[Math.floor(Math.random()*(someColors.length))];
}
