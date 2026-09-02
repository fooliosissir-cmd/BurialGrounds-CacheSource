/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,snapshot_confirm_name]

function snapshot_confirm_name(): void {
    if (compare(varcstr_snapshot_name, "") != 0) {
        cs2_220();
    } else {
        mesTyped(26, 0, "You must first select a name from the list.");
    }
}
