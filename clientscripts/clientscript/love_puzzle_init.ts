/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,love_puzzle_init]

function love_puzzle_init(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    cs2_1088(intArg0, 0);
    cs2_680(intArg3);
    cs2_680(intArg5);
    ifSetOnMouseOver(hook(cs2_95, "I", [intArg3]), intArg2);
    ifSetOnMouseOver(hook(cs2_95, "I", [intArg5]), intArg4);
    ifSetOnMouseLeave(hook(cs2_93, "I", [intArg3]), intArg2);
    ifSetOnMouseLeave(hook(cs2_93, "I", [intArg5]), intArg4);
    ifSetScrollPos(0, 300, intArg1);
    ifSetOnTimer(noHook(""), intArg1);
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg4);
    ifSetOnOp(hook(cs2_3479, "III1", [intArg1, intArg2, intArg4, true]), intArg2);
    ifSetOnOp(hook(cs2_3479, "III1", [intArg1, intArg2, intArg4, false]), intArg4);
    ifSetOnVarTransmit(hook(clientscript_love_puzzle_update, "Y", [], [1506, 1507, 1508]), intArg0);
    ifSetOnVarcTransmit(hook(clientscript_love_puzzle_update, "Y", [], [1317, 1318]), intArg0);
    proc_love_puzzle_update();
}
