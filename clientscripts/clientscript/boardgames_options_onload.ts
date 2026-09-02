/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,boardgames_options_onload]

function boardgames_options_onload(): void {
    if (varbit_boardgames_game == 1) {
        ifSetText("Draughts: Options", Component.interface_756.component_756_10);
        cs2_1406(Component.interface_756.component_756_3);
    } else if (varbit_boardgames_game == 2) {
        ifSetText("Runelink: Options", Component.interface_756.component_756_10);
        cs2_1406(Component.interface_756.component_756_4);
    } else if (varbit_boardgames_game == 3) {
        ifSetText("Runesquares: Options", Component.interface_756.component_756_10);
        cs2_1406(Component.interface_756.component_756_8);
    } else if (varbit_boardgames_game == 4) {
        ifSetText("Runeversi: Options", Component.interface_756.component_756_10);
        cs2_1406(Component.interface_756.component_756_6);
    }
    proc_boardgames_options_ranked();
    proc_boardgames_options_time();
    cs2_1409();
}
