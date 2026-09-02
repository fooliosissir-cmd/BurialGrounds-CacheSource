/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2755

function cs2_2755(intArg0: component, intArg1: number, intArg2: component): void {
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;

    if (ccFind(intArg0, intArg1) == 1 || (intArg1 == -1 && ifFind(intArg0) == 1)) {
        [int3, int4] = [cc_getx_absolute(), cc_gety_absolute() - 50];
        if (int3 < scale(1, 3, ifGetWidth(Component.interface_746.component_746_52))) {
            if (int4 < scale(1, 3, ifGetHeight(Component.interface_746.component_746_52))) {
                ifSetModelAngle(0, 0, 512, 768, 0, 1000, intArg2);
                cs2_6295(int3 + ccGetWidth(), int4 + ccGetHeight(), intArg2);
            } else {
                ifSetModelAngle(0, 0, 512, 256, 0, 1000, intArg2);
                cs2_6295(int3 + ccGetWidth(), int4 - ifGetHeight(intArg2), intArg2);
            }
        } else if (int4 < scale(1, 3, ifGetHeight(Component.interface_746.component_746_52))) {
            ifSetModelAngle(0, 0, 512, 1280, 0, 1000, intArg2);
            cs2_6295(int3 - ifGetWidth(intArg2), int4 + ccGetHeight(), intArg2);
        } else {
            ifSetModelAngle(0, 0, 512, 1792, 0, 1000, intArg2);
            cs2_6295(int3 - ifGetWidth(intArg2), int4 - ifGetHeight(intArg2), intArg2);
        }
    }
}
