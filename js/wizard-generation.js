'use strict';
(function () {

  var COATS_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(215, 0, 0)'
  ];

  var EYES_COLOR = ['black', 'red', 'yellow', 'blue', 'green'];
  var FIREBALLS_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var shuffleArray = window.util.shuffleArray;
  var backendLoad = window.backend.load;
  var errorHandler = window.backend.errorHandler;

  var dialogWizard = document.querySelector('.setup-wizard');
  var dialogWizardButtonEyes = dialogWizard.querySelector('.wizard-eyes');
  var dialogWizardButtonCoat = dialogWizard.querySelector('.wizard-coat');
  var dialogWizardButtonFireBall = window.userDialog.querySelector('.setup-fireball-wrap');

  var onWizardCoatClick = function () {
    var dialogWizardInputCoat = window.userDialog.querySelector('input[name=coat-color');
    var color = window.getRandomElement(COATS_COLOR);
    dialogWizardButtonCoat.style.fill = color;
    dialogWizardInputCoat.value = color;
  };

  var onWizardEyeClick = function () {
    var dialogWizardInputEyes = window.userDialog.querySelector('input[name=eyes-color');

    var color = window.getRandomElement(EYES_COLOR);
    dialogWizardButtonEyes.style.fill = color;
    dialogWizardInputEyes.value = color;
  };

  var onWizardFireballClick = function () {
    var dialogWizardInputFireBall = window.userDialog.querySelector('input[name=fireball-color]');
    var color = window.getRandomElement(FIREBALLS_COLOR);
    dialogWizardButtonFireBall.style.background = color;
    dialogWizardInputFireBall.value = color;
  };


  var setListenersOnWizard = function () {
    dialogWizardButtonCoat.addEventListener('click', onWizardCoatClick);
    dialogWizardButtonEyes.addEventListener('click', onWizardEyeClick);
    dialogWizardButtonFireBall.addEventListener('click', onWizardFireballClick);
  };

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var successHandler = function (wizards) {
    var similarWizardList = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    var shuffledWizardsArray = shuffleArray(wizards, 0, 3);
    for (var i = 0; i <= shuffledWizardsArray.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarWizardList.appendChild(fragment);
  };
  backendLoad(successHandler, errorHandler);
  setListenersOnWizard();
})();