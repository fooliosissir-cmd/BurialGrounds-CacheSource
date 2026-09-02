/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4070

function cs2_4070(intArg0: number): void {
    if (clientClock() > intArg0 + 25) {
        varc_1431 = 0;
        ifSetOnTimer(noHook(""), Component.interface_1058.component_1058_68);
    }
}
