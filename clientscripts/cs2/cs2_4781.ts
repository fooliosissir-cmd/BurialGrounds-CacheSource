/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4781

function cs2_4781(intArg0: component, intArg1: number, intArg2: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 == 1) {
            ccSetGraphic(Graphic.aif_button_group_1_1);
        } else {
            ccSetGraphic(Graphic.aif_button_group_1_0);
            deltooltip_action(Component.interface_1115.component_1115_186);
        }
    }
}
