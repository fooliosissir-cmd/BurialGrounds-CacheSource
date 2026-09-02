/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_print]

function objreq_print(strArg0: string, intArg0: number, intArg1: number, intArg2: number, intArg3: graphic): void {
    let int4: number = 6 + varc_objreq_lines * 11;

    if (compare(strArg0, "") != 0) {
        ccCreate(Component.interface_449.component_449_8, 4, ifGetNextSubId(Component.interface_449.component_449_8));
        ccSetPosition(0, int4, 0, 0);
        ccSetSize(16384, 11 * intArg0, 2, 0);
        ccSetTextFont(intArg3);
        ccSetColour(varc_objreq_fontcol2);
        ccSetText(strArg0);
        ccSetTextAlign(intArg1, 0, 0);
        if (intArg2 == 1) {
            varc_objreq_lines = varc_objreq_lines + intArg0;
        }
    }
}
