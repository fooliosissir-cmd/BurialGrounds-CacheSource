/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,lore_pouch_counter]

function lore_pouch_counter(): void {
    let int0: obj = enumOp(type_obj, type_obj, Enum.lore_pouch_count_enum, varp_follower_obj);

    if (int0 == Obj.bones) {
        ifSetText("0", Component.interface_662.component_662_66);
        return;
    }
    let int1: number = invTotal(Inv.inv, int0);

    if (int1 > 0) {
        if (int1 > 1000000) {
            int1 = int1 / 1000000;
            ifSetText(tostring(int1) + "M", Component.interface_662.component_662_66);
            return;
        } else if (int1 > 1000) {
            int1 = int1 / 1000;
            ifSetText(tostring(int1) + "K", Component.interface_662.component_662_66);
            return;
        } else {
            ifSetText(tostring(invTotal(Inv.inv, int0)), Component.interface_662.component_662_66);
            return;
        }
    } else {
        ifSetText("0", Component.interface_662.component_662_66);
        return;
    }
}
