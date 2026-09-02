/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5908

function cs2_5908(intArg0: obj): string {
    let str0: string = "";

    if (mapMembers() == 0) {
        str0 = " (Member's item)";
    }

    if (ocMembers(intArg0) == 0) {
        return ocName(intArg0);
    }

    if (mapMembers() == 1) {
        return ocName(intArg0) + str0;
    }
    return enumOp(type_obj, type_string, Enum.enum_5703, intArg0) + str0;
}
