/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_287

function cs2_287(intArg0: number, intArg1: boolean, intArg2: component, intArg3: number): void {
    ccCreate<1>(intArg2, 5, intArg0);
    ccSetSize<1>(17, 17, 0, 0);
    ccSetPosition<1>(4, intArg3 + 4, 0, 0);
    ccSetHide<1>(intArg1);
    ccSetGraphic<1>(Graphic.login_cross);
}
