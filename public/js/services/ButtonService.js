app.factory('buttonEffects', function() {
  var factory = {};

  factory.backgroundColor = function() {
    var r =  Math.floor(Math.random()*256);
    var g =  Math.floor(Math.random()*256);
    var b =  Math.floor(Math.random()*256);
    var color = "rgb("+r+","+g+","+b+")";
    document.body.style.background = color;
  };

  return factory;
});

app.service('funStuff', function(buttonEffects) {
  this.colors = function() {
    return buttonEffects.backgroundColor();
  };
});
