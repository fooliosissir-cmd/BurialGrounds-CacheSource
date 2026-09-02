/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_vartransmit_effects]

function worldmap_vartransmit_effects(): void {
    if (varbit_worldmap_textlabels_hidden == 1) {
        worldMapDisableelementcategory(950, 1);
    } else {
        worldMapDisableelementcategory(950, 0);
    }
}
