/**
 * @param {number} [zoom]
 *   The zoom factor. 1.0 means no zoom. Default: 1.2.
 * @param {number} [delay]
 *   The zoom/unzoom delay, in ms. Default: 300.
 *
 * @constructor
 */
function Zoomer(zoom, delay) {

  var _delay = (delay === undefined ? 300 : delay);
  var _zoom = (zoom === undefined ? 1.2 : zoom);
  var _size;

  /**
   * The interpolation parameters for zoom-in.
   */
  var tween_in;

  /**
   * The interpolation parameters for zoom-out
   */
  var tween_out;

  this.setup = function (selector) {
    var elements = jQuery(selector);

    _size = elements.width();
    tween_in = {
      'background-size': _size * _zoom + 'px'
    };
    tween_out = {
      'background-size': _size + 'px'
    };

    elements.css("background-size", _size + "px " + _size + "px").hover(
      function (event) { jQuery(event.currentTarget).animate(tween_in, _delay); },
      function (event) { jQuery(event.currentTarget).animate(tween_out, _delay); }
    );
  };
}
