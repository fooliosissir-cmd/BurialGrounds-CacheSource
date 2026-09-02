/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,conq_skull_swapper]

function conq_skull_swapper(): void {
    varc_conq_opponents_turn_text_counter = varc_conq_opponents_turn_text_counter + 1;

    if (varc_conq_opponents_turn_text_counter == 50) {
        ifSetText("Opponent's Turn", Component.interface_1010.component_1010_41);
    } else if (varc_conq_opponents_turn_text_counter == 100) {
        ifSetText("Opponent's Turn.", Component.interface_1010.component_1010_41);
    } else if (varc_conq_opponents_turn_text_counter == 150) {
        ifSetText("Opponent's Turn..", Component.interface_1010.component_1010_41);
    } else if (varc_conq_opponents_turn_text_counter >= 200) {
        ifSetText("Opponent's Turn...", Component.interface_1010.component_1010_41);
        varc_conq_opponents_turn_text_counter = 0;
    }
}
