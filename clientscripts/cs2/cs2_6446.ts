/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6446

function cs2_6446(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: model, intArg6: number): void {
    intArg4 = intArg4 + 110;
    intArg1 = intArg1 + intArg2;

    if (ccFind(Component.interface_1311.component_1311_54, 0) == 1) {
        intArg3 = ccGetModelAngleY();
        intArg1 = ccGetModelZoom();
        intArg4 = ccGetmodelyof();
    }
    ccCreate(intArg0, 6, ifGetNextSubId(intArg0));
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetModel(intArg5);
    ccSetModelAngle(0, intArg4, 10, intArg3, 10, intArg1);
    ccSetModelAnim(intArg6);
    ccSetOnHold(hook(mtxmgt_player_rotate, "Iiii", [event_com, event_comsubid, event_mousex, 0]));
    ccSetOnScrollWheel(hook(mtxmgt_player_preview_zoom, "Iiiii", [event_com, event_comsubid, event_mousey, 0, intArg2]));
}
