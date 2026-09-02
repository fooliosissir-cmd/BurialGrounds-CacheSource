/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6264

function cs2_6264(): [obj, number, obj, number, number, number, number, number] {
    let int0: obj = -1;
    let int1: number = 0;
    let int2: obj = -1;
    let int3: number = 0;
    let int4: number = varbit_fishcomp_fish_tokens;
    let int5: number = -1;
    let int6: number = -1;

    if (statBase(10) >= 76) {
        int0 = Obj.cert_raw_shark;
        int5 = 383;
        int2 = Obj.cert_raw_swordfish;
        int6 = 371;
    } else if (statBase(10) >= 50) {
        int0 = Obj.cert_raw_swordfish;
        int5 = 371;
        int2 = Obj.cert_raw_lobster;
        int6 = 377;
    } else if (statBase(10) >= 40) {
        int0 = Obj.cert_raw_lobster;
        int5 = 377;
        int2 = Obj.cert_raw_tuna;
        int6 = 359;
    } else if (statBase(10) >= 35) {
        int0 = Obj.cert_raw_tuna;
        int5 = 359;
        int2 = Obj.cert_raw_salmon;
        int6 = 331;
    } else if (statBase(10) >= 30) {
        int0 = Obj.cert_raw_salmon;
        int5 = 331;
        int2 = Obj.cert_raw_pike;
        int6 = 349;
    } else if (statBase(10) >= 25) {
        int0 = Obj.cert_raw_pike;
        int5 = 349;
        int2 = Obj.cert_raw_trout;
        int6 = 335;
    } else if (statBase(10) >= 20) {
        int0 = Obj.cert_raw_trout;
        int5 = 335;
        int2 = Obj.cert_raw_herring;
        int6 = 345;
    } else if (statBase(10) >= 10) {
        int0 = Obj.cert_raw_herring;
        int5 = 345;
        int2 = Obj.cert_raw_sardine;
        int6 = 345;
    } else if (statBase(10) >= 5) {
        int0 = Obj.cert_raw_sardine;
        int5 = 327;
        int2 = Obj.cert_raw_shrimp;
        int6 = 317;
    } else {
        int0 = Obj.cert_raw_shrimp;
        int5 = 317;
        int2 = -1;
        int6 = -1;
    }

    if (int2 == -1) {
        int1 = varbit_fishcomp_fish_tokens / 2;
    } else {
        int1 = varbit_fishcomp_fish_tokens * 2 / 3 / 2;
        int3 = varbit_fishcomp_fish_tokens / 3 / 2;
        int4 = int4 - (int1 + int3) * 2;
    }
    return [int0, int1, int2, int3, 2 * (int1 + int3), int4, int5, int6];
}
