/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6368

function cs2_6368(intArg0: component): void {
    let int1: component = cs2_6357(intArg0);

    let [int2, int3] = cs2_6348(intArg0);

    if (int2 != -1) {
        ifSetSize(0, 0, 0, 0, cs2_6358(int1));
        ifSetOnTimer(hook(clientscript_if_highlight_component, "iI", [intArg0, event_com]), int1);
    } else {
        if_highlight_clear(intArg0, int1);
    }
}
