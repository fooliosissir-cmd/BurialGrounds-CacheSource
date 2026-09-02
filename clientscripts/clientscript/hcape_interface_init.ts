/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,hcape_interface_init]

function hcape_interface_init(): void {
    cs2_5192();
    proc_hcape_show_tab(1, 0);

    switch (varbit_hcape_p_city) {
        case 1:
            ifSetText("Lumbridge herald cape", Component.interface_1122.component_1122_65);
            break;
        case 2:
            ifSetText("Varrock herald cape", Component.interface_1122.component_1122_65);
            break;
        case 3:
            ifSetText("Falador herald cape", Component.interface_1122.component_1122_65);
            break;
    }
}
