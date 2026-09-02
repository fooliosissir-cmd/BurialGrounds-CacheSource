/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5735

function cs2_5735(): number {
    let int0: number = 0;
    let int1: struct = varp_2501;
    let int2: number = -1;
    let int3: number = -1;
    let int4: component = -1;
    let int5: number = ifGetY(Component.interface_1237.component_1237_1) + ifGetHeight(Component.interface_1237.component_1237_1);
    let int6: number = int5;
    let int7: number = 0;

    ccDeleteAll(Component.interface_1237.component_1237_18);
    cs2_5740(Component.interface_1237.component_1237_21);
    cs2_5740(Component.interface_1237.component_1237_22);
    cs2_5740(Component.interface_1237.component_1237_23);
    cs2_5740(Component.interface_1237.component_1237_24);
    cs2_5740(Component.interface_1237.component_1237_25);
    cs2_5740(Component.interface_1237.component_1237_26);
    cs2_5740(Component.interface_1237.component_1237_27);
    cs2_5740(Component.interface_1237.component_1237_28);
    cs2_5740(Component.interface_1237.component_1237_29);
    cs2_5740(Component.interface_1237.component_1237_30);
    cs2_5740(Component.interface_1237.component_1237_31);
    cs2_5740(Component.interface_1237.component_1237_32);
    let int8: number = 1;

    while (int8 < 13) {
        int7 = int8 - 1;
        switch (int8) {
            case 1:
                int4 = Component.interface_1237.component_1237_21;
                int2 = structParam(int1, Param.task_requirement_1_type);
                int3 = structParam(int1, Param.task_requirement_1_value);
                break;
            case 2:
                int4 = Component.interface_1237.component_1237_22;
                int2 = structParam(int1, Param.task_requirement_2_type);
                int3 = structParam(int1, Param.task_requirement_2_value);
                break;
            case 3:
                int4 = Component.interface_1237.component_1237_23;
                int2 = structParam(int1, Param.param_1298);
                int3 = structParam(int1, Param.param_1299);
                break;
            case 4:
                int4 = Component.interface_1237.component_1237_24;
                int2 = structParam(int1, Param.param_1300);
                int3 = structParam(int1, Param.param_1301);
                break;
            case 5:
                int4 = Component.interface_1237.component_1237_25;
                int2 = structParam(int1, Param.param_1302);
                int3 = structParam(int1, Param.param_1303);
                break;
            case 6:
                int4 = Component.interface_1237.component_1237_26;
                int2 = structParam(int1, Param.param_1304);
                int3 = structParam(int1, Param.param_1305);
                break;
            case 7:
                int4 = Component.interface_1237.component_1237_27;
                int2 = structParam(int1, Param.param_1306);
                int3 = structParam(int1, Param.param_1307);
                break;
            case 8:
                int4 = Component.interface_1237.component_1237_28;
                int2 = structParam(int1, Param.param_1308);
                int3 = structParam(int1, Param.param_1309);
                break;
            case 9:
                int4 = Component.interface_1237.component_1237_29;
                int2 = structParam(int1, Param.param_1310);
                int3 = structParam(int1, Param.param_1311);
                break;
            case 10:
                int4 = Component.interface_1237.component_1237_30;
                int2 = structParam(int1, Param.param_1312);
                int3 = structParam(int1, Param.param_1313);
                break;
            case 11:
                int4 = Component.interface_1237.component_1237_31;
                int2 = structParam(int1, Param.param_2227);
                int3 = structParam(int1, Param.param_2228);
                break;
            case 12:
                int4 = Component.interface_1237.component_1237_32;
                int2 = structParam(int1, Param.param_2229);
                int3 = structParam(int1, Param.param_2230);
                break;
        }
        if (int2 == 0) {
            return int6;
        }
        int0 = cs2_5741(int1, int8);
        int6 = cs2_5736(int5, structParam(int1, Param.param_1268), int8 - 1, int4);
        ccCreate(Component.interface_1237.component_1237_18, 5, int7);
        ccSetSize(15, 15, 0, 0);
        ccSetPosition(ifGetX(int4) + parawidth(ifGetText(int4), ifGetWidth(int4), Graphic.verdana_11pt_regular) + 5, ifGetHeight(int4) / 2 - ccGetHeight() / 2 + ifGetY(int4), 0, 0);
        if (int0 == 1) {
            ccSetGraphic(Graphic.graphic_9604);
        } else {
            ccSetGraphic(Graphic.graphic_9605);
        }
        if (int6 == int5) {
            mes("Something went wrong; aborting at requirement " + tostring(int8));
            cs2_5740(int4);
            return int6;
        }
        int5 = int6;
        int8 = int8 + 1;
    }
    return int6;
}
