/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,pest_mouseleave]

function pest_mouseleave(intArg0: component): void {
    ifSetText(removetags(ifGetText(intArg0)), intArg0);
}
