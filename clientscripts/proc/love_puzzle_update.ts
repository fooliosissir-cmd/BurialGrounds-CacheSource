/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,love_puzzle_update]

function proc_love_puzzle_update(): void {
    let int0: number = 3 - love_puzzle_used_1(1);

    if (int0 > 0) {
        ifSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_1, 1), int0, Component.interface_991.component_991_7);
        ifSetOnOpt(hook(love_puzzle_sourceclick, "i", [event_opindex]), Component.interface_991.component_991_7);
        ifSetOp(1, "Select", Component.interface_991.component_991_7);
    } else {
        ifSetObjectNonum(-1, 0, Component.interface_991.component_991_7);
        ifSetOnOpt(noHook(""), Component.interface_991.component_991_7);
        ifClearops(Component.interface_991.component_991_7);
    }
    int0 = 2 - love_puzzle_used_1(2);

    if (int0 > 0) {
        ifSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_1, 2), int0, Component.interface_991.component_991_8);
        ifSetOnOpt(hook(love_puzzle_sourceclick, "i", [event_opindex]), Component.interface_991.component_991_8);
        ifSetOp(1, "Select", Component.interface_991.component_991_8);
    } else {
        ifSetObjectNonum(-1, 0, Component.interface_991.component_991_8);
        ifSetOnOpt(noHook(""), Component.interface_991.component_991_8);
        ifClearops(Component.interface_991.component_991_8);
    }
    int0 = 2 - love_puzzle_used_1(3);

    if (int0 > 0) {
        ifSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_1, 3), int0, Component.interface_991.component_991_9);
        ifSetOnOpt(hook(love_puzzle_sourceclick, "i", [event_opindex]), Component.interface_991.component_991_9);
        ifSetOp(1, "Select", Component.interface_991.component_991_9);
    } else {
        ifSetObjectNonum(-1, 0, Component.interface_991.component_991_9);
        ifSetOnOpt(noHook(""), Component.interface_991.component_991_9);
        ifClearops(Component.interface_991.component_991_9);
    }
    int0 = 2 - love_puzzle_used_2(1);

    if (int0 > 0) {
        ifSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_2, 1), int0, Component.interface_991.component_991_17);
        ifSetOnOpt(hook(love_puzzle_sourceclick, "i", [event_opindex]), Component.interface_991.component_991_17);
        ifSetOp(1, "Select", Component.interface_991.component_991_17);
    } else {
        ifSetObjectNonum(-1, 0, Component.interface_991.component_991_17);
        ifSetOnOpt(noHook(""), Component.interface_991.component_991_17);
        ifClearops(Component.interface_991.component_991_17);
    }
    int0 = 4 - love_puzzle_used_2(2);

    if (int0 > 0) {
        ifSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_2, 2), int0, Component.interface_991.component_991_18);
        ifSetOnOpt(hook(love_puzzle_sourceclick, "i", [event_opindex]), Component.interface_991.component_991_18);
        ifSetOp(1, "Select", Component.interface_991.component_991_18);
    } else {
        ifSetObjectNonum(-1, 0, Component.interface_991.component_991_18);
        ifSetOnOpt(noHook(""), Component.interface_991.component_991_18);
        ifClearops(Component.interface_991.component_991_18);
    }
    int0 = 2 - love_puzzle_used_2(3);

    if (int0 > 0) {
        ifSetObjectAlwaysNum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_2, 3), int0, Component.interface_991.component_991_19);
        ifSetOnOpt(hook(love_puzzle_sourceclick, "i", [event_opindex]), Component.interface_991.component_991_19);
        ifSetOp(1, "Select", Component.interface_991.component_991_19);
    } else {
        ifSetObjectNonum(-1, 0, Component.interface_991.component_991_19);
        ifSetOnOpt(noHook(""), Component.interface_991.component_991_19);
        ifClearops(Component.interface_991.component_991_19);
    }
    ccDeleteAll(Component.interface_991.component_991_13);
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    while (int1 < 28) {
        ccCreate(Component.interface_991.component_991_13, 5, int1);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((6 - int2) * 16 + int3 * 32, int2 * 32, 0, 2);
        int0 = love_puzzle_read_1(int1);
        ccSetObjectNonum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_1, int0), 1);
        if (int0 > 0) {
            ccSetOp(1, "Remove tile");
            ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 150, 0, 10]));
            ccSetdragdeadzone(5);
            ccSetdragdeadtime(5);
            ccSetdragrenderbehaviour(2);
        }
        if (int3 >= int2) {
            int3 = 0;
            int2 = int2 + 1;
        } else {
            int3 = int3 + 1;
        }
        int1 = int1 + 1;
    }
    ccDeleteAll(Component.interface_991.component_991_23);
    int1 = 0;
    int2 = 6;
    int3 = 0;

    while (int1 < 28) {
        ccCreate(Component.interface_991.component_991_23, 5, int1);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((6 - int2) * 16 + int3 * 32, int2 * 32, 0, 0);
        int0 = love_puzzle_read_2(int1);
        ccSetObjectNonum(enumOp(type_int, type_obj, Enum.love_puzzle_pieces_2, int0), 1);
        if (int0 > 0) {
            ccSetOp(1, "Remove tile");
            ccSetOnOpt(hook(cs2_1620, "Iiiii", [event_com, event_comsubid, 125, 0, 8]));
            ccSetdragdeadzone(5);
            ccSetdragdeadtime(5);
            ccSetdragrenderbehaviour(2);
        }
        if (int3 >= int2) {
            int3 = 0;
            int2 = int2 - 1;
        } else {
            int3 = int3 + 1;
        }
        int1 = int1 + 1;
    }
    love_puzzle_node(Component.interface_991.component_991_13, 0, 7, colour(0xFF981F));
    int1 = 0;

    while (int1 <= 30) {
        if (testBit(varc_1317, int1) == 1) {
            switch (int1) {
                case 0:
                    love_puzzle_node(Component.interface_991.component_991_13, -1, 5, colour(0xFF981F));
                    break;
                case 1:
                    love_puzzle_node(Component.interface_991.component_991_13, -2, 3, colour(0xFF981F));
                    break;
                case 2:
                    love_puzzle_node(Component.interface_991.component_991_13, 0, 3, colour(0xFF981F));
                    break;
                case 3:
                    love_puzzle_node(Component.interface_991.component_991_13, 2, 3, colour(0xFF981F));
                    break;
                case 4:
                    love_puzzle_node(Component.interface_991.component_991_13, -3, 1, colour(0xFF981F));
                    break;
                case 5:
                    love_puzzle_node(Component.interface_991.component_991_13, 1, 1, colour(0xFF981F));
                    break;
                case 6:
                    love_puzzle_node(Component.interface_991.component_991_13, 3, 1, colour(0xFF981F));
                    break;
                case 7:
                    love_puzzle_node(Component.interface_991.component_991_13, -4, -1, colour(0xFF981F));
                    break;
                case 8:
                    love_puzzle_node(Component.interface_991.component_991_13, -2, -1, colour(0xFF981F));
                    break;
                case 9:
                    love_puzzle_node(Component.interface_991.component_991_13, 2, -1, colour(0xFF981F));
                    break;
                case 10:
                    love_puzzle_node(Component.interface_991.component_991_13, 4, -1, colour(0xFF981F));
                    break;
                case 11:
                    love_puzzle_node(Component.interface_991.component_991_13, -5, -3, colour(0xFF981F));
                    break;
                case 12:
                    love_puzzle_node(Component.interface_991.component_991_13, -3, -3, colour(0xFF981F));
                    break;
                case 13:
                    love_puzzle_node(Component.interface_991.component_991_13, 1, -3, colour(0xFF981F));
                    break;
                case 14:
                    love_puzzle_node(Component.interface_991.component_991_13, 3, -3, colour(0xFF981F));
                    break;
                case 15:
                    love_puzzle_node(Component.interface_991.component_991_13, 5, -3, colour(0xFF981F));
                    break;
                case 16:
                    love_puzzle_node(Component.interface_991.component_991_13, -6, -5, colour(0xFF981F));
                    break;
                case 17:
                    love_puzzle_node(Component.interface_991.component_991_13, -4, -5, colour(0xFF981F));
                    break;
                case 18:
                    love_puzzle_node(Component.interface_991.component_991_13, -2, -5, colour(0xFF981F));
                    break;
                case 19:
                    love_puzzle_node(Component.interface_991.component_991_13, 0, -5, colour(0xFF981F));
                    break;
                case 20:
                    love_puzzle_node(Component.interface_991.component_991_13, 2, -5, colour(0xFF981F));
                    break;
                case 21:
                    love_puzzle_node(Component.interface_991.component_991_13, 4, -5, colour(0xFF981F));
                    break;
                case 22:
                    love_puzzle_node(Component.interface_991.component_991_13, 6, -5, colour(0xFF981F));
                    break;
                case 23:
                    love_puzzle_node(Component.interface_991.component_991_13, -7, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, -7, 7, colour(0xFF981F));
                    break;
                case 24:
                    love_puzzle_node(Component.interface_991.component_991_13, -5, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, -5, 7, colour(0xFF981F));
                    break;
                case 25:
                    love_puzzle_node(Component.interface_991.component_991_13, -3, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, -3, 7, colour(0xFF981F));
                    break;
                case 26:
                    love_puzzle_node(Component.interface_991.component_991_13, -1, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, -1, 7, colour(0xFF981F));
                    break;
                case 27:
                    love_puzzle_node(Component.interface_991.component_991_13, 1, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, 1, 7, colour(0xFF981F));
                    break;
                case 28:
                    love_puzzle_node(Component.interface_991.component_991_13, 3, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, 3, 7, colour(0xFF981F));
                    break;
                case 29:
                    love_puzzle_node(Component.interface_991.component_991_13, 5, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, 5, 7, colour(0xFF981F));
                    break;
                case 30:
                    love_puzzle_node(Component.interface_991.component_991_13, 7, -7, colour(0xFF981F));
                    love_puzzle_node(Component.interface_991.component_991_23, 7, 7, colour(0xFF981F));
                    break;
            }
        }
        int1 = int1 + 1;
    }
    int1 = 0;

    while (int1 <= 30) {
        if (testBit(varc_1318, int1) == 1) {
            switch (int1) {
                case 0:
                    love_puzzle_node(Component.interface_991.component_991_23, -6, 5, colour(0xFF981F));
                    break;
                case 1:
                    love_puzzle_node(Component.interface_991.component_991_23, -4, 5, colour(0xFF981F));
                    break;
                case 2:
                    love_puzzle_node(Component.interface_991.component_991_23, -2, 5, colour(0xFF981F));
                    break;
                case 3:
                    love_puzzle_node(Component.interface_991.component_991_23, 0, 5, colour(0xFF981F));
                    break;
                case 4:
                    love_puzzle_node(Component.interface_991.component_991_23, 2, 5, colour(0xFF981F));
                    break;
                case 5:
                    love_puzzle_node(Component.interface_991.component_991_23, 4, 5, colour(0xFF981F));
                    break;
                case 6:
                    love_puzzle_node(Component.interface_991.component_991_23, 6, 5, colour(0xFF981F));
                    break;
                case 7:
                    love_puzzle_node(Component.interface_991.component_991_23, -5, 3, colour(0xFF981F));
                    break;
                case 8:
                    love_puzzle_node(Component.interface_991.component_991_23, -3, 3, colour(0xFF981F));
                    break;
                case 9:
                    love_puzzle_node(Component.interface_991.component_991_23, 3, 3, colour(0xFF981F));
                    break;
                case 10:
                    love_puzzle_node(Component.interface_991.component_991_23, 5, 3, colour(0xFF981F));
                    break;
                case 11:
                    love_puzzle_node(Component.interface_991.component_991_23, -4, 1, colour(0xFF981F));
                    break;
                case 12:
                    love_puzzle_node(Component.interface_991.component_991_23, 4, 1, colour(0xFF981F));
                    break;
                case 13:
                    love_puzzle_node(Component.interface_991.component_991_23, -3, -1, colour(0xFF981F));
                    break;
                case 14:
                    love_puzzle_node(Component.interface_991.component_991_23, -1, -1, colour(0xFF981F));
                    break;
                case 15:
                    love_puzzle_node(Component.interface_991.component_991_23, 1, -1, colour(0xFF981F));
                    break;
                case 16:
                    love_puzzle_node(Component.interface_991.component_991_23, 3, -1, colour(0xFF981F));
                    break;
                case 17:
                    love_puzzle_node(Component.interface_991.component_991_23, 0, -3, colour(0xFF981F));
                    break;
                case 18:
                    love_puzzle_node(Component.interface_991.component_991_23, 2, -3, colour(0xFF981F));
                    break;
                case 19:
                    love_puzzle_node(Component.interface_991.component_991_23, -1, -5, colour(0xFF981F));
                    break;
                case 20:
                    love_puzzle_node(Component.interface_991.component_991_23, 0, -7, colour(0xFF981F));
                    break;
                case 21:
                    love_puzzle_node(Component.interface_991.component_991_13, 1, 5, colour(0x000000));
                    break;
                case 22:
                    love_puzzle_node(Component.interface_991.component_991_13, -1, 1, colour(0x000000));
                    break;
                case 23:
                    love_puzzle_node(Component.interface_991.component_991_13, 0, -1, colour(0x000000));
                    break;
                case 24:
                    love_puzzle_node(Component.interface_991.component_991_13, -1, -3, colour(0x000000));
                    break;
                case 25:
                    love_puzzle_node(Component.interface_991.component_991_23, 1, 3, colour(0x000000));
                    break;
                case 26:
                    love_puzzle_node(Component.interface_991.component_991_23, -2, 1, colour(0x000000));
                    break;
                case 27:
                    love_puzzle_node(Component.interface_991.component_991_23, 0, 1, colour(0x000000));
                    break;
                case 28:
                    love_puzzle_node(Component.interface_991.component_991_23, 2, 1, colour(0x000000));
                    break;
                case 29:
                    love_puzzle_node(Component.interface_991.component_991_23, -2, -3, colour(0x000000));
                    break;
                case 30:
                    love_puzzle_node(Component.interface_991.component_991_23, 1, -5, colour(0x000000));
                    break;
                default:
                    ccSetHide(true);
                    break;
            }
        }
        int1 = int1 + 1;
    }
}
