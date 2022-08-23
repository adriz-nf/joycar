def on_button_pressed_a():
    basic.show_leds("""
        # . # . #
                # . # . .
                # # # . #
                # . # . #
                # . # . #
    """)
    basic.pause(500)
    basic.show_string(" INGRID")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_sound_loud():
    JoyCar.stop(StopIntensity.INTENSE)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_ab():
    basic.show_leds("""
        . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
    """)
    JoyCar.turn(FRDirection.FORWARD, LRDirection.LEFT, 21, 2)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        # . # . #
                # . # . .
                # # # . #
                # . # . #
                # . # . #
    """)
    basic.pause(500)
    basic.show_string(" FRIDA")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
