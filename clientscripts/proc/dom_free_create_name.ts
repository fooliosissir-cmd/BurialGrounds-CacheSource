/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,dom_free_create_name]

function dom_free_create_name(intArg0: number, strArg0: string, intArg1: component, intArg2: component, intArg3: number): void {
    ccDeleteAll(intArg1);

    if (intArg3 == 2) {
        ccCreate(intArg1, 5, intArg0);
        ccSetSize(88, 88, 0, 0);
        ccSetPosition(1, 1, 0, 0);
        ccSetGraphic(Graphic.aif_dom_lock);
    }
    ifSetText(strArg0, intArg2);
}
