/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clanwars_ffa]

function proc_clanwars_ffa(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: number): void {
    if (intArg0 == 0 || (coordX(coord()) >= coordX(coord(2752, 5504, 0)) && coordX(coord()) <= coordX(coord(2879, 5631, 3)) && coordZ(coord()) >= coordZ(coord(2752, 5504, 0)) && coordZ(coord()) <= coordZ(coord(2879, 5631, 3)))) {
        if (intArg6 != -1) {
            if (coordZ(coord()) < coordZ(coord(2752, 5504, 0)) + 8) {
                ifSetHide(false, intArg6);
                ccDeleteAll(intArg6);
                proc_clanwars_setup_createbox(intArg6, 0, 0, 0);
            } else {
                ifSetHide(true, intArg6);
            }
        }
        if (intArg7 == 0 && clientClock() % 50 != 0) {
            return;
        }
        ifSetColour(colour(0xFF981F), intArg4);
        ifSetColour(colour(0xFF981F), intArg5);
        ifSetGraphic(Graphic.tex_brown, intArg2);
        ifSetText("ITEMS ARE" + "<br>" + "SAFE", intArg5);
    } else if (intArg0 == 1 || (coordX(coord()) >= coordX(coord(2944, 5504, 0)) && coordX(coord()) <= coordX(coord(3071, 5631, 3)) && coordZ(coord()) >= coordZ(coord(2944, 5504, 0)) && coordZ(coord()) <= coordZ(coord(3071, 5631, 3)))) {
        if (intArg6 != -1) {
            if (coordZ(coord()) < coordZ(coord(2944, 5504, 0)) + 8) {
                ifSetHide(false, intArg6);
                ccDeleteAll(intArg6);
                proc_clanwars_setup_createbox(intArg6, 0, 0, 0);
            } else {
                ifSetHide(true, intArg6);
            }
        }
        if (intArg7 == 0 && clientClock() % 50 != 0) {
            return;
        }
        ifSetColour(colour(0xFFFF00), intArg4);
        ifSetColour(colour(0xFFFF00), intArg5);
        ifSetGraphic(Graphic.tex_red, intArg2);
        ifSetText("ITEMS ARE" + "<br>" + "DROPPED", intArg5);
    } else {
        ifSetHide(true, intArg4);
        ifSetHide(true, intArg5);
        ifSetHide(true, intArg2);
        ifSetHide(true, intArg3);
        if (intArg6 != -1) {
            ifSetHide(true, intArg6);
        }
        ccDeleteAll(intArg1);
        return;
    }
    ifSetHide(false, intArg4);
    ifSetHide(false, intArg5);
    ifSetHide(false, intArg2);
    ifSetHide(false, intArg3);
    ifSettiling(true, intArg2);
    let int8: number = parawidth(ifGetText(intArg4), 512, Graphic.p11_full);
    int8 = max(parawidth(ifGetText(intArg5), 512, Graphic.p11_full), int8);
    int8 = int8 + 8;
    let int9: number = 5;
    ifSetPosition(0, int9, 0, 0, intArg4);
    let int10: number = paraheight(ifGetText(intArg4), int8, Graphic.p11_full);
    int10 = int10 * 10 + 3;
    ifSetSize(int8, int10, 0, 0, intArg4);
    int9 = int9 + int10 - 1;
    ifSetPosition((int8 - ifGetWidth(intArg3)) / 2, int9, 0, 0, intArg3);
    int9 = int9 + ifGetHeight(intArg3) - 1;
    ifSetPosition(0, int9, 0, 0, intArg5);
    let int11: number = paraheight(ifGetText(intArg5), int8, Graphic.p11_full);
    int11 = int11 * 10 + 3;
    ifSetSize(int8, int10, 0, 0, intArg5);
    int9 = int9 + int11 + 3;
    ifSetSize(int8, int9, 0, 0, intArg1);
    ifSetSize(int8, int9, 0, 0, intArg2);
    ccDeleteAll(intArg1);
    proc_clanwars_setup_createbox(intArg1, 0, 0, 0);
}
