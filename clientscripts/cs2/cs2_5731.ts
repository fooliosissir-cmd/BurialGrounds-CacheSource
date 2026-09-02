/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5731

function cs2_5731(intArg0: number, intArg1: stat): number {
    switch (intArg0) {
        case 347:
            if (comlevel() < Obj.twpart3) {
                return 0;
            }
            break;
        case 907:
            if (comlevel() < Obj.holy_table_napkin) {
                return 0;
            }
            break;
        case 850:
            if (comlevel() < Obj.whitecog) {
                return 0;
            }
            break;
        case 510:
            if (comlevel() < Obj.bucket_wax) {
                return 0;
            }
            break;
        case 519:
            if (comlevel() < Obj.excalibur) {
                return 0;
            }
            break;
        case 851:
            if (comlevel() < Obj.obj_50) {
                return 0;
            }
            break;
        case 513:
            if (comlevel() < Obj.obj_50) {
                return 0;
            }
            break;
        case 476:
            if (comlevel() < Obj.obj_60) {
                return 0;
            }
            break;
        case 670:
            if (statBase(15) < 4) {
                return 0;
            }
            break;
        case 619:
            if (statBase(intArg1) < 40) {
                return 0;
            }
            break;
        case 847:
            if (statBase(5) < 40 || statBase(22) < 45) {
                return 0;
            }
            break;
        case 515:
            if (statBase(16) < 35) {
                return 0;
            }
            break;
        case 775:
            if (statBase(12) < 15 || statBase(11) < 15 || statBase(22) < 15) {
                return 0;
            }
            break;
        case 461:
            if (statBase(16) < 51) {
                return 0;
            }
            break;
        case 660:
            if (statBase(10) < 48) {
                return 0;
            }
            break;
        case 449:
            if (statBase(16) < 15) {
                return 0;
            }
            break;
        case 642:
            if (varp_116 < 15) {
                return 0;
            }
            break;
        case 1008:
            if (varbit_lumbcat_quest < 60) {
                return 0;
            }
            break;
        case 776:
            if (varbit_poh_house_location == 0) {
                return 0;
            }
            break;
    }
    return 1;
}
