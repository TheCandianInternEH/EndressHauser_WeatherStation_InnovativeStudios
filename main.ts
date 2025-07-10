custom.weatherStart()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        serial.writeLine("BLINK")
    }
})
