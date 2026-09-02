/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,if_highlight_component]

function proc_if_highlight_component(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    if (intArg0 != -1 && ((intArg1 == -1 && ifFind(intArg0) == 1) || ccFind(intArg0, intArg1) == 1)) {
        if (cs2_6353() == 1) {
            if_highlight_cc(intArg3);
            return;
        }
    }
    if_highlight_clear(intArg2, intArg3);
}
