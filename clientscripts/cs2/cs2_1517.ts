/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1517

function cs2_1517(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (varc_player_kit_torso_client != -1) {
            ccSetModelAnim(basGetAnimReady(varc_player_kit_torso_client));
        } else {
            ccSetModelAnim(basGetAnimReady(1426));
        }
    }
}
