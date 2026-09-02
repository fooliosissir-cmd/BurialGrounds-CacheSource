/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2128

function cs2_2128(intArg0: component, intArg1: number): void {
    switch (intArg1) {
        case 1:
            ifSetModel(Model.model_16036, intArg0);
            ifSetModelAngle(0, 0, cs2_686(varc_680, 2048), varc_681, cs2_686(varc_682, 2048), 800, intArg0);
            break;
        case 2:
            ifSetModel(Model.model_16025, intArg0);
            ifSetModelAngle(0, 17, cs2_686(varc_683, 2048), varc_684, cs2_686(varc_685, 2048), 800, intArg0);
            break;
        case 3:
            ifSetModel(Model.model_16022, intArg0);
            ifSetModelAngle(0, 0, cs2_686(varc_686, 2048), varc_687, cs2_686(varc_688, 2048), 800, intArg0);
            break;
        case 4:
            ifSetModel(Model.model_16034, intArg0);
            ifSetModelAngle(0, 0, cs2_686(varc_689, 2048), varc_690, cs2_686(varc_691, 2048), 800, intArg0);
            break;
        default:
            ifSetModel(-1, intArg0);
            break;
    }
}
