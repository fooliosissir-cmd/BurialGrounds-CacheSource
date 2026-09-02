/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_801

function cs2_801(intArg0: component, intArg1: stat): void {
    ifSetColour(cs2_805(intArg1), intArg0);

    if (intArg1 == 5) {
        ifSetText(tostring(varbit_prayer_points), intArg0);
    } else {
        ifSetText(tostring(stat(intArg1)), intArg0);
    }

    if (intArg1 == 23) {
        cs2_810();
    }
}
