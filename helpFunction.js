const WOMAN_NAMES = ['Maria', 'Jessy', 'Moira', 'Ann', 'Dafni', 'Rose'];
const MAN_NAMES = ['James', 'Joshua', 'Jack', 'Mat', 'Tom', 'Max'];
const EYE_COLORS = ['brown', 'blue', 'green', 'gray', 'hazel'];

function getRandomEyeColor(colors) {
    return colors[Math.floor(Math.random() * (colors.length))];
}

function getRandomManName(manNames) {
    return manNames[Math.floor(Math.random() * (manNames.length))];
}

function getRandomWomanName(womanNames) {
    return womanNames[Math.floor(Math.random() * (womanNames.length))];
}

function defineChildEyeColor(man, woman, baseEyeColors) {
    let chance = Math.floor(Math.random() * 11);
    switch (true) {
        case (chance < 5):
            return man.eyeColor;
        case (chance > 4 && chance < 9):
            return woman.eyeColor;
        case (chance > 8):
            let otherColors = baseEyeColors.filter((color) => {
                return (color != man.eyeColor && color != woman.eyeColor)
            })
            return otherColors[Math.floor(Math.random() * otherColors.length)]
    }
}

function getRandomGender() {
    let tossCoin = Math.floor(Math.random() * 2);
    if (tossCoin === 1) {
        return 'male';
    } else {
        return 'female';
    }
}

module.exports = {
    WOMAN_NAMES,
    MAN_NAMES,
    EYE_COLORS,
    getRandomEyeColor,
    getRandomManName,
    getRandomWomanName,
    defineChildEyeColor,
    getRandomGender
}