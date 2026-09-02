/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,carni_treasurechest_side_init]

function carni_treasurechest_side_init(intArg0: component): void {
    let int1: number = invSize(93);
    let int2: number = (ifGetWidth(intArg0) - 4 * 36) / 3;
    let int3: number = (ifGetHeight(intArg0) - 7 * 32) / 6;
    let int4: number = 0;

    while (int4 < int1) {
        ccCreate(intArg0, 5, int4);
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int4 % 4 * (36 + int2), int4 / 4 * (32 + int3), 0, 0);
        ccSetGraphicShadow(3153952);
        ccSetOutline(1);
        int4 = int4 + 1;
    }
    ifSetOnInvTransmit(hook(clientscript_carni_treasurechest_side_refresh, "IiY", [event_com, int1], [93]), intArg0);
    proc_carni_treasurechest_side_refresh(intArg0, int1);
}
