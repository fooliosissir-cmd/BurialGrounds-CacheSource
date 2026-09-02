/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3494

function cs2_3494(intArg0: number): void {
    soundSynth(Sound.sound_9499, 1, 0);
    ifSetPosition(ifGetX(Component.interface_993.component_993_112), 52, 0, 0, Component.interface_993.component_993_112);
    ifSetPosition(ifGetX(Component.interface_993.component_993_27), 52, 0, 0, Component.interface_993.component_993_27);
    ifSetPosition(ifGetX(Component.interface_993.component_993_26), 52, 0, 0, Component.interface_993.component_993_26);
    ifSetSize(0, 16384, 2, 2, Component.interface_993.component_993_160);
    ifSetSize(0, 16384, 2, 2, Component.interface_993.component_993_67);
    ifSetSize(0, 16384, 2, 2, Component.interface_993.component_993_109);
    ifSetHide(true, Component.interface_993.component_993_254);
    ifSetHide(true, Component.interface_993.component_993_239);
    ifSetHide(true, Component.interface_993.component_993_224);
    ifSetHide(true, Component.interface_993.component_993_209);
    ifSetTrans(255, Component.interface_993.component_993_257);
    ifSetTrans(255, Component.interface_993.component_993_242);
    ifSetTrans(255, Component.interface_993.component_993_227);
    ifSetTrans(255, Component.interface_993.component_993_212);
    ifSetHide(true, Component.interface_993.component_993_194);
    ifSetHide(true, Component.interface_993.component_993_195);
    ifSetHide(true, Component.interface_993.component_993_196);
    ifSetHide(true, Component.interface_993.component_993_197);
    ifSetHide(true, Component.interface_993.component_993_261);

    switch (varc_rand_player_tab) {
        case 1:
            if (varbit_rand_kinship_ring_inuse == 1) {
                ifSetText("In use", Component.interface_993.component_993_139);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_139);
            }
            if (varbit_rand_kinship_ring_inuse == 2) {
                ifSetText("In use", Component.interface_993.component_993_46);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_46);
            }
            if (varbit_rand_kinship_ring_inuse == 3) {
                ifSetText("In use", Component.interface_993.component_993_88);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_88);
            }
            break;
        case 2:
            if (varbit_rand_kinship_ring_inuse == 4) {
                ifSetText("In use", Component.interface_993.component_993_139);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_139);
            }
            if (varbit_rand_kinship_ring_inuse == 5) {
                ifSetText("In use", Component.interface_993.component_993_46);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_46);
            }
            if (varbit_rand_kinship_ring_inuse == 6) {
                ifSetText("In use", Component.interface_993.component_993_88);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_88);
            }
            break;
        case 3:
            if (varbit_rand_kinship_ring_inuse == 7) {
                ifSetText("In use", Component.interface_993.component_993_139);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_139);
            }
            if (varbit_rand_kinship_ring_inuse == 8) {
                ifSetText("In use", Component.interface_993.component_993_46);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_46);
            }
            if (varbit_rand_kinship_ring_inuse == 9) {
                ifSetText("In use", Component.interface_993.component_993_88);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_88);
            }
            break;
        case 4:
            if (varbit_rand_kinship_ring_inuse == 10) {
                ifSetText("In use", Component.interface_993.component_993_139);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_139);
            }
            if (varbit_rand_kinship_ring_inuse == 11) {
                ifSetText("In use", Component.interface_993.component_993_46);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_46);
            }
            if (varbit_rand_kinship_ring_inuse == 12) {
                ifSetText("In use", Component.interface_993.component_993_88);
            } else {
                ifSetText("Switch-to", Component.interface_993.component_993_88);
            }
            break;
    }

    switch (intArg0) {
        case 65077505:
            ifSetHide(false, Component.interface_993.component_993_254);
            ifSetHide(false, Component.interface_993.component_993_194);
            varc_rand_player_tab = 1;
            ifSetColour(colour(0xFF3264), Component.interface_993.component_993_134);
            ifSetColour(colour(0xFF3264), Component.interface_993.component_993_41);
            ifSetColour(colour(0xFF3264), Component.interface_993.component_993_83);
            break;
        case 65077490:
            ifSetHide(false, Component.interface_993.component_993_239);
            ifSetHide(false, Component.interface_993.component_993_195);
            varc_rand_player_tab = 2;
            ifSetColour(colour(0x96FF96), Component.interface_993.component_993_134);
            ifSetColour(colour(0x96FF96), Component.interface_993.component_993_41);
            ifSetColour(colour(0x96FF96), Component.interface_993.component_993_83);
            break;
        case 65077475:
            ifSetHide(false, Component.interface_993.component_993_224);
            ifSetHide(false, Component.interface_993.component_993_196);
            varc_rand_player_tab = 3;
            ifSetColour(colour(0x00C8FF), Component.interface_993.component_993_134);
            ifSetColour(colour(0x00C8FF), Component.interface_993.component_993_41);
            ifSetColour(colour(0x00C8FF), Component.interface_993.component_993_83);
            break;
        case 65077460:
            ifSetHide(false, Component.interface_993.component_993_209);
            ifSetHide(false, Component.interface_993.component_993_197);
            varc_rand_player_tab = 4;
            ifSetColour(colour(0xFFFFFF), Component.interface_993.component_993_134);
            ifSetColour(colour(0xFFFFFF), Component.interface_993.component_993_41);
            ifSetColour(colour(0xFFFFFF), Component.interface_993.component_993_83);
            break;
    }
    let int1: Enum = enumOp(type_int, type_enum, Enum.enum_3088, varc_rand_player_tab);
    ifSetText(structParam(enumOp(type_int, type_struct, int1, 1), Param.rand_ring_spec), Component.interface_993.component_993_132);
    ifSetText(structParam(enumOp(type_int, type_struct, int1, 1), Param.rand_ring_desc), Component.interface_993.component_993_133);
    ifSetText(structParam(enumOp(type_int, type_struct, int1, 2), Param.rand_ring_spec), Component.interface_993.component_993_39);
    ifSetText(structParam(enumOp(type_int, type_struct, int1, 2), Param.rand_ring_desc), Component.interface_993.component_993_40);
    ifSetText(structParam(enumOp(type_int, type_struct, int1, 3), Param.rand_ring_spec), Component.interface_993.component_993_81);
    ifSetText(structParam(enumOp(type_int, type_struct, int1, 3), Param.rand_ring_desc), Component.interface_993.component_993_82);
    varc_rand_display_stage = 0;
}
