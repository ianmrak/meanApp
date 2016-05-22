function submitUser(user, users, username, pw, emailList) {
  var newUser = Object.create(user);
  newUser._name = username;
  newUser._password = pw;
  newUser.onList = emailList;
  users.push(newUser);
}

module.exports = submitUser;
