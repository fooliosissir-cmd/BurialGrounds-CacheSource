/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1325

function cs2_1325(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component): void {
    ifSetModel(enumOp(type_int, type_model, Enum.eyeglo_digits, varbit_eyeglo_coin_value_2 / 10), intArg0);
    ifSetModel(enumOp(type_int, type_model, Enum.eyeglo_digits, varbit_eyeglo_coin_value_2 % 10), intArg1);
    ifSetObjectNonum(varp_eyeglo_operate1_a, 1, intArg5);

    if (varbit_eyeglo_operate1_val == 0) {
        ifSetModel(Model.eyeglo_gnome_machine_button_invalid_red_interface, intArg3);
        ifSetModel(-1, intArg2);
        ifSetModel(-1, intArg4);
        return;
    }

    if (varbit_eyeglo_operate1_val > varbit_eyeglo_coin_value_2) {
        ifSetModel(Model.eyeglo_gnome_machine_button_invalid_red_interface, intArg3);
        ifSetModel(Model.eyeglo_gnome_machine_button_up_red_interface, intArg2);
        ifSetModel(Model.eyeglo_gnome_machine_button_down_green_interface, intArg4);
        return;
    }

    if (varbit_eyeglo_operate1_val < varbit_eyeglo_coin_value_2) {
        ifSetModel(Model.eyeglo_gnome_machine_button_invalid_red_interface, intArg3);
        ifSetModel(Model.eyeglo_gnome_machine_button_up_green_interface, intArg2);
        ifSetModel(Model.eyeglo_gnome_machine_button_down_red_interface, intArg4);
        return;
    }
    ifSetModel(Model.eyeglo_gnome_machine_button_invalid_green_interface, intArg3);
    ifSetModel(-1, intArg2);
    ifSetModel(-1, intArg4);
}
