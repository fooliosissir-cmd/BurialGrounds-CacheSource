/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,login_link_highlight]

function proc_login_link_highlight(intArg0: component, intArg1: component, intArg2: graphic, intArg3: number): void {
    let str0: string = removetags(ifGetText(intArg1));

    if (intArg0 != -1) {
        if (intArg3 == 1) {
            ifSetText("<u=fafafa>" + str0 + "</u>", intArg1);
            ifSetColour(colour(0xFAFAFA), intArg1);
            ifSetSize(stringWidth(str0, intArg2), ifGetHeight(intArg0), 0, 0, intArg0);
        } else {
            ifSetText("<u=c8c8c8>" + str0 + "</u>", intArg1);
            ifSetColour(colour(0xC8C8C8), intArg1);
            ifSetSize(stringWidth(str0, intArg2), ifGetHeight(intArg0), 0, 0, intArg0);
        }
    }
}
