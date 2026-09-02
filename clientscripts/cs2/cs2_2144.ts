/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2144

function cs2_2144(intArg0: component): void {
    let int1: Enum = Enum.enum_1093;

    if (gender() == 1) {
        int1 = Enum.enum_3872;
    }

    if (varp_1442 == 0) {
        ifSetText("No Prefix", intArg0);
    } else {
        ifSetText(enumOp(type_int, type_string, int1, varp_1442), intArg0);
    }
}
