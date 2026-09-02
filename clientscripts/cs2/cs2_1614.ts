/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1614

function cs2_1614(intArg0: number, intArg1: number, intArg2: obj): void {
    let int3: cursor = ocIcursor(intArg2, intArg0);

    if (int3 != -1) {
        ccSetOpCursor(intArg1, int3);
    } else {
        ccSetOpCursor(intArg1, Cursor.cursor_default);
    }
}
