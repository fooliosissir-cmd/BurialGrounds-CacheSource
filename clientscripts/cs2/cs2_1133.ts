/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1133

function cs2_1133(intArg0: component): void {
    let int1: obj = invGetobj(94, 3);

    if (int1 != -1 && (ocMembers(int1) == 0 || mapMembers() == 1)) {
        ifSetText(ocName(int1), intArg0);
    } else {
        ifSetText("Unarmed", intArg0);
    }
}
