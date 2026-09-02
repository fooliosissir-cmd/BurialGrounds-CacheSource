/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2177

function cs2_2177(intArg0: number): void {
    if (ccFind(Component.interface_190.component_190_15, intArg0) == 1) {
        ccSetOnTimer(hook(cs2_2178, "is", [intArg0, ccGetText()]));
    }
}
