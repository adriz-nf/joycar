input.onButtonPressed(Button.A, function () {
    JoyCar.stop(StopIntensity.Intense)
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
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.InBackground)
    basic.showLeds(`
        # . . . #
        # # # # #
        # . . . #
        . . . . .
        . . . . .
        `)
    JoyCar.stop(StopIntensity.Intense)
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.InBackground)
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
    75,
    3
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
input.onSound(DetectedSound.Quiet, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.InBackground)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . # . #
        # # . # #
        # . # . #
        # . # . #
        . . # . .
        `)
    JoyCar.drive(FRDirection.Forward, 49)
    basic.pause(10000)
    JoyCar.stop(StopIntensity.Intense)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
basic.forever(function () {
	
})
