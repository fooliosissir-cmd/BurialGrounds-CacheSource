/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5428

function cs2_5428(intArg0: number): void {
    varc_dom_move_mode = 2;
    varc_dom_spin_speed = 3;
    varc_dom_start_slowdown = 1;
    varc_dom_client_handicap = intArg0;
    ifSetOnTimer(hook(dom_move_all, "", []), Component.interface_1167.component_1167_1);
    soundVorbisVolume(8096, 1, 0, 255);
}
