'use strict';

var getMaxElement = function (arr) {
  return Math.max.apply(null, arr);
};

var getRandom = function (number) {
  return Math.ceil(Math.random() * number);
};

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var COLUMN_WIDTH = 40;

  var getBlueWithRandomSaturation = function () {
    return 'hsl(240, ' + getRandom(100) + '%, 50%)';
  };

  var renderText = function (strings, color, x, y) {
    var FONT_PROPERTIES = ['16px', 'PT Mono'];
    var LINE_HEIGHT = 20;
    var BASIC_FONT_COLOR = '#000';
    var TOP_TEXT_X_POS = CLOUD_X + 50;
    var TOP_TEXT_Y_POS = 40;
    x = x || TOP_TEXT_X_POS;
    y = y || TOP_TEXT_Y_POS;
    ctx.font = FONT_PROPERTIES.join(' ');
    ctx.fillStyle = color || BASIC_FONT_COLOR;
    strings.forEach(function (string, index) {
      ctx.fillText(string, x, y + (LINE_HEIGHT * index));
    });
  };

  var renderTopText = function () {
    var TOP_TEXT_STRINGS = ['Ура вы победили!', 'Список результатов:'];
    renderText(TOP_TEXT_STRINGS);
  };

  var renderCloud = function (x, y, color) {
    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderCloudWithShadow = function () {
    var GAP = 10;
    var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';
    var SHADOW_COLOR = 'rgba(0, 0, 0, 0.3)';
    renderCloud(CLOUD_X + GAP, CLOUD_Y + GAP, SHADOW_COLOR);
    renderCloud(CLOUD_X, CLOUD_Y, CLOUD_COLOR);
  };

  var renderColumn = function (left, bottom, columnHeight, color) {
    ctx.fillStyle = color;
    ctx.fillRect(left, bottom - columnHeight, COLUMN_WIDTH, columnHeight);
  };

  var renderHist = function (columnHeight, left, name, time) {
    var HISTOGRAM_BASE = 250;
    var MY_COLOR = 'rgba(255, 0, 0, 1)';
    var userTimeTextY = HISTOGRAM_BASE - columnHeight - 10;
    var userNameTextY = HISTOGRAM_BASE + 20;
    var color = name === 'Вы' ? MY_COLOR : getBlueWithRandomSaturation();
    time = Math.round(time);
    renderText([time], color, left, userTimeTextY);
    renderText([name], color, left, userNameTextY);
    renderColumn(left, HISTOGRAM_BASE, columnHeight, color);
  };

  var renderHistogram = function () {
    var HISTOGRAM_LEFT = CLOUD_X + 50;
    var COLUMN_HEIGHT = 150;
    var COLUMN_GAP = 50;
    var maxTime = getMaxElement(times);
    names.forEach(function (name, i) {
      var time = times[i];
      var currentColumnHeight = time / maxTime * COLUMN_HEIGHT;
      var currentColumnX = HISTOGRAM_LEFT + (i * (COLUMN_WIDTH + COLUMN_GAP));
      renderHist(currentColumnHeight, currentColumnX, name, time);
    });
  };
  var init = function () {
    renderCloudWithShadow();
    renderTopText();
    renderHistogram();
  };

  init();

};
