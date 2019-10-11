'use strict';

(function () {
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
      errorHandler: function (errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';

        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
      }
    };
  })();
})();
