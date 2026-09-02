/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4674

function cs2_4674(): void {
    let int0: number = varbit_fremsaga_current_saga;

    if (varc_fremsaga_varc_1 >= 20 && varc_fremsaga_varc_2 >= 30 && varc_fremsaga_varc_3 >= 40 && varc_fremsaga_varc_4 >= 50) {
        return;
    }

    if (varc_fremsaga_varc_1 < 20) {
        varc_fremsaga_varc_1 = varc_fremsaga_varc_1 + 1;
    }

    if (varc_fremsaga_varc_2 < 30) {
        varc_fremsaga_varc_2 = varc_fremsaga_varc_2 + 1;
    }

    if (varc_fremsaga_varc_3 < 40) {
        varc_fremsaga_varc_3 = varc_fremsaga_varc_3 + 1;
    }

    if (varc_fremsaga_varc_4 < 50) {
        varc_fremsaga_varc_4 = varc_fremsaga_varc_4 + 1;
    }

    switch (int0) {
        case 1:
            if (varc_fremsaga_varc_1 >= 20) {
                if (varbit_fremsaga_signature_ore_rubble == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_150);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_150);
                }
            }
            if (varc_fremsaga_varc_2 >= 30) {
                if (varbit_fremsaga_signature_ore_summon == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_151);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_151);
                }
            }
            if (varc_fremsaga_varc_3 >= 40) {
                if (varbit_fremsaga_signature_ore_sword == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_152);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_152);
                }
            }
            if (varc_fremsaga_varc_4 >= 50) {
                if (varbit_fremsaga_signature_ore_mined == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_153);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_153);
                }
            }
            break;
        case 4:
            if (varc_fremsaga_varc_1 >= 20) {
                if (varbit_fremsaga_thok_toughguy == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_150);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_150);
                }
            }
            if (varc_fremsaga_varc_2 >= 30) {
                if (varbit_fremsaga_thok_rammernaut == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_151);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_151);
                }
            }
            if (varc_fremsaga_varc_3 >= 40) {
                if (varbit_fremsaga_thok_bulwalk == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_152);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_152);
                }
            }
            if (varc_fremsaga_varc_4 >= 50) {
                if (varbit_fremsaga_thok_demon == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_153);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_153);
                }
            }
            break;
        case 2:
            if (varc_fremsaga_varc_1 >= 20) {
                if (varbit_fremsaga_vengeance_argax == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_64);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_64);
                }
            }
            if (varc_fremsaga_varc_2 >= 30) {
                if (varbit_fremsaga_vengeance_korel == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_148);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_148);
                }
            }
            if (varc_fremsaga_varc_3 >= 40) {
                if (varbit_fremsaga_vengeance_peleas == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_149);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_149);
                }
            }
            break;
        case 3:
            if (varc_fremsaga_varc_1 >= 20) {
                if (varbit_fremsaga_bilrach_power_max == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_64);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_64);
                }
            }
            if (varc_fremsaga_varc_2 >= 30) {
                if (varbit_fremsaga_bilrach_convo_perfect == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_148);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_148);
                }
            }
            if (varc_fremsaga_varc_3 >= 40) {
                if (varbit_fremsaga_bilrach_puzzle_merchant_memory_1 == 2 && varbit_fremsaga_bilrach_puzzle_merchant_memory_2 == 2 && varbit_fremsaga_bilrach_puzzle_merchant_memory_3 == 2 && varbit_fremsaga_bilrach_puzzle_forgotten_warrior_memory_1 == 2 && varbit_fremsaga_bilrach_puzzle_forgotten_warrior_memory_2 == 2 && varbit_fremsaga_bilrach_puzzle_forgotten_warrior_memory_3 == 2 && varbit_fremsaga_bilrach_puzzle_necrolord_memory_1 == 2 && varbit_fremsaga_bilrach_puzzle_necrolord_memory_2 == 2 && varbit_fremsaga_bilrach_puzzle_necrolord_memory_3 == 2) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_149);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_149);
                }
            }
            break;
        case 6:
            if (varc_fremsaga_varc_1 >= 20) {
                if (varbit_fremsaga_thok2_winner_max == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_64);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_64);
                }
            }
            if (varc_fremsaga_varc_2 >= 30) {
                if (varbit_fremsaga_thok2_baby_crab == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_148);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_148);
                }
            }
            if (varc_fremsaga_varc_3 >= 40) {
                if (varbit_fremsaga_thok2_fish_cake == 1) {
                    ifSetGraphic(Graphic.aif_checkbox_small_1, Component.interface_102.component_102_149);
                } else {
                    ifSetGraphic(Graphic.aif_checkbox_small_5, Component.interface_102.component_102_149);
                }
            }
            break;
    }
}
