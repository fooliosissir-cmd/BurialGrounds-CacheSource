/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4351

function cs2_4351(intArg0: component): void {
    if (varbit_clan_event_vexillum_varp == varp_clan_event_current_varp) {
        varbit_clan_event_vexillum_varp = 0;
    } else {
        varbit_clan_event_vexillum_varp = varp_clan_event_current_varp;
    }
    cs2_4353(intArg0);
}
