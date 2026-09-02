/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2599

function cs2_2599(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: obj = -1;

    defineArray(0, type_obj, 10);
    defineArray(1, type_int, 10);
    defineArray(2, type_int, 10);
    let int4: number = 0;

    while (int1 < 28 && int2 < 10) {
        int3 = invGetobj(93, int1);
        if (int3 != -1 && (ocParam(int3, Param.param_802) == 1 || ocParam(int3, Param.param_803) == 1)) {
            array0[int2] = int3;
            int2 = int2 + 1;
        }
        int1 = int1 + 1;
    }
    int3 = -1;
    array1[0] = varbit_mob_exch_resupply1;
    array1[1] = varbit_mob_exch_resupply2;
    array1[2] = varbit_mob_exch_resupply3;
    array1[3] = varbit_mob_exch_resupply4;
    array1[4] = varbit_mob_exch_resupply5;
    array1[5] = varbit_mob_exch_resupply6;
    array1[6] = varbit_mob_exch_resupply7;
    array1[7] = varbit_mob_exch_resupply8;
    array1[8] = varbit_mob_exch_resupply9;
    array1[9] = varbit_mob_exch_resupply10;
    int1 = 0;

    while (int1 < 10) {
        if (array0[int1] != -1) {
            if (ocParam(int3, Param.param_803) == 1) {
                array2[int1] = varbit_mob_exch_resupply1 * 50;
            }
            if (ocParam(array0[int1], Param.param_803) == 1 && array1[int1] == 1) {
                array2[int1] = 50;
                int4 = int4 + array2[int1];
            }
            ifSetText("Cost: " + tostring(array2[int1]), enumOp(type_int, type_component, Enum.enum_2424, int1));
        }
        int1 = int1 + 1;
    }
    ifSetText(tostring(array2[varc_929]), Component.interface_292.component_292_101);
    varc_928 = int4;
    ifSetText(tostring(varc_928), Component.interface_292.component_292_126);
    ifSetText("Remaining investment credits: " + tostring(varbit_mob_invest - varc_928), Component.interface_292.component_292_128);

    if (varc_928 <= varbit_mob_invest) {
        ifSetGraphic(Graphic.mob_exchange_tick_0, Component.interface_292.component_292_123);
        ifSetOnOpt(hook(cs2_2605, "", []), Component.interface_292.component_292_122);
        ifSetOp(1, "Apply changes", Component.interface_292.component_292_122);
        hookMouseEnter(hook(cs2_94, "I", [event_com]), Component.interface_292.component_292_122);
        ifSetColour(colour(0xFF9935), Component.interface_292.component_292_126);
        ifSetOnClick(noHook(""), Component.interface_292.component_292_122);
    } else {
        ifSetGraphic(Graphic.mob_exchange_tick_1, Component.interface_292.component_292_123);
        ifSetOnOpt(noHook(""), Component.interface_292.component_292_122);
        ifClearops(Component.interface_292.component_292_122);
        hookMouseEnter(noHook(""), Component.interface_292.component_292_122);
        ifSetColour(colour(0xFF1111), Component.interface_292.component_292_126);
        ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_122);
    }
    int1 = 0;

    while (int1 < 10) {
        if (array0[int1] != -1 && ocParam(array0[int1], Param.param_803) == 1) {
            int0 = int0 + 50;
        }
        int1 = int1 + 1;
    }

    if (int0 > 0) {
        ifSetText("Resupply all" + "<br>" + "(" + tostring(int0) + ")", Component.interface_292.component_292_124);
    }

    if (varbit_mob_invest >= int0 && int0 > 0) {
        ifSetColour(colour(0xFF9935), Component.interface_292.component_292_124);
        ifSetOnOpt(hook(cs2_2603, "", []), Component.interface_292.component_292_119);
        ifSetOp(1, "Resupply all", Component.interface_292.component_292_119);
        hookMouseEnter(hook(cs2_94, "I", [event_com]), Component.interface_292.component_292_119);
        ifSetOnClick(noHook(""), Component.interface_292.component_292_119);
    } else {
        ifSetText("Resupply all", Component.interface_292.component_292_124);
        ifSetColour(colour(0x666666), Component.interface_292.component_292_124);
        ifSetOnOpt(noHook(""), Component.interface_292.component_292_119);
        ifClearops(Component.interface_292.component_292_119);
        hookMouseEnter(noHook(""), Component.interface_292.component_292_119);
        ifSetOnClick(hook(cs2_2606, "I", [event_com]), Component.interface_292.component_292_119);
    }
}
