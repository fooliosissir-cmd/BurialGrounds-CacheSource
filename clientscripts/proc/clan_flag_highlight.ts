/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_flag_highlight]

function proc_clan_flag_highlight(intArg0: number, intArg1: component, intArg2: number): void {
    let int3: number = 0;

    while (int3 < intArg2) {
        if (ccFind(intArg1, int3) == 1) {
            ccSetGraphic(Graphic.aif_smalltabs_whole_0);
        }
        int3 = int3 + 1;
    }

    if (ccFind(intArg1, intArg0) == 1) {
        ccSetGraphic(Graphic.aif_smalltabs_whole_3);
    }
}
