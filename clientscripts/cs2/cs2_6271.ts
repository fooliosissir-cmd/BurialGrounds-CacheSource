/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6271

function cs2_6271(intArg0: number): void {
    varc_cruc_current_cave = intArg0;

    switch (intArg0) {
        case 1:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_1);
            break;
        case 2:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_2);
            break;
        case 3:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_3);
            break;
        case 4:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_4);
            break;
        case 5:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_5);
            break;
        case 6:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_6);
            break;
        case 7:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_7);
            break;
        case 8:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_8);
            break;
        case 9:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_9);
            break;
        case 10:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_10);
            break;
        case 11:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_11);
            break;
        case 12:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_12);
            break;
        case 13:
            ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, Component.cruc_caves.cave_button_13);
            break;
    }

    if (getWindowMode() == 1) {
        if (varc_cruc_overlay_maximise_state < 0) {
            varc_cruc_overlay_maximise_state = 0;
        }
        ifSetHide(true, Component.interface_1296.component_1296_22);
        ifSetHide(false, Component.interface_1296.component_1296_6);
        ifSetPosition(120, 2, 2, 0, Component.interface_1296.component_1296_23);
    }
}
