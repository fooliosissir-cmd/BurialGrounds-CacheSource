/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4106

function cs2_4106(strArg0: string, intArg0: component): number {
    return (ifGetWidth(intArg0) + max(stringWidth(strArg0, Graphic.p12_full), stringWidth(ifGetText(intArg0), Graphic.p11_full))) / 2;
}
