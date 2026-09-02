/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6449

function cs2_6449(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: number = random(enumGetoutputcount(Enum.enum_5963));
    let int5: number = enumOp(type_int, type_seq, Enum.enum_5963, int4);
    let int6: number = enumOp(type_int, type_int, Enum.enum_5964, int4);

    if (intArg3 == 1) {
        int5 = enumOp(type_int, type_seq, Enum.mtxmgt_chathead_idle_anims, int4);
        int6 = enumOp(type_int, type_int, Enum.mtxmgt_chathead_idle_anims_length, int4);
    }

    if (intArg2 >= 500) {
        if (ccFind(intArg1, 0) == 1) {
            ccSetModelAnim(int5);
            ccSetOnVarcTransmit(noHook(""));
        }
        ifSetOnTimer(hook(cs2_6452, "IIiii", [intArg0, intArg1, 0, int6, intArg3]), intArg0);
    } else if (intArg2 == 0) {
        if (intArg3 == 1) {
            if (ccFind(intArg1, 0) == 1) {
                ccSetModelAnim(12287);
            }
            proc_mtxmgt_player_preview(0, 0, 0);
        } else {
            if (ccFind(intArg1, 0) == 1) {
                ccSetModelAnim(basGetAnimReady(varc_player_kit_torso_client));
            }
            proc_mtxmgt_player_preview(0, 0, 0);
        }
        ifSetOnTimer(hook(cs2_6449, "IIii", [intArg0, intArg1, intArg2 + 1, intArg3]), intArg0);
    } else {
        ifSetOnTimer(hook(cs2_6449, "IIii", [intArg0, intArg1, intArg2 + 1, intArg3]), intArg0);
    }
}
