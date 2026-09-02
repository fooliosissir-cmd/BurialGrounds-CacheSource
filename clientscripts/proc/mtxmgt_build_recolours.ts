/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,mtxmgt_build_recolours]

function mtxmgt_build_recolours(): void {
    let int0: struct = -1;
    let str0: string = "this colour";
    let int1: number = 0;
    let int2: component = -1;
    let str1: string = "";
    let int3: number = 0;

    while (int1 < enumGetoutputcount(Enum.enum_5962)) {
        int2 = enumOp(type_int, type_component, Enum.enum_5962, int1);
        if (int2 != -1) {
            if (int1 == 0) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolsource);
            } else if (int1 == 1) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour1);
            } else if (int1 == 2) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour2);
            } else if (int1 == 3) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour3);
            } else if (int1 == 4) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour4);
            } else if (int1 == 5) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour5);
            } else if (int1 == 6) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour6);
            } else if (int1 == 7) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour7);
            } else if (int1 == 8) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour8);
            } else if (int1 == 9) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour9);
            } else if (int1 == 10) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour10);
            } else if (int1 == 11) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour11);
            } else if (int1 == 12) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour12);
            } else if (int1 == 13) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour13);
            } else if (int1 == 14) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour14);
            } else if (int1 == 15) {
                int0 = structParam(Struct.mtxmgt_recolours, Param.mtxrecol_recolour15);
            }
            if (int0 != -1) {
                ccCreate(int2, 3, int3);
                ccSetPosition(2, 2, 0, 0);
                ccSetSize(2, 2, 1, 1);
                ccSetColour(structParam(int0, Param.mtxrecol_recolour_rgb));
                ccSetfill(true);
                int3 = int3 + 1;
                ccCreate(int2, 5, int3);
                ccSetPosition(0, 0, 0, 0);
                ccSetSize(20, 20, 0, 0);
                int3 = int3 + 1;
                if (varc_1967 == int1) {
                    ccSetGraphic(Graphic.km_colourpickerbox_1);
                } else {
                    ccSetGraphic(Graphic.km_colourpickerbox_0);
                }
                str0 = structParam(int0, Param.param_2548);
                str1 = "Recolour this item to " + str0 + ".";
                ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1311.component_1311_83, event_com, event_comsubid, str1, 350, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xB6B6B6), 12, 1, 1, event_mousex, event_mousey]));
                ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1311.component_1311_83]));
                int0 = -1;
                int3 = 0;
            }
            int2 = -1;
        }
        int1 = int1 + 1;
    }
}
