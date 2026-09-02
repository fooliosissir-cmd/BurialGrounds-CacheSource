/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snapshot_ignore_yes]

function snapshot_ignore_yes(): void {
    if (friendTest(varcstr_snapshot_name) == 1) {
        mesTyped(26, 0, "Sorry, you cannot ignore players in your Friends List.");
    } else {
        ignoreAddTemp(varcstr_snapshot_name);
        mesTyped(26, 0, "You are ignoring " + varcstr_snapshot_name + " until you log out.");
    }
    varc_snapshot_open = 0;
    cs2_675();
}
