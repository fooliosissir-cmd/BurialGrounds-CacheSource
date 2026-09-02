/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2244

function cs2_2244(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number): void {
    intArg0 = cs2_2245(intArg1, intArg2, intArg0, Component.interface_935.component_935_54, Component.interface_935.component_935_49);
    intArg3 = cs2_2245(intArg4, intArg5, intArg3, Component.interface_935.component_935_64, Component.interface_935.component_935_59);
    intArg6 = cs2_2245(intArg7, intArg8, intArg6, Component.interface_935.component_935_74, Component.interface_935.component_935_69);
    let int12: number = intArg0 + intArg3 + intArg6;
    ifSetSize(1 + 223 * int12 / (intArg2 + intArg5 + intArg8), 10, 0, 0, Component.interface_935.component_935_95);
    int12 = int12 + intArg9 + intArg10;
    ifSetText(tostring(int12), Component.interface_935.component_935_90);
    ifSetText(tostring(int12 * intArg11 / 100), Component.interface_935.component_935_107);

    if (intArg0 == intArg1 && intArg3 == intArg4 && intArg6 == intArg7) {
        ifSetOnTimer(noHook(""), Component.interface_935.component_935_0);
    } else {
        ifSetOnTimer(hook(cs2_2244, "iiiiiiiiiiii", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11]), Component.interface_935.component_935_0);
    }
}
