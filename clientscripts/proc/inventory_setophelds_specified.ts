/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,inventory_setophelds_specified]

function inventory_setophelds_specified(strArg0: string, intArg0: cursor, strArg1: string, intArg1: cursor, strArg2: string, intArg2: cursor, strArg3: string, intArg3: cursor, strArg4: string, intArg4: cursor, strArg5: string): void {
    if (stringLength(strArg0) > 0) {
        ccSetOp(1, strArg0);
        if (intArg0 != -1) {
            ccSetOpCursor(1, intArg0);
        } else {
            ccSetOpCursor(1, Cursor.cursor_default);
        }
    }

    if (stringLength(strArg1) > 0) {
        ccSetOp(2, strArg1);
        if (intArg1 != -1) {
            ccSetOpCursor(2, intArg1);
        } else {
            ccSetOpCursor(2, Cursor.cursor_default);
        }
    }

    if (stringLength(strArg2) > 0) {
        ccSetOp(3, strArg2);
        if (intArg2 != -1) {
            ccSetOpCursor(3, intArg2);
        } else {
            ccSetOpCursor(3, Cursor.cursor_default);
        }
    }
    ccSettargetverb("Use");
    ccSetTargetOpCursor(Cursor.cursor_use);
    ccSettargetcursors(Cursor.cursor_use, Cursor.cursor_default);
    ccSetOp(10, "Examine");

    if (stringLength(strArg3) > 0) {
        ccSetOp(7, strArg3);
        if (intArg3 != -1) {
            ccSetOpCursor(7, intArg3);
        } else {
            ccSetOpCursor(7, Cursor.cursor_default);
        }
    }

    if (stringLength(strArg4) > 0) {
        ccSetOp(8, strArg4);
        if (intArg4 != -1) {
            ccSetOpCursor(8, intArg4);
        } else {
            ccSetOpCursor(8, Cursor.cursor_default);
        }
    }
}
