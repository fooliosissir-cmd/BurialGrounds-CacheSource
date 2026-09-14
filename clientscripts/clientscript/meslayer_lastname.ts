/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_lastname]

function meslayer_lastname(intArg0: number, intArg1: number, intArg2: component, intArg3: number, strArg0: string): void {
    if (intArg1 != 1) {
        return;
    }

    if (ccFind(intArg2, intArg3) == 1) {
        ccDelete();
    }

    if (varc_meslayermode != intArg0 || stringLength(strArg0) <= 0) {
        return;
    }
    varcstr_meslayerinput = removetags(strArg0);
    ifSetText(escape(varcstr_meslayerinput), Component.interface_752.component_752_5);

    if (varc_meslayermode == 8) {
        resumeNameDialog(varcstr_meslayerinput);
        proc_meslayer_close(0);
    } else if (varc_meslayermode == 9) {
        resumeStringDialog(varcstr_meslayerinput);
        proc_meslayer_close(0);
    } else if (varc_meslayermode == 10) {
        clanJoinChat(varcstr_meslayerinput);
        proc_meslayer_close(0);
    }
}
