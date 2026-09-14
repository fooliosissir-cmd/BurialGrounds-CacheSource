/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5977

function cs2_5977(): void {
    let int0: number = 1;
    let int1: number = 0;
    let int2: graphic = -1;
    let int3: component = -1;

    switch (varbit_clan_stronghold_main_map_mode) {
        case 0:
            int3 = Component.interface_1259.component_1259_2;
            break;
        case 1:
        case 3:
        case 4:
            int3 = Component.interface_1261.component_1261_3;
            break;
        case 2:
        case 5:
            int3 = Component.interface_1258.component_1258_2;
            break;
        default:
            return;
    }

    if (clanProfileFind() == 1) {
        if (varc_clan_stronghold_main_map_next_week < 0) {
            varc_clan_stronghold_main_map_next_week = 0;
        }
        if (varc_clan_stronghold_main_map_next_week == 0) {
            int1 = pushVarClanBit<2598>();
        } else {
            int1 = pushVarClanBit<2074>();
        }
        int0 = pushVarClanBit<2580>();
        int2 = clan_stronghold_main_get_map_graphic(1, int1, int0);
        if (int2 == -1) {
            return;
        }
        ifSetGraphic(int2, int3);
    }
}
