/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_end_victory]

function clanwars_end_victory(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetText("Victory!", intArg0);
    ifSetPosition(75, 89, 0, 0, intArg0);
    ifSetText("Your clan is victorious.", intArg1);
    ifSetPosition(79, 130, 0, 0, intArg1);
    ifSetPosition(79, 180, 0, 0, intArg2);
    ifSetSize(175, 125, 0, 0, intArg2);
    ifSetPosition(52, 118, 0, 0, intArg3);
    ifSetHide(false, intArg0);
    ifSetHide(false, intArg1);
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg3);
    ifSetHide(false, intArg4);
    ifSetHide(true, intArg5);
}
