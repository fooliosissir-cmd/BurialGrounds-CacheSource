/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3961

function cs2_3961(intArg0: number, intArg1: component): void {
    if (intArg0 < 50) {
        intArg0 = intArg0 + 1;
        ifSetOnTimer(hook(cs2_3961, "iI", [intArg0, intArg1]), intArg1);
    } else {
        ifSetSize(63, 16, 0, 0, Component.interface_744.component_744_81);
        ifSetOnTimer(noHook(""), intArg1);
        cs2_3960(Component.interface_744.component_744_108);
    }
}
