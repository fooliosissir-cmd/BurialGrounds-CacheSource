/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,worldmap_tooltip]

function worldmap_tooltip(strArg0: string, intArg0: number, intArg1: number): void {
    if (varc_tooltip_time < clientClock() + 25) {
        varc_tooltip_time = max(varc_tooltip_time, clientClock());
        varc_tooltip_time = varc_tooltip_time + 2;
        return;
    }
    let int2: component = Component.interface_755.component_755_57;
    let int3: component = ifGetLayer(int2);
    let int4: number = ifGetWidth(int3);
    let int5: number = 0;
    let int6: number = 0;
    varc_tooltip_time = clientClock() + 10;

    if (varc_tooltip_built == 0) {
        int5 = parawidth(strArg0, int4, Graphic.p12_full);
        int6 = paraheight(strArg0, int5, Graphic.p12_full) * 12 + 9;
        int5 = int5 + 4;
        ifSetSize(int5, int6, 0, 0, int2);
        ccCreate(int2, 3, 0);
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 1, 1);
        ccSetfill(true);
        ccSetColour(colour(0x0E0E0E));
        ccCreate(int2, 3, 1);
        ccSetSize(0, 0, 1, 1);
        ccSetPosition(0, 0, 1, 1);
        ccSetfill(false);
        ccSetColour(colour(0xEBECE6));
        ccCreate(int2, 4, 2);
        ccSetSize(4, 6, 1, 1);
        ccSetPosition(0, 0, 1, 1);
        ccSetColour(colour(0xF5B241));
        ccSetTextAlign(0, 1, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText(strArg0);
        varc_tooltip_built = 1;
    }
    int5 = intArg0;
    int6 = intArg1;
    let int7: number = 0 - int5;

    if (int7 > 0) {
        int5 = int5 + int7;
    }
    int7 = int5 + ifGetWidth(int2) - int4;

    if (int7 > 0) {
        int5 = int5 - int7;
    }
    int7 = int6 + ifGetHeight(int2) - ifGetHeight(int3);

    if (int7 > 0) {
        int6 = int6 - int7;
    }
    int7 = 0 - int6;

    if (int7 > 0) {
        int6 = int6 + int7;
    }
    ifSetPosition(int5, int6, 0, 0, int2);
}
