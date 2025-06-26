serial.redirect(
SerialPin.P13,
SerialPin.P14,
BaudRate.BaudRate9600
)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        serial.writeLine("BLINK")
        pins.digitalWritePin(DigitalPin.P13, 1)
    }
})
