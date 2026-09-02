/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,acs_shanty_overlay_timer]

function acs_shanty_overlay_timer(): void {
    if (varc_acs_shanty_timer_varc > 100 && varc_acs_shanty_timer_varc <= 355) {
        ifSetTrans(255 - (varc_acs_shanty_timer_varc - 100), Component.acs_shanty_overlay.background);
    }

    if (varc_acs_shanty_timer_varc > 100 && varc_acs_shanty_timer_varc <= 150) {
        ifSetPosition(-35 + (varc_acs_shanty_timer_varc - 100), 122, 0, 0, Component.acs_shanty_overlay.logo_1);
    }

    if (varc_acs_shanty_timer_varc > 200 && varc_acs_shanty_timer_varc <= 455) {
        ifSetPosition(-255 + (varc_acs_shanty_timer_varc - 200), 70, 0, 0, Component.acs_shanty_overlay.line_1);
    }

    if (varc_acs_shanty_timer_varc > 250 && varc_acs_shanty_timer_varc <= 505) {
        ifSetPosition(-255 + (varc_acs_shanty_timer_varc - 250), 85, 0, 0, Component.acs_shanty_overlay.line_2);
    }

    if (varc_acs_shanty_timer_varc > 300 && varc_acs_shanty_timer_varc <= 555) {
        ifSetPosition(-255 + (varc_acs_shanty_timer_varc - 300), 100, 0, 0, Component.acs_shanty_overlay.line_3);
    }

    if (varc_acs_shanty_timer_varc > 500 && varc_acs_shanty_timer_varc <= 755) {
        ifSetPosition(0 - (varc_acs_shanty_timer_varc - 500), 70, 0, 0, Component.acs_shanty_overlay.line_1);
    }

    if (varc_acs_shanty_timer_varc > 550 && varc_acs_shanty_timer_varc <= 805) {
        ifSetPosition(0 - (varc_acs_shanty_timer_varc - 550), 85, 0, 0, Component.acs_shanty_overlay.line_2);
    }

    if (varc_acs_shanty_timer_varc > 600 && varc_acs_shanty_timer_varc <= 855) {
        ifSetPosition(0 - (varc_acs_shanty_timer_varc - 600), 100, 0, 0, Component.acs_shanty_overlay.line_3);
    }

    if (varc_acs_shanty_timer_varc == 700) {
        ifSetModelAngle(0, 0, 0, 210, 0, 1750, Component.acs_shanty_overlay.logo_1);
    }

    if (varc_acs_shanty_timer_varc > 700 && varc_acs_shanty_timer_varc <= 955) {
        ifSetTrans(varc_acs_shanty_timer_varc - 700, Component.acs_shanty_overlay.background);
    }

    if (varc_acs_shanty_timer_varc > 700 && varc_acs_shanty_timer_varc <= 750) {
        ifSetPosition(0 - (varc_acs_shanty_timer_varc - 700), 122, 0, 0, Component.acs_shanty_overlay.logo_1);
    }
    varc_acs_shanty_timer_varc = varc_acs_shanty_timer_varc + 1;
}
