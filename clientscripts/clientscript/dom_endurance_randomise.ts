/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_endurance_randomise]

function dom_endurance_randomise(): void {
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
        ifSetText(str0, Component.interface_1173.component_1173_25);
        ifSetText(str1 + "<br>" + "<br>" + str2, Component.interface_1173.component_1173_52);
        cs2_5475(str1 + "<br>" + "<br>" + str2, Component.interface_1173.component_1173_52, Component.interface_1173.component_1173_51, Component.interface_1173.component_1173_50);
        ifSetGraphic(int1, Component.interface_1173.component_1173_6);
        soundVorbisVolume(8091, 1, 0, 255);
        varc_1678 = varc_1678 + 1;
        if (varc_1678 > 48) {
            varc_1678 = 1;
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
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat.";
            } else if (structParam(int0, Param.param_2097) == 3) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat with small blocking pillars.";
            } else if (structParam(int0, Param.param_2097) == 4) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with large blocking pillars.";
            } else if (structParam(int0, Param.param_2097) == 5) {
                str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with podiums and small blocking pillars";
            }
            ifSetText(str0, Component.interface_1173.component_1173_25);
            ifSetText(str1 + "<br>" + "<br>" + str2, Component.interface_1173.component_1173_52);
            cs2_5475(str1 + "<br>" + "<br>" + str2, Component.interface_1173.component_1173_52, Component.interface_1173.component_1173_51, Component.interface_1173.component_1173_50);
            ifSetGraphic(int1, Component.interface_1173.component_1173_6);
            int2 = cs2_5459(2);
            ifSetText(tostring(int2), Component.interface_1173.component_1173_31);
            ifSetOnTimer(hook(cs2_5437, "", []), Component.interface_1173.component_1173_8);
            ifSetHide(false, Component.interface_1173.component_1173_54);
            varc_dom_bottombar_zpos = -60;
            ifSetPosition(0, varc_dom_bottombar_zpos, 1, 2, Component.interface_1173.component_1173_54);
        }
    }
}
