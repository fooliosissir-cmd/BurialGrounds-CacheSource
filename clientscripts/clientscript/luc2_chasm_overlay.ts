/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,luc2_chasm_overlay]

function luc2_chasm_overlay(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    switch (varbit_darkness_level) {
        case 1:
            ifSetTrans(200, intArg2);
            break;
        case 2:
            ifSetTrans(150, intArg2);
            break;
        case 3:
            ifSetTrans(50, intArg2);
            break;
        default:
            ifSetTrans(255, intArg2);
            break;
    }

    switch (varc_playerdesign2_client_feetcol) {
        case 1:
            proc_tutorial3_fadeout(colour(0x000000), 20, intArg3);
            break;
        case 2:
            ifSetHide(false, intArg0);
            ifSetModelAnim(10708, intArg1);
            ifSetHide(true, intArg2);
            proc_tutorial3_fadein(10, intArg3);
            break;
        case 3:
            ifSetHide(true, intArg0);
            ifSetHide(true, intArg2);
            proc_tutorial3_fadein(50, intArg3);
            break;
        case 4:
            ifSetHide(false, intArg0);
            ifSetModelAnim(10712, intArg1);
            ifSetHide(true, intArg2);
            proc_tutorial3_fadein(115, intArg3);
            break;
        case 5:
            ifSetHide(true, intArg0);
            ifSetHide(false, intArg2);
            proc_tutorial3_fadein(50, intArg3);
            break;
        default:
            ifSetHide(true, intArg0);
            ifSetHide(false, intArg2);
            break;
    }
}
