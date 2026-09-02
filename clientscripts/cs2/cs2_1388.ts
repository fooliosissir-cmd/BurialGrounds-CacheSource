/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1388

function cs2_1388(intArg0: component): void {
    ccDeleteAll(intArg0);
    ccDeleteAll(Component.interface_271.component_271_6);
    let int1: number = 5;
    let int2: number = 15;
    let int3: number = 15;
    let int4: number = 0;
    let int5: number = 6;
    let int6: number = 28;
    let int7: number = 30;

    if (varbit_prayer_mode == 1) {
        int7 = 20;
    }

    while (int4 < int7) {
        ccCreate(intArg0, 5, int4);
        ccSetSize(int2, int3, 0, 0);
        ccSettiling(true);
        ccSetPosition(int5, int6, 0, 0);
        if (cs2_2297(int4) == 0) {
            ccSetOp(1, "Select" + "<col=ff9040>");
            ccSetGraphic(Graphic.miscgraphics_10);
        } else {
            ccSetOp(1, "Deselect" + "<col=ff9040>");
            ccSetGraphic(Graphic.miscgraphics_11);
        }
        ccSetOnOpt(hook(cs2_2290, "Ii", [event_com, event_comsubid]));
        ccSetOnVarTransmit(hook(cs2_2291, "IiY", [event_com, event_comsubid], [1397, 1587]));
        int4 = int4 + 1;
        if (int4 % int1 == 0) {
            int5 = 6;
            int6 = int6 + 35;
        } else {
            int5 = int5 + 37;
        }
    }
}
