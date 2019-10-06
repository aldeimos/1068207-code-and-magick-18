'use strict';

(function () {
  window.getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
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
      }
    };
  })();
})();
