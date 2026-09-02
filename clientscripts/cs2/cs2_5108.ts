/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5108

function cs2_5108(intArg0: number): void {
    if (intArg0 == 1) {
        ifSetSize(0, 20, 1, 1, Component.interface_1116.component_1116_50);
        ifSetHide(false, Component.interface_1116.component_1116_40);
        proc_clan_signpost_tab_switch(1);
    } else {
        ifSetSize(0, 0, 1, 1, Component.interface_1116.component_1116_50);
        ifSetHide(true, Component.interface_1116.component_1116_40);
        proc_clan_signpost_tab_switch(0);
    }
}
