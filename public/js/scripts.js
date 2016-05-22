(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.app = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function findUser(collection, query) {
      var found = search(collection, query);
      var display = document.querySelector('.inline');
      var node = document.querySelector('.infodiv');
      var textnode =  `<p>${found._name}</p>
                       <p>${found._password}</p>
                       <p>${found.onList}</p>`;
      node.innerHTML = textnode;
      display.style.opacity = 1;
    }

function search(collection, search) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i]._name === search) {
        return collection[i];
        }
      }
    }
    
module.exports = findUser;

},{}],2:[function(require,module,exports){
function displayError(selector, string) {
  document.querySelector(selector).innerHTML = string;
}

function hideError(selector) {
  document.querySelector(selector).innerHTML = '';
}

module.exports = {
  display: displayError,
  hide: hideError
}

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{"./find-user":1,"./form-errors":2,"./form-validation":3,"./submit-user":5,"./username-validate":6}],5:[function(require,module,exports){
function submitUser(user, users, username, pw, emailList) {
  var newUser = Object.create(user);
  newUser._name = username;
  newUser._password = pw;
  newUser.onList = emailList;
  users.push(newUser);
}

module.exports = submitUser;

},{}],6:[function(require,module,exports){
function isUnique(collection, name) {
  for (var i = 0; i < collection.length; i++) {
    if (collection[i]._name === name) {
      return false;
    }
  }
  return true;
}

module.exports = isUnique;

},{}]},{},[4])(4)
});