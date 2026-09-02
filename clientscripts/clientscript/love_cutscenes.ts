/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,love_cutscenes]

function love_cutscenes(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component): void {
    if (varc_tutorial3_cutscene_tracker <= 0) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg4);
        camSmoothreset();
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 10) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg4);
        cs2_3470(intArg0, cs2_284(coord()));
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 20) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg4);
        cs2_3465(intArg0, cs2_284(coord()));
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 30) {
        ifSetHide(true, intArg4);
        cs2_3462(intArg0, intArg1, intArg2, intArg3);
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 40) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg4);
        love_makeup(intArg0, cs2_284(coord()));
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 100) {
        ifSetHide(true, intArg1);
        love_flashback(intArg0, intArg4);
        return;
    }

    if (varc_tutorial3_cutscene_tracker <= 200) {
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg4);
        love_wizardstower(intArg0, cs2_284(coord()));
        return;
    }
    ifSetHide(true, intArg1);
    ifSetHide(true, intArg4);
    carni_cutscenes(intArg0, cs2_284(coord()));
}
