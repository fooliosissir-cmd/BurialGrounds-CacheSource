/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1674

function cs2_1674(intArg0: number): [number, number] {
    let int1: Enum = Enum.champions_banner_if_name;
    let int2: number = 1;
    let int3: number = 2;
    let int4: number = 0;
    let str0: string = enumOp(type_int, type_string, int1, 0);

    ccCreate(Component.interface_84.component_84_22, 5, 0);
    ccSetSize(17, 17, 0, 0);
    ccSetPosition(2, int3, 0, 0);

    if (intArg0 == 0) {
        ccSetGraphic(Graphic.options_radio_buttons_2);
        int4 = int3;
    } else {
        ccSetGraphic(Graphic.options_radio_buttons_0);
    }
    ccCreate<1>(Component.interface_84.component_84_22, 4, 1);
    ccSetTextFont<1>(Graphic.p11_full);
    ccSetColour<1>(colour(0xFF981F));
    ccSetTextAlign<1>(0, 1, 0);
    ccSetSize<1>(23, 16, 1, 0);
    ccSetPosition<1>(0, int3 + 2, 2, 0);
    ccSetText<1>(str0);
    ccCreate(Component.interface_84.component_84_22, 3, 2);
    ccSetSize(0, 17, 1, 0);
    ccSetPosition(0, int3, 1, 0);
    ccSetTrans(255);
    ccSetfill(true);

    if (intArg0 != 0) {
        ccSetOp(1, str0);
        ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
        ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
        ccSetOnOpt(hook(champions_onop, "iii", [event_opindex, 0, intArg0]));
    }
    int3 = int3 + ccGetHeight();
    let int5: number = 1;

    while (int2 < enumGetoutputcount(int1)) {
        if (testBit(varp_champions_defeated, int2 - 1) == 1) {
            str0 = enumOp(type_int, type_string, int1, int2);
            ccCreate(Component.interface_84.component_84_22, 5, int5 * 3);
            ccSetSize(17, 17, 0, 0);
            ccSetPosition(2, int3, 0, 0);
            if (int2 == intArg0) {
                ccSetGraphic(Graphic.options_radio_buttons_2);
                int4 = int3;
            } else {
                ccSetGraphic(Graphic.options_radio_buttons_0);
            }
            ccCreate<1>(Component.interface_84.component_84_22, 4, int5 * 3 + 1);
            ccSetTextFont<1>(Graphic.p11_full);
            ccSetColour<1>(colour(0xFF981F));
            ccSetTextAlign<1>(0, 1, 0);
            ccSetSize<1>(23, 16, 1, 0);
            ccSetPosition<1>(0, int3 + 2, 2, 0);
            ccSetText<1>(str0);
            ccCreate(Component.interface_84.component_84_22, 3, int5 * 3 + 2);
            ccSetSize(0, 17, 1, 0);
            ccSetPosition(0, int3, 1, 0);
            ccSetTrans(255);
            ccSetfill(true);
            if (int2 != intArg0) {
                ccSetOp(1, str0);
                ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFFFFFF)]));
                ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, ccGetId<1>(), colour(0xFF981F)]));
                ccSetOnOpt(hook(champions_onop, "iii", [event_opindex, int2, intArg0]));
            }
            int3 = int3 + ccGetHeight();
            int5 = int5 + 1;
        }
        int2 = int2 + 1;
    }
    return [int3, max(int4 - 8, 0)];
}
