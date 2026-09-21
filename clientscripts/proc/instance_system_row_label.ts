/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_row_label]

function instance_system_row_label(intArg0: number): string {
    switch (intArg0) {
        case 0:
            return varcstr_instance_row_label_0;
        case 1:
            return varcstr_instance_row_label_1;
        case 2:
            return varcstr_instance_row_label_2;
        case 3:
            return varcstr_instance_row_label_3;
        case 4:
            return varcstr_instance_row_label_4;
        case 5:
            return varcstr_instance_row_label_5;
    }
    return "";
}