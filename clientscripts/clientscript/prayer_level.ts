/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,prayer_level]

function prayer_level(intArg0: component, intArg1: component, intArg2: number): void {
    ifSetText(tostring(prayer_points_level()) + " / " + tostring(cs2_5255()), intArg0);
    ifSetSize(stringWidth(ifGetText(intArg0), Graphic.p12_full), ifGetHeight(intArg0), 0, 0, intArg0);

    if (intArg2 == 1) {
        cs2_5264(intArg0, intArg1);
    }
}
