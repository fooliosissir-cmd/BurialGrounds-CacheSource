/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2223

function cs2_2223(): void {
    ifOpenSubClient(Component.interface_744.component_744_49, Interface.interface_669);
    ifSetGraphic(Graphic.graphic_4088, Component.interface_669.component_669_27);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_0), Component.interface_669.component_669_28);
    ifSetvflip(false, Component.interface_669.component_669_28);
    ifSethflip(true, Component.interface_669.component_669_28);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_0), Component.interface_669.component_669_29);
    ifSetvflip(false, Component.interface_669.component_669_29);
    ifSethflip(false, Component.interface_669.component_669_29);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_669.component_669_21);
    ifSetvflip(false, Component.interface_669.component_669_21);
    ifSethflip(true, Component.interface_669.component_669_21);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_669.component_669_26);
    ifSetvflip(false, Component.interface_669.component_669_26);
    ifSethflip(false, Component.interface_669.component_669_26);
    let str0: string = "";
    let int0: number = stringWidth(ifGetText(Component.interface_669.component_669_47), Graphic.verdana_11pt_regular);
    ifSetSize(int0, ifGetHeight(Component.interface_669.component_669_7), 0, 0, Component.interface_669.component_669_7);
    let int1: number = stringWidth(ifGetText(Component.interface_669.component_669_48), Graphic.verdana_11pt_regular);
    ifSetSize(int1, ifGetHeight(Component.interface_669.component_669_9), 0, 0, Component.interface_669.component_669_9);
    let int2: number = stringWidth(ifGetText(Component.interface_669.component_669_8), Graphic.verdana_11pt_regular);
    ifSetSize(int2, ifGetHeight(Component.interface_669.component_669_8), 0, 0, Component.interface_669.component_669_8);
    let str1: string = ifGetText(Component.interface_669.component_669_8);
    ifSetText(append(append(ifGetText(Component.interface_669.component_669_47), append(" ", append(ifGetText(Component.interface_669.component_669_8), " "))), ifGetText(Component.interface_669.component_669_48)), Component.interface_669.component_669_8);
    ifSetPosition(0, ifGetY(Component.interface_669.component_669_8), 1, 0, Component.interface_669.component_669_8);
    ifSetSize(stringWidth(ifGetText(Component.interface_669.component_669_8), Graphic.verdana_11pt_regular), ifGetHeight(Component.interface_669.component_669_8), 0, 0, Component.interface_669.component_669_8);
    ifSetPosition(ifGetX(Component.interface_669.component_669_8), ifGetY(Component.interface_669.component_669_7), 0, 0, Component.interface_669.component_669_7);
    ifSetText(str1, Component.interface_669.component_669_8);
    ifSetSize(int2, ifGetHeight(Component.interface_669.component_669_8), 0, 0, Component.interface_669.component_669_8);
    ifSetPosition(ifGetX(Component.interface_669.component_669_7) + ifGetWidth(Component.interface_669.component_669_7) + stringWidth(" ", Graphic.verdana_11pt_regular), ifGetY(Component.interface_669.component_669_8), 0, 0, Component.interface_669.component_669_8);
    ifSetPosition(ifGetX(Component.interface_669.component_669_8) + ifGetWidth(Component.interface_669.component_669_8) + stringWidth(" ", Graphic.verdana_11pt_regular), ifGetY(Component.interface_669.component_669_9), 0, 0, Component.interface_669.component_669_9);
    let [int3, int4] = userflowflagsOp();

    if (varc_1407 < 13) {
        ifSetHide(true, Component.interface_669.component_669_14);
        ifSetHide(true, Component.interface_669.component_669_27);
        ifSetHide(false, Component.interface_669.component_669_13);
        cs2_5637();
    } else {
        ifSetHide(false, Component.interface_669.component_669_14);
        ifSetHide(false, Component.interface_669.component_669_27);
        ifSetHide(true, Component.interface_669.component_669_13);
        cs2_5637();
    }
    let str2: string = "dob";
    let str3: string = "set_members_dob.ws";

    if (varc_1088 == 1) {
        str0 = "Continue To Buy";
        ifSetOnClick(hook(cs2_5634, "ss", [str2, str3]), Component.interface_669.component_669_39);
    } else {
        str0 = "Continue";
        ifSetOnClick(hook(cs2_5636, "", []), Component.interface_669.component_669_39);
    }
    createStepReached(15);
    proc_loginscreen_setactivemenu(8);
}
