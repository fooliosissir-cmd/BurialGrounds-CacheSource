/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5560

function cs2_5560(intArg0: obj): void {
    let int1: obj = Obj.mcannonremains;

    if (intArg0 != -1) {
        int1 = intArg0;
    } else {
        int1 = invTotal(Inv.inv_623, Obj.coins);
    }
    let [str0, int2] = cs2_5564(intArg0);
    ifSetColour(int2, Component.interface_746.component_746_207);
    ifSetColour(int2, Component.interface_548.component_548_200);
    ifSetText(str0, Component.interface_746.component_746_207);
    ifSetText(str0, Component.interface_548.component_548_200);
}
