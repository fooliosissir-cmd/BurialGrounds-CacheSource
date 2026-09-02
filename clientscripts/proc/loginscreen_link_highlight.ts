/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,loginscreen_link_highlight]

function proc_loginscreen_link_highlight(intArg0: component, intArg1: component, strArg0: string, intArg2: graphic, intArg3: boolean): void {
    if (intArg0 != -1) {
        if (intArg3 == true) {
            ifSetText("<u=fafafa>" + strArg0 + "</u>", intArg1);
            ifSetColour(colour(0xFAFAFA), intArg1);
            ifSetSize(stringWidth(strArg0, intArg2), ifGetHeight(intArg0), 0, 0, intArg0);
        } else {
            ifSetText("<u=c8c8c8>" + strArg0 + "</u>", intArg1);
            ifSetColour(colour(0xC8C8C8), intArg1);
            ifSetSize(stringWidth(strArg0, intArg2), ifGetHeight(intArg0), 0, 0, intArg0);
        }
    }
}
