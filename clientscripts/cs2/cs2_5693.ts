/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5693

function cs2_5693(intArg0: number, intArg1: boolean): void {
    let int2: number = 0;
    let int3: number = 0;
    let str0: string = "Members only";

    if (ccFind(Component.interface_1218.component_1218_72, intArg0) == 1) {
        ifSetPosition(ccGetX(), ccGetY(), 0, 0, Component.interface_1218.component_1218_81);
        if (intArg1 == true) {
            str0 = "Level up to unlock this item!";
        }
        int2 = stringWidth(str0, Graphic.verdana_11pt_regular) + 10;
        int3 = paraheight(str0, int2, Graphic.verdana_11pt_regular) * 15 + 10;
        ifSetSize(int2, int3, 0, 0, Component.interface_1218.component_1218_81);
        ifSetText(str0, Component.interface_1218.component_1218_195);
        ifSetHide(false, Component.interface_1218.component_1218_81);
    }
}
