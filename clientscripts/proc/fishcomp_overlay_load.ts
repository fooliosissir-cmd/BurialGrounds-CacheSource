/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fishcomp_overlay_load]

function proc_fishcomp_overlay_load(): void {
    ifSetOnVarcTransmit(hook(cs2_256, "Y", [], [1111, 1113, 1112, 1114, 1115, 1116, 1927]), Component.interface_919.component_919_52);
}
