/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,scrollbar_vertical]

function proc_scrollbar_vertical(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: graphic, intArg5: graphic, intArg6: graphic, intArg7: graphic): void {
    let int8: number = ifGetScrollHeight(intArg1);
    let int9: number = ifGetHeight(intArg0);
    let int10: number = int9 - 32;
    let int11: number = 0;

    if (int8 > 0) {
        int11 = scale(int9, int8, int10);
    } else {
        int11 = int10;
    }
    int11 = max(int11, 10);
    let int12: number = ifGetScrollY(intArg1);
    let int13: number = 0;
    let int14: number = 0;

    if (int12 > 0) {
        int13 = int8 - ifGetHeight(intArg1);
        if (int13 == 0) {
            int13 = 1;
        }
        if (int12 > int13) {
            ifSetScrollPos(0, int13, intArg1);
            int12 = int13;
        }
        int14 = scale(int12, int13, int10 - int11);
        int14 = min(max(int14, 0), int10 - int11);
    }
    ccCreate(intArg0, 5, 0);
    ccSetPosition(0, 16, 0, 0);
    ccSetSize(16, 32, 0, 1);
    ccSetGraphic(intArg2);
    ccSettiling(true);
    ccSetOnClick(hook(scrollbar_vertical_jump, "IIi", [intArg0, intArg1, event_mousey]));
    ccCreate(intArg0, 5, 1);
    ccSetPosition(0, 16 + int14, 0, 0);
    ccSetGraphic(intArg4);
    ccSettiling(true);
    ccSetdraggable(intArg0, 0);
    ccSetdragrenderbehaviour(1);
    ccSetSize(16, int11, 0, 0);
    ccSetOnDrag(hook(scrollbar_vertical_drag, "IIi1", [intArg0, intArg1, event_mousey, false]));
    ccSetOnDragComplete(hook(scrollbar_vertical_drag, "IIi1", [intArg0, intArg1, event_mousey, true]));
    ccCreate(intArg0, 5, 2);
    ccSetPosition(0, 16 + int14, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg3);
    ccSettiling(false);
    ccCreate(intArg0, 5, 3);
    ccSetPosition(0, 16 + int14 + int11 - 5, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg5);
    ccSettiling(false);
    ccCreate(intArg0, 5, 4);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(16, 16, 0, 0);
    ccSetGraphic(intArg6);
    ccSettiling(false);
    ccSetOnHold(hook(cs2_32, "II", [intArg0, intArg1]));
    ccCreate(intArg0, 5, 5);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(16, 16, 0, 0);
    ccSetGraphic(intArg7);
    ccSettiling(false);
    ccSetOnHold(hook(cs2_33, "II", [intArg0, intArg1]));
    ifSetOnScrollWheel(hook(scrollbar_vertical_wheel, "IIi", [intArg0, intArg1, event_mousey]), intArg0);
    ifSetOnScrollWheel(hook(scrollbar_vertical_wheel, "IIi", [intArg0, intArg1, event_mousey]), intArg1);
}
