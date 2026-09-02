/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,boardgames_rank_update]

function boardgames_rank_update(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    switch (varc_808) {
        case 1:
            ifSetHide(true, intArg3);
            ifSetHide(true, intArg4);
            ifSetHide(true, intArg5);
            ifSetHide(false, intArg2);
            ifSetText("Draughts", intArg0);
            ifSetText(tostring(varp_354), intArg1);
            break;
        case 2:
            ifSetHide(true, intArg2);
            ifSetHide(true, intArg4);
            ifSetHide(true, intArg5);
            ifSetHide(false, intArg3);
            ifSetText("Runelink", intArg0);
            ifSetText(tostring(varp_353), intArg1);
            break;
        case 3:
            ifSetHide(true, intArg2);
            ifSetHide(true, intArg3);
            ifSetHide(true, intArg5);
            ifSetHide(false, intArg4);
            ifSetText("Runesquares", intArg0);
            ifSetText(tostring(varp_648), intArg1);
            break;
        case 4:
            ifSetHide(true, intArg2);
            ifSetHide(true, intArg3);
            ifSetHide(true, intArg4);
            ifSetHide(false, intArg5);
            ifSetText("Runeversi", intArg0);
            ifSetText(tostring(varp_649), intArg1);
            break;
        default:
            ifSetHide(true, intArg3);
            ifSetHide(true, intArg4);
            ifSetHide(true, intArg5);
            ifSetHide(true, intArg2);
            ifSetText("", intArg0);
            ifSetText("", intArg1);
            break;
    }
}
