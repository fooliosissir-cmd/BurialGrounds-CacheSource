/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6203

function cs2_6203(): void {
    if (compare(varcstr_evalid_input_1, varcstr_evalid_input_2) != 0 && (stringLength(varcstr_evalid_input_1) > 0 || stringLength(varcstr_evalid_input_2) > 0)) {
        lobby_popup(-5, 1, "Please ensure both email addresses are the same.", 0, Graphic.loadingwheel_9, 0, -1, "", "", 1, "Back", "Back");
        return;
    }
    ifSetOnVarTransmit(hook(cs2_6204, "Y", [], [2411]), Component.interface_906.component_906_235);
    cs2_5522();
    ifSetText("Please wait...", Component.interface_906.component_906_252);
    let int0: number = 0;
    let int1: number = 0;

    if (varc_1411 == 1) {
        int0 = 1;
        int1 = 1;
    }
    emailValidationAddNewAddress(varcstr_evalid_input_1, 1, int0, int1);
}
