/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_207

function cs2_207(intArg0: number, intArg1: number, intArg2: obj): string {
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";

    if (ocStackable(intArg2) == 0) {
        str2 = append(str2, "<col=ff9040>" + ocName(intArg2) + " " + "<col=ffffff>" + "x " + "<col=fff000>" + tostring(intArg1) + "<br>");
    } else if (intArg1 < 100000) {
        str0 = tostringLocalised(intArg1, 1);
        str2 = append(str2, "<col=ff9040>" + ocName(intArg2) + "<col=ffffff>" + " x " + "<col=ffff00>" + str0 + "<br>");
    } else if (intArg1 < 10000000) {
        str0 = tostringLocalised(intArg1, 1);
        str1 = tostringLocalised(intArg1 / 1000, 1);
        str2 = append(str2, "<col=ff9040>" + ocName(intArg2) + "<col=ffffff>" + " x " + "<col=ffffff>" + str1 + "K (" + str0 + ")" + "<br>");
    } else {
        str0 = tostringLocalised(intArg1, 1);
        str1 = tostringLocalised(intArg1 / 1000000, 1);
        str2 = append(str2, "<col=ff9040>" + ocName(intArg2) + "<col=ffffff>" + " x " + "<col=00ff80>" + str1 + "M (" + str0 + ")" + "<br>");
    }
    return str2;
}
