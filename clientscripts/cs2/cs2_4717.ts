/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4717

function cs2_4717(intArg0: component, intArg1: number, intArg2: component, intArg3: Enum): void {
    ccDeleteAll(intArg0);
    let int4: number = 48;
    let int5: number = 48;
    let int6: number = 0;
    let int7: struct = -1;
    let int8: graphic = -1;
    let int9: number = -1;
    let str0: string = "";
    let str1: string = "";
    let int10: number = 1;
    let int11: Enum = -1;
    let int12: number = 0;
    ifSetText("1", Component.interface_590.component_590_20);

    switch (intArg3) {
        case Enum.emotes2_structs:
            int11 = Enum.emotes2_tag_types_enum;
            break;
        default:
            int11 = Enum.emotes2_tag_types_enum;
            break;
    }

    while (int6 < enumGetoutputcount(intArg3)) {
        int7 = enumOp(type_int, type_struct, intArg3, int6);
        int8 = structParam(int7, Param.emotes2_icon);
        int10 = cs2_4718(int7);
        str0 = structParam(int7, Param.emotes2_name);
        ccCreate(intArg0, 5, int6);
        ccSetSize(int4, int5, 0, 0);
        ccSetPosition(0, 0, 0, 0);
        if (int10 == 0) {
            int8 = structParam(int7, Param.emotes2_icon_locked);
        }
        if (int7 == Struct.emotes2_bow) {
            if (gender() > 0) {
                int7 = Struct.emotes2_curtsy;
                int8 = structParam(int7, Param.emotes2_icon);
                str0 = structParam(int7, Param.emotes2_name);
                str1 = "Curtsy";
                ccSetOp(1, "Curtsy");
                ccSetOp(2, "Bow");
                ccSetOnMouseRepeat(hook(cs2_568, "IiIsii", [event_com, event_comsubid, intArg2, str1, 25, 190]));
            } else {
                ccSetOp(1, "Bow");
                ccSetOp(2, "Curtsy");
                str1 = "Bow";
                ccSetOnMouseRepeat(hook(cs2_568, "IiIsii", [event_com, event_comsubid, intArg2, str1, 25, 190]));
            }
        } else {
            ccSetOp(1, str0);
            ccSetOnMouseRepeat(hook(cs2_568, "IiIsii", [event_com, event_comsubid, intArg2, str0, 25, 190]));
        }
        ccSetGraphic(int8);
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [intArg2]));
        int6 = int6 + 1;
    }
    emotes2_sort(Component.interface_590.component_590_8, Component.interface_590.component_590_7, intArg3, -5, 10, int12);
    cs2_4709(intArg3, int11, int12, 0, enumGetoutputcount(int11), Component.interface_590.component_590_14, Component.interface_590.component_590_12, Component.interface_590.component_590_13, Component.interface_590.component_590_15, 897, 788, 788, Graphic.tradebacking_light, colour(0xFFFFFF), colour(0xFF0000), colour(0xFFFF00), Graphic.p11_full, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
}
