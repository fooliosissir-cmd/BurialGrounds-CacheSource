/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_suggestions_highlight]

function proc_create_suggestions_highlight(intArg0: component, strArg0: string, intArg1: number): void {
    if (intArg1 == 1) {
        ifSetColour(colour(0x43C800), intArg0);
        ifSetText("<u=43c800>" + strArg0 + "</u>", intArg0);
    } else {
        ifSetColour(colour(0x339900), intArg0);
        ifSetText("<u=339900>" + strArg0 + "</u>", intArg0);
    }
}
