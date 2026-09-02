/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4801

function cs2_4801(intArg0: number): void {
    switch (intArg0) {
        case 1:
            varc_1659 = 1;
            ifSetText("Price: High-Low", Component.interface_1143.component_1143_31);
            break;
        case 2:
            varc_1659 = 2;
            ifSetText("Name: A-Z", Component.interface_1143.component_1143_31);
            break;
        case 3:
            varc_1659 = 3;
            ifSetText("Name: Z-A", Component.interface_1143.component_1143_31);
            break;
        default:
            varc_1659 = 0;
            ifSetText("Price: Low-High", Component.interface_1143.component_1143_31);
            break;
    }
    ifSetHide(true, Component.interface_1143.component_1143_26);
    cs2_5350(varbit_9487, Component.interface_1143.component_1143_5);
}
