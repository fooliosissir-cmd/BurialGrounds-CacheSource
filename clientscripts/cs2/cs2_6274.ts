/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6274

function cs2_6274(intArg0: component, intArg1: number): void {
    if (varc_cruc_current_cave == intArg1) {
        ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_3, intArg0);
    } else {
        ifSetGraphic(Graphic.aif_crucible_arena_map_location_icons_1, intArg0);
    }
}
