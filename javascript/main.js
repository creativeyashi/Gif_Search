/* 1. Grab the input value and reset */
var reset = document.querySelector(".reset");

		reset.addEventListener('click',function(){

			var con = document.querySelector(".js-container");
			con.innerHTML = " ";

		});


document.querySelector(".js-go").addEventListener('click',function(){

  var input = document.querySelector("input").value;
  searchGiphy(input);
  

});

document.querySelector(".js-userinput").addEventListener('keyup',function(e){

  var input = document.querySelector("input").value;

  // if the key ENTER is pressed...
  if(e.which === 13) {
    searchGiphy(input);
  }

});

/* 2. do the data stuff with the API */

function searchGiphy(input){
  //dc6zaTOxFJmzC
var url = "http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" +input ;
//my other api key=IpTx4A5DxpL9vAyO9IFDCb2ho5kYDVlH

// AJAX Request

var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener('load',function(e){
  var data = e.target.response;
  pushToDOM(data);

});

}
searchGiphy();

/* 3. Show me the GIFs */


function pushToDOM(input) {

  var response = JSON.parse(input);

  var imageUrls = response.data;

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);

    var container = document.querySelector(".js-container");
    container.innerHTML += "<img src=\"" + src + "\" class=\"container-image\">";

  });



}
