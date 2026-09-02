/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2828

function cs2_2828(): void {
    if (varp_2523 < 1) {
        return;
    }

    if (compare(subString(chatPlayerNameUnfiltered(), 0, 1), "#") == 0) {
        return;
    }
    cs2_5861(varp_2523);
}
