/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4613

function cs2_4613(intArg0: component): void {
    if (varbit_distinction_cape_colour1 == 0 && varbit_distinction_cape_colour2 == 0 && varbit_distinction_cape_colour3 == 0 && varbit_distinction_cape_colour4 == 0) {
        return;
    }
    ifSetRecol(0, 65214, varbit_distinction_cape_colour1, intArg0);
    ifSetRecol(1, 65200, varbit_distinction_cape_colour2, intArg0);
    ifSetRecol(3, 65186, varbit_distinction_cape_colour3, intArg0);
    ifSetRecol(4, 62995, varbit_distinction_cape_colour4, intArg0);
}
