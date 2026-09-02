/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_730

function cs2_730(intArg0: obj, intArg1: component, intArg2: component): void {
    let int3: number = invTotal(Inv.inv, Obj.rcguild_reward_token);
    let int4: number = enumOp(type_obj, type_int, Enum.rcguild_reward_shop, intArg0);

    ifSetText(tostring(int4) + " tokens", intArg1);

    if (int4 > int3 || (ocMembers(intArg0) == 1 && mapMembers() == 0)) {
        ifSetColour(colour(0xFF0000), intArg2);
    } else {
        ifSetColour(colour(0x01B801), intArg2);
    }
}
