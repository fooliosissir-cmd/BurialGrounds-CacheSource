/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_permissions_rank_refresh]

function proc_clan_permissions_rank_refresh(): void {
    if (activeClanSettingsFindAffined() == 1) {
        clan_permissions_rank_onclansettingstransmit();
    }
}
