/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,loy_defence_load]

function loy_defence_load(): void {
    ifSetOnTimer(hook(cs2_4697, "i", [0]), Component.interface_500.component_500_8);

    if (ifGetHide(Component.interface_500.component_500_11) == 0) {
        ifSetOnTimer(hook(cs2_4695, "ii", [0, 0]), Component.interface_500.component_500_11);
    }
}
