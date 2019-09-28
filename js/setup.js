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
var FIREBALLS__COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ESC__KEYCODE = 27;
var ENTER__KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
var userNameInput = document.querySelector('.setup-user-name');

var similarWizardList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

var wizards = [];

var getPageActivated = function () {
  document.querySelector('.setup-similar').classList.remove('hidden');
};

var onWizardCoatClick = function (arrayColors) {
  var dialogWizard = document.querySelector('.setup-wizard');
  var dialogWizardButtonCoat = dialogWizard.querySelector('.wizard-coat');
  var dialogWizardInputCoat = userDialog.querySelector('input[name=coat-color');
  dialogWizardButtonCoat.addEventListener('click', function () {
    var color = getRandomElement(arrayColors);
    dialogWizardButtonCoat.style.fill = color;
    dialogWizardInputCoat.value = color;
  });
};

var onWizardEyesClick = function (arrayColors) {
  var dialogWizard = document.querySelector('.setup-wizard');
  var dialogWizardButtonEyes = dialogWizard.querySelector('.wizard-eyes');
  var dialogWizardInputEyes = userDialog.querySelector('input[name=eyes-color');

  dialogWizardButtonEyes.addEventListener('click', function () {
    var color = getRandomElement(arrayColors);
    dialogWizardButtonEyes.style.fill = color;
    dialogWizardInputEyes.value = color;
  });
};

var onWizardFireballClick = function (arrayColors) {
  var dialogWizardButtonFireBall = userDialog.querySelector('.setup-fireball-wrap');
  var dialogWizardInputFireBall = userDialog.querySelector('input[name=fireball-color]');
  dialogWizardButtonFireBall.addEventListener('click', function () {
    var color = getRandomElement(arrayColors);
    dialogWizardButtonFireBall.style.background = color;
    dialogWizardInputFireBall.value = color;
  });
};

var setListenersOnWizard = function () {
  onWizardCoatClick(COATS_COLOR);
  onWizardEyesClick(EYES_COLOR);
  onWizardFireballClick(FIREBALLS__COLOR);
};

var onPopupEscPress = function (evt) {
  if (userNameInput === document.activeElement) {
    document.removeEventListener('keydown');
  }
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
  setListenersOnWizard();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER__KEYCODE) {
    openUserDialog();
    setListenersOnWizard();
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

var renderWizards = function (array) {
  var fragment = document.createDocumentFragment();
  array.forEach(function (item) {
    fragment.appendChild(renderWizard(item));
  });
  similarWizardList.appendChild(fragment);
};

renderWizards(wizards);

getPageActivated();
