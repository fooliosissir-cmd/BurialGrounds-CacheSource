/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6492

function cs2_6492(): void {
    if (varp_2623 == -1) {
        return;
    }
    let int0: struct = -1;
    let int1: number = 0;
    let int2: component = -1;
    let str0: string = "";
    let int3: number = 0;

    while (int1 < enumGetoutputcount(Enum.mtxrecol_equip_recolour_iterator)) {
        int2 = enumOp(type_int, type_component, Enum.mtxrecol_equip_recolour_iterator, int1);
        if (int2 != -1) {
            if (int1 == 0) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolsource);
            } else if (int1 == 1) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour1);
            } else if (int1 == 2) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour2);
            } else if (int1 == 3) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour3);
            } else if (int1 == 4) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour4);
            } else if (int1 == 5) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour5);
            } else if (int1 == 6) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour6);
            } else if (int1 == 7) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour7);
            } else if (int1 == 8) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour8);
            } else if (int1 == 9) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour9);
            } else if (int1 == 10) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour10);
            } else if (int1 == 11) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour11);
            } else if (int1 == 12) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour12);
            } else if (int1 == 13) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour13);
            } else if (int1 == 14) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour14);
            } else if (int1 == 15) {
                int0 = structParam(varp_2623, Param.mtxrecol_recolour15);
            }
            if (int0 != -1) {
                ccCreate(int2, 3, int3);
                ccSetPosition(2, 2, 0, 0);
                ccSetSize(2, 2, 1, 1);
                ccSetColour(structParam(int0, Param.mtxrecol_recolour_rgb));
                ccSetfill(true);
                int3 = int3 + 1;
                if (varbit_11248 == int1) {
                    ccCreate(int2, 3, int3);
                    ccSetPosition(2, 2, 0, 0);
                    ccSetSize(5, 5, 1, 1);
                    ccSetColour(colour(0x3A332B));
                    ccSetfill(false);
                    int3 = int3 + 1;
                }
                ccCreate(int2, 5, int3);
                ccSetPosition(0, 0, 0, 0);
                ccSetSize(20, 20, 0, 0);
                int3 = int3 + 1;
                if (varbit_11247 == int1) {
                    ccSetGraphic(Graphic.km_colourpickerbox_1);
                    str0 = "This is the current colour for the set.";
                } else {
                    ccSetGraphic(Graphic.km_colourpickerbox_0);
                    str0 = "Recolour the item you currently have selected to this colour.";
                }
                if (varbit_11248 == int1 && varbit_11247 != int1) {
                    str0 = "This is your original colour for the set.";
                }
                ccSetOnMouseRepeat(hook(cs2_5334, "IiIsii", [int2, 0, Component.mtxrecol_equip.tooltip_layer, str0, 25, 500]));
                ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.mtxrecol_equip.tooltip_layer]));
                int0 = -1;
                int3 = 0;
            }
            int2 = -1;
        }
        int1 = int1 + 1;
    }
}
