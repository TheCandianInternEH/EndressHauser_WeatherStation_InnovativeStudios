/**
 * WEATHER BLOCKS
 */
//% weight=100 color=#fc9003 icon="☁"


namespace Wustom {
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
            serial.writeLine("BLINK")
    }

}

