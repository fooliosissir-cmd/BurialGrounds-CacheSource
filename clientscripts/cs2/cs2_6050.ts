/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6050

function cs2_6050(): void {
    let int0: component = Component.interface_1253.component_1253_82;
    let int1: number = scale_round(varc_1801, 360, 65535);

    ifSet2dangle(int1, int0);
    ifSetOnTimer(hook(cs2_5883, "iiii", [0, 0, 0, 0]), Component.interface_1253.component_1253_82);
    ifSetOnTimer(hook(cs2_5912, "i", [varc_1802]), Component.interface_1253.component_1253_52);
    ifSetHide(true, Component.interface_1253.component_1253_37);
}
