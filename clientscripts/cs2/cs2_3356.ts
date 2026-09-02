/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3356

function cs2_3356(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: obj = invotherGetobj(intArg2, intArg1);

    if (int3 == -1) {
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
    ifSetObject(int3, invotherGetNum(intArg2, intArg1), intArg0);
    ifSetOutline(1, intArg0);
    ifSetGraphicShadow(3153952, intArg0);
    ifClearops(intArg0);
    ifSetOp(10, "Examine" + "<col=ff9040>", intArg0);
    ifSetOpBase("<col=ff9040>" + ocName(int3), intArg0);
    ifSetOnMouseOver(hook(cs2_5495, "o", [int3]), intArg0);
    hookMouseExit(hook(cs2_5495, "o", [-1]), intArg0);
}
