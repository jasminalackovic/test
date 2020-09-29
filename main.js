$(document).ready(function(){
  var request = $.ajax({
    url: "https://raw.githubusercontent.com/jasminalackovic/test/master/dataset.json",
    method: "GET",
    dataType: "json"
  });

  request.done(function(response) {
      var list = '<ul>';
      for (var i = 0; i < response.length; i++) {
        if(response[i].burger_classic == 'y') {};
        list += '<li class="one-burger-card">' + response[i].name + ' Classic Burger   Cheese Burger   <span class="js-adresse"> adresse </span> </li>';
      }
   list += '</ul>';
   $("#list-of-burgers").html(list);
  });

  request.fail(function(jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
  });

});


$(document).on('click', '.js-adresse', function () {
    $("#adresse").show();
});
