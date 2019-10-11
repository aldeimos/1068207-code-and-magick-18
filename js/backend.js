'use strict';

(function () {
  window.backend = {
    load: function (onSuccess, onError) {
      var GET_URL = ' https://js.dump.academy/code-and-magick/data';

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      var formDownloadStatusHandler = function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response); // renderWizards(wizards)
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText); // errorHandler
        }
      };

      var formServerErrorHandler = function () {
        onError('Произошла ошибка соединения');
      };

      var formServerTimeoutHandler = function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      };
      xhr.addEventListener('load', formDownloadStatusHandler);

      xhr.addEventListener('error', formServerErrorHandler);
      xhr.addEventListener('timeout', formServerTimeoutHandler);

      xhr.timeout = 10000;

      xhr.open('GET', GET_URL);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var POST_URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      var formUploadStatusHandler = function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      };

      xhr.addEventListener('load', formUploadStatusHandler);

      xhr.open('POST', POST_URL);
      xhr.send(data);
    }
  };
})();
