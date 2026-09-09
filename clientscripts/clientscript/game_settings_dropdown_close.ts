/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,game_settings_dropdown_close]

function game_settings_dropdown_close(): void {
    ifSetHide(true, Component.game_settings.dropdown);
}
