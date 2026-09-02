/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2570

function cs2_2570(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: obj = -1;

    varc_930 = -1;
    varc_931 = -1;
    varc_932 = -1;
    varc_933 = -1;
    varc_934 = -1;
    varc_935 = -1;
    varc_936 = -1;
    varc_937 = -1;
    varc_938 = -1;
    varc_939 = -1;

    if (varbit_mob_exch_squad > 0 && varbit_mob_exch_squad < 11) {
        varc_929 = varbit_mob_exch_squad - 1;
    } else {
        varc_929 = 0;
    }

    while (int1 < 10 && int0 < 28) {
        int2 = invGetobj(93, int0);
        if (ocParam(int2, Param.param_802) == 1 || ocParam(int2, Param.param_803) == 1) {
            ifSetText("Squad " + tostring(int1 + 1), enumOp(type_int, type_component, Enum.enum_2423, int1));
            if (ocParam(int2, Param.param_806) == 0) {
                ifSetGraphic(Graphic.graphic_2023, enumOp(type_int, type_component, Enum.enum_2427, int1));
            } else if (ocParam(int2, Param.param_806) == 1) {
                ifSetGraphic(Graphic.graphic_2022, enumOp(type_int, type_component, Enum.enum_2427, int1));
            }
            if (ocParam(int2, Param.param_805) == 1) {
                ifSetGraphic(Graphic.graphic_2016, enumOp(type_int, type_component, Enum.enum_2426, int1));
            } else if (ocParam(int2, Param.param_805) == 2) {
                ifSetGraphic(Graphic.graphic_2018, enumOp(type_int, type_component, Enum.enum_2426, int1));
            } else if (ocParam(int2, Param.param_805) == 3) {
                ifSetGraphic(Graphic.graphic_2017, enumOp(type_int, type_component, Enum.enum_2426, int1));
            }
            if (ocParam(int2, Param.param_803) == 1) {
                ifSetColour(colour(0xCC0000), enumOp(type_int, type_component, Enum.enum_2429, int1));
            } else {
                ifSetColour(colour(0x000000), enumOp(type_int, type_component, Enum.enum_2429, int1));
            }
            switch (int1) {
                case 0:
                    varc_930 = int0;
                    break;
                case 1:
                    varc_931 = int0;
                    break;
                case 2:
                    varc_932 = int0;
                    break;
                case 3:
                    varc_933 = int0;
                    break;
                case 4:
                    varc_934 = int0;
                    break;
                case 5:
                    varc_935 = int0;
                    break;
                case 6:
                    varc_936 = int0;
                    break;
                case 7:
                    varc_937 = int0;
                    break;
                case 8:
                    varc_938 = int0;
                    break;
                case 9:
                    varc_939 = int0;
                    break;
            }
            int1 = int1 + 1;
        }
        int0 = int0 + 1;
    }

    if (int1 < 10) {
        while (int1 < 10) {
            ifSetText("No squad", enumOp(type_int, type_component, Enum.enum_2423, int1));
            ifSetText("", enumOp(type_int, type_component, Enum.enum_2424, int1));
            ifSetGraphic(-1, enumOp(type_int, type_component, Enum.enum_2427, int1));
            ifSetGraphic(-1, enumOp(type_int, type_component, Enum.enum_2426, int1));
            ifSetOnOpt(noHook(""), enumOp(type_int, type_component, Enum.enum_2422, int1));
            ifClearops(enumOp(type_int, type_component, Enum.enum_2422, int1));
            int1 = int1 + 1;
        }
    }
    cs2_2599();
    cs2_2573();
}
