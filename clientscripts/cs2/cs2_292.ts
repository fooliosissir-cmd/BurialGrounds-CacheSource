/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_292

function cs2_292(intArg0: struct, intArg1: component, intArg2: number, intArg3: number): number {
    if (intArg0 == -1) {
        intArg0 = Struct.worldmap_overlay_style_default;
    }
    ccCreate<1>(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetPosition<1>(intArg3, intArg2, 2, 0);
    ccSetSize<1>(20, 20, 0, 0);
    ccSettiling<1>(false);
    ccSetGraphic<1>(structParam(intArg0, Param.param_130));
    return intArg3 + 10;
}
