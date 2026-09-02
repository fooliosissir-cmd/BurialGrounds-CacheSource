/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_741

function cs2_741(): void {
    let int0: number = varp_scab_component_clicked;

    if (int0 == 0) {
        return;
    }
    let int1: number = cs2_739(int0);
    let int2: model = enumOp(type_int, type_model, Enum.scab_rune_normal_enum, int1);

    if (testBit(varc_scab_correct_choices_bit, int1) == 1) {
        return;
    }

    if (int0 == varc_scab_choice1 || int0 == varc_scab_choice2 || int0 == varc_scab_choice3) {
        return;
    }
    ifSetModel(int2, enumOp(type_int, type_component, Enum.scab_component_enum, int0));
    cs2_737(int0);

    if (varc_scab_correct_choices_total != 12) {
    }

    if (varc_scab_total_tries_remaining == 0) {
        mes("The mechanism issues forth a whine and shuts down.");
        cs2_675();
    }
}
