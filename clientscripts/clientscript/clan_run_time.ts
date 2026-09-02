/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_run_time]

function clan_run_time(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: component): void {
    let str0: string = "";
    let str1: string = "";

    if (clientClock() % 3000 == 0) {
        intArg1 = intArg1 + 1;
        if (intArg1 >= 60) {
            intArg1 = 0;
            intArg0 = intArg0 + 1;
            if (intArg0 >= 24) {
                intArg0 = 0;
            }
        }
        if (intArg0 < 10) {
            str0 = "0" + tostring(intArg0);
        } else {
            str0 = tostring(intArg0);
        }
        if (intArg1 < 10) {
            str1 = "0" + tostring(intArg1);
        } else {
            str1 = tostring(intArg1);
        }
        ifSetText(str0 + ":" + str1, intArg3);
        ifSetOnTimer(hook(clan_run_time, "iiiII", [intArg0, intArg1, intArg2, intArg3, intArg4]), intArg3);
        [str0, str1] = clan_time_tostring(intArg2, intArg0, intArg1);
        ifSetText(str0 + ":" + str1, intArg4);
    } else if (clientClock() % 50 == 0) {
        if (intArg0 < 10) {
            str0 = "0" + tostring(intArg0);
        } else {
            str0 = tostring(intArg0);
        }
        if (intArg1 < 10) {
            str1 = "0" + tostring(intArg1);
        } else {
            str1 = tostring(intArg1);
        }
        if (clientClock() % 100 == 0) {
            ifSetText(str0 + ":" + str1, intArg3);
        } else {
            ifSetText(str0 + " " + str1, intArg3);
        }
        [str0, str1] = clan_time_tostring(intArg2, intArg0, intArg1);
        if (clientClock() % 100 == 0) {
            ifSetText(str0 + ":" + str1, intArg4);
        } else {
            ifSetText(str0 + " " + str1, intArg4);
        }
    }
}
