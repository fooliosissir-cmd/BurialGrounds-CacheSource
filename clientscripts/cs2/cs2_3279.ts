/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3279

function cs2_3279(intArg0: number, intArg1: number, intArg2: number, intArg3: number, strArg0: string): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int4: number = 0;
    let int5: number = 0;

    switch (intArg3) {
        case 1:
            int4 = ifGetWidth(Component.interface_942.component_942_3) / 4;
            int5 = ifGetHeight(Component.interface_942.component_942_3) / 4;
            break;
        case 2:
            int4 = ifGetWidth(Component.interface_942.component_942_3) / 4;
            break;
    }
    ccCreate(Component.interface_942.component_942_5, 5, varc_1152);
    varc_1152 = varc_1152 + 1;

    switch (intArg2) {
        case 1:
            ccSetGraphic(Graphic.rand_map_player_pips_0);
            ccSetPosition(intArg0 * 32 + 6 + int4, intArg1 * 32 + 20 + int5, 0, 2);
            break;
        case 2:
            ccSetGraphic(Graphic.rand_map_player_pips_1);
            ccSetPosition(intArg0 * 32 + 20 + int4, intArg1 * 32 + 20 + int5, 0, 2);
            break;
        case 3:
            ccSetGraphic(Graphic.rand_map_player_pips_2);
            ccSetPosition(intArg0 * 32 + 13 + int4, intArg1 * 32 + 13 + int5, 0, 2);
            break;
        case 4:
            ccSetGraphic(Graphic.rand_map_player_pips_3);
            ccSetPosition(intArg0 * 32 + 6 + int4, intArg1 * 32 + 6 + int5, 0, 2);
            break;
        case 5:
            ccSetGraphic(Graphic.rand_map_player_pips_4);
            ccSetPosition(intArg0 * 32 + 20 + int4, intArg1 * 32 + 6 + int5, 0, 2);
            break;
    }
    ccSetSize(11, 11, 0, 0);
    ccSetOnMouseRepeat(hook(rand_map_tooltip, "IiIs", [event_com, event_comsubid, Component.interface_942.component_942_7, strArg0]));
    ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_942.component_942_7]));
    ccSetfill(true);
    ccSetHide(false);
}
