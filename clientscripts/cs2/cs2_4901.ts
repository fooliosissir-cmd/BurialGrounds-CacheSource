/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4901

function cs2_4901(): void {
    let int0: graphic = -1;
    let int1: graphic = -1;
    let int2: graphic = -1;
    let int3: graphic = -1;
    let int4: number = 1;

    if (clanProfileFind() == 1) {
        int4 = loadClanVarbit<2580>();
        int0 = clan_stronghold_main_get_map_graphic(0, 0, int4);
        if (int0 != -1) {
            ifSetGraphic(int0, Component.interface_1259.component_1259_24);
        }
        int1 = clan_stronghold_main_get_map_graphic(0, 1, int4);
        if (int1 != -1) {
            ifSetGraphic(int1, Component.interface_1259.component_1259_23);
        }
        int2 = clan_stronghold_main_get_map_graphic(0, 2, int4);
        if (int2 != -1) {
            ifSetGraphic(int2, Component.interface_1259.component_1259_22);
        }
        int3 = clan_stronghold_main_get_map_graphic(0, 3, int4);
        if (int3 != -1) {
            ifSetGraphic(int3, Component.interface_1259.component_1259_21);
        }
    }
}
