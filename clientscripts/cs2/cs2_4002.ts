/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4002

function cs2_4002(): void {
    if (getWindowMode() >= 2) {
        if (ifHasSubModal(48889885, 917) == 1) {
            return;
        }
    } else if (ifHasSubModal(35913772, 917) == 1) {
        return;
    }
    let str0: string = "Progress:  ";
    let int0: number = varc_1424;
    let int1: number = varc_1423;
    let str1: string = enumOp(type_int, type_string, Enum.enum_3487, varbit_8575);

    if (varbit_task_priority_mode == 1) {
        if (mapMembers() == 1) {
            int0 = varbit_omge_tutorial_tally;
            int1 = enumGetoutputcount(Enum.enum_5480);
        } else {
            int0 = varbit_tut4_priority_completed;
            int1 = enumGetoutputcount(Enum.enum_3656);
        }
        str1 = "Introductory Tasks";
    }
    let str2: string = tostring(int0);
    let str3: string = tostring(int1);

    if (varbit_8575 == 61) {
        str1 = "Quest Area";
        ifSetHide(true, Component.interface_1056.component_1056_107);
        ifSetHide(true, Component.interface_1056.component_1056_108);
    } else {
        ifSetHide(false, Component.interface_1056.component_1056_107);
        ifSetHide(false, Component.interface_1056.component_1056_108);
    }
    let int2: number = int0 * (ifGetWidth(Component.interface_1056.component_1056_107) - 2) / max(1, int1);
    str0 = append(str0, str2);
    ifSetText(str3, Component.interface_1056.component_1056_104);
    ifSetText(str0, Component.interface_1056.component_1056_102);
    ifSetText(str1, Component.interface_1056.component_1056_106);
    ifSetSize(int2, 18, 0, 0, Component.interface_1056.component_1056_101);
}
