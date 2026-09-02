/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3489

function cs2_3489(): void {
    let int0: number = enumOp(type_int, type_enum, Enum.enum_3088, varc_rand_player_tab);
    let int1: number = 0;

    if (varc_rand_display_stage < 17) {
        switch (varc_rand_player_tab) {
            case 1:
                if (varbit_rand_tank_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                if (varbit_rand_tactician_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                if (varbit_rand_berserker_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
            case 2:
                if (varbit_rand_sniper_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                if (varbit_rand_keeneye_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                if (varbit_rand_savage_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
            case 3:
                if (varbit_rand_burner_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                if (varbit_rand_blaster_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                if (varbit_rand_burster_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
            case 4:
                if (varbit_rand_medic_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                if (varbit_rand_gatherer_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                if (varbit_rand_producer_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
        }
        ifSetPosition(ifGetX(Component.interface_993.component_993_112), ifGetY(Component.interface_993.component_993_112) + 4, 0, 0, Component.interface_993.component_993_112);
        ifSetPosition(ifGetX(Component.interface_993.component_993_27), ifGetY(Component.interface_993.component_993_27) + 4, 0, 0, Component.interface_993.component_993_27);
        ifSetPosition(ifGetX(Component.interface_993.component_993_26), ifGetY(Component.interface_993.component_993_26) + 4, 0, 0, Component.interface_993.component_993_26);
        varc_rand_display_stage = 1 + varc_rand_display_stage;
    } else if (varc_rand_display_stage < 33) {
        ifSetPosition(ifGetX(Component.interface_993.component_993_27), ifGetY(Component.interface_993.component_993_27) + 4, 0, 0, Component.interface_993.component_993_27);
        ifSetPosition(ifGetX(Component.interface_993.component_993_26), ifGetY(Component.interface_993.component_993_26) + 4, 0, 0, Component.interface_993.component_993_26);
        varc_rand_display_stage = 1 + varc_rand_display_stage;
    } else if (varc_rand_display_stage < 49) {
        ifSetPosition(ifGetX(Component.interface_993.component_993_26), ifGetY(Component.interface_993.component_993_26) + 4, 0, 0, Component.interface_993.component_993_26);
        varc_rand_display_stage = 1 + varc_rand_display_stage;
    } else if (varc_rand_display_stage < 69) {
        int1 = scale(varc_rand_display_stage - 48, 20, 100);
        switch (varc_rand_player_tab) {
            case 1:
                ifSetSize(scale(scale(16384, 100, varbit_rand_tank_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_160);
                if (varbit_rand_tank_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_tactician_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_67);
                if (varbit_rand_tactician_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_berserker_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_109);
                if (varbit_rand_berserker_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
            case 2:
                ifSetSize(scale(scale(16384, 100, varbit_rand_sniper_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_160);
                if (varbit_rand_sniper_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_keeneye_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_67);
                if (varbit_rand_keeneye_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_savage_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_109);
                if (varbit_rand_savage_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
            case 3:
                ifSetSize(scale(scale(16384, 100, varbit_rand_burner_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_160);
                if (varbit_rand_burner_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_blaster_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_67);
                if (varbit_rand_blaster_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_burster_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_109);
                if (varbit_rand_burster_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
            case 4:
                ifSetSize(scale(scale(16384, 100, varbit_rand_medic_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_160);
                if (varbit_rand_medic_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_139);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_139);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_gatherer_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_67);
                if (varbit_rand_gatherer_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_46);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_46);
                }
                ifSetSize(scale(scale(16384, 100, varbit_rand_producer_ring * 10), 100, int1), 16384, 2, 2, Component.interface_993.component_993_109);
                if (varbit_rand_producer_ring == 10) {
                    ifSetHide(true, Component.interface_993.component_993_88);
                } else {
                    ifSetHide(false, Component.interface_993.component_993_88);
                }
                break;
        }
        varc_rand_display_stage = 1 + varc_rand_display_stage;
    }
}
