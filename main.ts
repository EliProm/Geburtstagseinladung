input.onButtonPressed(Button.A, function () {
    basic.showString(" Einladung zu meinem Elektronik-Geburtstag!")
    basic.pause(500)
    basic.showString("Drücke B")
    basic.showArrow(ArrowNames.East)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Wann? - 22.01.2023 10:00")
    basic.showString("Wo? - Wankstr. 4")
})
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.ForeverInBackground)
basic.showIcon(IconNames.Heart)
basic.pause(200)
basic.showString(" Druecke A")
basic.showArrow(ArrowNames.West)
basic.forever(function () {
	
})
