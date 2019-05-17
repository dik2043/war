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
var weaponId;
var robotType;


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
var similarWeaponTemplate = document.querySelector('.weapon__temlate')
    .content
    .querySelector('.robot__weapon-wrapper');


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

//Открыть/Закрыть попапы
//---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*аргумент - показываемый эл-т, удалить у него "visually-hidden", добавить"opened". Добавить обработчики закрытия по esc и по клику*/
var showPopup = function (evt, hiddenElement) {
    hiddenElement.classList.remove('visually-hidden');
    hiddenElement.classList.add('opened');
    document.addEventListener('click', onClosePopupHandler);
    document.addEventListener('keydown', onPopupEscPress);
    console.log('"showPopup" показ всплывающего окна');
};
/*убрать класс "opened", добавить "visually-hidden"*/
var closePopup = function (element) {
    element.classList.remove('opened');
    element.classList.add('visually-hidden');
    console.log('"closePopup" скрытие всплывающего окна');
};
/*если esc - удаляет "opened" и добавляет "visually-hidden" к элементу с классом "opened". Удаляет обработчики закрытия*/
var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
        console.log('"onPopupEscPress" нажата "esc"');
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
            console.log('"onClosePopupHandler" сработал обработчик кнопки закрытия');
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
    console.log('"showRobotsChoice" начало работы >>>>>>>>>>>>>>>>>>>>>>>>>');
    if (document.documentElement.clientWidth - evt.clientX < 150) {
        robotsChoice.style = 'right: ' + (document.documentElement.clientWidth - evt.clientX) + 'px; top: '
            + (evt.clientY + window.pageYOffset - 100) + 'px;';
    } else {
        robotsChoice.style = 'left: ' + (evt.clientX + 20) + 'px; top: '
            + (evt.clientY + window.pageYOffset - 100) + 'px;';
    }
    console.log('"showRobotsChoice"     показать окно выбора типа робота');
    showPopup(evt, robotsChoice);
    robotsChoice.addEventListener('click', onRobotsChoiceHandler);
    console.log('"showRobotsChoice" конец работы <<<<<<<<<<<<<<<<<<<<<<<<<');
};
/*что делать по нажатию на элементы из окна выбора типа робота*/
var onRobotsChoiceHandler = function (evt) {
    robotType = evt.target.id;
    console.log(robotType);
    if (evt.target.className === 'robots__choice-close') {
        console.log('"onRobotsChoiceHandler" тип робота не выбран');
        onClosePopupHandler(evt);       /*закрыть, если класс, который у кнопки "закрыть"*/
    } else {
        console.log('"onRobotsChoiceHandler" тип робота выбран');
        closePopup(robotsChoice);
        renderSelects(evt, robotsNames, robotsSelect, similarSelectTemplate, robotsCallback, robotType, robotType);
    }
};
/*рендер одного элемента в форму выбора*/
var renderOneSelect = function (elem, template) {
    var div = template.cloneNode(true);
    div.querySelector('input').value = elem;
    div.querySelector('input').id = elem;
    div.querySelector('label').setAttribute('for', elem);
    div.querySelector('label').classList.add('label');
    div.querySelector('label').style.background = 'url("img/' + elem + 'Small.png") 50px 70% no-repeat';
    div.querySelector('label').style.backgroundSize = 'contain';
    div.querySelector('div').textContent = elem;
    // console.log('"renderOneSelect" конец отрисовки одного элемента. Элемент прикрепилен');
    return div;
};
/*удаляет все дочение элементы в родителе*/
var deleteAllChild = function (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    console.log('"deleteAllChild" удаление дочерних элементов');
};
/*прикрепляет отрисованные элементы к окну выбора роботов/оружия. Показывает это окно*/
var renderSelects = function (evt, robOrWeap, base, template, callback, param/*для колбэка*/, key) {
    console.log('"renderSelects" начало работы прикрепления всех элементов к окну выбора >>>>>>>>>>>>>>>>>>>>>>>>>');
    deleteAllChild(base);         /*сначала удалит все, что было в окне, чтобы не дублировать*/
    // var key = evt.target.id;
    console.log(key);
    try {
        console.log('"renderSelects"     начало прикрепления элементов к окну выбора');
        for (var i = 0; i < robOrWeap[key].length; i++) {
            base.appendChild(renderOneSelect(robOrWeap[key][i], template));
            /*добавить обработчики рендера робота по двойному клику*/
            // console.log('"renderSelects"     добавелен обработчик рендера робота по двойному клику');
            base.lastChild.addEventListener('dblclick', function (evt) {
                var choosenElem = evt.currentTarget.querySelector('input');
                // deleteAllChild(base);
                closePopup(base.parentNode);
                callback(choosenElem, param);
            })
        }
        console.log('"renderSelects"     конец прикрепления элементов к окну выбора');
        console.log('"renderSelects"     отрисовка окна выбора элемента');
        showPopup(evt, base.parentNode);
        /*добавить */
        if (!(robotsSelect.classList.contains('flag'))) {
            base.nextElementSibling.addEventListener('click', function (evt) {
                console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
                confirmSelectHandler(evt, callback, key);
            });    
        }
        robotsSelect.classList.add('flag');
        
        console.log('"renderSelects"     добавление обработчика клика на кнопку подтверждения');
    } catch (err) {
        console.log('(ошибка): с этого элемента не отрисуется список роботов');
    }
    console.log('"renderSelects" конец работы прикрепления всех элементов к окну выбора <<<<<<<<<<<<<<<<<<<<<<<<<');
};
/*функция подтверждения выбора*/
var confirmSelectHandler = function (evt, callback /*для роботов и оружия разная функция*/, param) {
    console.log('"confirmSelectHandler" начало работы подтверждения выбора >>>>>>>>>>>>>>>>>>>>>>>>>');
    var flag;               /*записывает в себя выбранный эл-т из окна выбора*/
    var form = evt.target.parentNode.querySelector('form');
    var formParent = evt.target.parentNode;     /*все окно выбора*/
    var inpitArr = form.querySelectorAll('input');
    for (var i = 0; i < inpitArr.length; i++) {
        if (form[i].checked) {
            flag = form[i];
            console.log('"confirmSelectHandler"   запись выбранного элемента. Элемент - ' + flag.value);
        }
    }
    /*закрыть окно и продолжить работу только если есть выбранный эл-т*/
    if (flag) {
        console.log('"confirmSelectHandler"   подтверждение выбора. Элемент выбран, можно продолжать');
        deleteAllChild(form);
        closePopup(formParent);
        callback(flag, param/* || robotType*/);
    } else {
        console.log('"confirmSelectHandler"   подтверждение выбора. Элемент не выбран, не может продолжить');
    }
    console.log('"confirmSelectHandler" конец работы подтверждения выбора <<<<<<<<<<<<<<<<<<<<<<<<<');
};


