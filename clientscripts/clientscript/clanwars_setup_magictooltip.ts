/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_setup_magictooltip]

function clanwars_setup_magictooltip(intArg0: component, intArg1: number, intArg2: component): void {
    if (mapMembers() == 1) {
        cs2_1163(intArg0, intArg1, intArg2, "You may choose:" + "<br>" + "- Allow all spells" + "<br>" + "- Standard spellbook only" + "<br>" + "- Bind/Snare/Entangle only" + "<br>" + "- No Magic", 25, 250);
    } else {
        cs2_1163(intArg0, intArg1, intArg2, "You may choose:" + "<br>" + "- Standard spellbook" + "<br>" + "- Bind only" + "<br>" + "- No Magic", 25, 250);
    }
}
