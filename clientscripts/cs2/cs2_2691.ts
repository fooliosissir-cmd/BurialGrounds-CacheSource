/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2691

function cs2_2691(intArg0: component, intArg1: number, intArg2: boolean, intArg3: number, intArg4: colour, intArg5: boolean): void {
    if (intArg5 == true && ccFind(intArg0, intArg3) == 1) {
        ccSetColour(intArg4);
    }

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 == true) {
            if (ccGetGraphic() == 2554) {
                ccSetGraphic(Graphic.graphic_2555);
            } else if (ccGetGraphic() == 2556) {
                ccSetGraphic(Graphic.graphic_2557);
            }
        } else if (ccGetGraphic() == 2555) {
            ccSetGraphic(Graphic.graphic_2554);
        } else if (ccGetGraphic() == 2557) {
            ccSetGraphic(Graphic.graphic_2556);
        }
    }
}
