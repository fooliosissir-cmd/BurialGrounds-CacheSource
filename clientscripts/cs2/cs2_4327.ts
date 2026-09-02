/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4327

function cs2_4327(intArg0: number, intArg1: component): void {
    if (ccFind(intArg1, intArg0) == 1) {
        if (intArg1 == Component.clan_flag_selection.flag_backgrounds_layer && varp_clan_flag_varp == intArg0) {
            ccSetGraphic(Graphic.aif_smalltabs_whole_3);
        } else {
            ccSetGraphic(Graphic.aif_smalltabs_whole_0);
        }
    }
}
