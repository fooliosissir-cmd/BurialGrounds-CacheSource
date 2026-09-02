/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wornitems_slot]

function wornitems_slot(intArg0: component, intArg1: number): void {
    let int2: obj = invGetobj(94, intArg1);

    if (int2 == -1) {
        ifSetObject(-1, 0, intArg0);
        ifSetSize(32, 32, 0, 0, intArg0);
        ifSetPosition(0, 0, 1, 1, intArg0);
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.enum_796, intArg1), intArg0);
        ifSetOutline(0, intArg0);
        ifSetGraphicShadow(0, intArg0);
        ifSetOnOpt(noHook(""), intArg0);
        ifClearops(intArg0);
        return;
    }
    ifSetSize(36, 32, 0, 0, intArg0);
    ifSetPosition(2, 0, 0, 1, intArg0);
    ifSetObject(int2, invGetNum(94, intArg1), intArg0);
    ifSetOutline(1, intArg0);
    ifSetGraphicShadow(3153952, intArg0);
    ifSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, -1, 100, 0, 8]), intArg0);
    ifClearops(intArg0);

    if (ocParam(int2, Param.hide_remove_op) != 1 && (ocParam(int2, Param.param_1430) == 0 || (playerMember() != 1 && ocMembers(int2) != 0))) {
        ifSetOp(1, "Remove", intArg0);
    }
    let str0: string = ocParam(int2, Param.wear_op1);

    if (stringLength(str0) > 0) {
        ifSetOp(2, str0, intArg0);
    }
    str0 = ocParam(int2, Param.wear_op2);

    if (stringLength(str0) > 0) {
        ifSetOp(3, str0, intArg0);
    }
    str0 = ocParam(int2, Param.wear_op3);

    if (stringLength(str0) > 0) {
        ifSetOp(4, str0, intArg0);
    }
    str0 = ocParam(int2, Param.wear_op4);

    if (stringLength(str0) > 0) {
        ifSetOp(5, str0, intArg0);
    }
    str0 = ocParam(int2, Param.wear_op5);

    if (stringLength(str0) > 0) {
        ifSetOp(6, str0, intArg0);
    }
    ifSetOp(10, "Examine", intArg0);
    ifSetOpBase("<col=ff9040>" + ocName(int2), intArg0);
    ifSetOnMouseOver(hook(cs2_5495, "o", [int2]), intArg0);
    hookMouseExit(hook(cs2_5495, "o", [-1]), intArg0);
}
