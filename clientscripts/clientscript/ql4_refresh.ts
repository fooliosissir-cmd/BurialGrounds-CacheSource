/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ql4_refresh]

function ql4_refresh(): void {
    if (mapMembers() == 1) {
        varc_693 = varbit_ql4_perm_sort;
    } else {
        varc_693 = 0;
    }
    varc_694 = varbit_ql4_perm_reverse;
    varc_692 = varbit_ql4_perm_filter;
    proc_ql4_sort(1, varc_693, varc_694, varc_692, varc_1103);
    let int0: number = 0;
}
