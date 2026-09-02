/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5777

function cs2_5777(intArg0: number, intArg1: number): void {
    let int2: number = 1;
    let int3: number = 0;

    while (int2 <= 8) {
        if (intArg0 == int2) {
            int3 = intArg1;
        } else {
            int3 = 0;
        }
        if (ifIsOpen(48889885, 917) == 1) {
            cs2_5779(int3, int2, Component.interface_917.component_917_98);
        }
        if (ccIsOpen(48889866, 1221) == 1) {
            cs2_5779(int3, int2, Component.interface_1221.component_1221_5);
        }
        if (ccIsOpen(48889866, 1222) == 1) {
            cs2_5779(int3, int2, Component.interface_1222.component_1222_28);
        }
        if (ccIsOpen(48889865, 1219) == 1) {
            cs2_5779(int3, int2, Component.interface_1219.component_1219_5);
            if (int3 == 0) {
                cs2_5779(0, 1, Component.interface_1219.component_1219_12);
            }
        }
        int2 = int2 + 1;
    }
}
