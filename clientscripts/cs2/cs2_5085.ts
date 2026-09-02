/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5085

function cs2_5085(intArg0: component): void {
    ifSetHide(true, Component.clan_field_setup.dropdown_container);
    varc_welcome_screen_time = -1;
    ccDeleteAll(Component.clan_field_setup.dropdown_options);
    let int1: number = 0;
    let int2: number = enumGetoutputcount(Enum.clan_field_rules);

    while (int1 < int2) {
        if (varc_demomode_create == 1) {
            if (ccFind(intArg0, int1 * 10 + 3) == 1) {
                ccSetGraphic(Graphic.aif_drop_down_button_1_1);
            }
            if (ccFind(intArg0, int1 * 10 + 5) == 1) {
                ccSetGraphic(Graphic.aif_drop_down_button_1_0);
            }
            if (ccFind(intArg0, int1 * 10 + 7) == 1) {
                ccSetGraphic(Graphic.aif_drop_down_button_1_2);
            }
        } else {
            if (ccFind(intArg0, int1 * 10 + 3) == 1) {
                ccSetGraphic(Graphic.aif_drop_down_button_1_10);
            }
            if (ccFind(intArg0, int1 * 10 + 5) == 1) {
                ccSetGraphic(Graphic.aif_drop_down_button_1_9);
            }
            if (ccFind(intArg0, int1 * 10 + 7) == 1) {
                ccSetGraphic(Graphic.aif_drop_down_button_1_11);
            }
        }
        int1 = int1 + 1;
    }
}
