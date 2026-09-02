/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gravestone_shop_model]

function gravestone_shop_model(intArg0: graphic): void {
    ccSetNpcHead(enumOp(type_int, type_npc, Enum.gravestone_npc, intArg0));

    if (intArg0 == Graphic.emotes_40) {
        cc_setposition_relative(0, 63);
        ccSetModelAngle(0, 0, 0, 0, 0, 528);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.feathers_round_long) {
        cc_setposition_relative(-31, 58);
        ccSetModelAngle(0, 0, 0, 0, 0, 400);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 3]));
        ccSetModelAnim(7375);
        return;
    }

    if (intArg0 == Graphic.hitsplat) {
        cc_setposition_relative(0, 58);
        ccSetModelAngle(0, 0, 0, 0, 0, 528);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.staticons_high_res_0) {
        cc_setposition_relative(0, 48);
        ccSetModelAngle(0, 0, 52, 0, 0, 650);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.graphic_4) {
        cc_setposition_relative(0, 62);
        ccSetModelAngle(0, 0, 35, 0, 0, 528);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.emotes_locked_20) {
        cc_setposition_relative(-3, 60);
        ccSetModelAngle(0, 0, 35, 0, 0, 656);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 512, 3]));
        return;
    }

    if (intArg0 == Graphic.staticons_high_res_1) {
        cc_setposition_relative(0, 68);
        ccSetModelAngle(0, 0, 35, 0, 0, 720);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.staticons_high_res_2) {
        cc_setposition_relative(0, 61);
        ccSetModelAngle(0, 0, 35, 0, 0, 584);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.staticons_high_res_3) {
        cc_setposition_relative(0, 67);
        ccSetModelAngle(0, 0, 35, 0, 0, 840);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.graphic_9) {
        cc_setposition_relative(0, 65);
        ccSetModelAngle(0, 0, 35, 0, 0, 614);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 0, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.graphic_10) {
        cc_setposition_relative(0, 69);
        ccSetModelAngle(0, 0, 35, 0, 0, 755);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 35, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.hint_headicons) {
        cc_setposition_relative(0, 68);
        ccSetModelAngle(0, 0, 35, 0, 0, 671);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 35, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.graphic_12) {
        cc_setposition_relative(0, 70);
        ccSetModelAngle(0, 0, 35, 1891, 0, 1277);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 35, 0, 256, 2]));
        return;
    }

    if (intArg0 == Graphic.hint_mapmarkers) {
        cc_setposition_relative(0, 70);
        ccSetModelAngle(0, 0, 35, 1891, 0, 1277);
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, 35, 0, 256, 2]));
        return;
    }
    ccSetModelAngle(0, 0, 0, 0, 0, 2000);
}
