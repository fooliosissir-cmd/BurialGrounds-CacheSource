/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6435

function cs2_6435(intArg0: component): void {
    if (varp_2664 != -1) {
        cs2_5335(intArg0, -1, Component.interface_1309.component_1309_0, "You are already in a group.", 60, 200, 1);
    } else if (varp_2662 != -1) {
        cs2_5335(intArg0, -1, Component.interface_1309.component_1309_0, "You are already being invited to a group.", 60, 200, 1);
    } else {
        cs2_5335(intArg0, -1, Component.interface_1309.component_1309_0, "You are already inviting someone to a group.", 60, 200, 1);
    }
}
