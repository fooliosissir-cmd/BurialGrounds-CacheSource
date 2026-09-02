/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5551

function cs2_5551(intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: number = 0;
    let int5: number = 5;

    if (intArg0 == 0) {
        intArg3 = intArg3 - 1;
        ifSetHide(false, Component.interface_1178.component_1178_55);
        cs2_5539();
        ccDeleteAll(Component.interface_1178.component_1178_78);
        ifSetOnTimer(noHook(""), Component.interface_1178.component_1178_78);
        varc_1726 = 0;
        if (intArg3 > 0) {
            if (intArg2 == 0) {
                cs2_5547(intArg3);
            }
            if (intArg2 == 1) {
                cs2_5549(intArg3);
            }
        }
    } else {
        while (int4 < intArg1) {
            if (ccFind(Component.interface_1178.component_1178_78, int4) == 1) {
                if (intArg2 == 0) {
                    ccSetPosition(ccGetX() - int5, 0, 0, 1);
                } else if (intArg2 == 1) {
                    ccSetPosition(ccGetX() + int5, 0, 0, 1);
                } else {
                    intArg0 = 0;
                }
            }
            int4 = int4 + 1;
        }
        if (intArg2 == 0) {
            intArg0 = intArg0 + int5;
        } else if (intArg2 == 1) {
            intArg0 = intArg0 - int5;
        } else {
            intArg0 = 0;
        }
        ifSetOnTimer(hook(cs2_5551, "iiii", [intArg0, intArg1, intArg2, intArg3]), Component.interface_1178.component_1178_78);
    }
}
