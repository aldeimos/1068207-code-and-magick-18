'use strict';

var getPageActivated = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');

  document.querySelector('.setup-similar').classList.remove('hidden');
};

getPageActivated();

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

wizards.forEach(function (item, j) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[j].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[j].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[j].eyesColor;
  similarWizardList.appendChild(wizardElement);
});
