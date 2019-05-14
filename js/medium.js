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
    weaponsObj[key][name] = {};
    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
     * третий - одна строчка со всеми свойствами */
    createObjProperties(weaponsObj[key][name], arr[count].split('/')[0].split(';'), arr[count].split('/'));
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
var createAFRobotsObj = function (arr, count) {
    var name = (arr[count].split(';;')[0]).toLowerCase();   /* первая фраза из строки массива роботов */
    /* имя объекта = берем массив всех роботов, делим строки по ';;' и берем первую фразу - название робота */
    robotsObj.robotsAF[name] = {};
    /* аргументы: первый - объект в объекте по имени, второй - массив всех оружий/первая строка/делим по ';',
     * третий - одна строчка со всеми свойствами */
    createRobotsObjProperties(robotsObj.robotsAF[name], arr[count].split('//')[0].split(';'), arr[count].split('//'));
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
    createAFRobotsObj(afRobotsArr, i);
}

console.log(weaponsObj);
console.log(robotsObj);



//---------------------------------работа со страницей-------------------------------------------------------

/* массив имен роботов */
var robotsNamesArr = [];                        /* пустой массив имен */
var num = 0;                                    /* счетчик для цикла, чтобы наполнить массив */
for (var key in robotsObj.robotsAF) {
    robotsNamesArr[num++] = key;
}

var lightWeaponArr = [];
var numL = 0;
for (var key in weaponsObj.light) {
    lightWeaponArr[numL++] = key;
}
var mediumWeaponArr = [];
var numM = 0;
for (var key in weaponsObj.medium) {
    mediumWeaponArr[numM++] = key;
}
var heavyWeaponArr = [];
var numH = 0;
for (var key in weaponsObj.heavy) {
    heavyWeaponArr[numH++] = key;
}

var robotsCell = document.querySelectorAll('.robots__item');                     /* ячейка робота */
var robotAddArr = document.querySelectorAll('.robots__add');                     /* кнопка добавления робота */
var robotsSelect = document.querySelector('.robots__select');                    /* форма выбора робота */
var weaponSelect = document.querySelector('.weapon__select');                    /* форма выбора оружия */
var robotsSelectWrapper = document.querySelector('.robots__select-wrapper');     /* все ооткрывающееся окно выбора*/
var weaponSelectWrapper = document.querySelector('.weapon__select-wrapper');     /* все открывающееся окно выбора оружия*/
var robotsSelectClose = document.querySelector('.robots__select-close');         /* кнопка закрытия окна роботов */
var robotComfirm = document.querySelector('.robots__select-confirm');            /* кнопка подтверждения робота */
var buttonId;                                                                    /* порядковый номер ячейки робота */


var similarSelectTemplate = document.querySelector('.robots__select-temlate')    /* темплейт одного радиобаттона */
    .content
    .querySelector('div');
var similarWeaponSelectTemplate = document.querySelector('.weapon__select-temlate')    /* темплейт одного радиобаттона */
    .content
    .querySelector('div');
var similarRobotTemlate = document.querySelector('.robots__robot-temlate')       /* темплейт одного робота */
    .content
    .querySelector('.robot');
var similarWeaponAdd = document.querySelector('.robot__weapon-add-temlate')
    .content
    .querySelector('.robot__weapon-add-wrapper');

//переписать на угиверсальный (добавить класс в разметку, и работать по нему)
var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
        robotsSelectWrapper.classList.add('visually-hidden');
        document.removeEventListener('keydown', onPopupEscPress);
    }
};

/*получить первое свойство в объекте*/
var getFirstProp = function (obj) {
    for (var key in obj) {
        return key;
    }
};

/* разделить строку по "-" */
var splitStr = function (str, number) {
    return str.split('-')[number];
};

