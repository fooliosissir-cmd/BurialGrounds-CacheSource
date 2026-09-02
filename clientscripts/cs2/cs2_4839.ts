/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4839

function cs2_4839(intArg0: component, intArg1: number): void {
    let int2: number = 0;
    let int3: component = -1;

    switch (intArg0) {
        case Component.interface_1258.component_1258_418:
            int3 = Component.interface_1258.component_1258_421;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_426);
            break;
        case Component.interface_1258.component_1258_350:
            int3 = Component.interface_1258.component_1258_353;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_358);
            break;
        case Component.interface_1258.component_1258_276:
            int3 = Component.interface_1258.component_1258_279;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_284);
            break;
        case Component.interface_1258.component_1258_406:
            int3 = Component.interface_1258.component_1258_409;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_414);
            break;
        case Component.interface_1258.component_1258_336:
            int3 = Component.interface_1258.component_1258_339;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_344);
            break;
        case Component.interface_1258.component_1258_260:
            int3 = Component.interface_1258.component_1258_263;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_268);
            break;
        case Component.interface_1258.component_1258_394:
            int3 = Component.interface_1258.component_1258_397;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_402);
            break;
        case Component.interface_1258.component_1258_322:
            int3 = Component.interface_1258.component_1258_325;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_330);
            break;
        case Component.interface_1258.component_1258_244:
            int3 = Component.interface_1258.component_1258_247;
            int2 = ifGetNextSubId(Component.interface_1258.component_1258_252);
            break;
    }

    if (ifFind(intArg0) == 1) {
        ccSetScrollSize(0, ccParam(Param.clan_custom_if_subsection_height));
        if (intArg1 >= 0) {
            ccSetSize(0, 27, 1, 0);
            ccSetScrollPos(0, intArg1);
            if (int3 != -1) {
                ifSetPosition(ifGetX(int3), intArg1, 0, 0, int3);
                if (int2 > 1) {
                    ifSetHide(false, int3);
                } else {
                    ifSetHide(true, int3);
                }
            }
        } else {
            ccSetSize(0, ccParam(Param.clan_custom_if_subsection_height), 1, 0);
            ccSetScrollPos(0, 0);
            if (int3 != -1) {
                ifSetHide(true, int3);
            }
        }
    }
}
