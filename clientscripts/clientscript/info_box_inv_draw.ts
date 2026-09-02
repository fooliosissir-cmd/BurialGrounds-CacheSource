/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,info_box_inv_draw]

function info_box_inv_draw(intArg0: number, intArg1: number, strArg0: string): void {
    varc_info_box_type = intArg1;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;

    if (ifFind(Component.interface_746.component_746_46) == 1) {
        ccSetOnTimer(noHook(""));
        ccSetOnTimer(hook(cs2_1213, "i", [varc_1694 + stringLength(strArg0) * 2]));
    }

    if (ifFind(Component.interface_746.component_746_46) == 1) {
        int2 = min(200, 20 + parawidth(strArg0, 180, Graphic.b12_full));
        int3 = 22 + 15 * paraheight(strArg0, 180, Graphic.b12_full);
        if (compare(ifGetText(Component.interface_746.component_746_46), "") != 0) {
            ccSetSize(int2, int3, 0, 0);
        }
        if (ccFind(Component.inventory.inv, intArg0) == 1) {
            int4 = ccGetX();
            int5 = ccGetY();
            cs2_1212(strArg0, int2, int3);
            info_box_inv_position(int2, int3, int4, int5);
        }
    }
}
