/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_834

function cs2_834(intArg0: component): void {
    switch (varbit_darkness_level) {
        case 1:
            ifSetTrans(200, intArg0);
            break;
        case 2:
            ifSetTrans(150, intArg0);
            break;
        case 3:
            ifSetTrans(50, intArg0);
            break;
        default:
            ifSetTrans(255, intArg0);
            break;
    }
}
