/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6144

function cs2_6144(intArg0: number): void {
    let int1: number = 1;
    let int2: number = 14;
    let int3: component = -1;

    ifSetHide(true, Component.interface_1270.component_1270_35);

    while (int1 <= int2) {
        int3 = cs2_6139(int1);
        if (ccFind(int3, 0) == 1) {
            ifSetOnTimer(hook(cs2_6145, "Iiiii", [event_com, ccGetX(), ccGetY(), 0 - random(50), intArg0]), int3);
        }
        int1 = int1 + 1;
    }
}
