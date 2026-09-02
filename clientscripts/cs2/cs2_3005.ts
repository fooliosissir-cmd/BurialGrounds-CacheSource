/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3005

function cs2_3005(intArg0: number, intArg1: number): void {
    let int2: component = cs2_3012(intArg1);
    let int3: number = ifGetHeight(int2);
    let int4: number = int3 - 3;

    if (int3 > 30) {
        if (int4 < 30) {
            ifSetSize(0, 30, 1, 0, int2);
        } else {
            ifSetSize(0, int4, 1, 0, int2);
        }
        switch (intArg1) {
            case 0:
                int4 = ifGetY(Component.interface_907.component_907_4) - 3;
                if (int4 < 30) {
                    ifSetPosition(0, 30, 0, 0, Component.interface_907.component_907_4);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_4);
                }
                int4 = ifGetY(Component.interface_907.component_907_5) - 3;
                if (int4 < 30 * 2) {
                    ifSetPosition(0, 30 * 2, 0, 0, Component.interface_907.component_907_5);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_5);
                }
                int4 = ifGetY(Component.interface_907.component_907_43) - 3;
                if (int4 < 30 * 3) {
                    ifSetPosition(0, 30 * 3, 0, 0, Component.interface_907.component_907_43);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_43);
                }
                break;
            case 1:
                int4 = ifGetY(Component.interface_907.component_907_5) - 3;
                if (int4 < 30 * 2) {
                    ifSetPosition(0, 30 * 2, 0, 0, Component.interface_907.component_907_5);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_5);
                }
                int4 = ifGetY(Component.interface_907.component_907_43) - 3;
                if (int4 < 30 * 3) {
                    ifSetPosition(0, 30 * 3, 0, 0, Component.interface_907.component_907_43);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_43);
                }
                break;
            case 2:
                int4 = ifGetY(Component.interface_907.component_907_43) - 3;
                if (int4 < 30 * 3) {
                    ifSetPosition(0, 30 * 3, 0, 0, Component.interface_907.component_907_43);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_43);
                }
                break;
        }
    }
    let int5: component = cs2_3012(intArg0);
    int3 = ifGetHeight(int5);
    int4 = int3 + 3;

    if (int3 < 88) {
        if (int4 > 88) {
            ifSetSize(0, 88, 1, 0, int5);
        } else {
            ifSetSize(0, int4, 1, 0, int5);
        }
        switch (intArg0) {
            case 0:
                int4 = ifGetY(Component.interface_907.component_907_4) + 3;
                if (int4 > 88) {
                    ifSetPosition(0, 88, 0, 0, Component.interface_907.component_907_4);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_4);
                }
                int4 = ifGetY(Component.interface_907.component_907_5) + 3;
                if (int4 > 88 + 30) {
                    ifSetPosition(0, 88 + 30, 0, 0, Component.interface_907.component_907_5);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_5);
                }
                int4 = ifGetY(Component.interface_907.component_907_43) + 3;
                if (int4 > 88 + 30 * 2) {
                    ifSetPosition(0, 88 + 30 * 2, 0, 0, Component.interface_907.component_907_43);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_43);
                }
                break;
            case 1:
                int4 = ifGetY(Component.interface_907.component_907_5) + 3;
                if (int4 > 88 + 30) {
                    ifSetPosition(0, 88 + 30, 0, 0, Component.interface_907.component_907_5);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_5);
                }
                int4 = ifGetY(Component.interface_907.component_907_43) + 3;
                if (int4 > 88 + 30 * 2) {
                    ifSetPosition(0, 88 + 30 * 2, 0, 0, Component.interface_907.component_907_43);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_43);
                }
                break;
            case 2:
                int4 = ifGetY(Component.interface_907.component_907_43) + 3;
                if (int4 > 88 + 30 * 2) {
                    ifSetPosition(0, 88 + 30 * 2, 0, 0, Component.interface_907.component_907_43);
                } else {
                    ifSetPosition(0, int4, 0, 0, Component.interface_907.component_907_43);
                }
                break;
        }
    } else {
        ifSetOnTimer(noHook(""), Component.interface_907.component_907_2);
        if (ifGetGraphic(cs2_3013(intArg1)) == Graphic.graphic_2669) {
            cs2_3008(...cs2_3011(intArg1));
        } else {
            cs2_3010(...cs2_3011(intArg1));
        }
        ifSetOnClick(hook(cs2_3002, "i", [3]), Component.interface_907.component_907_55);
        ifSetOnClick(hook(cs2_3002, "i", [2]), Component.interface_907.component_907_17);
        ifSetOnClick(hook(cs2_3002, "i", [1]), Component.interface_907.component_907_29);
        ifSetOnClick(hook(cs2_3002, "i", [0]), Component.interface_907.component_907_41);
    }
}
