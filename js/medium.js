var weaponsObj = {};        /* пустой объект для дальнейшей работы */
weaponsObj.medium = {};
weaponsObj.light = {};

var mediumWeaponsArr = window.medium.weapons.split('/%');     /* массив всех средних орудий */
var lightWeaponsArr = window.light.weapons.split('/%');
// var blabla = weaponsArr[2].split('/');
// var time = "7d 4h 4m";


var getNumberFromTime = function (elem) {
    var timeD = elem.split('d')[0];
    var timeH = elem.split('d')[1].split('h')[0];
    var timeM = elem.split('d')[1].split('h')[1].split('m')[0];
    return (timeD * 24 * 60) + (timeH * 60) + +timeM;    /* + для перевода в число */
};

// console.log(getNumberFromTime(time));

/* как добавлять mk1 уровни в оружие, у которого первый уровень - "1" */
var createLvlsMk1Full = function (obj, forMk, count) {
    obj.mk1['lvl' + (count + 1)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18]
    }
};

/* как добавлять mk1 уровни в оружие, у которого первый уровень - "5" */
var createLvlsMk1Less = function (obj, forMk, count) {
     obj.mk1['lvl' + (count + 5)] = {
         damage: Number(forMk[count].split(';')[8]),
         upgradeCost: Number(forMk[count].split(';')[14]),
         upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
         sellingPrice: Number(forMk[count].split(';')[15]),
         effectPower: Number(forMk[count].split(';')[17]),
         effectDuration: forMk[count].split(';')[18]
    }
};

/* как добавлять mk2 уровни в оружие, у которого первый уровень - "1" */
var createLvlsMk2Full = function (obj, forMk, count) {
    obj.mk2['lvl' + (count - 11)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18]
    }
};

/* как добавлять mk2 уровни в оружие, у которого первый уровень - "5" */
var createLvlsMk2Less = function (obj, forMk, count) {
    obj.mk2['lvl' + (count - 7)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18]
    }
};


/* как создать объекты в объекте средних орудий */
var createMediumWeaponObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива оружий */
    /* имя объекта = берем массив всех оружий, делим строки по ';;' и берем первую фразу - название оружия */
    weaponsObj.medium[name] = {};
    
    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';' */
    createObjProperties(weaponsObj.medium[name], arr[count].split('/')[0].split(';'), arr[count].split('/'));
};

/* как создать объекты в объекте легких орудий */
var createLightWeaponObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива оружий */
    /* имя объекта = берем массив всех оружий, делим строки по ';;' и берем первую фразу - название оружия */
    weaponsObj.light[name] = {};

    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';' */
    createObjProperties(weaponsObj.light[name], arr[count].split('/')[0].split(';'), arr[count].split('/'));
};

/* как создать свойства в объекте, который в объекте :) */
var createObjProperties = function (obj, str, forMk) {  /* obj - куда вносим, str - откуда вносим */
    obj.name = str[0].toLowerCase();
    obj.slot = str[4].toLowerCase();
    obj.damageType = str[5].toLowerCase();
    obj.trajectory = str[6].toLowerCase();
    obj.range = Number(str[7]);
    obj.ammo = Number(str[9]);
    obj.fireRate = Number(str[10]);
    obj.unload = Number(str[11]);
    obj.reload = Number(str[12]);
    obj.damageToPhysical = +str[13].toLowerCase();
    obj.mk1 = {};
    obj.mk2 = {};
    if (forMk.length === 24) {      
        for (var i = 0; i < (forMk.length) / 2; i++) {
            createLvlsMk1Full(obj, forMk, i);
        }
        for (var i = 12; i < (forMk.length); i++) {
            createLvlsMk2Full(obj, forMk, i);
        }

    } else {
        for (var i = 0; i < 8; i++) {
            createLvlsMk1Less(obj, forMk, i);
        }
        for (var i = 8; i < 20; i++) {
            createLvlsMk2Less(obj, forMk, i);
        }
    }
};


/* создаем все объекты по массиву с оружием */
for (var i = 0; i < mediumWeaponsArr.length; i++) {
    createMediumWeaponObj(mediumWeaponsArr, i);
}

for (var i = 0; i < lightWeaponsArr.length; i++) {
    createLightWeaponObj(lightWeaponsArr, i);
}

console.log(weaponsObj.medium.vortex);
console.log((weaponsObj.medium.vortex.mk1.lvl11.upgradeCost) * 4);
