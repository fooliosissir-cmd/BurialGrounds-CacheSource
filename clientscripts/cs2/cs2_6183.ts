/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6183

function cs2_6183(): void {
    let int0: number = 0;
    let int1: number = varc_rcsiphonxp_esteem_client;

    if (varbit_rcsiphonxp_shop_selected_item == 0) {
        ifSetText("0", Component.interface_1273.component_1273_68);
        return;
    }

    if (varbit_rcsiphonxp_shop_tab == 1) {
        while (int1 < varbit_rcsiphonxp_shop_selected_item) {
            int0 = int0 + enumOp(type_int, type_int, Enum.rcsiphonxp_esteem_cost, int1);
            int1 = int1 + 1;
        }
        ifSetText("Rank " + tostring(11 - varbit_rcsiphonxp_shop_selected_item) + " Esteem = " + tostring(int0) + " points", Component.interface_1273.component_1273_68);
        return;
    }

    if (varbit_rcsiphonxp_shop_tab == 2) {
        ifSetText("Recolour = " + tostring(2000) + " points", Component.interface_1273.component_1273_68);
        return;
    }
    let int2: struct = enumOp(type_int, type_struct, Enum.rcsiphonxp_item_iterator, varbit_rcsiphonxp_shop_selected_item - 1);

    if (int2 == -1) {
        return;
    }
    int0 = structParam(int2, Param.rcsiphonxp_price);
    int0 = int0 * varbit_rcsiphonxp_shop_amount;

    if (structParam(int2, Param.rcsiphonxp_has_name2) == 0) {
        ifSetText(tostring(varbit_rcsiphonxp_shop_amount) + " x " + structParam(int2, Param.rcsiphonxp_name) + " = " + tostring(int0), Component.interface_1273.component_1273_68);
    } else if (mapLang() == 3 || mapLang() == 2) {
        ifSetText(tostring(varbit_rcsiphonxp_shop_amount) + " x " + structParam(int2, Param.rcsiphonxp_name2) + " " + structParam(int2, Param.rcsiphonxp_name) + " = " + tostring(int0), Component.interface_1273.component_1273_68);
    } else {
        ifSetText(tostring(varbit_rcsiphonxp_shop_amount) + " x " + structParam(int2, Param.rcsiphonxp_name) + " " + structParam(int2, Param.rcsiphonxp_name2) + " = " + tostring(int0), Component.interface_1273.component_1273_68);
    }
}
