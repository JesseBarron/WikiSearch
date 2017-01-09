$(document).ready(function(){

$("#text_input").keyup(function(e){
    var key = e.which; // .which is the key pressed e is the key pressed by the user
    //hence why its the function's argument....
    if(key == 13){ // 13 is the enter key
      $("input[name=wikisearch]").click(); // if the enter key is pressed and released activate this event..
      return false;// keeps the whole document from reloading
      // i suspect that this function is probably not needed but i guess i'll figure that out someday and laugh.. hard..
  }
});
//This is the keyup event that triggers the click event below.(More in notes)


$("input[name=Search]").click(function(){ //This triggers the search button in the same forum as the text input
  // I'm guessing because they're both inside the same forum, clicking on the search button is the same as pressing
  //enter on the keyboard...
  var input = $("#text_input").val()//this is how I obtained the value fom the text field. simple
  var input = input.split(" ");// Split the string array
  var input = input.join("+");
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+input+"&format=json";
  console.log(url);
  $.ajax({
    type: 'GET',
    url: " https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+input+"&format=json",
    async: true,
    datatype: 'json',
    xhrFields:{
    withCredentials: false,
  },
    headers:{"Api-User-Agent": "jessebarron1113@gmail.com"},
    success: function(data){
      $("ul").html(data[1][0]);
      console.log();
    }

  })

//Api related stuff goes up here^^^^ hopefully....
//  console.log(input);
  return false;
  });
});
