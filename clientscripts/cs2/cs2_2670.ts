/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2670

function cs2_2670(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: number): void {
    let int9: graphic = Graphic.graphic_952;
    let int10: graphic = Graphic.graphic_953;

    if (intArg8 == 0) {
        varc_91 = 0;
        ifSetHide(true, intArg0);
        ifSetHide(true, intArg4);
        ifSetHide(false, intArg1);
        ifSetHide(true, intArg6);
        ifClearops(intArg3);
        ifSetOnOpt(noHook(""), intArg3);
        ifSetGraphic(int10, intArg7);
        ifSetGraphic(int10, intArg5);
        ifSetGraphic(int10, intArg2);
        ifSetGraphic(int9, intArg3);
        hookMouseEnter(noHook(""), intArg3);
        hookMouseExit(noHook(""), intArg3);
        ifSetOp(1, "Clan", intArg2);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 1]), intArg2);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg2);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg2);
        ifSetOp(1, "Friend", intArg5);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 2]), intArg5);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg5);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg5);
        ifSetOp(1, "Guest", intArg7);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 3]), intArg7);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg7);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg7);
    } else if (intArg8 == 1) {
        varc_91 = 1;
        ifSetHide(false, intArg0);
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg4);
        ifSetHide(true, intArg6);
        ifClearops(intArg2);
        ifSetOnOpt(noHook(""), intArg2);
        ifSetGraphic(int10, intArg7);
        ifSetGraphic(int10, intArg5);
        ifSetGraphic(int9, intArg2);
        ifSetGraphic(int10, intArg3);
        hookMouseEnter(noHook(""), intArg2);
        hookMouseExit(noHook(""), intArg2);
        ifSetOp(1, "Private", intArg3);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 0]), intArg3);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg3);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg3);
        ifSetOp(1, "Friend", intArg5);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 2]), intArg5);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg5);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg5);
        ifSetOp(1, "Guest", intArg7);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 3]), intArg7);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg7);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg7);
    } else if (intArg8 == 2) {
        varc_91 = 2;
        ifSetHide(false, intArg4);
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg0);
        ifSetHide(true, intArg6);
        ifClearops(intArg5);
        ifSetOnOpt(noHook(""), intArg5);
        ifSetGraphic(int10, intArg7);
        ifSetGraphic(int9, intArg5);
        ifSetGraphic(int10, intArg2);
        ifSetGraphic(int10, intArg3);
        hookMouseEnter(noHook(""), intArg5);
        hookMouseExit(noHook(""), intArg5);
        ifSetOp(1, "Private", intArg3);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 0]), intArg3);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg3);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg3);
        ifSetOp(1, "Clan", intArg2);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 1]), intArg2);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg2);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg2);
        ifSetOp(1, "Guest", intArg7);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 3]), intArg7);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg7);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg7);
    } else {
        varc_91 = 3;
        ifSetHide(false, intArg6);
        ifSetHide(true, intArg1);
        ifSetHide(true, intArg0);
        ifSetHide(true, intArg4);
        ifClearops(intArg7);
        ifSetOnOpt(noHook(""), intArg7);
        ifSetGraphic(int9, intArg7);
        ifSetGraphic(int10, intArg5);
        ifSetGraphic(int10, intArg2);
        ifSetGraphic(int10, intArg3);
        hookMouseEnter(noHook(""), intArg7);
        hookMouseExit(noHook(""), intArg7);
        ifSetOp(1, "Private", intArg3);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 0]), intArg3);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg3);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg3);
        ifSetOp(1, "Clan", intArg2);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 1]), intArg2);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg2);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg2);
        ifSetOp(1, "Friend", intArg5);
        ifSetOnOpt(hook(cs2_2649, "IIIIIIIIi", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, 2]), intArg5);
        hookMouseEnter(hook(graphic_swapper, "Id", [event_com, int9]), intArg5);
        hookMouseExit(hook(graphic_swapper, "Id", [event_com, int10]), intArg5);
    }
}
