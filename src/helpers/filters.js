//Find object with attribute in array;

function findWithAttr(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
    if(array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

function filterCaught(pkms) {
  return pkms.filter(e => {
    return e.isCaught;
  });
}

function filterUnCaught(pkms) {
  let list = pkms.filter(e => {
    return !e.isCaught;
  });
  return list.filter(e => {
    return !e.isNotCatchable;
  }).length;
}

function calculateCaught(pkms) {
  return filterCaught(pkms).length;
}

export { findWithAttr, filterCaught, filterUnCaught, calculateCaught };