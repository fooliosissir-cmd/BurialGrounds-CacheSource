/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5202

function cs2_5202(intArg0: number): void {
    if (intArg0 == 1) {
        varc_hcape_local_hsl_back = varbit_hcape_cs_if_back_hsl;
        varc_hcape_local_hsl_icon = varbit_hcape_cs_if_icon_hsl;
        varc_hcape_local_hsl_trim = varbit_hcape_cs_if_trim_hsl;
        varc_hcape_local_tier = varbit_hcape_cs_if_tier;
        varc_hcape_local_crest = varbit_hcape_cs_if_crest;
    }

    switch (varc_hcape_local_tier) {
        case 0:
            ifSetModel(Model.hcape_city_capes_male_t1, Component.interface_1122.component_1122_74);
            break;
        case 1:
            ifSetModel(Model.hcape_city_capes_male_t2, Component.interface_1122.component_1122_74);
            break;
        case 2:
            ifSetModel(Model.hcape_city_capes_male_t3, Component.interface_1122.component_1122_74);
            break;
        case 3:
            ifSetModel(Model.hcape_city_capes_male_t4, Component.interface_1122.component_1122_74);
            break;
        case 4:
            ifSetModel(Model.hcape_city_capes_male_t5, Component.interface_1122.component_1122_74);
            break;
    }

    switch (varbit_hcape_p_city) {
        case 1:
            ifSetRetex(2, 1303, 1298, Component.interface_1122.component_1122_74);
            break;
        case 2:
            ifSetRetex(2, 1303, 1303, Component.interface_1122.component_1122_74);
            break;
        case 3:
            ifSetRetex(2, 1303, 1301, Component.interface_1122.component_1122_74);
            break;
    }
    let int1: struct = enumOp(type_int, type_struct, Enum.hcape_enum_crest_id_to_struct, varc_hcape_local_crest);

    if (int1 == -1) {
        ifSetRetex(1, 1304, 1299, Component.interface_1122.component_1122_74);
    } else {
        ifSetRetex(1, 1304, structParam(int1, Param.hcape_crest_texture), Component.interface_1122.component_1122_74);
    }
    ifSetRecol(0, 41506, varc_hcape_local_hsl_back, Component.interface_1122.component_1122_74);
    ifSetRecol(1, 41497, cs2_5183(varc_hcape_local_hsl_back, 0, 0, -9), Component.interface_1122.component_1122_74);
    ifSetRecol(2, 13434, varc_hcape_local_hsl_icon, Component.interface_1122.component_1122_74);
    ifSetRecol(3, 7102, varc_hcape_local_hsl_trim, Component.interface_1122.component_1122_74);
}
