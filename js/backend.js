'use strict';

(function () {
  var URL_GET = 'https://js.dump.academy/code-and-magick/data';
  var URL_SET = 'https://js.dump.academy/code-and-magick';
  var StatusCode = {
    OK: 200
  };
  var TIMEOUT_IN_MS = 10000;

  var handleRequest = function (request, onLoad, onError) {
    request.addEventListener('load', function () {
      if (request.status === StatusCode.OK) {
        onLoad(request.response);
      } else {
        onError('Статус ответа: ' + request.status + ' ' + request.statusText);
      }
    });
    request.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    request.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + request.timeout + 'мс');
    });
    request.timeout = TIMEOUT_IN_MS;
  };

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    handleRequest(xhr, onLoad, onError);
    xhr.open('GET', URL_GET);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    handleRequest(xhr, onLoad, onError);
    xhr.open('POST', URL_SET);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
