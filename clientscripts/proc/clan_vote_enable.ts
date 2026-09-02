/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_vote_enable]

function clan_vote_enable(): void {
    ifSetHide(true, Component.clan_voting.disable_yes);
    ifSetHide(true, Component.clan_voting.disable_no);
}
