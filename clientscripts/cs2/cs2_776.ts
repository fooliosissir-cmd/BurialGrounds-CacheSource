/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_776

function cs2_776(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let str0: string = "Hello";
    let str1: string = "00:00";
    let str2: string = "1.1x";

    if (varbit_doublexp_setupflag == 1) {
        int0 = varbit_doublexp_timetotal / 60;
        int1 = varbit_doublexp_timetotal % 60;
        int2 = cs2_338(16) / 1000;
        int3 = cs2_338(16) % 1000 / 100;
        if (int1 < 10) {
            if (int0 < 10) {
                str1 = "0" + tostring(int0) + ":0" + tostring(int1);
            } else {
                str1 = tostring(int0) + ":0" + tostring(int1);
            }
        } else if (int0 < 10) {
            str1 = "0" + tostring(int0) + ":" + tostring(int1);
        } else {
            str1 = tostring(int0) + ":" + tostring(int1);
        }
        str2 = tostring(int2) + "." + tostring(int3) + "x";
        str0 = "Multiplier: " + "<col=ff0000>" + str2 + "</col>" + "<br>" + "Elapsed: " + "<col=ff0000>" + str1 + "</col>" + "<br>" + "Bonus: " + "<col=ff0000>" + tostring(varp_1878 / 10) + "xp" + "</col>";
        ifSetOnMouseOver(hook(cs2_5647, "s", [str0]), Component.interface_1215.component_1215_1);
        hookMouseExit(hook(cs2_5648, "", []), Component.interface_1215.component_1215_1);
    }
}
