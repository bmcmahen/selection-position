
# selection-position

  Determine the current position of the selection or cursor.

## Installation

  Install with [component(1)](http://component.io):

    $ component install bmcmahen/selection-position

## Example

```javascript
var position = require('selection-position');
var rect = position();
// rect.top, rect.height, etc.
```

## Tests

```
npm install component-test -g
component test browser
```

## License

  MIT
