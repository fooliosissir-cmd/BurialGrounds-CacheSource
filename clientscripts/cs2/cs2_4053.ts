/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4053

function cs2_4053(): void {
    switch (varbit_warguild_token_type) {
        case 0:
            ifSetText("Using multiple token types", Component.interface_1057.component_1057_26);
            break;
        case 1:
            ifSetText("Using attack tokens", Component.interface_1057.component_1057_26);
            break;
        case 2:
            ifSetText("Using defence tokens", Component.interface_1057.component_1057_26);
            break;
        case 3:
            ifSetText("Using strength tokens", Component.interface_1057.component_1057_26);
            break;
        case 4:
            ifSetText("Using combat tokens", Component.interface_1057.component_1057_26);
            break;
        case 5:
            ifSetText("Using balance tokens", Component.interface_1057.component_1057_26);
            break;
    }
}
