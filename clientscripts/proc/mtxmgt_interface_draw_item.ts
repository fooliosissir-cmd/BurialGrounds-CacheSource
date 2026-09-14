/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mtxmgt_interface_draw_item]

function mtxmgt_interface_draw_item(intArg0: struct, intArg1: number, intArg2: number): [number, number] {
    let int3: component = enumOp(type_int, type_component, Enum.enum_5961, structParam(intArg0, Param.param_2532));

    if (int3 == -1) {
        return [intArg1, intArg2];
    }
    let int4: number = ifGetNextSubId(int3);
    let int5: graphic = Graphic.graphic_11898;
    let int6: graphic = Graphic.graphic_11899;
    let int7: colour = colour(0xB6B6B6);
    let int8: obj = -1;
    let int9: obj = -1;
    let int10: number = 1426;

    if (mtxmgt_check_available(intArg0) == 0) {
        int5 = Graphic.graphic_11900;
        int6 = Graphic.graphic_11900;
        int7 = colour(0x666666);
    } else if (mtxmgt_check_active(intArg0) == 1) {
        int5 = Graphic.graphic_11901;
        int6 = Graphic.graphic_11902;
        int7 = colour(0xB6B6B6);
    } else if (structParam(intArg0, Param.mtxmgt_category) == 2 && structParam(intArg0, Param.param_2532) == 3) {
        int8 = enumOp(type_int, type_obj, structParam(intArg0, Param.param_2542), 3);
        int9 = invGetobj(94, 3);
        if (int9 != -1) {
            int10 = ocParam(int9, Param.param_644);
        }
        if (int8 != -1) {
            if (int8 == varp_2685) {
                int5 = Graphic.graphic_11901;
                int6 = Graphic.graphic_11902;
                int7 = colour(0xB6B6B6);
            } else if (ocParam(int8, Param.param_644) != 1426 && ocParam(int8, Param.param_644) != int10) {
                int5 = Graphic.graphic_11900;
                int6 = Graphic.graphic_11900;
                int7 = colour(0x661111);
            }
        }
    }
    ccCreate(int3, 5, int4);
    ccSetGraphic(int5);
    ccSetSize(196 - 10, 29 - 5, 0, 0);
    ccSetPosition(intArg2 * 196 + (196 - ccGetWidth()) / 2, intArg1 + (29 - ccGetHeight()) / 2, 0, 0);
    ccSetOp(1, "Preview");

    if (int5 == Graphic.graphic_11901) {
        ccSetOp(2, "Deactivate");
    } else if (int5 == Graphic.graphic_11898) {
        ccSetOp(2, "Activate");
    } else {
        ccSetOp(2, "");
    }
    ccSetOnOp(hook(cs2_6480, "Ii", [event_com, event_comsubid]));
    ccSetOnMouseOver(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId(), int6]));
    ccSetOnMouseLeave(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId(), int5]));
    let str0: string = structParam(intArg0, Param.param_2533);
    ccCreate(int3, 4, int4 + 1);
    ccSetText(str0);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetColour(int7);
    ccSetSize(196 - 10, 29 - 5, 0, 0);
    ccSetPosition(intArg2 * 196 + (196 - ccGetWidth()) / 2, intArg1 + (29 - ccGetHeight()) / 2, 0, 0);
    ccSetTextAlign(1, 1, 13);
    ccCreate(int3, 5, int4 + 2);
    ccSetGraphic(structParam(intArg0, Param.param_2534));
    ccSetSize(20, 20, 0, 0);
    ccSetPosition(intArg2 * 196 + (196 - ccGetWidth()) / 2, intArg1 + (29 - ccGetHeight()) / 2, 0, 0);
    ifSetSize(0, intArg1 + 29, 1, 0, int3);
    intArg2 = (intArg2 + 1) % 2;

    if (intArg2 == 0) {
        intArg1 = intArg1 + 29;
    }
    return [intArg1, intArg2];
}
