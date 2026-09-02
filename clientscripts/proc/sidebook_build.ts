/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,sidebook_build]

function proc_sidebook_build(intArg0: component, intArg1: component, intArg2: component): void {
    ccDeleteAll(intArg0);
    ccDeleteAll(intArg1);
    ccDeleteAll(intArg2);
    varc_sidebook_currentpage = min(varc_sidebook_currentpage, varc_sidebook_pagecount - 1);
    let int3: number = 0;

    if (varc_658 > 0 || varc_659 > 0 || varc_660 > 0 || varc_661 > 0 || varc_662 > 0 || varc_663 > 0 || varc_664 > 0 || varc_665 > 0 || varc_666 > 0 || varc_667 > 0 || varc_668 > 0 || varc_669 > 0 || varc_670 > 0 || varc_658 > 13 || varc_672 > 0 || varc_673 > 0) {
        int3 = 1;
    }

    if (int3 == 0 || varc_sidebook_currentpage > 0) {
        ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
        ccSetSize(2, 14, 1, 0);
        ccSetPosition(0, 0, 1, 2);
        ccSetTextAlign(1, 1, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetColour(colour(0xFF981F));
        if (int3 == 0) {
            ccSetText(tostring(varc_sidebook_currentpage + 1) + " / " + tostring(varc_sidebook_pagecount));
        } else {
            ccSetText(tostring(varc_sidebook_currentpage) + " / " + tostring(varc_sidebook_pagecount - 1));
        }
    }

    if (varc_sidebook_currentpage > 0) {
        ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
        ccSetSize(2, 17, 1, 1);
        ccSetPosition(0, 1, 1, 0);
        ccSetTextAlign(0, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetColour(colour(0xFF981F));
        switch (varc_sidebook_currentpage) {
            case 1:
                ccSetText(varcstr_73);
                break;
            case 2:
                ccSetText(varcstr_74);
                break;
            case 3:
                ccSetText(varcstr_75);
                break;
            case 4:
                ccSetText(varcstr_76);
                break;
            case 5:
                ccSetText(varcstr_77);
                break;
            case 6:
                ccSetText(varcstr_78);
                break;
            case 7:
                ccSetText(varcstr_79);
                break;
            case 8:
                ccSetText(varcstr_80);
                break;
            case 9:
                ccSetText(varcstr_81);
                break;
            case 10:
                ccSetText(varcstr_82);
                break;
            case 11:
                ccSetText(varcstr_83);
                break;
            case 12:
                ccSetText(varcstr_84);
                break;
            case 13:
                ccSetText(varcstr_85);
                break;
            case 14:
                ccSetText(varcstr_86);
                break;
            case 15:
                ccSetText(varcstr_87);
                break;
            case 16:
                ccSetText(varcstr_88);
                break;
            case 17:
                ccSetText(varcstr_89);
                break;
            case 18:
                ccSetText(varcstr_90);
                break;
            case 19:
                ccSetText(varcstr_91);
                break;
            case 20:
                ccSetText(varcstr_92);
                break;
            case 21:
                ccSetText(varcstr_93);
                break;
            case 22:
                ccSetText(varcstr_94);
                break;
            case 23:
                ccSetText(varcstr_95);
                break;
            case 24:
                ccSetText(varcstr_96);
                break;
            case 25:
                ccSetText(varcstr_97);
                break;
            case 26:
                ccSetText(varcstr_98);
                break;
            case 27:
                ccSetText(varcstr_99);
                break;
            case 28:
                ccSetText(varcstr_100);
                break;
            case 29:
                ccSetText(varcstr_101);
                break;
            case 30:
                ccSetText(varcstr_102);
                break;
            case 31:
                ccSetText(varcstr_103);
                break;
            case 32:
                ccSetText(varcstr_104);
                break;
            case 33:
                ccSetText(varcstr_105);
                break;
            case 34:
                ccSetText(varcstr_106);
                break;
            case 35:
                ccSetText(varcstr_107);
                break;
            case 36:
                ccSetText(varcstr_108);
                break;
            case 37:
                ccSetText(varcstr_109);
                break;
            case 38:
                ccSetText(varcstr_110);
                break;
            case 39:
                ccSetText(varcstr_111);
                break;
            case 40:
                ccSetText(varcstr_112);
                break;
            case 41:
                ccSetText(varcstr_113);
                break;
            case 42:
                ccSetText(varcstr_114);
                break;
            case 43:
                ccSetText(varcstr_115);
                break;
            case 44:
                ccSetText(varcstr_116);
                break;
            case 45:
                ccSetText(varcstr_117);
                break;
            case 46:
                ccSetText(varcstr_118);
                break;
            case 47:
                ccSetText(varcstr_119);
                break;
            case 48:
                ccSetText(varcstr_120);
                break;
            case 49:
                ccSetText(varcstr_121);
                break;
        }
        return;
    }
    let int4: number = 0;
    let str0: string = "";
    let int5: number = 0;

    while (int4 < 16) {
        switch (int4) {
            case 0:
                str0 = varcstr_57;
                int5 = varc_658;
                break;
            case 1:
                str0 = varcstr_58;
                int5 = varc_659;
                break;
            case 2:
                str0 = varcstr_59;
                int5 = varc_660;
                break;
            case 3:
                str0 = varcstr_60;
                int5 = varc_661;
                break;
            case 4:
                str0 = varcstr_61;
                int5 = varc_662;
                break;
            case 5:
                str0 = varcstr_62;
                int5 = varc_663;
                break;
            case 6:
                str0 = varcstr_63;
                int5 = varc_664;
                break;
            case 7:
                str0 = varcstr_64;
                int5 = varc_665;
                break;
            case 8:
                str0 = varcstr_65;
                int5 = varc_666;
                break;
            case 9:
                str0 = varcstr_66;
                int5 = varc_667;
                break;
            case 10:
                str0 = varcstr_67;
                int5 = varc_668;
                break;
            case 11:
                str0 = varcstr_68;
                int5 = varc_669;
                break;
            case 12:
                str0 = varcstr_69;
                int5 = varc_670;
                break;
            case 13:
                str0 = varcstr_70;
                int5 = varc_671;
                break;
            case 14:
                str0 = varcstr_71;
                int5 = varc_672;
                break;
            case 15:
                str0 = varcstr_72;
                int5 = varc_673;
                break;
            default:
                str0 = "";
                int5 = 0;
                break;
        }
        if (stringLength(str0) > 0) {
            ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
            if (int4 == 16 - 1) {
                ccSetSize(6, 17, 1, 0);
            } else {
                ccSetSize(2, 12, 1, 0);
            }
            ccSetPosition(0, int4 * 12 + 1, 1, 0);
            ccSetTextAlign(0, 0, 0);
            ccSetTextFont(Graphic.p12_full);
            ccSetColour(colour(0xFF981F));
            ccSetText(str0);
            if (int5 > 0) {
                ccSetOp(1, "Go");
                ccSetOnOpt(hook(cs2_2065, "iiIII", [event_opindex, int5, intArg0, intArg1, intArg2]));
                ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
                ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFF981F)]));
            }
        }
        int4 = int4 + 1;
    }
}
