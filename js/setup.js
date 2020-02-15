'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var setupSimilarElement = document.querySelector('.setup-similar');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupOpenIconElement = setupOpenElement.querySelector('.setup-open-icon');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupUserNameInputElement = setupElement.querySelector('.setup-user-name');

  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHandler);
  };

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === window.utils.ESC_KEYCODE && document.activeElement !== setupUserNameInputElement) {
      closePopup();
    }
  };

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenIconElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.utils.ENTER_KEYCODE) {
      closePopup();
    }
  });

  setupSimilarElement.classList.remove('hidden');

  window.setup = {
    setupElement: setupElement,
  };
})();
