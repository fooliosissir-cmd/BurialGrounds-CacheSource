/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_697

function cs2_697(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetOutline(2);
    }

    if (ccFind(Component.interface_662.component_662_74, 0) == 1 && (ccGetTargetMask() & 0x20) != 0) {
        cs2_71(4);
    }
}
