/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_366

function cs2_366(intArg0: component, intArg1: number, intArg2: Enum, intArg3: number, intArg4: number, intArg5: boolean, intArg6: boolean, intArg7: component, intArg8: number, strArg0: string): void {
    if (intArg0 != -1) {
        if (intArg5 == true) {
            cs2_365(intArg0, intArg3, 1);
        } else {
            cs2_365(intArg0, intArg3, 0);
        }
        if (intArg6 == true) {
            ifSetOnTimer(hook(cs2_367, "Ii1", [intArg0, intArg4, intArg5]), intArg0);
        }
    } else {
        cs2_365(intArg7, intArg3, 2);
    }

    if (ifFind(intArg7) == 1) {
        if (intArg5 == true) {
            if (stringLength(strArg0) > 0) {
                playerdesign4_tooltip(strArg0, if_getx_absolute(intArg7), ifGetWidth(intArg7), trh_esc_mouseleave(intArg7), intArg8);
            }
        } else if (if_getx_absolute(intArg7) == varc_tooltip_built && ifGetWidth(intArg7) == varc_player_kit_scroll_length) {
            playerdesign4_tooltip_clear();
        }
    }

    if (intArg2 == -1) {
        return;
    }
    let int9: number = 0;
    let int10: number = enumGetoutputcount(intArg2);
    let int11: component = -1;

    if (intArg5 == true) {
        while (int9 < int10) {
            if (int9 != intArg1) {
                int11 = enumOp(type_int, type_component, intArg2, int9);
                if (int11 == -1) {
                    return;
                }
                if (int11 != intArg0 && ifGetHide(int11) == 0) {
                    ifSetOnTimer(hook(cs2_367, "Ii1", [int11, intArg4, false]), int11);
                    cs2_365(int11, intArg3, 0);
                }
            }
            int9 = int9 + 1;
        }
    }
}
