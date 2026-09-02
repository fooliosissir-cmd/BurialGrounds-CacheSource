/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_permissions_rank_onclansettingstransmit]

function clan_permissions_rank_onclansettingstransmit(): void {
    if (cs2_5131() == 1) {
        cs2_5127();
        clan_permissions_rank_update();
    }
}
