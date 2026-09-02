/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2475

function cs2_2475(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    let int4: Enum = Enum.enum_1093;

    if (gender() == 1) {
        int4 = Enum.enum_3872;
    }
    let int5: number = 0;
    let int6: number = 0;

    while (int5 <= enumGetoutputcount(int4)) {
        ccCreate(intArg0, 4, int5);
        if (int5 == 0 || (int5 >= intArg2 && int5 <= intArg3)) {
            if (int5 == 0) {
                ccSetText("No Prefix");
            } else {
                ccSetText(enumOp(type_int, type_string, int4, int5));
            }
            ccSetPosition(0, int6, 0, 0);
            ccSetSize(165, 17, 0, 0);
            ccSetTextShadow(false);
            ccSetTextFont(Graphic.p12_full);
            ccSetTextAlign(0, 1, 0);
            ccSetOp(1, "Select");
            ccSetOnOpt(hook(cs2_2143, "Ii", [event_com, event_comsubid]));
            if (player_prefix_check(int5) == 1) {
                ccSetColour(colour(0x11FF00));
            } else {
                ccSetColour(colour(0xFF1100));
            }
            int6 = int6 + 19;
        } else {
            ccSetHide(true);
        }
        int5 = 1 + int5;
    }

    if (int6 > ifGetHeight(intArg0)) {
        ifSetScrollSize(0, 25 + int6, intArg0);
        ifSetHide(false, intArg1);
        proc_scrollbar_vertical(intArg1, intArg0, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    } else {
        ifSetHide(true, intArg1);
    }
}
