/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,poh_furniture_create]

function poh_furniture_create(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    ccDeleteAll(intArg2);
    ccDeleteAll(intArg3);
    ccDeleteAll(intArg4);
    ccDeleteAll(intArg6);
    cs2_4513(intArg2, Struct.struct_1746);
    cs2_4513(intArg3, Struct.struct_1747);
    cs2_4513(intArg4, Struct.struct_1748);
    cs2_4513(intArg6, Struct.struct_1750);
    ifSetOnInvTransmit(hook(clientscript_poh_furniture_create_update, "iIIIIIIY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6], [398]), intArg1);
    ifSetOnVarcTransmit(hook(clientscript_poh_furniture_create_update, "iIIIIIIY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6], [841]), intArg1);
    proc_poh_furniture_create_update(intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6);
}
