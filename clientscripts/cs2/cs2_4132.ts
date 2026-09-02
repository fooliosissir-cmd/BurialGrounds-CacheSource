/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4132

function cs2_4132(intArg0: component, intArg1: coord): void {
    switch (varc_glo3_cutscene) {
        case 201:
            ccDeleteAll(intArg0);
            ccCreate(intArg0, 3, 0);
            ccSetfill(true);
            ccSetColour(colour(0x7F0000));
            ccSetSize(0, 0, 1, 1);
            ccSetPosition(0, 0, 0, 0);
            ccSetTrans(255);
            cs2_665(colour(0x000000), 50, intArg0, 1);
            break;
        case 202:
            cs2_667(50, intArg0, 1);
            break;
        case 203:
            if (ccFind(intArg0, 0) == 1) {
                ccSetOnTimer(hook(cc_fade2_flash_timer, "Iiiiiiii\xab", [intArg0, 0, 3, -3, 150, 255, 50, 0, 3581]));
            }
            break;
        case 204:
            ccDeleteAll(intArg0);
            proc_fadeout(colour(0x000000), 50, intArg0);
            break;
        case 205:
            proc_fadein(50, intArg0);
            break;
        case 206:
            ccDeleteAll(intArg0);
            break;
    }
}
