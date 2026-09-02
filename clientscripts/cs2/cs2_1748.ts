/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1748

function cs2_1748(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component, intArg9: component, intArg10: component, intArg11: component, intArg12: component, intArg13: component): void {
    let int14: colour = cs2_718(varc_glo3_col1_c);
    let int15: colour = cs2_718(varc_glo3_col2_c);
    let int16: colour = lightcombine_ratio(int14, varc_glo3_int1_c, int15, varc_glo3_int2_c);

    if (ifFind(intArg0) == 1) {
        ccSetParamString(Param.param_718, guesscolour(int16));
        ccSetColour(int16);
    }

    if (ifFind(intArg8) == 1) {
        ccSetParamString(Param.param_718, guesscolour(int16));
        ccSetColour(int16);
    }

    if (ifFind(intArg1) == 1) {
        ccSetParamString(Param.param_718, guesscolour(int14));
        ccSetColour(int14);
    }

    if (ifFind(intArg2) == 1) {
        ccSetParamString(Param.param_718, guesscolour(int15));
        ccSetColour(int15);
    }
    ifSetModel(enumOp(type_int, type_model, Enum.eyeglo_digits, varc_targetint_c / 10), intArg10);
    ifSetModel(enumOp(type_int, type_model, Enum.eyeglo_digits, varc_targetint_c % 10), intArg11);
    let int17: number = varc_glo3_col1_c * varc_glo3_int1_c + varc_glo3_col2_c * varc_glo3_int2_c;

    if (varc_targetint_c < int17) {
        ifSetGraphic(Graphic.glo3_right_wrong_2, intArg13);
    } else if (varc_targetint_c > int17) {
        ifSetGraphic(Graphic.glo3_right_wrong_3, intArg13);
    } else {
        ifSetGraphic(Graphic.glo3_right_wrong_0, intArg13);
        soundVorbisVolume(3559, 1, 0, 255);
    }

    if (int16 == colour(0x00FFFF)) {
        ifSetGraphic(Graphic.glo3_right_wrong_0, intArg12);
        soundVorbisVolume(3559, 1, 10, 255);
    } else {
        ifSetGraphic(Graphic.glo3_right_wrong_1, intArg12);
    }
    cs2_2472(intArg3, intArg4, intArg5, intArg6, intArg7, intArg9, varp_eyeglo_operate1_a, varp_eyeglo_operate3_c, Enum.enum_1108);
}
