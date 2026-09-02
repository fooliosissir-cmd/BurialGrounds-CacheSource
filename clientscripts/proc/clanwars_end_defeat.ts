/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_end_defeat]

function clanwars_end_defeat(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetText("Defeat!", intArg0);
    ifSetPosition(64, 49, 0, 0, intArg0);
    ifSetText("Your clan has been defeated.", intArg1);
    ifSetPosition(41, 93, 0, 0, intArg1);
    ifSetPosition(41, 179, 0, 0, intArg2);
    ifSetSize(180, 125, 0, 0, intArg2);
    ifSetPosition(38, 81, 0, 0, intArg3);
    ifSetHide(false, intArg0);
    ifSetHide(false, intArg1);
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg3);
    ifSetHide(true, intArg4);
    ifSetHide(false, intArg5);
}
