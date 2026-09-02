/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5308

function cs2_5308(): void {
    let int0: number = 0;
    let int1: number = 0;
    let str0: string = "";
    let int2: struct = -1;
    let int3: number = 0;
    let int4: graphic = Graphic.clan_custom_object_backing_lrg_0;
    let int5: graphic = Graphic.clan_custom_object_backing_lrg_3;
    let int6: number = 7289;
    let int7: number = 2;
    let int8: number = 54;

    ccDeleteAll(Component.interface_823.component_823_3);
    ccDeleteAll(Component.interface_823.component_823_4);

    while (int0 < enumGetoutputcount(Enum.clan_theatre_prop_com2id)) {
        int3 = enumOp(type_int, type_int, Enum.clan_theatre_prop_com2id, int0);
        int2 = enumOp(type_int, type_struct, Enum.clan_theatre_prop_id2struct, int3);
        if (int2 == -1) {
            return;
        }
        str0 = structParam(int2, Param.clan_theatre_prop_name) + "<br>" + structParam(int2, Param.clan_theatre_prop_desc);
        ccCreate(Component.interface_823.component_823_3, 5, int0);
        ccSetGraphic(int4);
        ccSetSize(int8, int8, 0, 0);
        if (int0 % 3 == 0) {
            ccSetPosition(int7, int7 + int1 * (54 + int7), 0, 0);
        } else if (int0 % 3 == 1) {
            ccSetPosition(int7 * 2 + int8, int7 + int1 * (54 + int7), 0, 0);
        } else {
            ccSetPosition(int7 * 3 + int8 * 2, int7 + int1 * (54 + int7), 0, 0);
        }
        if (int3 == 0) {
            ccSetOp(1, structParam(int2, Param.clan_theatre_prop_name));
        } else {
            ccSetOnTargetEnter(hook(clan_theatre_prop_select, "i", [event_comsubid]));
            ccSetOnOp(hook(graphic_swapper, "Id", [event_com, int4]));
            if (int3 == 1) {
                ccSettargetverb(structParam(int2, Param.clan_theatre_prop_name));
            } else if (int3 == 2) {
                ccSettargetverb(structParam(int2, Param.clan_theatre_prop_name));
            } else {
                ccSettargetverb("Place " + structParam(int2, Param.clan_theatre_prop_name));
            }
            ccSettargetcursors(Cursor.cursor_target, -1);
        }
        ccHookMouseEnter(hook(graphic_swapper, "Id", [event_com, int5]));
        ccSetOnMouseOver(hook(cs2_5334, "IiIsii", [Component.interface_823.component_823_3, int0, Component.interface_823.component_823_15, str0, 20, 200]));
        ccHookMouseExit(hook(cs2_299, "IId", [Component.interface_823.component_823_15, event_com, int4]));
        ccCreate(Component.interface_823.component_823_4, 5, int0);
        ccSetGraphic(structParam(int2, Param.clan_theatre_prop_gfx));
        ccSetSize(50, 50, 0, 0);
        if (int0 % 3 == 0) {
            ccSetPosition(int7 + 2, 2 + int7 + int1 * (54 + int7), 0, 0);
        } else if (int0 % 3 == 1) {
            ccSetPosition(2 + int7 * 2 + int8, 2 + int7 + int1 * (54 + int7), 0, 0);
        } else {
            ccSetPosition(2 + int7 * 3 + int8 * 2, 2 + int7 + int1 * (54 + int7), 0, 0);
        }
        if (int0 % 3 == 2) {
            int1 = int1 + 1;
        }
        int0 = int0 + 1;
    }
    int1 = int1 + 1;
    ifSetScrollPos(0, 0, Component.interface_823.component_823_9);
    ifSetScrollSize(0, int7 + int1 * (54 + int7), Component.interface_823.component_823_9);
    proc_scrollbar_vertical(Component.interface_823.component_823_10, Component.interface_823.component_823_9, Graphic.aif_scrollbar_dragger_1_3, Graphic.aif_scrollbar_dragger_1_0, Graphic.aif_scrollbar_dragger_1_1, Graphic.aif_scrollbar_dragger_1_2, Graphic.aif_scrollbar_arrow_1_1, Graphic.aif_scrollbar_arrow_1_0);
}
