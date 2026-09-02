/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1921

function cs2_1921(): void {
    if (varc_sc_lobby_clan_size > 0) {
        ifSetText(append(appendNum(append(varcstr_sc_lobby_clan_leader, " ("), varc_sc_lobby_clan_size), ")"), Component.sc_lobby_clan_overlay.clan_leader_text);
    } else {
        ifSetText(varcstr_sc_lobby_clan_leader, Component.sc_lobby_clan_overlay.clan_leader_text);
    }

    if (varc_sc_lobby_ally_size_1 > 0) {
        ifSetText(append(appendNum(append(varcstr_sc_lobby_ally_leader_1, " ("), varc_sc_lobby_ally_size_1), ")"), Component.sc_lobby_clan_overlay.ally_1_text);
    } else {
        ifSetText(varcstr_sc_lobby_ally_leader_1, Component.sc_lobby_clan_overlay.ally_1_text);
    }

    if (varc_sc_lobby_ally_size_2 > 0) {
        ifSetText(append(appendNum(append(varcstr_sc_lobby_ally_leader_2, " ("), varc_sc_lobby_ally_size_2), ")"), Component.sc_lobby_clan_overlay.ally_2_text);
    } else {
        ifSetText(varcstr_sc_lobby_ally_leader_2, Component.sc_lobby_clan_overlay.ally_2_text);
    }
}
