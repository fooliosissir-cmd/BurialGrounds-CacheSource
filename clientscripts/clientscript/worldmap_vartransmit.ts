/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_vartransmit]

function worldmap_vartransmit(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: number): void {
    worldmap_key_build(varbit_worldmap_keysort, intArg0, intArg1, intArg2);

    if (intArg5 != varbit_worldmap_samemaplinks_hidden) {
        ifSetOnVarTransmit(hook(worldmap_vartransmit, "IIIIIiY", [intArg0, intArg1, intArg2, intArg3, intArg4, varbit_worldmap_samemaplinks_hidden], [463]), intArg4);
        worldmap_overlay_clear(intArg3);
    }
    worldmap_vartransmit_effects();
}
