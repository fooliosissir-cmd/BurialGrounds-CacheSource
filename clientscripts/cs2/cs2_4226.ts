/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4226

function cs2_4226(intArg0: number, intArg1: graphic, intArg2: number): void {
    if (ccFind(Component.interface_1216.component_1216_3, intArg0) == 1 && ccGetGraphic() == -1 && clientClock() > intArg2) {
        ccSetGraphic(intArg1);
    }
    cs2_3370(intArg0, intArg2);
}
