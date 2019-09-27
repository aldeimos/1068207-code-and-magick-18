'use strict';

var getPageActivated = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

getPageActivated();

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var dialogWizard = document.querySelector('.setup-wizard');

var dialogWizardButtonCoat = dialogWizard.querySelector('.wizard-coat');
var dialogWizardInputCoat = userDialog.querySelector('input[name=coat-color');

var dialogWizardButtonEyes = dialogWizard.querySelector('.wizard-eyes');
var dialogWizardInputEyes = userDialog.querySelector('input[name=eyes-color');

var dialogWizardButtonFireBall = userDialog.querySelector('.setup-fireball-wrap');
var dialogWizardInputFireBall = userDialog.querySelector('input[name=fireball-color]');



var wizardСlothesChange = function (wizardItem, wizardInput, arrayColors) {
  wizardItem.addEventListener('click', function () {
    var color = getRandomElement(arrayColors);
    wizardItem.style.fill = color;
    wizardInput.value = color;
  });
};

var wizardFireballChange = function (wizardItem, wizardInput, arrayColors) {
  wizardItem.addEventListener('click', function () {
    var color = getRandomElement(arrayColors);
    wizardItem.style.background = color;
    wizardInput.value = color;
  });
};


var ESC__KEYCODE = 27;
var ENTER__KEYCODE = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC__KEYCODE) {
    closeUserDialog();
  }
};

var openUserDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closeUserDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openUserDialog();
  wizardСlothesChange(dialogWizardButtonCoat, dialogWizardInputCoat, COATS_COLOR);
  wizardСlothesChange(dialogWizardButtonEyes, dialogWizardInputEyes, EYES_COLOR);
  wizardFireballChange(dialogWizardButtonFireBall, dialogWizardInputFireBall, FIREBALLS__COLOR);
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER__KEYCODE) {
    openUserDialog();
    wizardСlothesChange(dialogWizardButtonCoat, dialogWizardInputCoat, COATS_COLOR);
    wizardСlothesChange(dialogWizardButtonEyes, dialogWizardInputEyes, EYES_COLOR);
    wizardFireballChange(dialogWizardButtonFireBall, dialogWizardInputFireBall, FIREBALLS__COLOR);
  }
});

userDialogClose.addEventListener('click', function () {
  closeUserDialog();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER__KEYCODE) {
    closeUserDialog();
  }
});

userNameInput.addEventListener('keydown', function (evt) {
  evt.stopPropagation();
});

var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');
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
var FIREBALLS__COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizard = function () {
  return {
    name: getRandomElement(WIZARDS_NAMES) + ' ' + getRandomElement(WIZARDS_SURNAMES),
    coatColor: getRandomElement(COATS_COLOR),
    eyesColor: getRandomElement(EYES_COLOR)
  };
};

var wizards = [];

for (var i = 0; i < 4; i++) {
  wizards[i] = getRandomWizard();
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

wizards.forEach(function (item, j) {
  fragment.appendChild(renderWizard(wizards[j]));
});

similarWizardList.appendChild(fragment);


