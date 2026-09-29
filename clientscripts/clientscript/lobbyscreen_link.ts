/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lobbyscreen_link]

/**
 * Burial Grounds does not expose stock RuneScape billing, website, or external
 * lobby links. Keep the native hook in place so existing interfaces remain
 * compatible, but intentionally perform no external navigation.
 */
function lobbyscreen_link(intArg0: boolean, strArg0: string, strArg1: string): void {
    return;
}
