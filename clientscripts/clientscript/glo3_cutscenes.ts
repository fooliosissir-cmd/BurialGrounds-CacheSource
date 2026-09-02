/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,glo3_cutscenes]

function glo3_cutscenes(intArg0: component): void {
    if (varc_glo3_cutscene <= 100) {
        cs2_4130(intArg0);
        return;
    }

    if (varc_glo3_cutscene <= 200) {
        cs2_4131(intArg0, cs2_284(coord()));
        return;
    }

    if (varc_glo3_cutscene <= 300) {
        cs2_4132(intArg0, cs2_284(coord()));
        return;
    }
}
