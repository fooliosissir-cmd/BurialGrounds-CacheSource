/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,comlevel]

function comlevel(): obj {
    let int0: obj = statBase(0) + statBase(2);
    let int1: obj = statBase(4) * 3 / 2;
    let int2: obj = statBase(6) * 3 / 2;
    let int3: obj = int0;

    if (int1 > int3) {
        int3 = int1;
    }

    if (int2 > int3) {
        int3 = int2;
    }
    int3 = int3 * 13 / 10;

    if (mapMembers() == 1) {
        int3 = (int3 + statBase(1) + statBase(3) + statBase(5) / 2 + statBase(23) / 2) / 4;
    } else {
        int3 = (int3 + statBase(1) + statBase(3) + statBase(5) / 2) / 4;
    }
    return int3;
}
