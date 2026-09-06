/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,create_setup]

function create_setup(): void {
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_0), Component.interface_673.component_673_101);
    ifSetvflip(false, Component.interface_673.component_673_101);
    ifSethflip(true, Component.interface_673.component_673_101);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_0), Component.interface_673.component_673_108);
    ifSetvflip(false, Component.interface_673.component_673_108);
    ifSethflip(false, Component.interface_673.component_673_108);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_673.component_673_102);
    ifSetvflip(false, Component.interface_673.component_673_102);
    ifSethflip(true, Component.interface_673.component_673_102);
    ifSetGraphic(gameframe_skin_graphic(Graphic.corner_frame_1_2), Component.interface_673.component_673_109);
    ifSetvflip(false, Component.interface_673.component_673_109);
    ifSethflip(false, Component.interface_673.component_673_109);
    varc_1411 = 1;
    ifSetGraphic(gameframe_skin_graphic(Graphic.check_box_2_2), Component.interface_673.component_673_40);
    browserOpen();
    varcstr_122 = "";
    varcstr_326 = "";
    varcstr_124 = "";
    varcstr_125 = "";
    varcstr_123 = "";
    varcstr_327 = "";
    varcstr_328 = "";
    varcstr_329 = "";
    varc_1407 = 0;
    varc_1408 = 0;
    varc_1101 = 0;
    create_error("", -1);
    ifSetText(getCustomStringParam(), Component.interface_673.component_673_43);
    ifSetText(getCustomStringParam(), Component.interface_673.component_673_119);
    ifSetText("", Component.interface_673.component_673_90);
    ifSetText("", Component.interface_673.component_673_80);
    ifSetGraphic(Graphic.symbols_1_1, Component.interface_673.component_673_93);
    ifSetGraphic(Graphic.symbols_1_1, Component.interface_673.component_673_112);
    ifSetGraphic(Graphic.symbols_1_1, Component.interface_673.component_673_83);
    ifSetGraphic(Graphic.symbols_1_1, Component.interface_673.component_673_73);
    ifSetGraphic(Graphic.symbols_1_1, Component.interface_673.component_673_48);
    ifSetHide(true, Component.interface_673.component_673_98);
    ifSetHide(true, Component.interface_673.component_673_117);
    ifSetHide(true, Component.interface_673.component_673_88);
    ifSetHide(true, Component.interface_673.component_673_78);
    ifSetHide(true, Component.interface_673.component_673_124);

    if (varc_1407 != 0) {
        ifSetText(tostring(varc_1407), Component.interface_673.component_673_42);
        ifSetGraphic(Graphic.symbols_1_3, Component.interface_673.component_673_48);
    } else {
        ifSetText("", Component.interface_673.component_673_42);
    }
    let int0: number = stringWidth(ifGetText(Component.interface_673.component_673_70), Graphic.verdana_11pt_regular);
    ifSetSize(int0, ifGetHeight(Component.interface_673.component_673_60), 0, 0, Component.interface_673.component_673_60);
    let int1: number = stringWidth(ifGetText(Component.interface_673.component_673_71), Graphic.verdana_11pt_regular);
    ifSetSize(int1, ifGetHeight(Component.interface_673.component_673_62), 0, 0, Component.interface_673.component_673_62);
    let int2: number = stringWidth(ifGetText(Component.interface_673.component_673_61), Graphic.verdana_11pt_regular);
    ifSetSize(int2, ifGetHeight(Component.interface_673.component_673_61), 0, 0, Component.interface_673.component_673_61);
    let str0: string = ifGetText(Component.interface_673.component_673_61);
    ifSetText(append(append(ifGetText(Component.interface_673.component_673_70), append(" ", append(ifGetText(Component.interface_673.component_673_61), " "))), ifGetText(Component.interface_673.component_673_71)), Component.interface_673.component_673_61);
    ifSetPosition(0, ifGetY(Component.interface_673.component_673_61), 1, 0, Component.interface_673.component_673_61);
    ifSetSize(stringWidth(ifGetText(Component.interface_673.component_673_61), Graphic.verdana_11pt_regular), ifGetHeight(Component.interface_673.component_673_61), 0, 0, Component.interface_673.component_673_61);
    ifSetPosition(ifGetX(Component.interface_673.component_673_61), ifGetY(Component.interface_673.component_673_60), 0, 0, Component.interface_673.component_673_60);
    ifSetText(str0, Component.interface_673.component_673_61);
    ifSetSize(int2, ifGetHeight(Component.interface_673.component_673_61), 0, 0, Component.interface_673.component_673_61);
    ifSetPosition(ifGetX(Component.interface_673.component_673_60) + ifGetWidth(Component.interface_673.component_673_60) + stringWidth(" ", Graphic.verdana_11pt_regular), ifGetY(Component.interface_673.component_673_61), 0, 0, Component.interface_673.component_673_61);
    ifSetPosition(ifGetX(Component.interface_673.component_673_61) + ifGetWidth(Component.interface_673.component_673_61) + stringWidth(" ", Graphic.verdana_11pt_regular), ifGetY(Component.interface_673.component_673_62), 0, 0, Component.interface_673.component_673_62);
    varc_1099 = 0;

    if (stringLength(getCustomStringParam()) > 0) {
        cs2_3218(Component.interface_673.component_673_89, Component.interface_673.component_673_90, Component.interface_673.component_673_91, "", 7);
    }
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_673.component_673_99, Component.interface_673.component_673_43, Component.interface_673.component_673_100, 6]), Component.interface_673.component_673_43);
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_673.component_673_118, Component.interface_673.component_673_119, Component.interface_673.component_673_120, 14]), Component.interface_673.component_673_119);
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_673.component_673_89, Component.interface_673.component_673_90, Component.interface_673.component_673_91, 7]), Component.interface_673.component_673_90);
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_673.component_673_79, Component.interface_673.component_673_80, Component.interface_673.component_673_81, 8]), Component.interface_673.component_673_80);
    ifSetOnClick(hook(cs2_3217, "iIIIi", [event_mousex, Component.interface_673.component_673_125, Component.interface_673.component_673_42, Component.interface_673.component_673_126, 15]), Component.interface_673.component_673_42);
    ifSetOnTimer(hook(cs2_4030, "", []), Component.interface_673.component_673_26);
}
