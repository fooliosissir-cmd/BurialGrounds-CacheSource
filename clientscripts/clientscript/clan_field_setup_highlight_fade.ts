/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_setup_highlight_fade]

function clientscript_clan_field_setup_highlight_fade(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        proc_clan_field_setup_highlight_fade(intArg0, intArg2);
    }
}
