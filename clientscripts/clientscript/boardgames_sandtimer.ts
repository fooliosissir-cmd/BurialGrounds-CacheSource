/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,boardgames_sandtimer]

function boardgames_sandtimer(intArg0: component): void {
    let int1: number = -1;

    if (varc_boardgames_sandtimer == 0) {
        int1 = 1358;
    } else if (varc_boardgames_sandtimer == 1) {
        int1 = 1359;
    } else if (varc_boardgames_sandtimer == 2) {
        int1 = 1360;
    } else if (varc_boardgames_sandtimer == 3) {
        int1 = 1361;
    }
    ifSetModelAnim(-1, intArg0);
    ifSetModelAnim(int1, intArg0);
}
