var dom = require('dom');
var selectionPosition = require('selection-position');
var assert = require('assert');
var selectionRange = require('selection-range');

describe('selection position', function () {
  var $el, el;

  beforeEach(function(){
    $el = dom('<p>hello world</p>');
    el = $el[0];
    dom(document.body).append($el);
  });

  afterEach(function(){
    $el.remove();
  });

  it('should get the selection rect when selection is present', function () {
    selectionRange(el,  {start: 0, end: 5 });
    var pos = selectionPosition();
    assert(pos.width !== 0);
  });

  it('should get a cursor position when only cursor is present', function () {
    selectionRange(el, {start: 1});
    assert(selectionPosition().width === 0);
  });

  it('should remove the dummy span element', function () {
    selectionRange(el, {start: 1});
    assert(selectionPosition().width === 0);
    assert(!$el.find('span')[0]);
  })

  it('should return null without a cursor position', function() {
    assert(!!selectionPosition());
  });

});
