/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6181

function cs2_6181(): void {
    let int0: struct = -1;
    let int1: number = 0;
    let int2: component = -1;

    while (int1 < enumGetoutputcount(Enum.rcsiphonxp_recol_iterator)) {
        int2 = enumOp(type_int, type_component, Enum.rcsiphonxp_recol_iterator, int1);
        if (int2 != -1) {
            ccCreate(int2, 3, 0);
            ccSetPosition(2, 2, 0, 0);
            ccSetSize(2, 2, 1, 1);
            int0 = enumOp(type_component, type_struct, Enum.rcsiphonxp_component_to_struct, int2);
            if (int0 != -1) {
                ccSetColour(structParam(int0, Param.rcsiphonxp_recolour_rgb));
                int0 = -1;
            }
            ccSetfill(true);
            ccCreate(int2, 5, 1);
            ccSetPosition(0, 0, 0, 0);
            ccSetSize(20, 20, 0, 0);
            ccSetGraphic(Graphic.km_colourpickerbox_0);
            int2 = -1;
        }
        int1 = int1 + 1;
    }
}
