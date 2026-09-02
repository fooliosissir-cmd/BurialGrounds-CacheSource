/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3408

function cs2_3408(intArg0: component, strArg0: string): void {
    let str1: string = "<u=88ffff>" + strArg0 + "</u>";
    let str2: string = "<u=64c8fa>" + strArg0 + "</u>";

    ifSetOp(1, "Open link", intArg0);
    ifSetOpCursor(1, Cursor.cursor_advisor_no_ring_1, intArg0);
    hookMouseEnter(hook(cs2_2381, "Iis", [intArg0, colour(0x88FFFF), str1]), intArg0);
    hookMouseExit(hook(cs2_2381, "Iis", [intArg0, colour(0x64C8FA), str2]), intArg0);
}
