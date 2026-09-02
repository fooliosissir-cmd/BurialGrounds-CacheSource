/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fade_out_darkness]

function fade_out_darkness(intArg0: component): void {
    if (varbit_darkness_level == 0) {
        ifSetModelAnim(1377, intArg0);
    } else if (varbit_darkness_level == 1) {
        ifSetModelAnim(2114, intArg0);
    } else {
        ifSetModelAnim(2116, intArg0);
    }
}
