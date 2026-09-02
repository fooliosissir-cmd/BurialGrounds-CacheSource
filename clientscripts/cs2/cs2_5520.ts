/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5520

function cs2_5520(): void {
    cs2_5522();

    if (varc_1661 == 0) {
        ifSetText("Please wait. Validating...", Component.interface_906.component_906_252);
        emailValidationSubmitCode(ifGetText(Component.interface_906.component_906_306));
    } else if (varc_1661 == 1) {
        ifSetText("Please wait. Setting email address...", Component.interface_906.component_906_252);
        emailValidationChangeAddress(ifGetText(Component.interface_906.component_906_306), ifGetText(Component.interface_906.component_906_306));
    }
    varc_1661 = -1;
}
