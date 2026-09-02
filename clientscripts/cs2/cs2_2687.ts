/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2687

function cs2_2687(): number {
    if (varp_1447 < 100) {
        return 10000;
    } else if (varp_1447 < 200) {
        return 12500;
    } else if (varp_1447 < 300) {
        return 15000;
    } else if (varp_1447 < 400) {
        return 17500;
    } else {
        return 20000;
    }
}
