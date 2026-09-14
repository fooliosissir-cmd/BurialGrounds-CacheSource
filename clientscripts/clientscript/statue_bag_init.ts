/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,statue_bag_init]

function statue_bag_init(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 6;
    let int5: number = 5;

    if (int4 > 1) {
        if (ifGetScrollWidth(intArg0) > 0) {
            int2 = (ifGetScrollWidth(intArg0) - 36 * int4) / (int4 - 1);
        } else {
            int2 = (ifGetWidth(intArg0) - 36 * int4) / (int4 - 1);
        }
    }

    if (int5 > 1) {
        if (ifGetScrollHeight(intArg0) > 0) {
            int3 = (ifGetScrollHeight(intArg0) - 32 * int5) / (int5 - 1);
        } else {
            int3 = (ifGetHeight(intArg0) - 32 * int5) / (int5 - 1);
        }
    }

    while (int1 < 30) {
        ccCreate(intArg0, 5, int1);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int2) * (int1 % int4), int1 / int4 * (32 + int3), 0, 0);
        ccSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.statue_bag_int2namedobj, int1), testBit(varc_1352, int1));
        if (testBit(varc_1352, int1) == 1) {
            ccSetOp(1, "Take" + "<col=ff9040>");
            ccSetOutline(2);
        } else {
            ccSetTrans(100);
        }
        ccSetOp(5, "Examine" + "<col=ff9040>");
        ccSetOpBase("<col=ff981f>" + enumOp(type_int, type_string, Enum.statue_bag_int2string, int1) + " Piece");
        ccSetOnOp(hook(cs2_3679, "Ii", [event_com, int1]));
        int1 = int1 + 1;
    }
}
