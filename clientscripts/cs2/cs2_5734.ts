/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5734

function cs2_5734(): void {
    let int0: struct = varp_2501;
    let str0: string = structParam(int0, Param.task_name);
    let str1: string = structParam(int0, Param.task_details);
    let int1: number = structParam(int0, Param.param_1268);

    if (task_get_progress(structParam(int0, Param.param_1268)) == 2 && cs2_5732(int0) == 0) {
        str1 = append(str1, "<br>" + "<col=00ff00>" + "You have already completed this.");
        if (structParam(int0, Param.param_2231) != -1) {
            cs2_5743(81068081, "Teleport");
            ifSetHide(true, Component.interface_1237.component_1237_55);
        } else {
            cs2_5743(81068081, "Accept");
            ifSetHide(false, Component.interface_1237.component_1237_55);
        }
    } else if (structParam(int0, Param.param_1268) == 943) {
        cs2_5743(81068081, "Accept");
        ifSetHide(false, Component.interface_1237.component_1237_55);
    } else if (task_requirements_fulfilled(structParam(int0, Param.param_1268)) == 1) {
        cs2_5743(81068081, "Accept");
        ifSetHide(true, Component.interface_1237.component_1237_55);
    } else {
        cs2_5743(81068081, "Accept");
        ifSetHide(false, Component.interface_1237.component_1237_55);
    }

    if (varp_2504 != -1 && varbit_10682 != 0) {
        if (cs2_5764(varp_2504, cs2_5763(varp_2504), varbit_10682 - 1) == -1) {
            ifSetHide(false, Component.interface_1237.component_1237_100);
        } else {
            ifSetHide(true, Component.interface_1237.component_1237_100);
        }
    }
    ifSetText(str0, Component.interface_1237.component_1237_70);
    let int2: graphic = -1;

    if (structParam(int0, Param.param_1270) != 4094) {
        int2 = structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(int0, Param.param_1270)), Param.param_952);
    } else {
        int2 = structParam(int0, Param.task_icon);
    }
    ifSetGraphic(int2, Component.interface_1237.component_1237_43);
    let int3: number = 0;
    let int4: number = cs2_5739(1, ifGetY(Component.interface_1237.component_1237_0), str1, Component.interface_1237.component_1237_0, Component.interface_1237.component_1237_16);
    int4 = ifGetHeight(Component.interface_1237.component_1237_16) / 2 - ifGetHeight(Component.interface_1237.component_1237_0) / 2;
    ifSetPosition(0, int4, 0, 0, Component.interface_1237.component_1237_0);
    int4 = ifGetY(Component.interface_1237.component_1237_17);
    ifSetPosition(ifGetX(Component.interface_1237.component_1237_18), int3 + ifGetY(Component.interface_1237.component_1237_18), 0, 0, Component.interface_1237.component_1237_18);
    ifSetGraphic(Graphic.graphic_9606, Component.interface_1237.component_1237_20);
    int3 = cs2_5735();
    let str2: string = "";
    let int5: number = 1;

    if (int3 > ifGetY(Component.interface_1237.component_1237_1) + ifGetHeight(Component.interface_1237.component_1237_1)) {
        ifSetHide(false, Component.interface_1237.component_1237_18);
        int3 = int3 + 10;
        int4 = int4 + int3;
        str2 = "Click the stats button on the bottom right of the screen to check all your current stats.";
        ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1237.component_1237_14, Component.interface_1237.component_1237_20, -1, str2, 175, -1, -1, -1, 12, 3, int5, event_mousex, event_mousey]), Component.interface_1237.component_1237_20);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1237.component_1237_14]), Component.interface_1237.component_1237_20);
    } else {
        ifSetHide(true, Component.interface_1237.component_1237_18);
        int3 = 0;
    }
    ifSetPosition(ifGetX(Component.interface_1237.component_1237_33), ifGetY(Component.interface_1237.component_1237_18) + int3, 0, 0, Component.interface_1237.component_1237_33);
    int4 = int4 + cs2_5737();
    int4 = max(int4 + 10, ifGetHeight(Component.interface_1237.component_1237_12));
    ifSetScrollSize(0, int4, Component.interface_1237.component_1237_12);
    ifSetScrollPos(0, 0, Component.interface_1237.component_1237_12);
    proc_scrollbar_vertical(Component.interface_1237.component_1237_13, Component.interface_1237.component_1237_12, Graphic.task_scrollbar_dragger_3, Graphic.task_scrollbar_dragger_0, Graphic.task_scrollbar_dragger_1, Graphic.task_scrollbar_dragger_2, Graphic.task_scrollbar_1, Graphic.task_scrollbar_0);

    if (int4 > ifGetHeight(Component.interface_1237.component_1237_12)) {
        ifSetHide(false, Component.interface_1237.component_1237_13);
    } else {
        ifSetHide(true, Component.interface_1237.component_1237_13);
    }
    cs2_5738();
}
