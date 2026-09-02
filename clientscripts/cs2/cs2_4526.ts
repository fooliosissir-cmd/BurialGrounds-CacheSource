/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4526

function cs2_4526(intArg0: component, intArg1: struct): void {
    if (intArg0 == -1 || intArg1 == -1) {
        return;
    }
    let int2: number = structParam(intArg1, Param.rs3tli_button_layer_type);

    if (int2 == 2) {
        hookMouseEnter(hook(cs2_4159, "Iii", [event_com, 0, 0]), intArg0);
        hookMouseExit(hook(cs2_4159, "Iii", [event_com, 255, 0]), intArg0);
    } else if (int2 == 3) {
        ifSetOnClick(hook(cs2_4162, "I", [event_com]), intArg0);
        ifSetOnRelease(hook(cs2_4163, "I", [event_com]), intArg0);
        hookMouseExit(hook(cs2_4163, "I", [event_com]), intArg0);
    }
    cs2_4527(intArg0, intArg1);

    if (int2 == 4) {
        cs2_4161(intArg0, 0);
        ifSetHide(true, intArg0);
    }
}
