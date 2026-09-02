/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dom_free_thumbnail]

function dom_free_thumbnail(intArg0: number): void {
    let str0: string = "";

    varc_dom_free_current_thumbnail = intArg0;
    let int1: number = (varc_dom_free_current_tab_client - 1) * 6 + intArg0;
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_28);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_27);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_26);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_25);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_24);
    ifSetGraphic(Graphic.aif_domtower_small_boss_border_0, Component.interface_1168.component_1168_23);

    if (intArg0 == 1) {
        ifSetGraphic(Graphic.aif_domtower_small_boss_border_3, Component.interface_1168.component_1168_28);
    } else if (intArg0 == 2) {
        ifSetGraphic(Graphic.aif_domtower_small_boss_border_3, Component.interface_1168.component_1168_27);
    } else if (intArg0 == 3) {
        ifSetGraphic(Graphic.aif_domtower_small_boss_border_3, Component.interface_1168.component_1168_26);
    } else if (intArg0 == 4) {
        ifSetGraphic(Graphic.aif_domtower_small_boss_border_3, Component.interface_1168.component_1168_25);
    } else if (intArg0 == 5) {
        ifSetGraphic(Graphic.aif_domtower_small_boss_border_3, Component.interface_1168.component_1168_24);
    } else if (intArg0 == 6) {
        ifSetGraphic(Graphic.aif_domtower_small_boss_border_3, Component.interface_1168.component_1168_23);
    }
    let int2: struct = enumOp(type_int, type_struct, Enum.dom_boss_id_to_struct, int1);
    let str1: string = structParam(int2, Param.param_2095);
    let str2: string = structParam(int2, Param.param_2184);

    if (structParam(int2, Param.param_2097) == 1) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat.";
    } else if (structParam(int2, Param.param_2097) == 2) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat.";
    } else if (structParam(int2, Param.param_2097) == 3) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Single-way combat with small blocking pillars.";
    } else if (structParam(int2, Param.param_2097) == 4) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with large blocking pillars.";
    } else if (structParam(int2, Param.param_2097) == 5) {
        str0 = "<col=f5b241>" + "Arena" + "</col>" + ": Multi-way combat with podiums";
    }
    ifSetText(str1, Component.interface_1168.component_1168_2);
    soundVorbisVolume(8097, 1, 0, 180);

    if (cs2_5451(int1) == 0) {
        if (int1 == 1) {
            ifSetText("You must win against this monster in Endurance or Special mode before you can fight it here.", Component.interface_1168.component_1168_101);
        } else if (int1 == 22 || int1 == 10 || int1 == 6 || int1 == 34 || int1 == 23 || int1 == 11 || int1 == 39) {
            ifSetText("You must win against this monster in Climber, Endurance or Special mode before you can fight it here.", Component.interface_1168.component_1168_101);
        } else {
            ifSetText("You must win against this monster in Climber or Endurance mode before you can fight it here.", Component.interface_1168.component_1168_101);
        }
    } else {
        ifSetText(str2 + "<br>" + "<br>" + str0, Component.interface_1168.component_1168_101);
    }
    cs2_5475(str2, Component.interface_1168.component_1168_101, Component.interface_1168.component_1168_10, Component.interface_1168.component_1168_13);
}
