/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5516

function cs2_5516(intArg0: component, intArg1: component): void {
    let int2: number = 0;
    let int3: number = 0;

    if (ifFind(intArg1) == 1 && ccParam(Param.glo3_sidecount) > 0) {
        int2 = ccParam(Param.glo3_sidecount) - 1;
        int3 = int2 + 10;
        while (int3 >= int2) {
            if (ccFind<1>(intArg0, int3) == 1) {
                ccSetOnTimer<1>(hook(cs2_5518, "Ii", [event_com, event_comsubid]));
            }
            int3 = int3 - 1;
        }
    }
}
