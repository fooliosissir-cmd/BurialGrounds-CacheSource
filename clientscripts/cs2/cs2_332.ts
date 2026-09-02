/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_332

function cs2_332(intArg0: number): void {
    let int1: Enum = Enum.player_kit_bracelet_model_silver;

    if (varc_783 == 1) {
        int1 = Enum.player_kit_bracelet_model_gold;
    }
    ifSetModel(enumOp(type_int, type_model, int1, intArg0), Component.interface_725.component_725_83);
}
