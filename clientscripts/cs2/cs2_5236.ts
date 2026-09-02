/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5236

function cs2_5236(): void {
    let int0: number = 120 - scale(120, 100, varc_rand_display_stage);

    if (ifGetWidth(Component.interface_1126.component_1126_124) < int0) {
        ifSetSize(ifGetWidth(Component.interface_1126.component_1126_124) + 1, ifGetHeight(Component.interface_1126.component_1126_124), 0, 0, Component.interface_1126.component_1126_124);
    }
}
