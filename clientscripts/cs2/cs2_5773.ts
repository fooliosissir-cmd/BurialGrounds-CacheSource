/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5773

function cs2_5773(intArg0: number, intArg1: number): void {
    let int2: component = -1;
    let int3: number = 1;
    let int4: number = 0;

    while (int3 <= 8) {
        if (intArg0 == int3) {
            int4 = intArg1;
        } else {
            int4 = 0;
        }
        switch (int3) {
            case 1:
                int2 = Component.interface_1056.component_1056_74;
                break;
            case 2:
                int2 = Component.interface_1056.component_1056_76;
                break;
            case 3:
                int2 = Component.interface_1056.component_1056_78;
                break;
            case 4:
                int2 = Component.interface_1056.component_1056_80;
                break;
            case 5:
                int2 = Component.interface_1056.component_1056_82;
                break;
            case 6:
                int2 = Component.interface_1056.component_1056_84;
                break;
            case 7:
                int2 = Component.interface_1056.component_1056_164;
                break;
            case 8:
                int2 = Component.interface_1056.component_1056_166;
                break;
        }
        cs2_5774(int4, int2);
        int3 = int3 + 1;
    }
}
