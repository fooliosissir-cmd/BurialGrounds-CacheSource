/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ss_main_fadeout]

function ss_main_fadeout(intArg0: number): void {
    let int1: component = -1;
    let int2: component = -1;
    let int3: component = -1;
    let int4: component = -1;
    let int5: component = -1;

    switch (intArg0) {
        case 1:
            int1 = Component.interface_1309.component_1309_33;
            int2 = Component.interface_1309.component_1309_34;
            int3 = Component.interface_1309.component_1309_35;
            int4 = Component.interface_1309.component_1309_36;
            int5 = Component.interface_1309.component_1309_21;
            break;
        case 2:
            int1 = Component.interface_1309.component_1309_25;
            int2 = Component.interface_1309.component_1309_26;
            int3 = Component.interface_1309.component_1309_27;
            int4 = Component.interface_1309.component_1309_37;
            int5 = Component.interface_1309.component_1309_23;
            break;
        case 3:
            int1 = Component.interface_1309.component_1309_29;
            int2 = Component.interface_1309.component_1309_30;
            int3 = Component.interface_1309.component_1309_31;
            int4 = Component.interface_1309.component_1309_38;
            int5 = Component.interface_1309.component_1309_28;
            break;
        default:
            return;
    }

    if (int1 == -1 || int2 == -1 || int3 == -1 || int4 == -1) {
        return;
    }
    ifSetGraphic(Graphic.aif_button_standard_text_blue_12, int1);
    ifSetGraphic(Graphic.aif_button_standard_text_blue_13, int2);
    ifSetGraphic(Graphic.aif_button_standard_text_blue_14, int3);
    ifSetColour(colour(0x606062), int4);
    ifSetHide(false, int5);
}
