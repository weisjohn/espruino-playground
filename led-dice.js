
// a simple random color picker

// clear previous program...
clearInterval();

// leds to choose from
var leds = [ LED1, LED2, LED3 ];

// state
var i;
var stop;

function dice() {
    i++;
    leds[i % 3].write(true);
    leds[(i - 1) % 3].write(false);
    if (i == stop) return;
    setTimeout(dice, i * 10);
}

function roll() {
  i = 0;
  stop = ~~(Math.random() * 25) + 5;
  dice();
}

// register to the button press
setWatch(roll, BTN, {edge:"falling", repeat:true});