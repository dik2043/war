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
var lvlChoose = document.querySelector('.lvl__change-wrapper');
var buttonId;                                                                    /* порядковый номер ячейки робота */
var weaponId;
var robotType;


var similarSelectTemplate = document.querySelector('.robots__select-temlate')    /* темплейт одного радиобаттона */
    .content
    .querySelector('div');
var similarSelectTemlateConfirm = document.querySelector('.robots__select-confirm-temlate')     /*Темплейт кнопки подтверждения робота*/
    .content
    .querySelector('.robots__select-confirm');
var similarWeaponSelectTemlateConfirm = document.querySelector('.weapon__select-confirm-temlate')       /*Темплейт кнопки подтверждения оружия*/
    .content
    .querySelector('.weapon__select-confirm');
var similarWeaponSelectTemplate = document.querySelector('.weapon__select-temlate')    /* темплейт одного радиобаттона */
    .content
    .querySelector('div');
var similarRobotTemlate = document.querySelector('.robots__robot-temlate')       /* темплейт одного робота */
    .content
    .querySelector('.robot');
var similarWeaponAdd = document.querySelector('.robot__weapon-add-temlate')     /*Темплейт кнопки добавления оружия*/
    .content
    .querySelector('.robot__weapon-add-wrapper');
var similarWeaponTemplate = document.querySelector('.weapon__temlate')
    .content
    .querySelector('.robot__weapon-wrapper');
var lvlTemplate = lvlChoose.querySelector('.lvl__template')
    .content
    .querySelector('.lvl');



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
/*возвращает элемент из шаблона*/
var returnNode = function (temlateConfirm) {
    return temlateConfirm.cloneNode(true);
};

//Открыть/Закрыть попапы
//---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*аргумент - показываемый эл-т, удалить у него "visually-hidden", добавить"opened". Добавить обработчики закрытия по esc и по клику*/
var showPopup = function (hiddenElement) {
    hiddenElement.classList.remove('visually-hidden');
    hiddenElement.classList.add('opened');
    document.addEventListener('click', onClosePopupHandler);
    document.addEventListener('keydown', onPopupEscPress);
};
/*убрать класс "opened", добавить "visually-hidden"*/
var closePopup = function (element) {
    element.classList.remove('opened');
    element.classList.add('visually-hidden');
};
/*если esc - удаляет "opened" и добавляет "visually-hidden" к элементу с классом "opened". Удаляет обработчики закрытия*/
var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
        var itemToClose = document.querySelector('.opened');
        itemToClose.classList.remove('opened');
        itemToClose.classList.add('visually-hidden');
        document.removeEventListener('click', onClosePopupHandler);
        document.removeEventListener('keydown', onPopupEscPress);
    }
};
/*находит в разметке эл-т с классом "opened" и прячет его. Удаляет обработчки закрытия*/
var onClosePopupHandler = function (evt) {
    try {
        if (evt.target./*parentNode.parentNode.parentNode.*/classList.contains('close')) {
            closePopup(evt.target.parentNode.parentNode);
            document.removeEventListener('click', closePopup);
            document.removeEventListener('keydown', onPopupEscPress);
        }
    } catch (err) {
        console.log('(ошибка): клик за пределами окна');
    }    
};
//----------------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//От начала выбора робота/оружия по смену робота/оружия в ячейке
//---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*показать окно выбора типа робота*/
var showRobotsChoice = function (evt) {
    if (document.documentElement.clientWidth - evt.clientX < 150) {
        robotsChoice.style = 'right: ' + (document.documentElement.clientWidth - evt.clientX) + 'px; top: '
            + (evt.clientY + window.pageYOffset - 100) + 'px;';
    } else {
        robotsChoice.style = 'left: ' + (evt.clientX + 20) + 'px; top: '
            + (evt.clientY + window.pageYOffset - 100) + 'px;';
    }
    showPopup(robotsChoice);
    robotsChoice.addEventListener('click', onRobotsChoiceHandler);
};
/*что делать по нажатию на элементы из окна выбора типа робота*/
var onRobotsChoiceHandler = function (evt) {
    robotType = evt.target.id;
    if (evt.target.className === 'robots__choice-close close') {
        onClosePopupHandler(evt);       /*закрыть, если класс, который у кнопки "закрыть"*/
    } else {
        closePopup(robotsChoice);
        renderSelects(evt, robotsNames, robotsSelect, similarSelectTemplate, robotsCallback, robotType,
                      robotType, similarSelectTemlateConfirm);
    }
};
/*рендер одного элемента в форму выбора*/
var renderOneSelect = function (elem, template) {
    var selectItem = template.cloneNode(true);
    selectItem.querySelector('input').value = elem;
    selectItem.querySelector('input').id = elem;
    selectItem.querySelector('label').setAttribute('for', elem);
    selectItem.querySelector('label').classList.add('label');
    selectItem.querySelector('label').style.background = 'url("img/' + elem + 'Small.png") 50px 70% no-repeat';
    selectItem.querySelector('label').style.backgroundSize = 'contain';
    selectItem.querySelector('div').textContent = elem;
    return selectItem;
};
/*удаляет все дочение элементы в родителе*/
var deleteAllChild = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

