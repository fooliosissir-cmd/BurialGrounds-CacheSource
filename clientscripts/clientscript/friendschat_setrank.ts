/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friendschat_setrank]

function friendschat_setrank(intArg0: number, intArg1: number): void {
    let int2: number = intArg1 - 1;

    let [str0, str1] = friendGetName(intArg0);
    friendSetRank(str0, int2);

    if (ccFind(Component.interface_1108.component_1108_22, intArg0 * 2 + 1) == 1) {
        ccSetText(enumOp(type_int, type_string, Enum.friendschat_rankenum, int2));
    }
}
