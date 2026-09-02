/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1920

function cs2_1920(): void {
    ifSetOnVarcStrTransmit(hook(cs2_1921, "Y", [], [40]), Component.sc_lobby_clan_overlay.clan_leader_text);
    ifSetOnVarcStrTransmit(hook(cs2_1921, "Y", [], [41]), Component.sc_lobby_clan_overlay.ally_1_text);
    ifSetOnVarcStrTransmit(hook(cs2_1921, "Y", [], [42]), Component.sc_lobby_clan_overlay.ally_2_text);
    ifSetOnVarcTransmit(hook(cs2_1921, "Y", [], [551]), Component.sc_lobby_clan_overlay.clan_leader_text);
    ifSetOnVarcTransmit(hook(cs2_1921, "Y", [], [552]), Component.sc_lobby_clan_overlay.ally_1_text);
    ifSetOnVarcTransmit(hook(cs2_1921, "Y", [], [553]), Component.sc_lobby_clan_overlay.ally_2_text);
    varcstr_sc_lobby_clan_leader = "You have no clan leader.";
    varcstr_sc_lobby_ally_leader_1 = "You have no allied clans.";
    varcstr_sc_lobby_ally_leader_2 = "";
    varc_sc_lobby_clan_size = 0;
    varc_sc_lobby_ally_size_1 = 0;
    varc_sc_lobby_ally_size_2 = 0;
}
