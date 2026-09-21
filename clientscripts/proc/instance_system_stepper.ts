/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_stepper]

function instance_system_stepper(intArg0: component, intArg1: number, intArg2: number, intArg3: graphic, intArg4: graphic, intArg5: number, strArg0: string, strArg1: string): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetGraphic(intArg3);
    let int0: number = ccGetId();
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetTextFont(Graphic.b12_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xEBE0BC));
    ccSetTextShadow(true);
    ccSetText(strArg0);
    ccSetOp(intArg5, strArg1);
    let int1: number = ccGetId();
    ccSetOnMouseOver(hook(clientscript_instance_system_stepper_hover, "Iiiii", [event_com, int0, intArg4, int1, colour(0xFFFFFF)]));
    ccSetOnMouseLeave(hook(clientscript_instance_system_stepper_hover, "Iiiii", [event_com, int0, intArg3, int1, colour(0xEBE0BC)]));
}
