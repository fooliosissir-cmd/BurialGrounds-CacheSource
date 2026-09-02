/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_reward_book_setup]

function fremsaga_reward_book_setup(intArg0: number): void {
    switch (intArg0) {
        case 1:
            if (varbit_fremsaga_signature_unabridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_15);
                ifSetHide(true, Component.interface_102.component_102_17);
            } else if (varbit_fremsaga_completion == 10 && statBase(6) >= 30 && statBase(4) >= 30 && statBase(0) >= 30) {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_15);
                ifSetHide(false, Component.interface_102.component_102_17);
                if (varbit_fremsaga_signature_abridged == 0) {
                    ifSetText("You receive two new books.", Component.interface_102.component_102_70);
                }
            }
            if (varbit_fremsaga_signature_abridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_14);
                ifSetHide(true, Component.interface_102.component_102_16);
            } else {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_14);
                ifSetHide(false, Component.interface_102.component_102_16);
            }
            break;
        case 2:
            if (varbit_fremsaga_vengeance_unabridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_15);
                ifSetHide(true, Component.interface_102.component_102_17);
            } else if (varbit_fremsaga_completion == 10 && statBase(16) >= 55 && statBase(17) >= 55) {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_15);
                ifSetHide(false, Component.interface_102.component_102_17);
                if (varbit_fremsaga_vengeance_abridged == 0) {
                    ifSetText("You receive two new books.", Component.interface_102.component_102_70);
                }
            }
            if (varbit_fremsaga_vengeance_abridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_14);
                ifSetHide(true, Component.interface_102.component_102_16);
            } else {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_14);
                ifSetHide(false, Component.interface_102.component_102_16);
            }
            break;
        case 4:
            if (varbit_fremsaga_thok_unabridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_15);
                ifSetHide(true, Component.interface_102.component_102_17);
            } else if (varbit_fremsaga_completion == 10 && statBase(2) >= 70) {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_15);
                ifSetHide(false, Component.interface_102.component_102_17);
                if (varbit_fremsaga_thok_abridged == 0) {
                    ifSetText("You receive two new books.", Component.interface_102.component_102_70);
                }
            }
            if (varbit_fremsaga_thok_abridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_14);
                ifSetHide(true, Component.interface_102.component_102_16);
            } else {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_14);
                ifSetHide(false, Component.interface_102.component_102_16);
            }
            break;
        case 3:
            if (varbit_fremsaga_bilrach_unabridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_15);
                ifSetHide(true, Component.interface_102.component_102_17);
            } else if (varbit_fremsaga_completion == 10 && statBase(0) >= 60 && statBase(17) >= 45 && statBase(24) >= 55) {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_15);
                ifSetHide(false, Component.interface_102.component_102_17);
                if (varbit_fremsaga_bilrach_abridged == 0) {
                    ifSetText("You receive two new books.", Component.interface_102.component_102_70);
                }
            }
            if (varbit_fremsaga_bilrach_abridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_14);
                ifSetHide(true, Component.interface_102.component_102_16);
            } else {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_14);
                ifSetHide(false, Component.interface_102.component_102_16);
            }
            break;
        case 6:
            if (varbit_fremsaga_thok2_unabridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_15);
                ifSetHide(true, Component.interface_102.component_102_17);
            } else if (varbit_fremsaga_completion == 10 && statBase(2) >= 75) {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_15);
                ifSetHide(false, Component.interface_102.component_102_17);
                if (varbit_fremsaga_thok2_abridged == 0) {
                    ifSetText("You receive two new books.", Component.interface_102.component_102_70);
                }
            }
            if (varbit_fremsaga_thok2_abridged == 1) {
                ifSetHide(true, Component.interface_102.component_102_14);
                ifSetHide(true, Component.interface_102.component_102_16);
            } else {
                ifSetHide(false, Component.interface_102.component_102_70);
                ifSetHide(false, Component.interface_102.component_102_14);
                ifSetHide(false, Component.interface_102.component_102_16);
            }
            break;
    }
}
