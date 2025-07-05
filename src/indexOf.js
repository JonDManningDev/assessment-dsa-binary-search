function indexOf(comparator, sortedElements) {

  if (!Array.isArray(sortedElements)) {
    return -1;
  }

 
  if (sortedElements.length === 0) {
    return -1;
  }

  let lowerIndex = 0;
  let upperIndex = sortedElements.length - 1;

  while (lowerIndex <= upperIndex) {
    const index = Math.floor((upperIndex + lowerIndex) / 2);
    const compare = comparator(sortedElements[index], index, sortedElements);

    if (compare === 0) return index;
    if (compare < 0) upperIndex = index - 1;
    if (compare > 0) lowerIndex = index + 1;
  }

  return -1;
}

module.exports = indexOf;
