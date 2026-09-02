/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2690

function cs2_2690(intArg0: number): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 5;

    while (ccFind(Component.interface_1022.component_1022_15, int1) == 1) {
        int1 = int1 + 1;
    }

    if (intArg0 > 4) {
        int3 = int3 + 40;
        int2 = (intArg0 - 5) * 40;
    } else {
        int2 = intArg0 * 40;
    }
    int2 = int2 + 17;
    ccCreate(Component.interface_1022.component_1022_15, 5, int1);
    ccSetGraphic(Graphic.exclamation_mark);
    ccSetSize(10, 32, 0, 0);
    ccSetPosition(int2, int3, 0, 0);
    ccSetHide(false);
    ccSetOnTimer(hook(interface_flash_fade, "Iiii", [Component.interface_1022.component_1022_15, int1, clientClock(), clientClock() + 750]));
}
