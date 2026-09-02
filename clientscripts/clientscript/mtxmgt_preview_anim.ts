/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mtxmgt_preview_anim]

function mtxmgt_preview_anim(intArg0: struct): void {
    let int1: number = -1;
    let int2: number = -1;
    let int3: model = -1;
    let int4: number = -1;
    let int5: model = -1;
    let int6: component = Component.interface_1311.component_1311_54;
    let int7: number = 0;
    let int8: number = 0;

    if (intArg0 != -1) {
        int1 = structParam(intArg0, Param.param_2535);
        int2 = structParam(intArg0, Param.param_2536);
        int3 = structParam(intArg0, Param.param_2537);
        int4 = structParam(intArg0, Param.param_2538);
        int5 = structParam(intArg0, Param.param_2539);
        int7 = structParam(intArg0, Param.param_2540);
        int8 = structParam(intArg0, Param.param_2541);
    }
    proc_mtxmgt_player_preview(int7, int8, 1);

    if (int1 == -1) {
        if (varc_player_kit_torso_client != -1) {
            int1 = basGetAnimReady(varc_player_kit_torso_client);
        } else {
            int1 = basGetAnimReady(1426);
        }
        ifSetOnTimer(hook(cs2_6449, "IIii", [event_com, int6, 0, 0]), Component.interface_1311.component_1311_134);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_1311.component_1311_134);
    }

    if (ccFind(int6, 0) == 1) {
        ccSetOnVarcTransmit(noHook(""));
        ccSetModelAnim(int1);
    }

    if (int2 != -1 && int3 != -1) {
        cs2_6446(int6, 300, int7, ccGetModelAngleY(), int8, int3, int2);
    }

    if (int4 != -1 && int5 != -1) {
        cs2_6446(int6, 300, int7, ccGetModelAngleY(), int8, int5, int4);
    }
}
