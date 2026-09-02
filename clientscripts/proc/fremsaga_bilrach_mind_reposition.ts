/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_bilrach_mind_reposition]

function fremsaga_bilrach_mind_reposition(intArg0: number, intArg1: number): void {
    let int2: number = ifGetWidth(Component.interface_1270.component_1270_34);
    let int3: number = ifGetHeight(Component.interface_1270.component_1270_34);
    let int4: component = -1;
    let int5: number = 0;
    let int6: number = 14;
    let int7: number = int2 / 2;
    let int8: number = int3 / 2;
    let int9: number = -100 * (intArg0 - int7) / int7;
    let int10: number = -100 * (intArg1 - int8) / int8;
    let int11: number = 0;
    let int12: number = 0;

    while (int5 <= int6) {
        int4 = cs2_6139(int5);
        int11 = (ifGetWidth(int4) - int2) / 2;
        int12 = (ifGetHeight(int4) - int3) / 2;
        int11 = int9 * int11 / 100;
        int12 = int10 * int12 / 100;
        ifSetPosition(int11, int12, 1, 1, int4);
        int5 = int5 + 1;
    }
}
