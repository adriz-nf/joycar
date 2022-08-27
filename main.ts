input.onButtonPressed(Button.A, function () {
    JoyCar.stop(StopIntensity.Intense)
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . .
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showString(" INGRID")
})
input.onSound(DetectedSound.Loud, function () {
    basic.showLeds(`
        # . . . .
        # # # # #
        # . . . .
        . . . . .
        . . . . .
        `)
    JoyCar.stop(StopIntensity.Intense)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    JoyCar.turn(
    FRDirection.Forward,
    LRDirection.Right,
    49,
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    JoyCar.drive(FRDirection.Forward, 49)
})
basic.forever(function () {
	
})
