
//% weight=100 color=#fc9003 icon="☁"
//% block="Weather Blocks"


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
}


namespace custom {
    /**
     * Starts Sun Lamp
     */
    //% block = "SUN ON"
    //% weight=90 color=#FFD700 icon="☀"
    export function SunOn(): void {
        basic.forever(function () {
            serial.writeLine("Blink")
        })
    }
}