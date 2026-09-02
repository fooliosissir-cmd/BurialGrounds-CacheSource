/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3236

function cs2_3236(intArg0: number, intArg1: component, intArg2: component, intArg3: number, intArg4: component): void {
    let str0: string = "";

    switch (intArg3) {
        case 3:
            str0 = varcstr_32;
            break;
        case 4:
            str0 = cs2_2949(varcstr_33);
            break;
    }
    varc_1099 = cs2_1401(intArg0, str0, Graphic.verdana_11pt_regular, 0);
    cs2_3237(intArg4, intArg1, intArg2, str0, intArg3);
}
