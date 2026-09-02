/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_33

function cs2_33(intArg0: component, intArg1: component): void {
    let int2: number = ifGetScrollY(intArg1) + 4;

    switch (intArg1) {
        case Component.interface_590.component_590_8:
            int2 = cs2_4754(intArg1, int2, 0);
            break;
    }

    if (ccFind(intArg0, 1) == 1) {
        scrollbar_vertical_doscroll(intArg0, intArg1, int2, true);
    }
}
