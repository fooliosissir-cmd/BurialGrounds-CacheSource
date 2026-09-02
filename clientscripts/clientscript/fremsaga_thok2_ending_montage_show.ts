/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_thok2_ending_montage_show]

function fremsaga_thok2_ending_montage_show(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number): void {
    let int7: number = 0;

    varc_1883 = intArg0;
    let int8: colour = rgb_to_hex(intArg1, intArg2, intArg3);
    let int9: colour = rgb_to_hex(intArg4, intArg5, intArg6);
    ifSetmaxlines(4, Component.fremsaga_thok2_ending_montage.text_description);

    switch (intArg0) {
        case 0:
            fremsaga_thok2_ending_montage_set_colour(int8, int9);
            ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
            ifSetText("And so Thok made good on his word and made Bone Face pay for getting in the way of his next adventure.", Component.fremsaga_thok2_ending_montage.text_description);
            break;
        case 1:
            fremsaga_thok2_ending_montage_set_colour(int8, int9);
            ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
            ifSetText("Thok returned Mini-Marm and Mrs Mini-Marm to their pool, where they made a start on building a mighty crab army.", Component.fremsaga_thok2_ending_montage.text_description);
            break;
        case 2:
            fremsaga_thok2_ending_montage_set_colour(int8, int9);
            int7 = varbit_fremsaga_thok2_killcount_thok - varbit_fremsaga_thok2_killcount_marmaros;
            if (int7 > 0) {
                ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
                ifSetText("Thok triumphed over his brother Marmaros, beating him by a mighty " + tostring(varbit_fremsaga_thok2_killcount_thok) + " kills to Marmaros's " + tostring(varbit_fremsaga_thok2_killcount_marmaros) + "." + "<br>" + "Thok is the greatest brother! Marmaros never stood a chance.", Component.fremsaga_thok2_ending_montage.text_description);
            } else if (int7 < 0) {
                ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
                ifSetText("Marmaros defeated his brother Thok, barely beating him with " + tostring(varbit_fremsaga_thok2_killcount_marmaros) + " kills to Thok's " + tostring(varbit_fremsaga_thok2_killcount_thok) + "." + "<br>" + "Marmaros is the greatest brother! Play again; maybe you can defeat him next time.", Component.fremsaga_thok2_ending_montage.text_description);
            } else {
                ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
                ifSetText("Thok and Marmaros both killed the same number of enemies, each with a kill count of " + tostring(varbit_fremsaga_thok2_killcount_marmaros) + "." + "<br>" + "Who can be the better brother? Play again to find out!", Component.fremsaga_thok2_ending_montage.text_description);
            }
            break;
        case 3:
            fremsaga_thok2_ending_montage_set_colour(int8, int9);
            ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
            ifSetText("Pretty Lass is quietly waiting for Thok to ask her out on a date.", Component.fremsaga_thok2_ending_montage.text_description);
            break;
        case 4:
            fremsaga_thok2_ending_montage_set_colour(int8, int9);
            ifSetGraphic(Graphic.aif_aif_clan_island_layout_04_sml_3, Component.fremsaga_thok2_ending_montage.image_graphic);
            ifSetText("Bone Face still hasn't woken up yet.", Component.fremsaga_thok2_ending_montage.text_description);
            break;
    }
    varc_fremsaga_thok2_ending_montage_last_direction = (varc_fremsaga_thok2_ending_montage_last_direction + 1) % 4;
    cs2_6115(1);
}
