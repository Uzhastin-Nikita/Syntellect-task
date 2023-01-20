// Черепашке нужно забраться на вершину холма. 
// Расстояние от подножия холма до его вершины - 100м.
// Черепашка за день залезает вверх по холму на 50м.
// Ночью она спит и скатывается на 30м вниз.
// На какие сутки черепашка залезет на столб?
// Требуется написать код на JS для решения задачи и дать ответ

const ANIMAL_SLEEP    = 30;
const ANIMAL_CLIMB    = 50;
const MAX_HILL_HEIGHT = 100;

const animalWay = (maxHillHeight, animalClimb, animalSleep) => {
    let resultDays   = 0;
    let height       = 0;

    if ( maxHillHeight <  0 || animalClimb < 0 || animalSleep < 0 ) {
        return null;
    }

    while ( height < maxHillHeight ) {
        height += animalClimb;
        resultDays++;

        if ( height < maxHillHeight ) {
        height -= animalSleep;
        };
    };

    return resultDays;
};

console.log(animalWay(MAX_HILL_HEIGHT, ANIMAL_CLIMB, ANIMAL_SLEEP)); // 4
