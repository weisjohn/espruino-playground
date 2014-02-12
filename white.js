
// cycle the leds on and off fast 

// clear previous program...
clearInterval();

// leds to choose from
var leds = [ LED1, LED2, LED3 ];
var on = false;

function oscillate() {
    if (!on) return;
    i++;
    leds[i % 3].write(true);
    leds[(i - 1) % 3].write(false);
    setTimeout(oscillate, 10);
}

function toggle() {
    on = !on;
    i = 0;
    oscillate();
}

setWatch(toggle, BTN, {edge:"falling", repeat:true});