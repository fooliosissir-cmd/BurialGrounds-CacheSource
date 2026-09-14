/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1671

function cs2_1671(intArg0: component, intArg1: number): void {
    let str0: string = "Empty display";

    switch (intArg1) {
        case 0:
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_81.component_81_40, str0, 25, 180]), intArg0);
            break;
        case 1:
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_83.component_83_40, str0, 25, 180]), intArg0);
            break;
        case 2:
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_80.component_80_52, str0, 25, 180]), intArg0);
            break;
        case 3:
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [event_com, Component.interface_82.component_82_38, str0, 25, 180]), intArg0);
            break;
    }
}
