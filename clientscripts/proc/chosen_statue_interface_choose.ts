/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,chosen_statue_interface_choose]

function proc_chosen_statue_interface_choose(intArg0: number): void {
    ifSetHide(true, Component.interface_308.component_308_15);
    ifSetHide(true, Component.interface_308.component_308_14);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_35);
    ifSetHide(true, Component.interface_308.component_308_13);
    ifSetHide(true, Component.interface_308.component_308_12);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_34);
    ifSetHide(true, Component.interface_308.component_308_11);
    ifSetHide(true, Component.interface_308.component_308_10);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_33);
    ifSetHide(true, Component.interface_308.component_308_9);
    ifSetHide(true, Component.interface_308.component_308_8);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_39);
    ifSetHide(true, Component.interface_308.component_308_7);
    ifSetHide(true, Component.interface_308.component_308_6);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_37);
    ifSetHide(true, Component.interface_308.component_308_5);
    ifSetHide(true, Component.interface_308.component_308_4);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_36);
    ifSetHide(true, Component.interface_308.component_308_3);
    ifSetHide(true, Component.interface_308.component_308_2);
    ifSetGraphic(Graphic.radio_buttons_0, Component.interface_308.component_308_38);

    if (gender() == 1) {
        switch (intArg0) {
            case 0:
                ifSetHide(false, Component.interface_308.component_308_15);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_35);
                break;
            case 1:
                ifSetHide(false, Component.interface_308.component_308_13);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_34);
                break;
            case 2:
                ifSetHide(false, Component.interface_308.component_308_11);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_33);
                break;
            case 3:
                ifSetHide(false, Component.interface_308.component_308_9);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_39);
                break;
            case 4:
                ifSetHide(false, Component.interface_308.component_308_7);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_37);
                break;
            case 5:
                ifSetHide(false, Component.interface_308.component_308_5);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_36);
                break;
            case 6:
                ifSetHide(false, Component.interface_308.component_308_3);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_38);
                break;
        }
    } else {
        switch (intArg0) {
            case 0:
                ifSetHide(false, Component.interface_308.component_308_14);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_35);
                break;
            case 1:
                ifSetHide(false, Component.interface_308.component_308_12);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_34);
                break;
            case 2:
                ifSetHide(false, Component.interface_308.component_308_10);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_33);
                break;
            case 3:
                ifSetHide(false, Component.interface_308.component_308_8);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_39);
                break;
            case 4:
                ifSetHide(false, Component.interface_308.component_308_6);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_37);
                break;
            case 5:
                ifSetHide(false, Component.interface_308.component_308_4);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_36);
                break;
            case 6:
                ifSetHide(false, Component.interface_308.component_308_2);
                ifSetGraphic(Graphic.radio_buttons_1, Component.interface_308.component_308_38);
                break;
        }
    }

    if (gender() == 1) {
        ifSetHide(false, Component.interface_308.component_308_20);
        ifSetHide(false, Component.interface_308.component_308_22);
        ifSetHide(false, Component.interface_308.component_308_24);
        ifSetHide(false, Component.interface_308.component_308_26);
        ifSetHide(false, Component.interface_308.component_308_28);
        ifSetHide(false, Component.interface_308.component_308_30);
        ifSetHide(false, Component.interface_308.component_308_32);
        ifSetHide(true, Component.interface_308.component_308_19);
        ifSetHide(true, Component.interface_308.component_308_21);
        ifSetHide(true, Component.interface_308.component_308_23);
        ifSetHide(true, Component.interface_308.component_308_25);
        ifSetHide(true, Component.interface_308.component_308_27);
        ifSetHide(true, Component.interface_308.component_308_29);
        ifSetHide(true, Component.interface_308.component_308_31);
    } else {
        ifSetHide(true, Component.interface_308.component_308_20);
        ifSetHide(true, Component.interface_308.component_308_22);
        ifSetHide(true, Component.interface_308.component_308_24);
        ifSetHide(true, Component.interface_308.component_308_26);
        ifSetHide(true, Component.interface_308.component_308_28);
        ifSetHide(true, Component.interface_308.component_308_30);
        ifSetHide(true, Component.interface_308.component_308_32);
        ifSetHide(false, Component.interface_308.component_308_19);
        ifSetHide(false, Component.interface_308.component_308_21);
        ifSetHide(false, Component.interface_308.component_308_23);
        ifSetHide(false, Component.interface_308.component_308_25);
        ifSetHide(false, Component.interface_308.component_308_27);
        ifSetHide(false, Component.interface_308.component_308_29);
        ifSetHide(false, Component.interface_308.component_308_31);
    }
}
