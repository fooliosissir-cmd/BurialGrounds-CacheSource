/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4592

function cs2_4592(): void {
    ccDeleteAll(Component.interface_17.component_17_17);
    ccDeleteAll(Component.interface_17.component_17_20);
    ccDeleteAll(Component.interface_17.component_17_22);
    ccDeleteAll(Component.interface_17.component_17_15);

    if (varbit_9226 == 1) {
        ifSetText("If you die in the Wilderness...", Component.interface_17.component_17_12);
    } else {
        ifSetText("Items kept on death", Component.interface_17.component_17_12);
    }

    if (varbit_9226 == 2) {
        ccCreate(Component.interface_17.component_17_15, 4, 0);
        cs2_4595();
        ccSetText(varcstr_351);
        ccSetOnVarcStrTransmit(hook(cs2_4596, "IiY", [event_com, event_comsubid], [351]));
        return;
    }

    if (invFreespace(93) >= invSize(93) && invFreespace(94) >= invSize(94) && (invFreespace(530) >= invSize(530) || mapMembers() == 0)) {
        ccCreate(Component.interface_17.component_17_15, 4, 0);
        cs2_4595();
        ccSetText("You have no items to lose.");
        return;
    }
    let int0: number = ifGetWidth(Component.interface_17.component_17_15);
    let int1: number = max(int0 / 36, 1);
    let int2: number = max((int0 - 36 * int1) / max(int1 - 1, 1), 2);
    let int3: number = max(int2 / 2, 36 - 32 + 1);
    defineArray(0, type_int, 4);
    defineArray(1, type_int, 3);
    defineArray(2, type_int, 3);
    defineArray(3, type_int, 3);

    if (varbit_9227 > 0) {
        if (varbit_9226 == 0) {
            if (varbit_9229 == 1) {
                array0[0] = cs2_4593("You may choose " + tostring(varbit_9227) + " of the following items to keep, and all others will be dropped." + "<br>" + "The " + "<col=bebe00>" + "highlighted" + "</col>" + " items will be chosen by default.", Component.interface_17.component_17_16);
            } else {
                array0[0] = cs2_4593("You may choose " + tostring(varbit_9227) + " of the following items to keep, unless you become skulled, and all others will be dropped." + "<br>" + "The " + "<col=bebe00>" + "highlighted" + "</col>" + " items are chosen by default.", Component.interface_17.component_17_16);
            }
        } else if (varbit_9229 == 1) {
            array0[0] = cs2_4593("You will keep the following items:", Component.interface_17.component_17_16);
        } else {
            array0[0] = cs2_4593("You will keep the following items, unless you become skulled:", Component.interface_17.component_17_16);
        }
    } else {
        array0[0] = cs2_4593("You will drop the following items:", Component.interface_17.component_17_16);
    }

    if (varbit_9226 == 0) {
        array0[1] = cs2_4593("You will keep the following items automatically:", Component.interface_17.component_17_19);
    } else {
        array0[1] = cs2_4593("You will drop the following items:", Component.interface_17.component_17_19);
    }
    array0[2] = cs2_4593("The following items are always lost:", Component.interface_17.component_17_21);
    defineArray(4, type_obj, 4);
    array4[0] = cs2_750(varbit_9222);
    array4[1] = cs2_750(varbit_9223);
    array4[2] = cs2_750(varbit_9224);
    array4[3] = cs2_750(varbit_9225);
    let int4: number = invSize(93) + invSize(94);
    ccDeleteAll(Component.interface_17.component_17_18);
    let int5: number = 0;

    while (int5 < varbit_9227 && int5 < 4) {
        if (array4[int5] != -1) {
            ccCreate(Component.interface_17.component_17_18, 3, ifGetNextSubId(Component.interface_17.component_17_18));
            ccCreate<1>(Component.interface_17.component_17_18, 3, ifGetNextSubId(Component.interface_17.component_17_18));
            ccSetSize(36, 36, 0, 0);
            ccSetSize<1>(36, 36, 0, 0);
            ccSetPosition(array1[0] + 1, array2[0] + 1, 0, 0);
            ccSetPosition<1>(array1[0], array2[0], 0, 0);
            ccSetColour(colour(0x808000));
            ccSetColour<1>(colour(0xBEBE00));
            ccSetfill(false);
            ccSetfill<1>(false);
            ccSetTrans(150);
            ccSetTrans<1>(0);
            cs2_4594(array4[int5], -1, array1[0], array2[0], Component.interface_17.component_17_18);
            array1[0] = array1[0] + 36 + int2;
            if (array1[0] + 36 >= int0) {
                array1[0] = 0;
                array2[0] = array2[0] + 32 + int3;
            }
            array3[0] = array3[0] + 1;
        } else {
            ccCreate(Component.interface_17.component_17_18, 3, ifGetNextSubId(Component.interface_17.component_17_18));
            ccSetHide(true);
            ccCreate(Component.interface_17.component_17_18, 3, ifGetNextSubId(Component.interface_17.component_17_18));
            ccSetHide(true);
            ccCreate(Component.interface_17.component_17_18, 3, ifGetNextSubId(Component.interface_17.component_17_18));
            ccSetHide(true);
        }
        int5 = int5 + 1;
    }
    int5 = 0;
    let int6: obj = -1;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;

    while (int5 <= int4) {
        int6 = cs2_750(int5);
        if (int6 != -1) {
            int7 = cs2_1393(int5);
            int8 = 0;
            while (int8 < 4 && int7 > 0) {
                if (array4[int8] == int6) {
                    int7 = int7 - 1;
                    array4[int8] = -1;
                }
                int8 = int8 + 1;
            }
            if (int7 > 0) {
                int9 = ocParam(ocUncert(int6), Param.protect_on_death);
                if (int9 == -1) {
                    cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_17);
                    cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_20);
                    cs2_4594(int6, int7, array1[2], array2[2], Component.interface_17.component_17_22);
                    array1[2] = array1[2] + 36 + int2;
                    if (array1[2] + 36 >= int0) {
                        array1[2] = 0;
                        array2[2] = array2[2] + 32 + int3;
                    }
                    array3[2] = array3[2] + 1;
                } else if (int9 == 1 || varbit_9226 != 0) {
                    cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_17);
                    cs2_4594(int6, int7, array1[1], array2[1], Component.interface_17.component_17_20);
                    cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_22);
                    array1[1] = array1[1] + 36 + int2;
                    if (array1[1] + 36 >= int0) {
                        array1[1] = 0;
                        array2[1] = array2[1] + 32 + int3;
                    }
                    array3[1] = array3[1] + 1;
                } else {
                    cs2_4594(int6, int7, array1[0], array2[0], Component.interface_17.component_17_17);
                    cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_20);
                    cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_22);
                    array1[0] = array1[0] + 36 + int2;
                    if (array1[0] + 36 >= int0) {
                        array1[0] = 0;
                        array2[0] = array2[0] + 32 + int3;
                    }
                    array3[0] = array3[0] + 1;
                }
            } else {
                cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_17);
                cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_20);
                cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_22);
            }
        } else {
            cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_17);
            cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_20);
            cs2_4594(-1, -1, -1, -1, Component.interface_17.component_17_22);
        }
        int5 = int5 + 1;
    }

    if (array1[0] > 0) {
        array2[0] = array2[0] + 32 + int3;
    } else if (array3[0] <= 0) {
        array0[0] = 0;
        array2[0] = 0;
    }

    if (array1[1] > 0) {
        array2[1] = array2[1] + 32 + int3;
    } else if (array3[1] <= 0) {
        array0[1] = 0;
        array2[1] = 0;
    }

    if (array1[2] > 0) {
        array2[2] = array2[2] + 32 + int3;
    } else if (array3[2] <= 0) {
        array0[2] = 0;
        array2[2] = 0;
    }
    let int10: number = 0;
    ifSetSize(0, array0[0], 1, 0, Component.interface_17.component_17_16);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_16);
    int10 = int10 + array0[0];
    ifSetSize(0, array2[0], 1, 0, Component.interface_17.component_17_17);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_17);
    int10 = int10 + array2[0] + 5;
    ifSetSize(0, array0[1], 1, 0, Component.interface_17.component_17_19);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_19);
    int10 = int10 + array0[1];
    ifSetSize(0, array2[1], 1, 0, Component.interface_17.component_17_20);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_20);
    int10 = int10 + array2[1] + 5;
    ifSetSize(0, array0[2], 1, 0, Component.interface_17.component_17_21);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_21);
    int10 = int10 + array0[2];
    ifSetSize(0, array2[2], 1, 0, Component.interface_17.component_17_22);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_22);
    int10 = int10 + array2[2];

    if (invFreespace(530) < invSize(530) && mapMembers() == 1) {
        array0[3] = cs2_4593("You have items stored on your " + "<col=ffff00>" + "beast of burden" + "</col>" + " that will be dropped if either of you dies.", Component.interface_17.component_17_23);
    }
    ifSetSize(0, array0[3], 1, 0, Component.interface_17.component_17_23);
    ifSetPosition(0, int10, 1, 0, Component.interface_17.component_17_23);
    int10 = int10 + array0[3];
    ifSetScrollSize(0, int10, Component.interface_17.component_17_15);

    if (int10 > ifGetHeight(Component.interface_17.component_17_15)) {
        proc_scrollbar_vertical(Component.interface_17.component_17_24, Component.interface_17.component_17_15, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        ifSetHide(false, Component.interface_17.component_17_24);
        ifSetPosition(0, 0, 0, 1, Component.interface_17.component_17_15);
    } else {
        ifSetHide(true, Component.interface_17.component_17_24);
        ifSetPosition(0, 0, 1, 1, Component.interface_17.component_17_15);
        ifSetScrollPos(0, 0, Component.interface_17.component_17_15);
    }
}
