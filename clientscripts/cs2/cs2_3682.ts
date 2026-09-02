/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3682

function cs2_3682(): void {
    if (stringLength(varcstr_196) == 0 && varc_meslayermode != 14) {
        ifSetGraphic(Graphic.graphic_3246, Component.interface_187.component_187_18);
        meslayer_mode14();
    } else {
        music_search_close();
    }
}
