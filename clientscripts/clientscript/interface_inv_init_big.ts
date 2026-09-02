/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_inv_init_big]

function interface_inv_init_big(intArg0: component, intArg1: inv, intArg2: number, intArg3: number, intArg4: number, intArg5: component, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, strArg6: string, strArg7: string, strArg8: string): void {
    proc_interface_inv_update_big(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8);
    ifSetOnInvTransmit(hook(clientscript_interface_inv_update_big, "IviiiIsssssssssY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, strArg5, strArg6, strArg7, strArg8], [intArg1]), intArg0);
}
