/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3145

function cs2_3145(intArg0: number, intArg1: component, intArg2: number, intArg3: number): void {
    ifSetHide(true, Component.interface_910.component_910_65);
    ifSetHide(true, Component.interface_910.component_910_66);

    if (ccFind(intArg1, intArg2) == 1) {
        if (ccGetGraphic() == 1542) {
            ccSetGraphic(Graphic.graphic_1541);
        } else if (ccGetGraphic() == 1546) {
            ccSetGraphic(Graphic.graphic_1545);
        }
    }
}
