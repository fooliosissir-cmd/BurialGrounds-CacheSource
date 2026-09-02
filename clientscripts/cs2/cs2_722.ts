/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_722

function cs2_722(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;

    if (getWindowMode() >= 2) {
        ifSetSize(...viewportGeteffectivesize(), 0, 0, Component.interface_746.component_746_11);
        chatbox_resize_window();
        int0 = ifGetWidth(Component.interface_746.component_746_52);
        int1 = ifGetHeight(Component.interface_746.component_746_52);
        int2 = (int0 - 512) / 2;
        if (ifIsOpen(48889885, 762) == 1) {
            if (varbit_bank_show_equipscreen == 1) {
                ifSetSize(10, 10, 0, 0, Component.interface_746.component_746_29);
            } else {
                int4 = int1 - 185;
                int3 = 175;
                if (int4 > 942) {
                    int4 = 942;
                    int3 = (int1 - 175 - int4) / 2 + 175;
                } else if (int4 < 334) {
                    int4 = 334;
                    int3 = (int1 - 334) / 2;
                }
                ifSetSize(512, int4, 0, 0, Component.interface_746.component_746_29);
                cs2_1654();
            }
        } else {
            ifSetSize(512, 334, 0, 0, Component.interface_746.component_746_29);
            int3 = (int1 - 334) / 2;
        }
        if (int2 < 223) {
            int2 = 223;
        }
        if (int3 < 165) {
            int3 = 165;
        }
        ifSetPosition(int2, int3, 2, 2, Component.interface_746.component_746_29);
        if (ifIsOpen(48889867, 667) == 1) {
            ifSetSize(512, 334, 0, 0, Component.interface_746.component_746_11);
            ifSetPosition(int2, max((int1 - 334) / 2, int3), 2, 2, Component.interface_746.component_746_11);
            ifSetSize(219, 164, 1, 1, Component.interface_746.component_746_12);
            ifSetPosition(0, 0, 0, 0, Component.interface_746.component_746_12);
        } else if (ifIsOpen(48889868, 667) == 1) {
            ifSetSize(512, 334, 0, 0, Component.interface_746.component_746_12);
            ifSetPosition(int2, max((int1 - 334) / 2, int3), 2, 2, Component.interface_746.component_746_12);
            ifSetSize(0, 0, 1, 1, Component.interface_746.component_746_11);
            ifSetPosition(0, 0, 1, 1, Component.interface_746.component_746_11);
        } else {
            ifSetSize(219, 164, 1, 1, Component.interface_746.component_746_12);
            ifSetPosition(0, 0, 0, 0, Component.interface_746.component_746_12);
            ifSetSize(0, 0, 1, 1, Component.interface_746.component_746_11);
            ifSetPosition(0, 0, 1, 1, Component.interface_746.component_746_11);
        }
        if (int0 < 996) {
            ifSetPosition(0, 74, 2, 2, Component.interface_746.component_746_32);
            ifSetSize(240, 74, 0, 0, Component.interface_746.component_746_20);
            ifSetPosition(0, 37, 2, 2, Component.interface_746.component_746_66);
            ifSetPosition(30, 37, 2, 2, Component.interface_746.component_746_65);
            ifSetPosition(60, 37, 2, 2, Component.interface_746.component_746_64);
            ifSetPosition(90, 37, 2, 2, Component.interface_746.component_746_63);
            ifSetPosition(120, 37, 2, 2, Component.interface_746.component_746_62);
            ifSetPosition(150, 37, 2, 2, Component.interface_746.component_746_61);
            ifSetPosition(180, 37, 2, 2, Component.interface_746.component_746_60);
            ifSetPosition(210, 37, 2, 2, Component.interface_746.component_746_59);
            ifSetPosition(0, 37, 2, 2, Component.interface_746.component_746_98);
            ifSetPosition(30, 37, 2, 2, Component.interface_746.component_746_97);
            ifSetPosition(60, 37, 2, 2, Component.interface_746.component_746_96);
            ifSetPosition(90, 37, 2, 2, Component.interface_746.component_746_95);
            ifSetPosition(120, 37, 2, 2, Component.interface_746.component_746_94);
            ifSetPosition(150, 37, 2, 2, Component.interface_746.component_746_93);
            ifSetPosition(180, 37, 2, 2, Component.interface_746.component_746_92);
            ifSetPosition(210, 37, 2, 2, Component.interface_746.component_746_91);
            ifSetPosition(0, 37, 2, 2, Component.interface_746.component_746_82);
            ifSetPosition(30, 37, 2, 2, Component.interface_746.component_746_81);
            ifSetPosition(60, 37, 2, 2, Component.interface_746.component_746_80);
            ifSetPosition(90, 37, 2, 2, Component.interface_746.component_746_79);
            ifSetPosition(120, 37, 2, 2, Component.interface_746.component_746_78);
            ifSetPosition(150, 37, 2, 2, Component.interface_746.component_746_77);
            ifSetPosition(180, 37, 2, 2, Component.interface_746.component_746_76);
            ifSetPosition(210, 37, 2, 2, Component.interface_746.component_746_75);
            ifSetSize(249, 78, 0, 0, Component.interface_746.component_746_21);
            ifSetPosition(0, 0, 0, 0, Component.interface_746.component_746_153);
            ifSetPosition(30, 0, 0, 0, Component.interface_746.component_746_155);
            ifSetPosition(60, 0, 0, 0, Component.interface_746.component_746_157);
            ifSetPosition(90, 0, 0, 0, Component.interface_746.component_746_159);
            ifSetPosition(120, 0, 0, 0, Component.interface_746.component_746_161);
            ifSetPosition(150, 0, 0, 0, Component.interface_746.component_746_163);
            ifSetPosition(180, 0, 0, 0, Component.interface_746.component_746_165);
            ifSetPosition(210, 0, 0, 0, Component.interface_746.component_746_167);
            ifSetPosition(0, 0, 0, 0, Component.interface_746.component_746_152);
            ifSetPosition(30, 0, 0, 0, Component.interface_746.component_746_154);
            ifSetPosition(60, 0, 0, 0, Component.interface_746.component_746_156);
            ifSetPosition(90, 0, 0, 0, Component.interface_746.component_746_158);
            ifSetPosition(120, 0, 0, 0, Component.interface_746.component_746_160);
            ifSetPosition(150, 0, 0, 0, Component.interface_746.component_746_162);
            ifSetPosition(180, 0, 0, 0, Component.interface_746.component_746_164);
            ifSetPosition(210, 0, 0, 0, Component.interface_746.component_746_166);
        } else {
            ifSetPosition(0, 37, 2, 2, Component.interface_746.component_746_32);
            ifSetSize(480, 37, 0, 0, Component.interface_746.component_746_20);
            ifSetPosition(240, 0, 2, 2, Component.interface_746.component_746_66);
            ifSetPosition(270, 0, 2, 2, Component.interface_746.component_746_65);
            ifSetPosition(300, 0, 2, 2, Component.interface_746.component_746_64);
            ifSetPosition(330, 0, 2, 2, Component.interface_746.component_746_63);
            ifSetPosition(360, 0, 2, 2, Component.interface_746.component_746_62);
            ifSetPosition(390, 0, 2, 2, Component.interface_746.component_746_61);
            ifSetPosition(420, 0, 2, 2, Component.interface_746.component_746_60);
            ifSetPosition(450, 0, 2, 2, Component.interface_746.component_746_59);
            ifSetPosition(240, 0, 2, 2, Component.interface_746.component_746_98);
            ifSetPosition(270, 0, 2, 2, Component.interface_746.component_746_97);
            ifSetPosition(300, 0, 2, 2, Component.interface_746.component_746_96);
            ifSetPosition(330, 0, 2, 2, Component.interface_746.component_746_95);
            ifSetPosition(360, 0, 2, 2, Component.interface_746.component_746_94);
            ifSetPosition(390, 0, 2, 2, Component.interface_746.component_746_93);
            ifSetPosition(420, 0, 2, 2, Component.interface_746.component_746_92);
            ifSetPosition(450, 0, 2, 2, Component.interface_746.component_746_91);
            ifSetPosition(240, 0, 2, 2, Component.interface_746.component_746_82);
            ifSetPosition(270, 0, 2, 2, Component.interface_746.component_746_81);
            ifSetPosition(300, 0, 2, 2, Component.interface_746.component_746_80);
            ifSetPosition(330, 0, 2, 2, Component.interface_746.component_746_79);
            ifSetPosition(360, 0, 2, 2, Component.interface_746.component_746_78);
            ifSetPosition(390, 0, 2, 2, Component.interface_746.component_746_77);
            ifSetPosition(420, 0, 2, 2, Component.interface_746.component_746_76);
            ifSetPosition(450, 0, 2, 2, Component.interface_746.component_746_75);
            ifSetSize(489, 42, 0, 0, Component.interface_746.component_746_21);
            ifSetPosition(0, 0, 0, 0, Component.interface_746.component_746_153);
            ifSetPosition(30, 0, 0, 0, Component.interface_746.component_746_155);
            ifSetPosition(60, 0, 0, 0, Component.interface_746.component_746_157);
            ifSetPosition(90, 0, 0, 0, Component.interface_746.component_746_159);
            ifSetPosition(120, 0, 0, 0, Component.interface_746.component_746_161);
            ifSetPosition(150, 0, 0, 0, Component.interface_746.component_746_163);
            ifSetPosition(180, 0, 0, 0, Component.interface_746.component_746_165);
            ifSetPosition(210, 0, 0, 0, Component.interface_746.component_746_167);
            ifSetPosition(0, 0, 0, 0, Component.interface_746.component_746_152);
            ifSetPosition(30, 0, 0, 0, Component.interface_746.component_746_154);
            ifSetPosition(60, 0, 0, 0, Component.interface_746.component_746_156);
            ifSetPosition(90, 0, 0, 0, Component.interface_746.component_746_158);
            ifSetPosition(120, 0, 0, 0, Component.interface_746.component_746_160);
            ifSetPosition(150, 0, 0, 0, Component.interface_746.component_746_162);
            ifSetPosition(180, 0, 0, 0, Component.interface_746.component_746_164);
            ifSetPosition(210, 0, 0, 0, Component.interface_746.component_746_166);
        }
    } else if (ifIsOpen(35913772, 762) == 1 && varbit_bank_show_equipscreen == 1) {
        ifSetSize(10, 10, 0, 0, Component.interface_548.component_548_44);
        ifSendtofront(Component.interface_548.component_548_30);
        ifSendtofront(Component.interface_548.component_548_31);
        ifSendtofront(Component.interface_548.component_548_37);
        ifSendtofront(Component.interface_548.component_548_40);
        ifSendtofront(Component.interface_548.component_548_41);
        ifSendtofront(Component.interface_548.component_548_42);
        ifSendtofront(Component.interface_548.component_548_43);
        ifSendtofront(Component.interface_548.component_548_45);
        ifSendtofront(Component.interface_548.component_548_46);
        ifSendtofront(Component.interface_548.component_548_26);
        ifSendtofront(Component.interface_548.component_548_28);
        ifSendtofront(Component.interface_548.component_548_29);
        ifSendtofront(Component.interface_548.component_548_44);
        ifSendtofront(Component.interface_548.component_548_49);
    } else {
        ifSetSize(512, 334, 0, 0, Component.interface_548.component_548_44);
        ifSendtofront(Component.interface_548.component_548_28);
        ifSendtofront(Component.interface_548.component_548_29);
        ifSendtofront(Component.interface_548.component_548_30);
        ifSendtofront(Component.interface_548.component_548_31);
        ifSendtofront(Component.interface_548.component_548_37);
        ifSendtofront(Component.interface_548.component_548_40);
        ifSendtofront(Component.interface_548.component_548_41);
        ifSendtofront(Component.interface_548.component_548_42);
        ifSendtofront(Component.interface_548.component_548_43);
        ifSendtofront(Component.interface_548.component_548_26);
        ifSendtofront(Component.interface_548.component_548_44);
        ifSendtofront(Component.interface_548.component_548_45);
        ifSendtofront(Component.interface_548.component_548_46);
        ifSendtofront(Component.interface_548.component_548_49);
    }
}
