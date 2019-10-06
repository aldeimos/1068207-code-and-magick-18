'use strict';
(function () {

  window.userDialog = document.querySelector('.setup');
  var userDialogX = 50 + '%';
  var userDialogY = 80 + 'px';
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = window.userDialog.querySelector('.setup-close');
  window.userNameInput = document.querySelector('.setup-user-name');
  var onDialogMouseDown = window.userDialog.querySelector('.upload');
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closeUserDialog, window.userNameInput);
  };

  var openUserDialog = function () {
    window.userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var openUserDialogByEnter = function (evt) {
    window.util.isEnterEvent(evt, openUserDialog);
  };

  var closeUserDialogByEnter = function (evt) {
    window.util.isEnterEvent(evt, closeUserDialog);
    returnDialogToStart();
  };

  var closeUserDialog = function () {
    window.userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    returnDialogToStart();
  };

  var returnDialogToStart = function () {
    window.userDialog.style.left = userDialogX;
    window.userDialog.style.top = userDialogY;
  };

  onDialogMouseDown.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var starsCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: starsCoords.x - moveEvt.clientX,
        y: starsCoords.y - moveEvt.clientY
      };

      starsCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      window.userDialog.style.top = (window.userDialog.offsetTop - shift.y) + 'px';
      window.userDialog.style.left = (window.userDialog.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          onDialogMouseDown.removeEventListener('click', onClickPreventDefault);
        };
        onDialogMouseDown.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  userDialogOpen.addEventListener('click', openUserDialog);

  userDialogOpen.addEventListener('keydown', openUserDialogByEnter);

  userDialogClose.addEventListener('click', closeUserDialog);

  userDialogClose.addEventListener('keydown', closeUserDialogByEnter);
})();
