/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4039

function cs2_4039(intArg0: number, intArg1: number): void {
    if (ccFind(Component.interface_190.component_190_15, intArg0) == 1) {
        if (intArg1 == 1) {
            ccSetColour(colour(0x00FFFF));
        } else if (cs2_2193(intArg0) == 2) {
            ccSetColour(colour(0x00FF00));
        } else if (cs2_2193(intArg0) == 1) {
            ccSetColour(colour(0xFFFF00));
        } else {
            ccSetColour(colour(0xFF0000));
        }
    }
}
