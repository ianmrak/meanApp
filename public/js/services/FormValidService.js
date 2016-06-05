app.factory('formValidate', function() {
  var factory = {};

  factory.user = function(name) {
    return /^[a-z0-9]+$/i.test(name);
  }
  factory.password = function(pw) {
    if (!/[A-Z]/.test(pw)) { return false; }
    if (!/[0-9]/.test(pw)) { return false; }

    return pw.length > 6;
  }
  factory.email = function(email) {
    return /[@]/.test(email);
  }
  factory.showError = function(selector, msg) {
    document.getElementsByName(selector)[0].innerHTML = msg;
  }

  factory.hideError = function(selector) {
    document.getElementsByName(selector)[0].innerHTML = '';
  }
  return factory;
});

app.service('Validate', function(formValidate) {
  this.user = function(name) {
    return formValidate.user(name);
  };
  this.password = function(pw) {
    return formValidate.password(pw);
  };
  this.email = function(email) {
    return formValidate.email(email);
  };
  this.error = function(selector, msg) {
    return formValidate.showError(selector, msg);
  };
  this.hide = function(selector) {
    return formValidate.hideError(selector);
  }
});
