var weaponsObj = {};        /* пустой объект всех орудий для дальнейшей работы */
weaponsObj.medium = {};     /* пустой объект средних орудий для дальнейшей работы */
weaponsObj.light = {};      /* пустой объект легких орудий для дальнейшей работы */
weaponsObj.heavy = {};      /* пустой объект легких орудий для дальнейшей работы */

var robotsObj = {};         /* пустой объект всех орудий для дальнейшей работы */
robotsObj.robotsAF = {};          /* пустой объект всех орудий для дальнейшей работы */


var afRobotsArr = window.robots.aF.split('//%');              /* массив всех роботов с A по F */

var heavyWeaponsArr = window.heavy.weapons.split('/%');       /* массив всех тяжелых орудий */
var mediumWeaponsArr = window.medium.weapons.split('/%');     /* массив всех средних орудий */
var lightWeaponsArr = window.light.weapons.split('/%');       /* массив всех легких орудий */



var accuracyGust = {
    100: 100,
    150: 90,
    200: 63,
    250: 46,
    300: 31,
    350: 21,
    400: 17,
    450: 10,
    500: 4
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
var accuracyTempest = {
    200: 100,
    300: 96,
    400: 77,
    500: 63,
    600: 50,
    700: 36,
    800: 34
};
var accuracyAvenger = {
    50: 100,
    100: 91,
    150: 78,
    200: 69,
    250: 61,
    300: 57,
    350: 39,
    400: 34,
    450: 27,
    500: 19
};
var accuracyGlory = {
    50: 100,
    100: 60,
    150: 38,
    200: 33,
    250: 24,
    300: 20,
    350: 18,
    400: 13,
    450: 9,
    500: 6
};
var accuracyViper = {
    300: 100,
    350: 99,
    400: 94,
    450: 85,
    500: 64
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
/* как добавлять mk1 уровни в не-оружие, у которого первый уровень - "3" (скорее всего только для ecu/ancile) */
var createLvlsMk1NotWeapon = function (obj, forMk, count) {
    obj.mk1['lvl' + (count + 3)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        // effectPower: Number(forMk[count].split(';')[17]),
        // effectDuration: forMk[count].split(';')[18],
        durability: forMk[count].split(';')[18],
        regenerationSpeed: Number(forMk[count].split(';')[19]),
        reactivation: Number(forMk[count].split(';')[20])
    }
};
/* как добавлять mk2 уровни в оружие, у которого первый уровень - "3" (скорее всего только для nashorn) */
var createLvlsMk1Lesser = function (obj, forMk, count) {
    obj.mk1['lvl' + (count + 3)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18],
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
/* как добавлять mk2 уровни в не-оружие, у которого первый уровень - "3" (скорее всего только для ecu/ancile) */
var createLvlsMk2NotWeapon = function (obj, forMk, count) {
    obj.mk2['lvl' + (count - 9)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        // effectPower: Number(forMk[count].split(';')[17]),
        // effectDuration: forMk[count].split(';')[18],
        durabilityRegeneration: Number(forMk[count].split(';')[18]),
        regenerationSpeed: Number(forMk[count].split(';')[19]),
        reactivation: Number(forMk[count].split(';')[20])
    }
};
/* как добавлять mk2 уровни в оружие, у которого первый уровень - "3" (скорее всего только для nashorn) */
var createLvlsMk2Lesser = function (obj, forMk, count) {
    obj.mk2['lvl' + (count - 9)] = {
        damage: Number(forMk[count].split(';')[8]),
        upgradeCost: Number(forMk[count].split(';')[14]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[16].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[15]),
        effectPower: Number(forMk[count].split(';')[17]),
        effectDuration: forMk[count].split(';')[18]
    }
};



/* как создать объекты в объекте тяжелых орудий */
var createHeavyWeaponObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива оружий */
    /* имя объекта = берем массив всех оружий, делим строки по ';;' и берем первую фразу - название оружия */
    weaponsObj.heavy[name] = {};

    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
     * третий - одна строчка со всеми свойствами */
    createObjProperties(weaponsObj.heavy[name], arr[count].split('/')[0].split(';'), arr[count].split('/'));
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
    } else if (!(forMk[0].split(';')[8])) {
        for (var i = 0; i < 10; i++) {
            createLvlsMk1NotWeapon(obj, forMk, i);
        }
        for (var i = 10; i < 22; i++) {
            createLvlsMk2NotWeapon(obj, forMk, i);
        }
        obj.reloadRound = 0;
    } else {
        for (var i = 0; i < 10; i++) {
            createLvlsMk1Lesser(obj, forMk, i);
        }
        for (var i = 10; i < 22; i++) {
            createLvlsMk2Lesser(obj, forMk, i);
        }
    }
};


//  -------------------------------------------------------------------------------------------------
/* как добавлять уровни в роботов (у всех порядок свойств должен быть одинаков, функция одна на всех) */
var createRobotsLvls = function (obj, forMk, count, step, mk) {
    obj['mk'+ mk]['lvl' + (count + step)] = {
        hp: Number(forMk[count].split(';')[4]),
        speed: Number(forMk[count].split(';')[6]),
        speedAccelerated: Number(forMk[count].split(';')[7]),
        durabilityPhysicalShield: Number(forMk[count].split(';')[9]),
        durabilityEnergyShield: Number(forMk[count].split(';')[10]),
        regenerationShield: Number(forMk[count].split(';')[11]),
        threshold: Number(forMk[count].split(';')[12]),
        damageAbility: Number(forMk[count].split(';')[16]),
        upgrateCost: Number(forMk[count].split(';')[19]),
        upgradeTime: getNumberFromTime(forMk[count].split(';')[21].toLowerCase()),
        sellingPrice: Number(forMk[count].split(';')[22])
    }
};


// /* как добавлять mk1 уровни в роботов, у которого первый уровень - "1" */
// var createRobotsLvlsMk1Full = function (obj, forMk, count) {
//     obj.mk1['lvl' + (count + 1)] = {
//         hp: Number(forMk[count].split(';')[4]),
//         speed: Number(forMk[count].split(';')[6]),
//         speedAccelerated: Number(forMk[count].split(';')[7]),
//         durabilityPhysicalShield: Number(forMk[count].split(';')[9]),
//         durabilityEnergyShield: Number(forMk[count].split(';')[10]),
//         regenerationShield: Number(forMk[count].split(';')[11]),
//         threshold: Number(forMk[count].split(';')[12]),
//         damageAbility: Number(forMk[count].split(';')[16]),
//         upgrateCost: Number(forMk[count].split(';')[19]),
//         upgradeTime: getNumberFromTime(forMk[count].split(';')[21].toLowerCase()),
//         sellingPrice: Number(forMk[count].split(';')[22])
//     }
// };
// /* как добавлять mk1 уровни в роботов, у которого первый уровень - "5" */
// var createRobotsLvlsMk1Less = function (obj, forMk, count) {
//     obj.mk1['lvl' + (count + 6)] = {
//         hp: Number(forMk[count].split(';')[4]),
//         speed: Number(forMk[count].split(';')[6]),
//         speedAccelerated: Number(forMk[count].split(';')[7]),
//         durabilityPhysicalShield: Number(forMk[count].split(';')[9]),
//         durabilityEnergyShield: Number(forMk[count].split(';')[10]),
//         regenerationShield: Number(forMk[count].split(';')[11]),
//         threshold: Number(forMk[count].split(';')[12]),
//         damageAbility: Number(forMk[count].split(';')[16]),
//         upgrateCost: Number(forMk[count].split(';')[19]),
//         upgradeTime: getNumberFromTime(forMk[count].split(';')[21].toLowerCase()),
//         sellingPrice: Number(forMk[count].split(';')[22])
//     }
// };
//
// /* как добавлять mk2 уровни в роботов, у которого первый уровень - "1" */
// var createRobotsLvlsMk2Full = function (obj, forMk, count) {
//     obj.mk2['lvl' + (count - 11)] = {
//         hp: Number(forMk[count].split(';')[4]),
//         speed: Number(forMk[count].split(';')[6]),
//         speedAccelerated: Number(forMk[count].split(';')[7]),
//         durabilityPhysicalShield: Number(forMk[count].split(';')[9]),
//         durabilityEnergyShield: Number(forMk[count].split(';')[10]),
//         regenerationShield: Number(forMk[count].split(';')[11]),
//         threshold: Number(forMk[count].split(';')[12]),
//         damageAbility: Number(forMk[count].split(';')[16]),
//         upgrateCost: Number(forMk[count].split(';')[19]),
//         upgradeTime: getNumberFromTime(forMk[count].split(';')[21].toLowerCase()),
//         sellingPrice: Number(forMk[count].split(';')[22])
//     }
// };
// /* как добавлять mk2 уровни в роботов, у которого первый уровень - "5" */
// var createRobotsLvlsMk2Less = function (obj, forMk, count) {
//     // console.log(getNumberFromTime(forMk[count].split(';')[21].toLowerCase()));
//     obj.mk2['lvl' + (count - 6)] = {
//         hp: Number(forMk[count].split(';')[4]),
//         speed: Number(forMk[count].split(';')[6]),
//         speedAccelerated: Number(forMk[count].split(';')[7]),
//         durabilityPhysicalShield: Number(forMk[count].split(';')[9]),
//         durabilityEnergyShield: Number(forMk[count].split(';')[10]),
//         regenerationShield: Number(forMk[count].split(';')[11]),
//         threshold: Number(forMk[count].split(';')[12]),
//         damageAbility: Number(forMk[count].split(';')[16]),
//         upgrateCost: Number(forMk[count].split(';')[19]),
//         upgradeTime: getNumberFromTime(forMk[count].split(';')[21].toLowerCase()),
//         sellingPrice: Number(forMk[count].split(';')[22])
//     }
// };


/* как создать объекты в объекте тяжелых орудий */
var createAFRobotsObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива роботов */
    /* имя объекта = берем массив всех роботов, делим строки по ';;' и берем первую фразу - название робота */
    robotsObj.robotsAF[name] = {};

    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
     * третий - одна строчка со всеми свойствами */
    createRobotsObjProperties(robotsObj.robotsAF[name], arr[count].split('//')[0].split(';'), arr[count].split('//'));
};


