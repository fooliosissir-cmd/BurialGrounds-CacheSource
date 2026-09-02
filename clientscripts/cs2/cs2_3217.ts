/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3217

function cs2_3217(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: number): void {
    if (createReply() == -3) {
        return;
    }

    if (createGetEmail() == -3) {
        return;
    }

    if (createEmailValidateReply() == -3) {
        return;
    }
    let str0: string = "";

    switch (intArg4) {
        case 6:
            str0 = varcstr_122;
            break;
        case 14:
            str0 = varcstr_326;
            break;
        case 7:
            str0 = cs2_2949(varcstr_124);
            break;
        case 8:
            str0 = cs2_2949(varcstr_125);
            break;
        case 15:
            if (varc_1407 > 0) {
                str0 = tostring(varc_1407);
            }
            break;
        case 16:
            str0 = varcstr_330;
            break;
    }
    varc_1099 = cs2_1401(intArg0, str0, Graphic.verdana_11pt_regular, 0);
    cs2_3218(intArg1, intArg2, intArg3, str0, intArg4);
    proc_create_focus(intArg4, 0);
}
