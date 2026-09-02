/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fade_in_darkness]

function fade_in_darkness(intArg0: component): void {
    if (varbit_darkness_level == 0) {
        ifSetModelAnim(1378, intArg0);
    } else if (varbit_darkness_level == 1) {
        ifSetModelAnim(2115, intArg0);
    } else {
        ifSetModelAnim(2117, intArg0);
    }
}
