'use strict';

(function () {
  var lastTimeout;
  window.util = (function () {
    var ESC_KEYCODE = 27;
    var ENTER_KEYCODE = 13;
    var DEBOUNCE_INTERVAL = 300;
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

      getRandomNumber: function (number) {
        return Math.floor(Math.random() * (number + 1));
      },

      shuffleArray: function (array) {
        var tempArray = array;
        for (var i = tempArray.length - 1; i > 0; i--) {
          var j = window.util.getRandomNumber(i);
          var temp = tempArray[i];
          tempArray[i] = tempArray[j];
          tempArray[j] = temp;
        }
        return tempArray;
      },
      getRandomElement: function (array) {
        return array[Math.floor(Math.random() * array.length)];
      },
      debounce: function (cb) {
        if (lastTimeout) {
          window.clearTimeout(lastTimeout);
        }
        lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
      }
    };
  })();
})();
