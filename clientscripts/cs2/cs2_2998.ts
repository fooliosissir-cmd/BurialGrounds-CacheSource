/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2998

/**
 * Burial Grounds lobby Home tab.
 *
 * The revision-727 Player Info panel originally contains RuneScape web-account,
 * recovery-question, Message Centre, and membership cards. Burial Grounds does
 * not expose those external services, so the legacy card container stays hidden.
 * The useful native lobby content remains: last-login information and the
 * Burial Grounds welcome/world-entry panel.
 */
function cs2_2998(): void {
    ifSetHide(true, Component.interface_907.component_907_2);
    cs2_3001();
    ifSetOnTimer(hook(cs2_3000, "", []), Component.interface_907.component_907_1);
    ifOpenSubClient(Component.interface_907.component_907_42, Interface.interface_908);
    lobby_message_of_the_week();
}
