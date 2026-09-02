/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3006

function cs2_3006(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component): void {
    ifSetSize(0, 88, 1, 0, intArg1);

    if (ifGetGraphic(intArg5) == Graphic.graphic_2669) {
        cs2_3007(intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7);
    } else {
        cs2_3009(intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7);
    }

    switch (intArg0) {
        case 0:
            ifSetPosition(0, 88, 0, 0, Component.interface_907.component_907_4);
            ifSetPosition(0, 88 + 30, 0, 0, Component.interface_907.component_907_5);
            ifSetPosition(0, 88 + 30 * 2, 0, 0, Component.interface_907.component_907_43);
            break;
        case 1:
            ifSetPosition(0, 30, 0, 0, Component.interface_907.component_907_4);
            ifSetPosition(0, 88 + 30, 0, 0, Component.interface_907.component_907_5);
            ifSetPosition(0, 88 + 30 * 2, 0, 0, Component.interface_907.component_907_43);
            break;
        case 2:
            ifSetPosition(0, 30, 0, 0, Component.interface_907.component_907_4);
            ifSetPosition(0, 30 * 2, 0, 0, Component.interface_907.component_907_5);
            ifSetPosition(0, 88 + 30 * 2, 0, 0, Component.interface_907.component_907_43);
            break;
        case 3:
            ifSetPosition(0, 30, 0, 0, Component.interface_907.component_907_4);
            ifSetPosition(0, 30 * 2, 0, 0, Component.interface_907.component_907_5);
            ifSetPosition(0, 30 * 3, 0, 0, Component.interface_907.component_907_43);
            break;
    }
}