/*прикрепляет отрисованные элементы к окну выбора роботов/оружия. Показывает это окно*/
var renderSelects = function (evt, robOrWeap/*массив имен*/, base, template/*шаблон робота или оружия*/,
                              callback/*функция для роботов или оружия*/, param/*для колбэка()*/, key,
                              temlateConfirm/*шаблон кнопки подтверждерния*/) {
    
    // try {
        deleteAllChild(base);         /*сначала удалит все, что было в окне, чтобы не дублировать*/
        base.parentNode.removeChild(base.parentNode.lastChild);     /*удалить кнопку подтверждения, чтобы с ней удалился обработчик*/
        base.parentNode.appendChild(returnNode(temlateConfirm));    /*добавить кнопку подтверждения*/
        // var key = evt.target.id;
        for (var i = 0; i < robOrWeap[key].length; i++) {
            base.appendChild(renderOneSelect(robOrWeap[key][i], template));
            /*добавить обработчики рендера робота по двойному клику*/
            base.lastChild.addEventListener('dblclick', function (evt) {
                var choosenElem = evt.currentTarget.querySelector('input');
                closePopup(base.parentNode);
                callback(choosenElem, param);
            });

        }
        /*показать само окно выбора*/
        showPopup(base.parentNode);
        /*добавить обработчик клика на кнопку подтверждения*/
        base.parentNode.lastChild.addEventListener('click', function (evt1) {
            confirmSelectHandler(evt1, callback, param);
        });        
    // } catch (err) {
    //     console.log('(ошибка): с этого элемента не отрисуется список роботов');
    // }
};
/*функция подтверждения выбора*/
var confirmSelectHandler = function (evt, callback /*для роботов и оружия разная функция*/, param) {
    
    var flag;               /*записывает в себя выбранный эл-т из окна выбора*/
    var form = evt.target.parentNode.querySelector('form');         /*форма выбора*/
    var formParent = evt.target.parentNode;     /*все окно выбора*/
    var inpitArr = form.querySelectorAll('input');      /*массив иннтпутов в форме выбора*/
    for (var i = 0; i < inpitArr.length; i++) {
        if (form[i].checked) {
            flag = form[i];
        }
    }
    /*закрыть окно и продолжить работу только если есть выбранный эл-т*/
    if (flag) {
        deleteAllChild(form);
        closePopup(formParent);
        callback(flag, param);
    } else {
        console.log('"confirmSelectHandler"   подтверждение выбора. Элемент не выбран, не может продолжить');
    }
};

/*функция, выполняющаяся при выборе робота*/
var robotsCallback = function (input, param) {
    
    /*сделать невидимой кнопку добавления робота*/
    robotAddArr[buttonId - 1].classList.add('visually-hidden');
    /*прикрепление отрисованного робота в разметку*/
    robotsCell[buttonId - 1].appendChild(renderRobotsInCell(input.value, param));
    /*добавление обработчиков на кнопки отрисованного робота*/
    robotsCell[buttonId - 1].addEventListener('click', ascentRobotsListener);
};

/*рендер робота в ячейку*/
var renderRobotsInCell = function (robot, robotType) {
    
    var robotElement = similarRobotTemlate.cloneNode(true);
    var robotList = robotElement.querySelector('.robot__list');
    robotElement.querySelector('.robot__lvl').textContent = (getFirstProp(robotsObj[robotType][robot].mk1)).substr(3,1);
    robotElement.querySelector('.robot__name').textContent = robotsObj[robotType][robot].name;
    robotElement.querySelector('.robot__name').id = robotType;
    robotElement.querySelector('.robot__hp').textContent = robotsObj[robotType][robot].mk1[getFirstProp(robotsObj[robotType][robot].mk1)].hp;
    robotElement.querySelector('.robot__speed').textContent = robotsObj[robotType][robot].mk1[getFirstProp(robotsObj[robotType][robot].mk1)].speed;
    robotElement.querySelector('.robot__ability').textContent = robotsObj[robotType][robot].ability;
    robotElement.querySelector('.robot__img').src = "img/" + robot + "Small.png";
    robotList.appendChild(renderRobotList(robotsObj[robotType][robot]));
    return robotElement;
};

