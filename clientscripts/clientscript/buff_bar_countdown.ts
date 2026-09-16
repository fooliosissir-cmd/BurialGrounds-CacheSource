/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,buff_bar_countdown]

function buff_bar_countdown(intArg0: number, intArg1: number, intArg2: component): void {
    let int3: number = intArg1 - clientClock();

    if (int3 <= 0) {
        buff_bar_slot_clear(intArg0);
        return;
    }

    if (clientClock() % 25 != 0) {
        return;
    }
    let str0: string = buff_bar_time_text((int3 + 49) / 50);

    if (compare(ifGetText(intArg2), str0) != 0) {
        ifSetText(str0, intArg2);
    }
}
