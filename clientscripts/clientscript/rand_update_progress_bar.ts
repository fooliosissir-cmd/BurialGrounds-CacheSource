/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,rand_update_progress_bar]

function rand_update_progress_bar(): void {
    ifSetText(varcstr_315, Component.interface_945.component_945_14);

    if (varc_1233 > 200) {
        varc_1233 = 200;
    }
    let int0: number = varc_1233;
    int0 = int0 * 37 / 40 + 14;
    ifSetSize(int0, 18, 1, 0, Component.interface_945.component_945_16);
    ifSetPosition(int0 + 1, 15, 0, 0, Component.interface_945.component_945_17);
}
