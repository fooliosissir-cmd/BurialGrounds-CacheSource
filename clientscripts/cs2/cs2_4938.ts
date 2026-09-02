/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4938

function cs2_4938(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: component = Component.interface_1261.component_1261_45;

    if (intArg0 == 0 && varbit_clan_stronghold_main_map_mode == 1) {
        int1 = ifGetX(int3) + 12;
        int2 = 0;
        int1 = min(int1, int2);
        int1 = max(int1, -226);
    } else {
        int1 = ifGetX(int3) - 12;
        int2 = -226;
        int1 = max(int1, int2);
    }
    ifSetPosition(int1, ifGetY(int3), 0, 0, int3);

    if (int1 == int2) {
        ifSetOnTimer(noHook(""), int3);
        cs2_5220();
    }
}
