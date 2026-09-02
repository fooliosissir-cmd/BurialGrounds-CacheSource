/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scrollbar_vertical_wheel]

function scrollbar_vertical_wheel(intArg0: component, intArg1: component, intArg2: number): void {
    let int3: number = ifGetScrollY(intArg1);

    switch (intArg1) {
        case Component.interface_590.component_590_8:
            if (intArg2 > 0) {
                int3 = cs2_4754(intArg1, int3, 0);
            } else {
                int3 = cs2_4754(intArg1, int3, 1);
            }
            break;
        default:
            int3 = int3 + intArg2 * 45;
            break;
    }

    if (ccFind(intArg0, 1) == 1) {
        scrollbar_vertical_doscroll(intArg0, intArg1, int3, true);
    }
}
