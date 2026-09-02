/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3003

function cs2_3003(intArg0: number): void {
    if (enumOp(type_int, type_component, Enum.enum_942, intArg0) == -1) {
        return;
    }
    let int1: number = -1;

    if (ifGetHeight(Component.interface_907.component_907_3) > 30) {
        int1 = 0;
    } else if (ifGetHeight(Component.interface_907.component_907_4) > 30) {
        int1 = 1;
    } else if (ifGetHeight(Component.interface_907.component_907_5) > 30) {
        int1 = 2;
    } else if (ifGetHeight(Component.interface_907.component_907_43) > 30) {
        int1 = 3;
    }

    if (intArg0 == int1) {
        return;
    }
    cs2_3004(int1, intArg0);
}
