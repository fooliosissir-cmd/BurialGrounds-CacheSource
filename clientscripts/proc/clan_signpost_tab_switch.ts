/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_signpost_tab_switch]

function proc_clan_signpost_tab_switch(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetHide(false, Component.interface_1116.component_1116_561);
        ifSetHide(true, Component.interface_1116.component_1116_553);
        ifSetHide(false, Component.interface_1116.component_1116_3);
        ifSetHide(true, Component.interface_1116.component_1116_4);
    } else {
        ifSetHide(true, Component.interface_1116.component_1116_561);
        ifSetHide(false, Component.interface_1116.component_1116_553);
        ifSetHide(true, Component.interface_1116.component_1116_3);
        ifSetHide(false, Component.interface_1116.component_1116_4);
    }
}
