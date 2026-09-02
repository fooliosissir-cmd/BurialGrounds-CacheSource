/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5222

function cs2_5222(intArg0: number): void {
    let int1: number = cs2_4949(intArg0);
    let int2: number = cs2_4959(intArg0);
    let int3: component = cs2_4972(intArg0);

    if (int3 == -1) {
        return;
    }
    let int4: component = ifGetParentLayer(int3);
    let int5: component = ifGetParentLayer(int4);
    let str0: string = "";
    let str1: string = "Empty skill plot";
    let int6: number = 3;

    if (intArg0 == 1) {
        str0 = "Citadel : Tier " + tostring(int2);
    } else if (intArg0 == 2) {
        str0 = "Storehouse : Tier " + tostring(int2);
    } else if (intArg0 == 3) {
        str0 = "Battlefield : Tier " + tostring(int2);
    } else {
        str1 = enumOp(type_int, type_string, Enum.enum_4287, int1);
        if (int2 > 0) {
            str0 = str1 + " : Tier " + tostring(int2);
        } else {
            str0 = "Empty skill plot";
        }
    }

    if (ifGetX(int4) < ifGetWidth(int5) / 2 - 50) {
        int6 = 1;
    }
    ifSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1261.component_1261_153, int3, -1, str0, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int6, event_mousex, event_mousey]), int3);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1261.component_1261_153]), int3);
}
