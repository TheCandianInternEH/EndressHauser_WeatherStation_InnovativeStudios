WEATHER.weatherStart()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        WEATHER.SunOn()
    }
})
