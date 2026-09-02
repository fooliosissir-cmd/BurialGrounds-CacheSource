/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2724

function cs2_2724(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component): void {
    let int8: graphic = Graphic.graphic_10533;
    let int9: graphic = Graphic.graphic_10517;
    let int10: graphic = Graphic.graphic_10537;
    let int11: graphic = Graphic.graphic_10533;
    let int12: graphic = Graphic.graphic_10545;
    let int13: graphic = Graphic.graphic_10529;
    let int14: graphic = Graphic.graphic_10521;
    let int15: graphic = Graphic.graphic_10525;

    switch (mapLang()) {
        case 0:
            break;
        case 2:
            int8 = Graphic.graphic_10534;
            int9 = Graphic.graphic_10518;
            int10 = Graphic.graphic_10538;
            int11 = Graphic.graphic_10534;
            int12 = Graphic.graphic_10546;
            int13 = Graphic.graphic_10530;
            int14 = Graphic.graphic_10522;
            int15 = Graphic.graphic_10526;
            break;
        case 3:
            int8 = Graphic.graphic_10535;
            int9 = Graphic.graphic_10519;
            int10 = Graphic.graphic_10539;
            int11 = Graphic.graphic_10535;
            int12 = Graphic.graphic_10547;
            int13 = Graphic.graphic_10531;
            int14 = Graphic.graphic_10523;
            int15 = Graphic.graphic_10527;
            break;
        case 1:
            int8 = Graphic.graphic_10536;
            int9 = Graphic.graphic_10520;
            int10 = Graphic.graphic_10540;
            int11 = Graphic.graphic_10536;
            int12 = Graphic.graphic_10548;
            int13 = Graphic.graphic_10548;
            int14 = Graphic.graphic_10524;
            int15 = Graphic.graphic_10528;
            break;
    }
    ifSetGraphic(int8, intArg0);
    ifSetGraphic(int9, intArg1);
    ifSetGraphic(int10, intArg2);
    ifSetGraphic(int11, intArg3);
    ifSetGraphic(int12, intArg4);
    ifSetGraphic(int13, intArg5);
    ifSetGraphic(int14, intArg6);
    ifSetGraphic(int15, intArg7);
}
