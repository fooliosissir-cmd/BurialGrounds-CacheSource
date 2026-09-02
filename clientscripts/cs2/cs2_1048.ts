/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1048

function cs2_1048(intArg0: number, intArg1: number, intArg2: component, intArg3: component, intArg4: number): void {
    if (intArg0 == 13) {
        proc_quickchat_close();
        return;
    }

    if (intArg0 == 102) {
        quickchat_open(varc_126, varcstr_27);
        return;
    }
    let int5: number = stringLength(tostring(varc_129));
    let int6: number = stringIndexofChar("0123456789", intArg1, 0);

    if (intArg0 == 84) {
        if (int5 > 0) {
            proc_quickchat_phrase_int(intArg2, intArg4, varc_129);
        } else {
            proc_quickchat_close();
        }
        return;
    }

    if (intArg0 == 85) {
        if (int5 > 0) {
            varc_129 = varc_129 / 10;
        } else if (varc_127 == 0) {
            proc_quickchat_close();
        } else {
            ifSetHide(true, Component.interface_137.component_137_7);
            ifSetHide(true, Component.interface_137.component_137_9);
            ifSetHide(true, Component.interface_137.component_137_13);
            ifSetHide(false, Component.interface_137.component_137_17);
            ifSetHide(false, Component.interface_137.component_137_1);
            ifSetHide(true, Component.interface_137.component_137_3);
            return;
        }
    } else if (int6 >= 0 && int5 < 10 && varc_129 * 10 + int6 > 0) {
        varc_129 = varc_129 * 10 + int6;
    }

    if (varc_129 > 0) {
        ifSetText("Please enter a value: " + tostring(varc_129) + "*", intArg3);
    } else {
        ifSetText("Please enter a value: *", intArg3);
    }
}
