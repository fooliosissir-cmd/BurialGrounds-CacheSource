/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_motto_text_click]

function clan_motto_text_click(intArg0: component, intArg1: component, intArg2: number): void {
    varcstr_345 = ifGetText(intArg0);
    varc_1496 = cs2_1552(intArg2, varcstr_345, Graphic.graphic_5631, intArg0, -1);
    ifSetPosition(varc_1496, 5, 0, 0, intArg1);
}
