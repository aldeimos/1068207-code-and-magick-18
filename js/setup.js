'use strict';
(function () {
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

  getPageActivated();
})();
