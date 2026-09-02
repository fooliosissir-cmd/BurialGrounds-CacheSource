/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,prayer_init_buttons]

function prayer_init_buttons(): void {
    if (varc_181 == 1) {
        ccDeleteAll(Component.interface_271.component_271_7);
        ccDeleteAll(Component.interface_271.component_271_8);
        ifSetHide(false, Component.interface_271.component_271_42);
        ifSetHide(true, Component.interface_271.component_271_0);
        cs2_1388(Component.interface_271.component_271_42);
        proc_prayer_load_buttons(Component.interface_271.component_271_8);
        ifSetHide(true, Component.interface_271.component_271_9);
        ccDeleteAll(Component.interface_271.component_271_6);
        ifSetScrollPos(0, 0, Component.interface_271.component_271_5);
        ifSetSize(16384, 16384, 2, 2, Component.interface_271.component_271_5);
    } else {
        ccDeleteAll(Component.interface_271.component_271_42);
        ifSetHide(true, Component.interface_271.component_271_42);
        ifSetHide(false, Component.interface_271.component_271_0);
        proc_prayer_load_buttons(Component.interface_271.component_271_8);
        cs2_1293(Component.interface_271.component_271_7);
        ifSetHide(false, Component.interface_271.component_271_9);
        ifSetSize(16384, ifGetHeight(Component.interface_271.component_271_9) + ifGetHeight(Component.interface_271.component_271_0), 2, 1, Component.interface_271.component_271_5);
        proc_prayer_refresh_scrollbar();
    }
}
