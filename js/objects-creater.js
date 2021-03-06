'use strict';

// Файл отвечает за создание объектов орудий и роботов

(function () {

    window.objects = {};

    window.objects.weaponsObj = {};        /* пустой объект всех орудий для дальнейшей работы */
    window.objects.weaponsObj.medium = {};     /* пустой объект средних орудий для дальнейшей работы */
    window.objects.weaponsObj.light = {};      /* пустой объект легких орудий для дальнейшей работы */
    window.objects.weaponsObj.heavy = {};      /* пустой объект легких орудий для дальнейшей работы */

    window.objects.robotsObj = {};         /* пустой объект всех орудий для дальнейшей работы */
    window.objects.robotsObj.robotsAF = {};          /* пустой объект всех орудий для дальнейшей работы */
    window.objects.robotsObj.robotsGK = {};          /* пустой объект всех орудий для дальнейшей работы */
    window.objects.robotsObj.robotsLZ = {};          /* пустой объект всех орудий для дальнейшей работы */

    window.objects.robotsNames = {
        robotsAF: [],
        robotsGK: [],
        robotsLZ: []
    };
    window.objects.weaponsNames = {
        light: [],
        medium:[],
        heavy: []
    };
    
    var afRobotsArr = window.robots.aF.split('//%');              /* массив всех роботов с A по F */
    var gkRobotsArr = window.robots.gK.split('//%');              /* массив всех роботов с A по F */
    var lzRobotsArr = window.robots.lZ.split('//%');              /* массив всех роботов с A по F */


    var heavyWeaponsArr = window.heavy.weapons.split('/%');       /* массив всех тяжелых орудий */
    var mediumWeaponsArr = window.medium.weapons.split('/%');     /* массив всех средних орудий */
    var lightWeaponsArr = window.light.weapons.split('/%');       /* массив всех легких орудий */

    var accuracy = {
        gust: {
            100: 100,
            150: 90,
            200: 63,
            250: 46,
            300: 31,
            350: 21,
            400: 17,
            450: 10,
            500: 4
        },
        storm: {
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
        },
        thunder: {
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
        },
        shredder: {
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
        },
        corona: {
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
        },
        spark: {
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
        },
        pulsar: {
            500: 100,
            550: 91,
            600: 87
        },
        scourge: {
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
        },
        punisher: {
            200: 100,
            250: 90,
            300: 66,
            350: 51,
            400: 34,
            450: 33,
            500: 25
        },
        molot: {
            300: 100,
            400: 91,
            500: 68,
            600: 50,
            700: 44,
            800: 24
        },
        tempest: {
            200: 100,
            300: 96,
            400: 77,
            500: 63,
            600: 50,
            700: 36,
            800: 34
        },
        avenger: {
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
        },
        glory: {
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
        },
        viper: {
            300: 100,
            350: 99,
            400: 94,
            450: 85,
            500: 64
        }
    };


    /* как получить количество минут из формата "*d *h *m" */
    var getNumberFromTime = function (elem) {
        var timeD = elem.split('d')[0];
        var timeH = elem.split('d')[1].split('h')[0];
        var timeM = elem.split('d')[1].split('h')[1].split('m')[0];
        return (timeD * 24 * 60) + (timeH * 60) + +timeM;    /* + для перевода в число */
    };

    /*как создавать уровни в оружии*/
    var createWeaponLvls = function (obj, forMk, startCount, length, step, mk) {
        for (var i = startCount; i < length; i++) {
            obj['mk' + mk]['lvl' + (i + step)] = {
                damage: Number(forMk[i].split(';')[8]),
                upgradeCost: Number(forMk[i].split(';')[14]),
                upgradeTime: getNumberFromTime(forMk[i].split(';')[16].toLowerCase()),
                sellingPrice: Number(forMk[i].split(';')[15]),
                effectPower: Number(forMk[i].split(';')[17]),
                effectDuration: forMk[i].split(';')[18]
            }
        }
    };
    /*как создавать уровни в ecu и ancile (не доделан ancile)*/
    var createNotWeaponLvls = function (obj, forMk, startCount, length, step, mk) {
        for (var i = startCount; i < length; i++) {
            obj['mk' + mk]['lvl' + (i + step)] = {
                damage: Number(forMk[i].split(';')[8]),
                upgradeCost: Number(forMk[i].split(';')[14]),
                upgradeTime: getNumberFromTime(forMk[i].split(';')[16].toLowerCase()),
                sellingPrice: Number(forMk[i].split(';')[15]),
                // effectPower: Number(forMk[count].split(';')[17]),
                // effectDuration: forMk[count].split(';')[18],
                durability: forMk[i].split(';')[18],
                regenerationSpeed: Number(forMk[i].split(';')[19]),
                reactivation: Number(forMk[i].split(';')[20])
            }
        }
    };

    /* как создать свойства в объекте оружия, который в объекте :) */
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
        switch(forMk.length) {
            case 24:
                createWeaponLvls(obj, forMk, 0, (forMk.length) / 2, 1, 1);
                createWeaponLvls(obj, forMk, 12, forMk.length, (-11), 2);
                break;
            case 20:
                createWeaponLvls(obj, forMk, 0, 8, 5, 1);
                createWeaponLvls(obj, forMk, 8, 20, (-7), 2);
                break;
            case !(forMk[0].split(';')[8]):
                createNotWeaponLvls(obj, forMk, 0, 10, 3, 1);
                createNotWeaponLvls(obj, forMk, 10, 22, (-9), 2);
                obj.reloadRound = 0;
                break;
            default:
                createWeaponLvls(obj, forMk, 0, 10, 3, 1);
                createWeaponLvls(obj, forMk, 10, 22, (-9), 2);
                break;
        };
    };

    /* как создать объекты в объекте каких-либо орудий */
    var createWeaponObj = function (arr, count) {
        /*key - элемент массива (строка со свойствами), разделенный на отдельные свойства. 4 св-во - всегда тип слота*/
        var key = arr[count].split(';')[4].toLowerCase();
        var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива оружий */
        /* имя объекта = массив всех оружий разедить строки по ';;' и взять первую фразу - название оружия */
        window.objects.weaponsObj[key][name] = {};
        /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
         * третий - одна строчка со всеми свойствами */
        createObjProperties(window.objects.weaponsObj[key][name], arr[count].split('/')[0].split(';'), arr[count].split('/'));
    };


    //  ----------------------------Роботы-------------------------------------------------------------------

    /* как добавлять уровни в роботов (у всех порядок свойств должен быть одинаков, функция одна на всех) */
    var createRobotsLvls = function (obj, forMk, startCount, length, step, mk) {
        for (var i = startCount; i < length; i++) {
            obj['mk' + mk]['lvl' + (i + step)] = {
                hp: Number(forMk[i].split(';')[4]),
                speed: Number(forMk[i].split(';')[6]),
                speedAccelerated: Number(forMk[i].split(';')[7]),
                durabilityPhysicalShield: Number(forMk[i].split(';')[9]),
                durabilityEnergyShield: Number(forMk[i].split(';')[10]),
                regenerationShield: Number(forMk[i].split(';')[11]),
                threshold: Number(forMk[i].split(';')[12]),
                damageAbility: Number(forMk[i].split(';')[16]),
                upgrateCost: Number(forMk[i].split(';')[19]),
                upgradeTime: getNumberFromTime(forMk[i].split(';')[21].toLowerCase()),
                sellingPrice: Number(forMk[i].split(';')[22])
            }
        }
    };

    /*как создавать свойства роботов*/
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
            createRobotsLvls(obj, forMk, 0, (forMk.length) / 2, 1, 1);
            createRobotsLvls(obj, forMk, 12, forMk.length, (-11), 2);
        } else if (forMk.length === 19) {
            createRobotsLvls(obj, forMk, 0, 7, 6, 1);
            createRobotsLvls(obj, forMk, 7, 19, (-6), 2);
        }
    };

    /* как создать объекты в объекте роботов */
    var createRobotsObj = function (arr, count, keyTo) {
        var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива роботов */
        /* имя объекта = берем массив всех роботов, делим строки по ';;' и берем первую фразу - название робота */
        window.objects.robotsObj[keyTo][name] = {};
        /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
         * третий - одна строчка со всеми свойствами */
        createRobotsObjProperties(window.objects.robotsObj[keyTo][name], arr[count].split('//')[0].split(';'), arr[count].split('//'));
    };


    //  ----------------------------Вызовы-------------------------------------------------------------------

    /* создаем объект тяжелых орудий по массиву с оружием */
    for (var i = 0; i < heavyWeaponsArr.length; i++) {
        createWeaponObj(heavyWeaponsArr, i);
    }
    /* создаем объект средних орудий по массиву с оружием */
    for (var i = 0; i < mediumWeaponsArr.length; i++) {
        createWeaponObj(mediumWeaponsArr, i);
    }
    /* создаем объект легких орудий по массиву с оружием */
    for (var i = 0; i < lightWeaponsArr.length; i++) {
        createWeaponObj(lightWeaponsArr, i);
    }


    /* создаем объект роботов A-F по массиву с роботами */
    for (var i = 0; i < afRobotsArr.length; i++) {
        createRobotsObj(afRobotsArr, i, 'robotsAF');
    }
    for (var i = 0; i < gkRobotsArr.length; i++) {
        createRobotsObj(gkRobotsArr, i, 'robotsGK');
    }
    for (var i = 0; i < lzRobotsArr.length; i++) {
        createRobotsObj(lzRobotsArr, i, 'robotsLZ');
    }

    /* наполняем массивы имен оружия и роботов*/
    var fillNames = function (toObj, fromObj) {
        for (var key in toObj) {
            for (var key2 in fromObj) {
                var num = -1;
                for (var key3 in fromObj[key]) {
                    num++;
                    toObj[key][num] = key3;
                }
            }
        }
    };
    fillNames(window.objects.weaponsNames, window.objects.weaponsObj);
    fillNames(window.objects.robotsNames, window.objects.robotsObj);
    // console.log(window.objects.robotsObj);
    // console.log(window.objects.robotsNames);

})();