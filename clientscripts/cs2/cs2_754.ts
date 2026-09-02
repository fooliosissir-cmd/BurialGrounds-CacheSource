/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_754

function cs2_754(intArg0: number, intArg1: number): void {
    if (intArg1 == 0) {
        ifSetText(tostring(intArg0) + ".00", Component.interface_662.component_662_43);
    } else {
        ifSetText(tostring(intArg0) + ".30", Component.interface_662.component_662_43);
    }
}
