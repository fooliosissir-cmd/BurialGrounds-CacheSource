/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_climber_setup]

function dom_climber_setup(intArg0: number, intArg1: number): void {
    let int2: struct = -1;
    let str0: string = "";
    let str1: string = "";
    let int3: graphic = -1;
    let str2: string = "";
    let int4: number = 0;

    if (varbit_dom_allow_spectators == 0) {
        ifSetHide(true, Component.interface_1163.component_1163_103);
        ifSetHide(false, Component.interface_1163.component_1163_104);
    } else {
        ifSetHide(false, Component.interface_1163.component_1163_103);
        ifSetHide(true, Component.interface_1163.component_1163_104);
    }

    if (varbit_dom_skip_taunt == 0) {
        ifSetHide(true, Component.interface_1163.component_1163_179);
        ifSetHide(false, Component.interface_1163.component_1163_180);
    } else {
        ifSetHide(false, Component.interface_1163.component_1163_179);
        ifSetHide(true, Component.interface_1163.component_1163_180);
    }

    if (varbit_dom_skip_victory == 0) {
        ifSetHide(true, Component.interface_1163.component_1163_181);
        ifSetHide(false, Component.interface_1163.component_1163_182);
    } else {
        ifSetHide(false, Component.interface_1163.component_1163_181);
        ifSetHide(true, Component.interface_1163.component_1163_182);
    }
    ifSetText(tostring(varbit_dom_reward_points), Component.interface_1163.component_1163_34);

    if (varbit_dom_reward_points > 0) {
        ifSetText(tostring(varbit_dom_reward_points / 3), Component.interface_1163.component_1163_38);
    } else {
        ifSetText("0", Component.interface_1163.component_1163_38);
    }
    varc_tooltip_built = 0;
    soundVorbisVolume(8099, 1, 0, 255);

    if (intArg1 == 0) {
        ifSetText(tostring(varbit_dom_climber_prog + 1), Component.interface_1163.component_1163_50);
        varc_1678 = 1 + random(48);
        varc_1679 = 30;
        varc_1677 = intArg0;
        ifSetHide(true, Component.interface_1163.component_1163_89);
        ifSetOnTimer(hook(dom_climber_randomise, "", []), Component.interface_1163.component_1163_45);
    } else {
        varc_1677 = intArg0;
        ifSetText(tostring(varbit_dom_climber_prog), Component.interface_1163.component_1163_50);
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
        ifSetText(str0, Component.interface_1163.component_1163_88);
        ifSetText(str1 + "<br>" + "<br>" + str2, Component.interface_1163.component_1163_40);
        cs2_5475(str1 + "<br>" + "<br>" + str2, Component.interface_1163.component_1163_40, Component.interface_1163.component_1163_43, Component.interface_1163.component_1163_42);
        ifSetGraphic(int3, Component.interface_1163.component_1163_25);
        int4 = cs2_5459(1);
        ifSetText(tostring(int4), Component.interface_1163.component_1163_36);
    }
}
