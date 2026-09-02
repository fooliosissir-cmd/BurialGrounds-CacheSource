/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6094

function cs2_6094(): void {
    let int0: component = Component.interface_1265.component_1265_20;
    let int1: graphic = Graphic.graphic_10448;

    if (varbit_shop_verbose_mode == 1) {
        int1 = Graphic.graphic_10453;
    }
    let int2: number = 0;

    while (int2 < 40) {
        if (ccFind(int0, int2) == 1) {
            ccSetGraphic(int1);
            ccHookMouseEnter(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 0, 1, event_com, event_comsubid]));
            ccHookMouseExit(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 0, 0, event_com, event_comsubid]));
        }
        int2 = int2 + 1;
    }
    int2 = 0;
    int0 = Component.interface_1265.component_1265_21;

    while (int2 < 40) {
        if (ccFind(int0, int2) == 1) {
            ccSetGraphic(int1);
            ccHookMouseEnter(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 0, 1, event_com, event_comsubid]));
            ccHookMouseExit(hook(clientscript_shop_item_hover, "iiiIi", [varbit_shop_verbose_mode, 0, 0, event_com, event_comsubid]));
        }
        int2 = int2 + 1;
    }
}
