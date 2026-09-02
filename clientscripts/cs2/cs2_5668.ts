/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5668

function cs2_5668(): void {
    ifSetColour(colour(0xEBE0BC), Component.interface_1214.component_1214_22);
    ifSetText("<u=ebe0bc>" + removetags(ifGetText(Component.interface_1214.component_1214_22)), Component.interface_1214.component_1214_22);
    ifSetColour(colour(0xEBE0BC), Component.interface_1214.component_1214_23);
    ifSetText("<u=ebe0bc>" + removetags(ifGetText(Component.interface_1214.component_1214_23)), Component.interface_1214.component_1214_23);
    ifSetColour(colour(0xEBE0BC), Component.interface_1214.component_1214_24);
    ifSetText("<u=ebe0bc>" + removetags(ifGetText(Component.interface_1214.component_1214_24)), Component.interface_1214.component_1214_24);

    switch (varp_2478) {
        case 2:
            ifSetColour(colour(0xD8690F), Component.interface_1214.component_1214_23);
            ifSetText("<u=d8690f>" + removetags(ifGetText(Component.interface_1214.component_1214_23)), Component.interface_1214.component_1214_23);
            break;
        case 3:
            ifSetColour(colour(0xD8690F), Component.interface_1214.component_1214_24);
            ifSetText("<u=d8690f>" + removetags(ifGetText(Component.interface_1214.component_1214_24)), Component.interface_1214.component_1214_24);
            break;
        default:
            ifSetColour(colour(0xD8690F), Component.interface_1214.component_1214_22);
            ifSetText("<u=d8690f>" + removetags(ifGetText(Component.interface_1214.component_1214_22)), Component.interface_1214.component_1214_22);
            break;
    }
    cs2_5666();
    cs2_5675();
}
