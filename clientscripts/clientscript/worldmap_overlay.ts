/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_overlay]

function worldmap_overlay(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: number): void {
    if (worldMapIsloaded() == 0) {
        worldmap_overlay_clear(intArg0);
        return;
    }
    let int5: number = ifGetWidth(intArg1);

    if (int5 <= 0) {
        return;
    }
    let [int6, int7] = worldMapGetConfigSize();

    if (int6 <= 0) {
        return;
    }
    let [int8, int9] = worldMapGetDisplayPosition();
    let int10: number = int9 + int7 / 2;
    let int11: number = int9 - int7 / 2;
    let int12: number = int8 + int6 / 2;
    let int13: number = int8 - int6 / 2;
    int13 = int13 + scale(int6, int5, int5 - ifGetWidth(intArg0));

    if (int8 != intArg2 || int9 != intArg3 || int7 != intArg4) {
        ifSetOnTimer(hook(worldmap_overlay, "IIiii", [intArg0, intArg1, int8, int9, int7]), intArg0);
        worldmap_elements_update(intArg0, int10, int11, int12, int13);
    }

    if (varbit_worldmap_yah_hidden == 0) {
        worldmap_arrow_update(Component.interface_755.component_755_36, varc_worldmap_player_coord, "You are here", Struct.worldmap_overlay_style_default, intArg0, int10, int11, int12, int13);
    } else {
        ccDeleteAll(Component.interface_755.component_755_36);
    }
    worldmap_arrow_update(Component.interface_755.component_755_37, varc_623, varcstr_53, varc_worldmap_arrow0_style, intArg0, int10, int11, int12, int13);
    worldmap_arrow_update(Component.interface_755.component_755_38, varc_625, varcstr_54, varc_worldmap_arrow1_style, intArg0, int10, int11, int12, int13);
    worldmap_arrow_update(Component.interface_755.component_755_39, varc_627, varcstr_55, varc_worldmap_arrow2_style, intArg0, int10, int11, int12, int13);
    worldmap_arrow_update(Component.interface_755.component_755_40, varc_629, varcstr_56, varc_worldmap_arrow3_style, intArg0, int10, int11, int12, int13);
    worldmap_arrow_update(Component.interface_755.component_755_41, varc_940, varcstr_190, varc_worldmap_arrowgravestone_style, intArg0, int10, int11, int12, int13);
    worldmap_arrow_update(Component.interface_755.component_755_42, varp_1159, "Your marker", Struct.struct_972, intArg0, int10, int11, int12, int13);
}
