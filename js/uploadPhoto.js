'use strict';

(function () {
  var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  var uploadPhotoButton = document.querySelector('.upload input[type=file]');
  var preview = document.querySelector('.setup-user-pic');

  var onChangeAvatar = function () {
    var file = uploadPhotoButton.files[0];
    var fileName = file.name.toLowerCase();

    var onLoadAvatar = function () {
      preview.src = reader.result;
    };

    if (file) {
      var matches = FILE_TYPES.some(function (it) {
        return fileName.endsWith(it);
      });
    }
    if (matches) {
      var reader = new FileReader();
      reader.addEventListener('load', onLoadAvatar);
      reader.readAsDataURL(file);
    }
  };

  uploadPhotoButton.addEventListener('change', onChangeAvatar);
})();
