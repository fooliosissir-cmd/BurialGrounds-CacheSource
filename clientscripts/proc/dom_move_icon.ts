/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dom_move_icon]

function dom_move_icon(intArg0: number): number {
    let int1: number = 0;
    let int2: number = 0;

    if (ccFind(Component.interface_1167.component_1167_1, intArg0) == 1) {
        int2 = ccGetY();
        int1 = int2 + 10;
        if (int1 > 85 && int1 < 105) {
            if (varc_dom_next_icon == 1) {
                varc_dom_current_icon = 21;
            } else if (varc_dom_next_icon == 2) {
                varc_dom_current_icon = 22;
            } else {
                varc_dom_current_icon = varc_dom_next_icon - 2;
            }
            ifSetText(enumOp(type_int, type_string, Enum.enum_5214, varc_dom_current_icon), Component.interface_1167.component_1167_30);
            soundVorbisVolume(8080, 1, 0, 80);
            if (varc_dom_start_slowdown == 1 && varc_dom_client_handicap == varc_dom_current_icon) {
                ifSetOnTimer(noHook(""), Component.interface_1167.component_1167_1);
                ccSetPosition(0, 90, 1, 0);
                soundVorbisVolume(8103, 1, 0, 200);
                if (intArg0 == 0) {
                    if (ccFind(Component.interface_1167.component_1167_1, 2) == 1) {
                        ccSetPosition(0, 0, 1, 0);
                    }
                    if (ccFind(Component.interface_1167.component_1167_1, 1) == 1) {
                        ccSetPosition(0, 180, 1, 0);
                    }
                } else if (intArg0 == 1) {
                    if (ccFind(Component.interface_1167.component_1167_1, 0) == 1) {
                        ccSetPosition(0, 0, 1, 0);
                    }
                    if (ccFind(Component.interface_1167.component_1167_1, 2) == 1) {
                        ccSetPosition(0, 180, 1, 0);
                    }
                } else if (intArg0 == 2) {
                    if (ccFind(Component.interface_1167.component_1167_1, 1) == 1) {
                        ccSetPosition(0, 0, 1, 0);
                    }
                    if (ccFind(Component.interface_1167.component_1167_1, 0) == 1) {
                        ccSetPosition(0, 180, 1, 0);
                    }
                }
                ifSetHide(false, Component.interface_1167.component_1167_50);
                ifSetText(tostring(varbit_dom_handicap_lives), Component.interface_1167.component_1167_42);
                ifSetHide(true, Component.interface_1167.component_1167_52);
                return 0;
            }
            if (varc_dom_client_handicap != 0 && varc_dom_start_slowdown == 0) {
                dom_slowdown();
            }
        }
        if (int1 > 0 && int1 < 270) {
            ccSetPosition(0, int1, 1, 0);
        } else if (int1 >= 270) {
            ccDelete();
            dom_create_icon(intArg0, 0);
        }
    }
    return 1;
}
