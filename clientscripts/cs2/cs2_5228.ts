/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5228

function cs2_5228(intArg0: number): void {
    let int1: number = 0;
    let str0: string = "";
    let int2: component = cs2_4969(intArg0);
    let int3: component = -1;
    let int4: number = 2;

    if (int2 == -1) {
        return;
    }

    if (clanProfileFind() == 1) {
        int1 = cs2_4949(intArg0);
        if (int1 > 0) {
            str0 = "Teleport to the " + enumOp(type_int, type_string, Enum.enum_4287, int1) + " skill plot.";
            int3 = ifGetParentLayer(int2);
            if (ifGetY(int2) > ifGetHeight(int3) / 2) {
                int4 = 0;
            }
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1259.component_1259_57, int2, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int4, event_mousex, event_mousey]), int2);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_1259.component_1259_57]), int2);
            ifSetOp(1, "Teleport to " + enumOp(type_int, type_string, Enum.enum_4287, int1), int2);
            return;
        }
    }
    ifSetOnMouseRepeat(noHook(""), int2);
    ifSetOnMouseLeave(noHook(""), int2);
}
