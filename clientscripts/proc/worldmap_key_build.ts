/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_key_build]

function worldmap_key_build(intArg0: number, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: number;

    ccDeleteAll(intArg1);
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    int4 = cs2_285(intArg1, int4);
    ccCreate(intArg1, 5, ifGetNextSubId(intArg1));
    ccSetPosition(0, int4, 0, 0);
    ccSetSize(0, 5, 1, 0);
    ccSetGraphic(Graphic.graphic_1121);
    ccSettiling(true);
    int4 = int4 + 4;
    defineArray(0, type_int, 129 + 1);
    let int8: struct = -1;
    let int9: number = -1;

    if (intArg0 == 0) {
        while (int5 <= 129) {
            int8 = enumOp(type_int, type_struct, Enum.worldmap_key_data, int5);
            if (int8 != -1 && (mapMembers() == 1 || structParam(int8, Param.membersonly) == 0)) {
                int4 = worldmap_createline(intArg1, int5, int4);
            }
            int5 = int5 + 1;
        }
        ifSetText("Key order:" + "<br>" + "Traditional", intArg3);
    } else {
        while (int5 <= 129) {
            int8 = enumOp(type_int, type_struct, Enum.worldmap_key_data, int5);
            if (int8 != -1 && (mapMembers() == 1 || structParam(int8, Param.membersonly) == 0)) {
                array0[int7] = int5;
                int7 = int7 + 1;
            }
            int5 = int5 + 1;
        }
        int7 = int7 - 1;
        int5 = 0;
        if (intArg0 == 1) {
            worldmap_quicksort_alphabetical(0, 0, int7);
            while (int5 <= int7) {
                int4 = worldmap_createline(intArg1, array0[int5], int4);
                int5 = int5 + 1;
            }
            ifSetText("Key order:" + "<br>" + "Alphabetical", intArg3);
        } else if (intArg0 == 2) {
            worldmap_quicksort_category(0, 0, int7);
            while (int9 < enumGetoutputcount(Enum.enum_1806)) {
                int4 = worldmap_createtitle(intArg1, int9, int4);
                while (structParam(enumOp(type_int, type_struct, Enum.worldmap_key_data, array0[int6]), Param.worldmap_key_category) == int9) {
                    int6 = int6 + 1;
                }
                worldmap_quicksort_alphabetical(0, int5, int6 - 1);
                while (int5 < int6) {
                    int4 = worldmap_createline(intArg1, array0[int5], int4);
                    int5 = int5 + 1;
                }
                int9 = int9 + 1;
            }
            ifSetText("Key order:" + "<br>" + "Categorised", intArg3);
        }
    }
    int4 = int4 + 5;
    ifSetScrollSize(0, int4, intArg1);
    proc_scrollbar_vertical(intArg2, intArg1, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);

    if (ccFind(intArg2, 1) == 1) {
        scrollbar_vertical_doscroll(intArg2, intArg1, ifGetScrollY(intArg1), true);
    }
}
