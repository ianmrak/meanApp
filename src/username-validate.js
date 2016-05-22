function isUnique(collection, name) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]._name === name) {
      return false;
    }
  }
  return true;
}

module.exports = isUnique;
