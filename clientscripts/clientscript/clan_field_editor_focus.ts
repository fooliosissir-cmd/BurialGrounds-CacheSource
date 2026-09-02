/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_editor_focus]

function clientscript_clan_field_editor_focus(intArg0: component, intArg1: number): void {
    soundVorbisVolume(6185, 1, 0, 200);
    proc_clan_field_editor_focus(intArg0, intArg1);
}
