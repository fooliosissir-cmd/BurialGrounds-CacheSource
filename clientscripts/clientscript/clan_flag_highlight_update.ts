/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_flag_highlight_update]

function clan_flag_highlight_update(intArg0: number): void {
    proc_clan_flag_highlight(varp_clan_flag_varp, Component.clan_flag_selection.flag_backgrounds_layer, intArg0);
}
