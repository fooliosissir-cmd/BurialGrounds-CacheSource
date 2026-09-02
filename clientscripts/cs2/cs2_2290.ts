/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2290

function cs2_2290(intArg0: component, intArg1: number): void {
    if (cs2_2297(intArg1) == 0) {
        if (cs2_2295(intArg1) == 0) {
            return;
        }
        if (ccFind(intArg0, intArg1) == 1) {
            ccSetGraphic(Graphic.miscgraphics_11);
            ccSetOp(1, "Deselect");
        }
    } else if (ccFind(intArg0, intArg1) == 1) {
        ccSetGraphic(Graphic.miscgraphics_10);
        ccSetOp(1, "Select");
    }
}
