/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,unmorph_set_icon]

function unmorph_set_icon(intArg0: component): void {
    switch (varc_1727) {
        case 1:
            ifSetGraphic(Graphic.unmorph_icons_0, intArg0);
            break;
        case 2:
            ifSetGraphic(Graphic.unmorph_icons_1, intArg0);
            break;
        case 3:
            ifSetGraphic(Graphic.unmorph_icons_2, intArg0);
            break;
        default:
            ifSetGraphic(-1, intArg0);
            break;
    }
}
