/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_331

function cs2_331(intArg0: component, intArg1: number): void {
    let int2: number = 0;

    if (gender() == 1) {
        int2 = enumGetoutputcount(Enum.player_kit_bracelet_f_silver_getidkit);
    } else {
        int2 = enumGetoutputcount(Enum.player_kit_bracelet_m_silver_getidkit);
    }
    cs2_332(intArg1);
    player_kit_select(intArg0, intArg1, int2);
}
