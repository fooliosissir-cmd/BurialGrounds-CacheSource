/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1957

function cs2_1957(intArg0: component, intArg1: obj, intArg2: number): void {
    let int3: number = invTotal(Inv.inv, intArg1);

    ifSetText(tostring(int3) + "/" + tostring(intArg2), intArg0);

    if (int3 >= intArg2) {
        ifSetColour(colour(0x00FF00), intArg0);
    } else {
        ifSetColour(colour(0xFF0000), intArg0);
    }
}
