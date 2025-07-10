
//% weight=100 color=#fc9003 icon="☁"
//% block="Weather Blocks"


namespace custom {
    /**
     * Starts weather serial communication
     */
    //% block="weather start"
    export function weatherStart(): void {
        serial.redirect(
            SerialPin.P13,
            SerialPin.P14,
            BaudRate.BaudRate9600
        )
    }
}
