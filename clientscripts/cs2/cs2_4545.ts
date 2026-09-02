/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4545

function cs2_4545(intArg0: component, intArg1: number, intArg2: number, intArg3: component, intArg4: graphic, intArg5: number): void {
    if ((intArg2 == 0 || intArg2 == 1) && ifGetWidth(intArg0) + intArg5 >= intArg1) {
        ifSetSize(intArg1, ifGetHeight(intArg0), 0, 0, intArg0);
        if (intArg4 != -1) {
            ifSetGraphic(intArg4, intArg3);
        }
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }

    if ((intArg2 == 2 || intArg2 == 3) && ifGetHeight(intArg0) + intArg5 >= intArg1) {
        ifSetSize(ifGetWidth(intArg0), intArg1, 0, 0, intArg0);
        if (intArg4 != -1) {
            ifSetGraphic(intArg4, intArg3);
        }
        ifSetOnTimer(noHook(""), intArg0);
        return;
    }

    switch (intArg2) {
        case 0:
        case 1:
            ifSetSize(ifGetWidth(intArg0) + intArg5, ifGetHeight(intArg0), 0, 0, intArg0);
            break;
        case 2:
        case 3:
            ifSetSize(ifGetWidth(intArg0), ifGetHeight(intArg0) + intArg5, 0, 0, intArg0);
            break;
    }
}
