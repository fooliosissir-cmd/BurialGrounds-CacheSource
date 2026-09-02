/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5761

function cs2_5761(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let str0: string = "You're about to get a recommendation." + "<br>" + "<br>" + "These are suggestions for activities you might like to try." + "<br>" + "<br>" + "Most recommendations can't be 'completed' - just do them for as long as you want and stop whenever you want.";
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;

    if (ifFind(intArg0) == 1) {
        cs2_5739(1, 0, str0, intArg0, ccGetParentLayer());
        ifSetSize(ifGetWidth(intArg0) + 10, ifGetHeight(intArg0) + 10, 0, 0, intArg1);
        ifSetSize(ifGetWidth(intArg1), ifGetHeight(intArg1), 0, 0, ccGetParentLayer());
        ifSetSize(ifGetWidth(ifGetParentLayer(intArg1)), ifGetHeight(intArg1) + ifGetHeight(intArg3) + ifGetHeight(intArg2) + 20, 0, 0, ifGetParentLayer(intArg1));
        int5 = ifGetY(intArg2) + ifGetHeight(intArg2);
        int6 = ifGetY(intArg3);
        ifSetPosition(0, (int6 - int5) / 2 + int5 - ifGetHeight(ccGetParentLayer()) / 2, 1, 0, ccGetParentLayer());
        ifSetPosition(0, 0, 1, 1, intArg1);
        ifSetPosition(0, 0, 1, 1, intArg0);
    }
}
