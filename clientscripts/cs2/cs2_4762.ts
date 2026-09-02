/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4762

function cs2_4762(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: graphic = structParam(intArg1, Param.param_1385);
    let int3: graphic = structParam(intArg1, Param.param_1382);
    let int4: graphic = structParam(intArg1, Param.param_1386);
    let int5: graphic = structParam(intArg1, Param.param_1383);
    let int6: graphic = structParam(intArg1, Param.param_1384);
    let int7: number = structParam(intArg1, Param.param_1387);
    let int8: number = structParam(intArg1, Param.aif_initial_transparency);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 0);
    ccSetSize(5 * 2, 5, 1, 0);
    ccSetGraphic(int3);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 1, 2);
    ccSetSize(5 * 2, 5, 1, 0);
    ccSetGraphic(int5);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 1);
    ccSetSize(5, 5 * 2, 0, 1);
    ccSetGraphic(int6);
    ccSethflip(true);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 1);
    ccSetSize(5, 5 * 2, 0, 1);
    ccSetGraphic(int6);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(5, 5, 0, 0);
    ccSetGraphic(int2);
    ccSethflip(true);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(5, 5, 0, 0);
    ccSetGraphic(int4);
    ccSethflip(true);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 0);
    ccSetSize(5, 5, 0, 0);
    ccSetGraphic(int2);
    ccSetTrans(int8);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 2, 2);
    ccSetSize(5, 5, 0, 0);
    ccSetGraphic(int4);
    ccSetTrans(int8);
}
