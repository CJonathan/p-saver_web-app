//Find object with attribute in array;

function findWithAttr(array, attr, value){
  for(var i = 0; i < array.length; i += 1) {
    if(array[i][attr] === value) {
      return i;
    }
  }
  return -1;
};

export { findWithAttr };