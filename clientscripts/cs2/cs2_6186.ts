/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6186

function cs2_6186(intArg0: obj): void {
    if (varc_1915 > 0) {
        inventory_setophelds_specified(ocIop(intArg0, 2), ocIcursor(intArg0, 2), ocIop(intArg0, 1), ocIcursor(intArg0, 1), ocIop(intArg0, 3), ocIcursor(intArg0, 3), ocIop(intArg0, 4), ocIcursor(intArg0, 4), ocIop(intArg0, 5), ocIcursor(intArg0, 5), ocName(intArg0));
    } else {
        inventory_setophelds_specified(ocIop(intArg0, 1), ocIcursor(intArg0, 1), ocIop(intArg0, 2), ocIcursor(intArg0, 2), ocIop(intArg0, 3), ocIcursor(intArg0, 3), ocIop(intArg0, 4), ocIcursor(intArg0, 4), ocIop(intArg0, 5), ocIcursor(intArg0, 5), ocName(intArg0));
    }
    ccSetOnVarTransmit(hook(cs2_6187, "IioY", [event_com, event_comsubid, intArg0], [486]));
}
