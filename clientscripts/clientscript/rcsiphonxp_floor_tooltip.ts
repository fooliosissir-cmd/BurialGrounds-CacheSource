/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rcsiphonxp_floor_tooltip]

function rcsiphonxp_floor_tooltip(intArg0: component, intArg1: component): void {
    switch (varc_1917) {
        case 1:
            cs2_569(intArg0, -1, intArg1, "Current Floor: Bottom Floor", 25, 190);
            break;
        case 2:
            cs2_569(intArg0, -1, intArg1, "Current Floor: Middle Floor", 25, 190);
            break;
        case 3:
            cs2_569(intArg0, -1, intArg1, "Current Floor: Top Floor", 25, 190);
            break;
        default:
            cs2_569(intArg0, -1, intArg1, "Current Floor.", 25, 190);
            break;
    }
}
