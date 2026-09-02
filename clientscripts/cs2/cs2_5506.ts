/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5506

function cs2_5506(intArg0: component, intArg1: component, intArg2: number): void {
    let int3: number = ifGetScrollY(intArg1);

    switch (intArg1) {
        case Component.interface_590.component_590_8:
            if (intArg2 > 0) {
                int3 = cs2_191(intArg1, int3, 0);
            } else {
                int3 = cs2_191(intArg1, int3, 1);
            }
            break;
        default:
            int3 = int3 + intArg2 * 45;
            break;
    }

    if (ccFind(intArg0, 3) == 1) {
        cs2_5507(intArg0, intArg1, int3, true);
    }
}
