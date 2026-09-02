/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_497

function cs2_497(): void {
    let int0: graphic = Graphic.emotes_40;
    let int1: graphic = Graphic.emotes_40;
    let int2: graphic = Graphic.emotes_40;
    let int3: graphic = Graphic.emotes_40;
    let str0: string = "";
    let str1: string = "";
    let str2: string = "";
    let str3: string = "";

    if (varc_1367 != -1) {
        int0 = npcParam(varc_1367, Param.conq_unit_movement);
        if (varc_1368 > int0) {
            str0 = "Movement: " + "<col=00c800>" + tostring(varc_1368) + "<col=ff981f>" + "/" + tostring(int0);
        } else if (varc_1368 < int0) {
            str0 = "Movement: " + "<col=c80000>" + tostring(varc_1368) + "<col=ff981f>" + "/" + tostring(int0);
        } else {
            str0 = "Movement: " + tostring(varc_1368) + "/" + tostring(int0);
        }
        int1 = npcParam(varc_1367, Param.conq_unit_damage);
        if (varc_1369 > int1) {
            str1 = "Damage: " + "<col=00c800>" + tostring(varc_1369 * 100) + "<col=ff981f>" + "/" + tostring(int1 * 100);
        } else if (varc_1369 < int1) {
            str1 = "Damage: " + "<col=c80000>" + tostring(varc_1369 * 100) + "<col=ff981f>" + "/" + tostring(int1 * 100);
        } else {
            str1 = "Damage: " + tostring(varc_1369 * 100) + "/" + tostring(int1 * 100);
        }
        int2 = npcParam(varc_1367, Param.conq_unit_health);
        if (varc_1370 > int2) {
            str2 = "Health: " + "<col=00c800>" + tostring(varc_1370 * 100) + "<col=ff981f>" + "/" + tostring(int2 * 100);
        } else if (varc_1370 < int2) {
            str2 = "Health: " + "<col=c80000>" + tostring(varc_1370 * 100) + "<col=ff981f>" + "/" + tostring(int2 * 100);
        } else {
            str2 = "Health: " + tostring(varc_1370 * 100) + "/" + tostring(int2 * 100);
        }
        int3 = npcParam(varc_1367, Param.conq_unit_range);
        if (varc_1371 > int3) {
            str3 = "Range: " + "<col=00c800>" + tostring(varc_1371) + "<col=ff981f>" + "/" + tostring(int3);
        } else if (varc_1371 < int3) {
            str3 = "Range: " + "<col=c80000>" + tostring(varc_1371) + "<col=ff981f>" + "/" + tostring(int3);
        } else {
            str3 = "Range: " + tostring(varc_1371) + "/" + tostring(int3);
        }
        ifSetText(str0, Component.interface_1012.component_1012_8);
        ifSetText(str1, Component.interface_1012.component_1012_9);
        ifSetText(str2, Component.interface_1012.component_1012_10);
        ifSetText(str3, Component.interface_1012.component_1012_11);
    }
}
