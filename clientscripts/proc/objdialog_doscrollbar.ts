/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objdialog_doscrollbar]

function objdialog_doscrollbar(): void {
    let int0: number = ifGetHeight(Component.interface_389.component_389_4);
    let int1: number = ifGetScrollHeight(Component.interface_389.component_389_4);

    if (int1 < 15) {
        int1 = 15;
        ifSetScrollSize(0, 15, Component.interface_389.component_389_4);
    }
    let int2: number = int1 - int0;

    if (int2 < 0) {
        int2 = 0;
    }
    let int3: number = ifGetScrollY(Component.interface_389.component_389_4);

    if (int3 > int2) {
        int3 = int2;
    }
    scrollbar_resize(Component.interface_389.component_389_8, Component.interface_389.component_389_4, int3);
}
