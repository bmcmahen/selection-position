/**
 * cross-browser selected text bounding-client-rect.
 * @return {Object} 
 */

module.exports = function(){

  if (window.getSelection){
    var selection = window.getSelection();
    if (!selection.rangeCount) return;

    var range = selection.getRangeAt(0);

    if (selection.type == 'Range'){
      return range.getBoundingClientRect();
    }
    
    // if we only have a cursor, then we need to insert
    // a dummy element and see what's what.
    var dummy = document.createElement('span');
    range.insertNode(dummy);
    return dummy.getBoundingClientRect();
  } 

  if (document.selection){
    var txtRange = document.selection.createRange();
    return txtRange.getBoundingClientRect();
  } 
};