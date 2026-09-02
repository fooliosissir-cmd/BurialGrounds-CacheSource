/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_keep_theatre_actors_restrict_tick_onop]

function clan_keep_theatre_actors_restrict_tick_onop(): void {
    if (varc_clan_stronghold_keep_theatre_stage_restricted == 1) {
        varc_clan_stronghold_keep_theatre_stage_restricted = 0;
    } else {
        varc_clan_stronghold_keep_theatre_stage_restricted = 1;
    }
    clan_keep_theatre_actors_refresh_client();
}
