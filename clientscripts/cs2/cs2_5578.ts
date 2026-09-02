/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5578

function cs2_5578(intArg0: number): void {
    if (intArg0 == -1 || intArg0 > varbit_rden2_points) {
        ifSetHide(false, Component.interface_1181.component_1181_190);
        ifSetHide(false, Component.interface_1181.component_1181_173);
    } else {
        ifSetHide(true, Component.interface_1181.component_1181_190);
        ifSetHide(true, Component.interface_1181.component_1181_173);
    }
}
