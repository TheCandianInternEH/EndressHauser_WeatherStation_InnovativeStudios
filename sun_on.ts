namespace SUN {
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
