/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_set_colour1]

function clan_set_colour1(intArg0: component): void {
    ifSetColour(hsvtorgb(varp_clan_custom_colour1_varp), intArg0);
}
