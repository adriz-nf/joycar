input.onButtonPressed(Button.A, function on_button_pressed_a() {
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
input.onSound(DetectedSound.Loud, function on_sound_loud() {
    JoyCar.stop(StopIntensity.Intense)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    basic.showLeds(`
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
    `)
    JoyCar.turn(FRDirection.Forward, LRDirection.Left, 21, 2)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
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
basic.forever(function on_forever() {
    
})
