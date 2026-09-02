/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_289

function cs2_289(intArg0: component, intArg1: number, intArg2: colour): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetColour(intArg2);
    }
    deltooltip_action(Component.interface_755.component_755_57);
}
