/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_rcw_time_updated]

function clan_rcw_time_updated(): void {
    let int0: number = varbit_clan_rcw_time * 6 / 10;
    let str0: string = tostring(int0 / 60);
    let str1: string = tostring(int0 % 60);

    if (stringLength(str1) < 2) {
        str1 = append("0", str1);
    }

    if (varbit_clan_rcw_barrierdown == 0) {
        ifSetText("Match Starts In:", Component.interface_1088.component_1088_12);
        ifSetText(str0 + ":" + str1, Component.interface_1088.component_1088_13);
    } else {
        ifSetText("Time Remaining:", Component.interface_1088.component_1088_12);
        ifSetText(str0 + ":" + str1, Component.interface_1088.component_1088_13);
    }
}
