/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5065

function cs2_5065(intArg0: number): void {
    let int1: number = ifGetHeight(Component.interface_1111.component_1111_65);

    ifSetSize(0, int1, 1, 0, Component.interface_1111.component_1111_66);
    ifSetSize(0, int1, 1, 0, Component.interface_1111.component_1111_67);
    ifSetSize(0, int1, 1, 0, Component.interface_1111.component_1111_68);
    let int2: number = ifGetHeight(Component.interface_1111.component_1111_52);
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;

    switch (varc_welcome_screen_email) {
        case 2:
            int3 = int1;
            int4 = int2 - int1 * 2;
            int5 = int2 - int1;
            cs2_5056(Component.interface_1111.component_1111_65, 0);
            cs2_5056(Component.interface_1111.component_1111_66, 1);
            cs2_5056(Component.interface_1111.component_1111_67, 0);
            cs2_5056(Component.interface_1111.component_1111_68, 0);
            break;
        case 3:
            int3 = int1;
            int4 = int1 * 2;
            int5 = int2 - int1;
            cs2_5056(Component.interface_1111.component_1111_65, 0);
            cs2_5056(Component.interface_1111.component_1111_66, 0);
            cs2_5056(Component.interface_1111.component_1111_67, 1);
            cs2_5056(Component.interface_1111.component_1111_68, 0);
            break;
        case 4:
            int3 = int1;
            int4 = int1 * 2;
            int5 = int1 * 3;
            cs2_5056(Component.interface_1111.component_1111_65, 0);
            cs2_5056(Component.interface_1111.component_1111_66, 0);
            cs2_5056(Component.interface_1111.component_1111_67, 0);
            cs2_5056(Component.interface_1111.component_1111_68, 1);
            break;
        default:
            varc_welcome_screen_email = 1;
            int3 = int2 - int1 * 3;
            int4 = int2 - int1 * 2;
            int5 = int2 - int1;
            cs2_5056(Component.interface_1111.component_1111_65, 1);
            cs2_5056(Component.interface_1111.component_1111_66, 0);
            cs2_5056(Component.interface_1111.component_1111_67, 0);
            cs2_5056(Component.interface_1111.component_1111_68, 0);
            break;
    }
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;

    if (intArg0 == 1) {
        [int6, int7, int8] = [int3, int4, int5];
    } else {
        int9 = ifGetY(Component.interface_1111.component_1111_66);
        if (int9 != int3) {
            int6 = int9 + max(min(int3 - int9, 3), -3);
            int10 = 1;
        } else {
            int6 = int3;
        }
        int9 = ifGetY(Component.interface_1111.component_1111_67);
        if (int9 != int4) {
            int7 = int9 + max(min(int4 - int9, 3), -3);
            int10 = 1;
        } else {
            int7 = int4;
        }
        int9 = ifGetY(Component.interface_1111.component_1111_68);
        if (int9 != int5) {
            int8 = int9 + max(min(int5 - int9, 3), -3);
            int10 = 1;
        } else {
            int8 = int5;
        }
    }
    ifSetPosition(0, 0, 1, 0, Component.interface_1111.component_1111_65);
    ifSetPosition(0, int6, 1, 0, Component.interface_1111.component_1111_66);
    ifSetPosition(0, int7, 1, 0, Component.interface_1111.component_1111_67);
    ifSetPosition(0, int8, 1, 0, Component.interface_1111.component_1111_68);
    ifSetPosition(0, int1, 1, 0, Component.interface_1111.component_1111_53);
    ifSetPosition(0, int6 + int1, 1, 0, Component.interface_1111.component_1111_56);
    ifSetPosition(0, int7 + int1, 1, 0, Component.interface_1111.component_1111_59);
    ifSetPosition(0, int8 + int1, 1, 0, Component.interface_1111.component_1111_62);
    ifSetSize(0, int6 - int1, 1, 0, Component.interface_1111.component_1111_53);
    ifSetSize(0, int7 - (int6 + int1), 1, 0, Component.interface_1111.component_1111_56);
    ifSetSize(0, int8 - (int7 + int1), 1, 0, Component.interface_1111.component_1111_59);
    ifSetSize(0, int8 + int1, 1, 1, Component.interface_1111.component_1111_62);
    scrollbar_resize(Component.interface_1111.component_1111_55, Component.interface_1111.component_1111_54, ifGetScrollY(Component.interface_1111.component_1111_54));
    scrollbar_resize(Component.interface_1111.component_1111_58, Component.interface_1111.component_1111_57, ifGetScrollY(Component.interface_1111.component_1111_57));
    scrollbar_resize(Component.interface_1111.component_1111_61, Component.interface_1111.component_1111_60, ifGetScrollY(Component.interface_1111.component_1111_60));
    scrollbar_resize(Component.interface_1111.component_1111_64, Component.interface_1111.component_1111_63, ifGetScrollY(Component.interface_1111.component_1111_63));

    if (int10 == 1) {
        ifSetOnTimer(hook(cs2_5064, "i", [-1]), Component.interface_1111.component_1111_52);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_1111.component_1111_52);
    }
}
