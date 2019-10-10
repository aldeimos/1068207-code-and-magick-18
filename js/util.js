'use strict';

(function () {
  window.getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };
  var shuffleArray = function (array, min, max) {
    var tempArray = array;
    for (var i = tempArray.length - 1; i > 0; i--) {
      var j = getRandomNumber(i);
      var temp = tempArray[i];
      tempArray[i] = tempArray[j];
      tempArray[j] = temp;
    }
    return tempArray.slice(min, max);
  };
  var getRandomNumber = function (number) {
    return Math.floor(Math.random() * (number + 1));
  };
  window.util = (function () {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    return {
      isEscEvent: function (evt, action, activeElement) {
        if (evt.keyCode === ESC_KEYCODE && activeElement !== document.activeElement) {
          action();
        }
      },
      isEnterEvent: function (evt, action) {
        if (evt.keyCode === ENTER_KEYCODE) {
          action();
        }
      },
      getRandomNumber: getRandomNumber,
      shuffleArray: shuffleArray
    };
  })();
})();