var robotsCallback = function (input, param) {
    console.log('"robotsCallback" начало работы колбэка для роботов >>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(param + '!!!!!!!!!!!!!!!!!!!!!!Ж');
    /*сделать невидимой кнопку добавления робота*/
    robotAddArr[buttonId - 1].classList.add('visually-hidden');
    console.log('"robotsCallback"   скрыть кнопку добавления робота');
    /*прикрепление отрисованного робота в разметку*/
    robotsCell[buttonId - 1].appendChild(renderRobotsInCell(input.value, param));
    robotsCell[buttonId - 1].addEventListener('click', ascentRobotsListener);
    console.log('"robotsCallback" конец работы колбэка для роботов. Робот прикреплен <<<<<<<<<<<<<<<<<<<<<<<<<');
};

/*рендер робота в ячейку*/
var renderRobotsInCell = function (robot, robotType) {
    console.log('"renderRobotsInCell" начало отрисовки робота >>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(robot);
    console.log(robotType);
    var robotElement = similarRobotTemlate.cloneNode(true);
    var robotList = robotElement.querySelector('.robot__list');
    robotElement.querySelector('.robot__lvl').textContent = (getFirstProp(robotsObj[robotType][robot].mk1)).substr(3,1);
    robotElement.querySelector('.robot__name').textContent = robotsObj[robotType][robot].name;
    robotElement.querySelector('.robot__hp').textContent = robotsObj[robotType][robot].mk1[getFirstProp(robotsObj[robotType][robot].mk1)].hp;
    robotElement.querySelector('.robot__speed').textContent = robotsObj[robotType][robot].mk1[getFirstProp(robotsObj[robotType][robot].mk1)].speed;
    robotElement.querySelector('.robot__ability').textContent = robotsObj[robotType][robot].ability;
    robotElement.querySelector('.robot__img').src = "img/" + robot + "Small.png";
    robotList.appendChild(renderRobotList(robotsObj[robotType][robot]));
    console.log('"renderRobotsInCell" конец отрисовки робота <<<<<<<<<<<<<<<<<<<<<<<<<');
    return robotElement;
};

var weaponCallback = function (input, param) {
    console.log('"weaponCallback" начало работы колбэка для оружия >>>>>>>>>>>>>>>>>>>>>>>>>');
    console.log(param);
    /*сделать невидимой кнопку добавления робота*/
    document.getElementById(param).classList.add('visually-hidden');
    console.log('"weaponCallback"   скрыть кнопку добавления оружия');
    /*прикрепление отрисованного оружия в разметку*/
    document.getElementById(param).parentNode.appendChild(renderWeaponInCell(input.value, splitStr(param, 2)));
    // robotsCell[buttonId - 1].addEventListener('click', ascentRobotsListener);
    console.log('"weaponCallback" конец работы колбэка для оружия. Оружие прикреплено <<<<<<<<<<<<<<<<<<<<<<<<<');
};
/*рендер оружия в ячейку*/
var renderWeaponInCell = function (weapon, weaponType) {
    console.log('"renderWeaponInCell" начало отрисовки оружия >>>>>>>>>>>>>>>>>>>>>>>>>');
    var weaponElement = similarWeaponTemplate.cloneNode(true);
    weaponElement.querySelector('.robot__weapon-lvl').textContent = (getFirstProp(weaponsObj[weaponType][weapon].mk1)).substr(3,1);
    weaponElement.querySelector('.robot__weapon-name').textContent = weaponsObj[weaponType][weapon].name;
    weaponElement.querySelector('.robot__weapon-img').src = "img/" + weapon + "Small.png";
    console.log('"renderWeaponInCell" конец отрисовки оружия <<<<<<<<<<<<<<<<<<<<<<<<<');
    return weaponElement;
};

/*сменить елемент в ячейке*/
var changeElemInCell = function (evt, elem /*заменяемый элемент*/, buttonArr/*кнопка, которую показать*/, elemId/*элемент, с которого взять id*/) {
    console.log('"changeRobotInCell" начало замены элемента >>>>>>>>>>>>>>>>>>>>>>>>>');
    elem.parentNode.removeChild(elem.parentNode.lastChild);     /*удалить елемент из ячейки*/
    console.log('"changeRobotInCell"        удаление элементов из разметки');
    buttonId = elemId.id;
    console.log('"changeRobotInCell"        замена buttonId, теперь = ' + buttonId);
    buttonArr[buttonId - 1].classList.remove('visually-hidden');
    console.log('"changeRobotInCell"        показать кнопку в ячейке ' + (buttonId - 1));
    showRobotsChoice(evt);
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
        renderSelects(evt, weaponNames, weaponSelect, similarWeaponSelectTemplate, weaponCallback, evt.target.id, splitStr(evt.target.id, 2));
    });
    return similarWeapon;
};
//----------------------------------------------------------------------



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
        weaponSelect.appendChild(renderOneSelect(weaponNames[localId][i], similarWeaponSelectTemplate));
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


/*все обработчики на всплытии, которые есть в ячейке робота (отдельно, чтобы нормально удалялись при смене робота*/
var ascentRobotsListener = function (evt) {
    var elemForChenage = evt.target.parentNode.parentNode.parentNode;
    if (evt.target.className === 'robot__change-robot' /*&& evt.currentTarget.classList.contains('flag')*/) {
        changeElemInCell(evt, elemForChenage, robotAddArr, elemForChenage.parentNode);
    } else if (evt.target.className === 'robot__improve') {
        alert('пока не готово');
    } else if (evt.target.className === 'robot__uncover') {
        showOrHideHandler(evt);
    } else if (evt.target.className === 'robot__clear-robot' && evt.currentTarget.classList.contains('flag')) {
        // deleteRobotInCell(evt);
    }
};


//  1  переписать объекты аккуратности   +
//  2 по идее переделать логику удаления робота из ячейки (кнопка сменить не должна сама удалять его из верстки)
//    это должна делать функция добавления робота
//  3 надо бы добавить слушатели на кнопки для закрытия
//  4 добавить обработчики на выбор робота (enter и двойнок клик) (двойной клик +)