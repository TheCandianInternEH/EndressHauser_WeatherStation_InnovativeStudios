//% weight=90 color=#FFD700 icon="☀"
//% block="Sun On"
namespace custom {
    /**
     * Starts a loop that sends "BLINK" continuously over serial
     */
    export function sunOn(): void {
        basic.forever(function () {
            serial.writeLine("BLINK")
        })
    }
}

