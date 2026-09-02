/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1482

function cs2_1482(intArg0: component): void {
    let int1: number = enumOp(type_component, type_int, Enum.enum_1613, intArg0);

    if (int1 != -1 && int1 != varbit_4893) {
        cs2_1463(int1);
        ifSetOnTimer(hook(cs2_1483, "iI", [clientClock() + 15, event_com]), intArg0);
    }
}
