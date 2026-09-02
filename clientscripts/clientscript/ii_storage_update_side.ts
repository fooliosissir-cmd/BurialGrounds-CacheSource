/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,ii_storage_update_side]

function ii_storage_update_side(intArg0: component, intArg1: obj, intArg2: component): void {
    let int3: component = ifGetLayer(intArg0);
    let int4: number = 0;

    if (intArg1 == Obj.hunting_butterfly_net) {
        int4 = invTotal(Inv.worn, Obj.ii_magic_butterfly_net) + invTotal(Inv.inv, Obj.ii_magic_butterfly_net);
        if (int4 > 0) {
            intArg1 = Obj.ii_magic_butterfly_net;
        }
    }

    switch (intArg1) {
        case Obj.hunting_butterfly_net:
        case Obj.ii_magic_butterfly_net:
            if (int4 == 0) {
                int4 = invTotal(Inv.inv, Obj.hunting_butterfly_net) + invTotal(Inv.worn, Obj.hunting_butterfly_net);
            }
            break;
        default:
            int4 = invTotal(Inv.inv, intArg1);
            break;
    }
    ifSetText(ocName(intArg1), intArg2);

    if (int4 > 0) {
        ifSetColour(colour(0xFFFF00), intArg2);
        ifSetObject(intArg1, int4, intArg0);
    } else {
        ifSetColour(colour(0xCC0000), intArg2);
        ifSetObject(intArg1, -1, intArg0);
    }
    ifSetOutline(1, intArg0);
}
