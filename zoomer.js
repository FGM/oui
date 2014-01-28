/**
 * @param {int} size
 *   The size of the square image, in px.
 * @param {int} increment
 *   The zoom increment, in px.
 * @param {int} delay
 *   The zoom/unzoom delay, in ms.
 *
 * @constructor
 */
function Zoomer(size, increment, delay) {

  var _size = size;
  var _increment = increment;
  var _delay = delay;

  var zoomin = function (event) {
    var jTarget = jQuery(event.currentTarget);

    var tween = {
      'background-size': '+=' + 2 * _increment + 'px',
      'background-position-x': '-' + _increment + 'px',
      'background-position-y': '-' + _increment + 'px'
    };

    jTarget.animate(tween, this, _delay);
    console.log('zooming', tween);
  };

  var zoomout = function (event) {
    var jTarget = jQuery(event.currentTarget);
    var tween = {
      'background-size': _size + 'px',
      'background-position-x': '0',
      'background-position-y': '0'
    };
    jTarget.animate(tween, _delay);
    console.log('unzooming', tween);
  };

  this.setup = function (selector) {
    jQuery(selector).hover(zoomin, zoomout);
  };
}
