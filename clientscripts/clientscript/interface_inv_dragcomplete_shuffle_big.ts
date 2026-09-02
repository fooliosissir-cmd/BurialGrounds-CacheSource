/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_inv_dragcomplete_shuffle_big]

function interface_inv_dragcomplete_shuffle_big(intArg0: inv, intArg1: number, intArg2: number, intArg3: component, intArg4: number, intArg5: component, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, strArg6: string, strArg7: string, strArg8: string): void {
    if (intArg2 == -1) {
        interface_inv_draw_slot_big(intArg0, intArg1, intArg3, intArg1, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8);
        return;
    }
    let int6: number = intArg1;

    while (int6 != intArg2) {
        if (int6 > intArg2) {
            interface_inv_draw_slot_big(intArg0, int6 - 1, intArg3, int6, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8);
            int6 = int6 - 1;
        } else if (int6 < intArg2) {
            interface_inv_draw_slot_big(intArg0, int6 + 1, intArg3, int6, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8);
            int6 = int6 + 1;
        }
    }
    interface_inv_draw_slot_big(intArg0, intArg1, intArg3, intArg2, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8);
}
