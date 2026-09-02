/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_446

function cs2_446(intArg0: number, intArg1: obj): string {
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";

    if (ocStackable(intArg1) == 0) {
        str2 = append(str2, "<col=ff981f>" + ocName(intArg1) + "<col=ffffff>" + " x " + "<col=fff000>" + tostring(intArg0) + "<br>");
    } else if (intArg0 < 100000) {
        str0 = tostring_spacer(intArg0, ",");
        str2 = append(str2, "<col=ff981f>" + ocName(intArg1) + "<col=ffffff>" + " x " + "<col=fff000>" + str0 + "<br>");
    } else {
        str0 = tostring_spacer(intArg0, ",");
        str1 = tostring_spacer(intArg0 / 1000, ",");
        str2 = append(str2, "<col=ff981f>" + ocName(intArg1) + "<col=ffffff>" + " x " + "<col=ffffff>" + str1 + "K (" + str0 + ")" + "<br>");
    }
    return str2;
}
