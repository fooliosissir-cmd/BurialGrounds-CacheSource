/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3144

function cs2_3144(intArg0: component, intArg1: component, intArg2: number, intArg3: number, strArg0: string): void {
    if (ccFind(intArg0, intArg2) == 1) {
        ifSetHide(false, Component.interface_910.component_910_65);
        ifSetHide(false, Component.interface_910.component_910_66);
        ifSetPosition(ifGetX(Component.interface_910.component_910_65), ccGetY(), 0, 0, Component.interface_910.component_910_65);
        ifSetPosition(ifGetX(Component.interface_910.component_910_66), ccGetY(), 0, 0, Component.interface_910.component_910_66);
    }

    if (ccFind(intArg1, intArg2) == 1) {
        if (ccGetGraphic() == 1541) {
            ccSetGraphic(Graphic.graphic_1542);
        } else if (ccGetGraphic() == 1545) {
            ccSetGraphic(Graphic.graphic_1546);
        }
    }

    if (intArg3 == 1) {
        ifSetColour(colour(0x606060), Component.interface_910.component_910_65);
        ifSetColour(colour(0x404040), Component.interface_910.component_910_66);
    } else {
        ifSetColour(colour(0x606060), Component.interface_910.component_910_66);
        ifSetColour(colour(0x404040), Component.interface_910.component_910_65);
    }
}
