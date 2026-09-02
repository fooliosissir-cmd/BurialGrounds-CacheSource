/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fishcomp_side_load]

function proc_fishcomp_side_load(): void {
    ifSetOnVarcTransmit(hook(clientscript_fishcomp_refresh, "Y", [], [1104, 1105, 1106, 1107, 1108, 1109, 1110]), Component.interface_923.component_923_114);
    ifSetObjectNonum(Obj.fishcomp_bait_worms, 0, Component.interface_923.component_923_62);
    ifSetObjectNonum(Obj.fishcomp_bait_maggots, 0, Component.interface_923.component_923_60);
    ifSetObjectNonum(Obj.fishcomp_bait_locusts, 0, Component.interface_923.component_923_58);
    ifSetObjectNonum(Obj.fishcomp_bait_crickets, 0, Component.interface_923.component_923_56);
    ifSetObjectNonum(Obj.fishcomp_bait_cray, 0, Component.interface_923.component_923_54);
    ifSetObjectNonum(Obj.fishcomp_bait_shrimp, 0, Component.interface_923.component_923_52);
    ifSetObjectNonum(Obj.fishcomp_bait_emerald_butterfly, 0, Component.interface_923.component_923_50);
    ifSetObjectNonum(Obj.fishcomp_bait_storm_butterfly, 0, Component.interface_923.component_923_48);
    ifSetOnVarcTransmit(hook(cs2_256, "Y", [], [1111, 1113, 1112, 1114, 1115, 1116, 1117, 1927]), Component.interface_919.component_919_52);
    varc_fishcomp_result_fish = -1;
    varc_fishcomp_result_weight = -1;
    varc_fishcomp_result_habitat = -1;
    varc_fishcomp_result_bait = -1;
    varc_fishcomp_result_hook = -1;
    varc_fishcomp_result_distance = -1;
    varc_fishcomp_result_rating = -1;
    varc_fishcomp_result_big_fish = -1;
    ifSetScrollSize(ifGetWidth(Component.interface_919.component_919_59), ifGetHeight(Component.interface_919.component_919_59), Component.interface_919.component_919_59);
}
