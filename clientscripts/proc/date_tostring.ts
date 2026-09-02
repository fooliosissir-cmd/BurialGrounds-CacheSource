/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,date_tostring]

function date_tostring(intArg0: number, intArg1: number, intArg2: number): string {
    if (intArg0 > 0) {
        if (intArg1 > 0) {
            if (intArg2 > 0) {
                return tostring(intArg0) + " " + text_plural(intArg0, "day", "days") + ", " + tostring(intArg1) + " " + text_plural(intArg0, "hour", "hours") + " and " + tostring(intArg2) + " " + text_plural(intArg0, "minute", "minutes");
            } else {
                return tostring(intArg0) + " " + text_plural(intArg0, "day", "days") + " and " + tostring(intArg1) + " " + text_plural(intArg0, "hour", "hours");
            }
        } else if (intArg2 > 0) {
            return tostring(intArg0) + " " + text_plural(intArg0, "day", "days") + " and " + tostring(intArg2) + " " + text_plural(intArg0, "minute", "minutes");
        } else {
            return tostring(intArg0) + " " + text_plural(intArg0, "day", "days");
        }
    } else if (intArg1 > 0) {
        if (intArg2 > 0) {
            return tostring(intArg1) + " " + text_plural(intArg0, "hour", "hours") + " and " + tostring(intArg2) + " " + text_plural(intArg0, "minute", "minutes");
        } else {
            return tostring(intArg1) + " " + text_plural(intArg0, "hour", "hours");
        }
    } else if (intArg2 > 0) {
        return tostring(intArg2) + " " + text_plural(intArg0, "minute", "minutes");
    } else {
        return "";
    }
}
