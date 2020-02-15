'use strict';

(function () {
  var similarWizardTemplateElement = document.querySelector('#similar-wizard-template');
  var similarWizardsListElement = document.querySelector('.setup-similar-list');
  var wizardCoatElement = window.setup.setupElement.querySelector('.wizard-coat');
  var wizardEyesElement = window.setup.setupElement.querySelector('.wizard-eyes');
  var wizardFireballElement = window.setup.setupElement.querySelector('.setup-fireball-wrap');

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

  wizardCoatElement.addEventListener('click', function () {
    wizardCoatElement.style.fill = window.utils.getRandomItemFromArray(window.data.COAT_COLORS);
  });
  wizardEyesElement.addEventListener('click', function () {
    wizardEyesElement.style.fill = window.utils.getRandomItemFromArray(window.data.EYES_COLORS);
  });
  wizardFireballElement.addEventListener('click', function () {
    wizardFireballElement.style.backgroundColor = window.utils.getRandomItemFromArray(window.data.FIREBALL_COLORS);
  });

  renderMultipleSimilarWizards(window.data.generateRandomWizards(window.data.WIZARDS_COUNT));
})();
