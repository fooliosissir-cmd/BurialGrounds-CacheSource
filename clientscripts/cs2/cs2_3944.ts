/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3944

function cs2_3944(intArg0: number, intArg1: number, intArg2: boolean): void {
    if (varc_create_displayname_in_progress == 1) {
        return;
    }
    let int3: component = Component.interface_1028.component_1028_189;
    let int4: component = Component.interface_1028.component_1028_190;
    let int5: component = Component.interface_1028.component_1028_191;

    if (intArg2 == false) {
        int3 = Component.interface_890.component_890_44;
        int4 = Component.interface_890.component_890_45;
        int5 = Component.interface_890.component_890_46;
    }

    switch (intArg0) {
        case 13:
            return;
        case 84:
            varc_create_displayname_in_progress = 1;
            return;
        case 96:
        case 97:
        case 98:
        case 99:
        case 102:
        case 103:
            varc_1099 = cs2_1553(intArg0, varc_1099, varcstr_330);
            cs2_3218(int3, int4, int5, varcstr_330, 16);
            return;
    }

    if (stringLength(varcstr_330) >= 12 && intArg0 != 85 && intArg0 != 101) {
        return;
    }

    if (stringIndexofChar("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 _-", intArg1, 0) != -1 || intArg0 == 85 || intArg0 == 101) {
        [varcstr_330, varc_1099] = cs2_802(varc_1099, varcstr_330, 2, intArg0, intArg1);
        ifSetText(varcstr_330, int4);
        cs2_3218(int3, int4, int5, varcstr_330, 16);
    }
}
