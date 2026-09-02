/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2732

function cs2_2732(intArg0: component, intArg1: number, intArg2: number, intArg3: number): void {
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 3, 0);
    ccSetSize(2, 2, 1, 1);
    ccSetPosition(0, 0, 1, 1);
    ccSetfill(true);

    if (intArg3 == 1) {
        ccSetColour(enumOp(type_int, type_int, Enum.enum_3724, intArg1));
    } else if (intArg3 == 2) {
        ccSetColour(enumOp(type_int, type_int, Enum.friend_colours, intArg1));
    } else if (intArg3 == 3) {
        ccSetColour(enumOp(type_int, type_int, Enum.guest_colours, intArg1));
    } else {
        ccSetColour(enumOp(type_int, type_int, Enum.pm_colours, intArg1));
    }
    ccCreate(intArg0, 5, 1);
    ccSetSize(20, 20, 0, 0);
    ccSetPosition(0, 0, 1, 1);
    let int4: graphic = Graphic.km_colourpickerbox_1;
    let int5: graphic = Graphic.km_colourpickerbox_0;

    if (intArg2 == intArg1) {
        ccSetGraphic(int4);
    } else {
        ccSetGraphic(int5);
        hookMouseEnter(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId(), int4]), intArg0);
        hookMouseExit(hook(cc_graphic_swapper, "Iid", [event_com, ccGetId(), int5]), intArg0);
    }
}
