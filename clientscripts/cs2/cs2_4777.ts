/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4777

function cs2_4777(intArg0: number, intArg1: number, intArg2: number): void {
    let int3: graphic = -1;
    let str0: string = "";
    let str1: string = "";
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = pushVarClan<2724>() / 100;
    let int8: number = pushVarClan<2725>() / 100;
    let int9: number = pushVarClan<2728>() / 100;
    let int10: number = pushVarClan<2732>() / 100;
    let int11: number = pushVarClan<2731>() / 100;
    let int12: number = pushVarClan<2730>() / 100;
    let int13: number = pushVarClan<2733>() / 100;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: number = 0;
    let int28: number = 0;
    let int29: number = 0;
    let int30: number = 0;
    let int31: number = 0;
    let int32: number = 0;
    let int33: number = 0;
    let int34: number = 0;
    let int35: number = 0;
    let int36: number = 0;
    let int37: number = 0;
    let int38: number = intArg0;
    let int39: number = 0;
    let int40: number = 0;
    let int41: number = 0;
    let str2: string = "";
    let str3: string = "";
    let int42: number = ifGetWidth(Component.interface_1115.component_1115_8) - 2;

    if (intArg0 < 1 || intArg0 > 900) {
        return;
    }

    if (clanProfileFind() == 1) {
        deltooltip_action(Component.interface_1115.component_1115_186);
        ifSetHide(false, Component.interface_1115.component_1115_34);
        [int3, str0, int4, int5, int6, int39, int40, int41] = clan_build_job_info(intArg0);
        [int14, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24, int25, int26, int27, int28, int29, int30, int31, int32, int33, int34, int35, int36, int37, int38] = cs2_4794(intArg2, int7, int8, int9, int10, int11, int12, int13);
        if (intArg0 > 300 && intArg0 < 600) {
            int4 = int4 - int5;
        }
        if (int39 == 5) {
            if (int4 == 1) {
                str3 = "(Basic)";
            } else if (int4 == 2) {
                str3 = "(Medium)";
            } else if (int4 == 3) {
                str3 = "(Grand)";
            }
        } else {
            str3 = "(Tier " + tostring(int4) + ")";
        }
        if (paraheight(str0, ifGetWidth(Component.interface_1115.component_1115_37), Graphic.verdana_11pt_regular) > 1) {
            ifSetText(str0 + " " + str3, Component.interface_1115.component_1115_37);
        } else {
            ifSetText(str0 + "<br>" + str3, Component.interface_1115.component_1115_37);
        }
        ifSetGraphic(int3, Component.interface_1115.component_1115_36);
        if (intArg0 > 600) {
            str1 = "Upgrade";
            ifSetHide(true, Component.interface_1115.component_1115_80);
            ifSetHide(true, Component.interface_1115.component_1115_42);
            ifSetHide(false, Component.interface_1115.component_1115_41);
            ifSetHide(false, Component.interface_1115.component_1115_119);
            if (int14 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_8);
                ifSetHide(false, Component.interface_1115.component_1115_9);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_8);
                ifSetHide(true, Component.interface_1115.component_1115_9);
            }
            if (int15 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_45);
                ifSetHide(false, Component.interface_1115.component_1115_46);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_45);
                ifSetHide(true, Component.interface_1115.component_1115_46);
            }
            if (int16 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_82);
                ifSetHide(false, Component.interface_1115.component_1115_83);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_82);
                ifSetHide(true, Component.interface_1115.component_1115_83);
            }
            if (int17 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_86);
                ifSetHide(false, Component.interface_1115.component_1115_87);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_86);
                ifSetHide(true, Component.interface_1115.component_1115_87);
            }
            if (int18 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_90);
                ifSetHide(false, Component.interface_1115.component_1115_91);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_90);
                ifSetHide(true, Component.interface_1115.component_1115_91);
            }
            if (int19 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_117);
                ifSetHide(false, Component.interface_1115.component_1115_118);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_117);
                ifSetHide(true, Component.interface_1115.component_1115_118);
            }
            ifSetSize(int20 * int42 / max(1, int14), ifGetHeight(Component.interface_1115.component_1115_12), 0, 0, Component.interface_1115.component_1115_12);
            str2 = tostring(int20) + "<br>" + "of" + "<br>" + tostring(int14);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_12);
            ifSetSize(int21 * int42 / max(1, int15), ifGetHeight(Component.interface_1115.component_1115_98), 0, 0, Component.interface_1115.component_1115_98);
            str2 = tostring(int21) + "<br>" + "of" + "<br>" + tostring(int15);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_98);
            ifSetSize(int22 * int42 / max(1, int16), ifGetHeight(Component.interface_1115.component_1115_103), 0, 0, Component.interface_1115.component_1115_103);
            str2 = tostring(int22) + "<br>" + "of" + "<br>" + tostring(int16);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_103);
            ifSetSize(int23 * int42 / max(1, int17), ifGetHeight(Component.interface_1115.component_1115_108), 0, 0, Component.interface_1115.component_1115_108);
            str2 = tostring(int23) + "<br>" + "of" + "<br>" + tostring(int17);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_108);
            ifSetSize(int24 * int42 / max(1, int18), ifGetHeight(Component.interface_1115.component_1115_113), 0, 0, Component.interface_1115.component_1115_113);
            str2 = tostring(int24) + "<br>" + "of" + "<br>" + tostring(int18);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_113);
            ifSetSize(int25 * int42 / max(1, int19), ifGetHeight(Component.interface_1115.component_1115_121), 0, 0, Component.interface_1115.component_1115_121);
            str2 = tostring(int25) + "<br>" + "of" + "<br>" + tostring(int19);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_121);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_12) + ifGetWidth(Component.interface_1115.component_1115_12) + 1, 0, 0, 1, Component.interface_1115.component_1115_94);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_98) + ifGetWidth(Component.interface_1115.component_1115_98) + 1, 0, 0, 1, Component.interface_1115.component_1115_99);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_103) + ifGetWidth(Component.interface_1115.component_1115_103) + 1, 0, 0, 1, Component.interface_1115.component_1115_104);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_108) + ifGetWidth(Component.interface_1115.component_1115_108) + 1, 0, 0, 1, Component.interface_1115.component_1115_109);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_113) + ifGetWidth(Component.interface_1115.component_1115_113) + 1, 0, 0, 1, Component.interface_1115.component_1115_114);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_121) + ifGetWidth(Component.interface_1115.component_1115_121) + 1, 0, 0, 1, Component.interface_1115.component_1115_122);
            ifSetSize(int26 * int42 / max(1, int14), ifGetHeight(Component.interface_1115.component_1115_94), 0, 0, Component.interface_1115.component_1115_94);
            str2 = tostring(int26) + "<br>" + "of" + "<br>" + tostring(int14);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_94);
            ifSetSize(int27 * int42 / max(1, int15), ifGetHeight(Component.interface_1115.component_1115_99), 0, 0, Component.interface_1115.component_1115_99);
            str2 = tostring(int27) + "<br>" + "of" + "<br>" + tostring(int15);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_99);
            ifSetSize(int28 * int42 / max(1, int16), ifGetHeight(Component.interface_1115.component_1115_104), 0, 0, Component.interface_1115.component_1115_104);
            str2 = tostring(int28) + "<br>" + "of" + "<br>" + tostring(int16);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_104);
            ifSetSize(int29 * int42 / max(1, int17), ifGetHeight(Component.interface_1115.component_1115_109), 0, 0, Component.interface_1115.component_1115_109);
            str2 = tostring(int29) + "<br>" + "of" + "<br>" + tostring(int17);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_109);
            ifSetSize(int30 * int42 / max(1, int18), ifGetHeight(Component.interface_1115.component_1115_114), 0, 0, Component.interface_1115.component_1115_114);
            str2 = tostring(int30) + "<br>" + "of" + "<br>" + tostring(int18);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_114);
            ifSetSize(int31 * int42 / max(1, int19), ifGetHeight(Component.interface_1115.component_1115_122), 0, 0, Component.interface_1115.component_1115_122);
            str2 = tostring(int31) + "<br>" + "of" + "<br>" + tostring(int19);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_122);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_94) + ifGetWidth(Component.interface_1115.component_1115_94) + 1, 0, 0, 1, Component.interface_1115.component_1115_95);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_99) + ifGetWidth(Component.interface_1115.component_1115_99) + 1, 0, 0, 1, Component.interface_1115.component_1115_100);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_104) + ifGetWidth(Component.interface_1115.component_1115_104) + 1, 0, 0, 1, Component.interface_1115.component_1115_105);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_109) + ifGetWidth(Component.interface_1115.component_1115_109) + 1, 0, 0, 1, Component.interface_1115.component_1115_110);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_114) + ifGetWidth(Component.interface_1115.component_1115_114) + 1, 0, 0, 1, Component.interface_1115.component_1115_115);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_122) + ifGetWidth(Component.interface_1115.component_1115_122) + 1, 0, 0, 1, Component.interface_1115.component_1115_123);
            ifSetSize(int32 * int42 / max(1, int14), ifGetHeight(Component.interface_1115.component_1115_95), 0, 0, Component.interface_1115.component_1115_95);
            str2 = tostring(int32) + "<br>" + "of" + "<br>" + tostring(int14) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_95);
            ifSetSize(int33 * int42 / max(1, int15), ifGetHeight(Component.interface_1115.component_1115_100), 0, 0, Component.interface_1115.component_1115_100);
            str2 = tostring(int33) + "<br>" + "of" + "<br>" + tostring(int15) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_100);
            ifSetSize(int34 * int42 / max(1, int16), ifGetHeight(Component.interface_1115.component_1115_105), 0, 0, Component.interface_1115.component_1115_105);
            str2 = tostring(int34) + "<br>" + "of" + "<br>" + tostring(int16) + "<br>" + "3:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_105);
            ifSetSize(int35 * int42 / max(1, int17), ifGetHeight(Component.interface_1115.component_1115_110), 0, 0, Component.interface_1115.component_1115_110);
            str2 = tostring(int35) + "<br>" + "of" + "<br>" + tostring(int17) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_110);
            ifSetSize(int36 * int42 / max(1, int18), ifGetHeight(Component.interface_1115.component_1115_115), 0, 0, Component.interface_1115.component_1115_115);
            str2 = tostring(int36) + "<br>" + "of" + "<br>" + tostring(int18) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_115);
            ifSetSize(int37 * int42 / max(1, int19), ifGetHeight(Component.interface_1115.component_1115_123), 0, 0, Component.interface_1115.component_1115_123);
            str2 = tostring(int37) + "<br>" + "of" + "<br>" + tostring(int19) + "<br>" + "3:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_123);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_95) + ifGetWidth(Component.interface_1115.component_1115_95) + 1, 0, 0, 1, Component.interface_1115.component_1115_96);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_100) + ifGetWidth(Component.interface_1115.component_1115_100) + 1, 0, 0, 1, Component.interface_1115.component_1115_101);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_105) + ifGetWidth(Component.interface_1115.component_1115_105) + 1, 0, 0, 1, Component.interface_1115.component_1115_106);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_110) + ifGetWidth(Component.interface_1115.component_1115_110) + 1, 0, 0, 1, Component.interface_1115.component_1115_111);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_115) + ifGetWidth(Component.interface_1115.component_1115_115) + 1, 0, 0, 1, Component.interface_1115.component_1115_116);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_123) + ifGetWidth(Component.interface_1115.component_1115_123) + 1, 0, 0, 1, Component.interface_1115.component_1115_124);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_12) + 1) - (ifGetWidth(Component.interface_1115.component_1115_94) + 1) - (ifGetWidth(Component.interface_1115.component_1115_95) + 1), ifGetHeight(Component.interface_1115.component_1115_96), 0, 0, Component.interface_1115.component_1115_96);
            str2 = tostring(int14 - (int20 + int26 + int32)) + "<br>" + "of" + "<br>" + tostring(int14);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_96);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_98) + 1) - (ifGetWidth(Component.interface_1115.component_1115_99) + 1) - (ifGetWidth(Component.interface_1115.component_1115_100) + 1), ifGetHeight(Component.interface_1115.component_1115_101), 0, 0, Component.interface_1115.component_1115_101);
            str2 = tostring(int15 - (int21 + int27 + int33)) + "<br>" + "of" + "<br>" + tostring(int15);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_101);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_103) + 1) - (ifGetWidth(Component.interface_1115.component_1115_104) + 1) - (ifGetWidth(Component.interface_1115.component_1115_105) + 1), ifGetHeight(Component.interface_1115.component_1115_106), 0, 0, Component.interface_1115.component_1115_106);
            str2 = tostring(int16 - (int22 + int28 + int34)) + "<br>" + "of" + "<br>" + tostring(int16);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_106);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_108) + 1) - (ifGetWidth(Component.interface_1115.component_1115_109) + 1) - (ifGetWidth(Component.interface_1115.component_1115_110) + 1), ifGetHeight(Component.interface_1115.component_1115_111), 0, 0, Component.interface_1115.component_1115_111);
            str2 = tostring(int17 - (int23 + int29 + int35)) + "<br>" + "of" + "<br>" + tostring(int17);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_111);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_113) + 1) - (ifGetWidth(Component.interface_1115.component_1115_114) + 1) - (ifGetWidth(Component.interface_1115.component_1115_115) + 1), ifGetHeight(Component.interface_1115.component_1115_116), 0, 0, Component.interface_1115.component_1115_116);
            str2 = tostring(int18 - (int24 + int30 + int36)) + "<br>" + "of" + "<br>" + tostring(int18);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_116);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_121) + 1) - (ifGetWidth(Component.interface_1115.component_1115_122) + 1) - (ifGetWidth(Component.interface_1115.component_1115_123) + 1), ifGetHeight(Component.interface_1115.component_1115_124), 0, 0, Component.interface_1115.component_1115_124);
            str2 = tostring(int19 - (int25 + int31 + int37)) + "<br>" + "of" + "<br>" + tostring(int19);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_124);
            str2 = tostring(int20) + " paid" + "<br>" + tostring(int26) + " available" + "<br>" + tostring(int32) + " from wildcard" + "<br>" + tostring(int14 - (int20 + int26 + int32)) + " shortfall";
            if (int14 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_7);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_7);
            }
            str2 = tostring(int21) + " paid" + "<br>" + tostring(int27) + " available" + "<br>" + tostring(int33) + " from wildcard" + "<br>" + tostring(int15 - (int21 + int27 + int33)) + " shortfall";
            if (int15 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_44);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_44);
            }
            str2 = tostring(int22) + " paid" + "<br>" + tostring(int28) + " available" + "<br>" + tostring(int34) + " from wildcard" + "<br>" + tostring(int16 - (int22 + int28 + int34)) + " shortfall";
            if (int16 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_81);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_81);
            }
            str2 = tostring(int23) + " paid" + "<br>" + tostring(int29) + " available" + "<br>" + tostring(int35) + " from wildcard" + "<br>" + tostring(int17 - (int23 + int29 + int35)) + " shortfall";
            if (int17 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_85);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_85);
            }
            str2 = tostring(int24) + " paid" + "<br>" + tostring(int30) + " available" + "<br>" + tostring(int36) + " from wildcard" + "<br>" + tostring(int18 - (int24 + int30 + int36)) + " shortfall";
            if (int18 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_89);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_89);
            }
            str2 = tostring(int25) + " paid" + "<br>" + tostring(int31) + " available" + "<br>" + tostring(int37) + " from wildcard" + "<br>" + tostring(int19 - (int25 + int31 + int37)) + " shortfall";
            if (int19 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_93);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_93);
            }
        } else if (intArg0 < 300) {
            str1 = "Downgrade -" + tostring(int5);
            ifSetHide(false, Component.interface_1115.component_1115_80);
            ifSetHide(false, Component.interface_1115.component_1115_42);
            ifSetHide(true, Component.interface_1115.component_1115_41);
            ifSetHide(true, Component.interface_1115.component_1115_119);
            ifSetText(tostring(int14), Component.interface_1115.component_1115_137);
            ifSetText(tostring(int15), Component.interface_1115.component_1115_139);
            ifSetText(tostring(int16), Component.interface_1115.component_1115_141);
            ifSetText(tostring(int17), Component.interface_1115.component_1115_143);
            ifSetText(tostring(int18), Component.interface_1115.component_1115_145);
            ifSetText(tostring(int19), Component.interface_1115.component_1115_147);
            [int14, int15, int16, int17, int18, int19] = clan_build_job_cost(intArg0, max(int4 - int5, 0));
            ifSetText(tostring(int14), Component.interface_1115.component_1115_138);
            ifSetText(tostring(int15), Component.interface_1115.component_1115_140);
            ifSetText(tostring(int16), Component.interface_1115.component_1115_142);
            ifSetText(tostring(int17), Component.interface_1115.component_1115_144);
            ifSetText(tostring(int18), Component.interface_1115.component_1115_146);
            ifSetText(tostring(int19), Component.interface_1115.component_1115_148);
        } else {
            str1 = "Upkeep";
            ifSetHide(true, Component.interface_1115.component_1115_80);
            ifSetHide(true, Component.interface_1115.component_1115_42);
            ifSetHide(false, Component.interface_1115.component_1115_41);
            ifSetHide(true, Component.interface_1115.component_1115_119);
            if (int14 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_8);
                ifSetHide(false, Component.interface_1115.component_1115_9);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_8);
                ifSetHide(true, Component.interface_1115.component_1115_9);
            }
            if (int15 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_45);
                ifSetHide(false, Component.interface_1115.component_1115_46);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_45);
                ifSetHide(true, Component.interface_1115.component_1115_46);
            }
            if (int16 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_82);
                ifSetHide(false, Component.interface_1115.component_1115_83);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_82);
                ifSetHide(true, Component.interface_1115.component_1115_83);
            }
            if (int17 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_86);
                ifSetHide(false, Component.interface_1115.component_1115_87);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_86);
                ifSetHide(true, Component.interface_1115.component_1115_87);
            }
            if (int18 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_90);
                ifSetHide(false, Component.interface_1115.component_1115_91);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_90);
                ifSetHide(true, Component.interface_1115.component_1115_91);
            }
            if (int19 == 0) {
                ifSetHide(true, Component.interface_1115.component_1115_117);
                ifSetHide(false, Component.interface_1115.component_1115_118);
            } else {
                ifSetHide(false, Component.interface_1115.component_1115_117);
                ifSetHide(true, Component.interface_1115.component_1115_118);
            }
            ifSetSize(int20 * int42 / max(1, int14), ifGetHeight(Component.interface_1115.component_1115_12), 0, 0, Component.interface_1115.component_1115_12);
            str2 = tostring(int20) + "<br>" + "of" + "<br>" + tostring(int14);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_12);
            ifSetSize(int21 * int42 / max(1, int15), ifGetHeight(Component.interface_1115.component_1115_98), 0, 0, Component.interface_1115.component_1115_98);
            str2 = tostring(int21) + "<br>" + "of" + "<br>" + tostring(int15);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_98);
            ifSetSize(int22 * int42 / max(1, int16), ifGetHeight(Component.interface_1115.component_1115_103), 0, 0, Component.interface_1115.component_1115_103);
            str2 = tostring(int22) + "<br>" + "of" + "<br>" + tostring(int16);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_103);
            ifSetSize(int23 * int42 / max(1, int17), ifGetHeight(Component.interface_1115.component_1115_108), 0, 0, Component.interface_1115.component_1115_108);
            str2 = tostring(int23) + "<br>" + "of" + "<br>" + tostring(int17);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_108);
            ifSetSize(int24 * int42 / max(1, int18), ifGetHeight(Component.interface_1115.component_1115_113), 0, 0, Component.interface_1115.component_1115_113);
            str2 = tostring(int24) + "<br>" + "of" + "<br>" + tostring(int18);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_113);
            ifSetSize(int25 * int42 / max(1, int19), ifGetHeight(Component.interface_1115.component_1115_121), 0, 0, Component.interface_1115.component_1115_121);
            str2 = tostring(int25) + "<br>" + "of" + "<br>" + tostring(int19);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_121);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_12) + ifGetWidth(Component.interface_1115.component_1115_12) + 1, 0, 0, 1, Component.interface_1115.component_1115_94);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_98) + ifGetWidth(Component.interface_1115.component_1115_98) + 1, 0, 0, 1, Component.interface_1115.component_1115_99);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_103) + ifGetWidth(Component.interface_1115.component_1115_103) + 1, 0, 0, 1, Component.interface_1115.component_1115_104);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_108) + ifGetWidth(Component.interface_1115.component_1115_108) + 1, 0, 0, 1, Component.interface_1115.component_1115_109);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_113) + ifGetWidth(Component.interface_1115.component_1115_113) + 1, 0, 0, 1, Component.interface_1115.component_1115_114);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_121) + ifGetWidth(Component.interface_1115.component_1115_121) + 1, 0, 0, 1, Component.interface_1115.component_1115_122);
            ifSetSize(int26 * int42 / max(1, int14), ifGetHeight(Component.interface_1115.component_1115_94), 0, 0, Component.interface_1115.component_1115_94);
            str2 = tostring(int26) + "<br>" + "of" + "<br>" + tostring(int14);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_94);
            ifSetSize(int27 * int42 / max(1, int15), ifGetHeight(Component.interface_1115.component_1115_99), 0, 0, Component.interface_1115.component_1115_99);
            str2 = tostring(int27) + "<br>" + "of" + "<br>" + tostring(int15);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_99);
            ifSetSize(int28 * int42 / max(1, int16), ifGetHeight(Component.interface_1115.component_1115_104), 0, 0, Component.interface_1115.component_1115_104);
            str2 = tostring(int28) + "<br>" + "of" + "<br>" + tostring(int16);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_104);
            ifSetSize(int29 * int42 / max(1, int17), ifGetHeight(Component.interface_1115.component_1115_109), 0, 0, Component.interface_1115.component_1115_109);
            str2 = tostring(int29) + "<br>" + "of" + "<br>" + tostring(int17);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_109);
            ifSetSize(int30 * int42 / max(1, int18), ifGetHeight(Component.interface_1115.component_1115_114), 0, 0, Component.interface_1115.component_1115_114);
            str2 = tostring(int30) + "<br>" + "of" + "<br>" + tostring(int18);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_114);
            ifSetSize(int31 * int42 / max(1, int19), ifGetHeight(Component.interface_1115.component_1115_122), 0, 0, Component.interface_1115.component_1115_122);
            str2 = tostring(int31) + "<br>" + "of" + "<br>" + tostring(int19);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_122);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_94) + ifGetWidth(Component.interface_1115.component_1115_94) + 1, 0, 0, 1, Component.interface_1115.component_1115_95);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_99) + ifGetWidth(Component.interface_1115.component_1115_99) + 1, 0, 0, 1, Component.interface_1115.component_1115_100);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_104) + ifGetWidth(Component.interface_1115.component_1115_104) + 1, 0, 0, 1, Component.interface_1115.component_1115_105);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_109) + ifGetWidth(Component.interface_1115.component_1115_109) + 1, 0, 0, 1, Component.interface_1115.component_1115_110);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_114) + ifGetWidth(Component.interface_1115.component_1115_114) + 1, 0, 0, 1, Component.interface_1115.component_1115_115);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_122) + ifGetWidth(Component.interface_1115.component_1115_122) + 1, 0, 0, 1, Component.interface_1115.component_1115_123);
            ifSetSize(int32 * int42 / max(1, int14), ifGetHeight(Component.interface_1115.component_1115_95), 0, 0, Component.interface_1115.component_1115_95);
            str2 = tostring(int32) + "<br>" + "of" + "<br>" + tostring(int14) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_95);
            ifSetSize(int33 * int42 / max(1, int15), ifGetHeight(Component.interface_1115.component_1115_100), 0, 0, Component.interface_1115.component_1115_100);
            str2 = tostring(int33) + "<br>" + "of" + "<br>" + tostring(int15) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_100);
            ifSetSize(int34 * int42 / max(1, int16), ifGetHeight(Component.interface_1115.component_1115_105), 0, 0, Component.interface_1115.component_1115_105);
            str2 = tostring(int34) + "<br>" + "of" + "<br>" + tostring(int16) + "<br>" + "3:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_105);
            ifSetSize(int35 * int42 / max(1, int17), ifGetHeight(Component.interface_1115.component_1115_110), 0, 0, Component.interface_1115.component_1115_110);
            str2 = tostring(int35) + "<br>" + "of" + "<br>" + tostring(int17) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_110);
            ifSetSize(int36 * int42 / max(1, int18), ifGetHeight(Component.interface_1115.component_1115_115), 0, 0, Component.interface_1115.component_1115_115);
            str2 = tostring(int36) + "<br>" + "of" + "<br>" + tostring(int18) + "<br>" + "1:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_115);
            ifSetSize(int37 * int42 / max(1, int19), ifGetHeight(Component.interface_1115.component_1115_123), 0, 0, Component.interface_1115.component_1115_123);
            str2 = tostring(int37) + "<br>" + "of" + "<br>" + tostring(int19) + "<br>" + "3:1 ratio";
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_123);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_95) + ifGetWidth(Component.interface_1115.component_1115_95) + 1, 0, 0, 1, Component.interface_1115.component_1115_96);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_100) + ifGetWidth(Component.interface_1115.component_1115_100) + 1, 0, 0, 1, Component.interface_1115.component_1115_101);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_105) + ifGetWidth(Component.interface_1115.component_1115_105) + 1, 0, 0, 1, Component.interface_1115.component_1115_106);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_110) + ifGetWidth(Component.interface_1115.component_1115_110) + 1, 0, 0, 1, Component.interface_1115.component_1115_111);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_115) + ifGetWidth(Component.interface_1115.component_1115_115) + 1, 0, 0, 1, Component.interface_1115.component_1115_116);
            ifSetPosition(ifGetX(Component.interface_1115.component_1115_123) + ifGetWidth(Component.interface_1115.component_1115_123) + 1, 0, 0, 1, Component.interface_1115.component_1115_124);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_12) + 1) - (ifGetWidth(Component.interface_1115.component_1115_94) + 1) - (ifGetWidth(Component.interface_1115.component_1115_95) + 1), ifGetHeight(Component.interface_1115.component_1115_96), 0, 0, Component.interface_1115.component_1115_96);
            str2 = tostring(int14 - (int20 + int26 + int32)) + "<br>" + "of" + "<br>" + tostring(int14);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_96);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_98) + 1) - (ifGetWidth(Component.interface_1115.component_1115_99) + 1) - (ifGetWidth(Component.interface_1115.component_1115_100) + 1), ifGetHeight(Component.interface_1115.component_1115_101), 0, 0, Component.interface_1115.component_1115_101);
            str2 = tostring(int15 - (int21 + int27 + int33)) + "<br>" + "of" + "<br>" + tostring(int15);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_101);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_103) + 1) - (ifGetWidth(Component.interface_1115.component_1115_104) + 1) - (ifGetWidth(Component.interface_1115.component_1115_105) + 1), ifGetHeight(Component.interface_1115.component_1115_106), 0, 0, Component.interface_1115.component_1115_106);
            str2 = tostring(int16 - (int22 + int28 + int34)) + "<br>" + "of" + "<br>" + tostring(int16);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_106);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_108) + 1) - (ifGetWidth(Component.interface_1115.component_1115_109) + 1) - (ifGetWidth(Component.interface_1115.component_1115_110) + 1), ifGetHeight(Component.interface_1115.component_1115_111), 0, 0, Component.interface_1115.component_1115_111);
            str2 = tostring(int17 - (int23 + int29 + int35)) + "<br>" + "of" + "<br>" + tostring(int17);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_111);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_113) + 1) - (ifGetWidth(Component.interface_1115.component_1115_114) + 1) - (ifGetWidth(Component.interface_1115.component_1115_115) + 1), ifGetHeight(Component.interface_1115.component_1115_116), 0, 0, Component.interface_1115.component_1115_116);
            str2 = tostring(int18 - (int24 + int30 + int36)) + "<br>" + "of" + "<br>" + tostring(int18);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_116);
            ifSetSize(int42 - (ifGetWidth(Component.interface_1115.component_1115_121) + 1) - (ifGetWidth(Component.interface_1115.component_1115_122) + 1) - (ifGetWidth(Component.interface_1115.component_1115_123) + 1), ifGetHeight(Component.interface_1115.component_1115_124), 0, 0, Component.interface_1115.component_1115_124);
            str2 = tostring(int19 - (int25 + int31 + int37)) + "<br>" + "of" + "<br>" + tostring(int19);
            ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_124);
            str2 = tostring(int26) + " available" + "<br>" + tostring(int32) + " from wildcard" + "<br>" + tostring(int14 - (int26 + int32)) + " shortfall";
            if (int14 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_7);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_7);
            }
            str2 = tostring(int27) + " available" + "<br>" + tostring(int33) + " from wildcard" + "<br>" + tostring(int15 - (int27 + int33)) + " shortfall";
            if (int15 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_44);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_44);
            }
            str2 = tostring(int28) + " available" + "<br>" + tostring(int34) + " from wildcard" + "<br>" + tostring(int16 - (int28 + int34)) + " shortfall";
            if (int16 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_81);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 2, event_mousex, event_mousey]), Component.interface_1115.component_1115_81);
            }
            str2 = tostring(int29) + " available" + "<br>" + tostring(int35) + " from wildcard" + "<br>" + tostring(int17 - (int29 + int35)) + " shortfall";
            if (int17 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_85);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_85);
            }
            str2 = tostring(int30) + " available" + "<br>" + tostring(int36) + " from wildcard" + "<br>" + tostring(int18 - (int30 + int36)) + " shortfall";
            if (int18 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_89);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_89);
            }
            str2 = tostring(int31) + " available" + "<br>" + tostring(int37) + " from wildcard" + "<br>" + tostring(int19 - (int31 + int37)) + " shortfall";
            if (int19 == 0) {
                ifSetOnMouseRepeat(noHook(""), Component.interface_1115.component_1115_93);
            } else {
                ifSetOnMouseRepeat(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1115.component_1115_186, event_com, -1, str2, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 0, event_mousex, event_mousey]), Component.interface_1115.component_1115_93);
            }
        }
        ifSetText(str1, Component.interface_1115.component_1115_79);
    }
}
