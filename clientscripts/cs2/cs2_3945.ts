/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3945

function cs2_3945(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg2 == 1) {
        varc_create_displayname_in_progress = 1;
    }

    switch (intArg0) {
        case 1:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_331);
            }
            varcstr_330 = varcstr_331;
            break;
        case 2:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_332);
            }
            varcstr_330 = varcstr_332;
            break;
        case 3:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_333);
            }
            varcstr_330 = varcstr_333;
            break;
        case 4:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_334);
            }
            varcstr_330 = varcstr_334;
            break;
        case 5:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_335);
            }
            varcstr_330 = varcstr_335;
            break;
        case 6:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_336);
            }
            varcstr_330 = varcstr_336;
            break;
        default:
            if (intArg2 == 1) {
                resumeStringDialog(varcstr_330);
            }
            break;
    }
    let int3: component = Component.interface_1028.component_1028_189;
    let int4: component = Component.interface_1028.component_1028_190;
    let int5: component = Component.interface_1028.component_1028_191;

    if (intArg1 == 0) {
        int3 = Component.interface_890.component_890_44;
        int4 = Component.interface_890.component_890_45;
        int5 = Component.interface_890.component_890_46;
    }
    ifSetText(varcstr_330, int4);
    varc_1099 = stringLength(varcstr_330);
    cs2_3218(int3, int4, int5, varcstr_330, 16);
}
