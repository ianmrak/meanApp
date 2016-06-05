app.controller('FormController', function(Validate) {
  this.validate = function($event) {
    var val = $event.target.value;
    var name = $event.target.name;
    var msg = function(name) {
      switch(name) {
        case 'user':
          return 'Invalid username';
        case 'email':
          return 'Cool email. Not.'
      }
    }
    if (val) {
        if (Validate[name](val)) {
          Validate.hide(name+'Error');
        } else {
          Validate.error(name+'Error', msg(name));
        }
      }
  }
  this.user = {
    emailList: true
  };
  this.master = {};
  this.submit = function() {
    if (!this.user.emailList) {
      this.user.emailList = false;
    }
    this.user.createdOn = Date.now();
    this.master = angular.copy(this.user);
    this.user = {
      emailList: true
    };
  };
});
