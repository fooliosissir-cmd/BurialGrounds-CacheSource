/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_737

function cs2_737(intArg0: number): void {
    let int1: model = -1;

    if (varc_scab_choice1 == 0) {
        varc_scab_choice1 = intArg0;
        return;
    }

    if (varc_scab_choice2 == 0) {
        varc_scab_choice2 = intArg0;
        return;
    }

    if (varc_scab_choice3 == 0) {
        varc_scab_choice3 = intArg0;
        if (cs2_739(varc_scab_choice1) == cs2_739(varc_scab_choice2) && cs2_739(varc_scab_choice1) == cs2_739(varc_scab_choice3)) {
            int1 = enumOp(type_int, type_model, Enum.scab_rune_recessed_enum, cs2_739(varc_scab_choice1));
            ifSetModel(int1, enumOp(type_int, type_component, Enum.scab_component_enum, varc_scab_choice1));
            ifSetModel(int1, enumOp(type_int, type_component, Enum.scab_component_enum, varc_scab_choice2));
            ifSetModel(int1, enumOp(type_int, type_component, Enum.scab_component_enum, varc_scab_choice3));
            varc_scab_correct_choices_bit = setBit(varc_scab_correct_choices_bit, cs2_739(varc_scab_choice1));
            varc_scab_choice1 = 0;
            varc_scab_choice2 = 0;
            varc_scab_choice3 = 0;
            varc_scab_correct_choices_total = varc_scab_correct_choices_total + 1;
            varc_scab_total_tries_remaining = varc_scab_total_tries_remaining - 1;
            scab_tries_update();
        }
        return;
    }
    ifSetModel(Model.model_31025, enumOp(type_int, type_component, Enum.scab_component_enum, varc_scab_choice1));
    ifSetModel(Model.model_31025, enumOp(type_int, type_component, Enum.scab_component_enum, varc_scab_choice2));
    ifSetModel(Model.model_31025, enumOp(type_int, type_component, Enum.scab_component_enum, varc_scab_choice3));
    varc_scab_choice1 = intArg0;
    varc_scab_choice2 = 0;
    varc_scab_choice3 = 0;
    varc_scab_total_tries_remaining = varc_scab_total_tries_remaining - 1;
    scab_tries_update();
}
