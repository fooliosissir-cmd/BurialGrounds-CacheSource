/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rand_interface_update_titles]

function rand_interface_update_titles(intArg0: number, intArg1: number, intArg2: component): void {
    let str0: string = enumOp(type_int, type_string, Enum.enum_2857, intArg1);
    let int3: number = enumOp(type_int, type_int, Enum.enum_2858, intArg1);
    let str1: string = enumOp(type_int, type_string, Enum.enum_2859, intArg1);

    if (intArg0 == 1) {
        ifSetText(str0, intArg2);
        if (int3 == 2) {
            ifSetColour(colour(0x00A000), intArg2);
        } else if (int3 == 1) {
            ifSetColour(colour(0x909000), intArg2);
        } else if (int3 == 0) {
            ifSetColour(colour(0xA00000), intArg2);
        }
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [event_com, Component.interface_933.component_933_254, str1, 25, 200]), intArg2);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_933.component_933_254]), intArg2);
    } else {
        ifSetText("", intArg2);
    }
}
