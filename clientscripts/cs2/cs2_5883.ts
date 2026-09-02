/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5883

function cs2_5883(intArg0: number, intArg1: number, intArg2: number, intArg3: number): void {
    let int4: component = Component.interface_1253.component_1253_82;
    let int5: number = ifGet2dangle(int4);
    let int6: number = scale_round(int5, 65535, 360);

    if (intArg0 > 0) {
        intArg2 = intArg2 + 1;
        intArg1 = intArg1 + 1;
        if (intArg1 >= 20 / 5 * intArg0 + intArg0 * 3) {
            intArg1 = 0;
            intArg0 = intArg0 + 1;
        }
        ifSetOnTimer(hook(cs2_5883, "iiii", [intArg0, intArg1, intArg2, intArg3]), Component.interface_1253.component_1253_82);
    }
    let int7: number = 8 - intArg0;
    let int8: number = int6 + int7;

    if (int8 > 359) {
        int8 = max(0, int8 - 359);
    }
    let int9: number = scale_round(int8, 360, 65535);
    varc_1801 = int8;
    let int10: number = -1;
    let int11: number = -1;
    let int12: struct = cs2_5936(varbit_10860);

    if (intArg0 == 8) {
        ifSetOnTimer(noHook(""), int4);
        cs2_5892();
        ifSetOnTimer(hook(wof_reward_screen_delay, "Ii", [event_com, 0]), Component.interface_1253.component_1253_52);
        if (int12 == -1) {
            return;
        }
        int10 = structParam(int12, Param.param_2266);
        int11 = structParam(int12, Param.param_2267);
    } else {
        cs2_5891();
    }
    varc_1783 = cs2_5932(int8);
    cs2_5899();
    ifSet2dangle(int9, int4);
    cs2_5897(int6, int8);
}
