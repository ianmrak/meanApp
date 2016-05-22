function userValidate(user) {
  return /^[a-z0-9]+$/i.test(user);
}
function passwordValidate(password) {
  if (!/[A-Z]/.test(password)) { return false; }
  if (!/[0-9]/.test(password)) { return false; }

  return password.length > 6;
}
function searchValidate(collection, search) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]._name === search) {
      return true;
    }
  }
  return false;
}

module.exports = {
  user: userValidate,
  password: passwordValidate,
  search: searchValidate
}
