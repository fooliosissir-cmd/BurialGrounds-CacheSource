/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1653

function cs2_1653(): number {
    if ((ifGetHide(Component.interface_752.component_752_8) == 1 && (ifGetHide(Component.interface_752.component_752_3) == 0 || ifGetHide(Component.interface_752.component_752_7) == 0)) || ifHasSub(Component.interface_752.component_752_13) == 1 || ifHasSub(Component.interface_752.component_752_12) == 1 || ifHasSub(Component.interface_752.component_752_11) == 1 || ifHasSub(Component.interface_752.component_752_10) == 1 || ifGetHide(Component.interface_137.component_137_0) == 0) {
        return 1;
    } else {
        return 0;
    }
}
