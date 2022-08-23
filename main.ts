input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showString(" INGRID")
})
input.onSound(DetectedSound.Loud, function () {
    JoyCar.stop(StopIntensity.Intense)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Left,
    21,
    2
    )
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showString(" FRIDA")
})
basic.forever(function () {
	
})
