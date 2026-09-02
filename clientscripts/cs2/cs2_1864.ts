/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1864

function cs2_1864(intArg0: number, intArg1: obj, intArg2: number, intArg3: number): void {
    if (intArg0 != 1) {
        return;
    }

    switch (intArg2) {
        case 12:
            switch (intArg3) {
                case 0:
                    mes("Rick: " + tostring(enumOp(type_int, type_int, Enum.poh_servant_pay, 1)) + " coins.");
                    break;
                case 1:
                    mes("Maid: " + tostring(enumOp(type_int, type_int, Enum.poh_servant_pay, 3)) + " coins.");
                    break;
                case 2:
                    mes("Cook: " + tostring(enumOp(type_int, type_int, Enum.poh_servant_pay, 5)) + " coins.");
                    break;
                case 3:
                    mes("Butler: " + tostring(enumOp(type_int, type_int, Enum.poh_servant_pay, 6)) + " coins.");
                    break;
                case 4:
                    mes("Demon Butler: " + tostring(enumOp(type_int, type_int, Enum.poh_servant_pay, 8)) + " coins.");
                    break;
            }
            return;
        case 0:
            switch (intArg1) {
                case Obj.poh_garden_centrepiece_3:
                    intArg1 = Obj.poh_dummy_garden;
                    break;
                case Obj.poh_armchair_7:
                    intArg1 = Obj.poh_dummy_parlour;
                    break;
                case Obj.poh_stove_7:
                    intArg1 = Obj.poh_dummy_kitchen;
                    break;
                case Obj.poh_dining_table_7:
                    intArg1 = Obj.poh_dummy_dining_room;
                    break;
                case Obj.poh_workbench_5:
                    intArg1 = Obj.poh_dummy_workshop;
                    break;
                case Obj.poh_bed_7:
                    intArg1 = Obj.poh_dummy_bedroom;
                    break;
                case Obj.poh_stairs_marble:
                    intArg1 = Obj.poh_dummy_hall1;
                    break;
                case Obj.poh_ranging_game_2:
                    intArg1 = Obj.poh_dummy_games_room;
                    break;
                case Obj.poh_combat_ring_5:
                    intArg1 = Obj.poh_dummy_combat_room;
                    break;
                case Obj.poh_spiralstairs_marble:
                    intArg1 = Obj.poh_dummy_hall2;
                    break;
                case Obj.poh_lectern_7:
                    intArg1 = Obj.poh_dummy_study;
                    break;
                case Obj.poh_cos_room_cape_rack_magic_stone:
                    intArg1 = Obj.poh_dummy_costume_room;
                    break;
                case Obj.poh_altar_marbleplusgilt:
                    intArg1 = Obj.poh_dummy_chapel;
                    break;
                case Obj.poh_teleport_centrepiece_3:
                    intArg1 = Obj.poh_dummy_portalroom;
                    break;
                case Obj.poh_formal_garden_centrepiece_5:
                    intArg1 = Obj.poh_dummy_formal_garden;
                    break;
                case Obj.poh_throne_7:
                    intArg1 = Obj.poh_dummy_throneroom;
                    break;
                case Obj.poh_oubliette_spikes:
                    intArg1 = Obj.poh_dummy_oubliette;
                    break;
                case Obj.poh_dungeon_door_steel:
                    intArg1 = Obj.poh_dummy_dungeon_corridor;
                    break;
                case Obj.poh_dungeon_door_oak:
                    intArg1 = Obj.poh_dummy_dungeon_pit;
                    break;
                case Obj.poh_treasure_mahogany:
                    intArg1 = Obj.poh_dummy_dungeon_treasure;
                    break;
            }
            mes(ocName(intArg1) + ": " + tostringLocalised(ocCost(intArg1), 1) + " coins.");
            return;
        case 14:
        case 15:
            return;
    }
    defineArray(0, type_obj, 6);
    defineArray(1, type_int, 6);
    let int4: number = 0;

    if (ocParam(intArg1, Param.poh_cost1_obj) != -1) {
        array0[0] = ocParam(intArg1, Param.poh_cost1_obj);
        array1[0] = ocParam(intArg1, Param.poh_cost1_count);
        int4 = int4 + 1;
    }

    if (ocParam(intArg1, Param.poh_cost2_obj) != -1) {
        array0[1] = ocParam(intArg1, Param.poh_cost2_obj);
        array1[1] = ocParam(intArg1, Param.poh_cost2_count);
        int4 = int4 + 1;
    }

    if (ocParam(intArg1, Param.poh_cost3_obj) != -1) {
        array0[2] = ocParam(intArg1, Param.poh_cost3_obj);
        array1[2] = ocParam(intArg1, Param.poh_cost3_count);
        int4 = int4 + 1;
    }

    if (ocParam(intArg1, Param.poh_cost4_obj) != -1) {
        array0[3] = ocParam(intArg1, Param.poh_cost4_obj);
        array1[3] = ocParam(intArg1, Param.poh_cost4_count);
        int4 = int4 + 1;
    }

    if (ocParam(intArg1, Param.poh_cost5_obj) != -1) {
        array0[4] = ocParam(intArg1, Param.poh_cost5_obj);
        array1[4] = ocParam(intArg1, Param.poh_cost5_count);
        int4 = int4 + 1;
    }

    if (ocParam(intArg1, Param.poh_cost6_obj) != -1) {
        array0[5] = ocParam(intArg1, Param.poh_cost6_obj);
        array1[5] = ocParam(intArg1, Param.poh_cost6_count);
        int4 = int4 + 1;
    }

    switch (int4) {
        case 1:
            mes(ocName(intArg1) + ":");
            mes(tostringLocalised(array1[0], 1) + " x " + ocName(array0[0]));
            break;
        case 2:
            mes(ocName(intArg1) + ":");
            mes(tostringLocalised(array1[0], 1) + " x " + ocName(array0[0]));
            mes(tostringLocalised(array1[1], 1) + " x " + ocName(array0[1]));
            break;
        case 3:
            mes(ocName(intArg1) + ":");
            mes(tostringLocalised(array1[0], 1) + " x " + ocName(array0[0]));
            mes(tostringLocalised(array1[1], 1) + " x " + ocName(array0[1]));
            mes(tostringLocalised(array1[2], 1) + " x " + ocName(array0[2]));
            break;
        case 4:
            mes(ocName(intArg1) + ":");
            mes(tostringLocalised(array1[0], 1) + " x " + ocName(array0[0]));
            mes(tostringLocalised(array1[1], 1) + " x " + ocName(array0[1]));
            mes(tostringLocalised(array1[2], 1) + " x " + ocName(array0[2]));
            mes(tostringLocalised(array1[3], 1) + " x " + ocName(array0[3]));
            break;
        case 5:
            mes(ocName(intArg1) + ":");
            mes(tostringLocalised(array1[0], 1) + " x " + ocName(array0[0]));
            mes(tostringLocalised(array1[1], 1) + " x " + ocName(array0[1]));
            mes(tostringLocalised(array1[2], 1) + " x " + ocName(array0[2]));
            mes(tostringLocalised(array1[3], 1) + " x " + ocName(array0[3]));
            mes(tostringLocalised(array1[4], 1) + " x " + ocName(array0[4]));
            break;
        case 6:
            mes(ocName(intArg1) + ":");
            mes(tostringLocalised(array1[0], 1) + " x " + ocName(array0[0]));
            mes(tostringLocalised(array1[1], 1) + " x " + ocName(array0[1]));
            mes(tostringLocalised(array1[2], 1) + " x " + ocName(array0[2]));
            mes(tostringLocalised(array1[3], 1) + " x " + ocName(array0[3]));
            mes(tostringLocalised(array1[4], 1) + " x " + ocName(array0[4]));
            mes(tostringLocalised(array1[5], 1) + " x " + ocName(array0[5]));
            break;
        default:
            mes(ocName(intArg1));
            break;
    }
}
