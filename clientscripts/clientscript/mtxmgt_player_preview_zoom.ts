/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mtxmgt_player_preview_zoom]

function mtxmgt_player_preview_zoom(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    let int5: number = 0;
    let int6: number = 150 + intArg4;
    let int7: number = 500 + intArg4;

    if (intArg3 == 1) {
        int6 = 700 + intArg4;
        int7 = 1000 + intArg4;
    }

    if (ccFind(intArg0, intArg1) == 1) {
        int5 = ccGetModelZoom();
        if (intArg2 < 0) {
            int5 = max(int6, int5 - 15);
        } else {
            int5 = min(int7, int5 + 15);
        }
        ccSetModelZoom(int5);
    }
}
