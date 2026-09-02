/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,kr_display_riddle]

function kr_display_riddle(): void {
    if (varc_40 == 0) {
        ifSetText("Show riddle", Component.interface_390.component_390_6);
        ifSetOp(1, "Show", Component.interface_390.component_390_6);
        ifSetHide(false, Component.interface_390.component_390_7);
        ifSetHide(false, Component.interface_390.component_390_8);
        ifSetHide(false, Component.interface_390.component_390_9);
        ifSetHide(false, Component.interface_390.component_390_10);
        ifSetHide(false, Component.interface_390.component_390_11);
        ifSetHide(false, Component.interface_390.component_390_12);
        ifSetHide(false, Component.interface_390.component_390_13);
        ifSetHide(false, Component.interface_390.component_390_14);
        ifSetHide(true, Component.interface_390.component_390_3);
        ifSetHide(true, Component.interface_390.component_390_5);
        varc_40 = 1;
    } else {
        ifSetText("Hide riddle", Component.interface_390.component_390_6);
        ifSetOp(1, "Hide", Component.interface_390.component_390_6);
        ifSetText("You seek the grail of old," + "<br>" + "but no longer is it a goblet of gold." + "<br>" + "Among these nine will you find what you seek," + "<br>" + "but be careful and don't peek!" + "<br>" + "A wrong choice will expel you," + "<br>" + "so consider carefully each clue." + "<br>" + "<br>" + "Three boxes contain only air," + "<br>" + "beware of three boxes, for danger lurks there." + "<br>" + "Two hold only rubbish but would fool you with disguise," + "<br>" + "only one box holds your prize." + "<br>" + "<br>" + "Clues will give the information you need," + "<br>" + "<br>" + "rubbish always sits to the right of danger, pay heed." + "<br>" + "There is nothing helpful in boxes great in height," + "<br>" + "and boxes on either end will not end your plight." + "<br>" + "A tall or small box will only bring you anger," + "<br>" + "but a square box will not put you in danger.", Component.interface_390.component_390_18);
        ifSetColour(colour(0x000000), Component.interface_390.component_390_18);
        ifSetHide(true, Component.interface_390.component_390_7);
        ifSetHide(true, Component.interface_390.component_390_8);
        ifSetHide(true, Component.interface_390.component_390_9);
        ifSetHide(true, Component.interface_390.component_390_10);
        ifSetHide(true, Component.interface_390.component_390_11);
        ifSetHide(true, Component.interface_390.component_390_12);
        ifSetHide(true, Component.interface_390.component_390_13);
        ifSetHide(true, Component.interface_390.component_390_14);
        ifSetHide(false, Component.interface_390.component_390_3);
        ifSetHide(false, Component.interface_390.component_390_5);
        ifSetScrollSize(190, 520, Component.interface_390.component_390_19);
        proc_scrollbar_vertical(Component.interface_390.component_390_5, Component.interface_390.component_390_19, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        varc_40 = 0;
    }
}
