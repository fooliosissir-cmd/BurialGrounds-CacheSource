/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2726

function cs2_2726(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = 18;
    let int4: number = 16;
    let int5: number = 5;
    let int6: number = 4;
    let int7: number = min(int5, intArg2 + 1);
    let int8: number = intArg2 / int5 + 1;
    let int9: number = intArg2 % int5 * (int3 + int6) + int6;
    let int10: number = intArg2 / int5 * (int4 + int6) + int6;

    ccCreate(intArg0, 5, intArg2);
    ccSetSize(int3, int4, 0, 0);
    ccSetObject(enumOp(type_int, type_obj, Enum.toolbelt_rand_keys_objects, intArg1), -1);
    ccSetPosition(int9, int10, 0, 0);
    let str0: string = ocName(enumOp(type_int, type_obj, Enum.toolbelt_rand_keys_objects, intArg1));
    ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_945.component_945_33, event_com, -1, str0, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 1, event_mousex, event_mousey]));
    ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_945.component_945_33]));
    let int11: number = int7 * (int3 + int6) + int6;
    let int12: number = int8 * (int4 + int6) + int6;
    ifSetSize(int11, int12, 0, 0, Component.interface_945.component_945_20);
}
