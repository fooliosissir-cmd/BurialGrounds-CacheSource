/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6035

function cs2_6035(intArg0: stat, intArg1: number, intArg2: obj, intArg3: number): number {
    if (mapMembers() == 0 && enumHasoutput(type_stat, Enum.enum_5472, intArg0) == 1) {
        if (intArg3 == 1) {
            mes("You must be on a members' world to gain XP in that skill.");
        }
        return 0;
    }

    if (statBase(intArg0) < intArg1) {
        if (intArg3 == 1) {
            mes("You must choose a skill in which you already have level " + tostring(intArg1) + ".");
        }
        return 0;
    }

    if (intArg0 == 22 && varbit_poh_house_location == 0) {
        if (intArg3 == 1) {
            mes("You cannot earn Construction XP without owning a house.");
        }
        return 0;
    }

    switch (intArg2) {
        case Obj.tutorial2_lamp:
            switch (intArg0) {
                case 0:
                case 2:
                case 1:
                case 3:
                case 4:
                case 6:
                case 14:
                case 13:
                case 10:
                case 7:
                case 11:
                case 8:
                case 5:
                    break;
                default:
                    if (intArg3 == 1) {
                        mes("You may only use this lamp to increase a skill that you learned about while helping Sir Vant.");
                    }
                    return 0;
            }
            break;
    }
    return 1;
}
