/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6090

function cs2_6090(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: number, strArg0: string): void {
    let int5: number = 0;
    let int6: number = ifGetScrollY(intArg3);

    if (intArg0 - int6 < 83) {
        int5 = 2;
    }
    aif_tooltip(Component.interface_1265.component_1265_89, intArg3, intArg4, strArg0, 180, Graphic.verdana_11pt_regular, Graphic.verdana_11pt_regular, colour(0xFFFFFF), 13, 4, int5, intArg1, intArg2);
}
