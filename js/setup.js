'use strict';

/* Создайте массив, состоящий из 4 сгенерированных JS объектов, которые будут описывать похожих персонажей. Объекты должны содержать следующие поля:
name, строка — случайно сгенерированное имя персонажа. Имя генерируется из массивов имен и фамилий: нужно случайным образом выбрать из массива имен имя, а из массива фамилий фамилию и сложить их. При желании имя и фамилию можно в случайном порядке менять местами:
Имена
Иван
Хуан Себастьян
Мария
Кристоф
Виктор
Юлия
Люпита
Вашингтон
Фамилии
да Марья
Верон
Мирабелла
Вальц
Онопко
Топольницкая
Нионго
Ирвинг
coatColor, строка — случайный цвет мантии на выбор из следующих:
rgb (101, 137, 164)
rgb (241, 43, 107)
rgb (146, 100, 161)
rgb (56, 159, 117)
rgb (215, 210, 55)
rgb (0, 0, 0)
eyesColor, строка — случайный цвет глаз персонажа на выбор из следующих:
black
red
blue
yellow
green
*/

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

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
var getWizardStats = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};
var wizards = [{
  name: getWizardStats(WIZARDS_NAMES) + ' ' + getWizardStats(WIZARDS_SURNAMES),
  coatColor: getWizardStats(COATS_COLOR),
  eyesColor: getWizardStats(EYES_COLOR)
},
{
  name: getWizardStats(WIZARDS_NAMES) + ' ' + getWizardStats(WIZARDS_SURNAMES),
  coatColor: getWizardStats(COATS_COLOR),
  eyesColor: getWizardStats(EYES_COLOR)
},
{
  name: getWizardStats(WIZARDS_NAMES) + ' ' + getWizardStats(WIZARDS_SURNAMES),
  coatColor: getWizardStats(COATS_COLOR),
  eyesColor: getWizardStats(EYES_COLOR)
},
{
  name: getWizardStats(WIZARDS_NAMES) + ' ' + getWizardStats(WIZARDS_SURNAMES),
  coatColor: getWizardStats(COATS_COLOR),
  eyesColor: getWizardStats(EYES_COLOR)
}
];
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  similarWizardList.appendChild(wizardElement);
}
