//---------------------------------работа со страницей-------------------------------------------------------

var robotsObj = window.objects.robotsObj;
var weaponsObj = window.objects.weaponsObj;
var robotsNames = window.objects.robotsNames;
var weaponNames = window.objects.weaponsNames;
console.log(robotsObj);
console.log(weaponsObj);


var robotsCell = document.querySelectorAll('.robots__item');                     /* ячейка робота */
var robotAddArr = document.querySelectorAll('.robots__add');                     /* кнопка добавления робота */
var robotsSelect = document.querySelector('.robots__select');                    /* форма выбора робота */
var weaponSelect = document.querySelector('.weapon__select');                    /* форма выбора оружия */
var robotsSelectWrapper = document.querySelector('.robots__select-wrapper');     /* все ооткрывающееся окно выбора*/
var weaponSelectWrapper = document.querySelector('.weapon__select-wrapper');     /* все открывающееся окно выбора оружия*/
var robotsSelectClose = document.querySelector('.robots__select-close');         /* кнопка закрытия окна роботов */
var robotComfirm = document.querySelector('.robots__select-confirm');            /* кнопка подтверждения робота */
var robotsChoice = document.querySelector('.robots__choice');
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

/*возвращает фрагмент с контентом в робота в разметке*/
var renderRobotList = function (robot) {
    var fragment = document.createDocumentFragment();
    var slotArr = robot.slots.split('/');                           /*разбить строку слотов на массив*/
    for (var i = 0; i < slotArr.length; i++) {                      /*перебрать слоты*/
        for (var j = 0; j < slotArr[i]; j++) {                      /*пройти столько итераций, сколько слотов определенного размера*/
            fragment.appendChild(renderRobotSlot(slotObj[i], j));   /*добавить к фрагменту шаблонный контент*/
        }
    }
    return fragment;
};

/*рендер робота в ячейку*/
var renderRobotsInCell = function (robot) {
    var robotElement = similarRobotTemlate.cloneNode(true);
    var robotList = robotElement.querySelector('.robot__list');
    robotElement.querySelector('.robot__lvl').textContent = (getFirstProp(robotsObj.robotsAF[robot].mk1)).substr(3,1);
    robotElement.querySelector('.robot__name').textContent = robotsObj.robotsAF[robot].name;
    robotElement.querySelector('.robot__hp').textContent = robotsObj.robotsAF[robot].mk1[getFirstProp(robotsObj.robotsAF[robot].mk1)].hp;
    robotElement.querySelector('.robot__speed').textContent = robotsObj.robotsAF[robot].mk1[getFirstProp(robotsObj.robotsAF[robot].mk1)].speed;
    robotElement.querySelector('.robot__ability').textContent = robotsObj.robotsAF[robot].ability;
    robotElement.querySelector('.robot__img').src = "../img/" + robot + "Small.png";
    robotList.appendChild(renderRobotList(robotsObj.robotsAF[robot]));
    
    return robotElement;
};

/*сменить робота в ячейке*/
var changeRobotInCell = function (evt) {
    console.log('начал замену');    
    var elem = evt.target.parentNode.parentNode.parentNode;                  /*удаляемый элемент (.robot)*/
    buttonId = elem.parentNode.id;                                           /*переписать id, что бы робот сменялся в правильной ячейке*/
    var elemParent = elem.parentNode.querySelector('.robots__add');          /*кнопка добавления робота (.robots__add)*/
    /*костыль для исправления ошибки (удаляем флаг, который добавлялся в ячейке при добавлении робота)*/
    elem.parentNode.classList.remove('flag');
    elem.parentNode.removeChild(elem);                                       /*удалить (.robot) из  (.robots__item)*/
    elemParent.classList.remove('visually-hidden');                          /*сделать видимой кнопку добавления робота*/
    robotsSelectWrapper.classList.remove('visually-hidden');                 /*сделать видимой форму выбора робота*/
    robotsCell[buttonId - 1].removeEventListener('click', bubleHandler);     /*удалить все обработчики*/
    document.addEventListener('keydown', onPopupEscPress);                   /*спрятать форму выбора по esc*/
    console.log('закончил замену');
};


var slotObj = {
    0: 'light',
    1: 'medium',
    2: 'heavy'
};


var showSelect = function (evt, hiddenElement) {
    hiddenElement.classList.remove('visually-hidden');
    hiddenElement.classList.add('opened');
    document.addEventListener('click', closeSelectHandler);
    document.addEventListener('keydown', onPopupEscPress);
};
var closeSelectHandler = function (evt) {
    if (evt.target.parentNode.parentNode.classList.contains('opened')) {
        evt.target.parentNode.parentNode.classList.remove('opened');
        evt.target.parentNode.parentNode.classList.add('visually-hidden');
        document.removeEventListener('keydown', closeSelectHandler);
        document.removeEventListener('keydown', onPopupEscPress);
    }
};
//переписать на универсальный (добавить класс в разметку, и работать по нему)
var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
        var itemToClose = document.querySelector('.opened');
        itemToClose.classList.remove('opened');
        itemToClose.classList.add('visually-hidden');
        document.removeEventListener('keydown', closeSelectHandler);
        document.removeEventListener('keydown', onPopupEscPress);
    }
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
    for (var i = 0; i < weaponNames[localId].length; i++) {
        weaponSelect.appendChild(renderSelects(weaponNames[localId][i], similarWeaponSelectTemplate));
    }
    // }
    var weaponSelectClose = weaponSelectWrapper.querySelector('.weapon__select-close');
    weaponSelectClose.addEventListener('click', onWeaponCloseHandler);
    weaponSelectWrapper.classList.remove('visually-hidden');
};

