'use strict';

var WIZARDS_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
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

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var dialogWizard = document.querySelector('.setup-wizard');
var dialogWizardButtonEyes = dialogWizard.querySelector('.wizard-eyes');
var dialogWizardButtonCoat = dialogWizard.querySelector('.wizard-coat');
var dialogWizardButtonFireBall = userDialog.querySelector('.setup-fireball-wrap');

var getPageActivated = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    closeUserDialog();
  }
};

var openUserDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var openUserDialogByEnter = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openUserDialog();
  }
};

var closeUserDialogByEnter = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeUserDialog();
  }
};

var closeUserDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

userDialogOpen.addEventListener('click', openUserDialog);

userDialogOpen.addEventListener('keydown', openUserDialogByEnter);

userDialogClose.addEventListener('click', closeUserDialog);

userDialogClose.addEventListener('keydown', closeUserDialogByEnter);


var onWizardCoatClick = function () {
  var dialogWizardInputCoat = userDialog.querySelector('input[name=coat-color');
  var color = getRandomElement(COATS_COLOR);
  dialogWizardButtonCoat.style.fill = color;
  dialogWizardInputCoat.value = color;
};

var onWizardEyeClick = function () {
  var dialogWizardInputEyes = userDialog.querySelector('input[name=eyes-color');

  var color = getRandomElement(EYES_COLOR);
  dialogWizardButtonEyes.style.fill = color;
  dialogWizardInputEyes.value = color;
};

var onWizardFireballClick = function () {
  var dialogWizardInputFireBall = userDialog.querySelector('input[name=fireball-color]');
  var color = getRandomElement(FIREBALLS_COLOR);
  dialogWizardButtonFireBall.style.background = color;
  dialogWizardInputFireBall.value = color;
};


var setListenersOnWizard = function () {
  dialogWizardButtonCoat.addEventListener('click', onWizardCoatClick);
  dialogWizardButtonEyes.addEventListener('click', onWizardEyeClick);
  dialogWizardButtonFireBall.addEventListener('click', onWizardFireballClick);
};


var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizard = function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var objectTemplate = {
      name: getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES),
      coatColor: getRandomElement(COATS_COLOR),
      eyesColor: getRandomElement(EYES_COLOR)
    };
    wizards.push(objectTemplate);
  }
  return wizards;
};

var renderWizard = function (wizard) {
  var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderWizards = function (array) {
  var similarWizardList = document.querySelector('.setup-similar-list');
  var fragment = document.createDocumentFragment();
  array.forEach(function (item) {
    fragment.appendChild(renderWizard(item));
  });
  similarWizardList.appendChild(fragment);
};

var wizards = getRandomWizard(4);

renderWizards(wizards);

setListenersOnWizard();

getPageActivated();
