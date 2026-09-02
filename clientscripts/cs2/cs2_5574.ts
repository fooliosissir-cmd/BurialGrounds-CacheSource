/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5574

function cs2_5574(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;

    if (varbit_rden2_player_x < 9) {
        int13 = -108;
    } else if (varbit_rden2_player_x < 17) {
        int13 = -54;
    } else if (varbit_rden2_player_x < 29) {
        int13 = 0;
    } else if (varbit_rden2_player_x < 37) {
        int13 = 54;
    } else if (varbit_rden2_player_x < 46) {
        int13 = 108;
    }
    let int14: number = 0;

    if (varbit_rden2_player_y < 9) {
        int14 = 108;
    } else if (varbit_rden2_player_y < 17) {
        int14 = 54;
    } else if (varbit_rden2_player_y < 29) {
        int14 = 0;
    } else if (varbit_rden2_player_y < 37) {
        int14 = -54;
    } else if (varbit_rden2_player_y < 46) {
        int14 = -108;
    }

    if (varbit_rden2_reagent_1 == 1) {
        int0 = 1;
    } else if (varbit_rden2_reagent_1 == 2) {
        int1 = 1;
    }

    if (varbit_rden2_reagent_2 == 1) {
        int0 = 2;
    } else if (varbit_rden2_reagent_2 == 2) {
        int1 = 2;
    }

    if (varbit_rden2_reagent_3 == 1) {
        int0 = 3;
    } else if (varbit_rden2_reagent_3 == 2) {
        int1 = 3;
    }

    if (varbit_rden2_reagent_4 == 1) {
        int0 = 4;
    } else if (varbit_rden2_reagent_4 == 2) {
        int1 = 4;
    }

    if (varbit_rden2_reagent_5 == 1) {
        int0 = 5;
    } else if (varbit_rden2_reagent_5 == 2) {
        int1 = 5;
    }

    if (varbit_rden2_reagent_6 == 1) {
        int0 = 6;
    } else if (varbit_rden2_reagent_6 == 2) {
        int1 = 6;
    }

    if (varbit_rden2_reagent_7 == 1) {
        int0 = 7;
    } else if (varbit_rden2_reagent_7 == 2) {
        int1 = 7;
    }

    if (varbit_rden2_reagent_8 == 1) {
        int0 = 8;
    } else if (varbit_rden2_reagent_8 == 2) {
        int1 = 8;
    }

    if (varbit_rden2_bonus_1 == 1) {
        int2 = 1;
    } else if (varbit_rden2_bonus_1 == 2) {
        int3 = 1;
    }

    if (varbit_rden2_bonus_2 == 1) {
        int2 = 2;
    } else if (varbit_rden2_bonus_2 == 2) {
        int3 = 2;
    }

    if (varbit_rden2_bonus_3 == 1) {
        int2 = 3;
    } else if (varbit_rden2_bonus_3 == 2) {
        int3 = 3;
    }

    if (varbit_rden2_bonus_4 == 1) {
        int2 = 4;
    } else if (varbit_rden2_bonus_4 == 2) {
        int3 = 4;
    }

    if (varbit_rden2_bonus_5 == 1) {
        int2 = 5;
    } else if (varbit_rden2_bonus_5 == 2) {
        int3 = 5;
    }

    if (varbit_rden2_bonus_6 == 1) {
        int2 = 6;
    } else if (varbit_rden2_bonus_6 == 2) {
        int3 = 6;
    }

    if (varbit_rden2_bonus_7 == 1) {
        int2 = 7;
    } else if (varbit_rden2_bonus_7 == 2) {
        int3 = 7;
    }

    if (varbit_rden2_bonus_8 == 1) {
        int2 = 8;
    } else if (varbit_rden2_bonus_8 == 2) {
        int3 = 8;
    }

    switch (int0) {
        case 1:
            int4 = 0;
            int5 = -108;
            break;
        case 2:
            int4 = 0;
            int5 = -54;
            break;
        case 3:
            int4 = -108;
            int5 = 0;
            break;
        case 4:
            int4 = -54;
            int5 = 0;
            break;
        case 5:
            int4 = 54;
            int5 = 0;
            break;
        case 6:
            int4 = 108;
            int5 = 0;
            break;
        case 7:
            int4 = 0;
            int5 = 54;
            break;
        case 8:
            int4 = 0;
            int5 = 108;
            break;
    }

    switch (int1) {
        case 1:
            int6 = 0;
            int7 = -108;
            break;
        case 2:
            int6 = 0;
            int7 = -54;
            break;
        case 3:
            int6 = -108;
            int7 = 0;
            break;
        case 4:
            int6 = -54;
            int7 = 0;
            break;
        case 5:
            int6 = 54;
            int7 = 0;
            break;
        case 6:
            int6 = 108;
            int7 = 0;
            break;
        case 7:
            int6 = 0;
            int7 = 54;
            break;
        case 8:
            int6 = 0;
            int7 = 108;
            break;
    }

    switch (int2) {
        case 1:
            int8 = -54;
            int9 = -108;
            break;
        case 2:
            int8 = 54;
            int9 = -108;
            break;
        case 3:
            int8 = -108;
            int9 = -54;
            break;
        case 4:
            int8 = 108;
            int9 = 54;
            break;
        case 5:
            int8 = -108;
            int9 = 54;
            break;
        case 6:
            int8 = 108;
            int9 = 54;
            break;
        case 7:
            int8 = -54;
            int9 = 108;
            break;
        case 8:
            int8 = 54;
            int9 = 108;
            break;
    }

    switch (int3) {
        case 1:
            int10 = -54;
            int11 = -108;
            break;
        case 2:
            int10 = 54;
            int11 = -108;
            break;
        case 3:
            int10 = -108;
            int11 = -54;
            break;
        case 4:
            int10 = 108;
            int11 = 54;
            break;
        case 5:
            int10 = -108;
            int11 = 54;
            break;
        case 6:
            int10 = 108;
            int11 = 54;
            break;
        case 7:
            int10 = -54;
            int11 = 108;
            break;
        case 8:
            int10 = 54;
            int11 = 108;
            break;
    }
    ifSetHide(true, Component.interface_1182.component_1182_48);
    ifSetHide(true, Component.interface_1182.component_1182_49);
    ifSetPosition(int8, int9, 1, 1, Component.interface_1182.component_1182_48);
    ifSetPosition(int10, int11, 1, 1, Component.interface_1182.component_1182_49);
    ifSetPosition(int4, int5, 1, 1, Component.interface_1182.component_1182_46);
    ifSetPosition(int6, int7, 1, 1, Component.interface_1182.component_1182_45);
    ifSetPosition(int13, int14, 1, 1, Component.interface_1182.component_1182_47);

    if (int2 != 0) {
        ifSetHide(false, Component.interface_1182.component_1182_48);
    }

    if (int3 != 0) {
        ifSetHide(false, Component.interface_1182.component_1182_49);
    }
}
