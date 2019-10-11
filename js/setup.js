'use strict';
(function () {

  var userDialog = window.userDialog;
  var backendSave = window.backend.save;
  var errorHandler = window.util.errorHandler;

  var getPageActivated = function () {
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.fireballSize = 22;
  window.wizardSpeed = 3;
  var wizardWidth = 70;

  window.getFireballSpeed = function (left) {
    return left ? 5 : 2;
  };

  window.getWizardHeight = function (widthWizard) {
    return 1.337 * widthWizard;
  };

  window.getWizardX = function (width) {
    return (width - wizardWidth) / 2;
  };
  window.getWizardY = function (height) {
    return height / 3;
  };

  var successLoad = function (_response) { // Тут пришлось ставить префикс, иначе линтер просто не пропускает эту переменную. Мол она объявлена, но нигде не используется
    userDialog.classList.add('hidden');
  };

  var dataHandler = function (evt) {
    backendSave(new FormData(form), successLoad, errorHandler);
    evt.preventDefault();
  };
  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', dataHandler);

  getPageActivated();
})();
