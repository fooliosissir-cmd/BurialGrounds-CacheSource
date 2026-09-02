/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5564

function cs2_5564(intArg0: obj): [string, colour] {
    let str0: string = cs2_940(intArg0);

    if (intArg0 < 100000) {
        return [str0, colour(0xFFFF00)];
    } else if (intArg0 >= 10000000) {
        return [str0, colour(0x00FF80)];
    } else {
        return [str0, colour(0xFFFFFF)];
    }
}
