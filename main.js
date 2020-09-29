$(document).ready(function(){
  var request = $.ajax({
    url: "https://raw.githubusercontent.com/jasminalackovic/test/master/dataset.json",
    method: "GET",
    dataType: "json"
  });

  request.done(function(response) {
      var list = '<ul>';
      for (var i = 0; i < response.length; i++) {
        list += '<li class="one-burger-card js-adresse">' + response[i].name + '</li>';
      }
   list += '</ul>';
   $("#list-of-burgers").html(list);
  });

  request.fail(function(jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
  });
});


$(".js-addresse").on( "click", function() {
 $("#adresse").show();
});
