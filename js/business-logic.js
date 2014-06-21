(function() {
  var BusinessLogic = function(){

    this.secretNumber = parseInt(Math.random() * 100, 10) + 1;

    var landmines = function () {
      var new_mine = parseInt(Math.random() * 100, 10) + 1;
      return new_mine;
    };
    mines = [landmines(), landmines(), landmines()];

    this.checkNumber = function (userNumber) {
      if ((isNaN(userNumber)) || (userNumber < 0) || (userNumber > 100)){
        $("#response").text("Please enter a valid number");
      }else if (userNumber > this.secretNumber){
        $("#response").text("Please enter a lower number");
      }else if(userNumber < this.secretNumber) {
        $("#response").text("Please enter a higher number");
      }else if (userNumber == this.secretNumber) {
        $("#response").text("Congratulations! You entered the correct number");
      }
       checkMines(userNumber);
    };

    var checkMines = function (userNumber){
      console.log(mines);
      var hot, distance;

      for (var i = 0; i < mines.length; i += 1){
        distance = Math.abs(userNumber - mines[i]);
        if (distance === 0){
          $("#l-mines").text("Landmine!!");
            return;
        }
        if(!hot || distance < hot){
           hot = distance;
        }
      }
      $("#l-mines").text("You are "+hot+" away from a landmine!!");
    };
  }
    window.bl = new BusinessLogic();
})();
