/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4782

function cs2_4782(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: graphic = -1;
    let int4: graphic = -1;

    switch (intArg1) {
        case 1:
            int3 = Graphic.aif_resources_progress_bar_7;
            int4 = Graphic.aif_resources_progress_bar_3;
            break;
        case 2:
            int3 = Graphic.aif_resources_progress_bar_6;
            int4 = Graphic.aif_resources_progress_bar_2;
            break;
        case 3:
            int3 = Graphic.aif_resources_progress_bar_5;
            int4 = Graphic.aif_resources_progress_bar_1;
            break;
        case 4:
            int3 = Graphic.aif_resources_progress_bar_4;
            int4 = Graphic.aif_resources_progress_bar_0;
            break;
    }

    if (intArg2 == 1) {
        ifSetGraphic(int3, intArg0);
    } else {
        ifSetGraphic(int4, intArg0);
        deltooltip_action(Component.interface_1115.component_1115_186);
    }
}
