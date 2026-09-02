/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4172

function cs2_4172(intArg0: number): void {
    let int1: obj = invGetobj(94, intArg0);

    if (int1 != -1) {
        ccSetSize(36, 32, 0, 0);
        ccSetObject(int1, invGetNum(94, intArg0));
        ccSetGraphicShadow(3153952);
        ccSetOutline(1);
        ccSetPosition(2, 0, 1, 1);
    } else {
        ccSetSize(32, 32, 0, 0);
        ccSetGraphic(enumOp(type_int, type_graphic, Enum.enum_796, intArg0));
        ccSetGraphicShadow(0);
        ccSetOutline(0);
        ccSetPosition(0, 0, 1, 1);
    }
}
