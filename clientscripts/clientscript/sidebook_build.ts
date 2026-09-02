/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,sidebook_build]

function clientscript_sidebook_build(intArg0: component, intArg1: component, intArg2: component): void {
    if (varc_sidebook_pagecount <= 0) {
        return;
    }
    proc_sidebook_build(intArg0, intArg1, intArg2);
}
