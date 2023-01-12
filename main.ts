input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
    for (let index = 0; index < 3; index++) {
        basic.showString("A")
        basic.pause(100)
        basic.showArrow(ArrowNames.West)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString(" WANN? - 22.01.2023 | 11-15 UHR")
    for (let index = 0; index < 3; index++) {
        basic.showString("B")
        basic.pause(100)
        basic.showArrow(ArrowNames.East)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString(" WO? - WANKSTR. 4")
})
basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()
basic.showString(" EINLADUNG!")
basic.pause(200)
basic.showArrow(ArrowNames.North)
