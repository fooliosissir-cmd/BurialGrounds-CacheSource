/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5348

function cs2_5348(intArg0: component): void {
    let str0: string = "";

    if (varc_1648 > 0) {
        str0 = tostringLocalised(varc_1648, 1);
    } else {
        varc_1648 = 0;
        str0 = "0";
    }
    ifSetText(str0, intArg0);
}
