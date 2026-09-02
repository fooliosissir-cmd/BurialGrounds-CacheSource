/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_308

function cs2_308(intArg0: component): void {
    ifSetOnKey(hook(worldmap_onkey, "izIc", [event_keycode, event_keychar, intArg0, -1]), intArg0);
    ifSetText("Search the map by typing here.", intArg0);
    ifSetTextAlign(0, 1, 0, intArg0);
}
