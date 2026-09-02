/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6165

function cs2_6165(intArg0: number): void {
    ifSetText("0", Component.interface_1273.component_1273_68);
    ccDeleteAll(Component.interface_1273.component_1273_13);
    ccDeleteAll(Component.interface_1273.component_1273_14);
    ccDeleteAll(Component.interface_1273.component_1273_15);
    ccDeleteAll(Component.interface_1273.component_1273_16);
    varc_rcsiphonxp_selected_item = -1;
    ifSetHide(true, Component.interface_1273.component_1273_14);
    ifSetHide(true, Component.interface_1273.component_1273_15);
    ifSetHide(true, Component.interface_1273.component_1273_16);

    switch (intArg0) {
        case 0:
            cs2_6166();
            break;
        case 1:
            cs2_6168();
            break;
        case 2:
            cs2_6169();
            break;
    }
}
