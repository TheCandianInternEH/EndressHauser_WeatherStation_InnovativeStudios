/**
 * WEATHER BLOCKS
 */
//% weight=100 color=#fc9003 icon="☁"


namespace custom {
    /**
     * Starts weather serial communication
     */
    //% block="WEATHER START"
    export function weatherStart(): void {
        serial.redirect(
            SerialPin.P13,
            SerialPin.P14,
            BaudRate.BaudRate9600
        )
    }

    /**
     * Starts sun lamp
     */
    //% block = "SUN ON"
    //% color=#FFD700 icon="☀"
    export function SunOn(): void {
        basic.forever(function () {
            serial.writeLine("BLINK")
        })
    }
}

