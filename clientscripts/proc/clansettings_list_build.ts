/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clansettings_list_build]

function proc_clansettings_list_build(): void {
    let int0: component = Component.interface_1096.component_1096_38;
    let int1: component = Component.interface_1096.component_1096_39;
    let int2: component = Component.interface_1096.component_1096_40;
    let int3: component = Component.interface_1096.component_1096_41;
    let int4: number = 71827533;
    let int5: number = 71827534;
    let int6: component = Component.interface_1096.component_1096_339;
    let int7: component = Component.interface_1096.component_1096_759;
    let int8: number = 218;
    let int9: number = 16384 / 2;
    let int10: number = 3;
    let int11: number = 4;
    let int12: number = 200;
    let int13: number = 3;
    let int14: number = 16;
    let int15: number = 23;
    let int16: number = 177;
    let int17: number = 4;
    let int18: number = 157;
    let int19: number = 4;
    let int20: number = 137;
    let int21: number = 4;
    let int22: number = 15;
    let int23: number = 15;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let str0: string = "0";
    let int27: number = 9;
    let int28: number = 23;
    let int29: number = 0;
    let int30: number = ifGetHeight(int0) / int15;
    let int31: number = int30 * 2;
    let int32: number = -1;
    let int33: number = -1;
    let int34: number = 0;
    let int35: number = 0;

    ccDeleteAll(int0);
    ccDeleteAll(int1);
    ccDeleteAll(int2);
    ccDeleteAll(int3);
    ccDeleteAll(int6);
    ccDeleteAll(int7);
    let str1: string = "";
    let int36: number = -1;
    let int37: number = activeClanSettingsGetAffinedCount();

    while (int26 < int37) {
        int25 = int36 / 2 * int15;
        str0 = activeClanSettingsGetAffinedDisplayName(int26);
        int33 = activeClanSettingsGetAffinedRank(int26);
        if (varc_1516 - 1 != int33) {
            int35 = 1;
            if (varc_1516 == 0 || varc_1516 == -1) {
                int35 = 0;
            }
        } else {
            int35 = 0;
        }
        ccCreate(int0, 4, int26);
        if (int35 == 0) {
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetSize(int9, int15, 2, 0);
            int32 = -1;
            if (activeClanChannelFindAffined() == 1 && activeClanChannelGetUserSlot(str0) > -1) {
                int32 = activeClanChannelGetUserWorld(activeClanChannelGetUserSlot(str0));
            }
            if (int32 == mapWorld()) {
                ccSetColour(colour(0x3CB71E));
            } else if (int32 > 0) {
                ccSetColour(colour(0xFFFF64));
            } else {
                ccSetColour(colour(0xBEB28C));
            }
            ccSetTextShadow(true);
            ccSetText(str0);
        }
        ccCreate(int2, 5, int26);
        if (int35 == 0) {
            ccSetSize(int22, int23, 0, 0);
            ccSetGraphic(enumOp(type_int, type_graphic, Enum.enum_3712, int33));
            str1 = enumOp(type_int, type_string, Enum.clan_core_player_rank_int_to_rank, int33);
            ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1096.component_1096_106, int2, int26, str1, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1096.component_1096_106]));
        }
        ccCreate(int6, 5, int26);
        if (int35 == 0) {
            ccSetSize(int22, int23, 0, 0);
            switch (int33) {
                case 0:
                    int34 = loadClanSettingVarbit<178>();
                    break;
                case 1:
                    int34 = loadClanSettingVarbit<179>();
                    break;
                case 2:
                    int34 = loadClanSettingVarbit<180>();
                    break;
                case 3:
                    int34 = loadClanSettingVarbit<181>();
                    break;
                case 4:
                    int34 = loadClanSettingVarbit<182>();
                    break;
                case 5:
                    int34 = loadClanSettingVarbit<183>();
                    break;
            }
            if (int34 == 1 || int33 >= 100) {
                ccSetGraphic(Graphic.aif_clan_rank_icons_11);
                str1 = "Rated Clan" + "<br>" + "Wars Leader";
                ccSetOnMouseOver(hook(cs2_4538, "IIisifdiiiiii", [Component.interface_1096.component_1096_106, int6, int26, str1, 120, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, 3, event_mousex, event_mousey]));
                ccHookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1096.component_1096_106]));
            }
        }
        ccCreate(int7, 5, int26);
        if (int35 == 0) {
            ccSetSize(int22, int23, 0, 0);
        }
        ccCreate(int3, 5, int26);
        if (int35 == 0) {
            ccSetSize(int27, int28, 0, 0);
            ccSetGraphic(gameframe_skin_graphic(Graphic.aif_browngrad_whole_btn_3));
            ccSetOp(1, "Show details");
            ccSetOnOpt(hook(cs2_4303, "", []));
        }
        int26 = int26 + 1;
    }
    let int38: number = 0;
    int26 = 0;
    let int39: number = 0;

    while (int26 < int37) {
        activeClanSettingsGetsortedaffinedslot();
        int39 = int26;
        if (ccFind(int0, int39) == 1 && compare(ccGetText(), "") != 0) {
            if (int38 % 2 != 0) {
                int24 = int8;
            } else {
                int24 = 0;
            }
            int25 = int38 / 2 * int15;
            ccSetPosition(int10 + int24, int11 + int25, 0, 0);
            if (ccFind(int2, int39) == 1) {
                ccSetPosition(int16 + int24, int17 + int25, 0, 0);
            }
            if (ccFind(int3, int39) == 1) {
                ccSetPosition(int12 + int24, int25, 0, 0);
            }
            if (ccFind(int6, int39) == 1) {
                ccSetPosition(int18 + int24, int19 + int25, 0, 0);
            }
            if (ccFind(int7, int39) == 1) {
                ccSetPosition(int20 + int24, int21 + int25, 0, 0);
            }
            int38 = int38 + 1;
        }
        int26 = int26 + 1;
    }
    varc_clansettings_clanmate_unfiltered_count = int38;
    clansettings_list_scrollbar_update();
}
