/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6442

function cs2_6442(intArg0: number, intArg1: number, intArg2: number): void {
    if (intArg2 != varc_1968) {
        proc_mtxmgt_player_preview(intArg0, intArg1, 1);
    } else if (ccFind(Component.interface_1311.component_1311_54, 0) == 1 && ccGetModelZoom() > 500 && varc_1968 == 0) {
        proc_mtxmgt_player_preview(0, 0, 1);
    }
}
