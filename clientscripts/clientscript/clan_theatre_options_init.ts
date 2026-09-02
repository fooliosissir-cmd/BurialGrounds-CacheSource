/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_theatre_options_init]

function clan_theatre_options_init(intArg0: component): void {
    cs2_5279(intArg0);
    ifSetOnVarTransmit(hook(cs2_5278, "IY", [intArg0], [1734]), intArg0);
    clan_keep_theatre_options_room_selected_tempvars();
    ifSetOnVarTransmit(hook(cs2_5290, "Y", [], [2387]), ifGetLayer(intArg0));
}
