/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,macro_pinball_score]

function macro_pinball_score(intArg0: component): void {
    ifSettextantimacro(true, intArg0);
    ifSetText("Score: " + tostring(varbit_macro_pinball_score), intArg0);

    if (varbit_macro_pinball_score == 0) {
        ifSetColour(colour(0xFF0000), intArg0);
    } else {
        ifSetColour(colour(0xFFFF00), intArg0);
    }
}
