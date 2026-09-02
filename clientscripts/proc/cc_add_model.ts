/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_add_model]

function cc_add_model(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: model, intArg7: obj, intArg8: number, intArg9: number, intArg10: number, intArg11: number, intArg12: number, intArg13: number): void {
    ccCreate(intArg0, 6, intArg1);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetPosition(intArg4, intArg5, 0, 0);

    if (intArg6 != -1) {
        ccSetModel(intArg6);
        ccSetModelAngle(intArg8, intArg9, intArg10, intArg11, intArg12, intArg13);
    } else {
        ccSetObject(intArg7, -1);
    }
}
