/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4677

function cs2_4677(): void {
    switch (varbit_fremsaga_current_saga) {
        case 1:
            if (varbit_fremsaga_completion == 10) {
                if (statBase(6) >= 30 && statBase(4) >= 30 && statBase(0) >= 30) {
                    ifSetText("Carn is no more, his behemoth has been dealt with, and Linza has her ore. The tales of Great Ozan can continue!", Component.interface_102.component_102_54);
                } else {
                    ifSetText("Carn has been defeated and Linza appreciates her new ore. The story still feels incomplete, somehow.", Component.interface_102.component_102_54);
                }
            } else {
                ifSetText("Carn's defeated, but the story still feels incomplete somehow.", Component.interface_102.component_102_54);
            }
            break;
        case 2:
            if (varbit_fremsaga_completion == 10) {
                if (statBase(16) >= 55 && statBase(17) >= 55) {
                    ifSetText("I have become Vengeance: death to those who callously disregard life. They, and everyone like them, will pay for what they have done.", Component.interface_102.component_102_54);
                } else {
                    ifSetText("Am I done now? No, there's more that must be done. Vengeance has not yet been satisfied.", Component.interface_102.component_102_54);
                }
            } else {
                ifSetText("I killed them...but in doing so I never thought to check for survivors. Am I a monster?", Component.interface_102.component_102_54);
            }
            break;
        case 4:
            if (varbit_fremsaga_completion == 10) {
                if (statBase(2) >= 70) {
                    ifSetText("Ha! Thok stronger than squishy monsters in dungeon! None are as mighty as Thok.", Component.interface_102.component_102_54);
                } else {
                    ifSetText("Odd... Thok remember being much stronger in dungeon.", Component.interface_102.component_102_54);
                }
            } else {
                ifSetText("Thok save Marm, but Thok not show how mighty Thok is. Thok need to do more.", Component.interface_102.component_102_54);
            }
            break;
        case 3:
            if (statBase(0) >= 60 && statBase(17) >= 45 && statBase(24) >= 55) {
                if (varbit_fremsaga_completion == 10) {
                    ifSetText("I finally completed my task; the perfect spy, the perfect assassin.", Component.interface_102.component_102_54);
                } else {
                    ifSetText("I completed my task, but...I made mistakes, left things undone...", Component.interface_102.component_102_54);
                }
            } else {
                ifSetText("My task is incomplete, this story still unfinished. I remember there was...more...", Component.interface_102.component_102_54);
            }
            break;
        case 6:
            if (statBase(2) >= 75) {
                if (varbit_fremsaga_completion == 10) {
                    ifSetText("A mighty adventure for Thok and Marmaros! Thok have best adventures.", Component.interface_102.component_102_54);
                } else {
                    ifSetText("Thok smash bone face good...but Thok still have more to do!", Component.interface_102.component_102_54);
                }
            } else {
                ifSetText("Thok enjoy smashing foes...but Thok remember being stronger before.", Component.interface_102.component_102_54);
            }
            break;
    }
}
