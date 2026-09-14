/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_186

function cs2_186(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: graphic, intArg5: graphic, intArg6: graphic, intArg7: graphic, intArg8: graphic, intArg9: graphic, intArg10: graphic, intArg11: graphic, intArg12: graphic, intArg13: graphic): void {
    let int14: number = ifGetScrollHeight(intArg1);
    let int15: number = ifGetHeight(intArg0);
    let int16: number = int15 - 32;
    let int17: number = 0;

    if (int14 > 0) {
        int17 = scale(int15, int14, int16);
    } else {
        int17 = int16;
    }
    int17 = max(int17, 20);
    let int18: number = ifGetScrollY(intArg1);
    let int19: number = 0;
    let int20: number = 0;

    if (int18 > 0) {
        int19 = int14 - ifGetHeight(intArg1);
        if (int19 == 0) {
            int19 = 1;
        }
        if (int18 > int19) {
            ifSetScrollPos(0, int19, intArg1);
            int18 = int19;
        }
        int20 = scale(int18, int19, int16 - int17);
        int20 = min(max(int20, 0), int16 - int17);
    }
    ccCreate(intArg0, 5, 0);
    ccSetPosition(0, 21, 0, 0);
    ccSetSize(16, 42, 0, 1);
    ccSetGraphic(intArg3);
    ccSettiling(true);
    ccSetOnClick(hook(cs2_720, "IIi", [intArg0, intArg1, event_mousey]));
    ccCreate(intArg0, 5, 1);
    ccSetPosition(0, 16, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg2);
    ccSetAlpha(true);
    ccSetOnClick(hook(cs2_720, "IIi", [intArg0, intArg1, event_mousey]));
    ccCreate(intArg0, 5, 2);
    ccSetPosition(0, 16, 0, 2);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg4);
    ccSetAlpha(true);
    ccSetOnClick(hook(cs2_720, "IIi", [intArg0, intArg1, event_mousey]));
    ccCreate(intArg0, 5, 3);
    ccSetPosition(0, 16 + int20 + 5, 0, 0);
    ccSetGraphic(intArg6);
    ccSettiling(true);
    ccSetdraggable(intArg0, 0);
    ccSetdragrenderbehaviour(1);
    ccSetSize(16, int17 - 10, 0, 0);
    ccSetOnDrag(hook(cs2_5505, "IIii1", [intArg0, intArg1, event_mousey, 0, false]));
    ccSetOnDragComplete(hook(cs2_5505, "IIii1", [intArg0, intArg1, event_mousey, 0, true]));
    ccCreate(intArg0, 5, 4);
    ccSetPosition(0, 16 + int20, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg5);
    ccSettiling(false);
    ccSetAlpha(true);
    ccSetOnDrag(hook(cs2_5505, "IIii1", [intArg0, intArg1, event_mousey, -5, false]));
    ccSetOnDragComplete(hook(cs2_5505, "IIii1", [intArg0, intArg1, event_mousey, -5, true]));
    ccCreate(intArg0, 5, 5);
    ccSetPosition(0, 16 + int20 + int17 - 5, 0, 0);
    ccSetSize(16, 5, 0, 0);
    ccSetGraphic(intArg7);
    ccSettiling(false);
    ccSetAlpha(true);
    ccSetOnDrag(hook(cs2_5505, "IIii1", [intArg0, intArg1, event_mousey, int17, false]));
    ccSetOnDragComplete(hook(cs2_5505, "IIii1", [intArg0, intArg1, event_mousey, int17, true]));
    ccCreate(intArg0, 5, 6);
    ccSetPosition(0, 0, 0, 0);
    ccSetSize(16, 16, 0, 0);
    ccSetGraphic(intArg8);
    ccSettiling(false);
    ccSetAlpha(true);
    ccSetOnHold(hook(cs2_187, "II", [intArg0, intArg1]));
    ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [event_com, 6, intArg10]));
    ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, 6, intArg8]));
    ccSetOnClick(hook(graphic_swapper_dynamic, "Iid", [event_com, 6, intArg12]));
    ccCreate(intArg0, 5, 7);
    ccSetPosition(0, 0, 0, 2);
    ccSetSize(16, 16, 0, 0);
    ccSetGraphic(intArg9);
    ccSettiling(false);
    ccSetAlpha(true);
    ccSetOnHold(hook(cs2_189, "II", [intArg0, intArg1]));
    ccSetOnMouseOver(hook(graphic_swapper_dynamic, "Iid", [event_com, 7, intArg11]));
    ccSetOnMouseLeave(hook(graphic_swapper_dynamic, "Iid", [event_com, 7, intArg9]));
    ccSetOnClick(hook(graphic_swapper_dynamic, "Iid", [event_com, 7, intArg13]));
    ifSetOnScrollWheel(hook(cs2_5506, "IIi", [intArg0, intArg1, event_mousey]), intArg0);
    ifSetOnScrollWheel(hook(cs2_5506, "IIi", [intArg0, intArg1, event_mousey]), intArg1);
}
