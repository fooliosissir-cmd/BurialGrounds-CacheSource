/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,interface_invother_init]

function interface_invother_init(intArg0: component, intArg1: inv, intArg2: number, intArg3: number, intArg4: number, intArg5: component, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string): void {
    proc_interface_invother_update_big(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, "null", "null", "null", "null");
    ifSetOnInvTransmit(hook(clientscript_interface_invother_update_big, "IviiiIsssssssssY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, strArg0, strArg1, strArg2, strArg3, strArg4, "null", "null", "null", "null"], [intArg1]), intArg0);
}
