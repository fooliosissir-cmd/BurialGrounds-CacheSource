/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_filter]

function ql4_filter(intArg0: number): void {
    let int1: number = varc_692;
    let int2: number = varc_1103;

    deltooltip_action(Component.interface_190.component_190_23);

    if (intArg0 == 0) {
        if (varc_692 == 1) {
            int1 = 0;
        } else {
            int1 = 1;
        }
    } else if (varc_1103 == 1) {
        int2 = 0;
    } else {
        int2 = 1;
    }
    proc_ql4_sort(1, varc_693, varc_694, int1, int2);
}
