/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3280

function cs2_3280(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: number = 0;

    switch (intArg2) {
        case 1:
            int3 = ifGetWidth(Component.interface_942.component_942_3) / 4;
            int4 = ifGetHeight(Component.interface_942.component_942_3) / 4;
            break;
        case 2:
            int3 = ifGetWidth(Component.interface_942.component_942_3) / 4;
            break;
    }
    ccCreate(Component.interface_942.component_942_4, 5, varc_1151);
    varc_1151 = varc_1151 + 1;
    ccSetSize(32, 32, 0, 0);
    ccSetGraphic(Graphic.rand_map_room_special_0);
    ccSetPosition(intArg0 * 32 + int3, intArg1 * 32 + int4, 0, 2);
    ccSetHide(false);
}
