/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_309

function cs2_309(intArg0: worldmap, intArg1: component, intArg2: number): void {
    let int3: number = 0;

    if (varc_623 != -1 && worldMapGetMap(varc_623) == intArg0) {
        int3 = cs2_292(varc_worldmap_arrow0_style, intArg1, intArg2, int3);
    }

    if (varc_625 != -1 && worldMapGetMap(varc_625) == intArg0) {
        int3 = cs2_292(varc_worldmap_arrow1_style, intArg1, intArg2, int3);
    }

    if (varc_627 != -1 && worldMapGetMap(varc_627) == intArg0) {
        int3 = cs2_292(varc_worldmap_arrow2_style, intArg1, intArg2, int3);
    }

    if (varc_629 != -1 && worldMapGetMap(varc_629) == intArg0) {
        int3 = cs2_292(varc_worldmap_arrow3_style, intArg1, intArg2, int3);
    }

    if (varp_1159 != -1 && worldMapGetMap(varp_1159) == intArg0) {
        int3 = cs2_292(Struct.struct_972, intArg1, intArg2, int3);
    }

    if (varc_940 != -1 && worldMapGetMap(varc_940) == intArg0) {
        int3 = cs2_292(varc_worldmap_arrowgravestone_style, intArg1, intArg2, int3);
    }

    if (varc_worldmap_player_coord != -1 && worldMapGetMap(varc_worldmap_player_coord) == intArg0) {
        int3 = cs2_292(Struct.worldmap_overlay_style_default, intArg1, intArg2, int3);
    }
}
