/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4204

function cs2_4204(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: graphic = structParam(intArg1, Param.param_1348);
    let int3: graphic = structParam(intArg1, Param.param_1355);
    let int4: graphic = structParam(intArg1, Param.param_1356);
    let int5: number = structParam(intArg1, Param.aif_initial_transparency);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(20, 20, 0, 0);
    ccSetGraphic(int2);
    ccSetTrans(int5);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 1);
    ccSetSize(40, 20, 1, 0);
    ccSetGraphic(int3);
    ccSetTrans(int5);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(20, 20, 0, 0);
    ccSetGraphic(int4);
    ccSetTrans(int5);
}
