/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_23

function cs2_23(): void {
    let [str0, int0] = cs2_12(varbit_skill_guide_skill_v2);
    ifSetText(str0, Component.interface_499.component_499_5);
    ifSetOnOpt(hook(cs2_212, "s", [enumOp(type_int, type_string, Enum.enum_696, varbit_skill_guide_skill_v2)]), Component.interface_499.component_499_27);
    let str1: string = "";
    let int1: number = 0;
    let [int20, int21] = skillguide_legacy_tabs(varbit_skill_guide_skill_v2);

    if (int0 > 1) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 0, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_9);
        ifSetHide(false, Component.interface_499.component_499_9);
    } else {
        ifSetText("", Component.interface_499.component_499_9);
        ifSetHide(true, Component.interface_499.component_499_9);
    }

    if (int0 >= 2) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 1, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_10);
        ifSetPosition(353, 78, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_10);
    } else {
        ifSetText("", Component.interface_499.component_499_10);
        ifSetHide(true, Component.interface_499.component_499_10);
    }

    if (int0 >= 3) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 2, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_11);
        ifSetPosition(353, 95, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_11);
    } else {
        ifSetText("", Component.interface_499.component_499_11);
        ifSetHide(true, Component.interface_499.component_499_11);
    }

    if (int0 >= 4) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 3, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_12);
        ifSetPosition(353, 114, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_12);
    } else {
        ifSetText("", Component.interface_499.component_499_12);
        ifSetHide(true, Component.interface_499.component_499_12);
    }

    if (int0 >= 5) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 4, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_13);
        ifSetPosition(353, 129, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_13);
    } else {
        ifSetText("", Component.interface_499.component_499_13);
        ifSetHide(true, Component.interface_499.component_499_13);
    }

    if (int0 >= 6) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 5, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_14);
        ifSetPosition(353, 146, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_14);
    } else {
        ifSetText("", Component.interface_499.component_499_14);
        ifSetHide(true, Component.interface_499.component_499_14);
    }

    if (int0 >= 7) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 6, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_15);
        ifSetPosition(353, 168, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_15);
    } else {
        ifSetText("", Component.interface_499.component_499_15);
        ifSetHide(true, Component.interface_499.component_499_15);
    }

    if (int0 >= 8) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 7, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_16);
        ifSetPosition(353, 180, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_16);
    } else {
        ifSetText("", Component.interface_499.component_499_16);
        ifSetHide(true, Component.interface_499.component_499_16);
    }

    if (int0 >= 9) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 8, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_17);
        ifSetPosition(353, 197, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_17);
    } else {
        ifSetText("", Component.interface_499.component_499_17);
        ifSetHide(true, Component.interface_499.component_499_17);
    }

    if (int0 >= 10) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 9, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_18);
        ifSetPosition(353, 214, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_18);
    } else {
        ifSetText("", Component.interface_499.component_499_18);
        ifSetHide(true, Component.interface_499.component_499_18);
    }

    if (int0 >= 11) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 10, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_19);
        ifSetPosition(353, 231, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_19);
    } else {
        ifSetText("", Component.interface_499.component_499_19);
        ifSetHide(true, Component.interface_499.component_499_19);
    }

    if (int0 >= 12) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 11, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_20);
        ifSetPosition(353, 248, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_20);
    } else {
        ifSetText("", Component.interface_499.component_499_20);
        ifSetHide(true, Component.interface_499.component_499_20);
    }

    if (int0 >= 13) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 12, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_21);
        ifSetPosition(353, 265, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_21);
    } else {
        ifSetText("", Component.interface_499.component_499_21);
        ifSetHide(true, Component.interface_499.component_499_21);
    }

    if (int0 >= 14) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 13, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_22);
        ifSetPosition(353, 282, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_22);
    } else {
        ifSetText("", Component.interface_499.component_499_22);
        ifSetHide(true, Component.interface_499.component_499_22);
    }

    if (int0 >= 15) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 14, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_23);
        ifSetPosition(353, 299, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_23);
    } else {
        ifSetText("", Component.interface_499.component_499_23);
        ifSetHide(true, Component.interface_499.component_499_23);
    }

    if (int0 >= 16) {
        [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, 15, int20, int21);
        ifSetText(str1, Component.interface_499.component_499_24);
        ifSetPosition(353, 316, 0, 0, Component.interface_499.component_499_4);
        ifSetHide(false, Component.interface_499.component_499_24);
    } else {
        ifSetText("", Component.interface_499.component_499_24);
        ifSetHide(true, Component.interface_499.component_499_24);
    }

    if (int0 < 2) {
        ifSetHide(true, Component.interface_499.component_499_3);
        ifSetHide(true, Component.interface_499.component_499_2);
        ifSetHide(true, Component.interface_499.component_499_4);
    } else {
        ifSetHide(false, Component.interface_499.component_499_3);
        ifSetHide(false, Component.interface_499.component_499_2);
        ifSetHide(false, Component.interface_499.component_499_4);
    }

    if (int0 == 2) {
        ifSetModel(Model.model_20838, Component.interface_499.component_499_2);
    } else if (int0 == 3) {
        ifSetModel(Model.model_20839, Component.interface_499.component_499_2);
    } else if (int0 == 4) {
        ifSetModel(Model.model_20840, Component.interface_499.component_499_2);
    } else if (int0 == 5) {
        ifSetModel(Model.model_20841, Component.interface_499.component_499_2);
    } else if (int0 == 6) {
        ifSetModel(Model.model_20842, Component.interface_499.component_499_2);
    } else if (int0 == 7) {
        ifSetModel(Model.model_20843, Component.interface_499.component_499_2);
    } else if (int0 == 8) {
        ifSetModel(Model.model_20844, Component.interface_499.component_499_2);
    } else if (int0 == 9) {
        ifSetModel(Model.model_20845, Component.interface_499.component_499_2);
    } else if (int0 == 10) {
        ifSetModel(Model.model_20846, Component.interface_499.component_499_2);
    } else if (int0 == 11) {
        ifSetModel(Model.model_20847, Component.interface_499.component_499_2);
    } else if (int0 == 12) {
        ifSetModel(Model.model_20848, Component.interface_499.component_499_2);
    } else if (int0 == 13) {
        ifSetModel(Model.model_20849, Component.interface_499.component_499_2);
    } else if (int0 == 14) {
        ifSetModel(Model.model_20850, Component.interface_499.component_499_2);
    } else if (int0 == 15) {
        ifSetModel(Model.model_43501, Component.interface_499.component_499_2);
    } else if (int0 == 16) {
        ifSetModel(Model.model_43500, Component.interface_499.component_499_2);
    }
    [str1, int1] = cs2_13(varbit_skill_guide_skill_v2, varbit_skill_guide_subsection_v2, int20, int21);
    ifSetText(str1, Component.interface_499.component_499_8);

    if (int1 == 0) {
        ifSetText(str1, Component.interface_499.component_499_8);
    } else {
        ifSetText(append(str1, " - Members Only"), Component.interface_499.component_499_8);
    }
    ccDeleteAll(Component.interface_499.component_499_6);
    ccDeleteAll(Component.interface_499.component_499_7);
    let int2: number = 0;
    let int3: number = 3;
    let int7: number = 0;
    let int4: obj = Obj.mcannonremains;
    let int5: obj = Obj.obj_7620;
    let int6: graphic = -1;
    let str2: string = "";
    let str3: string = "";

    while (int4 != -1) {
        [int4, int5, int6, str2, str3] = cs2_14(varbit_skill_guide_skill_v2, varbit_skill_guide_subsection_v2, int2);
        if (int4 >= 0) {
            int3 = int3 + cs2_24(int4, int5, int6, str2, int7, int3);
            int7 = int7 + 1;
        }
        int2 = int2 + 1;
    }
    ifSetScrollPos(0, 0, Component.interface_499.component_499_6);
    ifSetScrollSize(296, int3, Component.interface_499.component_499_6);

    if (int3 > 240) {
        proc_scrollbar_vertical(Component.interface_499.component_499_7, Component.interface_499.component_499_6, Graphic.scrollbar_parchment_dragger_v2_3, Graphic.scrollbar_parchment_dragger_v2_0, Graphic.scrollbar_parchment_dragger_v2_1, Graphic.scrollbar_parchment_dragger_v2_2, Graphic.scrollbar_parchment_v2_0, Graphic.scrollbar_parchment_v2_1);
    }
}
