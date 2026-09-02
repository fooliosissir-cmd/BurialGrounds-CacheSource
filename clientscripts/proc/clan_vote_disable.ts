/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_vote_disable]

function clan_vote_disable(): void {
    ifSetHide(false, Component.clan_voting.disable_yes);
    ifSetHide(false, Component.clan_voting.disable_no);
}
