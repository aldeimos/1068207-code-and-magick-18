'use strict';
(function () {
  var userDialog = window.userDialog;
  var backendSave = window.backend.save;

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

  var successLoad = function () {
    userDialog.classList.add('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var onFormSubmitData = function (evt) {
    backendSave(new FormData(form), successLoad, errorHandler);
    evt.preventDefault();
  };
  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', onFormSubmitData);

  getPageActivated();

  window.setup = {
    errorHandler: errorHandler
  };
})();
