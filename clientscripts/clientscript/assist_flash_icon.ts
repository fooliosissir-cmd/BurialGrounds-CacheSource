/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,assist_flash_icon]

function assist_flash_icon(intArg0: number, intArg1: number): void {
    let int2: number = 0;
    let int3: number = intArg1 + 25;
    let int4: number = clientClock() - intArg0;

    if (clientClock() >= intArg1) {
        if (clientClock() < int3) {
            int2 = 255 / (int3 - intArg1);
            int2 = 255 - int2 * (clientClock() - intArg1);
            ifSetTrans(int2, Component.interface_745.component_745_2);
            return;
        } else {
            ifSetOnTimer(noHook(""), Component.interface_745.component_745_2);
            ifSetTrans(0, Component.interface_745.component_745_2);
            return;
        }
    } else if (int4 <= 5) {
        ifSetTrans(0, Component.interface_745.component_745_2);
    } else if (int4 <= 10) {
        ifSetTrans(85, Component.interface_745.component_745_2);
    } else if (int4 <= 15) {
        ifSetTrans(200, Component.interface_745.component_745_2);
    } else {
        ifSetTrans(85, Component.interface_745.component_745_2);
    }
}