/*удалить робота из ячйеки*/
var deleteRobotInCell = function (evt) {
    console.log('начал удаление');
    /*удаляемый элемент (.robot)*/
    var elem = evt.target.parentNode.parentNode.parentNode;
    /*кнопка добавления робота (.robots__add)*/
    var elemParent = elem.parentNode.querySelector('.robots__add');
    /*костыль для исправления ошибки (удаляем флаг, который добавлялся в ячейке при добавлении робота)*/
    elem.parentNode.classList.remove('flag');
    /*удалить (.robot) из  (.robots__item)*/
    elem.parentNode.removeChild(elem);
    /*сделать видимой кнопку добавления робота*/
    elemParent.classList.remove('visually-hidden');    
    console.log('закончил удаление');
};
/*сменить робота в ячейке*/
var changeRobotInCell = function (evt) {
    console.log('начал замену');
    /*удаляемый элемент (.robot)*/
    var elem = evt.target.parentNode.parentNode.parentNode;
    /*переписать id, что бы робот сменялся в правильной ячейке*/
    buttonId = elem.parentNode.id;
    /*кнопка добавления робота (.robots__add)*/
    var elemParent = elem.parentNode.querySelector('.robots__add');
    /*костыль для исправления ошибки (удаляем флаг, который добавлялся в ячейке при добавлении робота)*/
    elem.parentNode.classList.remove('flag');
    /*удалить (.robot) из  (.robots__item)*/
    elem.parentNode.removeChild(elem);
    /*сделать видимой кнопку добавления робота*/
    elemParent.classList.remove('visually-hidden');
    /*сделать видимой форму выбора робота*/
    robotsSelectWrapper.classList.remove('visually-hidden');
    /*удалить все обработчики*/
    robotsCell[buttonId - 1].removeEventListener('click', bubleHandler);
    /*спрятать форму выбора по esc*/
    document.addEventListener('keydown', onPopupEscPress);
    console.log('закончил замену');
};

/*рендер елементов в форму выбора*/
var renderSelects = function (elem, template) {
    var div = template.cloneNode(true);
    div.querySelector('input').value = elem;
    div.querySelector('input').id = elem;
    div.querySelector('label').setAttribute('for', elem);
    div.querySelector('label').classList.add('label');
    // div.querySelector('label').style.background = 'url("../img/' + elem + 'Small.png") 50px 70% no-repeat';
    div.querySelector('label').style.backgroundSize = 'contain';
    div.querySelector('div').textContent = elem;

    return div;
};


/*рендер робота в ячейку*/
var renderRobotsInCell = function (robot) {
    var robotElement = similarRobotTemlate.cloneNode(true);
    var robotList = robotElement.querySelector('.robot__list');
    /* уровень робота */
    robotElement.querySelector('.robot__lvl').textContent = (getFirstProp(robotsObj.robotsAF[robot].mk1)).substr(3,1);
    /* имя робота */
    robotElement.querySelector('.robot__name').textContent = robotsObj.robotsAF[robot].name;
    /* здоровье робота */
    robotElement.querySelector('.robot__hp').textContent = robotsObj.robotsAF[robot].mk1[getFirstProp(robotsObj.robotsAF[robot].mk1)].hp;
    /* скорость робота */
    robotElement.querySelector('.robot__speed').textContent = robotsObj.robotsAF[robot].mk1[getFirstProp(robotsObj.robotsAF[robot].mk1)].speed;
    /* способность робота */
    robotElement.querySelector('.robot__ability').textContent = robotsObj.robotsAF[robot].ability;
    /* картинка робота */
    robotElement.querySelector('.robot__img').src = "../img/" + robot + "Small.png";
    /*прикрепить фрагмент верстки в список оружия*/
    robotList.appendChild(renderRobotList(robotsObj.robotsAF[robot]));
    
    return robotElement;
};

var slotObj = {
    0: 'light',
    1: 'medium',
    2: 'heavy'
};

var weaponTrObj = {
    light: lightWeaponArr,
    medium: mediumWeaponArr,
    heavy: heavyWeaponArr
};

/*возвращает фрагмент с контентом*/
var renderRobotList = function (robot) {
    var fragment = document.createDocumentFragment();
    /*разбить строку слотов на массив*/
    var slotArr = robot.slots.split('/');
    /*перебрать слоты*/
    for (var i = 0; i < slotArr.length; i++) {
        /*пройти столько итераций, сколько слотов определенного размера*/
        for (var j = 0; j < slotArr[i]; j++) {
            /*добавить к фрагменту шаблонный контент*/
            fragment.appendChild(renderRobotSlot(slotObj[i], j));
        }
    }
    /*вернуть фрагмент с прикрепленным контентом*/
    return fragment;
};

var renderRobotSlot = function (slot, count) {
    var similarWeapon = similarWeaponAdd.cloneNode(true);
    var weaponAdd = similarWeapon.querySelector('.robot__weapon-add');
    similarWeapon.querySelector('.robot__weapon-add-slot').textContent = slot;
    similarWeapon.querySelector('.robot__weapon-add').id = buttonId + '-' + (count + 1) + '-' + slot;
    weaponAdd.addEventListener('click', onWeaponAddHandler);
    
    return similarWeapon;
};


