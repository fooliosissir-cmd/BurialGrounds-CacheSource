/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5561

function cs2_5561(intArg0: obj, intArg1: number): void {
    let str0: string = "null";

    let [str1, int2] = cs2_5564(intArg0);

    if (intArg1 == 0) {
        str0 = "-";
        int2 = colour(0xFF0000);
    } else if (intArg1 == 1) {
        str0 = "+";
    }

    if (ifGetHide(Component.interface_746.component_746_205) == 0) {
        ifSetText(append(str0, str1), Component.interface_746.component_746_214);
        ifSetColour(int2, Component.interface_746.component_746_214);
        ifSetHide(false, Component.interface_746.component_746_213);
        ifSetOnTimer(hook(money_pouch_anim_move, "i", [clientClock()]), Component.interface_746.component_746_213);
    }

    if (ifGetHide(Component.interface_548.component_548_198) == 0) {
        ifSetText(append(str0, str1), Component.interface_548.component_548_203);
        ifSetColour(int2, Component.interface_548.component_548_203);
        ifSetHide(false, Component.interface_548.component_548_202);
        ifSetOnTimer(hook(money_pouch_anim_move, "i", [clientClock()]), Component.interface_548.component_548_202);
    }

    if (intArg1 == 0) {
        ifSetHide(true, Component.interface_746.component_746_211);
        ifSetHide(false, Component.interface_746.component_746_210);
        ifSetOnTimer(hook(cs2_5563, "iI", [clientClock(), Component.interface_746.component_746_210]), Component.interface_746.component_746_208);
        ifSetHide(false, Component.interface_548.component_548_34);
        ifSetOnTimer(hook(cs2_5563, "iI", [clientClock(), Component.interface_548.component_548_34]), Component.interface_548.component_548_167);
    } else if (intArg1 == 1) {
        ifSetHide(true, Component.interface_746.component_746_210);
        ifSetHide(false, Component.interface_746.component_746_211);
        ifSetOnTimer(hook(cs2_5563, "iI", [clientClock(), Component.interface_746.component_746_211]), Component.interface_746.component_746_208);
        ifSetHide(false, Component.interface_548.component_548_33);
        ifSetOnTimer(hook(cs2_5563, "iI", [clientClock(), Component.interface_548.component_548_33]), Component.interface_548.component_548_167);
    }
}
