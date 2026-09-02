/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_endurance_setup]

function dom_endurance_setup(intArg0: number, intArg1: number): void {
    let int2: struct = -1;
    let str0: string = "";
    let str1: string = "";
    let int3: graphic = -1;
    let str2: string = "";
    let int4: number = 0;

    if (varbit_dom_allow_spectators == 0) {
        ifSetHide(true, Component.interface_1173.component_1173_103);
        ifSetHide(false, Component.interface_1173.component_1173_104);
    } else {
        ifSetHide(false, Component.interface_1173.component_1173_103);
        ifSetHide(true, Component.interface_1173.component_1173_104);
    }

    if (varbit_dom_skip_taunt == 0) {
        ifSetHide(true, Component.interface_1173.component_1173_169);
        ifSetHide(false, Component.interface_1173.component_1173_170);
    } else {
        ifSetHide(false, Component.interface_1173.component_1173_169);
        ifSetHide(true, Component.interface_1173.component_1173_170);
    }

    if (varbit_dom_skip_victory == 0) {
        ifSetHide(true, Component.interface_1173.component_1173_172);
        ifSetHide(false, Component.interface_1173.component_1173_173);
    } else {
        ifSetHide(false, Component.interface_1173.component_1173_172);
        ifSetHide(true, Component.interface_1173.component_1173_173);
    }
    ifSetText(tostring(varbit_dom_reward_points), Component.interface_1173.component_1173_29);

    if (varbit_dom_reward_points > 0) {
        ifSetText(tostring(varbit_dom_reward_points), Component.interface_1173.component_1173_33);
    } else {
        ifSetText("0", Component.interface_1173.component_1173_33);
    }
    varc_tooltip_built = 0;
    soundVorbisVolume(8099, 1, 0, 255);

    if (intArg1 == 0) {
        varc_1678 = 1 + random(48);
        varc_1679 = 30;
        varc_1677 = intArg0;
        ifSetHide(true, Component.interface_1173.component_1173_54);
        ifSetOnTimer(hook(dom_endurance_randomise, "", []), Component.interface_1173.component_1173_8);
    } else {
        varc_1677 = intArg0;
        int2 = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, varc_1677);
        str0 = structParam(int2, Param.param_2095);
        str1 = structParam(int2, Param.param_2184);
        int3 = structParam(int2, Param.param_2101);
        if (structParam(int2, Param.param_2097) == 1) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat.";
        } else if (structParam(int2, Param.param_2097) == 2) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat.";
        } else if (structParam(int2, Param.param_2097) == 3) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat with small blocking pillars.";
        } else if (structParam(int2, Param.param_2097) == 4) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with large blocking pillars.";
        } else if (structParam(int2, Param.param_2097) == 5) {
            str2 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with podiums";
        }
        ifSetText(str0, Component.interface_1173.component_1173_25);
        ifSetText(str1 + "<br>" + "<br>" + str2, Component.interface_1173.component_1173_52);
        cs2_5475(str1 + "<br>" + "<br>" + str2, Component.interface_1173.component_1173_52, Component.interface_1173.component_1173_51, Component.interface_1173.component_1173_50);
        ifSetGraphic(int3, Component.interface_1173.component_1173_6);
        int4 = cs2_5459(2);
        ifSetText(tostring(int4), Component.interface_1173.component_1173_31);
    }
}
