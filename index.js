const WorldJs = require('./world');
const ManJs = require('./man');
const WomanJs = require('./woman');
const World = WorldJs.World;
const Man = ManJs.Man;
const Woman = WomanJs.Woman;

const world = new World([new Man('Adam'), new Woman('Eva')]);

setInterval(() => {
    console.group("Статистика:")
    console.log(`Население на данный момент: ${world.getStatistic().population.length}`);
    console.log(`Отправились в иной мир: ${world.getStatistic().anotherWorld.length}`);
    console.log(`Количество женщин: ${world.getStatistic().population.filter((person) => { return person instanceof Woman }).length}`);
    console.log(`Количество мужчин: ${world.getStatistic().population.filter((person) => { return person instanceof Man }).length}`);
    console.log(`Количество людей с карими глазами: ${world.getStatistic().population.filter((person) => { return (person.eyeColor === 'brown') }).length}`);
    console.log(`Количество людей с голубыми глазами: ${world.getStatistic().population.filter((person) => { return (person.eyeColor === 'blue') }).length}`);
    console.log(`Количество людей с зелёными глазами: ${world.getStatistic().population.filter((person) => { return (person.eyeColor === 'green') }).length}`);
    console.log(`Количество людей с серыми глазами: ${world.getStatistic().population.filter((person) => { return (person.eyeColor === 'grey') }).length}`);
    console.log(`Количество людей с желто-зелеными глазами: ${world.getStatistic().population.filter((person) => { return (person.eyeColor === 'hazel') }).length}\n`);
    console.groupEnd();
}, 2000)