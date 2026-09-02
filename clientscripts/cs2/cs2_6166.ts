/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6166

function cs2_6166(): void {
    let int0: number = 0;
    let int1: number = enumGetoutputcount(Enum.rcsiphonxp_item_iterator);

    ifSetHide(false, Component.interface_1273.component_1273_14);

    while (int0 < enumGetoutputcount(Enum.rcsiphonxp_item_iterator)) {
        ccCreate(Component.interface_1273.component_1273_14, 5, int0);
        int0 = int0 + 1;
    }
    int1 = rcsiphonxp_item_shop_background(int1, Component.interface_1273.component_1273_14);
    int0 = 0;

    while (int0 < enumGetoutputcount(Enum.rcsiphonxp_item_iterator) / 2) {
        if (ccFind(Component.interface_1273.component_1273_14, int0) == 1) {
            ccSendtofront();
            int1 = cs2_6172(int0, int1);
        }
        int0 = int0 + 1;
    }
    ifSetOnTimer(hook(cs2_6167, "ii", [0, int1]), Component.interface_1273.component_1273_14);
}
