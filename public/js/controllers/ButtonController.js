app.controller('ButtonController', function(funStuff) {
  this.crazy = function($event) {
    setInterval(function() {
      return funStuff.colors();
    }, 100);
    $event.target.innerHTML = "LET'S DO THIS!!!";
  };
  var button = document.getElementById('bigBadButton');
  //button.addEventListener('mouseover', function(event){
    //event.target.innerHTML = "ARE YOU SURE!?";
  //});
  //button.addEventListener('mouseout', function(event){
    //event.target.innerHTML = "PUSH FOR DANCE PARTY";
  //});
});
