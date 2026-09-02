/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2146

function cs2_2146(intArg0: stat, intArg1: number, intArg2: number, intArg3: number, strArg0: string): [string, number, number] {
    let str1: string = "null";
    let int4: number = -1;
    let int5: number = 1;

    if (ql4_skill_requirements(intArg1, intArg3) == 0) {
        str1 = "<col=000080>" + "Level " + tostring(intArg2) + " " + "<col=800000>" + enumOp(type_stat, type_string, Enum.stat_to_string, intArg0) + "<col=000080>" + " is one of the requirements for " + "<col=800000>" + strArg0 + "<col=000080>" + ".";
    } else {
        str1 = "<col=000080>" + "You have all of the levels required to complete " + "<col=800000>" + strArg0 + "<col=000080>" + ".";
    }

    if (int4 == -1) {
        int4 = 6513;
    }
    return [str1, int4, int5];
}
