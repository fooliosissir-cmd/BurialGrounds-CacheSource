/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2625

function cs2_2625(intArg0: number, intArg1: number): void {
    if (intArg0 == 84) {
        cs2_2621();
    } else if (ifGetHide(Component.interface_850.component_850_1) == 0) {
        if (stringIndexofChar("abcdefghijklmnopqrst", charTolowercase(intArg1), 0) != -1) {
            cs2_2621();
        } else {
            return;
        }
    }
}
