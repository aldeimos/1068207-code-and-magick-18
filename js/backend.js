'use strict';

(function () {
  window.backend = {
    load: function (onSuccess, onError) {
      var GET_URL = ' https://js.dump.academy/code-and-magick/data';

      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      var onFormDownload = function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response); // renderWizards(wizards)
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText); // errorHandler
        }
      };

      var onFormServerError = function () {
        onError('Произошла ошибка соединения');
      };

      var onFormServerTimeout = function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      };
      xhr.addEventListener('load', onFormDownload);

      xhr.addEventListener('error', onFormServerError);
      xhr.addEventListener('timeout', onFormServerTimeout);

      xhr.timeout = 10000;

      xhr.open('GET', GET_URL);
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var POST_URL = 'https://js.dump.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      var onFormUploadStatus = function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      };

      xhr.addEventListener('load', onFormUploadStatus);

      xhr.open('POST', POST_URL);
      xhr.send(data);
    }
  };
})();
