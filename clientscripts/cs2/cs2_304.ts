/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_304

function cs2_304(intArg0: coord): void {
    if (intArg0 == -1) {
        return;
    }
    soundSynth(Sound.sound_2266, 1, 0);
    let int1: worldmap = worldMapGetMap(intArg0);
    int1 = cs2_2785(int1);

    if (int1 == -1) {
        return;
    }
    worldmap_overlay_clear(Component.interface_755.component_755_29);
    varcstr_worldmap_findtext = "";
    cs2_308(Component.interface_755.component_755_25);
    ifSetText(worldMapGetMapName(int1), Component.interface_755.component_755_20);
    deltooltip_action(Component.interface_755.component_755_57);
    worldMapSetMapCoordOverride(int1, intArg0);
    worldMapJumptosourcecoord(intArg0);
    varc_worldmap_zoom = worldMapGetConfigZoom(int1);
    worldmap_setzoom();
    worldmap_vartransmit_effects();
}
