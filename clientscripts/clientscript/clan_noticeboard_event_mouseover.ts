/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_noticeboard_event_mouseover]

function clan_noticeboard_event_mouseover(intArg0: component): void {
    if (ifGetGraphic(intArg0) == Graphic.aif_notetabs_4) {
        return;
    }
    ifSetGraphic(Graphic.aif_notetabs_1, intArg0);
}
