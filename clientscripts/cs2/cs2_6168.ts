/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6168

function cs2_6168(): void {
    let int0: number = 0;
    let int1: number = 10;

    ifSetHide(false, Component.interface_1273.component_1273_15);
    cs2_6177(Component.interface_1273.component_1273_15);
    int1 = cs2_6178(int1, Component.interface_1273.component_1273_15);

    while (int0 < 10) {
        if (ccFind(Component.interface_1273.component_1273_15, int0) == 1) {
            ccSendtofront();
        }
        int0 = int0 + 1;
    }
}
