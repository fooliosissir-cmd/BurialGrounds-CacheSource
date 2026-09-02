/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5082

function cs2_5082(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;

    if (varc_welcome_screen_time != -1 && ccFind<1>(intArg0, varc_welcome_screen_time * 10 + 2) == 1) {
        int1 = cs2_4405() + ccGetHeight<1>() - trh_esc_mouseleave(Component.clan_field_setup.dropdown_container);
        if (int1 >= ifGetHeight(intArg0)) {
            ifSetHide(true, Component.clan_field_setup.dropdown);
        } else if (int1 <= 0) {
            ifSetHide(true, Component.clan_field_setup.dropdown);
        } else {
            ifSetHide(false, Component.clan_field_setup.dropdown);
            ifSetPosition(cs2_1815() - if_getx_absolute(Component.clan_field_setup.dropdown_container), int1, 0, 0, Component.clan_field_setup.dropdown);
            if (ifFind<1>(Component.clan_field_setup.dropdown) == 1) {
                int3 = ccParam<1>(Param.clan_field_element_h) + 8;
                int2 = max(min(int3, ifGetHeight(Component.clan_field_setup.dropdown_container) - int1), 0);
                ccSetSize<1>(ccParam<1>(Param.clan_field_element_w), int2, 0, 0);
            }
            ifSetOnTimer(hook(cs2_5083, "Iii", [event_com, varc_welcome_screen_time, clientClock() + 2]), Component.clan_field_setup.dropdown);
        }
    } else {
        ifSetHide(true, Component.clan_field_setup.dropdown);
    }
}
