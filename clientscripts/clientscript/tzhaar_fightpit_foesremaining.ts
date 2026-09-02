/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,tzhaar_fightpit_foesremaining]

function tzhaar_fightpit_foesremaining(): void {
    if (varp_tzhaar_fightpit_remaining < 1) {
        ifSetText("You're the Winner!", Component.tzhaar_fightpit.tzhaar_fightpit_foes);
    } else {
        ifSetText("Foes Remaining: " + tostring(varp_tzhaar_fightpit_remaining), Component.tzhaar_fightpit.tzhaar_fightpit_foes);
    }
}
