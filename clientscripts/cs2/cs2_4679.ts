/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4679

function cs2_4679(): void {
    if (enumOp(type_int, type_int, Enum.deadly_hunting_energydrainrate, varc_1535) < 1) {
        ifSetPosition(10, 26, 0, 0, Component.interface_302.component_302_23);
        ifSetHide(true, Component.interface_302.component_302_24);
        ifSetText("Difficulty: " + tostring(varc_1535) + "/10", Component.interface_302.component_302_11);
    } else {
        ifSetHide(false, Component.interface_302.component_302_24);
        ifSetText("Difficulty: " + tostring(varc_1535) + "/10", Component.interface_302.component_302_11);
    }
}
