/**
 * cross-browser selected text bounding-client-rect.
 *
 * @return {Object}
 */

module.exports = function() {

  if (window.getSelection) {
    var selection = window.getSelection();
    if (!selection.rangeCount) return;

    var range = selection.getRangeAt(0);

    if (!range.collapsed){
      return range.getBoundingClientRect();
    }

    // if we only have a cursor, then we need to insert
    // a dummy element and see what's what.
    var dummy = document.createElement('span');
    range.insertNode(dummy);
    var pos = dummy.getBoundingClientRect();
    dummy.parentNode.removeChild(dummy);
    return pos;
  }

  if (document.selection) {
    return document.selection
      .createRange()
      .getBoundingClientRect();
  }
};
