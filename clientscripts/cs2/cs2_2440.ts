/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2440

function cs2_2440(): void {
    let int0: number = varc_819 / 2;

    if (int0 < 1) {
        ifSetText("Catch: Nothing", Component.interface_15.component_15_17);
    } else {
        ifSetText("Catch: " + tostring(int0) + " Fish", Component.interface_15.component_15_17);
    }
}
