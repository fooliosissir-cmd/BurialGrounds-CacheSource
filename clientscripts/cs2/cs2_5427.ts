/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5427

function cs2_5427(): void {
    varc_dom_next_icon = 1;
    varc_dom_spin_speed = 1;
    varc_dom_client_handicap = 0;
    varc_dom_start_slowdown = 0;
    varc_dom_move_mode = 1;
    varc_tooltip_built = 0;
    dom_create_icon(0, 0);
    dom_create_icon(1, 90);
    dom_create_icon(2, 180);
    ifSetOnTimer(hook(dom_move_all, "", []), Component.interface_1167.component_1167_1);
    ifSetText(tostring(varbit_dom_handicap_lives), Component.interface_1167.component_1167_42);
    cs2_5434();
}
