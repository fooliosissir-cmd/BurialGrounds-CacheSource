/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_565

function cs2_565(): void {
    let int0: number = 50;
    let int1: number = 45;
    let str0: string = magic_tostring(varbit_4138);

    if (varbit_4140 > 0) {
        ifSetHide(false, Component.interface_635.component_635_33);
        ifSetText(tostring(varbit_4140), Component.interface_635.component_635_35);
        ifSetText(tostring(varbit_4143), Component.interface_635.component_635_32);
        ifSetText(str0 + " Coins", Component.interface_635.component_635_30);
        if (varbit_4144 == 0) {
            ifSetGraphic(Graphic.staticons2_8, Component.interface_635.component_635_15);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_15);
            ifSetHide(false, Component.interface_635.component_635_2);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_2);
        }
        if (varbit_4145 == 0) {
            ifSetGraphic(Graphic.staticons2_10, Component.interface_635.component_635_16);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_16);
            ifSetHide(false, Component.interface_635.component_635_3);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_3);
        }
        if (varbit_4146 == 0) {
            ifSetGraphic(Graphic.staticons_4, Component.interface_635.component_635_17);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_17);
            ifSetHide(false, Component.interface_635.component_635_4);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_4);
        }
        if (varbit_4147 == 0) {
            ifSetGraphic(Graphic.staticons2_11, Component.interface_635.component_635_18);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_18);
            ifSetHide(false, Component.interface_635.component_635_5);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_5);
        }
        if (varbit_4151 == 0) {
            ifSetGraphic(Graphic.staticons_6, Component.interface_635.component_635_20);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_20);
            ifSetHide(false, Component.interface_635.component_635_7);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_7);
        }
        if (varbit_4152 == 1) {
            ifSetGraphic(Graphic.graphic_227, Component.interface_635.component_635_21);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_21);
            ifSetHide(false, Component.interface_635.component_635_8);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_8);
        }
        if (varbit_4276 == 1) {
            ifSetGraphic(Graphic.staticons2_7, Component.interface_635.component_635_19);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_19);
            ifSetHide(false, Component.interface_635.component_635_6);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_6);
        }
        int0 = 8;
        int1 = 45;
        if (varbit_4148 == 0) {
            ifSetGraphic(Graphic.staticons_3, Component.interface_635.component_635_22);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_22);
            ifSetHide(false, Component.interface_635.component_635_9);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_9);
        }
        if (varbit_4149 == 0) {
            ifSetGraphic(Graphic.staticons_0, Component.interface_635.component_635_23);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_23);
            ifSetHide(false, Component.interface_635.component_635_10);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_10);
        }
        if (varbit_4150 == 0) {
            ifSetGraphic(Graphic.staticons_5, Component.interface_635.component_635_24);
            ifSetPosition(int0, int1, 0, 0, Component.interface_635.component_635_24);
            ifSetHide(false, Component.interface_635.component_635_11);
            int1 = int1 + 29;
        } else {
            ifSetHide(true, Component.interface_635.component_635_11);
        }
    } else {
        ifSetGraphic(-1, Component.interface_635.component_635_15);
        ifSetGraphic(-1, Component.interface_635.component_635_16);
        ifSetGraphic(-1, Component.interface_635.component_635_17);
        ifSetGraphic(-1, Component.interface_635.component_635_18);
        ifSetGraphic(-1, Component.interface_635.component_635_20);
        ifSetGraphic(-1, Component.interface_635.component_635_21);
        ifSetGraphic(-1, Component.interface_635.component_635_22);
        ifSetGraphic(-1, Component.interface_635.component_635_24);
        ifSetGraphic(-1, Component.interface_635.component_635_23);
        ifSetGraphic(-1, Component.interface_635.component_635_19);
        ifSetText(" ", Component.interface_635.component_635_32);
        ifSetText(" ", Component.interface_635.component_635_30);
        ifSetText(" ", Component.interface_635.component_635_26);
        ifSetHide(true, Component.interface_635.component_635_33);
    }
}
