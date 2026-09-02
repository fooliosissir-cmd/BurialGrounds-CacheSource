/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1211

function cs2_1211(intArg0: number, intArg1: number, intArg2: number, strArg0: string): void {
    varc_info_box_type = intArg2;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;

    if (ifFind(Component.interface_746.component_746_46) == 1) {
        ccSetOnTimer(noHook(""));
        ccSetOnTimer(hook(cs2_1213, "i", [varc_1694 + stringLength(strArg0) * 2]));
    }

    if (ifFind(Component.interface_746.component_746_46) == 1) {
        int3 = min(200, 20 + parawidth(strArg0, 180, Graphic.b12_full));
        int4 = 22 + 15 * paraheight(strArg0, 180, Graphic.b12_full);
        if (compare(ifGetText(Component.interface_746.component_746_46), "") != 0) {
            ccSetSize(int3, int4, 0, 0);
        }
        cs2_1212(strArg0, int3, int4);
        ifSetSize(int3, int4, 0, 0, Component.interface_746.component_746_46);
        ifSetPosition(intArg0, intArg1, 1, 1, Component.interface_746.component_746_46);
    }
}
