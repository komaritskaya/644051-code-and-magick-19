'use strict';

(function () {
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

  var generateRandomWizards = function (count) {
    var selectedWizards = [];
    for (var i = 0; i < count; i++) {
      var randomWizard = {
        name: window.utils.getRandomItemFromArray(NAMES) + ' ' + window.utils.getRandomItemFromArray(SURNAMES),
        coatColor: window.utils.getRandomItemFromArray(COAT_COLORS),
        eyesColor: window.utils.getRandomItemFromArray(EYES_COLORS)
      };
      selectedWizards.push(randomWizard);
    }
    return selectedWizards;
  };

  window.data = {
    WIZARDS_COUNT: WIZARDS_COUNT,
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    generateRandomWizards: generateRandomWizards,
  };
})();
