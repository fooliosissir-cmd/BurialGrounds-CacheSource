/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2136

function cs2_2136(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = 118 + varbit_macro_certer_ignorebits_1 + varbit_macro_certer_ignorebits_1;
    ccCreate(intArg0, 4, 0);
    ccSetSize(200, 32, 0, 0);
    ccSetPosition(int1, 36, 0, 0);
    ccSetTextFont(Graphic.q8_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0x342E10));
    ccSetTextShadow(false);
    ccSetText(enumOp(type_int, type_string, Enum.macro_certers_text, varbit_macro_certer_a));
    ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x342E10)]));
    ccSetOp(1, "Select");
    ccCreate(intArg0, 4, 1);
    ccSetSize(200, 32, 0, 0);
    ccSetPosition(int1, 70, 0, 0);
    ccSetTextFont(Graphic.q8_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0x342E10));
    ccSetTextShadow(false);
    ccSetText(enumOp(type_int, type_string, Enum.macro_certers_text, varbit_macro_certer_b));
    ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x342E10)]));
    ccSetOp(1, "Select");
    ccCreate(intArg0, 4, 2);
    ccSetSize(200, 32, 0, 0);
    ccSetPosition(int1, 104, 0, 0);
    ccSetTextFont(Graphic.q8_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0x342E10));
    ccSetTextShadow(false);
    ccSetText(enumOp(type_int, type_string, Enum.macro_certers_text, varbit_macro_certer_c));
    ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x342E10)]));
    ccSetOp(1, "Select");
    ccCreate<1>(intArg0, 6, 3);
    ccSetSize<1>(226, 144, 0, 0);
    ccSetPosition<1>(0, 147, 1, 0);

    switch (varbit_macro_certer_whichenum) {
        case 0:
            ccSetModel<1>(enumOp(type_int, type_model, Enum.macro_certers_model_2, varbit_macro_certer_model));
            break;
        case 1:
            ccSetModel<1>(enumOp(type_int, type_model, Enum.macro_certers_model_4, varbit_macro_certer_model));
            break;
        case 2:
            ccSetModel<1>(enumOp(type_int, type_model, Enum.macro_certers_model_6, varbit_macro_certer_model));
            break;
        default:
            ccSetModel<1>(enumOp(type_int, type_model, Enum.macro_certers_model_8, varbit_macro_certer_model));
            break;
    }
    let int2: number = (varbit_macro_certer_ignorebits_1 - 5) * 4;
    let int3: number = (varbit_macro_certer_ignorebits_2 - 4) * 4;
    ccSetModelAngle<1>(int2, int3, pow(varbit_macro_certer_ignorebits_3, 2), pow(varbit_macro_certer_ignorebits_3, 2), pow(varbit_macro_certer_ignorebits_3, 2), 400 + varbit_macro_certer_ignorebits_4 + varbit_macro_certer_ignorebits_4);
    let int4: number = varbit_macro_certer_ignorebits_1;
    let int5: number = varbit_macro_certer_ignorebits_2 / 2;
    let int6: number = 0;

    switch (varbit_macro_certer_ignorebits_4) {
        case 0:
            [int4, int5, int6] = [int5, int6, int4];
            break;
        case 1:
            [int4, int5, int6] = [int6, int4, int5];
            break;
        case 2:
            [int4, int5, int6] = [int4, int6, int5];
            break;
    }
    ccSetOnTimer<1>(hook(cs2_2137, "iiiiiIi", [int4, int5, int6, int2, int3, event_com, event_comsubid]));
    ccCreate(intArg0, 3, 4);
    ccSetSize(226, 144, 0, 0);
    ccSetPosition(0, 147, 1, 0);
    ccSetColour(rgb_to_hex(varbit_macro_certer_ignorebits_3 + 95, varbit_macro_certer_ignorebits_2 + 85, varbit_macro_certer_ignorebits_1 + 29));
    ccSetfill(true);
    ccSetTrans(0);
    ccSetOnTimer(hook(cs2_2138, "Iii", [event_com, event_comsubid, 0]));
    ccCreate(intArg0, 5, 5);
    ccSetSize(19, 16, 0, 0);
    ccSetPosition(349, varbit_macro_certer_ignorebits_2 + 148, 0, 0);
    ccSethflip(true);
    ccSetGraphic(Graphic.world_select_refresh_arrow);
    ccSetOnMouseOver(hook(cc_settrans, "Iii", [event_com, event_comsubid, 125]));
    ccSetOnMouseLeave(hook(cc_settrans, "Iii", [event_com, event_comsubid, 0]));
    ccSetOp(1, "Change spin");
    ccSetOnOp(hook(cs2_2139, "iIiii", [event_opindex, intArg0, ccGetId<1>(), int2, int3]));
}
