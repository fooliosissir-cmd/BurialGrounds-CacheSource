/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5354

function cs2_5354(intArg0: component, intArg1: number, intArg2: graphic, intArg3: graphic, intArg4: graphic, intArg5: graphic, intArg6: graphic): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (varbit_10914 >= 30) {
            return;
        }
        ccSetGraphic(intArg2);
        if (intArg2 == intArg3) {
            ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [intArg0, intArg1, intArg3]));
            ccHookMouseExit(hook(graphic_swapper_child, "Iid", [intArg0, intArg1, intArg4]));
        } else {
            ccHookMouseEnter(hook(graphic_swapper_child, "Iid", [intArg0, intArg1, intArg5]));
            ccHookMouseExit(hook(graphic_swapper_child, "Iid", [intArg0, intArg1, intArg6]));
        }
    }
}
