/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6088

function cs2_6088(intArg0: number, intArg1: number): void {
    let int2: component = Component.interface_1265.component_1265_20;
    let int3: component = Component.interface_1265.component_1265_25;
    let int4: component = Component.interface_1265.component_1265_26;
    let int5: component = Component.interface_1265.component_1265_24;
    let int6: component = Component.interface_1265.component_1265_23;
    let int7: component = Component.interface_1265.component_1265_27;

    if (intArg1 == 1) {
        int2 = Component.interface_1265.component_1265_21;
        int3 = Component.interface_1265.component_1265_96;
        int4 = Component.interface_1265.component_1265_97;
        int5 = -1;
        int6 = Component.interface_1265.component_1265_95;
        int7 = Component.interface_1265.component_1265_98;
    }
    ccCreate(int2, 5, intArg0);
    ccCreate(int3, 4, intArg0);
    ccCreate(int4, 5, intArg0);
    ccCreate(int6, 4, intArg0);

    if (int5 != -1) {
        ccCreate(int5, 5, intArg0);
    }
    ccCreate(int7, 5, intArg0);
}
