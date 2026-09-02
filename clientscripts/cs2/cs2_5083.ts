/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5083

function cs2_5083(intArg0: component, intArg1: number, intArg2: number): void {
    if (clientClock() < intArg2) {
        return;
    }
    ifSetOnTimer(noHook(""), intArg0);

    if (intArg1 == varc_welcome_screen_time) {
        scrollbar_resize(Component.clan_field_setup.dropdown_scrollbar, Component.clan_field_setup.dropdown_options, ifGetScrollY(Component.clan_field_setup.dropdown_options));
    }
}
