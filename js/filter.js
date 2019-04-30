"use strict";

// Файл отвечает за работу фильтра

(function () {

   var agePin = document.querySelector('.filter__age-pin-min');
   var ageLine = document.querySelector('.filter__age-level');
   var filterAge = document.querySelector('.filter__age');
   
   var pricePinMin = document.querySelector('.filter__pin-min');
   var pricePinMax = document.querySelector('.filter__pin-max');
   var filterLine = document.querySelector('.filter__line');
   var priceLine = document.querySelector('.filter__level');
   var priceMin = document.querySelector('.filter__range-min');
   var priceMax = document.querySelector('.filter__range-max');
   
   var getPrice = function (num, width, line) {
       return line / width * num;
   };


    /* добавляем обработчик перемещения пина возраста фильтра (сразу с объявлением) */
    agePin.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX      /* координата х кликнутого места */
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX
            };

            startCoords = {
                x: moveEvt.clientX
            };

            agePin.style.left = (agePin.offsetLeft - shift.x) + 'px';

            /* границы перемещения ползунка */
            if (agePin.offsetLeft < 20) {
                agePin.style.left = 20 + 'px';
            } else if (agePin.offsetLeft > ageLine.clientWidth) {
                agePin.style.left = ageLine.clientWidth + 'px';
            }
            

            filterAge.style.left = 8 + Number((agePin.style.left).slice(0, -2)) + 'px'; /* чтобы добавить 10 к *.px */
            filterAge.textContent = Math.floor(Number((agePin.style.left).slice(0, -2)) / 12);  /* чтобы получить ровное число возраста */
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    
    
    /* добавляем обработчик перемещения пина минимальной цены фильтра (сразу с объявлением) */
    pricePinMin.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX      /* координата х кликнутого места */
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();
            
            var shift = {
                x: startCoords.x - moveEvt.clientX
            };

            startCoords = {
                x: moveEvt.clientX
            };

            pricePinMin.style.left = (pricePinMin.offsetLeft - shift.x) + 'px';
            
            /* границы перемещения ползунка */
            if (pricePinMin.offsetLeft > pricePinMax.offsetLeft) {
                pricePinMin.style.left = pricePinMax.offsetLeft + 'px';
                pricePinMin.style.zIndex = 3;
                pricePinMax.style.zIndex = 2;
            } else if (pricePinMin.offsetLeft < -10) {
                pricePinMin.style.left = -10 + 'px';
            } else if (pricePinMin.offsetLeft > filterLine.clientWidth - 20) {
                pricePinMin.style.left = filterLine.clientWidth - 20 + 'px';
            }

            /* как менять цену */
            priceMin.value = Math.round(((pricePinMin.offsetLeft + 10) / (filterLine.clientWidth - 10)) * 200) * 500;
            
            /* как меня крашенную полоску цены */
            
            priceLine.style.left = (pricePinMin.offsetLeft + 10) + 'px';    /* положение слева */
            // priceLine.style.width = priceMin.value + 10 / 208000;
            // priceLine.style.width = priceLine.style.width - (((pricePinMin.offsetLeft + 10) / (filterLine.clientWidth - 10))) * 100 + '%';    /* ширина */
        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    

    /* добавляем обработчик перемещения пина максимальной цены фильтра (сразу с объявлением) */
    pricePinMax.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoords = {
            x: evt.clientX      /* координата х кликнутого места */
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoords.x - moveEvt.clientX
            };

            startCoords = {
                x: moveEvt.clientX
            };

            pricePinMax.style.left = (pricePinMax.offsetLeft - shift.x) + 'px';


            if (pricePinMax.offsetLeft < pricePinMin.offsetLeft) {
                pricePinMax.style.left = pricePinMin.offsetLeft + 'px';
                pricePinMin.style.zIndex = 2;
                pricePinMax.style.zIndex = 3;
            } else if (pricePinMax.offsetLeft < -10) {
                pricePinMax.style.left = -10 + 'px';
            } else if (pricePinMax.offsetLeft > filterLine.clientWidth - 20) {
                pricePinMax.style.left = filterLine.clientWidth - 20 + 'px';
            }

            // if (pricePinMax.offsetLeft < pricePinMin.offsetLeft) {
            //     pricePinMax.style.left = Number((pricePinMax.style.left).slice(0, -2)) + 'px';
            // } else {
            //     // pricePinMax.style.left = (pricePinMax.offsetLeft - shift.x) + 'px';
            // }
            // -----------------------------------
            
            // if (pricePinMax.offsetLeft < -10) {
            //     pricePinMax.style.left = -10 + 'px';
            // } else if (pricePinMax.offsetLeft > filterLine.clientWidth - 20) {
            //     pricePinMax.style.left = filterLine.clientWidth - 20 + 'px';
            // }
            //
            // if (pricePinMax.offsetLeft < pricePinMin.offsetLeft) {
            //     pricePinMax.style.left = Number((pricePinMax.style.left).slice(0, -2)) + 'px';
            // } else {
            //     // pricePinMax.style.left = (pricePinMax.offsetLeft - shift.x) + 'px';
            // }

            priceMax.value = Math.round(((pricePinMax.offsetLeft + 10) / (filterLine.clientWidth - 10)) * 200) * 500;  /* чтобы менялась цена */ /* чтобы менялась цена */
            /* как менять правый край полоски */
            priceLine.style.right = 198/*ширина полоски*/ - pricePinMax.offsetLeft + 'px';

        };

        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    
    
})();