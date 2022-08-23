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
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        # . # . .
        # # # . #
        # . # . #
        # . # . #
        `)
    basic.pause(500)
    basic.showString("FRIDA")
})
basic.forever(function () {
	
})
