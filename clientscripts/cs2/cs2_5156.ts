/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5156

function cs2_5156(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: graphic = structParam(intArg1, Param.rs3tli_button_graphic_middle);
    let int3: number = structParam(intArg1, Param.aif_initial_transparency);
    let int4: boolean = structParam(intArg1, Param.param_1872);
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(9, 60, 0, 0);
    ccSetGraphic(int2);
    ccSetTrans(int3);
    ccSethflip(int4);
}
