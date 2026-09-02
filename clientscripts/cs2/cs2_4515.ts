/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4515

function cs2_4515(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: graphic = structParam(intArg1, Param.rs3tli_button_graphic_top);
    let int3: graphic = structParam(intArg1, Param.rs3tli_button_graphic_top_right);
    let int4: graphic = structParam(intArg1, Param.rs3tli_button_graphic_bottom);
    let int5: graphic = structParam(intArg1, Param.rs3tli_button_graphic_bottom_right);
    let int6: graphic = structParam(intArg1, Param.rs3tli_button_graphic_right);
    let int7: graphic = structParam(intArg1, Param.aif_button_graphic_lower_side);
    let int8: graphic = structParam(intArg1, Param.rs3tli_button_graphic_middle);
    let int9: graphic = structParam(intArg1, Param.aif_button_graphic_lower_middle);
    let int10: number = structParam(intArg1, Param.aif_initial_transparency);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(14, 16384, 1, 2);
    ccSetGraphic(int8);
    ccSettiling(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(14, 10000, 1, 2);
    ccSetGraphic(int9);
    ccSettiling(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(7, 16384, 0, 2);
    ccSetGraphic(int6);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(7, 16384, 0, 2);
    ccSetGraphic(int6);
    ccSethflip(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(7, 7, 0, 0);
    ccSetGraphic(int3);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(14, 7, 1, 0);
    ccSetGraphic(int2);
    ccSettiling(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(7, 7, 0, 0);
    ccSetGraphic(int3);
    ccSetTrans(int10);
    ccSethflip(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(7, 10000, 0, 2);
    ccSetGraphic(int7);
    ccSettiling(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(7, 10000, 0, 2);
    ccSetGraphic(int7);
    ccSettiling(true);
    ccSethflip(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(7, 7, 0, 0);
    ccSetGraphic(int5);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(14, 7, 1, 0);
    ccSetGraphic(int4);
    ccSettiling(true);
    ccSetTrans(int10);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(7, 7, 0, 0);
    ccSetGraphic(int5);
    ccSetTrans(int10);
    ccSethflip(true);
}