/*функция, выполняющаяся при выборе оружия*/
var weaponCallback = function (input, param/*для идентификации нужной ячейки оружия и поиска в объекте*/) {
    
    var weaponAddButton = document.getElementById(param);
    /*сделать невидимой кнопку добавления робота*/
    weaponAddButton.classList.add('visually-hidden');
    /*прикрепление отрисованного оружия в разметку*/
    weaponAddButton.parentNode.appendChild(renderWeaponInCell(input.value, splitStr(param, 2)));
    
};
/*рендер оружия в ячейку*/
var renderWeaponInCell = function (weapon, weaponType) {
    
    var weaponElement = similarWeaponTemplate.cloneNode(true);
    weaponElement.querySelector('.robot__weapon-lvl').textContent = (getFirstProp(weaponsObj[weaponType][weapon].mk1)).substr(3,1);
    weaponElement.querySelector('.robot__weapon-name').textContent = weaponsObj[weaponType][weapon].name;
    weaponElement.querySelector('.robot__weapon-img').src = "img/" + weapon + "Small.png";
    weaponElement.addEventListener('click', ascentWeaponListener);
    return weaponElement;
};


/*сменить елемент в ячейке*/
var changeRobotInCell = function (evt, elem /*заменяемый элемент*/, buttonArr/*кнопка, которую показать*/, 
                                  elemId/*элемент, с которого взять id*/) {
    
    elem.parentNode.removeChild(elem.parentNode.lastChild);     /*удалить елемент из ячейки*/
    buttonId = elemId.id;
    buttonArr[buttonId - 1].classList.remove('visually-hidden');    /*сделать кнопку добавления робота видимой*/
    showRobotsChoice(evt);
};

var changeWeaponInCell = function (evt, elem /*заменяемый элемент*/, buttonArr/*кнопка, которую показать*/) {
    
    var weaponCell = evt.currentTarget.parentNode;      /*вся ячейка оружия*/
    /*показать кнопку*/
    weaponCell.querySelector('.robot__weapon-add').classList.remove('visually-hidden');
    weaponCell.removeChild(evt.currentTarget.parentNode.querySelector('.robot__weapon-wrapper'));       /*удалить оружие из ячейки*/
    renderSelects(evt, weaponNames, weaponSelect, similarWeaponSelectTemplate, weaponCallback, weaponCell.childNodes[1].id,
                  splitStr(weaponCell.childNodes[1].id, 2), similarWeaponSelectTemlateConfirm);
};

/*добавить всем кнопками "добавить" обработчики открытия окна выбора робота*/
for (var i = 0; i < robotAddArr.length; i++) {
    robotAddArr[i].addEventListener('click', function (evt) {
        buttonId = evt.target.parentNode.id;                  /*запомнить, из какой ячейки было нажатие*/
        showRobotsChoice(evt);
    });
}

//----------------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

var slotObj = {
    0: 'light',
    1: 'medium',
    2: 'heavy'
};

/*возвращает фрагмент со списком слотов робота*/
var renderRobotList = function (robot) {
    var fragment = document.createDocumentFragment();
    var slotArr = robot.slots.split('/');                           /*разбить строку слотов на массив*/
    var num = 0;                                                    /*для правильной записи порядкового номера слота*/
    for (var i = 0; i < slotArr.length; i++) {                      /*перебрать слоты*/
        for (var j = 0; j < slotArr[i]; j++) {                      /*пройти столько итераций, сколько слотов определенного размера*/
            fragment.appendChild(renderRobotSlot(slotObj[i], num));   /*добавить к фрагменту шаблонный контент*/
            num++;
        }
    }
    return fragment;
};
/*возвращает один отрисованный слот (с кнопкой добавления)*/
var renderRobotSlot = function (slot, count) {
    var similarWeapon = similarWeaponAdd.cloneNode(true);
    var weaponAdd = similarWeapon.querySelector('.robot__weapon-add');    
    similarWeapon.querySelector('.robot__weapon-add-slot').textContent = slot;
    similarWeapon.querySelector('.robot__weapon-add').id = buttonId + '-' + (count + 1) + '-' + slot;
    weaponAdd.addEventListener('click', function (evt) {
        weaponId = splitStr(evt.target.id, 1);
        renderSelects(evt, weaponNames, weaponSelect, similarWeaponSelectTemplate, weaponCallback, evt.target.id, 
                      splitStr(evt.target.id, 2), similarWeaponSelectTemlateConfirm);
    });
    return similarWeapon;
};
//----------------------------------------------------------------------



/*показать или спрятать список по нажатию на кнопку*/
var showOrHideHandler = function (evt) {
    var robotList = evt.currentTarget.querySelector('.robot__list');
    if (robotList.classList.contains('hidden')) {
        robotList.classList.remove('hidden');
        robotList.style = 'z-index: 1;';
    } else {
        robotList.classList.add('hidden');
        setTimeout(function () {
            robotList.style = 'z-index: -1;';
        }, 500)
    }
};

