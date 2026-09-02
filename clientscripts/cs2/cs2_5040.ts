/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5040

function cs2_5040(): void {
    ccDeleteAll(Component.interface_1111.component_1111_15);
    let int0: number = 0;
    let int1: number = 0;
    let int2: struct = -1;
    let int3: number = -1;
    let int4: number = -1;
    let int5: number = -1;
    let int6: number = 200;

    if (clanProfileFind() == 1) {
        while (int0 < 200) {
            ccCreate(Component.interface_1111.component_1111_15, 5, int0);
            [int1, int3, int4, int5] = cs2_5019(int0);
            if (int1 != 0) {
                int2 = enumOp(type_int, type_struct, Enum.clan_field_elements, int1);
                if (int2 != -1) {
                    ccSetGraphic(structParam(int2, Param.clan_field_element_graphic));
                    if (structParam(int2, Param.clan_field_element_category) == 1) {
                        ccSettiling(true);
                    } else {
                        ccSettiling(false);
                    }
                    cs2_5041(int2, int3, int4, int5);
                    int6 = int6 - 1;
                } else {
                    ccSetHide(true);
                }
            } else {
                ccSetHide(true);
            }
            int0 = int0 + 1;
        }
        ifSetText(tostring(int6), Component.interface_1111.component_1111_84);
    } else {
        ifSetText("...", Component.interface_1111.component_1111_84);
    }
    deltooltip_action(Component.interface_1111.component_1111_119);
}
