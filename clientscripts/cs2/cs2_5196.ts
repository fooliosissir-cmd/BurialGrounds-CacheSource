/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5196

function cs2_5196(): void {
    ifSetHide(true, Component.interface_1122.component_1122_55);
    ifSetHide(true, Component.interface_1122.component_1122_243);
    ifSetHide(true, Component.interface_1122.component_1122_255);
    ifSetHide(true, Component.interface_1122.component_1122_267);
    ifSetHide(true, Component.interface_1122.component_1122_279);
    ifSetHide(true, Component.interface_1122.component_1122_222);
    ifSetHide(true, Component.interface_1122.component_1122_231);
    ifSetHide(true, Component.interface_1122.component_1122_345);
    ifSetHide(false, Component.interface_1122.component_1122_73);

    if (varc_hcape_current_tier < 4) {
        ifSetHide(false, Component.interface_1122.component_1122_279);
        ifSetHide(false, Component.interface_1122.component_1122_231);
    }

    if (varc_hcape_current_tier < 3) {
        ifSetHide(false, Component.interface_1122.component_1122_267);
        ifSetHide(false, Component.interface_1122.component_1122_345);
    }

    if (varc_hcape_current_tier < 2) {
        ifSetHide(false, Component.interface_1122.component_1122_255);
        ifSetHide(false, Component.interface_1122.component_1122_222);
        ifSetHide(true, Component.interface_1122.component_1122_73);
    }

    if (varc_hcape_current_tier < 1) {
        ifSetHide(false, Component.interface_1122.component_1122_243);
    }
}
