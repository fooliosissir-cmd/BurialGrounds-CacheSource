/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sc_game_start]

function sc_game_start(): void {
    varc_sc_end_time_clientclock = clientClock() + 2000 * 30;
    varc_sc_panic_transparent = 255;
    varc_sc_panic_direction = 0;
    varc_sc_panic_flash_counter = 0;
    varc_sc_panic_frame_count = 0;
    ifSetTextShadow(false, Component.interface_809.component_809_15);
}
