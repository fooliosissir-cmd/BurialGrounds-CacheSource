/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_create_text_click]

function clan_create_text_click(intArg0: component, intArg1: component, intArg2: number): void {
    varcstr_348 = ifGetText(intArg0);
    varc_1504 = cs2_1552(intArg2, varcstr_348, Graphic.graphic_5631, intArg0, -1);
    ifSetPosition(varc_1504, 5, 0, 0, intArg1);
}
