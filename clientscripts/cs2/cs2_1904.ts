/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1904

function cs2_1904(intArg0: component, intArg1: component, intArg2: component): void {
    ccDeleteAll(intArg1);

    if (stringLength(varcstr_30) > 0) {
        cs2_1902(intArg0, intArg1, intArg2);
    } else {
        ifSetScrollSize(0, 0, intArg1);
        cs2_1905(intArg1, intArg2);
    }
}
