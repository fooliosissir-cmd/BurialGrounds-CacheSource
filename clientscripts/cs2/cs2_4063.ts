/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4063

function cs2_4063(): void {
    if (varbit_warguild_token_type_multi_temp == 1) {
        return;
    }

    switch (varbit_warguild_token_type_temp) {
        case 1:
            cs2_4065(Component.interface_1058.component_1058_25);
            break;
        case 4:
            cs2_4065(Component.interface_1058.component_1058_24);
            break;
        case 5:
            cs2_4065(Component.interface_1058.component_1058_22);
            break;
        case 3:
            cs2_4065(Component.interface_1058.component_1058_23);
            break;
        case 2:
            cs2_4065(Component.interface_1058.component_1058_26);
            break;
    }
}