var renderLvl = function (count, mk, cellId) {    
    var similarLvl = lvlTemplate.cloneNode(true);
    similarLvl.textContent = count;
    similarLvl.id = mk + '-' + count;
    similarLvl.addEventListener('click', function () {
        console.log(similarLvl.textContent);
        console.log('cellId2 ' + cellId);
    });
    return similarLvl;
};

var renderAllLvls = function (evt, robOrWeap, robotCategory, robotName, cellId) {
    console.log('cellId ' + cellId);
    var divWrapper = document.createElement("div");
    divWrapper.style = 'position: fixed; z-index: 21; top: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6);';
    document.querySelector('.page-main').appendChild(divWrapper);
    if (document.documentElement.clientWidth - evt.clientX < 153) {
        lvlChoose.style = 'right: ' + (document.documentElement.clientWidth - evt.clientX) + 'px; top: '
            + (evt.clientY + window.pageYOffset + 20) + 'px;';
    } else {
        lvlChoose.style = 'left: ' + (evt.clientX + 20) + 'px; top: '
            + (evt.clientY + window.pageYOffset + 20) + 'px;';
    }
    lvlChoose.classList.remove('visually-hidden');
    var lvlWrapperMk1 = lvlChoose.querySelector('.lvl__wrapper-mk1');
    var lvlWrapperMk2 = lvlChoose.querySelector('.lvl__wrapper-mk2');
    for (var key in robOrWeap[robotCategory][robotName].mk1) {
        lvlWrapperMk1.appendChild(renderLvl(key.substr(3), '1', cellId));
    }
    for (var key in robOrWeap[robotCategory][robotName].mk2) {
        lvlWrapperMk2.appendChild(renderLvl(key.substr(3), '2', cellId));
    }
};

//переписать на switch
/*все обработчики на всплытии, которые есть в ячейке робота (отдельно, чтобы нормально удалялись при смене робота)*/
var ascentRobotsListener = function (evt) {
    var elemForChenage = evt.target.parentNode.parentNode.parentNode;
    if (evt.target.className === 'robot__change-robot' /*&& evt.currentTarget.classList.contains('flag')*/) {
        changeRobotInCell(evt, elemForChenage, robotAddArr, elemForChenage.parentNode);
    } else if (evt.target.className === 'robot__improve') {
        alert('пока не готово');
    } else if (evt.target.className === 'robot__uncover') {
        showOrHideHandler(evt);
    } else if (evt.target.className === 'robot__clear-robot' && evt.currentTarget.classList.contains('flag')) {
        // deleteRobotInCell(evt);
    } else if (evt.target.className === 'robot__lvl') {
        var cellId = evt.currentTarget.id;
        var robotName = evt.target.nextElementSibling.textContent;
        var robotCategory = evt.target.nextElementSibling.id;
        var lvlArr = Array.from(robotsObj[robotCategory][robotName].mk1);
        renderAllLvls(evt, robotsObj, robotCategory, robotName, cellId);
        // var div = document.createElement("div");
        // var divWrapper = document.createElement("div");
        // div.style = 'position: absolute; z-index: 21; top: 30px;  left: ' + evt.clientX + '; ' +
        //     'display: flex; justify-content: space-between; ' +
        //     'width: 100px;  height: 30px;  background-color: white;  border: 1px dashed white';
        // div.addEventListener('click', function (evt) {
        //     console.log(robotsObj[robotCategory][robotName].mk1);
        //     // console.log();
        // });
        // divWrapper.style = 'position: absolute; z-index: 21; width: 300%; height: 1000%; background-color: rgba(0, 0, 0, 0.2);'
        //
        // evt.currentTarget.appendChild(divWrapper);
        // evt.currentTarget.appendChild(div);
        
    }
};

/*все обработчики на всплытии, которые есть в ячейке оружия*/
var ascentWeaponListener = function (evt) {
    if (evt.target.className === 'robot__weapon-change-weapon' /*&& evt.currentTarget.classList.contains('flag')*/) {
        changeWeaponInCell(evt);
    } else if (evt.target.className === 'robot__weapon-improve') {
        alert('пока не готово');
    }
};

//  1  переписать объекты аккуратности   +
//  2 по идее переделать логику удаления робота из ячейки (кнопка сменить не должна сама удалять его из верстки)
//    это должна делать функция добавления робота
//  3 надо бы добавить слушатели на кнопки для закрытия
//  4 добавить обработчики на выбор робота (enter и двойнок клик) (двойной клик +)
//  5 может быть добавить на роботов слайдер