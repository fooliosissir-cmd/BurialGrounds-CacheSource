/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mtxmgt_player_preview]

function proc_mtxmgt_player_preview(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: number = 0;

    if (varc_1968 == 1) {
        int3 = 200;
        int4 = 850;
        intArg1 = 80;
    } else {
        int3 = 200;
        int4 = 300 + intArg0;
        intArg1 = 110 + intArg1;
    }

    if (ccFind(Component.interface_1311.component_1311_54, 0) == 1 && intArg2 == 0) {
        int3 = ccGetModelAngleY();
        int4 = ccGetModelZoom();
        intArg1 = ccGetmodelyof();
    }
    ccDeleteAll(Component.interface_1311.component_1311_54);
    ccCreate(Component.interface_1311.component_1311_54, 6, ifGetNextSubId(Component.interface_1311.component_1311_54));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);

    if (varc_1968 == 1) {
        ccSetPlayerHeadSelf();
        if (int3 > 1024) {
            int3 = max(int3, 1572);
        } else {
            int3 = min(int3, 512);
        }
    } else {
        ccSetPlayerModelSelf();
    }
    ccSetModelAngle(0, intArg1, 10, int3, 10, int4);
    ccSetOnHold(hook(mtxmgt_player_rotate, "Iiii", [event_com, event_comsubid, event_mousex, varc_1968]));
    ccSetOnScrollWheel(hook(mtxmgt_player_preview_zoom, "Iiiii", [event_com, event_comsubid, event_mousey, varc_1968, intArg0]));

    if (varc_1968 == 1) {
        ccSetModelAnim(12287);
    } else {
        if (varc_player_kit_torso_client != -1) {
            ccSetModelAnim(basGetAnimReady(varc_player_kit_torso_client));
        } else {
            ccSetModelAnim(basGetAnimReady(1426));
        }
        ccSetOnVarcTransmit(hook(cs2_1517, "IiY", [event_com, event_comsubid], [779]));
    }

    if (varc_1969 == false) {
        ifSetOnTimer(hook(cs2_6449, "IIii", [event_com, Component.interface_1311.component_1311_54, 0, varc_1968]), Component.interface_1311.component_1311_134);
    } else {
        ifSetOnTimer(hook(cs2_6450, "IIii", [event_com, Component.interface_1311.component_1311_54, 0, varc_1968]), Component.interface_1311.component_1311_134);
    }
    varc_1969 = false;
    let int5: number = varc_1968;
    ifSetOnVarcTransmit(hook(cs2_6442, "iiiY", [intArg0, intArg1, int5], [1968]), Component.interface_1311.component_1311_54);
    ifSetOnVarcTransmit(hook(cs2_6445, "I1iY", [Component.interface_1311.component_1311_54, varc_1969, varc_1968], [1969]), Component.interface_1311.component_1311_134);
}
