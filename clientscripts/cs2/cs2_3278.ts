/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3278

function cs2_3278(intArg0: number, intArg1: number, intArg2: graphic, intArg3: number): void {
    let int4: number = 0;
    let int5: number = 0;

    switch (intArg3) {
        case 1:
            int4 = ifGetWidth(Component.interface_942.component_942_3) / 4;
            int5 = ifGetHeight(Component.interface_942.component_942_3) / 4;
            break;
        case 2:
            int4 = ifGetWidth(Component.interface_942.component_942_3) / 4;
            break;
    }
    ccCreate(Component.interface_942.component_942_3, 5, varc_1149);
    varc_1149 = varc_1149 + 1;
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(intArg2);
    ccSetPosition(intArg0 * 32 + int4, intArg1 * 32 + int5, 0, 2);
    ccSetHide(false);
}
