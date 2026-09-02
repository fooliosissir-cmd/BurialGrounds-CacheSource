/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_187

function cs2_187(intArg0: component, intArg1: component): void {
    let int2: number = ifGetScrollY(intArg1) - 4;

    switch (intArg1) {
        case Component.interface_590.component_590_8:
            int2 = cs2_191(intArg1, int2, 1);
            break;
    }

    if (ccFind(intArg0, 3) == 1) {
        cs2_5507(intArg0, intArg1, int2, true);
    }
}
