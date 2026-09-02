/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcguild_activity_bar_fill]

function rcguild_activity_bar_fill(): void {
    let int0: number = scale(varbit_rcguild_activity, 1000, 100);

    if (int0 < 1) {
        int0 = 1;
    }

    if (int0 > 100) {
        int0 = 100;
    }
    let int1: number = enumOp(type_int, type_int, Enum.rcguild_activity_bar_position, int0);
    let int2: number = enumOp(type_int, type_int, Enum.rcguild_activity_bar_size, int0);

    if (varbit_rcguild_team == 1) {
        ifSetPosition(481, int1, 0, 0, Component.interface_781.component_781_46);
        ifSetSize(16, int2, 0, 0, Component.interface_781.component_781_46);
    } else if (varbit_rcguild_team == 2) {
        ifSetPosition(481, int1, 0, 0, Component.interface_781.component_781_37);
        ifSetSize(16, int2, 0, 0, Component.interface_781.component_781_37);
    }

    if (int0 < 25) {
        if (varbit_rcguild_team == 1) {
            ifSetColour(colour(0xFF9900), Component.interface_781.component_781_46);
        } else if (varbit_rcguild_team == 2) {
            ifSetColour(colour(0xFF9900), Component.interface_781.component_781_37);
        }
    } else if (varbit_rcguild_team == 1) {
        ifSetColour(colour(0x666600), Component.interface_781.component_781_46);
    } else if (varbit_rcguild_team == 2) {
        ifSetColour(colour(0x284605), Component.interface_781.component_781_37);
    }
}
