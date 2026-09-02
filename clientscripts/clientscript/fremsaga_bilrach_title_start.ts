/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fremsaga_bilrach_title_start]

function fremsaga_bilrach_title_start(strArg0: string): void {
    ifSetText(strArg0, Component.fremsaga_bilrach_title.title_text);
    varc_fremsaga_bilrach_title_counter = 0;
    ifSetOnTimer(hook(fremsaga_bilrach_title_handler, "i", [1]), Component.fremsaga_bilrach_title.title_background);
}
