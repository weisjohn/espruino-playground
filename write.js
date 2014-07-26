
// write lines to a file

// clear previous program...
clearInterval();

var i = 0, file = E.openFile('test.txt', 'w');

function write() {

    // turn on the LED to indicate that we're writing
    LED1.write(true);

    // increment the line number, write a new message
    i++;
    file.write("hello world " + i + "\n");

    // turn off the LED to say we're done
    LED1.write(false);

}

// register to the button press
setWatch(write, BTN, { edge: "falling", repeat: true });