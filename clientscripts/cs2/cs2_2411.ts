/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2411

function cs2_2411(intArg0: obj): void {
    if (varbit_wtl_eluned_chanted_seed == 0) {
        inventory_setophelds_specified(ocIop(intArg0, 1), ocIcursor(intArg0, 1), ocIop(intArg0, 2), ocIcursor(intArg0, 2), "", -1, ocIop(intArg0, 4), ocIcursor(intArg0, 4), ocIop(intArg0, 5), ocIcursor(intArg0, 5), ocName(intArg0));
    } else {
        inventory_setophelds_specified("Lletya", ocIcursor(intArg0, 1), ocIop(intArg0, 2), ocIcursor(intArg0, 2), "Temple", ocIcursor(intArg0, 1), ocIop(intArg0, 4), ocIcursor(intArg0, 4), ocIop(intArg0, 5), ocIcursor(intArg0, 5), ocName(intArg0));
    }
    ccSetOnVarTransmit(hook(cs2_2412, "IioY", [event_com, event_comsubid, intArg0], [1560]));
}
