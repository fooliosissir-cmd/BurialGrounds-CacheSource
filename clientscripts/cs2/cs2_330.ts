/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_330

function cs2_330(intArg0: component): void {
    let int1: number = 0;

    if (gender() == 1) {
        int1 = enumGetoutputcount(Enum.player_kit_bracelet_f_silver_getidkit);
    } else {
        int1 = enumGetoutputcount(Enum.player_kit_bracelet_m_silver_getidkit);
    }
    cs2_332(varc_784);
    player_kit_select(intArg0, varc_784, int1);
}
