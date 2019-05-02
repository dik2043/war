var weaponsObj = {};        /* пустой объект всех орудий для дальнейшей работы */
weaponsObj.medium = {};     /* пустой объект средних орудий для дальнейшей работы */
weaponsObj.light = {};      /* пустой объект легких орудий для дальнейшей работы */

var mediumWeaponsArr = window.medium.weapons.split('/%');     /* массив всех средних орудий */
var lightWeaponsArr = window.light.weapons.split('/%');

var accuracyGust = {
    '100': 100,
    '150': 90,
    '200': 63,
    '250': 46,
    '300': 31,
    '350': 21,
    '400': 17,
    '450': 10,
    '500': 4
};
var accuracyStorm = {
    50: 100,
    100: 80,
    150: 57,
    200: 34,
    250: 19,
    300: 9,
    350: 8,
    400: 8,
    450: 7,
    500: 3
};
var accuracyThunder = {
    50: 100,
    100: 85,
    150: 48,
    200: 27,
    250: 15,
    300: 9,
    350: 11,
    400: 8,
    450: 8,
    500: 4
};
var accuracyShredder = {
    50: 100,
    100: 100,
    150: 100,
    200: 94,
    250: 88,
    300: 69,
    350: 49,
    400: 29,
    450: 24,
    500: 19
};
var accuracyCorona = {
    50: 100,
    100: 74,
    150: 47,
    200: 39,
    250: 30,
    300: 27,
    350: 21,
    400: 20,
    450: 16,
    500: 7
};
var accuracySpark = {
    50: 237,
    100: 222,
    150: 183,
    200: 171,
    250: 160,
    300: 134,
    350: 111,
    400: 100,
    450: 77,
    500: 60,
    550: 50,
    600: 23
};
var accuracyPulsar = {
    500: 100,
    550: 91,
    600: 87
};
var accuracyScourge = {
    50: 237,
    100: 222,
    150: 183,
    200: 171,
    250: 160,
    300: 134,
    350: 111,
    400: 100,
    450: 77,
    500: 60,
    550: 50,
    600: 23
};
var accuracyPunisher = {
    200: 100,
    250: 90,
    300: 66,
    350: 51,
    400: 34,
    450: 33,
    500: 25
};
var accuracyMolot = {
    300: 100,
    400: 91,
    500: 68,
    600: 50,
    700: 44,
    800: 24
};


/* как получить количество минут из формата "*d *h *m" */
var getNumberFromTime = function (elem) {
    var timeD = elem.split('d')[0];
    var timeH = elem.split('d')[1].split('h')[0];
    var timeM = elem.split('d')[1].split('h')[1].split('m')[0];
    return (timeD * 24 * 60) + (timeH * 60) + +timeM;    /* + для перевода в число */
};


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
/* как добавлять mk1 уровни в оружие, у которого первый уровень - "3" (скорее всего только для ecu) */
var createLvlsMk1Lesser = function (obj, forMk, count) {
    obj.mk1['lvl' + (count + 3)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18],
        durabilityRegeneration: forMk[count].split(';')[20]
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
/* как добавлять mk2 уровни в оружие, у которого первый уровень - "3" (скорее всего только для ecu) */
var createLvlsMk2Lesser = function (obj, forMk, count) {
    obj.mk2['lvl' + (count - 9)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18],
        durabilityRegeneration: Number(forMk[count].split(';')[20])
    }
};


/* как создать объекты в объекте средних орудий */
var createMediumWeaponObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива оружий */
    /* имя объекта = берем массив всех оружий, делим строки по ';;' и берем первую фразу - название оружия */
    weaponsObj.medium[name] = {};
    
    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
     * третий - одна строчка со всеми свойствами */
    createObjProperties(weaponsObj.medium[name], arr[count].split('/')[0].split(';'), arr[count].split('/'));
};

/* как создать объекты в объекте легких орудий */
var createLightWeaponObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива оружий */
    /* имя объекта = берем массив всех оружий, делим строки по ';;' и берем первую фразу - название оружия */
    weaponsObj.light[name] = {};

    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
     * третий - одна строчка со всеми свойствами */
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
    obj.unloadBurst = Number(str[11]);
    obj.unloadClip = Number(str[21]);
    obj.reload = Number(str[12]);
    obj.reloadRound = Number(str[20]);
    obj.chargeUp = Number(str[19]);
    obj.damageToPhysical = +str[13].toLowerCase();
    obj.spreading = Number(str[22]);
    obj.mk1 = {};
    obj.mk2 = {};
    if (forMk.length === 24) {      
        for (var i = 0; i < (forMk.length) / 2; i++) {
            createLvlsMk1Full(obj, forMk, i);
        }
        for (var i = 12; i < (forMk.length); i++) {
            createLvlsMk2Full(obj, forMk, i);
        }
    } else if (forMk.length === 20) {
        for (var i = 0; i < 8; i++) {
            createLvlsMk1Less(obj, forMk, i);
        }
        for (var i = 8; i < 20; i++) {
            createLvlsMk2Less(obj, forMk, i);
        }
    } else {
        for (var i = 0; i < 10; i++) {
            createLvlsMk1Lesser(obj, forMk, i);
        }
        for (var i = 10; i < 22; i++) {
            createLvlsMk2Lesser(obj, forMk, i);
        }
    }
};


/* создаем объект средних орудий по массиву с оружием */
for (var i = 0; i < mediumWeaponsArr.length; i++) {
    createMediumWeaponObj(mediumWeaponsArr, i);
}
/* создаем объект легких орудий по массиву с оружием */
for (var i = 0; i < lightWeaponsArr.length; i++) {
    createLightWeaponObj(lightWeaponsArr, i);
}

console.log(window.light.weapons.split('/%')[8].split('/')[0].split(';'));

console.log(weaponsObj);
console.log(weaponsObj.medium.pulsar);

