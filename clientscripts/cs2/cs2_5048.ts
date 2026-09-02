/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5048

function cs2_5048(): void {
    let int0: number = varc_hw10_cutscene * (112 + 2 + 2);
    let int1: number = 0;

    while (int1 < 200) {
        if (ccFind(Component.interface_1111.component_1111_15, int1) == 1) {
            ccSetSize(varc_hw10_cutscene * ccParam(Param.clan_field_element_w) - 1, varc_hw10_cutscene * ccParam(Param.clan_field_element_h) - 1, 0, 0);
            ccSetPosition((ccParam(Param.clan_field_element_x) + 2) * varc_hw10_cutscene, int0 - ((ccParam(Param.clan_field_element_z) + 2) * varc_hw10_cutscene + 1 + ccGetHeight()), 0, 0);
        }
        int1 = int1 + 1;
    }
    ifSetPosition(scale(max(varc_hw10_cutscene - 3, 0), max(21 - 3, 1), ifGetWidth(ifGetLayer(Component.interface_1111.component_1111_48)) - ifGetWidth(Component.interface_1111.component_1111_48)), 0, 0, 1, Component.interface_1111.component_1111_48);
}
