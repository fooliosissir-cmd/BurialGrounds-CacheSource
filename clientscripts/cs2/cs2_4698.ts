/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4698

function cs2_4698(): void {
    let int0: number = varc_loy_health_client / 2;

    ifSetSize(int0 * 16384 / 100, ifGetHeight(Component.interface_500.component_500_12), 2, 0, Component.interface_500.component_500_12);

    if (int0 < 97) {
        ifSetHide(true, Component.interface_500.component_500_13);
    }
}
