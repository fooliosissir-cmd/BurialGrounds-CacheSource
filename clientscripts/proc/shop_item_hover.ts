/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,shop_item_hover]

function proc_shop_item_hover(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: number): void {
    if (intArg2 == 0) {
        deltooltip_action(Component.interface_1265.component_1265_89);
    }

    if (ccFind(intArg3, intArg4) == 1) {
        if (intArg0 == 0) {
            if (intArg1 == 1) {
                if (intArg2 == 1) {
                    ccSetGraphic(Graphic.graphic_10451);
                } else {
                    ccSetGraphic(Graphic.graphic_10451);
                }
            } else if (intArg2 == 1) {
                ccSetGraphic(Graphic.graphic_10449);
            } else {
                ccSetGraphic(Graphic.graphic_10448);
            }
        } else if (intArg1 == 1) {
            if (intArg2 == 1) {
                ccSetGraphic(Graphic.graphic_10456);
            } else {
                ccSetGraphic(Graphic.graphic_10456);
            }
        } else if (intArg2 == 1) {
            ccSetGraphic(Graphic.graphic_10454);
        } else {
            ccSetGraphic(Graphic.graphic_10453);
        }
    }
}
