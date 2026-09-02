/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5261

function cs2_5261(intArg0: component): void {
    switch (intArg0) {
        case Component.interface_1132.component_1132_10:
            ifSetHide(false, Component.interface_1132.component_1132_22);
            ifSetText("4", Component.interface_1132.component_1132_23);
            ifSetHide(false, Component.interface_1132.component_1132_23);
            ifSetOnTimer(hook(cs2_5262, "iiI", [4, 0, Component.interface_1132.component_1132_10]), intArg0);
            break;
        case Component.interface_1132.component_1132_11:
            ifSetHide(false, Component.interface_1132.component_1132_27);
            ifSetText("2", Component.interface_1132.component_1132_28);
            ifSetHide(false, Component.interface_1132.component_1132_28);
            ifSetOnTimer(hook(cs2_5262, "iiI", [2, 0, Component.interface_1132.component_1132_11]), intArg0);
            break;
    }
}
