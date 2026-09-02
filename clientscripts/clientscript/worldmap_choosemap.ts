/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_choosemap]

function worldmap_choosemap(intArg0: worldmap, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    soundSynth(Sound.sound_2266, 1, 0);
    intArg0 = cs2_2785(intArg0);

    if (intArg0 == worldMapGetcurrentmap()) {
        proc_worldmap_showmenu(false, intArg1, intArg2, intArg3, intArg4, intArg5);
        return;
    }
    varcstr_worldmap_findtext = "";
    cs2_308(intArg4);
    worldmap_overlay_clear(intArg5);
    deltooltip_action(Component.interface_755.component_755_57);
    worldMapSetMap(intArg0);
    varc_worldmap_zoom = worldMapGetConfigZoom(intArg0);
    worldmap_setzoom();
    worldmap_vartransmit_effects();
    proc_worldmap_showmenu(false, intArg1, intArg2, intArg3, intArg4, intArg5);
}
