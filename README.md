rotate
====

UI component for CSS3 rotations for use with [component](https://github.com/component/component). Works in Chrome, Firefox, Opera, Safari, IE9+

## Installation

```
component install jsantell/rotate
```

## API

### rotate(el, deg)

`rotate` is just a function that takes an element and rotation value (in degrees) and rotates that element.

## Example

```js
var rotate = require('rotate');
var el = document.getElementById('someDiv');

rotate(el, 120); // rotate el by 120 degrees
```