var renderRobotSlot = function (slot, count) {
    var similarWeapon = similarWeaponAdd.cloneNode(true);
    var weaponAdd = similarWeapon.querySelector('.robot__weapon-add');
    similarWeapon.querySelector('.robot__weapon-add-slot').textContent = slot;
    similarWeapon.querySelector('.robot__weapon-add').id = buttonId + '-' + (count + 1) + '-' + slot;
    weaponAdd.addEventListener('click', onWeaponAddHandler);
    return similarWeapon;
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
        // robotsSelectWrapper.classList.remove('visually-hidden');
        // /*спрятать форму выбора по esc*/
        // document.addEventListener('keydown', onPopupEscPress);
        
        showSelect(evt, robotsSelectWrapper);
        // /*запомнить, из какой ячейки было нажатие*/
        buttonId = evt.target.parentNode.id;
    });
}

/*спрятать форму выбора по кнопке "закрыть"*/
// robotsSelectClose.addEventListener('click', function () {
//     robotsSelectWrapper.classList.add('visually-hidden');
// });

/*наполнение формы выбора робота */
for (var i = 0; i < robotsNames.robotsAF.length; i++) {
    robotsSelect.appendChild(renderSelects(robotsNames.robotsAF[i], similarSelectTemplate));
}
for (var i = 0; i < robotsSelect.childNodes.length; i++) {
    /*добавляем слушатели двойного клика*/
    robotsSelect.childNodes[i].addEventListener('dblclick', function (evt) {
        workFunc();
    })
}


/*все обработчики на всплытии, которые есть в ячейке робота (отдельно, чтобы нормально удалялись при смене робота*/
var bubleHandler = function (evt) {
    if (evt.target.className === 'robot__change-robot' /*&& evt.currentTarget.classList.contains('flag')*/) {
        changeRobotInCell(evt);
    } else if (evt.target.className === 'robot__improve') {
        alert('пока не готово');
    } else if (evt.target.className === 'robot__uncover') {
        showOrHideHandler(evt);
    } else if (evt.target.className === 'robot__clear-robot' && evt.currentTarget.classList.contains('flag')) {
        // deleteRobotInCell(evt);
    } 
};

var confirmSelectHandler = function (evt, func) {
    var form = evt.target.parentNode.querySelector('form');
    var inpitArr = form.querySelectorAll('input');
    for (var i = 0; i < inpitArr.length; i++) {
        if (form[i].checked) {
            func(form[i]);
        }
    }
};

var nestedRobotFunc = function (input) {
    /*сделать невидимой кнопку добавления робота*/
    robotAddArr[buttonId - 1].classList.add('visually-hidden');
    robotsSelectWrapper.classList.add('visually-hidden');
    /*прикрепление отрисованного робота в разметку*/
    robotsCell[buttonId - 1].appendChild(renderRobotsInCell(input.value));
    /*добавляем флаг, потому что без него входит в функцию второй раз*/
    // robotsCell[buttonId - 1].classList.add('flag');
    /*добавление обработчиков на кнопки на очистку и замену роботов*/
    robotsCell[buttonId - 1].addEventListener('click', bubleHandler);
};

// /*пока главная функция для работы*/
// var workFunc = function () {
//     /* все выборы робота */
//     var radioArr = robotsSelect.querySelectorAll('.robots__select-item');
//     for (var i = 0; i < radioArr.length; i++) {
//         if (robotsSelect[i].checked) {
//             /*сделать невидимой кнопку добавления робота*/
//             robotAddArr[buttonId - 1].classList.add('visually-hidden');
//             robotsSelectWrapper.classList.add('visually-hidden');
//             /*прикрепление отрисованного робота в разметку*/
//             robotsCell[buttonId - 1].appendChild(renderRobotsInCell(robotsSelect[i].value));
//             /*добавляем флаг, потому что без него входит в функцию второй раз*/
//             robotsCell[buttonId - 1].classList.add('flag');
//             /*добавление обработчиков на кнопки на очистку и замену роботов*/
//             robotsCell[buttonId - 1].addEventListener('click', bubleHandler);
//         }
//     }
// };

/* что делать при подтверждении робота */
robotComfirm.addEventListener('click', function (evt) {
    confirmSelectHandler(evt, nestedRobotFunc);
});


// /*удалить робота из ячйеки*/
// var deleteRobotInCell = function (evt) {
//     console.log('начал удаление');                                                                             
//     var elem = evt.target.parentNode.parentNode.parentNode;                  /*удаляемый элемент (.robot)*/                                                                             
//     var elemParent = elem.parentNode.querySelector('.robots__add');          /*кнопка добавления робота (.robots__add)*/    
//     /*костыль для исправления ошибки (удаляем флаг, который добавлялся в ячейке при добавлении робота)*/
//     elem.parentNode.classList.remove('flag');                                                                             
//     elem.parentNode.removeChild(elem);                                       /*удалить (.robot) из  (.robots__item)*/                                                                             
//     elemParent.classList.remove('visually-hidden');                          /*сделать видимой кнопку добавления робота*/
//     console.log('закончил удаление');
// };


//  1  переписать объекты аккуратности   +
//  2 по идее переделать логику удаления робота из ячейки (кнопка сменить не должна сама удалять его из верстки)
//    это должна делать функция добавления робота
//  3 надо бы добавить слушатели на кнопки для закрытия
//  4 добавить обработчики на выбор робота (enter и двойнок клик) (двойной клик +)