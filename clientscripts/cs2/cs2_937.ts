/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_937

function cs2_937(): void {
    ccDeleteAll(Component.interface_335.component_335_34);
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 4;
    let int3: number = 7;

    if (ifGetScrollWidth(Component.interface_335.component_335_34) > 0) {
        int0 = (ifGetScrollWidth(Component.interface_335.component_335_34) - 36 * int2) / (int2 - 1);
    } else {
        int0 = (ifGetWidth(Component.interface_335.component_335_34) - 36 * int2) / (int2 - 1);
    }

    if (ifGetScrollHeight(Component.interface_335.component_335_34) > 0) {
        int1 = (ifGetScrollHeight(Component.interface_335.component_335_34) - 32 * int3) / (int3 - 1);
    } else {
        int1 = (ifGetHeight(Component.interface_335.component_335_34) - 32 * int3) / (int3 - 1);
    }
    let int4: number = 0;
    let int5: number = -1;

    while (int4 < invSize(90)) {
        ccCreate(Component.interface_335.component_335_34, 3, int4);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition((36 + int0) * (int4 % int2), int4 / int2 * (32 + int1), 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0xFF0000));
        ccSetTrans(255);
        int4 = int4 + 1;
    }
    ifSetOnInvTransmit(hook(cs2_938, "Y", [], [90]), Component.interface_335.component_335_34);
}
