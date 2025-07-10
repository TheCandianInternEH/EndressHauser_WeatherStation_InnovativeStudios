WEATHER.weatherStart()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        WEATHER.SunOn()
        basic.pause(1000)
        WEATHER.SunOff()
        basic.pause(1000)
        WEATHER.SunOn()
        basic.pause(1000)
        WEATHER.SunOff()
    }
})
