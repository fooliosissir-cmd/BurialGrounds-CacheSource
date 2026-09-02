/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,obj_warning_arg]

function obj_warning_arg(intArg0: obj): string {
    if (cs2_926(intArg0) == 0) {
        if (cs2_925(intArg0) == 0) {
            if (compare(ocIop(intArg0, 2), "Wield") == 0) {
                return "You do not meet the requirements to use or wield this item." + "<br>";
            } else {
                return "You do not meet the requirements to use or wear this item." + "<br>";
            }
        } else if (compare(ocIop(intArg0, 2), "Wield") == 0) {
            return "You can wield this item but not use it." + "<br>";
        } else if (compare(ocIop(intArg0, 2), "Wear") == 0) {
            return "You can wear this item but not use it." + "<br>";
        } else {
            return "You do not meet the requirements to use this item." + "<br>";
        }
    } else if (cs2_928(intArg0) == 1) {
        if (cs2_925(intArg0) == 0) {
            if (compare(ocIop(intArg0, 2), "Wield") == 0) {
                return "You can use this item but not wield it." + "<br>";
            } else {
                return "You can use this item but not wear it." + "<br>";
            }
        }
    } else if (cs2_925(intArg0) == 0) {
        if (compare(ocIop(intArg0, 2), "Wield") == 0) {
            return "You do not meet the requirements to wield this item." + "<br>";
        } else {
            return "You do not meet the requirements to wear this item." + "<br>";
        }
    }
    return "";
}
