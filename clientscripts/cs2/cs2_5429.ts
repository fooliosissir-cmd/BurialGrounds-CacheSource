/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5429

function cs2_5429(): void {
    varc_dom_spin_speed = 1;
    varc_dom_client_handicap = 0;
    varc_dom_start_slowdown = 0;
    varc_dom_move_mode = 1;
    ifSetOnTimer(hook(dom_move_all, "", []), Component.interface_1167.component_1167_1);
}
