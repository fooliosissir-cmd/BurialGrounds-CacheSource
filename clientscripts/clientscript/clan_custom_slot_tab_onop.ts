/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_custom_slot_tab_onop]

function clan_custom_slot_tab_onop(intArg0: number): void {
    varbit_clan_custom_stronghold_current_slot_varp = intArg0;
    clan_custom_slot_tab_switch();
}
