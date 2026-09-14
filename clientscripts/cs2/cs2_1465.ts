/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1465

function cs2_1465(): void {
    let str0: string = "Total number of " + "<col=ba1626>" + "free" + "</col>" + " bank slots used";
    let str1: string = "Total number of " + "<col=ba1626>" + "member" + "</col>" + " bank slots used";
    let str2: string = "Total number of " + "<col=ba1626>" + "demo" + "</col>" + " bank slots used";
    let int0: number = cs2_1329();
    let int1: number = cs2_1248() - int0;
    let int2: number = varc_1038;
    let int3: number = varc_192 - int2;
    let int4: number = (int0 - int2) * -1;
    let int5: number = int3 - (713 - 1);

    ifSetHide(false, Component.interface_762.component_762_22);
    ifSetHide(true, Component.interface_762.component_762_23);

    if (int5 > 0) {
        int2 = int2 + int5;
        int3 = 713 - 1;
        if (int5 == 1) {
            str0 = "Total number of " + "<col=ba1626>" + "free" + "</col>" + " bank slots used" + "<br>" + "<col=ba1626>" + "Note: this includes an overflow of 1 member item" + "</col>";
        } else {
            str0 = "Total number of " + "<col=ba1626>" + "free" + "</col>" + " bank slots used" + "<br>" + "<col=ba1626>" + "Note: this includes an overflow of " + tostring(int5) + " member items" + "</col>";
        }
        str1 = "Total number of " + "<col=ba1626>" + "member" + "</col>" + " bank slots used";
    } else if (int4 > 0) {
        int3 = int3 + int4;
        int2 = int0;
        str0 = "Total number of " + "<col=ba1626>" + "free" + "</col>" + " bank slots used";
        if (int4 == 1) {
            str1 = "Total number of " + "<col=ba1626>" + "member" + "</col>" + " bank slots used" + "<br>" + "<col=ba1626>" + "Note: this includes an overflow of 1 free item" + "</col>";
        } else {
            str1 = "Total number of " + "<col=ba1626>" + "member" + "</col>" + " bank slots used" + "<br>" + "<col=ba1626>" + "Note: this includes an overflow of " + tostring(int4) + " free items" + "</col>";
        }
    }
    ifSetText(tostring(int2), Component.interface_762.component_762_29);
    ifSetText(tostring(int3), Component.interface_762.component_762_31);
    ifSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_762.component_762_121, str0, 25, 150]), Component.interface_762.component_762_29);
    ifSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_762.component_762_121, str1, 25, 150]), Component.interface_762.component_762_31);
    ifSetText(tostring(int0), Component.interface_762.component_762_30);
    ifSetText(tostring(int1), Component.interface_762.component_762_32);
}
