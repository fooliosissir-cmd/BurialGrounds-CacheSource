/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_init_general]

function ql4_init_general(intArg0: number): void {
    let int1: struct = enumOp(type_int, type_struct, Enum.ql4_intstruct_lists, intArg0);

    if (int1 == -1) {
        return;
    }
    let int2: Enum = structParam(int1, Param.param_61);

    if (int2 == -1) {
        return;
    }
    let int3: component = structParam(int1, Param.param_152);
    let int4: component = structParam(int1, Param.param_153);
    ccDeleteAll(int3);
    let int5: number = 0;
    let int6: number = 0;
    let int7: struct = -1;
    let int8: number = -1;
    let int9: number = 0;

    if (mapMembers() == 1) {
        varc_693 = varbit_ql4_perm_sort;
    } else {
        varc_693 = 0;
    }
    varc_694 = varbit_ql4_perm_reverse;
    varc_1103 = varbit_ql4_perm_donefilter;
    varc_692 = varbit_ql4_perm_filter;
    varc_272 = enumGetoutputcount(int2);

    while (int6 < varc_272) {
        int7 = enumOp(type_int, type_struct, int2, int5);
        ccCreate(int3, 4, int5);
        if (int7 != -1) {
            int6 = int6 + 1;
            int9 = cs2_2193(int5);
            ccSetPosition(0, 0, 0, 0);
            ccSetSize(0, 15, 1, 0);
            ccSetColour(colour(0x222222));
            ccSetTextFont(Graphic.p11_full);
            ccSetTextAlign(0, 0, 0);
            ccSetTextShadow(true);
            ccSetText(structParam(int7, Param.param_845));
            if (int8 == -1 && int7 == Struct.struct_510 && intArg0 == 1) {
                int8 = ccGetId();
            }
        } else {
            ccSetHide(true);
        }
        int5 = int5 + 1;
    }
    varc_273 = int5 - 1;

    while (int5 < varc_273 + 10) {
        ccCreate(int3, 4, int5);
        ccSetTextFont(Graphic.b12_full);
        ccSetSize(0, 30, 1, 0);
        ccSetSize(0, 20, 1, 0);
        ccSetTextAlign(0, 1, 0);
        ccSetText("");
        ccSetColour(colour(0xFF9900));
        ccSetHide(true);
        ccSetTextShadow(true);
        int5 = int5 + 1;
    }
    proc_ql4_sort(intArg0, varc_693, varc_694, varc_692, varc_1103);
    proc_scrollbar_vertical(int4, int3, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);

    if (int8 != -1) {
        cs2_214(int3, int8);
    }
}
