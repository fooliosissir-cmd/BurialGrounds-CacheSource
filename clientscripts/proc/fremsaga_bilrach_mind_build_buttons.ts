/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_bilrach_mind_build_buttons]

function fremsaga_bilrach_mind_build_buttons(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    let int6: number = 80;
    let int7: number = 40;
    let int8: number = 20;
    let str0: string = "Place beacon";

    ccCreate(Component.interface_1270.component_1270_122, 3, 0);
    ccSetSize(int6, int6, 0, 0);
    ccSetPosition(intArg0 - int7, intArg1 - int7, 0, 0);
    fremsaga_bilrach_mind_set_button(str0);
    ccCreate(Component.interface_1270.component_1270_122, 3, 1);
    ccSetSize(int7, int7, 0, 0);
    ccSetPosition(intArg0 - int8, intArg1 - int8, 0, 0);
    fremsaga_bilrach_mind_set_button(str0);
    ccCreate(Component.interface_1270.component_1270_123, 3, 0);
    ccSetSize(int6, int6, 0, 0);
    ccSetPosition(intArg2 - int7, intArg3 - int7, 0, 0);
    fremsaga_bilrach_mind_set_button(str0);
    ccCreate(Component.interface_1270.component_1270_123, 3, 1);
    ccSetSize(int7, int7, 0, 0);
    ccSetPosition(intArg2 - int8, intArg3 - int8, 0, 0);
    fremsaga_bilrach_mind_set_button(str0);
    ccCreate(Component.interface_1270.component_1270_124, 3, 0);
    ccSetSize(int6, int6, 0, 0);
    ccSetPosition(intArg4 - int7, intArg5 - int7, 0, 0);
    fremsaga_bilrach_mind_set_button(str0);
    ccCreate(Component.interface_1270.component_1270_124, 3, 1);
    ccSetSize(int7, int7, 0, 0);
    ccSetPosition(intArg4 - int8, intArg5 - int8, 0, 0);
    fremsaga_bilrach_mind_set_button(str0);
}
