/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_climber_randomise]

function dom_climber_randomise(): void {
    let int0: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, varc_1678);
    let str0: string = structParam(int0, Param.param_2095);
    let str1: string = structParam(int0, Param.param_2184);
    let int1: graphic = structParam(int0, Param.param_2101);
    let str2: string = "";
    let int2: number = 0;

    if (clientClock() % 4 == 0) {
        if (structParam(int0, Param.param_2097) == 1) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat.";
        } else if (structParam(int0, Param.param_2097) == 2) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat.";
        } else if (structParam(int0, Param.param_2097) == 3) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat with small blocking pillars.";
        } else if (structParam(int0, Param.param_2097) == 4) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with large blocking pillars.";
        } else if (structParam(int0, Param.param_2097) == 5) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with podiums and small blocking pillars";
        }
        ifSetText(str0, Component.interface_1163.component_1163_88);
        ifSetText(str1 + "<br>" + "<br>" + str2, Component.interface_1163.component_1163_40);
        cs2_5475(str1 + "<br>" + "<br>" + str2, Component.interface_1163.component_1163_40, Component.interface_1163.component_1163_43, Component.interface_1163.component_1163_42);
        ifSetGraphic(int1, Component.interface_1163.component_1163_25);
        soundVorbisVolume(8091, 1, 0, 255);
        varc_1678 = varc_1678 + 1;
        if (varc_1678 > 48) {
            varc_1678 = 1;
        }
        if (varc_1678 == 1) {
            varc_1678 = 2;
        }
        varc_1679 = varc_1679 - 1;
        if (varc_1679 < 1) {
            int0 = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, varc_1677);
            str0 = structParam(int0, Param.param_2095);
            str1 = structParam(int0, Param.param_2184);
            int1 = structParam(int0, Param.param_2101);
            if (structParam(int0, Param.param_2097) == 1) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat.";
            } else if (structParam(int0, Param.param_2097) == 2) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multiway-combat.";
            } else if (structParam(int0, Param.param_2097) == 3) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat with small blocking pillars.";
            } else if (structParam(int0, Param.param_2097) == 4) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with large blocking pillars.";
            } else if (structParam(int0, Param.param_2097) == 5) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with podiums and small blocking pillars";
            }
            ifSetText(str0, Component.interface_1163.component_1163_88);
            ifSetText(str1 + "<br>" + "<br>" + str2, Component.interface_1163.component_1163_40);
            cs2_5475(str1 + "<br>" + "<br>" + str2, Component.interface_1163.component_1163_40, Component.interface_1163.component_1163_43, Component.interface_1163.component_1163_42);
            ifSetGraphic(int1, Component.interface_1163.component_1163_25);
            int2 = cs2_5459(1);
            ifSetText(tostring(int2), Component.interface_1163.component_1163_36);
            ifSetOnTimer(hook(cs2_5478, "", []), Component.interface_1163.component_1163_45);
            ifSetHide(false, Component.interface_1163.component_1163_89);
            varc_dom_bottombar_zpos = -60;
            ifSetPosition(0, varc_dom_bottombar_zpos, 1, 2, Component.interface_1163.component_1163_89);
        }
    }
}
