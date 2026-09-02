/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_hud_init]

function clan_field_hud_init(intArg0: component): void {
    cs2_4534(Component.interface_1112.component_1112_2);
    proc_clan_field_hud_refresh();
    ifSetOnVarTransmit(hook(clientscript_clan_field_hud_refresh, "Y", [], [1736, 1735]), intArg0);
    ifSetOnVarcTransmit(hook(clientscript_clan_field_hud_refresh, "Y", [], [786, 788, 787]), intArg0);
}
