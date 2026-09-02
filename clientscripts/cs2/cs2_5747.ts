/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5747

function cs2_5747(intArg0: struct, intArg1: number, intArg2: number, intArg3: number, intArg4: number): [number, number] {
    ccCreate(Component.interface_1239.component_1239_8, 5, intArg3);

    if (intArg2 == 1) {
        ccSetGraphic(Graphic.graphic_7635);
    } else {
        ccSetGraphic(Graphic.graphic_7629);
    }
    ccSetSize(12, 51, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5, (51 + 3) * (intArg4 / 1), 0, 0);
    intArg3 = intArg3 + 1;
    ccCreate(Component.interface_1239.component_1239_8, 5, intArg3);

    if (intArg2 == 1) {
        ccSetGraphic(Graphic.graphic_7636);
    } else {
        ccSetGraphic(Graphic.graphic_7630);
    }
    ccSetSize(434, 51, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5 + 12, (51 + 3) * (intArg4 / 1), 0, 0);
    intArg3 = intArg3 + 1;
    ccCreate(Component.interface_1239.component_1239_8, 5, intArg3);

    if (intArg2 == 1) {
        ccSetGraphic(Graphic.graphic_7637);
    } else {
        ccSetGraphic(Graphic.graphic_7631);
    }
    ccSetSize(12, 51, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5 + 12 + 434, (51 + 3) * (intArg4 / 1), 0, 0);
    intArg3 = intArg3 + 1;
    ccCreate(Component.interface_1239.component_1239_8, 4, intArg3);
    ccSetText(structParam(intArg0, Param.task_name));
    ccSetTextFont(Graphic.graphic_4040);
    ccSetColour(colour(0xEBE0BC));
    ccSetSize(330, 13, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5 + 70, (51 + 3) * (intArg4 / 1) + 1, 0, 0);
    intArg3 = intArg3 + 1;
    ccCreate(Component.interface_1239.component_1239_8, 4, intArg3);
    ccSetText(structParam(intArg0, Param.task_details));
    ccSetTextFont(Graphic.graphic_5631);
    ccSetColour(colour(0xD7D6B2));
    ccSetSize(330, 30, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5 + 70, (51 + 3) * (intArg4 / 1) + 16, 0, 0);
    intArg3 = intArg3 + 1;
    ccCreate(Component.interface_1239.component_1239_8, 5, intArg3);

    if (structParam(intArg0, Param.param_1270) != 4094) {
        ccSetGraphic(structParam(enumOp(type_int, type_struct, Enum.enum_2252, structParam(intArg0, Param.param_1270)), Param.param_952));
    } else {
        ccSetGraphic(structParam(intArg0, Param.task_icon));
    }
    ccSetSize(40, 40, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5 + 7, (51 + 3) * (intArg4 / 1) + 5, 0, 0);
    intArg3 = intArg3 + 1;
    let str0: string = "";
    let int5: number = 3;
    ccCreate(Component.interface_1239.component_1239_8, 5, intArg3);

    if (intArg2 == 1) {
        ccSetGraphic(Graphic.graphic_9603);
    } else if (intArg1 == 1) {
        ccSetGraphic(Graphic.graphic_9601);
    } else {
        ccSetGraphic(Graphic.graphic_9602);
    }
    ccSetSize(34, 34, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5 + 12 + 434 - 34 - 4, (51 + 3) * (intArg4 / 1) + (51 - 34) / 2, 0, 0);

    if (intArg2 == 1) {
        str0 = "Task Complete";
    } else if (intArg1 == 1) {
        str0 = "Requirements met.";
    } else {
        str0 = "Requirements not met.";
    }
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1239.component_1239_10, Component.interface_1239.component_1239_8, intArg3, str0, 175, -1, -1, -1, 12, 3, int5, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1239.component_1239_10]));
    intArg3 = intArg3 + 1;
    ccCreate(Component.interface_1239.component_1239_8, 5, intArg3);
    ccSetSize(456, 51, 0, 0);
    ccSetPosition((2 * 12 + 434 + 5) * (intArg4 % 1) + 5, (51 + 3) * (intArg4 / 1), 0, 0);
    ccSetOp(1, "Select");
    ccSetOpBase(append("<col=00ff00>", structParam(intArg0, Param.task_name)));
    ccHookMouseEnter(hook(cs2_5748, "i", [event_comsubid]));

    if (intArg2 == 0) {
        ccHookMouseExit(hook(cs2_5749, "i", [event_comsubid]));
    } else {
        ccHookMouseExit(hook(cs2_5750, "i", [event_comsubid]));
    }
    intArg3 = intArg3 + 1;
    intArg4 = intArg4 + 1;
    return [intArg3, intArg4];
}
