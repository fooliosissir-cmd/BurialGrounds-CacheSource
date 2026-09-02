/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6452

function cs2_6452(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg2 >= intArg3) {
        ifSetOnTimer(hook(cs2_6449, "IIii", [intArg0, intArg1, 0, intArg4]), intArg0);
        if (ccFind(intArg1, 0) == 1) {
            if (intArg4 == 1) {
                ccSetModelAnim(12287);
            } else {
                if (varc_player_kit_torso_client != -1) {
                    ccSetModelAnim(basGetAnimReady(varc_player_kit_torso_client));
                } else {
                    ccSetModelAnim(basGetAnimReady(1426));
                }
                ccSetOnVarcTransmit(hook(cs2_1517, "IiY", [event_com, event_comsubid], [779]));
            }
        }
    } else {
        ifSetOnTimer(hook(cs2_6452, "IIiii", [intArg0, intArg1, intArg2 + 1, intArg3, intArg4]), intArg0);
    }
}
