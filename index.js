/**
 * cross-browser selected text bounding-client-rect.
 * @return {Object} 
 */

module.exports = function(){
  if (window.getSelection){
    var selection = window.getSelection();
    if (!selection.rangeCount) return;
    return selection.getRangeAt(0).getBoundingClientRect();
  } else if (document.selection){
    var txtRange = document.selection.createRange();
    return txtRange.getBoundingClientRect();
  } 
};