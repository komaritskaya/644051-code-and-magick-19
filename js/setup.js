'use strict';

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

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
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var setupElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');
var similarWizardTemplateElement = document.querySelector('#similar-wizard-template');
var similarWizardsListElement = document.querySelector('.setup-similar-list');
var setupOpenElement = document.querySelector('.setup-open');
var setupOpenIconElement = setupOpenElement.querySelector('.setup-open-icon');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupUserNameInputElement = setupElement.querySelector('.setup-user-name');
var wizardCoatElement = setupElement.querySelector('.wizard-coat');
var wizardEyesElement = setupElement.querySelector('.wizard-eyes');
var wizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');


var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getRandomItemFromArray = function (arr) {
  return arr[getRandomInt(0, arr.length - 1)];
};


var generateRandomWizards = function (count) {
  var selectedWizards = [];
  for (var i = 0; i < count; i++) {
    var randomWizard = {
      name: getRandomItemFromArray(NAMES) + ' ' + getRandomItemFromArray(SURNAMES),
      coatColor: getRandomItemFromArray(COAT_COLORS),
      eyesColor: getRandomItemFromArray(EYES_COLORS)
    };
    selectedWizards.push(randomWizard);
  }
  return selectedWizards;
};

var renderSingleSimilarWizard = function (wizard) {
  var wizardElement = similarWizardTemplateElement.content.cloneNode(true);
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
  similarWizardsListElement.appendChild(fragment);
};

var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', popupEscPressHandler);
};

var closePopup = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', popupEscPressHandler);
};

var popupEscPressHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && document.activeElement !== setupUserNameInputElement) {
    closePopup();
  }
};

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupOpenIconElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoatElement.addEventListener('click', function () {
  wizardCoatElement.style.fill = getRandomItemFromArray(COAT_COLORS);
});
wizardEyesElement.addEventListener('click', function () {
  wizardEyesElement.style.fill = getRandomItemFromArray(EYES_COLORS);
});
wizardFireballElement.addEventListener('click', function () {
  wizardFireballElement.style.backgroundColor = getRandomItemFromArray(FIREBALL_COLORS);
});

renderMultipleSimilarWizards(generateRandomWizards(WIZARDS_COUNT));
setupSimilarElement.classList.remove('hidden');
