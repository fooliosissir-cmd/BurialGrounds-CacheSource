/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clanwars_overlay_rules]

function clanwars_overlay_rules(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: number): void {
    if (varbit_clanwars_rules_itemloss == 0) {
        ifSetColour(colour(0xFF981F), intArg3);
        ifSetColour(colour(0xFF981F), intArg4);
        ifSetGraphic(Graphic.tex_brown, intArg1);
        ifSetText("ITEMS ARE" + "<br>" + "SAFE", intArg4);
    } else {
        ifSetColour(colour(0xFFFF00), intArg3);
        ifSetColour(colour(0xFFFF00), intArg4);
        ifSetGraphic(Graphic.tex_red, intArg1);
        ifSetText("ITEMS ARE" + "<br>" + "DROPPED", intArg4);
    }
    ifSettiling(true, intArg1);
    let int6: number = parawidth(ifGetText(intArg3), 512, Graphic.p11_full);
    int6 = max(parawidth(ifGetText(intArg4), 512, Graphic.p11_full), int6);
    int6 = int6 + 6;
    let int7: number = 5;
    ifSetPosition(0, int7, 0, 0, intArg3);
    let int8: number = paraheight(ifGetText(intArg3), int6, Graphic.p11_full);
    int8 = int8 * 10 + 3;
    ifSetSize(int6, int8, 0, 0, intArg3);
    int7 = int7 + int8 - 1;
    ifSetPosition((int6 - ifGetWidth(intArg2)) / 2, int7, 0, 0, intArg2);
    int7 = int7 + ifGetHeight(intArg2) - 1;
    ifSetPosition(0, int7, 0, 0, intArg4);
    let int9: number = paraheight(ifGetText(intArg4), int6, Graphic.p11_full);
    int9 = int9 * 10 + 3;
    ifSetSize(int6, int8, 0, 0, intArg4);
    int7 = int7 + int9 + 3;
    ifSetSize(int6, int7, 0, 0, intArg0);
    ifSetSize(int6, int7, 0, 0, intArg1);
    proc_clanwars_setup_createbox(intArg0, 0, 0, 0);
}
