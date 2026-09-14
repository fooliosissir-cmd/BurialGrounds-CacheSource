/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4529

function cs2_4529(intArg0: component, intArg1: component, intArg2: struct): void {
    if (intArg0 == -1 || intArg2 == -1) {
        return;
    }
    let int3: number = structParam(intArg2, Param.rs3tli_button_layer_type);
    let int4: graphic = structParam(intArg2, Param.param_1388);
    let int5: graphic = structParam(intArg2, Param.param_1389);
    let int6: graphic = -1;
    let int7: graphic = -1;
    let int8: graphic = -1;
    let int9: graphic = -1;

    if (int3 == 1) {
        int6 = structParam(intArg2, Param.param_1393);
        int7 = structParam(intArg2, Param.param_1394);
        int8 = structParam(intArg2, Param.param_1395);
        int9 = structParam(intArg2, Param.param_1396);
        proc_scrollbar_vertical(intArg0, intArg1, int6, int7, int8, int9, int4, int5);
    } else if (int3 == 2 || int3 == 3) {
        ccDeleteAll(intArg0);
        ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
        ccSetPosition(0, 0, 1, 0);
        ccSetSize(16, 16, 0, 0);
        ccSetGraphic(int4);
        ccSetTrans(255);
        ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
        ccSetPosition(0, 0, 1, 2);
        ccSetSize(16, 16, 0, 0);
        ccSetGraphic(int5);
        ccSetTrans(255);
        if (int3 == 2) {
            ifSetOnMouseOver(hook(cs2_4159, "Iii", [event_com, 0, 0]), intArg0);
            ifSetOnMouseLeave(hook(cs2_4159, "Iii", [event_com, 1, 0]), intArg0);
        } else if (int3 == 3) {
            ifSetOnClick(hook(cs2_4162, "I", [event_com]), intArg0);
            ifSetOnDrag(hook(cs2_4162, "I", [event_com]), intArg0);
            ifSetOnRelease(hook(cs2_4163, "I", [event_com]), intArg0);
            ifSetOnDragComplete(hook(cs2_4163, "I", [event_com]), intArg0);
        }
    }
}
