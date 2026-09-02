/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4943

function cs2_4943(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: component = Component.interface_1258.component_1258_186;

    if (intArg0 == 0 && varbit_clan_stronghold_main_map_mode == 2) {
        int1 = ifGetX(int3) + 12;
        int2 = 156;
    } else {
        int1 = ifGetX(int3) - 12;
        int2 = -150;
    }
    int1 = max(int1, -150);
    int1 = min(int1, 156);
    ifSetPosition(int1, ifGetY(int3), 0, 0, int3);

    if (int1 == int2) {
        ifSetOnTimer(noHook(""), int3);
        cs2_5220();
    }
}
