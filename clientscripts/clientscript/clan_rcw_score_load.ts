/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_rcw_score_load]

function clan_rcw_score_load(): void {
    ifSetOnVarTransmit(hook(clan_rcw_time_updated, "Y", [], [2151]), Component.interface_1088.component_1088_13);
}
