/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,player_kit_player_create]

function player_kit_player_create(intArg0: component, intArg1: number, intArg2: number): void {
    ccCreate(intArg0, 6, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetPlayerModelSelf();
    ccSetModelAngle(0, intArg2, 0, 0, 0, intArg1);

    if (varc_player_kit_torso_client != -1) {
        ccSetModelAnim(basGetAnimReady(varc_player_kit_torso_client));
    } else {
        ccSetModelAnim(basGetAnimReady(1426));
    }
    ccSetOnVarcTransmit(hook(cs2_1517, "IiY", [event_com, event_comsubid], [779]));
    ccSetOnClick(hook(cs2_347, "Iii", [event_com, event_comsubid, event_mousex]));
}
