/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_974

function cs2_974(intArg0: number, intArg1: number, intArg2: obj, intArg3: graphic, strArg0: string, intArg4: number, intArg5: number): number {
    ccCreate(Component.interface_741.component_741_1, 5, intArg0);

    if (intArg3 != -1) {
        if (intArg4 == 7) {
            ccSetSize(30, 30, 0, 0);
        } else if (intArg4 == 4) {
            ccSetSize(24, 24, 0, 0);
        } else {
            ccSetSize(36, 32, 0, 0);
        }
        ccSetOutline(0);
        ccSetGraphic(intArg3);
    } else if (intArg2 == Obj.obj_18637 || intArg2 == Obj.obj_18638) {
        ccSetSize(24, 24, 0, 0);
        ccSetOutline(0);
        if (intArg2 == Obj.obj_18637) {
            ccSetGraphic(Graphic.magicon2_51);
        } else {
            ccSetGraphic(Graphic.magicon2_50);
        }
    } else {
        ccSetSize(36, 32, 0, 0);
        ccSetOutline(1);
        ccSetGraphicShadow(6311474);
        if (intArg2 != -1) {
            ccSetObject(intArg2, -1);
        } else {
            ccSetObject(Obj.obj_7620, -1);
        }
    }
    ccSetPosition(0, intArg1, 0, 0);
    ccCreate(Component.interface_741.component_741_1, 4, intArg0 + 1);
    let int7: number = paraheight(strArg0, 300, Graphic.p12_full);
    ccSetSize(300, int7 * 16, 0, 0);
    return int7;
}
