/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_gameover_init]

function clan_field_gameover_init(intArg0: component): void {
    ifSetOnVarTransmit(hook(clientscript_clan_field_gameover, "Y", [], [1736, 1735]), intArg0);
    ifSetOnVarcStrTransmit(hook(clientscript_clan_field_gameover, "Y", [], [129]), intArg0);
    proc_clan_field_gameover();
}
