/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,farming_tools_main]

function farming_tools_main(intArg0: component, intArg1: component, intArg2: obj, intArg3: boolean): void {
    let int4: number = enumOp(type_obj, type_int, Enum.enum_5331, intArg2);
    let int5: number = 0;

    switch (intArg2) {
        case Obj.rake:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_rake;
            break;
        case Obj.dibber:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_dibber;
            break;
        case Obj.spade:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_spade;
            break;
        case Obj.gardening_trowel:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_trowel;
            break;
        case Obj.secateurs:
        case Obj.fairy_enchanted_secateurs:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_secateurs;
            if (int5 > 0 && varbit_farming_tools_fairysecateurs == 1) {
                intArg2 = Obj.fairy_enchanted_secateurs;
            }
            break;
        case Obj.watering_can_dummy:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            intArg2 = enumOp(type_int, type_obj, Enum.farming_tools_wateringcan, varbit_farming_tools_wateringcan);
            if (intArg2 != Obj.watering_can_dummy) {
                int5 = 1;
            }
            break;
        case Obj.bucket_empty:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615, 1357]), intArg0);
            }
            int5 = varbit_farming_tools_extrabuckets * 32 + varbit_farming_tools_buckets;
            break;
        case Obj.bucket_compost:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_compost;
            break;
        case Obj.bucket_supercompost:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [615]), intArg0);
            }
            int5 = varbit_farming_tools_supercompost;
            break;
        case Obj.scarecrow_complete:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1357]), intArg0);
            }
            int5 = varbit_farming_tools_scarecrow;
            break;
        case Obj.plant_cure:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1357]), intArg0);
            }
            int5 = varbit_farming_tools_plantcure;
            break;
        case Obj._3doseadvanced_hunter_potion:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935]), intArg0);
            }
            int5 = varbit_8399;
            break;
        case Obj._3dosefarming_potion:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935]), intArg0);
            }
            int5 = varbit_8400;
            break;
        case Obj._3dosescentless_potion:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935]), intArg0);
            }
            int5 = varbit_8401;
            break;
        case Obj._3dosesaradomin_potion:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935]), intArg0);
            }
            int5 = varbit_8403;
            break;
        case Obj._3dosezamorak_potion:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935]), intArg0);
            }
            int5 = varbit_8404;
            break;
        case Obj._3doseguthix_potion:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935]), intArg0);
            }
            int5 = varbit_8402;
            break;
        case Obj.ecosystem_corrupt_vine:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1746]), intArg0);
            }
            int5 = varbit_ecosystem_corruptvine_stored;
            break;
        case Obj.ecosystem_marble_vine:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1746]), intArg0);
            }
            int5 = varbit_ecosystem_marblevine_stored;
            break;
        case Obj.ecosystem_shadow_vine:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1746]), intArg0);
            }
            int5 = varbit_ecosystem_shadowvine_stored;
            break;
        case Obj.ecosystem_saradomin_vine:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1746]), intArg0);
            }
            int5 = varbit_ecosystem_saradominvine_stored;
            break;
        case Obj.ecosystem_zamorak_vine:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1746]), intArg0);
            }
            int5 = varbit_ecosystem_zamorakvine_stored;
            break;
        case Obj.ecosystem_guthix_vine:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1935, 1746]), intArg0);
            }
            int5 = varbit_10212 * 8 + varbit_ecosystem_guthixvine_stored_a;
            break;
        case Obj.fungal_flake:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1022]), intArg0);
            }
            int5 = varbit_polypore_storage_fungal;
            break;
        case Obj.grifolic_flake:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1059]), intArg0);
            }
            int5 = varbit_polypore_storage_grifolic;
            break;
        case Obj.ganodermic_flake:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1059]), intArg0);
            }
            int5 = varbit_polypore_storage_ganodermic;
            break;
        case Obj.polypore_spore:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1022]), intArg0);
            }
            int5 = varbit_polypore_storage_spores;
            break;
        case Obj.polypore_neem_oil:
            if (intArg3 == true) {
                ifSetOnVarTransmit(hook(farming_tools_main, "IIo1Y", [event_com, intArg1, intArg2, false], [1022, 1059]), intArg0);
            }
            int5 = varbit_polypore_storage_jug_excess * 32 + varbit_polypore_storage_jug;
            break;
        default:
            return;
    }
    let int6: graphic = Graphic.graphic_6014;

    if (int4 > 1) {
        ifSetObjectAlwaysNum(intArg2, int5, intArg0);
        if (int5 >= int4) {
            int6 = Graphic.graphic_6017;
        }
    } else {
        ifSetObjectNonum(intArg2, int5, intArg0);
    }
    ifSetOpBase("<col=ff9040>" + ocName(intArg2), intArg0);
    let int7: graphic = Graphic.graphic_6015;

    if (int5 > 0) {
        ifSetTrans(0, intArg0);
        ifSetGraphic(int6, intArg1);
        ifSetOnMouseOver(hook(graphic_swapper, "Id", [event_com, int7]), intArg1);
        ifSetOnMouseLeave(hook(graphic_swapper, "Id", [event_com, int6]), intArg1);
    } else {
        ifSetTrans(175, intArg0);
        ifSetGraphic(Graphic.graphic_6016, intArg1);
        ifClearscripthooks(intArg1);
    }
}
