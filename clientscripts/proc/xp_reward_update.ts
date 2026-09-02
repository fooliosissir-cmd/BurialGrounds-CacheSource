/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xp_reward_update]

function proc_xp_reward_update(intArg0: stat, intArg1: component, intArg2: component): void {
    let int3: number = enumOp(type_stat, type_int, Enum.stat_to_int, intArg0);
    let int4: number = cs2_6035(intArg0, varc_xp_reward_minlevel, varc_xp_reward_item, 0);
    let int5: Enum = Enum.stat2icon_small_off;

    if (int4 == 1) {
        int5 = Enum.stat2icon_small;
    }
    ccDeleteAll(intArg1);
    ccCreate(intArg1, 5, 0);
    ccSetSize(0, 0, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    let int6: graphic = Graphic.aif_ring_btn_1_0;
    let int7: graphic = Graphic.aif_ring_btn_1_1;

    if (int3 != varc_xp_reward_currentchoice) {
        ccSetGraphic(int6);
        if (int4 == 1) {
            ccHookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int7]));
            ccHookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int6]));
        }
    } else {
        ccSetGraphic(Graphic.aif_ring_btn_1_2);
    }
    ccCreate<1>(intArg1, 5, 1);
    ccSetSize<1>(25, 25, 0, 0);
    ccSetPosition<1>(0, 0, 1, 1);
    ccSetGraphic<1>(enumOp(type_int, type_graphic, int5, int3));
    ccSetOp(1, "Choose");
    ccSetOpBase(enumOp(type_stat, type_string, Enum.stat_to_string, intArg0));
    ccSetOnOpt(hook(xp_reward_choose, "SiII", [intArg0, int3, intArg1, intArg2]));
}
