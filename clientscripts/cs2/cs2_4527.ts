/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4527

function cs2_4527(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: number = structParam(intArg1, Param.rs3tli_button_layer_type);
    let int3: graphic = structParam(intArg1, Param.rs3tli_button_graphic_top_right);
    let int4: graphic = structParam(intArg1, Param.rs3tli_button_graphic_top);
    let int5: graphic = structParam(intArg1, Param.rs3tli_button_graphic_bottom_right);
    let int6: graphic = structParam(intArg1, Param.rs3tli_button_graphic_bottom);
    let int7: graphic = structParam(intArg1, Param.rs3tli_button_graphic_right);
    let int8: graphic = structParam(intArg1, Param.rs3tli_button_graphic_middle);
    let int9: number = structParam(intArg1, Param.aif_initial_transparency);
    let int10: number = structParam(intArg1, Param.aif_button_effect_sequence);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(24, 18, 1, 1);
    ccSetGraphic(int8);
    ccSetTrans(int9);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(24, 9, 1, 0);
    ccSetGraphic(int4);
    ccSetTrans(int9);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(24, 9, 1, 0);
    ccSetGraphic(int6);
    ccSetTrans(int9);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(12, 5, 0, 1);
    ccSetGraphic(int7);
    ccSetTrans(int9);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(12, 5, 0, 1);
    ccSetGraphic(int7);
    ccSethflip(true);
    ccSetTrans(int9);
    ccSettiling(true);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(12, 9, 0, 0);
    ccSetGraphic(int3);
    ccSetTrans(int9);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(12, 9, 0, 0);
    ccSetGraphic(int5);
    ccSetTrans(int9);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(12, 9, 0, 0);
    ccSetGraphic(int3);
    ccSethflip(true);
    ccSetTrans(int9);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(12, 9, 0, 0);
    ccSetGraphic(int5);
    ccSethflip(true);
    ccSetTrans(int9);

    if (int2 == 4) {
        ifSetHide(true, intArg0);
    }
}
