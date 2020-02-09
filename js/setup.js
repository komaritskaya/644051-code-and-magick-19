'use strict';

var WIZARDS_COUNT = 4;
var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];
var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomBool = function () {
  return Math.random() < 0.5;
};

var getRandomItemFromArray = function (arr) {
  var index = getRandomInt(0, arr.length - 1);
  return arr[index];
};

var setup = document.querySelector('.setup');
var setupSimilar = document.querySelector('.setup-similar');
var similarWizardTemplate = document.querySelector('#similar-wizard-template');
var similarWizardsList = document.querySelector('.setup-similar-list');

var generateRandomWizards = function (count) {
  var selectedWizards = [];
  for (var i = 0; i < count; i++) {
    var wizardName = getRandomBool
      ? getRandomItemFromArray(NAMES) + ' ' + getRandomItemFromArray(SURNAMES)
      : getRandomItemFromArray(SURNAMES) + ' ' + getRandomItemFromArray(NAMES);
    var randomWizard = {
      name: wizardName,
      coatColor: getRandomItemFromArray(COAT_COLORS),
      eyesColor: getRandomItemFromArray(EYES_COLORS)
    };
    selectedWizards.push(randomWizard);
  }
  return selectedWizards;
};

var renderSingleSimilarWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.content.cloneNode(true);
  var wizardLabel = wizardElement.querySelector('.setup-similar-label');
  var wizardCoat = wizardElement.querySelector('.wizard-coat');
  var wizardEyes = wizardElement.querySelector('.wizard-eyes');
  wizardLabel.textContent = wizard.name;
  wizardCoat.style.fill = wizard.coatColor;
  wizardEyes.style.fill = wizard.eyesColor;
  return wizardElement;
};

var renderMultipleSimilarWizards = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderSingleSimilarWizard(arr[i]));
  }
  similarWizardsList.appendChild(fragment);
};

setup.classList.remove('hidden');
renderMultipleSimilarWizards(generateRandomWizards(WIZARDS_COUNT));
setupSimilar.classList.remove('hidden');
