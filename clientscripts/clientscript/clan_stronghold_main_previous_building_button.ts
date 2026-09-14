/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_stronghold_main_previous_building_button]

function clan_stronghold_main_previous_building_button(): void {
    let int0: number = varbit_clan_stronghold_main_selected_building_varp;
    let int1: number = int0;
    let int2: number = 1;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 100;

    if (clanProfileFind() == 1) {
        int3 = pushVarClanBit<2580>();
        int4 = 0;
        while (int4 == 0 && int6 > 0) {
            int6 = int6 - 1;
            switch (int0) {
                case 17:
                    int1 = 6;
                    break;
                case 18:
                    int1 = 17;
                    int4 = 1;
                    break;
                case 19:
                    int1 = 18;
                    int4 = 1;
                    break;
                case 1:
                    int1 = 19;
                    int4 = 1;
                    break;
                case 2:
                    int1 = 1;
                    int4 = 1;
                    break;
                case 3:
                    int1 = 2;
                    break;
                case 4:
                    int1 = 3;
                    break;
                case 7:
                    int1 = 4;
                    break;
                case 5:
                    int1 = 7;
                    break;
                case 6:
                    int1 = 5;
                    break;
            }
            if (int4 == 0 && cs2_4979(int1) <= pushVarClanBit<2580>()) {
                int4 = 1;
            }
            int0 = int1;
        }
        if (int6 <= 0) {
            return;
        }
        if (int4 == 1) {
            varbit_clan_stronghold_main_selected_building_varp = int1;
            cs2_4988(varbit_clan_stronghold_main_selected_building_varp);
        }
    }
}
