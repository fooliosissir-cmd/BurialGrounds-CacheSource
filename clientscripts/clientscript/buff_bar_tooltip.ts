/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,buff_bar_tooltip]

function buff_bar_tooltip(intArg0: number, intArg1: component, intArg2: component, intArg3: component): void {
    if (buff_bar_slot_icon(intArg0) == 0 || varbit_option_buff_bar == 0) {
        return;
    }
    let str0: string = buff_bar_slot_desc(intArg0);

    if (compare(str0, "") == 0) {
        return;
    }
    cs2_39(intArg1, intArg3, str0, 25, 450);
}
