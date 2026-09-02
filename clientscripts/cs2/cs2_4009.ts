/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4009

function cs2_4009(intArg0: number, intArg1: number, intArg2: component, intArg3: number): void {
    if (intArg3 == -1) {
        cs2_5780(intArg0, intArg1, intArg2);
    } else {
        cs2_5781(intArg0, intArg1, intArg2, intArg3);
    }

    if (intArg0 == 0) {
        deltooltip_action(Component.interface_917.component_917_111);
        deltooltip_action(Component.interface_1220.component_1220_28);
        deltooltip_action(Component.interface_1221.component_1221_22);
        deltooltip_action(Component.interface_1056.component_1056_131);
    }
}
