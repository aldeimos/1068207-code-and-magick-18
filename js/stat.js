'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var RECT_WIDTH = 40;
var RECT_HEIGHT = 150;
var RECT_X = 140;
var RECT_Y = 80;
var PLAYER_NAME_X = 140;
var PLAYER_NAME_Y = 250;
var GENERAL_GRAPH_GAP = 95;
var TIMES_TITLE_GAP = 7;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


window.renderStatistics = function (ctx, names, times) {
  for (var i = 0; i <= times.length - 2; i++) {
    var minValue = times[i];
    for (var j = i + 1; j <= times.length - 1; j++) {
      if (times[j] < minValue) {
        minValue = times[j];
        var swap = times[i];
        times[i] = minValue;
        times[j] = swap;
      }
    }
  }
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var index = 0; index < names.length; index++) {
    if (names[index] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(RECT_X + (GENERAL_GRAPH_GAP * index), (RECT_Y + RECT_HEIGHT - (RECT_HEIGHT * times[index]) / times[times.length - 1]), RECT_WIDTH, (RECT_HEIGHT * times[index]) / times[times.length - 1]);
      ctx.fillStyle = '#000000';
      ctx.fillText(Math.floor(times[index]), RECT_X + (GENERAL_GRAPH_GAP * index), (RECT_Y + RECT_HEIGHT - (RECT_HEIGHT * times[index]) / times[times.length - 1]) - TIMES_TITLE_GAP);
      ctx.fillText(names[index], PLAYER_NAME_X + (GENERAL_GRAPH_GAP * index), PLAYER_NAME_Y);
    } else {
      ctx.fillStyle = 'hsl(222, ' + Math.floor(Math.random() * 100) + '%' + ', 39%)';
      ctx.fillRect(RECT_X + (GENERAL_GRAPH_GAP * index), (RECT_Y + RECT_HEIGHT - (RECT_HEIGHT * times[index]) / times[times.length - 1]), RECT_WIDTH, (RECT_HEIGHT * times[index]) / times[times.length - 1]);
      ctx.fillStyle = '#000000';
      ctx.fillText(Math.floor(times[index]), RECT_X + (GENERAL_GRAPH_GAP * index), (RECT_Y + RECT_HEIGHT - (RECT_HEIGHT * times[index]) / times[times.length - 1]) - TIMES_TITLE_GAP);
      ctx.fillText(names[index], PLAYER_NAME_X + (GENERAL_GRAPH_GAP * index), PLAYER_NAME_Y);
    }
  }


  /* ctx.fillStyle = '#000';
  ctx.fillText(names[0], PLAYER_NAME_X, PLAYER_NAME_Y);

  ctx.fillStyle = '#000';
  ctx.fillText(names[1], PLAYER_NAME_X + GENERAL_GRAPH_GAP, PLAYER_NAME_Y);
  ctx.fillRect(RECT_X + GENERAL_GRAPH_GAP, RECT_Y, RECT_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText(names[2], PLAYER_NAME_X + GENERAL_GRAPH_GAP * 2, PLAYER_NAME_Y);
  ctx.fillRect(RECT_X + GENERAL_GRAPH_GAP * 2, RECT_Y, RECT_WIDTH, 150);

  ctx.fillStyle = '#000';
  ctx.fillText(names[3], PLAYER_NAME_X + GENERAL_GRAPH_GAP * 3, PLAYER_NAME_Y);
  ctx.fillRect(RECT_X + GENERAL_GRAPH_GAP * 3, RECT_Y, RECT_WIDTH, 150); */


};
