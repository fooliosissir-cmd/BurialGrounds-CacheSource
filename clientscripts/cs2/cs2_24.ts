/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_24

function cs2_24(intArg0: obj, intArg1: obj, intArg2: graphic, strArg0: string, intArg3: number, intArg4: number): number {
    ccCreate(Component.interface_499.component_499_6, 4, intArg3 * 3);
    ccSetSize(26, 32, 0, 0);

    if (intArg0 > Obj.mcannonremains) {
        ccSetText(tostring(intArg0));
    } else {
        ccSetText(" ");
    }
    ccSetPosition(0, intArg4, 0, 0);
    ccSetTextAlign(2, 0, 0);
    ccSetColour(colour(0x46320A));
    ccSetTextFont(Graphic.q8_full);
    ccSetTextShadow(false);
    ccCreate(Component.interface_499.component_499_6, 5, intArg3 * 3 + 1);
    ccSetSize(36, 32, 0, 0);

    if (cs2_1566(varbit_skill_guide_skill_v2, varbit_skill_guide_subsection_v2) == 1) {
        if (varbit_skill_guide_skill_v2 == 7) {
            ccSetSize(30, 30, 0, 0);
        } else if (varbit_skill_guide_skill_v2 == 4) {
            ccSetSize(24, 24, 0, 0);
            ccSetPosition(0, intArg4, 1, 0);
        }
        ccSetOutline(0);
        if (intArg2 != -1) {
            ccSetGraphic(intArg2);
        } else {
            ccSetGraphic(Graphic.graphic_2287);
        }
    } else if (intArg1 != -1) {
        if (intArg1 == Obj.obj_18637 || intArg1 == Obj.obj_18638) {
            ccSetSize(24, 24, 0, 0);
            ccSetPosition(0, intArg4, 1, 0);
            ccSetOutline(0);
            if (intArg1 == Obj.obj_18637) {
                ccSetGraphic(Graphic.magicon2_51);
            } else {
                ccSetGraphic(Graphic.magicon2_50);
            }
        } else {
            ccSetOutline(1);
            ccSetGraphicShadow(6311474);
            ccSetObject(intArg1, -1);
            if (varbit_skill_guide_skill_v2 == 21 && varbit_skill_guide_subsection_v2 != 10) {
                ccSetOp(1, "Check protection price");
                ccSetOnOpt(hook(cs2_1865, "io", [event_opindex, intArg1]));
                ccHookMouseEnter(hook(cs2_1862, "Ii", [event_com, event_comsubid]));
                ccHookMouseExit(hook(cs2_1863, "Ii", [event_com, event_comsubid]));
            } else if (varbit_skill_guide_skill_v2 == 22 && varbit_skill_guide_subsection_v2 != 13 && varbit_skill_guide_subsection_v2 != 14 && varbit_skill_guide_subsection_v2 != 15) {
                ccSetOp(1, "Check materials");
                ccSetOnOpt(hook(cs2_1864, "ioii", [event_opindex, intArg1, varbit_skill_guide_subsection_v2, intArg3]));
                ccHookMouseEnter(hook(cs2_1862, "Ii", [event_com, event_comsubid]));
                ccHookMouseExit(hook(cs2_1863, "Ii", [event_com, event_comsubid]));
            }
        }
    } else {
        ccSetObject(Obj.obj_7620, -1);
    }
    ccSetPosition(28, intArg4, 0, 0);
    ccCreate(Component.interface_499.component_499_6, 4, intArg3 * 3 + 2);
    let int5: number = paraheight(strArg0, 228, Graphic.p12_full);
    ccSetSize(228, int5 * 15, 0, 0);
    ccSetText(strArg0);
    ccSetPosition(66, intArg4, 0, 0);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0x46320A));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextShadow(false);

    if (int5 * 15 < 32) {
        return 32;
    } else {
        return int5 * 15 + 5;
    }
}
