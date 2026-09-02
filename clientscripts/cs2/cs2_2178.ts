/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2178

function cs2_2178(intArg0: number, strArg0: string): void {
    if (ccFind(Component.interface_190.component_190_15, intArg0) == 1) {
        if (clientClock() % 20 > 9) {
            ccSetText("");
        } else {
            ccSetText(strArg0);
        }
    }
}
