/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_skill_refresh]

function skillguide_skill_refresh(intArg0: number): void {
    let int1: Enum = enumOp(type_int, type_enum, Enum.skillguide_skills, intArg0);
    let int2: number = -1;
    let int3: number = 5;
    let int4: struct = -1;

    ifSetHide(true, Component.interface_1218.component_1218_3);

    if (ifFind(Component.interface_1218.component_1218_30) == 1) {
        switch (varc_1755) {
            case 1:
                int2 = ccParam(Param.param_2223);
                break;
            case 2:
                int2 = ccParam(Param.param_2221);
                break;
            case 3:
                int2 = ccParam(Param.param_2222);
                break;
            default:
                int2 = ccParam(Param.param_2224);
                break;
        }
    }
    ccDeleteAll(Component.interface_1218.component_1218_72);

    while (int2 != -1) {
        if (ccFind(Component.interface_1218.component_1218_30, int2) == 1) {
            int4 = enumOp(type_int, type_struct, int1, int2);
            if (varc_1754 <= 0 || structParam(int4, Param.skillguide_filter) == varc_1754 || (varc_1754 == 1 && structParam(int4, Param.skillguide_is_milestone) == 1)) {
                ccSetPosition(0, 0, 0, 0);
                ccSetOnTimer(hook(cs2_5692, "iiJ", [int2, int3, int4]));
                ccSetHide(false);
                int3 = ccGetHeight() + int3;
            } else {
                ccSetHide(true);
            }
            switch (varc_1755) {
                case 1:
                    int2 = ccParam(Param.param_2223);
                    break;
                case 2:
                    int2 = ccParam(Param.param_2221);
                    break;
                case 3:
                    int2 = ccParam(Param.param_2222);
                    break;
                default:
                    int2 = ccParam(Param.param_2224);
                    break;
            }
        } else {
            int2 = -1;
        }
    }
    ifSetScrollSize(0, int3, Component.interface_1218.component_1218_4);
    ifSetScrollPos(0, 0, Component.interface_1218.component_1218_4);
    ifSetSize(0, int3, 1, 0, Component.interface_1218.component_1218_30);
    ifSetSize(0, int3, 1, 0, Component.interface_1218.component_1218_72);
    proc_scrollbar_vertical(Component.interface_1218.component_1218_5, Component.interface_1218.component_1218_4, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
}
