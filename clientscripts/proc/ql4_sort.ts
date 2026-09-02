/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_sort]

function proc_ql4_sort(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number): void {
    if (intArg1 == -1 || intArg2 == -1 || intArg3 == -1 || intArg4 == -1) {
        return;
    }
    defineArray(0, type_int, varc_273 + 1);
    defineArray(1, type_int, varc_273 + 1);
    let int5: struct = enumOp(type_int, type_struct, Enum.ql4_intstruct_lists, intArg0);

    if (int5 == -1) {
        return;
    }
    let int6: Enum = structParam(int5, Param.param_61);
    let int7: component = structParam(int5, Param.param_152);
    let int8: component = structParam(int5, Param.param_153);
    let int9: component = structParam(int5, Param.param_670);
    varc_ql4_comlevel = comlevel();
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 1;
    let int13: number = 0;
    let int14: number = 1;
    let int15: Enum = enumOp(type_int, type_enum, structParam(int5, Param.param_673), intArg1);
    let int16: Enum = enumOp(type_int, type_enum, structParam(int5, Param.param_676), intArg1);
    let int17: Enum = enumOp(type_int, type_enum, structParam(int5, Param.param_675), intArg1);

    if (int17 == -1) {
        int17 = Enum.ql4_intint_identity;
    }

    if (int15 == -1) {
        return;
    }
    let int18: number = enumGetoutputcount(int15);
    let int19: number = ifGetScrollY(int7);
    let int20: number = ifGetScrollHeight(int7);
    let int21: number = 0;
    let int22: number = 0;
    let str0: string = "";
    cs2_2164(intArg0);

    while (int10 <= varc_273) {
        array0[int10] = int10;
        int10 = int10 + 1;
    }
    int10 = 0;
    ql4_quicksort(0, int6, 0, varc_273);

    switch (intArg0) {
        case 1:
            while (int10 <= varc_273) {
                array1[int10] = cs2_2193(array0[int10]);
                int10 = int10 + 1;
            }
            break;
        case 3:
            while (int10 <= varc_273) {
                array1[int10] = 0;
                int10 = int10 + 1;
            }
            break;
    }
    int10 = 0;
    let int23: number = 0;

    if (intArg2 == 1) {
        int23 = int18 - 1;
    }
    let int24: number = 5;
    let int25: number = 0;
    let int26: number = -1;

    if (intArg0 == 1) {
        int26 = varbit_6913;
    } else if (structParam(int5, Param.param_693) > 0) {
        int26 = varbit_ql4_maparrow_itemid - 1000 * (structParam(int5, Param.param_693) - 1);
    } else {
        int26 = varbit_ql4_maparrow_itemid - 1000 * (intArg0 - 1);
    }
    let int27: struct = -1;

    while ((intArg2 == 0 && int23 < int18) || (intArg2 == 1 && int23 >= 0)) {
        int21 = enumOp(type_int, type_int, int17, int23);
        if (ccFind(int7, varc_273 + int23 + 1) == 1) {
            ccSetPosition(0, int24, 0, 0);
            str0 = enumOp(type_int, type_string, int15, int21);
            ccSetText(str0);
            ccSetHide(false);
            int24 = int24 + ccGetHeight();
        }
        int13 = 0;
        while (int11 < varc_272) {
            int27 = enumOp(type_int, type_struct, int6, array0[int10]);
            if (int27 != -1) {
                int11 = int11 + 1;
                switch (intArg1) {
                    case 0:
                        int22 = structParam(int27, Param.param_856);
                        if (int22 == 4 && varp_tutorial == 1000) {
                            int22 = 0;
                        }
                        break;
                    case 1:
                        switch (intArg0) {
                            case 1:
                                int22 = array1[int10];
                                break;
                            case 3:
                                int22 = structParam(int27, Param.param_677);
                                break;
                        }
                        break;
                    case 2:
                        switch (intArg0) {
                            case 1:
                                int22 = structParam(int27, Param.param_848);
                                break;
                            case 3:
                                int22 = structParam(int27, Param.param_678);
                                break;
                        }
                        break;
                }
                if (int22 != int21) {
                    int14 = 0;
                }
                if (int14 == 1 && intArg3 == 0 && array1[int10] == 0) {
                    int12 = ql4_requirements_cache(int27);
                    if (int12 == 0) {
                        int14 = 0;
                    }
                }
                if (int14 == 1 && intArg4 == 1 && array1[int10] == 2) {
                    int14 = 0;
                }
                if (int14 == 1 && ccFind(int7, array0[int10]) == 1) {
                    ccSetPosition(10, int24, 0, 0);
                    ccSetHide(false);
                    if (structParam(int27, Param.param_694) == 1) {
                        if (array1[int10] == 0) {
                            ccSetOp(1, "View Quest Overview");
                            ccSetOp(2, "View Quest Journal");
                            ccSetOp(3, "Toggle Map Hint");
                        } else if (array1[int10] == 1) {
                            ccSetOp(1, "View Quest Journal");
                            ccSetOp(2, "View Quest Overview");
                            ccSetOp(3, "Toggle Map Hints");
                        } else {
                            ccSetOp(1, "View Quest Journal");
                            ccSetOp(2, "View Quest Overview");
                            ccSetOp(3, "");
                        }
                    } else {
                        ccSetOp(1, "View Quest Journal");
                        ccSetOp(3, "");
                        if (array1[int10] == 0) {
                            ccSetOp(2, "Toggle Map Hint");
                        } else {
                            ccSetOp(2, "");
                        }
                    }
                    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
                    if (array0[int10] == int26) {
                        ccSetColour(colour(0x00FFFF));
                        ccHookMouseExit(hook(cs2_1949, "IiiI", [event_com, event_comsubid, colour(0x00FFFF), int9]));
                    } else if (array1[int10] == 0) {
                        ccSetColour(colour(0xFF0000));
                        ccHookMouseExit(hook(cs2_1949, "IiiI", [event_com, event_comsubid, colour(0xFF0000), int9]));
                    } else if (array1[int10] == 1) {
                        ccSetColour(colour(0xFFFF00));
                        ccHookMouseExit(hook(cs2_1949, "IiiI", [event_com, event_comsubid, colour(0xFFFF00), int9]));
                    } else {
                        ccSetColour(colour(0x00FF00));
                        ccHookMouseExit(hook(cs2_1949, "IiiI", [event_com, event_comsubid, colour(0x00FF00), int9]));
                    }
                    int24 = int24 + ccGetHeight();
                    int13 = int13 + 1;
                    if (enumOp(type_int, type_int, int16, int21) == 1 && compare(structParam(int27, Param.param_857), "") != 0 && ccFind(int7, varc_273 + int23 + 1) == 1) {
                        ccSetText(structParam(int27, Param.param_857));
                    }
                    int25 = int25 + 1;
                }
                int14 = 1;
            }
            int10 = int10 + 1;
        }
        if (int13 != 0) {
            int24 = int24 + 10;
        } else {
            if (ccFind(int7, varc_273 + int23 + 1) == 1) {
                ccSetText("");
                ccSetHide(true);
            }
            int24 = int24 - 20;
        }
        int10 = 0;
        int11 = 0;
        if (intArg2 == 0) {
            int23 = int23 + 1;
        } else {
            int23 = int23 - 1;
        }
    }
    let str1: string = "";

    if (intArg0 == 1) {
        if (int25 == varc_272) {
            str1 = "Showing all " + tostring(varc_272) + " items";
        } else {
            str1 = "Showing " + tostring(int25) + " of " + tostring(varc_272) + " items";
        }
        ifSetText(str1, Component.interface_190.component_190_12);
    }

    if (varc_695 == 1 || int20 != int24 + 5 || (intArg2 == 1 && varc_694 == 0) || (intArg2 == 0 && varc_694 == 1)) {
        ifSetScrollSize(ifGetWidth(int7), int24 + 5, int7);
        int20 = int24;
        ifSetScrollPos(0, 0, int7);
        proc_scrollbar_vertical(int8, int7, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    } else {
        ifSetScrollPos(0, int19, int7);
    }

    if (intArg0 == 1) {
        varc_692 = intArg3;
        varc_1103 = intArg4;
        varc_694 = intArg2;
        if (varc_692 == 1) {
            ifSetHide(true, Component.interface_190.component_190_4);
            ifSetHide(false, Component.interface_190.component_190_5);
        } else {
            ifSetHide(false, Component.interface_190.component_190_4);
            ifSetHide(true, Component.interface_190.component_190_5);
        }
        if (varc_1103 == 0) {
            ifSetHide(true, Component.interface_190.component_190_8);
            ifSetHide(false, Component.interface_190.component_190_9);
        } else {
            ifSetHide(false, Component.interface_190.component_190_8);
            ifSetHide(true, Component.interface_190.component_190_9);
        }
    }
    varc_695 = 0;
}
