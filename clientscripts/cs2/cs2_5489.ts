/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5489

function cs2_5489(intArg0: number, intArg1: number): void {
    let int2: number = 0;

    switch (getCurrentcursor()) {
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
            int2 = 15;
            break;
        default:
            int2 = 30;
            break;
    }
    let int3: number = 20;
    ifSetSize(intArg0, intArg1, 0, 0, Component.interface_746.component_746_215);
    let int4: number = min(getMouseX() + int2, ifGetWidth(Component.interface_746.component_746_52) - intArg0);
    let int5: number = min(getMouseY() + int3, ifGetHeight(Component.interface_746.component_746_52) - intArg1);
    ifSetPosition(int4, int5, 0, 0, Component.interface_746.component_746_215);
}
