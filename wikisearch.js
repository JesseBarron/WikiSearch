$(document).ready(function(){

$("#text_input").keyup(function(e){
    var key = e.which;
    if(key == 13){
      $("input[name=wikisearch]").click();
      return false;
  }
});
//This is the keyup event that triggers the click event below.(More in notes)


$("input[name=Search]").click(function(){
  var input = $("#text_input").val()

//Api related stuff goes up here^^^^ hopefully....
  console.log(input);
  return false;
  });
});
