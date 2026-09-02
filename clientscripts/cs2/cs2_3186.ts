/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3186

function cs2_3186(intArg0: component, intArg1: component): void {
    ifSetSize(stringWidth(ifGetText(intArg1), Graphic.welcome_font_tiny), 0, 0, 1, intArg1);
    ifSetPosition(40, 0, 2, 1, intArg1);
    ifSetSize(38, 31, 0, 0, intArg0);
    ifSetHide(false, intArg0);
}
