/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1716

function cs2_1716(): void {
    if (varc_prayer_last_mode != varbit_prayer_mode) {
        varc_prayer_last_mode = varbit_prayer_mode;
        prayer_init_buttons();
    }
}
