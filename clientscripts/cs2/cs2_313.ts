/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_313

function cs2_313(intArg0: component): void {
    ifSetOnOp(hook(cs2_353, "1", [true]), Component.interface_1028.component_1028_139);
    ifSetOnOp(hook(cs2_353, "1", [false]), Component.interface_1028.component_1028_137);
    ifSetOnOp(hook(cs2_350, "i1", [event_opindex, false]), Component.interface_1028.component_1028_62);
    ifSetOnOp(hook(cs2_350, "i1", [event_opindex, true]), Component.interface_1028.component_1028_63);
    cs2_385(-1);
    let str0: string = ifGetOp(1, Component.interface_1028.component_1028_123);
    cs2_368(Component.interface_1028.component_1028_123, str0, stringWidth(str0, Graphic.p12_full) + 30, "");
    ifSetOnOp(hook(cs2_358, "i", [event_opindex]), Component.interface_1028.component_1028_123);
    ifSetOnOp(hook(cs2_354, "ii", [event_opindex, 0]), Component.interface_1028.component_1028_116);
    ifSetOnOp(hook(cs2_354, "ii", [event_opindex, 1]), Component.interface_1028.component_1028_117);
    ifSetOnOp(hook(cs2_354, "ii", [event_opindex, 2]), Component.interface_1028.component_1028_121);
    ifSetOnOp(hook(cs2_354, "ii", [event_opindex, 3]), Component.interface_1028.component_1028_118);
    ifSetOnOp(hook(cs2_354, "ii", [event_opindex, 6]), Component.interface_1028.component_1028_119);
    ifSetOnOp(hook(cs2_354, "ii", [event_opindex, 7]), Component.interface_1028.component_1028_120);
    ifSetPlayerModelSelf(Component.interface_1028.component_1028_133);
    ifSetModelAngle(-30, 135, 18, 4, 0, 325, Component.interface_1028.component_1028_133);
    ifSetModelAngle(-30, 135, 18, 4, 0, 325, Component.interface_1028.component_1028_134);
    varc_196 = varbit_8093;
    varc_197 = varbit_playerdesign4_role;
    varc_86 = varbit_playerdesign4_outfit;
    varc_1020 = varbit_6501;
    cs2_386(false);
    ifSetOnVarTransmit(hook(playerdesign4_vartransmit, "Y", [], [1158, 1363]), intArg0);
    ifSetOnVarcTransmit(hook(cs2_349, "Y", [], [1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019]), intArg0);
}
