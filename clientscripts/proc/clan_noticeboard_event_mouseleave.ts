/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_noticeboard_event_mouseleave]

function proc_clan_noticeboard_event_mouseleave(intArg0: component, intArg1: number): void {
    if (ifGetGraphic(intArg0) == Graphic.aif_notetabs_4) {
        return;
    }

    if (intArg1 == varp_clan_event_current_varp) {
        ifSetGraphic(Graphic.aif_notetabs_3, intArg0);
    } else {
        ifSetGraphic(Graphic.aif_notetabs_0, intArg0);
    }
}
