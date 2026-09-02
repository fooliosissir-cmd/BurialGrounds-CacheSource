/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2168

function cs2_2168(): void {
    if (mapMembers() == 0) {
        mes("More advanced sorting options are available on a members' world.");
    } else if (varp_tutorial < 1000) {
        mes("More advanced sorting options are available after the Tutorial.");
    }
}
