/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5706

function cs2_5706(intArg0: component, intArg1: number): void {
    if (ifGetY(intArg0) == intArg1) {
        varc_1752 = 0;
        ifSetOnTimer(noHook(""), Component.interface_1218.component_1218_74);
    } else if (ifGetY(intArg0) > intArg1) {
        if (ifGetY(intArg0) > intArg1 + 70) {
            ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) - 8, 0, 0, intArg0);
        } else if (ifGetY(intArg0) > intArg1 + 30) {
            ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) - 3, 0, 0, intArg0);
        } else if (ifGetY(intArg0) > intArg1 + 20) {
            ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) - 2, 0, 0, intArg0);
        } else {
            ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) - 1, 0, 0, intArg0);
        }
    } else if (ifGetY(intArg0) < intArg1 - 70) {
        ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) + 8, 0, 0, intArg0);
    } else if (ifGetY(intArg0) < intArg1 - 30) {
        ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) + 3, 0, 0, intArg0);
    } else if (ifGetY(intArg0) < intArg1 - 20) {
        ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) + 2, 0, 0, intArg0);
    } else {
        ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) + 1, 0, 0, intArg0);
    }
}
