/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1460

function cs2_1460(intArg0: number, intArg1: number): void {
    let int2: component = enumOp(type_int, type_component, Enum.enum_1614, intArg0);
    let int3: component = enumOp(type_int, type_component, Enum.enum_1615, intArg0);

    ifSetHide(false, int2);
    ifSetHide(false, int3);
    ifSetObjectNonum(invGetobj(95, intArg1), invGetNum(95, intArg1), int3);
    ifSetOutline(1, int3);
    ifSetGraphicShadow(3355443, int3);
    ifClearops(int2);
    ifSetOp(1, "View tab " + tostring(intArg0), int2);
    ifSetOp(2, "Collapse tab " + tostring(intArg0), int2);
    ifSetOnClick(noHook(""), int2);
    let str0: string = "Click here to select tab " + tostring(intArg0);
    ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_762.component_762_121, str0, 25, 150]), int2);
    ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_762.component_762_121]), int2);
}
