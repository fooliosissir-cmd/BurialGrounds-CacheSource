/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_reward_setup_head]

function fremsaga_reward_setup_head(intArg0: number): void {
    let int1: model = -1;

    switch (intArg0) {
        case 1:
            int1 = Model.model_1823;
            break;
        case 2:
            int1 = Model.model_55612;
            ifSetModelAnim(9804, Component.interface_102.component_102_55);
            break;
        case 4:
        case 6:
            int1 = Model.model_55626;
            break;
        case 3:
            int1 = Model.model_69006;
            ifSetModelAnim(9804, Component.interface_102.component_102_55);
            break;
    }
    ifSetModel(int1, Component.interface_102.component_102_55);
}
