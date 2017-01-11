$(document).ready(function(){
var clickCounter = 0;
$("buton[name=Random]").click(function(){

});
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
  $("#navbar").css({"height":"200px", "background-color" : "rgba(26,225,102,.737)", "box-shadow" : "5px 5px 5px rgba(0,0,0,.232)"});
  $(".inputs").css({"transform" : "matrix(1,0,0,1,0,0)"});
  $("#wiki_header").css({"color" : "white"});
  clickCounter++;
  var input = $("#text_input").val()//this is how I obtained the value fom the text field. simple
  var input = input.split(" ");// Split the string array
  var input = input.join("+");// put it back together in order to fit the criteria for the API to function.
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+input+"&format=json";
  console.log(url); // logs the api call to the console (for testing and experimenting)
  $.ajax({
    type: 'GET',
    url: " https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search="+input+"&format=json",
    // Here's where I fucked up initially, I forgot to add the origin = *, into the api call
    async: true,
    datatype: 'json',
    xhrFields:{
    withCredentials: false, // withCredentials has to be set to false
  },
    //sheaders:{"Api-User-Agent": "jessebarron1113@gmail.com"}, // headers as per requested by wikimedai
    success: function(data){
      var wikiObj = data;
      //$("ul").html(data[1][0]+"<br>"+data[2][0]);
      if(clickCounter > 1){
        $(".list").empty();
      }
      function jsonParse(json){
        var length = data.length;
        var title;
        var preface;
        var hyper;
        var i = 1;
        var x = 0;
        for (var y = 1; y < 10; y++){
          while(i < 3){
            title = data[i][x];
            i ++;
            preface = data[i][x];
            i ++;
            hyper = data[i][x];
            i++;
            if(title == null) { ;var stop = false; break;}
              $(".list").append("<div class = 'borders'><li class='li_class'><a class ='li_class' target = '_blank' href ="+hyper+"><h2>"+title+"</h2></a><br><p class='li_class'>"+preface+"</p></br>"+
              "</li></div>");


          }
          if(stop){ break; }
          console.log(hyper);
          //$(".list").add().after().html('<a href ='+hyper+'>'+"<li><h2>"+title+"</h2><br><p>"+preface+"</p></br>"+
        //  "</li></a>");
          i = 1;
          x++;

          }
          $(".list").append('<h3>No more results</h3>')
        }
        jsonParse(data);
    }



  });

//Api related stuff goes up here^^^^ hopefully....
//  console.log(input);

  console.log(clickCounter);
  return false;
  });
});
