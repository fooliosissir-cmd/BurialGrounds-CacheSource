/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5262

function cs2_5262(intArg0: number, intArg1: number, intArg2: component): void {
    if (intArg1 == 50) {
        if (intArg0 == 1) {
            switch (intArg2) {
                case Component.interface_1132.component_1132_10:
                    ifSetHide(true, Component.interface_1132.component_1132_22);
                    ifSetHide(true, Component.interface_1132.component_1132_23);
                    ifSetOnTimer(noHook(""), intArg2);
                    break;
                case Component.interface_1132.component_1132_11:
                    ifSetHide(true, Component.interface_1132.component_1132_27);
                    ifSetHide(true, Component.interface_1132.component_1132_28);
                    ifSetOnTimer(noHook(""), intArg2);
                    break;
            }
        } else {
            switch (intArg2) {
                case Component.interface_1132.component_1132_10:
                    ifSetText(tostring(intArg0 - 1), Component.interface_1132.component_1132_23);
                    ifSetOnTimer(hook(cs2_5262, "iiI", [intArg0 - 1, 0, intArg2]), intArg2);
                    break;
                case Component.interface_1132.component_1132_11:
                    ifSetText(tostring(intArg0 - 1), Component.interface_1132.component_1132_28);
                    ifSetOnTimer(hook(cs2_5262, "iiI", [intArg0 - 1, 0, intArg2]), intArg2);
                    break;
            }
        }
    } else {
        switch (intArg2) {
            case Component.interface_1132.component_1132_10:
                ifSetOnTimer(hook(cs2_5262, "iiI", [intArg0, intArg1 + 1, Component.interface_1132.component_1132_10]), intArg2);
                break;
            case Component.interface_1132.component_1132_11:
                ifSetOnTimer(hook(cs2_5262, "iiI", [intArg0, intArg1 + 1, Component.interface_1132.component_1132_11]), intArg2);
                break;
        }
    }
}