var createRobotsObjProperties = function (obj, str, forMk) {  /* obj - куда вносим, str - откуда вносим */
    obj.name = str[0].toLowerCase();
    obj.slots = str[5];
    obj.shields = str[8];
    obj.ability = str[13].toLowerCase();
    obj.abilityDuration = str[14];
    obj.abilityCooldown = str[15];
    obj.cost = str[23];
    obj.days = str[24];

    obj.mk1 = {};
    obj.mk2 = {};
    if (forMk.length === 24) {
        for (var i = 0; i < (forMk.length) / 2; i++) {
            createRobotsLvls(obj, forMk, i, 1, 1);
        }
        for (var i = 12; i < (forMk.length); i++) {
            createRobotsLvls(obj, forMk, i, (-11), 2);
        }
    } else if (forMk.length === 19) {
        for (var i = 0; i < 7; i++) {
            createRobotsLvls(obj, forMk, i, 6, 1);
        }
        for (var i = 7; i < 19; i++) {
            createRobotsLvls(obj, forMk, i, (-6), 2);
        }
    }
};




/* создаем объект тяжелых орудий по массиву с оружием */
for (var i = 0; i < heavyWeaponsArr.length; i++) {
    createHeavyWeaponObj(heavyWeaponsArr, i);
}
/* создаем объект средних орудий по массиву с оружием */
for (var i = 0; i < mediumWeaponsArr.length; i++) {
    createMediumWeaponObj(mediumWeaponsArr, i);
}
/* создаем объект легких орудий по массиву с оружием */
for (var i = 0; i < lightWeaponsArr.length; i++) {
    createLightWeaponObj(lightWeaponsArr, i);
}



