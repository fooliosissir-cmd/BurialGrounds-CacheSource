/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2916

function cs2_2916(): number {
    if (varc_1533 == 1) {
        return max(stat(3), 0) * 10;
    }
    return max(statBase(3), 1) * 10;
}
