/**
 * rotate becomes the function that
 * is exposed
 */

var rotate = (function () {
  var el = document.createElement('div');
  var style = el.style;
  var css3Prop = 
    (style.transform       !== undefined && 'transform')       ||
    (style.webkitTransform !== undefined && 'webkitTransform') ||
    (style.MozTransform    !== undefined && 'MozTransform')    ||
    (style.msTransform     !== undefined && 'msTransform');

  if (css3Prop) {
    return makeCSS3Rotate(css3Prop);
  } else {
    // TODO implement rotation support for < IE8 ?
    return function () {};
  }
})();

/**
 * Returns a function that takes an element
 * and rotates it by degrees, based off of
 * CSS3 syntax on style property `prop`
 *
 * @param {String} prop
 * @return {Function}
 * @api private
 */

function makeCSS3Rotate (prop) {
  return function (el, deg) {
    el.style[ prop ] = 'rotate(' + deg + 'deg)';
  };
}

/**
 * Expose generated rotate function
 */

module.exports = rotate;
