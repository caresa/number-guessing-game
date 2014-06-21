(function(){

  $(".header label").fadeIn(2000);
  $(".main.image img").fadeIn(2000);
  $(".main.image").fadeIn(2000);

  $('#submit-button').on('click', function () {
    var userNumber = $('#user-input').val();
    $("#response").text("You guessed " + userNumber + " !");
    bl.checkNumber(userNumber);
    $('#user-input').val("");
  });

  $('#new-game').on('click', function () {
    secretNumber = parseInt(Math.random() * 100, 10) + 1;
    $("#response").text("A new game has started!");
    $('#user-input').val('');
  });

})();

