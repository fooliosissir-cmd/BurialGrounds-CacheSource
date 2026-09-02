/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ss_update_row]

function ss_update_row(intArg0: number): void {
    let int1: component = -1;
    let int2: component = -1;
    let int3: number = 0;

    switch (intArg0) {
        case 85721111:
            if (varbit_smki_ignore_flag_1 == 0) {
                return;
            }
            int1 = Component.interface_1308.component_1308_47;
            int2 = Component.interface_1308.component_1308_48;
            int3 = varbit_smki_ignore_flag_1;
            break;
        case 85721113:
            if (varbit_smki_ignore_flag_2 == 0) {
                return;
            }
            int1 = Component.interface_1308.component_1308_365;
            int2 = Component.interface_1308.component_1308_366;
            int3 = varbit_smki_ignore_flag_2;
            break;
        case 85721115:
            if (varbit_smki_ignore_flag_3 == 0) {
                return;
            }
            int1 = Component.interface_1308.component_1308_378;
            int2 = Component.interface_1308.component_1308_379;
            int3 = varbit_smki_ignore_flag_3;
            break;
        case 85721117:
            if (varbit_smki_ignore_flag_4 == 0) {
                return;
            }
            int1 = Component.interface_1308.component_1308_391;
            int2 = Component.interface_1308.component_1308_392;
            int3 = varbit_smki_ignore_flag_4;
            break;
        case 85721119:
            if (varbit_smki_ignore_flag_5 == 0) {
                return;
            }
            int1 = Component.interface_1308.component_1308_404;
            int2 = Component.interface_1308.component_1308_405;
            int3 = varbit_smki_ignore_flag_5;
            break;
        case 85721121:
            if (varbit_smki_ignore_flag_6 == 0) {
                return;
            }
            int1 = Component.interface_1308.component_1308_417;
            int2 = Component.interface_1308.component_1308_418;
            int3 = varbit_smki_ignore_flag_6;
            break;
    }
    ifSetText(enumOp(type_int, type_string, Enum.enum_1563, int3), int1);
    ifSetHide(false, int2);
    cs2_6410();
}
