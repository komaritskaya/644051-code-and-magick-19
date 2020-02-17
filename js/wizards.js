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
    wizardCoat.style.fill = wizard.colorCoat;
    wizardEyes.style.fill = wizard.colorEyes;
    return wizardElement;
  };

  var dataSuccessHandler = function (arr) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.data.WIZARDS_COUNT; i++) {
      fragment.appendChild(renderSingleSimilarWizard(arr[i]));
    }
    similarWizardsListElement.appendChild(fragment);
  };

  var dataErrorHandler = function (errorMessage) {
    var errorElement = document.createElement('div');
    errorElement.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    errorElement.style.position = 'absolute';
    errorElement.style.left = 0;
    errorElement.style.right = 0;
    errorElement.style.fontSize = '30px';
    errorElement.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', errorElement);
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

  var renderWizardsData = function () {
    window.backend.load(dataSuccessHandler, dataErrorHandler);
  };

  var clearWizardsData = function () {
    while (similarWizardsListElement.firstChild) {
      similarWizardsListElement.removeChild(similarWizardsListElement.firstChild);
    }
  };

  window.wizards = {
    renderWizardsData: renderWizardsData,
    clearWizardsData: clearWizardsData,
    dataErrorHandler: dataErrorHandler
  };
})();
