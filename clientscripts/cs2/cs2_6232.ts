/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6232

function cs2_6232(): void {
    ccDeleteAll(Component.mtxrecol.recolour_equipment_set);
    cs2_6233(0, Component.mtxrecol.recolour_equipment_set);
    player_kit_player_create(Component.mtxrecol.recolour_equipment_set, 450, 100);
}
