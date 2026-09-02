/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2042

function cs2_2042(intArg0: stat, intArg1: number, intArg2: number): [string, obj, number] {
    let str0: string = "null";
    let int3: obj = -1;
    let int4: number = 1;

    if (cs2_1024(intArg2) == 0) {
        str0 = "<col=000080>" + "130 combined levels in " + "<col=800000>" + "Attack and Strength" + "<col=000080>" + " is one of the requirements for " + "<col=800000>" + enumString(Enum.enum_1481, intArg2) + "<col=000080>" + ".";
    } else {
        str0 = "<col=000080>" + "You now have all the levels necessary to complete " + "<col=800000>" + enumString(Enum.enum_1481, intArg2) + "<col=000080>" + ".";
    }

    if (int3 == -1) {
        int3 = Obj.obj_6513;
    }
    return [str0, int3, int4];
}
