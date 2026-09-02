/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cursors_login]

function cursors_login(): void {
    setdefaultcursors(Cursor.cursor_default, Cursor.cursor_blank);
    pop2Int(46, -1);

    if (varc_987 == true || varc_987 == false) {
        detailCustomcursors(varc_987);
    } else {
        varc_987 = true;
        detailCustomcursors(varc_987);
    }
}
