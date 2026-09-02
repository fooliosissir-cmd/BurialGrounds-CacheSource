/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scrollbar_vertical_2]

function proc_scrollbar_vertical_2(intArg0: component, intArg1: component, intArg2: component, intArg3: graphic, intArg4: graphic, intArg5: graphic, intArg6: graphic, intArg7: graphic, intArg8: graphic): void {
    let int9: number = ifGetScrollHeight(intArg1);
    let int10: number = ifGetHeight(intArg0);
    let int11: number = int10 - 32;
    let int12: number = 0;

    if (int9 > 0) {
        int12 = scale(int10, int9, int11);
    } else {
        int12 = int11;
    }
    int12 = max(int12, 10);
    let int13: number = ifGetScrollY(intArg1);
    let int14: number = 0;
    let int15: number = 0;

    if (int13 > 0) {
        int14 = int9 - ifGetHeight(intArg1);
        if (int14 == 0) {
            int14 = 1;
        }
        if (int13 > int14) {
            ifSetScrollPos(0, int14, intArg1);
            ifSetScrollPos(0, int14, intArg2);
            int13 = int14;
        }
        int15 = scale(int13, int14, int11 - int12);
        int15 = min(max(int15, 0), int11 - int12);
    }
    ccCreate(intArg0, 5, 0);
    ccSetPosition(0, 16, 0, 0);
    ccSetSize(16, 32, 0, 1);
    ccSetGraphic(intArg3);
    ccSettiling(true);
    ccSetOnClick(hook(scrollbar_vertical_jump_2, "IIIi", [intArg0, intArg1, intArg2, event_mousey]));
    ccCreate(intArg0, 5, 1);
    ccSetPosition(0, 16 + int15, 0, 0);
    ccSetGraphic(intArg5);
    ccSettiling(true);
    ccSetdraggable(intArg0, 0);
    ccSetdragrenderbehaviour(1);
    ccSetSize(16, int12, 0, 0);
    ccSetOnDrag(hook(scrollbar_vertical_drag_2, "IIIi1", [intArg0, intArg1, intArg2, event_mousey, false]));
    ccSetOnDragComplete(hook(scrollbar_vertical_drag_2, "IIIi1", [intArg0, intArg1, intArg2, event_mousey, true]));
    ccCreate(intArg0, 5, 2);
    ccSetPosition(0, 16 + int15, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg4);
    ccSettiling(false);
    ccCreate(intArg0, 5, 3);
    ccSetPosition(0, 16 + int15 + int12 - 5, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg6);
    ccSettiling(false);
    ccCreate(intArg0, 5, 4);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(16, 16, 0, 0);
    ccSetGraphic(intArg7);
    ccSettiling(false);
    ccSetOnHold(hook(cs2_3291, "III", [intArg0, intArg1, intArg2]));
    ccCreate(intArg0, 5, 5);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(16, 16, 0, 0);
    ccSetGraphic(intArg8);
    ccSettiling(false);
    ccSetOnHold(hook(cs2_3292, "III", [intArg0, intArg1, intArg2]));
    ifSetOnScrollWheel(hook(scrollbar_vertical_wheel_2, "IIIi", [intArg0, intArg1, intArg2, event_mousey]), intArg0);
    ifSetOnScrollWheel(hook(scrollbar_vertical_wheel_2, "IIIi", [intArg0, intArg1, intArg2, event_mousey]), intArg1);
    ifSetOnScrollWheel(hook(scrollbar_vertical_wheel_2, "IIIi", [intArg0, intArg1, intArg2, event_mousey]), intArg2);
}
