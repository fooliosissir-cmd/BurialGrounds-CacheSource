/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4654

function cs2_4654(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int3: number = 0;
    let int4: number = 0;
    let int5: component = Component.fremsaga_map.sig_contents;

    if (varbit_fremsaga_current_saga == 1) {
        int5 = Component.fremsaga_map.sig_contents;
    }

    if (varbit_fremsaga_current_saga == 2) {
        int5 = Component.fremsaga_map.veng_contents;
    }

    if (varbit_fremsaga_current_saga == 4) {
        if (varbit_fremsaga_floorset == 1) {
            int5 = Component.fremsaga_map.thok_frzncontents;
        }
        if (varbit_fremsaga_floorset == 2) {
            int5 = Component.fremsaga_map.thok_abndcontents;
        }
        if (varbit_fremsaga_floorset == 3) {
            int5 = Component.fremsaga_map.thok_furncontents;
        }
    }
    ccCreate(int5, 5, 0);
    ccSetGraphic(Graphic.rand_map_player_pips_0);
    ccSetPosition(intArg0 * 32 + 10 + int3, intArg1 * 32 + 10 + int4, 0, 2);
    ccSetSize(11, 11, 0, 0);
}
