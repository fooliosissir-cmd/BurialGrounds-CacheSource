/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,prayer_load_buttons]

function clientscript_prayer_load_buttons(): void {
    varc_prayer_last_mode = -1;
    ifSetOnVarTransmit(hook(cs2_1716, "Y", [], [1584]), Component.interface_271.component_271_8);
    ifSetOnStatTransmit(hook(cs2_1705, "Y", [], [0, 2, 1, 4, 6]), Component.interface_271.component_271_8);
    prayer_init_buttons();
    ccDeleteAll(Component.interface_271.component_271_6);
    proc_prayer_refresh_scrollbar();
}
