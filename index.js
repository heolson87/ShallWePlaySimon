var greenSound;
var redSound;
var yellowSound;
var blueSound;


// (Math.floor((Math.random()*4)+1));
$("document").ready(function() { //when the document finishes loading, map our mp3's to similarly named Audio objects
    greenSound = new Audio("sounds/green.mp3"); 
    redSound = new Audio("sounds/red.mp3");
    yellowSound = new Audio("sounds/yellow.mp3");
    blueSound = new Audio("sounds/blue.mp3");
});



//listener for any click on any button, triggers anonymous function to "press" the button
$(".btn").on("click", function() { //function dealing w/clicks on any with class 'btn'

    console.log(toString(this.id)); //console what object ('this') triggered listener (optional)

    $(this).addClass("pressed"); //add class 'pressed' to 'this' button
    setTimeout(function () {  //wait 200 ms
        $(".pressed").removeClass("pressed"); //remove class 'pressed' from button with class 'pressed'
    }, 200);

        switch (this.id) { //case switch to play different sounds depending on button id
          case "green": //if id is "green"...
            greenSound.play(); //play 'greenSound' Audio object
            break; //leave the switch function
          case "red": //if id is "red"...
            redSound.play(); //play 'redSound' Audio object
            break; //leave the switch function
          case "yellow": //if id is "yellow"...
            yellowSound.play(); //play 'yellowSound' Audio object
            break; //leave the switch function
          case "blue": //if id is "blue"...
            blueSound.play(); //play 'blueSound' Audio object
            break; //leave the switch function
        }

})