/* создаем объект роботов A-F по массиву с роботами */
for (var i = 0; i < afRobotsArr.length; i++) {
    createAFRobotsObj(afRobotsArr, i);
}


console.log(weaponsObj);
console.log(robotsObj);



var weaponSelect = document.querySelector('.weapon-select');
var weaponMKSelect = document.querySelector('.weapon-mk-select');
var weaponLVLSelect = document.querySelector('.weapon-lvl-select');

var robotSelect = document.querySelector('.robots-select');
var robotMKSelect = document.querySelector('.robots-mk-select');
var robotLVLSelect = document.querySelector('.robots-lvl-select');

var result = document.querySelector('.result');
var confirm = document.querySelector('.confirm');

var calculateDestroyTime = function (robot, mkR, lvlR, weapon, mk, lvl, x) {
    var robotHP = robotsObj.robotsAF[robot]['mk' + mkR]['lvl' + lvlR].hp;
    
    var dps = (weaponsObj.medium[weapon]['mk' + mk]['lvl' + lvl].damage * weaponsObj.medium[weapon].ammo) / weaponsObj.medium[weapon].unloadBurst;
    console.log(dps);
    return robotHP / dps;
};

confirm.addEventListener('click', function (evt) {
    console.log(weaponSelect.value, weaponMKSelect.value, weaponLVLSelect.value);
    console.log(robotSelect.value, robotMKSelect.value, robotLVLSelect.value);
    result.textContent = calculateDestroyTime(robotSelect.value, robotMKSelect.value, robotLVLSelect.value, weaponSelect.value, weaponMKSelect.value, weaponLVLSelect.value);
});