var onWeaponAddHandler = function (evt) {
    /*что делать по нажатию на кнопку '.weapon__select-close'*/
    var onWeaponCloseHandler = function () {
        weaponSelectWrapper.classList.add('visually-hidden');
        weaponSelectClose.removeEventListener('click', onWeaponCloseHandler);
    };
    var localId = splitStr(evt.target.id, 2);
    /*наполнение формы выбора оружия*/
    // if (!weaponSelect.querySelector('.weapon__select-item')) {
        for (var i = 0; i < weaponTrObj[localId].length; i++) {
            weaponSelect.appendChild(renderSelects(weaponTrObj[localId][i], similarWeaponSelectTemplate));
        }
    // }
    var weaponSelectClose = weaponSelectWrapper.querySelector('.weapon__select-close');
    weaponSelectClose.addEventListener('click', onWeaponCloseHandler);
    weaponSelectWrapper.classList.remove('visually-hidden');
};

/*показать или спрятать список по нажатию на кнопку*/
var showOrHideHandler = function (evt) {
    var robotList = evt.currentTarget.querySelector('.robot__list');
    if (robotList.classList.contains('hidden')) {
        robotList.classList.remove('hidden');
        robotList.style = 'opacity: 1;';
    } else {
        // robotList.classList.add('visually-hidden');
        robotList.classList.add('hidden');
        robotList.style = 'opacity: 0;';
    }
};

// var robotList = evt.currentTarget.querySelector('.robot__list');
// if (robotList.classList.contains('hidden')) {
//     robotList.classList.remove('hidden');
//     robotList.style = 'opacity: 1;';
// } else {
//     // robotList.classList.add('visually-hidden');
//     robotList.classList.add('hidden');
//     robotList.style = 'opacity: 0;';
// }

/*добавить циклом всем кнопками "добавить" обработчики открытия окна выбора робота*/
for (var i = 0; i < robotAddArr.length; i++) {
    robotAddArr[i].addEventListener('click', function (evt) {
        robotsSelectWrapper.classList.remove('visually-hidden');
        /*спрятать форму выбора по esc*/
        document.addEventListener('keydown', onPopupEscPress);
        /*запомнить, из какой ячейки было нажатие*/
        buttonId = evt.target.parentNode.id;
    });
}

/*спрятать форму выбора по кнопке "закрыть"*/
robotsSelectClose.addEventListener('click', function () {
    robotsSelectWrapper.classList.add('visually-hidden');
});

/*наполнение формы выбора робота */
for (var i = 0; i < robotsNamesArr.length; i++) {
    robotsSelect.appendChild(renderSelects(robotsNamesArr[i], similarSelectTemplate));
}
for (var i = 0; i < robotsSelect.childNodes.length; i++) {
    /*добавляем слушатели двойного клика*/
    robotsSelect.childNodes[i].addEventListener('dblclick', function (evt) {
        workFunc();
    })
}


/*все обработчики на всплытии, которые есть в ячейке робота (отдельно, чтобы нормально удалялись при смене робота*/
var bubleHandler = function (evt) {
    if (evt.target.className === 'robot__clear-robot' && evt.currentTarget.classList.contains('flag')) {
        deleteRobotInCell(evt);
    } else if (evt.target.className === 'robot__change-robot' && evt.currentTarget.classList.contains('flag')) {
        changeRobotInCell(evt);
    } else if (evt.target.className === 'robot__improve') {
        alert('пока не готово');
    } else if (evt.target.className === 'robot__uncover') {
        showOrHideHandler(evt);
    }
};

/*пока главная функция для работы*/
var workFunc = function () {
    /* все выборы робота */
    var radioArr = robotsSelect.querySelectorAll('.robots__select-item');
    for (var i = 0; i < radioArr.length; i++) {
        if (robotsSelect[i].checked) {
            /*сделать невидимой кнопку добавления робота*/
            robotAddArr[buttonId - 1].classList.add('visually-hidden');
            robotsSelectWrapper.classList.add('visually-hidden');
            /*прикрепление отрисованного робота в разметку*/
            robotsCell[buttonId - 1].appendChild(renderRobotsInCell(robotsSelect[i].value));
            /*добавляем флаг, потому что без него входит в функцию второй раз*/
            robotsCell[buttonId - 1].classList.add('flag');
            /*добавление обработчиков на кнопки на очистку и замену роботов*/
            robotsCell[buttonId - 1].addEventListener('click', bubleHandler);
        }
    }
};

/* что делать при подтверждении робота */
robotComfirm.addEventListener('click', function (evt) {
    workFunc();
});




//  1  переписать объекты аккуратности   +
//  2 по идее переделать логику удаления робота из ячейки (кнопка сменить не должна сама удалять его из верстки)
//    это должна делать функция добавления робота
//  3 надо бы добавить слушатели на кнопки для закрытия
//  4 добавить обработчики на выбор робота (enter и двойнок клик) (двойной клик +)