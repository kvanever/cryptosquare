/*This file is for your custom js.  All yours*/
// front end controls
$(document).ready(function(){

  $("#input").submit(function(event){
    event.preventDefault();
    var input = ($("#raw-message").val());

    var output = cryptosquare(input);

    $('#output').text(output);

  });
});

//business rules

var cryptosquare = function(string){
debugger;
  string = string.replace(/[^a-zA-Z0-9]/g, "");
  var characterArray = string.toLowerCase().split("");

}
