/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_button]

function instance_system_button(intArg0: component, intArg1: number, intArg2: number, intArg3: number, strArg0: string, intArg4: boolean): void {
    let int0: colour = colour(0xFFFFFF);
    let int1: colour = colour(0xFFF6B0);
    if (intArg4 == true) {
        int0 = colour(0xFFD700);
        int1 = colour(0xFFFFFF);
    }
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(intArg3 - 52, 26, 0, 0);
    ccSetPosition(intArg1 + 26, intArg2, 0, 0);
    ccSetGraphic(Graphic.set_but_fill_2_0);
    ccSettiling(true);
    let int4: number = ccGetId();
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetGraphic(Graphic.set_but_end_2_0);
    let int5: number = ccGetId();
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(intArg1 + intArg3 - 26, intArg2, 0, 0);
    ccSetGraphic(Graphic.set_but_end_2_3);
    let int6: number = ccGetId();
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(intArg3, 26, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(int0);
    ccSetTextShadow(true);
    ccSetText(strArg0);
    ccSetOp(1, strArg0);
    let int7: number = ccGetId();
    ccSetOnMouseOver(hook(clientscript_instance_system_button_hover, "Iiiiiiiii", [event_com, int4, int5, int6, int7, Graphic.set_but_fill_2_1, Graphic.set_but_end_2_1, Graphic.set_but_end_2_4, int1]));
    ccSetOnMouseLeave(hook(clientscript_instance_system_button_hover, "Iiiiiiiii", [event_com, int4, int5, int6, int7, Graphic.set_but_fill_2_0, Graphic.set_but_end_2_0, Graphic.set_but_end_2_3, int0]));
}