/* массив имен роботов */
var robotsNamesArr = [];                        /* пустой массив имен */
var num = 0;                            /* счетчик для цикла, чтобы наполнить массив */
for (var key in robotsObj.robotsAF) {
    robotsNamesArr[num++] = key;
}

var robotsItem = document.querySelectorAll('.robots__item');
var robotAddArr = document.querySelectorAll('.robots__add');                  /* кнопка добавления робота */
var robotsSelect = document.querySelector('.robots__select');           /* форма выбора робота */
var robotsSelectWrapper = document.querySelector('.robots__select-wrapper');    /* все ооткрывающееся окно */
var similarSelectTemplate = document.querySelector('.robots__select-temlate')   /* темплейт одного радиобаттона */
    .content
    .querySelector('div');
var robotsSelectClose = document.querySelector('.robots__select-close');        /* кнопка закрытия окна роботов */
var robotComfirm = document.querySelector('.robots__select-confirm');           /* кнопка подтверждения робота */
var buttonId;

robotsSelectClose.addEventListener('click', function () {
    robotsSelectWrapper.classList.add('visually-hidden');
});
for (var i = 0; i < robotAddArr.length; i++) {
    robotAddArr[i].addEventListener('click', function (evt) {
        robotsSelectWrapper.classList.remove('visually-hidden');
        buttonId = evt.target.parentNode.id;
    });
}    


robotComfirm.addEventListener('click', function (evt) {
    var radioArr = robotsSelect.querySelectorAll('.robots__select-item');
    for (var i = 0; i < radioArr.length; i++) {
        if (robotsSelect[i].checked) {
            robotsSelectWrapper.classList.add('visually-hidden');
            robotsItem[(buttonId.substr(1, 1)) - 1].appendChild(renderSelects(robotsSelect[i].value));
        } 
    } 
});
    
var renderSelects = function (robot) {
    var robotsDiv = similarSelectTemplate.cloneNode(true);
    robotsDiv.querySelector('input').value = robot;
    robotsDiv.querySelector('input').id = robot;
    // robotsDiv.querySelector('input').textContent = robot;
    // robotsDiv.querySelector('label').textContent = robot;
    robotsDiv.querySelector('label').setAttribute('for', robot);
    robotsDiv.querySelector('label').classList.add('label');
    robotsDiv.querySelector('label').style.background = 'url("../img/' + robot + 'Small.png") 50px 70% no-repeat';
    robotsDiv.querySelector('label').style.backgroundSize = 'contain';
    robotsDiv.querySelector('div').textContent = robot;
    // var robotsRadio = similarRadio.cloneNode(true);
    // robotsRadio.value = robot;
    // robotsRadio.id = robot;
    // // robotsRadio.textContent = robot;
    // var robotsLabel = similarLabel.cloneNode(true);
    // robotsLabel.textContent = robot;
    // robotsLabel.setAttribute('for', robot);
    // robotsLabel.style.background = 'url("../img/' + robot + 'Small.png") no-repeat';
    // robotsLabel.style.backgroundSize = 'contain';
    // return [robotsRadio, robotsLabel];
    return robotsDiv;
};

for (var i = 0; i < robotsNamesArr.length; i++) {
    robotsSelect.appendChild(renderSelects(robotsNamesArr[i]));
    // robotsSelect.appendChild(renderSelects(robotsNamesArr[i])[1]);
}
//
// robotAdd.addEventListener('click', function () {
//     robotsSelect.cha
// });