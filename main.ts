basic.showIcon(IconNames.Heart)
basic.pause(500)
basic.clearScreen()
basic.showString(" EINLADUNG!")
basic.pause(200)
basic.showArrow(ArrowNames.North)
while (true) {
    if (input.logoIsPressed()) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.OnceInBackground)
        basic.showString("A")
        basic.showArrow(ArrowNames.West)
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showString(" Wann? - 22.01.2023 | 11:00 Uhr")
        basic.pause(500)
        basic.showArrow(ArrowNames.East)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString(" Wo? - Wankstr. 4")
    }
}
