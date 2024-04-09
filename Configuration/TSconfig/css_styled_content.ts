TCEFORM.tt_content {
    imageorient.types {
        image.addItems {
            88 = Parallax Scroll
        }
        textpic.addItems {
            88 = Parallax Scroll
        }
    }

    layout {
        removeItems = 1,2,3
        addItems {
            99 = Box mit Schatten
        }
    }

    # TYPO3 pre8
    section_frame {
        removeItems = 5,6,11,12
        altLabels {
            10 = Schmal
            20 = Box mit Schatten
            21 = Schmal, mit Schatten
        }
        addItems {
            22 = Dunkler Hintergrund
        }
    }

    # TYPO3 8
    frame_class {
        addItems {
            #shadow = Schatten
            #csc-default shadow = Box mit Schatten
            #csc-frame-indent = Schmal
            #indent-shadow = Schmal mit Schatten
        }
    }
}
