var submitUser = require('./submit-user');
var formValidate = require('./form-validation');
var formError = require('./form-errors');
var findUser = require('./find-user');
var uniqName = require('./username-validate');

// User obj and archive list ___________________________________________________
  var users = [];
  var user = {};
  user.getName = function() {
    return user._name;
  }
  user.getPassword = function() {
    return user._password;
  }
  user.changePassword = function(newpass) {
    user._password = newpass;
  }
  user.isOnList = function() {
    return onList === true ? "Yes" : "No";
  }

// Submit button _______________________________________________________________
  document.querySelector('.submit').addEventListener('click', function(e) {
    e.preventDefault();
    var username = document.querySelector('input[class="user"]').value;
    var password = document.querySelector('input[class="password"]').value;
    var emailReq = document.querySelector('input[class="getEmail"]').checked;
    if (formValidate.user(username) && formValidate.password(password) && uniqName(users, username)) {
      submitUser(user, users, username, password, emailReq);
      document.querySelector('.form').reset();
      console.log('registered users: ' + JSON.stringify(users));
    } else {
      console.log('Invalid inputs!')
    }
  });

// Display user button _________________________________________________________
  document.querySelector('.showUser').addEventListener('click', function(e) {
    e.preventDefault();
    var search = document.querySelector('input[class="userSearch"]').value;
    if (formValidate.search(users, search)) {
      findUser(users, search);
      search = '';
    }
  });

// Prep Form errors ____________________________________________________________
  function prepFormErrors() {
    // log();
    var forms = document.querySelectorAll('form')
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('blur', function(e) {
        if (e.target.value) {
        switch(e.target.className) {
          case('user'):
            if (formValidate.user(e.target.value)) {
              formError.hide('.userError');
            } else {
              formError.display('.userError', 'Invalid username');
            }
            break;
          case('password'):
            if (formValidate.password(e.target.value)) {
              formError.hide('.pwError')
            } else {
              formError.display('.pwError', 'Passwords must be at least 7 characters long and contain one uppercase character and one number.')
            }
            break;
          case('userSearch'):
            if (formValidate.search(users, e.target.value)) {
              formError.hide('.searchError');
            } else {
              formError.display('.searchError', 'User not found.')
            }
            break;
            }
          }
        }, true);
      }
    }

module.exports = {
  start: prepFormErrors
};
